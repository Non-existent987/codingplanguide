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
lines.push('OpenCode Go 包含 25 大模型，各模型独立请求配额如下（额度按 $12/5小时、$30/周、$60/月折算）：');
lines.push('');
lines.push('| 模型 | 每5小时请求数 | 每周请求数 | 每月请求数 | AA全球排名 |');
lines.push('|---|---|---|---|---|');
const ocModels = [
  { name: 'Grok 4.6', h5: 169, week: 423, month: 845, aa: 8 },
  { name: 'Kimi K3', h5: 110, week: 250, month: 490, aa: 10 },
  { name: 'GLM-5.3', h5: 220, week: 540, month: 1080, aa: 7 },
  { name: 'Qwen3.8 Max', h5: 160, week: 400, month: 810, aa: 6 },
  { name: 'GLM-5.3-Flash', h5: 1580, week: 3950, month: 7900, aa: 16 },
  { name: 'Muse Spark 1.2 Contributor', h5: 45300, week: 113300, month: 226600, aa: 4 },
  { name: 'Qwen3.8 Flash', h5: 5400, week: 13500, month: 27000, aa: 19 },
  { name: 'DeepSeek V4 Pro', h5: 1050, week: 2600, month: 5200, aa: null },
  { name: 'GLM-5.2', h5: 880, week: 2150, month: 4300, aa: null },
  { name: 'GPT-5.6 Luna', h5: 2050, week: 5100, month: 10250, aa: 25 },
  { name: 'DeepSeek V4 Flash', h5: 7600, week: 18900, month: 37800, aa: null },
  { name: 'DeepSeek V4 Flash Vision Exp', h5: 3800, week: 9450, month: 18900, aa: null },
  { name: 'Qwen3.7 Max', h5: 340, week: 840, month: 1690, aa: null },
  { name: 'MiniMax M3', h5: 3200, week: 8000, month: 16000, aa: null },
  { name: 'Kimi K2.6', h5: 1150, week: 2880, month: 5750, aa: null },
  { name: 'Kimi K2.7 Code', h5: 1350, week: 3380, month: 6750, aa: null },
  { name: 'MiMo-V2.5-Pro', h5: 3250, week: 8150, month: 16300, aa: null },
  { name: 'Hy3', h5: 4300, week: 10750, month: 21500, aa: null },
  { name: 'GLM-5.1', h5: 880, week: 2150, month: 4300, aa: null },
  { name: 'Qwen3.6 Plus', h5: 3300, week: 8200, month: 16300, aa: null },
  { name: 'Qwen3.7 Plus', h5: 4300, week: 10800, month: 21600, aa: null },
  { name: 'MiniMax M2.7', h5: 3400, week: 8500, month: 17000, aa: null },
  { name: 'MiMo-V2.5', h5: 30100, week: 75200, month: 150400, aa: null },
  { name: 'LongCat-2.0', h5: 11400, week: 28600, month: 57200, aa: null },
  { name: 'Hy4 preview', h5: 1350, week: 3380, month: 6770, aa: null },
];
ocModels.forEach(m => {
  lines.push(`| ${m.name} | ${m.h5.toLocaleString()} | ${m.week.toLocaleString()} | ${m.month.toLocaleString()} | ${m.aa ? '#' + m.aa : '—'} |`);
});
lines.push('');
lines.push('> AA全球排名 = Artificial Analysis Intelligence Index（2026-09-21）');
lines.push('>');
lines.push('> OpenCode Go 池内旗舰：Qwen3.8 Max / GLM-5.3 并列全球 #17-18，GLM-5.3-Flash 全球 #25，Step 5 Preview 全球 #19；一个 $10 订阅覆盖国内前 3。流畅无中断、无告警、无扣量问题。');
lines.push('>');
lines.push(`> [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 阶跃星辰 Step 5 Preview');
lines.push('');
lines.push('9/19 发布的 Step 5 Preview，AA 智能指数 44 分，与 Kimi K3 持平，Terminal-Bench 4.0 拿到 33.3%（接近 GPT-5.6 Terra）。Step Plan 走月池 Credit（1M Credit = ¥1），月内任意时段消耗，**没有 5 小时限额**——不存在写着写着被掐断的体验。');
lines.push('');
lines.push('| 档位 | 月费 | 月度 Credit | 5 小时限额 | 备注 |');
lines.push('|---|---|---|---|---|');
lines.push('| **Flash Mini** | ¥49 | 400M | 无 | 入门够用，含全部旗舰模型 |');
lines.push('| **Flash Plus** | ¥99 | 1600M | 无 | 加优先 API 速率 + 优先技术支持 |');
lines.push('');
lines.push('> 另有 Pro ¥199/8000M、Max ¥699/40000M 两档（超个人预算上限）。新用户注册送 99 元套餐额度，完成首次调用再得 15 天，邀请好友累计最高 45 天。Step Plan 不适用按充值金额划分的阶梯限速。');
lines.push('>');
lines.push('> [阶跃 Step Plan 官网 →](https://platform.stepfun.com/docs/zh/step-plan/overview)');
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 便宜用量 · Top 3');
lines.push('');
lines.push('旗舰模型换代很快，但"够用 + 量大"的需求没变。按当前榜单（2026-09-21）重新排出的 3 条路：');
lines.push('');
lines.push('**No.1 · 阿里·百炼 Token Plan Lite** — ¥39/月。Qwen3.8 Max 现在是**国内第 1**（全球 #17，45 分），和 GLM-5.3 同分。¥39 拿到国内最强模型 + 2500 Credits/周，综合分 76.7 居首。');
lines.push(`- [官方订阅 阿里·百炼 →](https://www.aliyun.com/benefit/scene/tokenplan)`);
lines.push('');
lines.push('**No.2 · OpenCode Go** — $10/月（≈¥72）。25 模型一 key 全包：Qwen3.8 Max + GLM-5.3 + GLM-5.3-Flash + Step 5 Preview，**国内前 3 全在池里**。$10 一个订阅覆盖多家旗舰，不用为换模型重新付费。');
lines.push(`- [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)`);
lines.push('');
lines.push('**No.3 · 阶跃星辰 Step Plan Flash Plus** — ¥99/月。Step 5 Preview 44 分追平 Kimi K3，1600M Credits 月池，**无 5 小时限额**。走量场景不用担心被掐断，新用户还有最长 75 天福利。');
lines.push(`- [官方订阅 阶跃星辰 →](https://platform.stepfun.com/docs/zh/step-plan/overview)`);
lines.push('');
lines.push('---');
lines.push('');
lines.push('## 模型能力排名 Top 25');
lines.push('');
lines.push('| # | 模型 | 图 | 分数 |');
lines.push('|---|---|---|---|');
const top25 = [
  { name: 'Claude Fable 5.1 (max)', score: 53, flag: '🇺🇸' },
  { name: 'GPT-6 Astra (max)', score: 53, flag: '🇺🇸' },
  { name: 'Claude Opus 5 (max)', score: 51, flag: '🇺🇸' },
  { name: 'Muse Spark 1.3 (max)', score: 48, flag: '🇺🇸' },
  { name: 'GPT-5.6 Sol (max)', score: 47, flag: '🇺🇸' },
  { name: 'Qwen3.8 Max (0902)', score: 45, flag: '🇨🇳', cn: true },
  { name: 'GLM-5.3 (max)', score: 45, flag: '🇨🇳', cn: true },
  { name: 'Grok 4.6 (high)', score: 44, flag: '🇺🇸' },
  { name: 'Step 5 Preview', score: 44, flag: '🇨🇳', cn: true },
  { name: 'Kimi K3 (max)', score: 44, flag: '🇨🇳', cn: true },
  { name: 'Grok 4.6 (xhigh)', score: 44, flag: '🇺🇸' },
  { name: 'GPT-5.6 Sol (xhigh)', score: 44, flag: '🇺🇸' },
  { name: 'Grok 4.6 (medium)', score: 43, flag: '🇺🇸' },
  { name: 'GPT-5.6 Sol (high)', score: 42, flag: '🇺🇸' },
  { name: 'GPT-5.6 Terra (max)', score: 42, flag: '🇺🇸' },
  { name: 'GLM-5.3-Flash', score: 42, flag: '🇨🇳', cn: true },
  { name: 'Gemini 3.8 Flash (high)', score: 41, flag: '🇺🇸' },
  { name: 'Qwen3.8 2.4T A95B', score: 40, flag: '🇨🇳', cn: true },
  { name: 'Qwen3.8-Flash-Next', score: 40, flag: '🇨🇳', cn: true },
  { name: 'Gemini 3.8 Flash (medium)', score: 40, flag: '🇺🇸' },
  { name: 'DeepSeek V4.1 Flash (max)', score: 39, flag: '🇨🇳', cn: true },
  { name: 'Claude Opus 5 (low)', score: 39, flag: '🇺🇸' },
  { name: 'Claude Sonnet 5 (max)', score: 38, flag: '🇺🇸' },
  { name: 'GPT-5.6 Terra (xhigh)', score: 38, flag: '🇺🇸' },
  { name: 'GPT-5.6 Luna (max)', score: 37, flag: '🇺🇸' },
];
const barMax = 30;
top25.forEach((m, i) => {
  const bar = '█'.repeat(Math.round((m.score / 53) * barMax));
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
