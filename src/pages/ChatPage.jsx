import React, {useState, useEffect, useRef} from "react";
import {useParams} from "react-router";
import Cookies from 'js-cookie';
import TopChatPanel from "./ChatPageFolder/TopChatPanel";
import MessagesPanel from "./ChatPageFolder/MessagesPanel";
import InputPanel from "./ChatPageFolder/InputPanel";


const ChatPage = () => {

	// База, опять никакой работы для тебя, жду тебя в TopChayPanel.jsx, она в ChatPageFolder

	const chatID = useParams();

	return (
		<div className="ChatPage">
			<TopChatPanel/>
			<MessagesPanel/>
			<InputPanel/>
		</div>
	);
};

export default ChatPage;