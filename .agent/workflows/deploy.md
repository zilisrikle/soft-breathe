---
description: How to deploy Soft Breathe to Cloudflare Pages
---

# Soft Breathe 部署流程

## ⚠️ 关键教训（2026-02-28）

### 错误 1：假设 `git push` 会自动触发 Cloudflare 构建

**发生了什么**：多次 `git push origin main` 后告诉用户"会自动部署"，但实际上 Cloudflare Pages 的 GitHub 自动构建 **并未触发**。线上停留在 15 小时前的旧版本。

**根因**：Cloudflare Pages 的 GitHub App 连接可能未正确配置，或自动构建有配额/权限问题。**从未验证过自动构建是否真的在工作。**

**教训**：**永远不要假设自动部署成功。每次 push 后必须验证线上版本已更新。**

### 错误 2：未在部署后立即验证线上版本

**发生了什么**：push 代码后直接告诉用户"已部署"，但没有打开线上网站确认内容是否更新。

**教训**：**部署后必须打开线上 URL 确认页面内容已更新，再告知用户。**

---

## 正确部署步骤

### 1. 构建项目
// turbo
```bash
npm run build
```

### 2. 手动部署到 Cloudflare Pages
```bash
npx wrangler pages deploy dist --project-name=soft-breathe --branch=main
```

### 3. 验证线上版本（必做！）
// turbo
等待 10 秒后用浏览器访问 https://soft-breathe.pages.dev/ 确认：
- 页面内容是否为最新版本
- 新功能是否可用
- 控制台是否有报错

### 4. Git 提交（如果还没提交）
```bash
git add -A && git commit -m "描述" && git push origin main
```

> [!CAUTION]
> `git push` 不等于部署成功。必须执行步骤 2 手动部署，并执行步骤 3 验证。

---

## 项目信息

- **框架**: Astro 5 + Cloudflare adapter (`output: 'server'`)
- **线上地址**: https://soft-breathe.pages.dev
- **Cloudflare 项目名**: `soft-breathe`
- **构建输出目录**: `dist`
- **构建命令**: `npm run build`
