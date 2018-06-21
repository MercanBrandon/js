import React, {Component} from 'react';

class ChatSpace extends Component {
constructor(props){
    super(props);
}
    render(){
        return (
            <ul>
            {this.props.messages.map(message => (
                <li key={message.id} className={message.type}>
                    {message.message}
                </li>
            ))}
            </ul>
        );
    }
}
export default ChatSpace;