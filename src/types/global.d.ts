declare interface IChannelInfo {
  appId: string;
  channel: string;
  token: string;
  uid: number | string | null;
  cameraId: string;
  microphoneId: string;
  videoProfile: string;
  mode: "live" | "rtc";
  codec: "vp8" | "h264";
}
