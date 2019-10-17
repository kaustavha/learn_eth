import React from 'react';

import Popover from './Popover';
import TransactionDetail from './TransactionDetail';

export default function TransactionDetailPopover(props) {
    return (
        <Popover title="View Transaction Details" btnMode={"strong"} openbtnSize={"small"}>
            <TransactionDetail transaction={props.transaction} />
        </Popover>
    )
}
