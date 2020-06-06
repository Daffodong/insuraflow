import React, { useState } from 'react';

import { data } from './data.js';
import { TitlePage } from './TitlePage.js';
import { QuestionPage } from './QuestionPage.js';
import { ResultsPage } from './ResultsPage.js';
import { ContinuePage } from './ContinuePage.js';
import './App.css';

function App() {
  const [node, setNode] = useState(data);

  switch (node.type) {
    case "START":
      return <TitlePage node={node} setNode={setNode} />;
    case "QUESTION":
      return < QuestionPage node = { node } setNode = { setNode } />;
    case "FINAL":
      return <ResultsPage node={node} setNode={setNode} />;
    case "PASS":
      return <ContinuePage node={node} setNode={setNode} />;
    default:
      return <TitlePage node={node} setNode={setNode} />;
  }

}



export default App;
