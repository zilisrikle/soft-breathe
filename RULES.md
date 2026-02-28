# Project Rules

> [!IMPORTANT]
> 以下规则在所有开发工作中必须严格遵守，不得例外。

## 设计风格

- **水墨极简美学** — 所有页面及组件遵循水墨画风格，强调留白、素雅与克制。
- **色彩系统** — 严格使用 [global.css](cci:7://file:///Users/z/Downloads/files/src/styles/global.css:0:0-0:0) 中定义的 `--ink` 系列（文字）和 `--paper` 系列（背景）变量，不引入色板之外的饱和色。
- **间距规范** — 页面主体水平边距统一为 `80px`，移动端另行适配。导航栏使用固定定位 + `backdrop-filter: blur(16px)` 半透明效果。

## 字体规范

- **禁止使用 Inter 字体** — 不得在任何页面或组件中引入 `Inter`。
- **项目字体方案：**
  - `IM Fell English` — 标题 / 装饰性文字
  - `Noto Serif` — 正文
  - `DM Mono` — 标签 / 辅助性文字（monospace）

## 动效原则

- 动画应缓慢、柔和，契合"呼吸"节奏，推荐 `ease` / `ease-in-out` 缓动曲线。
- 禁止使用弹跳（bounce）、闪烁或过于机械的 `linear` 动画。

## 功能限制

- **不添加 Streak 功能** — 项目中不引入任何形式的连续打卡 / Streak 机制。

## 部署

- **平台**：Cloudflare Pages（已关联 GitHub 自动构建）
- **构建命令**：`npm run build`
- **输出目录**：`dist`
- **生产分支**：`main`
