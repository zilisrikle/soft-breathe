# Project Rules

> [!IMPORTANT]
> 以下规则在所有开发工作中必须严格遵守，不得例外。

## 设计风格

- **水墨极简美学** — 所有页面及组件遵循水墨画风格，强调留白、素雅与克制。
- **色彩系统** — 严格使用 `src/styles/global.css` 中定义的 `--ink` 系列（文字）和 `--paper` 系列（背景）变量，不引入色板之外的饱和色。
- **间距规范** — 页面主体水平边距统一为 `80px`，移动端另行适配。导航栏使用固定定位 + `backdrop-filter: blur(16px)` 半透明效果。

## 字体规范

- **禁止使用 Inter 字体** — 不得在任何页面或组件中引入 `Inter`。
- **项目字体方案：**
  - `Noto Serif SC` — **中文正文与标题首选**，覆盖所有 CJK 字符
  - `Noto Serif` — 西文正文备选（Noto Serif SC 未覆盖的拉丁字符回退）
  - `IM Fell English` — 西文标题 / 装饰性英文
  - `Playfair Display` italic — **中英混排中的英文术语**，用 `<em class="latin">term</em>` 触发
  - `DM Mono` — 标签 / 辅助性文字 / 数据（monospace）

### 中文排版规范（Chinese Typography Standards）

> 以下规则一经确立，不得随意修改，以保持全站中文排版的一致性。

- **字体栈**：`font-family: 'Noto Serif SC', 'Noto Serif', serif;`（body 与 article 正文）
- **行高**：中文正文统一 `line-height: 1.9`；英文正文 `1.6` 以内；大标题 `1.25`
- **字间距 token**（定义在 `:root`，勿内联覆盖）：
  ```css
  --ls-headline: -0.02em;  /* 大标题 */
  --ls-body:      0.04em;  /* 中文正文 */
  --ls-label:     0.12em;  /* 导航 / 小标签 */
  ```
- **段落间距**：`.article-content p + p { margin-top: 1.2em; }`，不得仅靠 `line-height` 控制密度
- **中英混排**：文中英文术语（如 *prāṇa*、*vagus nerve*）使用 `<em class="latin">` 包裹，CSS 自动切换 Playfair Display 斜体
- **引号**：中文内容中的大引号使用全角书名号 `「」` / `『』`，禁止直接用西文 `""`

## 动效原则

- 动画应缓慢、柔和，契合"呼吸"节奏，推荐 `ease` / `ease-in-out` 缓动曲线。
- 禁止使用弹跳（bounce）、闪烁或过于机械的 `linear` 动画。

## 功能限制

- **不添加 Streak 功能** — 项目中不引入任何形式的连续打卡 / Streak 机制。

---

## 文章页排版与防截断规范 (Article Layout Rules)

为了保持所有科普文章页（如 `/breathing-science`, `/breathing-for-anxiety`）的视觉一致性，并避免因特殊字体带来的渲染 Bug，新文章页必须严格遵循以下布局与排版规范：

### 1. 网格与宽度 (Grid Layout)
- 文章页使用 3 列 CSS Grid 布局，主体内容区最大宽度限制为 **680px** 并在容器内绝对居中。
- **桌面端**：右侧留出侧边栏显示固定的目录 (`sticky` TOC)。
- **移动端**：目录变为页面顶部的横向滚动栏（支持毛玻璃效果）。
```css
.article-layout {
  display: grid;
  grid-template-columns: 1fr 680px 1fr;
  gap: 60px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}
```

### 2. 标题防截断 (Typography Clipping Fix)
- **H1 标题** (`.article-headline`)：
  - **🚨 关键修复：** `IM Fell English` 英文斜体具有非常高的 Ascenders（升部）。因此**绝对禁止**使用 `line-height: 1.1`，这会导致浏览器直接截断文字顶部。
  - **强制要求：** 必须使用 `line-height: 1.25`，并且添加至少 `padding-top: 0.2em`。
- **H2 标题** (`.article-content h2`)：
  - 留白必须充足。统一使用 `margin-top: 80px` 和 `clamp(24px, 3vw, 36px)`。
  - 附带顶部 1px 分割线，且第一个 H2 需要去除顶部边距。
```css
.article-content h2 {
  font-family: 'IM Fell English', serif; 
  font-size: clamp(24px, 3vw, 36px);
  color: var(--ink); 
  margin: 80px 0 24px;
  padding-top: 80px;
  border-top: 1px solid var(--paper-dark);
}
.article-content h2:first-of-type { 
  margin-top: 0; padding-top: 0; border-top: none; 
}
```

### 3. 正文与特殊模块 (Content & Cards)
- **正文排版**：段落 `<p>` 和列表 `<li>` 统一使用 `16px` 字号，行高 `1.85`，颜色 `var(--ink-faint)`，全部斜体 `italic` 弱化视觉重量。
- **数据高亮**：文章中的核心数据与实验结果（如 `Cohen's d = 1.44`）必须使用 `DM Mono` 字体，并包裹在 `<span class="data-point">` 中：
  ```css
  .data-point {
    font-family: 'DM Mono', monospace; font-size: 0.9em;
    background: var(--paper-dark);
    padding: 2px 6px; border-radius: 4px; color: var(--ink-soft);
  }
  ```
- **区块卡片 (Cards)**：如 Clinical Evidence、FAQ 等特殊内容需包裹在 `<div class="article-card">` 中，使用 `var(--paper-warm)` 背景色形成视觉区分，并移除内部第一个标题的顶部 margin。
