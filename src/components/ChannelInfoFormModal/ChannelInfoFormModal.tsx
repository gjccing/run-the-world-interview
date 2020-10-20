import React, { useState, useEffect, FunctionComponent } from 'react';
import { Modal, Form, Input, Divider, Button, Select, Radio } from 'antd';
import useDevice from '../../hooks/useDevice';
import './ChannelInfoFormModal.css';

export interface IChannelInfo {
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

export interface IChannelInfoFormModalProp {
  visible: boolean;
  defaultValues?: IChannelInfo;
  onJoin: (data: IChannelInfo) => void;
}

const ChannelInfoFormModal: FunctionComponent<IChannelInfoFormModalProp> = ({
  visible,
  defaultValues,
  onJoin,
}) => {
  const [showAdvance, setShowAdvance] = useState<boolean>(false);
  const [form] = Form.useForm<IChannelInfo>();
  const cameraList = useDevice('videoinput')
  const microphoneList = useDevice('audioinput')
  useEffect(() => { form.setFieldsValue({ cameraId: cameraList?.[0].deviceId }) }, [cameraList])
  useEffect(() => { form.setFieldsValue({ microphoneId: microphoneList?.[0].deviceId }) }, [microphoneList])
  return (
    <Modal
      visible={visible}
      title="Join a channel"
      okText="Join"
      onOk={() => {
        form
          .validateFields()
          .then(values => onJoin(values as IChannelInfo));
      }}
      cancelButtonProps={{
        style: { display: 'none' }
      }}
    >
      <Form
        form={form}
        className="channel-info-form"
        name="basic"
        layout="vertical"
        onFinish={onJoin}
      >
        <Form.Item
          label="App ID"
          name="appId"
          initialValue={defaultValues?.appId}
          rules={[{ required: true, message: 'Please input App ID!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Channel"
          name="channel"
          initialValue={defaultValues?.channel}
          rules={[{ required: true, message: 'Please input Channel Name!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Token"
          name="token"
          initialValue={defaultValues?.token}
          rules={[{ required: true, message: 'Please input Token!' }]}
        >
          <Input />
        </Form.Item>
        <Divider>
          <Button type="link" onClick={() => setShowAdvance(!showAdvance)}>
            {!showAdvance ? 'show' : 'hide'} advance setting
          </Button>
        </Divider>
        <div className={`advance-setting ${showAdvance ? 'show' : 'hide'}`}>
          <Form.Item
            label="UID"
            name="uid"
            initialValue={defaultValues?.uid}
          >
            <Input type="number" step="1" />
          </Form.Item>
          <Form.Item
            label="CAMERA"
            name="cameraId"
          >
            <Select
              options={cameraList?.map(({ deviceId, label }, index) =>
                ({ value: deviceId, label: label || `camera-${index}` })
              )}
            />
          </Form.Item>
          <Form.Item
            label="MICROPHONE"
            name="microphoneId"
          >
            <Select
              options={microphoneList?.map(({ deviceId, label }, index) =>
                ({ value: deviceId, label: label || `camera-${index}` })
              )}
            />
          </Form.Item>
          <Form.Item
            label="CAMERA RESOLUTION"
            name="videoProfile"
            initialValue={''}
          >
            <Select>
              <Select.Option value="">default</Select.Option>
              <Select.Option value="480p_1">480p</Select.Option>
              <Select.Option value="720p_1">720p</Select.Option>
              <Select.Option value="1080p_1">1080p</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="MODE"
            name="mode"
            initialValue={'live'}
          >
            <Radio.Group>
              <Radio value="live">live</Radio>
              <Radio value="rtc">rtc</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            label="CODEC"
            name="codec"
            initialValue={'h264'}
          >
            <Radio.Group>
              <Radio value="h264">h264</Radio>
              <Radio value="vp8">vp8</Radio>
            </Radio.Group>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}

export default ChannelInfoFormModal;