import React, { useState, FunctionComponent } from 'react';
import { Spin } from 'antd';
import ChannelInfoFormModal, { IChannelInfo } from './components/ChannelInfoFormModal';
import ControlPanel from './components/ControlPanel';
import useClient, { ClientState } from './hooks/useClient';

import './App.css';

const App: FunctionComponent = () => {
  const [channelInfo, setChannelInfo] = useState<IChannelInfo | null>(null)
  const { clientRef, clientState, join, leave } = useClient()
  return (
    <div className="App">
      {(() => {
        switch (clientState) {
          case ClientState.WAITING_CHANNEL_INFO:
          case ClientState.INITIALING:
            return <Spin size="large" />
          default:
            if (clientRef.current && channelInfo)
              return <ControlPanel
                client={clientRef.current}
                channelInfo={channelInfo}
                onLeave={() => { leave() }}
              />
        }
      })()}
      <ChannelInfoFormModal
        visible={clientState === ClientState.WAITING_CHANNEL_INFO}
        onJoin={(data) => {
          setChannelInfo(data)
          join(data)
        }}
      />
    </div>
  )
};

export default App;