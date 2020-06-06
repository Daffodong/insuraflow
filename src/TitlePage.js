import React from "react";
import 'antd/dist/antd.css';  
import './App.css';

export const TitlePage = props => {
    let { node, setNode } = props;
    return (
        <div class="centered">
            <div class="">
                <div class="text-center">
                    <h1 class="customFont">Do I need insurance?</h1>
                    <p class="negativeMargin">a guide by the people of r/phinvest discord</p>
                </div>
                <button class="option space start-button" block="true" type="primary" onClick = {() => setNode(node.start)}>START</button>
            </div>
      </div>
    )
}