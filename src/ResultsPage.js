import React from "react";
import { Button } from 'antd';
import './App.css';
import 'antd/dist/antd.css';
import {
    RedoOutlined
} from '@ant-design/icons';
import { data } from './data.js';

export const ResultsPage = props => {
    let { node, setNode } = props;
    return (
        <div class="centered">
            <div class="">
                <div class="text-center">
                    <h1 class="customFont">{node.message}</h1>
                    <button class="option continue" onClick={() => setNode(data)}>
                        RETRY FOR A FRIEND
                    </button>

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
        </div>
    )
}