# API Key 加密功能测试指南

## 功能说明

API Key 现在使用 XOR + Base64 加密存储在 LocalStorage 中，提高了安全性。

## 测试步骤

### 1. 启动应用

```bash
cd f:/code/cloude_code/ai-chat-app
npm start
```

### 2. 输入 API Key

1. 点击左侧设置图标 ⚙️
2. 在"API 设置"部分找到"API Key"输入框
3. 输入任意测试 API Key，例如：`sk-test-123456789`
4. 注意输入框下方显示：🔒 API Key 已加密存储

### 3. 验证加密效果

**方法 1：使用开发者工具**

1. 按 `F12` 或 `Ctrl+Shift+I` 打开开发者工具
2. 切换到 "Application" 标签
3. 左侧展开 "Local Storage"
4. 点击你的应用域名
5. 找到 `dschat_s` 键
6. 查看 `apiKey` 字段的值

**预期结果：**
- ❌ 不应该看到明文：`"apiKey": "sk-test-123456789"`
- ✅ 应该看到加密文本：`"apiKey": "GxQXBhcKFAoaCxYLGg4XCQ=="`

**方法 2：使用控制台**

在开发者工具的 Console 标签中输入：

```javascript
// 查看加密后的数据
JSON.parse(localStorage.getItem('dschat_s')).apiKey
```

应该返回类似 `"GxQXBhcKFAoaCxYLGg4XCQ=="` 的加密字符串。

### 4. 测试解密功能

1. 关闭应用（完全退出）
2. 重新启动应用：`npm start`
3. 打开设置面板
4. 检查 API Key 输入框

**预期结果：**
- ✅ API Key 应该正确显示（虽然是密码形式的点点）
- ✅ 可以正常使用 API 进行聊天

### 5. 测试向后兼容性

如果你之前保存过明文 API Key：

1. 应用会自动识别并正常加载
2. 下次保存时会自动转换为加密格式

## 加密原理

### 加密过程

```
原始 API Key → XOR 加密 → Base64 编码 → 存储
```

### 解密过程

```
存储的数据 → Base64 解码 → XOR 解密 → 原始 API Key
```

### 密钥

使用固定密钥：`AI-CHAT-SECRET-KEY-2024`

## 安全性说明

### ✅ 优点

1. **防止普通用户读取** - 不懂技术的人无法直接看到 API Key
2. **无需额外依赖** - 不增加应用体积
3. **向后兼容** - 自动处理旧的明文数据
4. **透明加密** - 用户无感知，自动完成

### ⚠️ 限制

1. **不是强加密** - 有技术能力的人可以破解
2. **密钥硬编码** - 密钥在源代码中
3. **适用场景** - 适合个人使用，不适合企业级安全

### 🔐 更高安全性方案

如需更强的安全性，可以升级到：

**Electron safeStorage API**
- 使用操作系统的加密机制
- Windows: DPAPI
- macOS: Keychain
- Linux: libsecret

## 常见问题

### Q: 如果忘记 API Key 怎么办？

A: API Key 存储在 LocalStorage 中，可以通过以下方式清除：

```javascript
// 在开发者工具控制台中执行
localStorage.removeItem('dschat_s');
```

然后重新输入 API Key。

### Q: 加密后的数据在哪里？

A: Windows 系统中位于：
```
C:\Users\<用户名>\AppData\Roaming\ai-chat-app\Local Storage\leveldb\
```

### Q: 可以手动解密吗？

A: 可以，在开发者工具控制台中：

```javascript
// 解密函数
function simpleDecrypt(encrypted) {
  const decoded = atob(encrypted);
  const key = 'AI-CHAT-SECRET-KEY-2024';
  let result = '';
  for (let i = 0; i < decoded.length; i++) {
    result += String.fromCharCode(decoded.charCodeAt(i) ^ key.charCodeAt(i % key.length));
  }
  return result;
}

// 使用
const encrypted = JSON.parse(localStorage.getItem('dschat_s')).apiKey;
console.log(simpleDecrypt(encrypted));
```

## 测试清单

- [ ] API Key 输入后自动加密
- [ ] LocalStorage 中看到加密文本
- [ ] 重启应用后 API Key 正确恢复
- [ ] API 调用功能正常
- [ ] 显示"🔒 API Key 已加密存储"提示
- [ ] 旧的明文数据能正常迁移

## 下一步

如果测试通过，可以：

1. 重新打包应用：`npm run build`
2. 分发新版本 EXE
3. 或继续添加其他功能

---

**版本**: 1.0.0
**更新日期**: 2024-02-19
**功能**: API Key 加密存储
