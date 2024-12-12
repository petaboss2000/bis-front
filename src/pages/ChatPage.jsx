import React from "react";
import TopChatPanel from "./ChatPageFolder/TopChatPanel";
import MessagesPanel from "./ChatPageFolder/MessagesPanel";
import InputPanel from "./ChatPageFolder/InputPanel";


const ChatPage = () => {

	// База, опять никакой работы для тебя, жду тебя в TopChayPanel.jsx, она в ChatPageFolder

	return (
		<div className="ChatPage">
			<TopChatPanel/>
			<MessagesPanel/>
			<InputPanel/>
		</div>
	);
};

export default ChatPage;