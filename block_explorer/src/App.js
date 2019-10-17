import React from 'react';
import './App.css';
import Web3 from 'web3';
import { Main} from '@aragon/ui'
import Blocks from "./components/Blocks";
const TOTAL_BLOCKS = 3;

const App = () => {
  if (!window || window.web3 == undefined || window.web3 == null || !window.web3.currentProvider) {
    return (<Main>
      <h1> This app needs a web3 object on window. Please try again after installing metamask or another web3 provider</h1>
    </Main>)
  }

  const web3 = new Web3(window.web3.currentProvider);
  return (<Main>
    <div className="App">
      <h1>Basic block explorer!</h1>
      <p>
        Please allow time for all blocks to finish gathering transactions before clicking on View transactions.
        You can tell via the progress bar.
      </p>
      <p>
        Fethcing {TOTAL_BLOCKS} blocks.
      </p>
      <Blocks totalBlocks={ TOTAL_BLOCKS } web3={ web3 } />
    </div>
  </Main>);
}

export default App;
