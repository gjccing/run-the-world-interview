import { useState, useRef, useEffect } from 'react';
import AgoraRTC, { Client, Stream } from 'agora-rtc-sdk';

export enum StreamState {
  WAITING,
  INITIALING,
  READY,
}

export default (client: Client, channelInfo: IChannelInfo) => {
  const streamRef = useRef<Stream>()
  const [streamState, setStreamState] = useState<StreamState>(StreamState.WAITING)
  const [publishState, setPublishState] = useState<boolean>(false)
  const [isMute, setIsMute] = useState<boolean>(false)
  
  useEffect(() => {
    if (client) {
      (async () => {
        setStreamState(StreamState.INITIALING)
        const localStream = AgoraRTC.createStream({
          streamID: channelInfo.uid || 12345,
          video: true,
          audio: true,
          screen: false,
          cameraId: channelInfo.cameraId,
          microphoneId: channelInfo.microphoneId,
        });
        if (channelInfo.videoProfile)
          localStream.setVideoProfile(channelInfo.videoProfile)
        await new Promise((res, rej) =>
          localStream.init(res, rej));
        streamRef.current = localStream
        publish();
        setStreamState(StreamState.READY)
      })()
    }
  }, [client])

  const publish = async () => {
    await new Promise((res, rej) => {
      if (streamRef.current) {
        client.publish(streamRef.current, rej)
        const published = (evt: any) => {
          client.off('stream-published', published)
          res(evt.stream)
        }
        client.on('stream-published', published)
      }
    });
    setPublishState(true)
  }
  const unpublished = async () => {
    await new Promise((res, rej) => {
      if (streamRef.current) {
        client.unpublish(streamRef.current, rej)
        const unpublished = (evt: any) => {
          client.off('stream-unpublished', unpublished)
          res(evt.stream)
        }
        client.on('stream-unpublished', unpublished)
      }
    });
    setPublishState(false)
  }
  return {
    streamRef,
    streamState,
    publishState,
    isMute,
    leave: async () => {
      streamRef.current?.close();
      await unpublished()
      setStreamState(StreamState.WAITING)
    },
    publish,
    unpublished,
    mute: () => {
      streamRef.current?.muteAudio()
      setIsMute(true)
    },
    unmute: () => {
      streamRef.current?.unmuteAudio()
      setIsMute(false)
    }
  }
}