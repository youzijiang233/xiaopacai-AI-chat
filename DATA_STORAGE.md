# 数据存储说明

## 存储位置

应用数据现在存储在应用安装目录下的 `data` 文件夹中：

```
<应用安装目录>/data/
├── settings.json       # 用户设置（API 配置、参数等）
├── conversations.json  # 所有对话历史
└── active.json         # 当前活动对话 ID
```

## 存储内容

### settings.json
- API 提供商选择
- API 端点地址
- **API Key（使用 Electron safeStorage 系统级加密）**
- 模型名称
- 所有参数（Temperature、Top P、Top K 等）
- 系统提示词
- 功能开关（流式输出、Markdown、代码高亮）
- 侧边栏状态

### conversations.json
- 所有历史对话记录
- 每个对话包含：
  - 对话 ID
  - 对话标题
  - 消息列表
  - 创建时间
  - 更新时间

### active.json
- 当前选中的对话 ID

## 安全性

### API Key 加密

应用使用 **Electron safeStorage API** 进行系统级加密：

#### Windows
- 使用 DPAPI (Data Protection API)
- 密钥由 Windows 系统管理
- 只有当前用户在当前电脑上才能解密

#### macOS
- 使用 Keychain
- 密钥存储在系统钥匙串中
- 受系统级保护

#### Linux
- 使用 libsecret
- 密钥存储在系统密钥环中

### 安全特性

✅ **系统级加密**：使用操作系统提供的加密服务
✅ **用户绑定**：只有当前用户能解密
✅ **设备绑定**：只能在加密的设备上解密
✅ **无硬编码密钥**：不在代码中存储密钥
✅ **防止简单破解**：即使获取文件也无法轻易解密

### 降级支持

- **生产环境（Electron）**：使用 safeStorage 系统级加密
- **开发环境（浏览器）**：降级到 localStorage + 简单 XOR 加密（仅用于测试）

## 数据迁移

如果你之前使用的是 localStorage 版本，数据存储在：
```
C:\Users\<用户名>\AppData\Roaming\AI Chat\Local Storage\leveldb\
```

新版本会自动在应用目录创建 `data` 文件夹。旧数据不会自动迁移，需要手动导出/导入。

## 备份建议

定期备份 `data` 文件夹：
```
<应用安装目录>/data/
```

**注意**：备份的 settings.json 中的 API Key 是加密的，只能在原设备上使用。如果需要在其他设备上使用，需要重新输入 API Key。

## 安全建议

1. **定期更换 API Key**：建议每 3-6 个月更换一次
2. **不要分享配置文件**：即使加密了，也不要分享 settings.json
3. **保护设备安全**：使用强密码保护你的电脑
4. **及时更新应用**：获取最新的安全补丁
