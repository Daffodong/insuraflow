import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {data} from './data.js';
import { Choices } from './Choices.js';
import { Layout, Typography  } from 'antd';
import { Space, Card } from 'antd';
import { Row, Col, Divider } from 'antd';

const { Header, Footer, Sider, Content } = Layout;
const { Title, Text } = Typography;

function App() {
  const [node, setNode] = useState(data);

  return (
    <div>
      <div class="centered">
        <div class="main">
          <div class="text-center"><h1 class="customFont">Do I need insurance?</h1><p class="negativeMargin">a guide by the people of r/phinvest</p></div>

          {
            node.message != "" ? (<p class="yellowblack-text">{node.message}</p>) : (<div />)
          }
          {
            node.notes !== undefined ? (<div class="plain-text">{node.notes}</div>) : (<div />)
          }
          
          <Choices node={node} setNode={setNode} />
        </div>
      </div>
    </div>
  );
}

export default App;
