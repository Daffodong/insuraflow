import React from "react";
import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';  
import {
  RedoOutlined
} from '@ant-design/icons';
import {data} from './data.js';

export const TitlePage = props => {
    let { node, setNode } = props;
    return (
        <div class="centered">
            <div class="main">
                <div class="text-center">
                    <h1 class="customFont">Do I need insurance?</h1>
                    <p class="negativeMargin">a guide by the people of r/phinvest</p>
                </div>
                <button class="space yellowblack-button" block="true" type="primary" onClick = {() => setNode(node.start)}>START</button>
            </div>
      </div>
    )
}