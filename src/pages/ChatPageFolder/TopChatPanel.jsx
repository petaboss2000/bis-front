import React from "react";
import ChatIdName from "./ChatIdName";
import ToChatListButton from "./ToChatListButton";


const TopChatPanel = () => {
	return (
		<div className="TopChatPanel">
			<ToChatListButton/>
			<ChatIdName/>
		</div>
	);
};

export default TopChatPanel;