import React from "react";
import './App.css';
import {
  RedoOutlined
} from '@ant-design/icons';
import {data} from './data.js';
import { Choices } from './Choices.js';
import {
    ForwardFilled   
  } from '@ant-design/icons';



export const ContinuePage = props => {
    let { node, setNode } = props;
    return (
        <div class="main centered">
               <div class="title"></div>
               <div class="content">
                    <h1 class="content-text"> 
                        {node.message}
                    </h1>
                    <div class="plain-text">
                        {node.notes}
                    </div>
                </div>
                <div class="footer yes-no-buttons-div">
                    <div class="bottom">
                        <button class="option continue" onClick = {() => setNode(node.next)}>
                            PROCEED
                        </button>
                    </div>
                </div>
                {
                    node.recommendations !== undefined ?
                        (<div class="recommendations">
                            <span>{node.recommendationIntro}</span>
                            <ul>
                                {


                                    node.recommendations.map((value, index) => {
                                        return (
                                            <li key={index}><a href={value.link} target="_blank">{value.message}</a></li>
                                        )
                                    })



                                }
                            </ul>
                        </div>) : ""
                }
        </div>
    )
}