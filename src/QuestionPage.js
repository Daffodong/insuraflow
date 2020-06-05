import React from "react";
import './App.css';
import {
  RedoOutlined
} from '@ant-design/icons';
import {data} from './data.js';
import { Choices } from './Choices.js';
import {
    CheckOutlined,
    CloseOutlined 
  } from '@ant-design/icons';



export const QuestionPage = props => {
    let { node, setNode } = props;
    return (
        <div class="main centered">
                <div class="title text-center">
                    <h1 class="customFont">Do I need insurance?</h1>
                    <p class="negativeMargin">a guide by the people of r/phinvest</p>
                </div>
               <div class="content">
                    <div class="yellowblack-text"> 
                        {node.message}
                    </div>
                    <div class="plain-text">
                        {node.notes}
                    </div>
                </div>
                <div class="footer yes-no-buttons-div">
                    <div class="bottom">
                        <button class="option left yes" onClick = {() => setNode(node.yes)}>
                            <CheckOutlined /> 
                        </button>
                        <button class="option right no" onClick = {() => setNode(node.no)}>
                            <CloseOutlined /> 
                        </button>
                    </div>
                </div>
        </div>
    )
}