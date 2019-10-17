import React from "react";

import ListTransactions  from "./ListTransactions";
import Popover from "./Popover";

export default function TransactionListPopover(props) {
    return (
        <Popover title="View Transactions" btnMode={props.btnMode}>
            <ListTransactions transactions={props.transactions} />
        </Popover>
    )
}
