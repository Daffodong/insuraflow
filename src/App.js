import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data.js';
import { Choices } from './Choices.js';
import { TitlePage } from './TitlePage.js';
import { QuestionPage } from './QuestionPage.js';

import { Layout, Typography  } from 'antd';
import { Space, Card } from 'antd';
import { Row, Col, Divider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const [node, setNode] = useState(data);

  return (
    <div>
      {
        node.type == "START" ? 
          <TitlePage node={node} setNode={setNode} /> : 
          <QuestionPage node={node} setNode={setNode} />
      }
      
    </div>
  );
}

export default App;
