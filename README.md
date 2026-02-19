# AI Chat - 多 API 支持的桌面聊天应用

基于 Electron 开发的 AI 聊天桌面应用，支持多个 AI 服务提供商。

## 功能特性

- ✨ 现代化深色主题界面
- 🔄 支持多个 API 提供商（OpenRouter、OpenAI、Claude、自定义）
- 💬 实时流式输出
- 📝 Markdown 渲染和代码高亮
- 💾 对话历史管理
- ⚙️ 丰富的生成参数配置
- 🎨 优雅的 UI 设计

## 支持的 API 提供商

1. **OpenRouter** - 访问多种开源模型（DeepSeek、Llama 等）
2. **OpenAI** - GPT-4、GPT-3.5-turbo 等
3. **Anthropic Claude** - Claude 3 系列模型
4. **自定义** - 任何兼容 OpenAI 格式的 API

## 开发环境运行

```bash
# 安装依赖
npm install

# 启动应用
npm start
```

## 打包为 Windows EXE

```bash
# 打包为安装程序
npm run build

# 打包为免安装版本（仅生成文件夹）
npm run build:dir
```

打包后的文件位于 `dist/` 目录。

## 使用说明

### 1. 配置 API

1. 点击左侧导航栏的设置图标
2. 在"API 设置"中选择提供商
3. 输入对应的 API Key
4. 选择或输入模型名称

### 2. 开始对话

1. 在底部输入框输入消息
2. 按 `Ctrl+Enter` 发送
3. AI 会实时流式返回回复

### 3. 管理对话

- 点击左侧历史图标查看所有对话
- 点击"新建对话"开始新的会话
- 点击对话项右侧的删除按钮删除对话

### 4. 调整参数

在设置面板中可以调整：
- Temperature（创造性）
- Top P、Top K（采样参数）
- Max Tokens（最大输出长度）
- Frequency/Presence Penalty（重复惩罚）
- 系统提示词

## 项目结构

```
ai-chat-app/
├── main.js              # Electron 主进程
├── index.html           # 聊天界面
├── package.json         # 项目配置
├── lib/                 # 本地依赖库
│   ├── marked.min.js
│   ├── highlight.min.js
│   └── github-dark.min.css
└── assets/              # 资源文件
    └── ICON_README.md   # 图标说明
```

## 技术栈

- **Electron** - 桌面应用框架
- **Marked.js** - Markdown 渲染
- **Highlight.js** - 代码语法高亮
- **原生 HTML/CSS/JS** - 无额外框架依赖

## 注意事项

1. **API Key 安全**：API Key 存储在本地 LocalStorage 中，请勿在不安全的环境中使用
2. **网络连接**：需要稳定的网络连接访问 API 服务
3. **Claude API**：Claude API 使用不同的请求格式，已自动适配
4. **图标**：首次运行使用默认图标，可参考 `assets/ICON_README.md` 添加自定义图标

## 常见问题

### Q: 如何获取 API Key？

- **OpenRouter**: 访问 https://openrouter.ai/ 注册并获取
- **OpenAI**: 访问 https://platform.openai.com/ 注册并获取
- **Claude**: 访问 https://console.anthropic.com/ 注册并获取

### Q: 为什么打包后的 EXE 很大？

Electron 应用包含完整的 Chromium 浏览器和 Node.js 运行时，通常在 100-150MB。这是正常现象。

### Q: 如何更换主题？

目前仅支持深色主题。如需自定义，可修改 `index.html` 中的 CSS 变量（`:root` 部分）。

## 许可证

MIT License
