import React from "react";
import ChatIdName from "./ChatIdName";
import ToChatListButton from "./ToChatListButton";


const TopChatPanel = () => {

	// Я уверен тебя заебали мои сообщения, так что иди в ToChatListButton.jsx

	return (
		<div className="TopChatPanel">
			<ToChatListButton/>
			<ChatIdName/>
		</div>
	);
};

export default TopChatPanel;