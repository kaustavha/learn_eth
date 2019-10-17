import React from "react";
import {Text} from "@aragon/ui";

export default function BlockTransactionValueSum(props) {
    let txs = props.transactions;
    let total = 0;
    if (txs) txs.forEach(tx => total += parseInt(tx.value));
    return (<Text>Total Block Value: { total }</Text>)
}
