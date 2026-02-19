# 快速开始指南

## 立即运行应用

```bash
cd f:/code/cloude_code/ai-chat-app
npm start
```

应用将在几秒钟内启动，显示 AI Chat 界面。

## 首次使用步骤

### 1. 配置 API（必须）

启动后：
1. 左侧导航栏点击 ⚙️ 设置图标
2. 在"API 设置"部分：
   - 选择 API 提供商（默认 OpenRouter）
   - 输入你的 API Key
   - 确认模型名称

### 2. 开始聊天

1. 在底部输入框输入问题
2. 按 `Ctrl+Enter` 发送
3. 等待 AI 回复（支持实时流式输出）

## 打包为 EXE

### 方法 1：完整安装包（推荐）

```bash
npm run build
```

生成的文件：`dist/AI Chat Setup 1.0.0.exe`（约 100-150MB）

### 方法 2：免安装版本

```bash
npm run build:dir
```

生成的文件夹：`dist/win-unpacked/`，直接运行 `AI Chat.exe`

## API Key 获取

### OpenRouter（推荐新手）
- 网址：https://openrouter.ai/
- 优势：一个 Key 访问多个模型，价格便宜
- 注册后在 Keys 页面创建

### OpenAI
- 网址：https://platform.openai.com/
- 需要：信用卡绑定
- 在 API Keys 页面创建

### Anthropic Claude
- 网址：https://console.anthropic.com/
- 需要：申请 API 访问权限
- 在 API Keys 页面创建

## 测试建议

1. **首次测试**：使用 OpenRouter + DeepSeek 模型（便宜且快速）
2. **输入简单问题**：如"你好，介绍一下你自己"
3. **检查功能**：
   - 流式输出是否正常
   - Markdown 渲染是否正确
   - 代码高亮是否生效
   - 对话历史是否保存

## 常用快捷键

- `Ctrl+Enter` - 发送消息
- `Enter` - 换行

## 故障排除

### 问题：应用无法启动
- 确保已运行 `npm install`
- 检查 Node.js 版本（建议 16+）

### 问题：API 调用失败
- 检查 API Key 是否正确
- 检查网络连接
- 查看错误提示信息

### 问题：界面显示异常
- 清除浏览器缓存（Ctrl+Shift+Delete）
- 重启应用

## 下一步

- 尝试不同的 AI 模型
- 调整生成参数（Temperature、Top P 等）
- 自定义系统提示词
- 管理对话历史
