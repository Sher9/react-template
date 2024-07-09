import React, { useState } from 'react';
import { Button, Tabs, theme } from 'antd'
import { CloseOutlined, RedoOutlined } from '@ant-design/icons'

type TargetKey = React.MouseEvent | React.KeyboardEvent | string;

const initialItems = [
  { label: 'Tab 1', key: '1' },
  { label: 'Tab 2', key: '2' },
  {
    label: 'Tab 3',
    key: '3',
    closable: false,
  },
];


function MyTags() {
  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);


  const {
    token: { colorBgContainer },
  } = theme.useToken();


  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };


  const remove = (targetKey: TargetKey) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove',
  ) => {
    if (action === 'remove') {
      remove(targetKey);
    }
    return
  };

  const tabCloseOther = () => {

  }


  const tabRefresh = () => {

  }

  const operations = (
    <>
      <Button onClick={tabRefresh} className="mx-[5px]" type="primary" size="small" title="刷新" icon={<RedoOutlined />} />
      <Button onClick={tabCloseOther} type="primary" size="small" title="关闭其他" icon={<CloseOutlined />} />
    </>
  )

  return (
    <Tabs
      type="editable-card"
      hideAdd
      onChange={onChange}
      activeKey={activeKey}
      onEdit={onEdit}
      items={items}
      tabBarExtraContent={operations}
      size="small"
      style={{ margin: 0, background: colorBgContainer }}
    />
  )
}

export default MyTags
