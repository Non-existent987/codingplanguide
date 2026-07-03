// 打分引擎 — 透明公式公开于 /method
// 输入: data/plans.yaml
// 输出: ranked（全量排序）, filtered（过线排序）, featured（top N）
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { parse } from 'yaml';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const doc = parse(readFileSync(join(root, 'data', 'plans.yaml'), 'utf8'));

const PRICE_CAP = doc.meta.price_cap || 150;         // ¥ 软上限
const CAPA_FLOOR = doc.meta.capability_floor || 7.5; // 能力硬门槛
const USD2CNY = 7.2;
const FEATURED_MAX = 6;

function cnyPrice(p) {
  return p.currency === 'usd' ? p.price_monthly * USD2CNY : p.price_monthly;
}

// ---------- 第 1 步: 过滤（价格 ≤ cap，能力 ≥ floor）----------
const filtered = doc.plans.filter(p => {
  const priceCNY = cnyPrice(p);
  return priceCNY <= PRICE_CAP && p.capability_score >= CAPA_FLOOR;
});

// ---------- 第 2 步: 算分 ----------
// 价格分（逆序 min-max → 0–10，越便宜越高）
const prices = filtered.map(p => cnyPrice(p));
const minP = Math.min(...prices);
const maxP = Math.max(...prices);
const pSpan = Math.max(1e-9, maxP - minP);

// 用量分（measured_monthly_tokens_M 归一化，越大多越好）
const quotas = filtered.map(p => p.measured_monthly_tokens_M ?? 0);
const maxQ = Math.max(...quotas);
const qSpan = Math.max(1e-9, maxQ);

const scored = filtered.map(p => {
  const rawPrice = cnyPrice(p);
  const priceScore = pSpan < 1e-6 ? 10 : ((maxP - rawPrice) / pSpan) * 10;

  const rawQuota = p.measured_monthly_tokens_M ?? 0;
  const quotaScore = qSpan < 1e-6 ? 10 : (rawQuota / qSpan) * 10;

  const total =
    priceScore * 0.45 +
    p.capability_score * 0.35 +
    quotaScore * 0.20;

  return {
    ...p,
    price_score: Number(priceScore.toFixed(2)),
    quota_score: Number(quotaScore.toFixed(2)),
    total_score: Number(total.toFixed(2)),
  };
})
  .sort((a, b) => b.total_score - a.total_score);

// ---------- 第 3 步: 全量排序（未过线也入，但标注原因）----------
const outOfBand = doc.plans
  .filter(p => !(cnyPrice(p) <= PRICE_CAP && p.capability_score >= CAPA_FLOOR))
  .map(p => {
    const reasons = [];
    if (cnyPrice(p) > PRICE_CAP) reasons.push(`超预算(>¥${PRICE_CAP})`);
    if (p.capability_score < CAPA_FLOOR) reasons.push(`模型未达国内前3(能力<${CAPA_FLOOR})`);
    return { ...p, oob_reason: reasons.join('；'), price_score: 0, quota_score: 0, total_score: 0 };
  });

const ranked = [...scored, ...outOfBand];
const featured = scored.slice(0, Math.min(FEATURED_MAX, scored.length));

export { doc, ranked, featured, filtered, scored, minP, maxP, maxQ, USD2CNY, PRICE_CAP, CAPA_FLOOR };

// 运行时打印
if (process.argv[1] && process.argv[1].endsWith('score.mjs')) {
  console.log('═══ 过线名单（价格≤¥150，能力≥国内前3）═══');
  for (const r of scored) {
    console.log(
      `#${(featured.indexOf(r) + 1).toString().padStart(2)} ` +
      `${r.total_score.toFixed(1).padStart(4)}分 | ` +
      `${r.platform} ${r.plan} | ¥${cnyPrice(r)} | ` +
      `价格${r.price_score.toFixed(1)} 能力${r.capability_score.toFixed(1)} 用量${r.quota_score.toFixed(1)}`
    );
  }
  console.log(`\n- featured: ${featured.length} 款`);
  console.log(`- 未过线: ${outOfBand.length} 款`);
}