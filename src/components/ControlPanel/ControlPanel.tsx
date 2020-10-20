import React, { FunctionComponent } from 'react';
import { Button } from 'antd';
import {
  AudioOutlined,
  AudioMutedOutlined,
  PhoneOutlined,
  UploadOutlined,
} from '@ant-design/icons';
import { Client } from 'agora-rtc-sdk';
import StreamPlayer from "agora-stream-player";
import useLocalStream, { StreamState } from '../../hooks/useLocalStream';
import useRemoteStream, { StreamState as RemoteStreamState } from '../../hooks/useRemoteStream';

import './ControlPanel.css';

interface IControlPanel {
  client: Client
  channelInfo: IChannelInfo
  onLeave?: () => void
}

const ControlPanel: FunctionComponent<IControlPanel> = ({
  client,
  channelInfo,
  onLeave = () => {},
}) => {
  const {
    streamRef,
    streamState,
    publishState,
    isMute,
    leave,
    publish,
    unpublished,
    mute,
    unmute,
  } = useLocalStream(client, channelInfo)
  const {
    streamRef: remoteStreamRef,
    streamState: remoteStreamState,
    leave: remoteLeave,
  } = useRemoteStream(client, channelInfo)
  return (
    <div className="control-panel">
      <div className="remote-stream">
        {
          remoteStreamState === RemoteStreamState.READY &&
          <StreamPlayer stream={remoteStreamRef.current} fit="cover" label="remote" />
        }
      </div>
      <div className="bottom">
        <Button
          shape="circle"
          icon={isMute ? <AudioMutedOutlined /> : <AudioOutlined />}
          onClick={() => {
            isMute ? unmute() : mute()
          }}
        />
        <Button shape="circle" danger icon={<PhoneOutlined />} onClick={async () => {
          await leave()
          await remoteLeave()
          onLeave()
        }} />
        <Button
          shape="circle"
          type={publishState ? 'default' : 'primary'}
          icon={<UploadOutlined />} onClick={async () => {
            publishState ? unpublished() : publish()
          }}
        />
        <div className="local-stream">
          {
            streamState === StreamState.READY &&
            <StreamPlayer stream={streamRef.current} fit="contain" label="local" />
          }
        </div>
      </div>
    </div>
  )
}

export default ControlPanel;
