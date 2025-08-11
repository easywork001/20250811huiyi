# 青岛市政研室×智能体创业公司调研会

这是一个基于React的响应式网页，展示了青岛市政研室与智能体创业公司调研会的完整内容和调研建议。

## 🌐 在线访问

**网站地址：** https://akozvhsg.manus.space

## 📋 项目特点

- ✅ **完整内容复制**：一比一复制PDF文档中的所有内容
- ✅ **易术研究Logo**：集成了易术研究的官方Logo
- ✅ **响应式设计**：完美适配桌面端和移动端
- ✅ **现代化UI**：使用Tailwind CSS和shadcn/ui组件
- ✅ **可折叠内容**：支持展开/收起各个章节
- ✅ **美观排版**：专业的视觉设计和布局
- ✅ **GitHub部署友好**：代码具有完全的可移植性

## 🛠 技术栈

- **前端框架**：React 18
- **构建工具**：Vite
- **样式框架**：Tailwind CSS
- **UI组件**：shadcn/ui
- **图标库**：Lucide React
- **包管理器**：pnpm

## 📁 项目结构

```
qingdao-ai-meeting/
├── public/                 # 静态资源
├── src/
│   ├── assets/            # 图片资源（包含易术研究Logo）
│   ├── components/        # React组件
│   │   └── ui/           # shadcn/ui组件库
│   ├── App.jsx           # 主应用组件
│   ├── App.css           # 样式文件
│   └── main.jsx          # 应用入口
├── package.json          # 项目依赖
├── vite.config.js        # Vite配置
└── README.md            # 项目说明
```

## 🚀 本地开发

### 环境要求

- Node.js 18+
- pnpm（推荐）或 npm

### 安装依赖

```bash
pnpm install
# 或
npm install
```

### 启动开发服务器

```bash
pnpm dev
# 或
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
pnpm build
# 或
npm run build
```

构建文件将生成在 `dist/` 目录中

## 📦 部署到GitHub Pages

### 方法一：使用GitHub Actions（推荐）

1. 将项目推送到GitHub仓库
2. 在仓库中创建 `.github/workflows/deploy.yml` 文件：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist
```

3. 在仓库设置中启用GitHub Pages，选择 `gh-pages` 分支

### 方法二：手动部署

1. 构建项目：
```bash
npm run build
```

2. 将 `dist/` 目录内容推送到 `gh-pages` 分支

### 方法三：使用Vercel/Netlify

项目完全兼容Vercel和Netlify等现代部署平台，只需连接GitHub仓库即可自动部署。

## 📱 响应式设计

网站针对不同设备进行了优化：

- **桌面端**：完整的多列布局，丰富的交互效果
- **平板端**：自适应布局，保持良好的阅读体验
- **手机端**：单列布局，触摸友好的交互设计

## 🎨 设计特色

- **渐变背景**：蓝色系渐变营造专业氛围
- **卡片式布局**：清晰的内容分区
- **可折叠章节**：提升用户体验和页面性能
- **图标装饰**：增强视觉识别度
- **阴影效果**：增加页面层次感

## 📄 内容结构

网站包含以下主要章节：

1. **会议背景与目的**
2. **调研结论概述**
3. **关键痛点与发展障碍**
4. **政策建议与行动清单**
5. **近期可落地的三项优先行动**

每个章节都支持展开/收起功能，方便用户快速浏览和深入阅读。

## 🔧 自定义配置

### 修改Logo

替换 `src/assets/yishu-logo.png` 文件即可更换Logo

### 修改内容

编辑 `src/App.jsx` 文件中的 `sections` 和 `meetingDetails` 数据

### 修改样式

- 全局样式：编辑 `src/App.css`
- 组件样式：使用Tailwind CSS类名

## 📞 联系信息

如有问题或建议，请联系项目维护者。

---

© 2024 青岛市政研室×智能体创业公司调研会 | 易术研究

