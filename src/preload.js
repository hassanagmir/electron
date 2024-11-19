const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
    fetchDate: (url) => ipcRenderer.invoke('fetch-date', url)
});

