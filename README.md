# RTW Coding challenge

实现 agora 的一对一视频通话 demo： agora 是一家第三方在线音视频服务提供商，他们提供了 RTC SDK 可以实现各种在线音视频应用。请阅读其 API 文档，参照官方案例，实现一对一通话功能。

## 要求

1. 实现官方案例中的所有功能
2. 使用 React 渲染视图，使用状态来驱动 agora Stream 的播放/mute/unmute
3. UI 样式不用完全一致，可以使用第三方组件库（antd 等）
4. 使用 Promise 或 async/await 简化异步逻辑（可选）
5. 使用 Typescript（可选）
6. 尽可能完善地处理各个步骤可能出现的运行时错误（可选）

## 啟動方式

直接運行 build 資料夾

---
運行專案的話，需要做以下步驟：
agora 最新的 sdk 有個 typescript 的問題，修正後還沒有 release
https://github.com/AgoraIO/rtc-web-archive/issues/26
請 install 後到 node_modules/agora-rtc-sdk/index.d.ts 第 8 行插入以下代碼
```
export = AgoraRTC; 
```

## Planning

* 整理官方範例功能有以下 (要求 1)
  * 手動輸入 channel 資訊
    * APP ID, Channel Name, Token
  * 可設定輸入 UID
  * 列出、選擇 camera
  * 列出、選擇 microphone
  * 列出、選擇固定的視訊畫質
  * 選擇 live, rtc mode
  * 選擇 h264, vp8 codec
  * 加入頻道
  * 離開頻道
  * publish stream
  * unpublish stream
* 使用 create-react-app --template typescript 創建專案 (要求 2, 5)
* ~~使用 AgoraWebSDK-NG (要求 4)~~ 使用 NG 比較不能表現出`簡化`的做法，改回用舊版。
* UI 規劃上類似 hangout (要求 3)
  * 使用 Antd
  * 第一個畫面輸入 channel 資訊
    * App ID
    * Channel
    * Token
    * UID optional
    * camera select
    * microphone select
    * resolution select
    * mode radio
    * codec radio
  * 第二個畫面有3個按鈕
    * microphone -> audio track setEnabled
    * leave -> video/audio track leave
    * camera -> video track setEnabled

、

## 参考资料

* 官方文档：https://docs.agora.io/cn/Interactive Broadcast/API Reference/web/index.html
* 官方案例源码：https://github.com/AgoraIO/Basic-Video-Call/tree/master/One-to-One-Video/Agora-Web-Tutorial-1to1
