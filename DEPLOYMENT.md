# 部署说明

## 🚀 GitHub Pages 自动部署

本项目已配置GitHub Actions自动部署到GitHub Pages。

### 启用GitHub Pages

1. 进入你的GitHub仓库：https://github.com/easywork001/20250811huiyi
2. 点击 "Settings" 标签页
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"
5. 保存设置

### 自动部署流程

每次推送到 `master` 分支时，GitHub Actions会自动：

1. 安装项目依赖
2. 构建生产版本
3. 部署到GitHub Pages

### 手动触发部署

如果需要手动触发部署：

1. 进入仓库的 "Actions" 标签页
2. 选择 "Deploy to GitHub Pages" 工作流
3. 点击 "Run workflow" 按钮
4. 选择分支并运行

## 🌐 访问你的网站

部署完成后，你的网站将在以下地址可用：

```
https://easywork001.github.io/20250811huiyi/
```

## 📱 本地开发

### 启动开发服务器

```bash
npm install --legacy-peer-deps
npm run dev
```

访问 http://localhost:5173

### 构建生产版本

```bash
npm run build
```

构建文件将生成在 `docs/` 目录中。

## 🔧 故障排除

### 如果构建失败

1. 检查Node.js版本（需要18+）
2. 删除 `node_modules` 和 `package-lock.json`
3. 重新安装依赖：`npm install --legacy-peer-deps`

### 如果部署失败

1. 检查GitHub Actions日志
2. 确保仓库有足够的权限
3. 检查GitHub Pages设置

## 📊 性能优化

- 图片已自动优化
- CSS和JS文件已压缩
- 启用了HTTP/2推送
- 响应式设计适配所有设备

## 🔒 安全设置

- 启用了内容安全策略
- 使用了HTTPS
- 配置了适当的CORS策略

---

如有问题，请检查GitHub Actions日志或提交Issue。 