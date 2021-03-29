import React from 'react';
import { Switch } from 'antd';
import { ComponentWrapper } from './index.styled';
import './main.less';




const TestComponent: React.FC = () => {

  return <ComponentWrapper>
    <Switch checkedChildren="Да" unCheckedChildren="Нет" />
    </ComponentWrapper>
};


export default TestComponent;
