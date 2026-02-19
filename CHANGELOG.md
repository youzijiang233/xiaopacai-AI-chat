# 更新日志

## v1.0.1 (2024-02-19)

### 🔒 安全性改进

- **API Key 加密存储**
  - 使用 XOR + Base64 加密算法
  - 自动加密保存的 API Key
  - 向后兼容旧的明文数据
  - 添加安全提示 UI："🔒 API Key 已加密存储"

### 技术细节

- 添加 `simpleEncrypt()` 和 `simpleDecrypt()` 函数
- 修改 `saveSettings()` 自动加密 API Key
- 修改 `loadSettings()` 自动解密 API Key
- 无需额外依赖，不增加应用体积

---

## v1.0.0 (2024-02-19)

### ✨ 初始版本

#### 核心功能

- **多 API 支持**
  - OpenRouter（DeepSeek 等开源模型）
  - OpenAI（GPT-4、GPT-3.5）
  - Anthropic Claude（Claude 3 系列）
  - 自定义 API 端点

- **聊天功能**
  - 实时流式输出
  - Markdown 渲染
  - 代码语法高亮
  - 对话历史管理
  - 消息统计

- **参数配置**
  - Temperature、Top P、Top K
  - Frequency/Presence/Repetition Penalty
  - Min P、Top A
  - Max Tokens
  - 系统提示词

- **用户体验**
  - 深色主题 UI
  - 三栏布局（导航栏 + 侧边栏 + 聊天区）
  - 可折叠侧边面板
  - 平滑动画过渡
  - 快捷键支持（Ctrl+Enter）

#### 技术栈

- Electron 28.0.0
- Marked.js 9.1.6（Markdown 渲染）
- Highlight.js 11.9.0（代码高亮）
- 原生 HTML/CSS/JavaScript

#### 打包

- Windows EXE 安装包（NSIS）
- 应用大小：约 73MB
- 支持 Windows 7 及以上

---

## 计划中的功能

### v1.1.0（未来）

- [ ] 显示/隐藏 API Key 按钮
- [ ] API Key 验证功能
- [ ] 多账户配置支持
- [ ] 导出对话为文件
- [ ] 自定义应用图标
- [ ] 系统托盘支持

### v1.2.0（未来）

- [ ] 主题切换（浅色主题）
- [ ] 多语言支持
- [ ] 图片上传功能
- [ ] 文件附件支持
- [ ] 全局快捷键

### v2.0.0（未来）

- [ ] 升级到 Electron safeStorage（系统级加密）
- [ ] 插件系统
- [ ] 云同步功能
- [ ] 团队协作功能
