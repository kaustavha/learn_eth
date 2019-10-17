import React from "react";

import { TransactionBadge, Text } from "@aragon/ui";
import TransactionDetailPopover from "./TransactionDetailPopover";

export default function ListTransactions(props) {
    const txs = props.transactions;
    return (
        <div className="transactionList">
            <Text>Transactions: </Text>
            <ol>
                { txs.map(tx => <li key={ tx.hash } className="listedTransaction">
                    <Text color='black'>
                        Tx: <TransactionBadge transaction={ tx.hash } />,
                        Value: { JSON.stringify(tx.value) },
                    </Text>
                    <TransactionDetailPopover transaction={ tx } />
                </li>) }
            </ol>
        </div>
    );
}
