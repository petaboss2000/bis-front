import React from "react";
import TopChatPagePanel from "./ChatListPageFolder/TopChatPagePanel";
import ChatList from "./ChatListPageFolder/ChatList";

const ChatListPage = () => {

	// Это тоже не тебе иди в TopChatPagePanel.jsx, это в папке ChatListPageFolder

	return (
		<div className="ChatListPage">
			<TopChatPagePanel/>
			<ChatList/>
		</div>
	);
};

export default ChatListPage;