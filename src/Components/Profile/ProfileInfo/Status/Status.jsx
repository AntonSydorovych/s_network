import React from "react";

export const Status = (props) => {

    return <div>
        {!props.focused && <div>
                    <span onDoubleClick={props.focusEnabled}>{!props.status ? 'here can be your status' :
                        props.status}</span>
        </div>}
        {props.focused && <div>
                    <textarea type="text" value={props.status} autoFocus={true}
                              onChange={props.updateStatusText} />
            <div>
                <span><button onClick={props.setStatus}>Change my status</button></span>
                <span><button onClick={props.focusDisabled}>Cancel</button></span>

            </div>
        </div>}
    </div>
}