# 更新日志

## v1.0.1 (2024-02-19)

### 🎨 UI 优化和问题修复

- **API 配置简化**
  - 只保留 OpenRouter 和自定义选项
  - 移除 OpenAI 和 Claude 预设选项
  - 简化配置流程

- **新建对话按钮优化**
  - 缩小按钮宽度至 120px
  - 调整按钮位置至"对话列表"标题右侧
  - 改进按钮样式为长方形

- **消息显示修复**
  - 修复用户消息气泡前的多余空行
  - 修复输入框上下间距不一致问题
  - 优化 textarea 对齐方式

- **API Key 功能改进**
  - 保留 API Key 自动保存功能
  - 添加 API Key 格式验证
  - 防止非 ASCII 字符导致的 Fetch Headers 错误

### 技术细节

- 修改 `.input-wrap` CSS：`align-items:center`，`padding:9px 15px`
- 修改 `appendBubble` 函数：移除 HTML 模板中的换行符
- 添加 API Key ASCII 字符验证：`/^[\x00-\x7F]*$/`
- 调整新建按钮 CSS：`margin-left:8px; margin-right:auto`

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
