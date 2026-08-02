# Coding Plan Guide

> AI 编程 · 怎么选最值。每月不超 ¥150，模型就得用最强的。
>
> 更新于 2026-08-02 · 数据驱动：[方法说明](https://codingplanguide.com/method)

---

## 最值的一单：[字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/)

与 Lite 同价¥40，全家桶额度大。重度用户首选。 — 综合分 67.5（能力 25 + 价格 36.67 + 用量 22.5 + 加分 12）。
[官方订阅 →](https://volcengine.com/L/ZggDsb8yNHE/)

## 过线排名 Top 6

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 模型排名 | 月请求数 | 综合分 | 加分 | 结论 |
|---|---|---|---|---|---|---|---|---|
| 1 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | GLM-5.2（额度池共用） | 国内第2 | 9.0万 | 67.5 | +12 | 平替 |
| 2 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | GLM-5.2（额度池共用） | 国内第2 | 1.8万 | 58.7 | +14 | 推荐 |
| 3 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | GLM-5.2 | 国内第2 | 4,300 | 49.25 | +13 | 推荐 |
| 4 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥49 | GLM-5.2 | 国内第2 | 4,300 | 45.85 | +5 | 推荐 |
| 5 | [智谱 AI · Coding Plan Pro](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥149 | GLM-5.2 | 国内第2 | 12.0万 | 43.2 | +5 | 平替 |
| 6 | [腾讯云 · Lite Token Plan](https://cloud.tencent.com/product/lke) | ¥39 | DeepSeek-V4-Flash | 国内第3 | — | 36.2 | +6 | 平替 |

> 未过线套餐（26 款）见 [data/plans.yaml](https://github.com/Non-existent987/codingplanguide/blob/main/data/plans.yaml) 或 [codingplanguide.com/table](https://codingplanguide.com/table)

---

## OpenCode Go 专属：模型用量详情

OpenCode Go 包含 7 大模型，各模型独立请求配额如下：

| 模型 | 每5小时请求数 | 每周请求数 | 每月请求数 | AA全球排名 |
|---|---|---|---|---|
| GLM-5.2 | 880 | 2,150 | 4,300 | #16 |
| DeepSeek V4 Pro | 3,450 | 8,550 | 17,150 | #31 |
| DeepSeek V4 Flash | 31,650 | 79,050 | 158,150 | #21 |
| Kimi K2.7 Code | 1,350 | 4,630 | 9,250 | #36 |
| MiniMax M3 | 3,200 | 8,000 | 16,000 | #30 |
| Qwen3.7 Max | 950 | 2,390 | 4,770 | #28 |
| MiMo-V2.5-Pro | 3,250 | 8,150 | 16,300 | #35 |

> AA全球排名 = Artificial Analysis Intelligence Index（2026-08-02）
>
> DeepSeek V4 Flash 月请求 15.8 万次，搭配 GLM-5.2 旗舰使用，日常编程几乎用不完。流畅无中断、无告警、无扣量问题。
>
> [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)

---

## DeepSeek V4 直连 API

DeepSeek V4 发布了，能力很强——V4 Flash 0731 全球排 #21（国内第3），V4 Pro 全球 #31（国内第6）。如果只是自己写代码用，直连官方 API 按量付费，比任何套餐都便宜，也没有额度焦虑。

| 模型 | 输入 / 百万 tokens（缓存命中） | 输入 / 百万 tokens（未命中） | 输出 / 百万 tokens | AA 全球排名 |
|---|---|---|---|---|
| **DeepSeek V4 Flash** | $0.0028 | $0.14 | $0.28 | #21 |
| **DeepSeek V4 Pro** | $0.003625 | $0.435 | $0.87 | #31 |

> 以 V4 Flash 为例：输出 100 万 tokens 只要 $0.28（约 ¥2），写一个月代码花不了几十块。而套餐里那些"月 ¥40 额度池"，大部分你根本用不完。
>
> [DeepSeek 官方 API 定价 →](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)

---

## 模型能力排名 Top 25

| # | 模型 | 图 | 分数 |
|---|---|---|---|
| 1 | 🇺🇸 Claude Opus 5 (max) | ██████████████████████████████ | 61 |
| 2 | 🇺🇸 Claude Fable 5 (with fallback) | ██████████████████████████████ | 60 |
| 3 | 🇺🇸 GPT-5.6 Sol (max) | █████████████████████████████ | 59 |
| 4 | **🇨🇳 Kimi K3 (max)** | ████████████████████████████ | 57 |
| 5 | 🇺🇸 GPT-5.6 Terra (max) | ███████████████████████████ | 55 |
| 6 | 🇺🇸 Grok 4.5 (high) | ███████████████████████████ | 54 |
| 7 | 🇺🇸 Claude Sonnet 5 (max) | ██████████████████████████ | 53 |
| 8 | 🇺🇸 GPT-5.6 Luna (max) | █████████████████████████ | 51 |
| 9 | **🇨🇳 GLM-5.2 (max)** | █████████████████████████ | 51 |
| 10 | 🇺🇸 Muse Spark 1.1 (xhigh) | █████████████████████████ | 51 |
| 11 | 🇺🇸 Gemini 3.5 Flash | █████████████████████████ | 50 |
| 12 | 🇺🇸 Gemini 3.6 Flash | █████████████████████████ | 50 |
| 13 | **🇨🇳 DeepSeek V4 Flash 0731 (max)** | █████████████████████████ | 50 |
| 14 | 🇺🇸 Gemini 3.1 Pro Preview | ███████████████████████ | 46 |
| 15 | **🇨🇳 Qwen3.7 Max** | ███████████████████████ | 46 |
| 16 | **🇨🇳 MiniMax-M3** | ██████████████████████ | 44 |
| 17 | **🇨🇳 DeepSeek V4 Pro (max)** | ██████████████████████ | 44 |
| 18 | 🇺🇸 Motif 3 (Beta) | ██████████████████████ | 44 |
| 19 | 🇺🇸 Muse Spark | █████████████████████ | 43 |
| 20 | **🇨🇳 MiMo-V2.5-Pro** | █████████████████████ | 42 |
| 21 | **🇨🇳 Kimi K2.7 Code** | █████████████████████ | 42 |
| 22 | **🇨🇳 Hy3** | ████████████████████ | 41 |
| 23 | **🇨🇳 Nex-N2-Pro** | ████████████████████ | 41 |
| 24 | 🇺🇸 Inkling | ████████████████████ | 41 |
| 25 | 🇺🇸 Inkling Small | ████████████████████ | 40 |

> 来源：[Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) Intelligence Index

---

## 多维排名

参考 [arena.ai Agent Leaderboard](https://arena.ai/leaderboard/agent) 的多信号排名方法，每个维度独立排序。

### 综合排名 TOP 6

| # | 平台 · 套餐 | 月费 | 综合分 | 能力分 | 价格分 | 用量分 | 体验加分 |
|---|---|---|---|---|---|---|---|
| 1 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 67.5 | 25 | 36.67 | 22.5 | +12 |
| 2 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 58.7 | 25 | 36.67 | 4.5 | +14 |
| 3 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 49.25 | 25 | 26 | 1.07 | +13 |
| 4 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥49 | 45.85 | 25 | 33.67 | 1.07 | +5 |
| 5 | [智谱 AI · Coding Plan Pro](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥149 | 43.2 | 25 | 0.33 | 30 | +5 |
| 6 | [腾讯云 · Lite Token Plan](https://cloud.tencent.com/product/lke) | ¥39 | 36.2 | 10 | 37 | 0 | +6 |

### 能力排名 TOP 6

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 能力分 |
|---|---|---|---|---|
| 1 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | GLM-5.2 | 25 |
| 2 | [智谱 AI · Coding Plan Pro](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥149 | GLM-5.2 | 25 |
| 3 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥49 | GLM-5.2 | 25 |
| 4 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | GLM-5.2 | 25 |
| 5 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | GLM-5.2（额度池共用） | 25 |
| 6 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | GLM-5.2（额度池共用） | 25 |

### 性价比排名 TOP 6

| # | 平台 · 套餐 | 月费 | 性价比分 | 能力分 | 价格分 |
|---|---|---|---|---|---|
| 1 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 62.5 | 25 | 36.67 |
| 2 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 62.5 | 25 | 36.67 |
| 3 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥49 | 51.0 | 25 | 33.67 |
| 4 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 34.7 | 25 | 26 |
| 5 | [腾讯云 · Lite Token Plan](https://cloud.tencent.com/product/lke) | ¥39 | 25.6 | 10 | 37 |
| 6 | [京东云 · Lite](https://www.jdcloud.com/cn/products/nlp-model) | ¥40 | 25.0 | 10 | 36.67 |

### 体验排名 TOP 6

| # | 平台 · 套餐 | 月费 | 体验加分 | 模型数 | 难度 | 首月优惠 |
|---|---|---|---|---|---|---|
| 1 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | +14 | 8 | 简单 | 是 |
| 2 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | +13 | 7 | 简单 | 是 |
| 3 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | +12 | 8 | 简单 | 否 |
| 4 | [腾讯云 · Standard Token Plan](https://cloud.tencent.com/product/lke) | ¥99 | +8 | 4 | 一般 | 否 |
| 5 | [腾讯云 · Lite Token Plan](https://cloud.tencent.com/product/lke) | ¥39 | +6 | 3 | 一般 | 否 |
| 6 | [京东云 · Lite](https://www.jdcloud.com/cn/products/nlp-model) | ¥40 | +6 | 3 | 一般 | 否 |

> 完整多维排名见 [codingplanguide.com/leaderboard](https://codingplanguide.com/leaderboard)

---

## 评分方法

综合分 = 能力分×0.80 + 价格分×0.60 + 用量分×0.60 + 体验加分（满分100，加分上限20）。能力分梯队：国内第1=50、第2=25、第3=10、第4=5。价格分线性：50×(1−价格/¥150)。用量分线性：(月请求/200000)×50。体验加分：基于模型池大小、购买难度、首月优惠、厂商多样性等，上限20分。详见 [/method](https://codingplanguide.com/method)。

## 中立声明

数据以官方公布为准。

## License

CC BY 4.0