import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { doc, scored, fmtPrice, cnyPrice } from './score.mjs';

const featured = scored.slice(0, 6);

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
function fmtRefill(n) {
  if (!n) return '—';
  if (n >= 10000) return `${(n / 10000).toFixed(1)}万`;
  return n.toLocaleString();
}
function rankLabel(r) {
  if (r === 1) return '国内第1';
  if (r === 2) return '国内第2';
  if (r === 3) return '国内第3';
  if (r === 4) return '国内第4';
  return '—';
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
lines.push(`## 最值的一单：[${featured[0].platform} · ${featured[0].plan}](${featured[0].affiliate_url || featured[0].official_url})`);
lines.push('');
lines.push(`${featured[0].note} — 综合分 ${featured[0].total_score}（能力 ${featured[0].capa_pts} + 价格 ${featured[0].price_pts} + 用量 ${featured[0].quota_pts} ${featured[0].bonus_pts > 0 ? '+ 加分 ' + featured[0].bonus_pts : ''}）。`);
lines.push(`[官方订阅 →](${featured[0].affiliate_url || featured[0].official_url})`);
lines.push('');
lines.push(`## 过线排名 Top ${featured.length}`);
lines.push('');
lines.push('| # | 平台 · 套餐 | 月费 | 旗舰模型 | 模型排名 | 月请求数 | 综合分 | 加分 | 结论 |');
lines.push('|---|---|---|---|---|---|---|---|---|');
featured.forEach((p, i) => {
  const link = p.affiliate_url || p.official_url;
  lines.push(`| ${i + 1} | [${p.platform} · ${p.plan}](${link}) | ${fmtPrice(p)} | ${p.model_flagship} | ${rankLabel(p.capability_rank)} | ${fmtRefill(p.refill_month)} | ${p.total_score} | ${p.bonus_pts > 0 ? '+'+p.bonus_pts : ''} | ${p.verdict} |`);
});
lines.push('');
lines.push(`> 未过线套餐（${doc.plans.length - featured.length} 款）见 [data/plans.yaml](https://github.com/Non-existent987/codingplanguide/blob/main/data/plans.yaml) 或 [codingplanguide.com/table](https://codingplanguide.com/table)`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## OpenCode Go 专属：模型用量详情');
lines.push('');
lines.push('OpenCode Go 包含 18 大模型，各模型独立请求配额如下：');
lines.push('');
lines.push('| 模型 | 每5小时请求数 | 每周请求数 | 每月请求数 | AA全球排名 |');
lines.push('|---|---|---|---|---|');
const ocModels = [
  { name: 'Kimi K3', h5: 110, week: 250, month: 490, aa: 4 },
  { name: 'Qwen3.8 Max', h5: 160, week: 400, month: 810, aa: 5 },
  { name: 'Grok 4.5', h5: 120, week: 300, month: 600, aa: 10 },
  { name: 'GLM-5.2', h5: 880, week: 2150, month: 4300, aa: 15 },
  { name: 'GPT-5.6 Luna', h5: 2050, week: 5100, month: 10250, aa: 16 },
  { name: 'DeepSeek V4 Flash', h5: 31650, week: 79050, month: 158150, aa: 18 },
  { name: 'Qwen3.7 Max', h5: 340, week: 840, month: 1690, aa: 22 },
  { name: 'MiniMax M3', h5: 3200, week: 8000, month: 16000, aa: 24 },
  { name: 'DeepSeek V4 Pro', h5: 3450, week: 8550, month: 17150, aa: 25 },
  { name: 'Kimi K2.6', h5: 1150, week: 2880, month: 5750, aa: 26 },
  { name: 'Kimi K2.7 Code', h5: 1350, week: 3380, month: 6750, aa: 31 },
  { name: 'MiMo-V2.5-Pro', h5: 3250, week: 8150, month: 16300, aa: 32 },
  { name: 'Hy3', h5: 4300, week: 10750, month: 21500, aa: 34 },
  { name: 'GLM-5.1', h5: 880, week: 2150, month: 4300, aa: 42 },
  { name: 'Qwen3.6 Plus', h5: 3300, week: 8200, month: 16300, aa: 47 },
  { name: 'Qwen3.7 Plus', h5: 4300, week: 10800, month: 21600, aa: 51 },
  { name: 'MiniMax M2.7', h5: 3400, week: 8500, month: 17000, aa: 53 },
  { name: 'MiMo-V2.5', h5: 30100, week: 75200, month: 150400, aa: 56 },
];
ocModels.forEach(m => {
  lines.push(`| ${m.name} | ${m.h5.toLocaleString()} | ${m.week.toLocaleString()} | ${m.month.toLocaleString()} | #${m.aa} |`);
});
lines.push('');
lines.push('> AA全球排名 = Artificial Analysis Intelligence Index（2026-08-11）');
lines.push('>');
lines.push('> DeepSeek V4 Flash 月请求 15.8 万次，搭配 Kimi K3 / Qwen3.8 Max 旗舰使用，日常编程几乎用不完。流畅无中断、无告警、无扣量问题。');
lines.push('>');
lines.push(`> [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## DeepSeek V4 直连 API');
lines.push('');
lines.push('DeepSeek V4 发布了，能力很强——V4 Flash 0731 全球排 #18（国内第4），V4 Pro 全球 #25（国内第7）。如果只是自己写代码用，直连官方 API 按量付费，比任何套餐都便宜，也没有额度焦虑。');
lines.push('');
lines.push('| 模型 | 输入 / 百万 tokens（缓存命中） | 输入 / 百万 tokens（未命中） | 输出 / 百万 tokens | AA 全球排名 |');
lines.push('|---|---|---|---|---|');
lines.push('| **DeepSeek V4 Flash** | $0.0028 | $0.14 | $0.28 | #18 |');
lines.push('| **DeepSeek V4 Pro** | $0.003625 | $0.435 | $0.87 | #25 |');
lines.push('');
lines.push('> 以 V4 Flash 为例：输出 100 万 tokens 只要 $0.28（约 ¥2），写一个月代码花不了几十块。而套餐里那些"月 ¥40 额度池"，大部分你根本用不完。');
lines.push('>');
lines.push('> [DeepSeek 官方 API 定价 →](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)');
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 模型能力排名 Top 25');
lines.push('');
lines.push('| # | 模型 | 图 | 分数 |');
lines.push('|---|---|---|---|');
const top25 = [
  { name: 'Claude Opus 5', score: 63, flag: '🇺🇸' },
  { name: 'Claude Fable 5', score: 62, flag: '🇺🇸' },
  { name: 'GPT-5.6 Sol (max)', score: 61, flag: '🇺🇸' },
  { name: 'Kimi K3 (max)', score: 60, flag: '🇨🇳', cn: true },
  { name: 'Qwen3.8 Max', score: 58, flag: '🇨🇳', cn: true },
  { name: 'Claude Opus 4.8', score: 57, flag: '🇺🇸' },
  { name: 'Muse Spark 1.2 (xhigh)', score: 57, flag: '🇺🇸' },
  { name: 'GPT-5.6 Terra (max)', score: 57, flag: '🇺🇸' },
  { name: 'GPT-5.5 (xhigh)', score: 56, flag: '🇺🇸' },
  { name: 'Grok 4.5 (high)', score: 56, flag: '🇺🇸' },
  { name: 'Claude Sonnet 5', score: 55, flag: '🇺🇸' },
  { name: 'Claude Opus 4.7', score: 55, flag: '🇺🇸' },
  { name: 'Muse Spark 1.1 (xhigh)', score: 53, flag: '🇺🇸' },
  { name: 'GPT-5.4 (xhigh)', score: 53, flag: '🇺🇸' },
  { name: 'GLM-5.2 (max)', score: 53, flag: '🇨🇳', cn: true },
  { name: 'GPT-5.6 Luna (max)', score: 52, flag: '🇺🇸' },
  { name: 'Gemini 3.5 Flash (high)', score: 52, flag: '🇺🇸' },
  { name: 'DeepSeek V4 Flash 0731', score: 52, flag: '🇨🇳', cn: true },
  { name: 'Gemini 3.6 Flash (high)', score: 52, flag: '🇺🇸' },
  { name: 'Claude Sonnet 4.6', score: 48, flag: '🇺🇸' },
  { name: 'Gemini 3.1 Pro Preview', score: 48, flag: '🇺🇸' },
  { name: 'Qwen3.7 Max', score: 47, flag: '🇨🇳', cn: true },
  { name: 'GPT-5.3 Codex (xhigh)', score: 46, flag: '🇺🇸' },
  { name: 'MiniMax-M3', score: 45, flag: '🇨🇳', cn: true },
  { name: 'DeepSeek V4 Pro', score: 45, flag: '🇨🇳', cn: true },
];
const barMax = 30;
top25.forEach((m, i) => {
  const bar = '█'.repeat(Math.round((m.score / 63) * barMax));
  const nameStr = m.cn ? `**${m.flag} ${m.name}**` : `${m.flag} ${m.name}`;
  lines.push(`| ${i + 1} | ${nameStr} | ${bar} | ${m.score} |`);
});
lines.push('');
lines.push('> 来源：[Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) Intelligence Index');
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 多维排名');
lines.push('');
lines.push('参考 [arena.ai Agent Leaderboard](https://arena.ai/leaderboard/agent) 的多信号排名方法，每个维度独立排序。');
lines.push('');
lines.push('### 综合排名 TOP 6');
lines.push('');
lines.push('| # | 平台 · 套餐 | 月费 | 综合分 | 能力分 | 价格分 | 用量分 | 体验加分 |');
lines.push('|---|---|---|---|---|---|---|---|');
lines.push(...scored.slice(0, 6).map((p, i) =>
  `| ${i+1} | [${p.platform} · ${p.plan}](${p.affiliate_url || p.official_url}) | ${fmtPrice(p)} | ${p.total_score} | ${p.capa_pts} | ${p.price_pts} | ${p.quota_pts} | ${p.bonus_pts > 0 ? '+'+p.bonus_pts : '—'} |`
));
lines.push('');
lines.push('### 能力排名 TOP 6');
lines.push('');
lines.push('| # | 平台 · 套餐 | 月费 | 旗舰模型 | 能力分 |');
lines.push('|---|---|---|---|---|');
const capSorted = [...scored].sort((a, b) => b.capa_pts - a.capa_pts || a.total_score - b.total_score);
lines.push(...capSorted.slice(0, 6).map((p, i) =>
  `| ${i+1} | [${p.platform} · ${p.plan}](${p.affiliate_url || p.official_url}) | ${fmtPrice(p)} | ${p.model_flagship} | ${p.capa_pts} |`
));
lines.push('');
lines.push('### 性价比排名 TOP 6');
lines.push('');
lines.push('| # | 平台 · 套餐 | 月费 | 性价比分 | 能力分 | 价格分 |');
lines.push('|---|---|---|---|---|---|');
const valSorted = [...scored].sort((a, b) => {
  const va = b.capa_pts / cnyPrice(b) * 100; const vb = a.capa_pts / cnyPrice(a) * 100;
  return va - vb;
});
lines.push(...valSorted.slice(0, 6).map((p, i) => {
  const vs = (p.capa_pts / cnyPrice(p) * 100).toFixed(1);
  return `| ${i+1} | [${p.platform} · ${p.plan}](${p.affiliate_url || p.official_url}) | ${fmtPrice(p)} | ${vs} | ${p.capa_pts} | ${p.price_pts} |`;
}));
lines.push('');
lines.push('### 体验排名 TOP 6');
lines.push('');
lines.push('| # | 平台 · 套餐 | 月费 | 体验加分 | 模型数 | 难度 | 首月优惠 |');
lines.push('|---|---|---|---|---|---|---|');
const expSorted = [...scored].sort((a, b) => b.bonus_pts - a.bonus_pts);
lines.push(...expSorted.slice(0, 6).map((p, i) =>
  `| ${i+1} | [${p.platform} · ${p.plan}](${p.affiliate_url || p.official_url}) | ${fmtPrice(p)} | +${p.bonus_pts} | ${(p.models||[]).length} | ${p.purchase_difficulty === 'easy' ? '简单' : p.purchase_difficulty === 'normal' ? '一般' : '困难'} | ${p.note?.includes('首月') ? '是' : '否'} |`
));
lines.push('');
lines.push(`> 完整多维排名见 [codingplanguide.com/leaderboard](https://codingplanguide.com/leaderboard)`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 评分方法');
lines.push('');
lines.push(`综合分 = 能力分×0.80 + 价格分×0.60 + 用量分×0.60 + 体验加分（满分100，加分上限20）。能力分梯队：国内第1=50、第2=25、第3=10、第4=5。价格分线性：50×(1−价格/¥150)。用量分线性：(月请求/200000)×50。体验加分：基于模型池大小、购买难度、首月优惠、厂商多样性等，上限20分。详见 [/method](https://codingplanguide.com/method)。`);
lines.push('');
lines.push('## 中立声明');
lines.push('');
lines.push('数据以官方公布为准。');
lines.push('');
lines.push('## License');
lines.push('');
lines.push('CC BY 4.0');
const readme = lines.join('\n');
writeFileSync(join(root, 'README.md'), readme, 'utf8');
console.log(`[gen:readme] README.md 已生成，${featured.length} 条 featured。`);
