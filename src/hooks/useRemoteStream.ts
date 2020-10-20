import { useState, useRef, useEffect } from 'react';
import { Client, Stream } from 'agora-rtc-sdk';

export enum StreamState {
  WAITING,
  INITIALING,
  READY,
}

export default (client: Client, channelInfo: IChannelInfo) => {
  const streamRef = useRef<Stream>()
  const [streamState, setStreamState] = useState<StreamState>(StreamState.WAITING)
  
  useEffect(() => {
    if (client) {
      (async () => {
        setStreamState(StreamState.INITIALING)
        client.on('stream-added', async (evt) => {
          if (!streamRef.current) {
            setStreamState(StreamState.INITIALING)
            streamRef.current = await new Promise((res, rej) => {
              client.subscribe(evt.stream, {} , rej)
              const subscribed = () => {
                client.off('stream-subscribed', subscribed)
                res(evt.stream)
              }
              client.on('stream-subscribed', subscribed)
            })
            setStreamState(StreamState.READY)
          }
            
        })
        client.on('stream-removed', async (evt) => {
          if(streamRef.current?.isPlaying()) {
            streamRef.current?.stop()
          }
          streamRef.current = undefined
          setStreamState(StreamState.WAITING)
        })
      })()
    }
  }, [client])

  return {
    streamRef,
    streamState,
    leave: () => {
      if(streamRef.current?.isPlaying()) {
        streamRef.current?.stop()
      }
      streamRef.current?.close();
      setStreamState(StreamState.WAITING)
    }
  }
}