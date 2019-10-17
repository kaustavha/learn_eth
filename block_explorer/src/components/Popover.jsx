import React, {useState} from "react";
import { Button, Modal } from "@aragon/ui";

export default function Popover(props) {
    const [opened, setOpened] = useState(false)
    const title = props.title;
    const children = props.children;
    const btnMode = props.btnMode;
    const openbtnSize = props.openbtnSize;
    return (
        <div>
            <Button 
            mode={ btnMode ? btnMode : 'normal' }
            size={openbtnSize ? openbtnSize : "normal"}
            onClick={ () => setOpened(true) } tabIndex={ 0 }>
                { title ? title : "Open Window" }
            </Button>

            <Modal
                visible={ opened }
                onClose={ () => setOpened(false) }>

                { children }

                <Button emphasis="negative" mode={"strong"} onClick={ () => setOpened(false) } tabIndex={ 0 }>
                    Close window
                </Button>
            </Modal>
        </div>
    )
}
