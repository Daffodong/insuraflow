import React from "react";
import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';  
import {
  RedoOutlined
} from '@ant-design/icons';
import {data} from './data.js';

export const Choices = props => {
    let { node, setNode, parentNode } = props;
    switch (node.type) {
      case "START":
        return (
            <div>
              <button class="space yellowblack-button" block="true" type="primary" onClick = {() => setNode(node.start)}>START</button>
            </div>
        );
      case "QUESTION":
        return (
            <div>
                <Button class="space" onClick = {() => setNode(node.yes)}>Yes</Button>
                <Button class="space" onClick = {() => setNode(node.no)}>No</Button>
                <Button class="space" onClick = {() => setNode(data)}><RedoOutlined /></Button>
            </div>
        );
      case "PASS":
        return (
            <div>
              <Button class="space" onClick = {() => setNode(node.next)}>Continue</Button>
            </div>
        )   
      default:
        return <div />;
    }
  };
  