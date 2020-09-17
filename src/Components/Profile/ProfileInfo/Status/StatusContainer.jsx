import React from 'react';
import {getUserStatusTC} from "../../../../redux/reducers/profile-reducer";
import {Status} from "./Status";


class StatusContainer extends React.Component {

    state = {
        status: this.props.status,
        focused: false
    }

    focusEnabled() {
        this.setState({
                status: this.props.status,
                focused: true
        }

        )
    }

    focusDisabled() {
        this.setState({
                focused: false
            }

        )
    }

    setStatus() {
        this.props.setMyStatusTC(this.state.status);
        this.setState({
                focused: false
            }
        )
    }

    updateStatusText(e){
        let text = e.target.value;
        this.setState({
            status: text
        });
    }


    componentDidUpdate(prevProps, prevState) {

     if(this.state.status !== prevState.status){
         this.setState({
             status: this.state.status
         })
        return
     } else if (this.props.status !== prevProps.status){
             this.setState({
                 status: this.props.status
             })
     }

    }


    render() {

        return (
            <Status {...this.props} {...this.state}
                    focusEnabled = {this.focusEnabled.bind(this)}
                    focusDisabled = {this.focusDisabled.bind(this)}
                    updateStatusText = {this.updateStatusText.bind(this)}
                    setStatus = {this.setStatus.bind(this)} />
        )
    }
}



export default StatusContainer;


{/*<div>
                {!this.state.focused && <div>
                    <span onDoubleClick=
                              {this.focusEnabled.bind(this)} >{!this.props.status? 'here can be your status' :
                        this.props.status}</span>
                </div>}
                {this.state.focused && <div>
                    <textarea type="text" value={this.state.status} autoFocus={true}
                              onChange={this.updateStatusText.bind(this)} />
                    <div>
                        <span><button onClick={this.setStatus.bind(this)} >Change my status</button></span>
                        <span><button onClick={this.focusDisabled.bind(this)} >Cancel</button></span>

                    </div>
                </div>}
</div>*/}
