import React from "react";
import Block from "./Block";

class Blocks extends React.Component {
    constructor(props) {
        super(props);
        this.getBlocks = this.getBlocks.bind(this);
        this.state = {
            blockList: []
        }
        this.totalBlocks = props.totalBlocks;
        this.web3 = props.web3;
    }

    componentDidMount() {
        this.getBlocks();
    }

    getBlocks() {
        return this.web3.eth.getBlockNumber((err, blknum) => {
            if (err) return;
            for (let i = this.totalBlocks; i > 0; i--) {
                this.web3.eth.getBlock(blknum - i, (err, ret) => {
                    if (err) return;
                    let blockList = this.state.blockList;
                    blockList[blknum - i] = ret;
                    this.setState({ blockList: blockList });
                });
            }
        });
    }
    render() {
        let blocks = this.state.blockList.map((blk, blknum) => {
            return (<div className="floatLeft">
                <Block blk={ blk } blknum={ blknum } web3={ this.web3 } />
            </div>)
        })
        return (
            <div>{ blocks }</div>
        )
    }
}

export default Blocks;
