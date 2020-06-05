import React from "react";
import './App.css';
import {
    CheckOutlined,
    CloseOutlined
} from '@ant-design/icons';

export const QuestionPage = props => {
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
                    <button class="option left yes" onClick={() => setNode(node.yes)}>
                        <CheckOutlined />
                    </button>
                    <button class="option right no" onClick={() => setNode(node.no)}>
                        <CloseOutlined />
                    </button>
                </div>
            </div>

        </div>
    )
}