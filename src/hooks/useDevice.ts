import { useState, useEffect } from 'react';
import AgoraRTC from 'agora-rtc-sdk';

export default (type: string) => {
  const [cameraList, setCameraList] = useState<AgoraRTC.MediaDeviceInfo[]>()
  useEffect(() => {
    new Promise(res => AgoraRTC.getDevices(res)).then(devices => {
      setCameraList(
        (devices as AgoraRTC.MediaDeviceInfo[]).filter(device => !type || device.kind === type)
      )
    })
  }, [])
  return cameraList
}