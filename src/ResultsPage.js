import React from "react";
import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';  
import {
  RedoOutlined
} from '@ant-design/icons';
import {data} from './data.js';

export const ResultsPage = props => {
    let { node, setNode } = props;
    return (
        <div class="centered">
            <div class="">
                <div class="text-center">
                    <h1 class="customFont">{node.message}</h1>
                    <a href="#" onClick = {() => setNode(data)}>Want to retry for a friend?</a>
                </div>
            </div>
      </div>
    )
}