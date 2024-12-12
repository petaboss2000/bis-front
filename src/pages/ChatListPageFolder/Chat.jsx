import React from "react";
import { Link } from 'react-router-dom';

const Chat = (props) => {

	return (
		<Link className="Chat" to={`/chat/${props.chat_id}`}>
			{props.chat_id}
		</Link>
	);
};

export default Chat;