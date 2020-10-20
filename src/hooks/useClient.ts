import { useState, useRef } from 'react';
import AgoraRTC, { Client } from 'agora-rtc-sdk';

export enum ClientState {
  WAITING_CHANNEL_INFO,
  INITIALING,
  JOINED,
}

export default () => {
  const clientRef = useRef<Client>()
  const [clientState, setClientState] = useState<ClientState>(ClientState.WAITING_CHANNEL_INFO)
  
  return {
    clientRef,
    clientState,
    join: async (channelInfo: IChannelInfo) => {
      setClientState(ClientState.INITIALING)
      clientRef.current = AgoraRTC.createClient({
        mode: channelInfo.mode,
        codec: channelInfo.codec
      })
      await new Promise((res, rej) =>
        clientRef.current?.init(channelInfo.appId, res, rej))
      await new Promise((res, rej) =>
        clientRef.current?.join(channelInfo.token, channelInfo.channel, channelInfo.uid, res, rej))
      setClientState(ClientState.JOINED)
    },
    leave: async () => {
      await new Promise((res, rej) =>
        clientRef.current?.leave(res, rej));
      setClientState(ClientState.WAITING_CHANNEL_INFO)
    }
  }
}