// 生成周报数据：对比最近两期 price-watch 快照，输出 data/weekly.json
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dir = join(__dirname, '..', 'data', 'snapshots');

const WATCHED = ['price_monthly', 'price_first_month', 'refill_5h', 'refill_week', 'refill_month',
  'capability_score', 'capability_rank', 'model_flagship', 'verdict', 'featured', 'note'];

function load(file) {
  const d = JSON.parse(readFileSync(join(dir, file), 'utf8'));
  const plans = Array.isArray(d.plans) ? d.plans : Object.values(d.plans);
  return { date: d.date, map: Object.fromEntries(plans.map(p => [p.id, p])) };
}

const files = readdirSync(dir).filter(f => f.endsWith('.json')).sort();
if (files.length < 2) {
  writeFileSync(join(__dirname, '..', 'data', 'weekly.json'),
    JSON.stringify({ from: null, to: null, changes: [] }, null, 2));
  console.log('[gen:weekly] 快照不足 2 期，输出空周报。');
  process.exit(0);
}

const prev = load(files[files.length - 2]);
const curr = load(files[files.length - 1]);
const changes = [];

for (const id of [...new Set([...Object.keys(prev.map), ...Object.keys(curr.map)])].sort()) {
  const a = prev.map[id], b = curr.map[id];
  if (!a) { changes.push({ id, type: 'new', platform: b.platform, plan: b.plan }); continue; }
  if (!b) { changes.push({ id, type: 'removed', platform: a.platform, plan: a.plan }); continue; }
  const diffs = [];
  for (const f of WATCHED) {
    if (JSON.stringify(a[f]) !== JSON.stringify(b[f])) diffs.push({ field: f, from: a[f], to: b[f] });
  }
  if (diffs.length) changes.push({ id, type: 'changed', platform: b.platform, plan: b.plan, diffs });
}

writeFileSync(join(__dirname, '..', 'data', 'weekly.json'),
  JSON.stringify({ from: prev.date, to: curr.date, changes }, null, 2));
console.log(`[gen:weekly] ${prev.date} → ${curr.date}：${changes.length} 项变化。`);
