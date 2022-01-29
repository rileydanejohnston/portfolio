import { Text, Title } from './styledHome';
import React from 'react';
import { HomeWrapper } from './styledHome';
import { Space } from 'antd';

export default function Home() {
  return (
    <HomeWrapper>
      <Space direction='vertical' size='medium'>
      <Title>Hi, I'm Riley Johnston</Title>
        <Text>I'm interested in new ideas. I became a web developer to turn new ideas into a reality.</Text>
        <Text>I like to use the MERN stack to build applications. I'm comfortable working on the frontend or the backend (although I think the backend is more fun).</Text>
        <Text>I also love tinkering with new technologies. I'm learning how to use the Ant Design library, which I used to create this page. It's awesome!</Text>
      </Space>
    </HomeWrapper>
  );
}
