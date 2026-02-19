const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的文件操作 API 给渲染进程
contextBridge.exposeInMainWorld('electronAPI', {
  // 读取配置文件
  readData: (filename) => ipcRenderer.invoke('read-data', filename),

  // 写入配置文件
  writeData: (filename, data) => ipcRenderer.invoke('write-data', filename, data),

  // 检查文件是否存在
  fileExists: (filename) => ipcRenderer.invoke('file-exists', filename),

  // 加密数据（使用系统级加密）
  encryptData: (plaintext) => ipcRenderer.invoke('encrypt-data', plaintext),

  // 解密数据（使用系统级加密）
  decryptData: (encrypted) => ipcRenderer.invoke('decrypt-data', encrypted)
});
