import React from "react";
import TopChatPagePanel from "./ChatListPageFolder/TopChatPagePanel";
import ChatList from "./ChatListPageFolder/ChatList";

const ChatListPage = () => {

	return (
		<div className="ChatListPage">
			<TopChatPagePanel/>
			<ChatList/>
		</div>
	);
};

export default ChatListPage;