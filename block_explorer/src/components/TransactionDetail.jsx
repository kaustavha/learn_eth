import React from "react";

import { TableRow, TableCell, TransactionBadge } from "@aragon/ui";

// Given props.tx obj, renders a table with its key-vals
// Used in TransactionDetailPopover for popover content 
export default function TransactionDetail(props) {
    const tx = props.transaction;
    let table = [];
    for (let key in tx) {
        table.push(
            <TableRow>
                <TableCell>
                    { key }
                </TableCell>
                <TableCell>
                    { tx[key] }
                </TableCell>
            </TableRow>
        )
    }
    return (
        <div>
            <h1>
                Transaction Details for 
                <TransactionBadge transaction={ tx.hash } />
            </h1>
            <hr/>
            <table role="presentation">
                { table }
            </table>
        </div>);
}
