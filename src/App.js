import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data.js';
import { Choices } from './Choices.js';
import { TitlePage } from './TitlePage.js';
import { QuestionPage } from './QuestionPage.js';
import { ResultsPage } from './ResultsPage.js';
import { ContinuePage } from './ContinuePage.js';

import { Layout, Typography  } from 'antd';
import { Space, Card } from 'antd';
import { Row, Col, Divider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const [node, setNode] = useState(data);

  switch (node.type){
          case "START":
            return <TitlePage node={node} setNode={setNode} />;
          case "QUESTION":
            return <QuestionPage node={node} setNode={setNode} />;
          case "FINAL":
            return <ResultsPage node={node} setNode={setNode} />;
          case "PASS":
            return <ContinuePage node={node} setNode={setNode} />;              
          default:
              return <TitlePage node={node} setNode={setNode} />;
  }

}
      


export default App;
