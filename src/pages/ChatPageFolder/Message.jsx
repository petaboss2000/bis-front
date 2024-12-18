import React from "react";
import { Link } from 'react-router-dom';

const Message = (props) => {

	return (
		<div className={"Message" + " " + props.className}>
			{props.messageText}
		</div>
	);
};

export default Message;