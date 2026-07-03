import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { doc, scored } from './score.mjs';

// 人工微调 featured 顺序
const userOrder = ['volcengine-lite', 'glm-lite', 'xunfei-pro', 'opencode-go', 'glm-pro'];
const featured = userOrder.map(id => scored.find(p => p.id === id)).filter(Boolean);
for (const s of scored) { if (!featured.find(p => p.id === s.id)) featured.push(s); }

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

function fmtPrice(p) {
  return p.currency === 'usd' ? `$${p.price_monthly}` : `¥${p.price_monthly}`;
}
function fmtTokens(m) {
  if (!m) return '—';
  if (m >= 1000) return `${(m / 1000).toFixed(2)}B`;
  return `${m}M`;
}

const fdate = doc.meta?.updated || '-';
const cap = doc.meta?.price_cap || 150;

const lines = [];
lines.push('# Coding Plan Guide');
lines.push('');
lines.push(`> AI 编程 · 怎么选最值。每月不超 ¥${cap}，模型就得用最强的。`);
lines.push('>');
lines.push(`> 更新于 ${fdate} · 数据驱动：[方法说明](https://codingplanguide.com/method)`);
lines.push('');
lines.push('---');
lines.push('');
lines.push(`## 最值的一单：${featured[0].platform} · ${featured[0].plan}`);
lines.push('');
lines.push(`${featured[0].note} — 综合分 ${featured[0].total_score}（价格 ${featured[0].price_score} + 能力 ${featured[0].capability_score} + 用量 ${featured[0].quota_score}）。`);
if (featured[0].affiliate_url) {
  lines.push(`[去订阅](${featured[0].affiliate_url})`);
}
lines.push('');
lines.push(`## 过线排名 Top ${featured.length}`);
lines.push('');
lines.push('| # | 平台 · 套餐 | 月费 | 旗舰模型 | 月 Token | 综合分 | 结论 |');
lines.push('|---|---|---|---|---|---|---|');
featured.forEach((p, i) => {
  lines.push(`| ${i + 1} | ${p.platform} · ${p.plan} | ${fmtPrice(p)} | ${p.model_flagship} | ${fmtTokens(p.measured_monthly_tokens_M)} | ${p.total_score} | ${p.verdict} |`);
});
lines.push('');
lines.push(`> 全部套餐（含未过线 ${doc.plans.length - featured.length} 款）见 [codingplanguide.com/table](https://codingplanguide.com/table)`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 评分方法');
lines.push('');
lines.push(`先过滤：价格 ≤ ¥${cap}/月 + 模型能力 ≥ 国内前3(T0)。然后综合分 = 价格分×0.45 + 能力分×0.35 + 用量分×0.20。详见 [/method](https://codingplanguide.com/method)。`);
lines.push('');
lines.push('## 中立声明');
lines.push('');
lines.push('部分链接为推荐链接（返利不增加你的花费）。数据以官方公布为准。');
lines.push('');
lines.push('## License');
lines.push('');
lines.push('CC BY 4.0');
const readme = lines.join('\n');
writeFileSync(join(root, 'README.md'), readme, 'utf8');
console.log(`[gen:readme] README.md 已生成，${featured.length} 条 featured。`);