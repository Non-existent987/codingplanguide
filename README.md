# Coding Plan Guide

> AI 编程 · 怎么选最值。每月不超 ¥150，模型就得用最强的。
>
> 更新于 2026-08-11 · 数据驱动：[方法说明](https://codingplanguide.com/method)

---

## 最值的一单：[OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX)

国内前4全包：Kimi K3+Qwen3.8 Max+GLM-5.2+DeepSeek V4 Flash，首月$5一key全都有。流畅无中断。 — 综合分 71.25（能力 50 + 价格 26 + 用量 1.07 + 加分 15）。
[官方订阅 →](https://opencode.ai/go?ref=Z4S0MDY3TX)

## 过线排名 Top 6

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 模型排名 | 月请求数 | 综合分 | 加分 | 结论 |
|---|---|---|---|---|---|---|---|---|
| 1 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | Kimi K3 领衔 | 国内第1 | 4,300 | 71.25 | +15 | 推荐 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | Qwen-3.8-Max | 国内第2 | 1.0万 | 55.7 | +12 | 推荐 |
| 3 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | GLM-5.2（额度池共用） | 国内第3 | 9.0万 | 54.5 | +11 | 平替 |
| 4 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | GLM-5.2（额度池共用） | 国内第3 | 1.8万 | 45.7 | +13 | 推荐 |
| 5 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | Qwen-3.8-Max | 国内第2 | 4.3万 | 40.65 | +12 | 平替 |
| 6 | [腾讯云 · Lite Token Plan](https://cloud.tencent.com/product/lke) | ¥39 | DeepSeek-V4-Flash | 国内第4 | — | 31.2 | +5 | 平替 |

> 未过线套餐（26 款）见 [data/plans.yaml](https://github.com/Non-existent987/codingplanguide/blob/main/data/plans.yaml) 或 [codingplanguide.com/table](https://codingplanguide.com/table)

---

## OpenCode Go 专属：模型用量详情

OpenCode Go 包含 18 大模型，各模型独立请求配额如下：

| 模型 | 每5小时请求数 | 每周请求数 | 每月请求数 | AA全球排名 |
|---|---|---|---|---|
| Kimi K3 | 110 | 250 | 490 | #4 |
| Qwen3.8 Max | 160 | 400 | 810 | #5 |
| Grok 4.5 | 120 | 300 | 600 | #10 |
| GLM-5.2 | 880 | 2,150 | 4,300 | #15 |
| GPT-5.6 Luna | 2,050 | 5,100 | 10,250 | #16 |
| DeepSeek V4 Flash | 31,650 | 79,050 | 158,150 | #18 |
| Qwen3.7 Max | 340 | 840 | 1,690 | #22 |
| MiniMax M3 | 3,200 | 8,000 | 16,000 | #24 |
| DeepSeek V4 Pro | 3,450 | 8,550 | 17,150 | #25 |
| Kimi K2.6 | 1,150 | 2,880 | 5,750 | #26 |
| Kimi K2.7 Code | 1,350 | 3,380 | 6,750 | #31 |
| MiMo-V2.5-Pro | 3,250 | 8,150 | 16,300 | #32 |
| Hy3 | 4,300 | 10,750 | 21,500 | #34 |
| GLM-5.1 | 880 | 2,150 | 4,300 | #42 |
| Qwen3.6 Plus | 3,300 | 8,200 | 16,300 | #47 |
| Qwen3.7 Plus | 4,300 | 10,800 | 21,600 | #51 |
| MiniMax M2.7 | 3,400 | 8,500 | 17,000 | #53 |
| MiMo-V2.5 | 30,100 | 75,200 | 150,400 | #56 |

> AA全球排名 = Artificial Analysis Intelligence Index（2026-08-11）
>
> DeepSeek V4 Flash 月请求 15.8 万次，搭配 Kimi K3 / Qwen3.8 Max 旗舰使用，日常编程几乎用不完。流畅无中断、无告警、无扣量问题。
>
> [官方订阅 OpenCode Go →](https://opencode.ai/go?ref=Z4S0MDY3TX)

---

## DeepSeek V4 直连 API

DeepSeek V4 发布了，能力很强——V4 Flash 0731 全球排 #18（国内第4），V4 Pro 全球 #25（国内第7）。如果只是自己写代码用，直连官方 API 按量付费，比任何套餐都便宜，也没有额度焦虑。

| 模型 | 输入 / 百万 tokens（缓存命中） | 输入 / 百万 tokens（未命中） | 输出 / 百万 tokens | AA 全球排名 |
|---|---|---|---|---|
| **DeepSeek V4 Flash** | $0.0028 | $0.14 | $0.28 | #18 |
| **DeepSeek V4 Pro** | $0.003625 | $0.435 | $0.87 | #25 |

> 以 V4 Flash 为例：输出 100 万 tokens 只要 $0.28（约 ¥2），写一个月代码花不了几十块。而套餐里那些"月 ¥40 额度池"，大部分你根本用不完。
>
> [DeepSeek 官方 API 定价 →](https://api-docs.deepseek.com/zh-cn/quick_start/pricing)

---

## 模型能力排名 Top 25

| # | 模型 | 图 | 分数 |
|---|---|---|---|
| 1 | 🇺🇸 Claude Opus 5 | ██████████████████████████████ | 63 |
| 2 | 🇺🇸 Claude Fable 5 | ██████████████████████████████ | 62 |
| 3 | 🇺🇸 GPT-5.6 Sol (max) | █████████████████████████████ | 61 |
| 4 | **🇨🇳 Kimi K3 (max)** | █████████████████████████████ | 60 |
| 5 | **🇨🇳 Qwen3.8 Max** | ████████████████████████████ | 58 |
| 6 | 🇺🇸 Claude Opus 4.8 | ███████████████████████████ | 57 |
| 7 | 🇺🇸 Muse Spark 1.2 (xhigh) | ███████████████████████████ | 57 |
| 8 | 🇺🇸 GPT-5.6 Terra (max) | ███████████████████████████ | 57 |
| 9 | 🇺🇸 GPT-5.5 (xhigh) | ███████████████████████████ | 56 |
| 10 | 🇺🇸 Grok 4.5 (high) | ███████████████████████████ | 56 |
| 11 | 🇺🇸 Claude Sonnet 5 | ██████████████████████████ | 55 |
| 12 | 🇺🇸 Claude Opus 4.7 | ██████████████████████████ | 55 |
| 13 | 🇺🇸 Muse Spark 1.1 (xhigh) | █████████████████████████ | 53 |
| 14 | 🇺🇸 GPT-5.4 (xhigh) | █████████████████████████ | 53 |
| 15 | **🇨🇳 GLM-5.2 (max)** | █████████████████████████ | 53 |
| 16 | 🇺🇸 GPT-5.6 Luna (max) | █████████████████████████ | 52 |
| 17 | 🇺🇸 Gemini 3.5 Flash (high) | █████████████████████████ | 52 |
| 18 | **🇨🇳 DeepSeek V4 Flash 0731** | █████████████████████████ | 52 |
| 19 | 🇺🇸 Gemini 3.6 Flash (high) | █████████████████████████ | 52 |
| 20 | 🇺🇸 Claude Sonnet 4.6 | ███████████████████████ | 48 |
| 21 | 🇺🇸 Gemini 3.1 Pro Preview | ███████████████████████ | 48 |
| 22 | **🇨🇳 Qwen3.7 Max** | ██████████████████████ | 47 |
| 23 | 🇺🇸 GPT-5.3 Codex (xhigh) | ██████████████████████ | 46 |
| 24 | **🇨🇳 MiniMax-M3** | █████████████████████ | 45 |
| 25 | **🇨🇳 DeepSeek V4 Pro** | █████████████████████ | 45 |

> 来源：[Artificial Analysis](https://artificialanalysis.ai/leaderboards/models) Intelligence Index

---

## 多维排名

参考 [arena.ai Agent Leaderboard](https://arena.ai/leaderboard/agent) 的多信号排名方法，每个维度独立排序。

### 综合排名 TOP 6

| # | 平台 · 套餐 | 月费 | 综合分 | 能力分 | 价格分 | 用量分 | 体验加分 |
|---|---|---|---|---|---|---|---|
| 1 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 71.25 | 50 | 26 | 1.07 | +15 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | 55.7 | 25 | 37 | 2.5 | +12 |
| 3 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 54.5 | 10 | 36.67 | 22.5 | +11 |
| 4 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 45.7 | 10 | 36.67 | 4.5 | +13 |
| 5 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | 40.65 | 25 | 3.67 | 10.75 | +12 |
| 6 | [腾讯云 · Lite Token Plan](https://cloud.tencent.com/product/lke) | ¥39 | 31.2 | 5 | 37 | 0 | +5 |

### 能力排名 TOP 6

| # | 平台 · 套餐 | 月费 | 旗舰模型 | 能力分 |
|---|---|---|---|---|
| 1 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | Kimi K3 领衔 | 50 |
| 2 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | Qwen-3.8-Max | 25 |
| 3 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | Qwen-3.8-Max | 25 |
| 4 | [智谱国际版 · Coding Plan Lite](https://z.ai/subscribe?ic=SUYV1380ZT) | $18 | GLM-5.2 | 10 |
| 5 | [智谱 AI · Coding Plan Lite](https://www.bigmodel.cn/glm-coding?ic=QLFXUYQFFV) | ¥118 | GLM-5.2 | 10 |
| 6 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | GLM-5.2（额度池共用） | 10 |

### 性价比排名 TOP 6

| # | 平台 · 套餐 | 月费 | 性价比分 | 能力分 | 价格分 |
|---|---|---|---|---|---|
| 1 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | 69.4 | 50 | 26 |
| 2 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | 64.1 | 25 | 37 |
| 3 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 25.0 | 10 | 36.67 |
| 4 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | 25.0 | 10 | 36.67 |
| 5 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | 18.0 | 25 | 3.67 |
| 6 | [腾讯云 · Lite Token Plan](https://cloud.tencent.com/product/lke) | ¥39 | 12.8 | 5 | 37 |

### 体验排名 TOP 6

| # | 平台 · 套餐 | 月费 | 体验加分 | 模型数 | 难度 | 首月优惠 |
|---|---|---|---|---|---|---|
| 1 | [OpenCode · Go（首月 $5）](https://opencode.ai/go?ref=Z4S0MDY3TX) | $10 | +15 | 11 | 简单 | 是 |
| 2 | [字节·方舟 · Coding Plan Lite](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | +13 | 8 | 简单 | 是 |
| 3 | [阿里·百炼 · Token Plan Lite](https://www.aliyun.com/benefit/scene/tokenplan) | ¥39 | +12 | 8 | 简单 | 否 |
| 4 | [阿里·百炼 · Token Plan Standard](https://www.aliyun.com/benefit/scene/tokenplan) | ¥139 | +12 | 8 | 简单 | 否 |
| 5 | [字节·方舟 · Coding Plan Pro](https://volcengine.com/L/ZggDsb8yNHE/) | ¥40 | +11 | 8 | 简单 | 否 |
| 6 | [腾讯云 · Standard Token Plan](https://cloud.tencent.com/product/lke) | ¥99 | +7 | 4 | 一般 | 否 |

> 完整多维排名见 [codingplanguide.com/leaderboard](https://codingplanguide.com/leaderboard)

---

## 评分方法

综合分 = 能力分×0.80 + 价格分×0.60 + 用量分×0.60 + 体验加分（满分100，加分上限20）。能力分梯队：国内第1=50、第2=25、第3=10、第4=5。价格分线性：50×(1−价格/¥150)。用量分线性：(月请求/200000)×50。体验加分：基于模型池大小、购买难度、首月优惠、厂商多样性等，上限20分。详见 [/method](https://codingplanguide.com/method)。

## 中立声明

数据以官方公布为准。

## License

CC BY 4.0