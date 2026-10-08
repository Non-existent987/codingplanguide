# Coding Plan Guide

> AI 编程 · 怎么选最值。每月不超 ¥150，模型就得用最强的。
>
> 更新于 2026-10-08 · 数据驱动：[方法说明](https://codingplanguide.com/method)

---

## 最值的一单：[小米·MiMo · Lite](https://mimo.xiaomi.com/)

MiMo-V2.6-Pro 国内第1（AA 46分，9/22 发布），¥39最低价之一，41亿 Credits/月。 — 综合分 70.2（能力 50 + 价格 37 + 用量 0 + 加分 8）。
[官方订阅 →](https://mimo.xiaomi.com/)

## 过线排名 Top 6

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 模型排名 | 月请求数 | 综合分 | 加分 | 结论 |
|---|---|---|---|---|---|---|---|---|
| 1 | [小米·MiMo · Lite](https://mimo.xiaomi.com/) | ¥39 | MiMo-V2.6-Pro | 国内第1 | — | 70.2 | +8 | 推荐 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | Qwen-3.8-Max | 国内第2 | 1.0万 | 55.7 | +12 | 推荐 |
| 3 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | Qwen3.8 Max + GLM-5.3 + Step 5 Preview 领衔 | 国内第2 | 4,300 | 48.25 | +12 | 推荐 |
| 4 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | Qwen-3.8-Max | 国内第2 | 4.3万 | 40.65 | +12 | 推荐 |
| 5 | [阶跃星辰 · Step Plan Flash Mini](https://platform.stepfun.com/docs/zh/step-plan/overview) | ¥49 | Step 5 Preview | 国内第4 | — | 31.2 | +7 | 推荐 |
| 6 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | GLM-5.3 | 国内第3 | 4.3万 | 27.85 | +7 | 推荐 |

> 未过线套餐（30 款）见 [data/plans.yaml](https://github.com/Non-existent987/codingplanguide/blob/main/data/plans.yaml) 或 [codingplanguide.com/table](https://codingplanguide.com/table)

---

## OpenCode Go 专属：模型用量详情

OpenCode Go 包含 25 大模型，各模型独立请求配额如下（额度按 $12/5小时、$30/周、$60/月折算）：

| 模型 | 每5小时请求数 | 每周请求数 | 每月请求数 | AA全球排名 |
|---|---|---|---|---|
| Grok 4.6 | 169 | 423 | 845 | — |
| Kimi K3 | 110 | 250 | 490 | #13 |
| GLM-5.3 | 220 | 540 | 1,080 | #11 |
| Qwen3.8 Max | 160 | 400 | 810 | #10 |
| GLM-5.3-Flash | 1,580 | 3,950 | 7,900 | #16 |
| Muse Spark 1.2 Contributor | 45,300 | 113,300 | 226,600 | — |
| Qwen3.8 Flash | 5,400 | 13,500 | 27,000 | — |
| DeepSeek V4 Pro | 1,050 | 2,600 | 5,200 | — |
| GLM-5.2 | 880 | 2,150 | 4,300 | — |
| GPT-5.6 Luna | 2,050 | 5,100 | 10,250 | #23 |
| DeepSeek V4 Flash | 7,600 | 18,900 | 37,800 | — |
| DeepSeek V4 Flash Vision Exp | 3,800 | 9,450 | 18,900 | — |
| Qwen3.7 Max | 340 | 840 | 1,690 | — |
| MiniMax M3 | 3,200 | 8,000 | 16,000 | — |
| Kimi K2.6 | 1,150 | 2,880 | 5,750 | — |
| Kimi K2.7 Code | 1,350 | 3,380 | 6,750 | — |
| MiMo-V2.5-Pro | 3,250 | 8,150 | 16,300 | — |
| Hy3 | 4,300 | 10,750 | 21,500 | — |
| GLM-5.1 | 880 | 2,150 | 4,300 | — |
| Qwen3.6 Plus | 3,300 | 8,200 | 16,300 | — |
| Qwen3.7 Plus | 4,300 | 10,800 | 21,600 | — |
| MiniMax M2.7 | 3,400 | 8,500 | 17,000 | — |
| MiMo-V2.5 | 30,100 | 75,200 | 150,400 | — |
| LongCat-2.0 | 11,400 | 28,600 | 57,200 | — |
| Hy4 preview | 1,350 | 3,380 | 6,770 | — |

> AA全球排名 = Artificial Analysis Intelligence Index（2026-10-08）；「—」表示未进全球前 25。
>
> OpenCode Go 池内旗舰：Qwen3.8 Max（国内第2）、GLM-5.3（国内第3）、Step 5 Preview（国内第4）、GLM-5.3-Flash；一个 $10 订阅覆盖国内前 4 中的 3 席。流畅无中断、无告警、无扣量问题。
>
> [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)

---

## 阶跃星辰 Step 5 Preview

9/19 发布的 Step 5 Preview，AA 智能指数 44 分，**国内第 4**（与 Kimi K3 并列），Terminal-Bench 4.0 拿到 33.3%。Step Plan 走月池 Credit（1M Credit = ¥1），月内任意时段消耗，**没有 5 小时限额**——不存在写着写着被掐断的体验。

| 档位 | 月费 | 月度 Credit | 5 小时限额 | 备注 |
|---|---|---|---|---|
| **Flash Mini** | ¥49 | 400M | 无 | 入门够用，含全部旗舰模型 |
| **Flash Plus** | ¥99 | 1600M | 无 | 加优先 API 速率 + 优先技术支持 |

> 另有 Pro ¥199/8000M、Max ¥699/40000M 两档（超个人预算上限）。新用户注册送 99 元套餐额度，完成首次调用再得 15 天，邀请好友累计最高 45 天。Step Plan 不适用按充值金额划分的阶梯限速。
>
> [阶跃 Step Plan 官网 →](https://platform.stepfun.com/docs/zh/step-plan/overview)

---

## 便宜用量 · Top 3

旗舰模型换代很快，但"够用 + 量大"的需求没变。按当前榜单（2026-10-08）重新排出的 3 条路：

**No.1 · 小米 · MiMo Lite** — ¥39/月。MiMo-V2.6-Pro 现在**国内第 1**（AA 46 分，9/22 发布），超过 Qwen3.8 Max 与 GLM-5.3，也是目前开源权重里的最高分。¥39 是全市场价格最低档之一，41 亿 Credits/月，支持 Cursor / Cline / Zed。
- [官方订阅 小米 MiMo →](https://mimo.xiaomi.com/)

**No.2 · 阿里·百炼 Token Plan Lite** — ¥39/月。Qwen3.8 Max 国内第 2（45 分），与 GLM-5.3 同分。¥39 拿到第一梯队模型 + 2500 Credits/周。Coding Plan Lite 已停售，Token Plan 现在是个人版入口。
- [官方订阅 阿里·百炼 →](https://www.aliyun.com/benefit/scene/tokenplan)

**No.3 · OpenCode Go** — $10/月（≈¥72）。25 模型一 key 全包：Qwen3.8 Max + GLM-5.3 + GLM-5.3-Flash + Step 5 Preview，**国内前 4 占 3 席**。$10 一个订阅覆盖多家旗舰，不用为换模型重新付费。
- [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)

---

## 模型能力排名 Top 25

| # | 模型 | 图 | 分数 |
|---|---|---|---|
| 1 | 🇺🇸 Claude Opus 5.5 (max) | ██████████████████████████████ | 58 |
| 2 | 🇺🇸 Claude Sonnet 5.5 (max) | █████████████████████████████ | 56 |
| 3 | 🇺🇸 Claude Fable 5.1 (max) | ███████████████████████████ | 53 |
| 4 | 🇺🇸 GPT-6 Astra (max) | ███████████████████████████ | 53 |
| 5 | 🇺🇸 Gemini 4 Argon (high) | ███████████████████████████ | 53 |
| 6 | 🇺🇸 GPT-6.1 Sol (max) | ███████████████████████████ | 52 |
| 7 | 🇺🇸 Muse Spark 1.3 (max) | █████████████████████████ | 48 |
| 8 | 🇺🇸 Grok 4.7 (xhigh) | ████████████████████████ | 46 |
| 9 | **🇨🇳 MiMo-V2.6-Pro** | ████████████████████████ | 46 |
| 10 | **🇨🇳 Qwen3.8 Max (0902)** | ███████████████████████ | 45 |
| 11 | **🇨🇳 GLM-5.3 (max)** | ███████████████████████ | 45 |
| 12 | **🇨🇳 Step 5 Preview** | ███████████████████████ | 44 |
| 13 | **🇨🇳 Kimi K3 (max)** | ███████████████████████ | 44 |
| 14 | 🇺🇸 Claude Haiku 5.5 (max) | ██████████████████████ | 43 |
| 15 | 🇺🇸 GPT-5.6 Terra (max) | ██████████████████████ | 42 |
| 16 | **🇨🇳 GLM-5.3-Flash** | ██████████████████████ | 42 |
| 17 | **🇨🇳 Ling 3.1 Flash** | █████████████████████ | 41 |
| 18 | 🇺🇸 Gemini 3.8 Flash (high) | █████████████████████ | 41 |
| 19 | **🇨🇳 Qwen3.8 2.4T A95B** | █████████████████████ | 40 |
| 20 | **🇨🇳 Qwen3.8-Flash-Next** | █████████████████████ | 40 |
| 21 | **🇨🇳 DeepSeek V4.1 Flash (max)** | ████████████████████ | 39 |
| 22 | 🇺🇸 Mistral Large 4 Preview | ████████████████████ | 38 |
| 23 | 🇺🇸 GPT-6 Luna (max) | ████████████████████ | 38 |
| 24 | **🇨🇳 MiMo-V2.6-Flash** | ████████████████████ | 38 |
| 25 | **🇨🇳 DeepSeek V4 Pro (max)** | ███████████████████ | 36 |

> 取每个模型的最高分档位（max / xhigh 等）。来源：[Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) Intelligence Index（2026-10-08）

---

## 多维排名

参考 [arena.ai Agent Leaderboard](https://arena.ai/leaderboard/agent) 的多信号排名方法，每个维度独立排序。

### 综合排名 TOP 6

| # | 平台 · 套餐 | 月费 | 综合分 | 能力分 | 价格分 | 用量分 | 体验加分 |
|---|---|---|---|---|---|---|---|
| 1 | [小米·MiMo · Lite](https://mimo.xiaomi.com/) | ¥39 | 70.2 | 50 | 37 | 0 | +8 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | 55.7 | 25 | 37 | 2.5 | +12 |
| 3 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 48.25 | 25 | 26 | 1.07 | +12 |
| 4 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | 40.65 | 25 | 3.67 | 10.75 | +12 |
| 5 | [阶跃星辰 · Step Plan Flash Mini](https://platform.stepfun.com/docs/zh/step-plan/overview) | ¥49 | 31.2 | 5 | 33.67 | 0 | +7 |
| 6 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | 27.85 | 10 | 10.67 | 10.75 | +7 |

### 能力排名 TOP 6

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 能力分 |
|---|---|---|---|---|
| 1 | [小米·MiMo · Lite](https://mimo.xiaomi.com/) | ¥39 | MiMo-V2.6-Pro | 50 |
| 2 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | Qwen-3.8-Max | 25 |
| 3 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | Qwen3.8 Max + GLM-5.3 + Step 5 Preview 领衔 | 25 |
| 4 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | Qwen-3.8-Max | 25 |
| 5 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | GLM-5.3 | 10 |
| 6 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | GLM-5.3 | 10 |

### 性价比排名 TOP 6

| # | 平台 · 套餐 | 月费 | 性价比分 | 能力分 | 价格分 |
|---|---|---|---|---|---|
| 1 | [小米·MiMo · Lite](https://mimo.xiaomi.com/) | ¥39 | 128.2 | 50 | 37 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | 64.1 | 25 | 37 |
| 3 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 34.7 | 25 | 26 |
| 4 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | 18.0 | 25 | 3.67 |
| 5 | [阶跃星辰 · Step Plan Flash Mini](https://platform.stepfun.com/docs/zh/step-plan/overview) | ¥49 | 10.2 | 5 | 33.67 |
| 6 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | 8.5 | 10 | 10.67 |

### 体验排名 TOP 6

| # | 平台 · 套餐 | 月费 | 体验加分 | 模型数 | 难度 | 首月优惠 |
|---|---|---|---|---|---|---|
| 1 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | +12 | 9 | 简单 | 否 |
| 2 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | +12 | 14 | 简单 | 否 |
| 3 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | +12 | 9 | 简单 | 否 |
| 4 | [小米·MiMo · Lite](https://mimo.xiaomi.com/) | ¥39 | +8 | 3 | 简单 | 否 |
| 5 | [阶跃星辰 · Step Plan Flash Mini](https://platform.stepfun.com/docs/zh/step-plan/overview) | ¥49 | +7 | 8 | 简单 | 否 |
| 6 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | +7 | 6 | 简单 | 否 |

> 完整多维排名见 [codingplanguide.com/leaderboard](https://codingplanguide.com/leaderboard)

---

## 评分方法

综合分 = 能力分×0.80 + 价格分×0.60 + 用量分×0.60 + 体验加分（满分100，加分上限20）。能力分梯队：国内第1=50、第2=25、第3=10、第4=5。价格分线性：50×(1−价格/¥150)。用量分线性：(月请求/200000)×50。体验加分：基于模型池大小、购买难度、首月优惠、厂商多样性等，上限20分。详见 [/method](https://codingplanguide.com/method)。

## 中立声明

数据以官方公布为准。

## License

CC BY 4.0