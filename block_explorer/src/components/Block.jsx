import React, {useState, useEffect} from "react";
import { TransactionBadge, ProgressBar, Card, Text } from "@aragon/ui";
import BlockTransactionValueSum from "./BlockTransactionValueSum";
import TransactionPopover from "./TransactionPopover";

export default function Block(props) {
    const [interestingTxs, setInterestingTxs] = useState([]);
    const [progress, setProgress] = useState(0);

    const web3 = props.web3;
    const blknum = props.blknum;
    const blk = props.blk;

    useEffect(() => {
        blk.transactions.forEach(tx => {
            web3.eth.getTransaction(tx, (err, tx) => {
                if (err) return;
                if (tx && parseInt(tx.value) > 0) {
                    setInterestingTxs(intTxs => {
                        intTxs[blknum] = interestingTxs[blknum] ? interestingTxs[blknum] : [];
                        intTxs[blknum].push(tx);
                        return intTxs;
                    });
                }
                setProgress(p => p + 1);
            })
        })
    }, [])

    return (
        <Card>
            <Text color='black'>
                Block Number: { blknum }<br />
                <TransactionBadge transaction={ blk.hash } /><br />
                <BlockTransactionValueSum transactions={ interestingTxs[blknum] } /><br />
                Interesting Txs: { interestingTxs[blknum] ? interestingTxs[blknum].length : 0 }
            </Text>
            <div className="blockTxFetchProgressBar">
                <ProgressBar
                    animate={ false }
                    value={ (progress / blk.transactions.length).toFixed(1) } />
            </div>
            <TransactionPopover
                btnMode={ (progress === blk.transactions.length) ? "strong" : "outline" }
                transactions={ interestingTxs[blknum] ? interestingTxs[blknum] : [] } />
        </Card>
    )
}
