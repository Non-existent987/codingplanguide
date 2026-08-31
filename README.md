# Coding Plan Guide

> AI 编程 · 怎么选最值。每月不超 ¥150，模型就得用最强的。
>
> 更新于 2026-08-31 · 数据驱动：[方法说明](https://codingplanguide.com/method)

---

## 最值的一单：[OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX)

25模型一key全包：Kimi K3+GLM-5.3+Qwen3.8 Max+DeepSeek V4 Flash，国内前三+第4档旗舰全在池里。$10流畅不中断。 — 综合分 69.25（能力 50 + 价格 26 + 用量 1.07 + 加分 13）。
[官方订阅 →](https://opencode.ai/go?ref=Z4S0MDY3TX)

## 过线排名 Top 5

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 模型排名 | 月请求数 | 综合分 | 加分 | 结论 |
|---|---|---|---|---|---|---|---|---|
| 1 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | Kimi K3 领衔 | 国内第1 | 4,300 | 69.25 | +13 | 推荐 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | Qwen-3.8-Max | 国内第3 | 1.0万 | 42.7 | +11 | 推荐 |
| 3 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | GLM-5.3 | 国内第2 | 4.3万 | 40.85 | +8 | 推荐 |
| 4 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | GLM-5.3 | 国内第2 | 4,300 | 30.72 | +6 | 推荐 |
| 5 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | Qwen-3.8-Max | 国内第3 | 4.3万 | 27.65 | +11 | 平替 |

> 未过线套餐（27 款）见 [data/plans.yaml](https://github.com/Non-existent987/codingplanguide/blob/main/data/plans.yaml) 或 [codingplanguide.com/table](https://codingplanguide.com/table)

---

## OpenCode Go 专属：模型用量详情

OpenCode Go 包含 25 大模型，各模型独立请求配额如下（额度按 $12/5小时、$30/周、$60/月折算）：

| 模型 | 每5小时请求数 | 每周请求数 | 每月请求数 | AA全球排名 |
|---|---|---|---|---|
| Grok 4.6 | 169 | 423 | 845 | #4 |
| Kimi K3 | 110 | 250 | 490 | #5 |
| GLM-5.3 | 220 | 540 | 1,080 | #6 |
| Qwen3.8 Max | 160 | 400 | 810 | #7 |
| GLM-5.3-Flash | 1,580 | 3,950 | 7,900 | #9 |
| Muse Spark 1.2 Contributor | 45,300 | 113,300 | 226,600 | #11 |
| Qwen3.8 Flash | 5,400 | 13,500 | 27,000 | #15 |
| DeepSeek V4 Pro | 1,050 | 2,600 | 5,200 | #20 |
| GLM-5.2 | 880 | 2,150 | 4,300 | #22 |
| GPT-5.6 Luna | 2,050 | 5,100 | 10,250 | #23 |
| DeepSeek V4 Flash | 7,600 | 18,900 | 37,800 | #26 |
| DeepSeek V4 Flash Vision Exp | 3,800 | 9,450 | 18,900 | #28 |
| Qwen3.7 Max | 340 | 840 | 1,690 | #33 |
| MiniMax M3 | 3,200 | 8,000 | 16,000 | #35 |
| Kimi K2.6 | 1,150 | 2,880 | 5,750 | #37 |
| Kimi K2.7 Code | 1,350 | 3,380 | 6,750 | #42 |
| MiMo-V2.5-Pro | 3,250 | 8,150 | 16,300 | #43 |
| Hy3 | 4,300 | 10,750 | 21,500 | #45 |
| GLM-5.1 | 880 | 2,150 | 4,300 | #54 |
| Qwen3.6 Plus | 3,300 | 8,200 | 16,300 | #59 |
| Qwen3.7 Plus | 4,300 | 10,800 | 21,600 | #63 |
| MiniMax M2.7 | 3,400 | 8,500 | 17,000 | #65 |
| MiMo-V2.5 | 30,100 | 75,200 | 150,400 | #68 |
| LongCat-2.0 | 11,400 | 28,600 | 57,200 | #97 |
| Hy4 preview | 1,350 | 3,380 | 6,770 | — |

> AA全球排名 = Artificial Analysis Intelligence Index（2026-08-31）
>
> DeepSeek V4 Flash 月请求 3.78 万次，GLM-5.3-Flash 限时 2× 用量；搭配 Kimi K3 / GLM-5.3 旗舰使用，日常编程几乎用不完。流畅无中断、无告警、无扣量问题。
>
> [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)

---

## DeepSeek V4 直连 API

DeepSeek V4 很强——V4 Pro 0813 全球 #20（国内第7），V4 Flash 0731 全球 #26（国内第10）。8/17 起 API 整体提价并改峰谷计费：高峰 = 工作日 9:00-12:00、14:00-18:00（北京时间），闲时半价。

| 模型 | 输入·缓存命中（高峰/闲时） | 输入·未命中（高峰/闲时） | 输出（高峰/闲时） | AA 全球排名 |
|---|---|---|---|---|
| **DeepSeek V4 Flash 0731** | ¥0.10 / ¥0.05 | ¥3.0 / ¥1.5 | ¥9.0 / ¥4.5 | #26 |
| **DeepSeek V4 Pro 0813** | ¥0.30 / ¥0.15 | ¥9.0 / ¥4.5 | ¥27.0 / ¥13.5 | #20 |

> 以 V4 Flash 为例：输出 100 万 tokens 高峰 ¥9 / 闲时 ¥4.5，缓存命中输入只要 ¥0.05-0.10，已无"白菜价"。用量不大就直连 + 错峰，量大看下方 Flash Top 3。
>
> [DeepSeek 官方 API 定价 →](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)

---

## DeepSeek V4 Flash · 便宜用量 Top 3

V4 Flash 仍是够用的"便宜量大"模型（全球 #26 / 国内第10），但 8/17 官方 API 提价后直连已不划算。给"用量大、不需要顶尖模型"的用户，按性价比排出的 3 条路：

**No.1 · OpenCode Go** — $10/月（≈¥72）。V4 Flash 月 3.78 万次，同类最低总价 + 最大量；GLM-5.3-Flash（2× 活动约 1.6 万次）、Qwen3.8 Flash 2.7 万次同池共用，25 模型一个订阅全包。V4 Flash 涨价不涨订阅。
- [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)

**No.2 · 字节·方舟 Coding Plan** — ¥40/月（首两月 2.5 折）。额度池含 DeepSeek V4 Flash + GLM-5.2，走平台积分——API 怎么涨价，这 ¥40 都不变。全市场最低价的正牌 V4 Flash 订阅。
- [官方订阅 字节·方舟 →](https://volcengine.com/L/ZggDsb8yNHE/)

**No.3 · 智谱 Coding Plan Lite（GLM-5.3-Flash 替代）** — ¥118/月。只要"便宜量大又够强"的 Flash 级模型，V4 Flash 的最强替代是 GLM-5.3-Flash：全球 #9 / 国内第5，性能追平 Opus 4.8，官方定价约为 GLM-5.3 的 1/10。Lite 积分制约 10,000/周，免抢购直购。
- [官方订阅 智谱 →](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV)

> 补充：DeepSeek 官方 API（8/17 起峰谷计价）——V4 Flash 输出高峰 ¥9 / 闲时 ¥4.5，缓存命中输入 ¥0.10 / ¥0.05。用量小就直连 + 错峰，正式量大走上面订阅。

---

## 模型能力排名 Top 25

| # | 模型 | 图 | 分数 |
|---|---|---|---|
| 1 | 🇺🇸 Claude Opus 5 | ██████████████████████████████ | 63 |
| 2 | 🇺🇸 Claude Fable 5 | ██████████████████████████████ | 62 |
| 3 | 🇺🇸 GPT-5.6 Sol (max) | █████████████████████████████ | 61 |
| 4 | 🇺🇸 Grok 4.6 | █████████████████████████████ | 61 |
| 5 | **🇨🇳 Kimi K3 (max)** | █████████████████████████████ | 60 |
| 6 | **🇨🇳 GLM-5.3** | █████████████████████████████ | 60 |
| 7 | **🇨🇳 Qwen3.8 Max** | ████████████████████████████ | 58 |
| 8 | **🇨🇳 Qwen3.8 2.4T A95B** | ████████████████████████████ | 58 |
| 9 | **🇨🇳 GLM-5.3-Flash** | ███████████████████████████ | 57 |
| 10 | 🇺🇸 Claude Opus 4.8 | ███████████████████████████ | 57 |
| 11 | 🇺🇸 Muse Spark 1.2 (xhigh) | ███████████████████████████ | 57 |
| 12 | 🇺🇸 GPT-5.6 Terra (max) | ███████████████████████████ | 57 |
| 13 | 🇺🇸 GPT-5.5 (xhigh) | ███████████████████████████ | 56 |
| 14 | 🇺🇸 Gemini 3.7 Flash (high) | ███████████████████████████ | 56 |
| 15 | **🇨🇳 Qwen3.8-Flash-Next** | ███████████████████████████ | 56 |
| 16 | 🇺🇸 Grok 4.5 (high) | ███████████████████████████ | 56 |
| 17 | 🇺🇸 Claude Sonnet 5 | ██████████████████████████ | 55 |
| 18 | 🇺🇸 Claude Opus 4.7 | ██████████████████████████ | 55 |
| 19 | 🇺🇸 Muse Spark 1.1 (xhigh) | █████████████████████████ | 53 |
| 20 | **🇨🇳 DeepSeek V4 Pro 0813** | █████████████████████████ | 53 |
| 21 | 🇺🇸 GPT-5.4 (xhigh) | █████████████████████████ | 53 |
| 22 | **🇨🇳 GLM-5.2 (max)** | █████████████████████████ | 53 |
| 23 | 🇺🇸 GPT-5.6 Luna (max) | █████████████████████████ | 52 |
| 24 | **🇨🇳 Qwen3.8 27B** | █████████████████████████ | 52 |
| 25 | 🇺🇸 Gemini 3.5 Flash (high) | █████████████████████████ | 52 |

> 来源：[Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) Intelligence Index

---

## 多维排名

参考 [arena.ai Agent Leaderboard](https://arena.ai/leaderboard/agent) 的多信号排名方法，每个维度独立排序。

### 综合排名 TOP 6

| # | 平台 · 套餐 | 月费 | 综合分 | 能力分 | 价格分 | 用量分 | 体验加分 |
|---|---|---|---|---|---|---|---|
| 1 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 69.25 | 50 | 26 | 1.07 | +13 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | 42.7 | 10 | 37 | 2.5 | +11 |
| 3 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | 40.85 | 25 | 10.67 | 10.75 | +8 |
| 4 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | 30.72 | 25 | 6.8 | 1.07 | +6 |
| 5 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | 27.65 | 10 | 3.67 | 10.75 | +11 |

### 能力排名 TOP 6

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 能力分 |
|---|---|---|---|---|
| 1 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | Kimi K3 领衔 | 50 |
| 2 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | GLM-5.3 | 25 |
| 3 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | GLM-5.3 | 25 |
| 4 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | Qwen-3.8-Max | 10 |
| 5 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | Qwen-3.8-Max | 10 |

### 性价比排名 TOP 6

| # | 平台 · 套餐 | 月费 | 性价比分 | 能力分 | 价格分 |
|---|---|---|---|---|---|
| 1 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 69.4 | 50 | 26 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | 25.6 | 10 | 37 |
| 3 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | 21.2 | 25 | 10.67 |
| 4 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | 19.3 | 25 | 6.8 |
| 5 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | 7.2 | 10 | 3.67 |

### 体验排名 TOP 6

| # | 平台 · 套餐 | 月费 | 体验加分 | 模型数 | 难度 | 首月优惠 |
|---|---|---|---|---|---|---|
| 1 | [OpenCode · Go（$10/月）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | +13 | 14 | 简单 | 否 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | +11 | 9 | 简单 | 否 |
| 3 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | +11 | 9 | 简单 | 否 |
| 4 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | +8 | 6 | 简单 | 否 |
| 5 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | +6 | 4 | 简单 | 否 |

> 完整多维排名见 [codingplanguide.com/leaderboard](https://codingplanguide.com/leaderboard)

---

## 评分方法

综合分 = 能力分×0.80 + 价格分×0.60 + 用量分×0.60 + 体验加分（满分100，加分上限20）。能力分梯队：国内第1=50、第2=25、第3=10、第4=5。价格分线性：50×(1−价格/¥150)。用量分线性：(月请求/200000)×50。体验加分：基于模型池大小、购买难度、首月优惠、厂商多样性等，上限20分。详见 [/method](https://codingplanguide.com/method)。

## 中立声明

数据以官方公布为准。

## License

CC BY 4.0