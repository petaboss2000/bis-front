import React, {useEffect, useRef} from "react";
import Cookies from 'js-cookie';
import Chat from "./Chat";

const ChatList = () => {

	// Твой любимый WebSocket, ебись на здоровье
	// Как доделаешь пиздуй в Chat.jsx

	const usersDivRef = useRef(null);
	const socket = useRef(null);

	useEffect(() => {
		socket.current = new WebSocket("http://localhost:5000/ws");

		socket.current.onopen = function () {
			console.log("Соединение установлено");
		};

		socket.current.onmessage = function (event) {
			const data = JSON.parse(event.data);
			if (data.type === "chats") {
				usersDivRef.current.replaceChildren()
				data.chats.forEach(chat => {
					if (usersDivRef.current) {
						const chatComponent = React.createElement(Chat, {chat_id: chat.chat_id}, null);
						usersDivRef.current.appendChild(chatComponent);
					}
				});
			}

		};

		socket.current.onclose = function (event) {
			console.log("Соединение закрыто");
		};

		socket.current.onerror = function (error) {
			console.log(`Ошибка: ${error.message}`);
		};

		return () => {
			// Очищаем сокет при размонтировании компонента
			if (socket.current) {
				socket.current.close();
			}
		};
	}, []);

	return (
		<div className="ChatList" ref={usersDivRef}>
			<Chat chat_id="123654789"/>
			<Chat chat_id="123654789"/>
			<Chat chat_id="123654789"/>
			<Chat chat_id="123654789"/>
			<Chat chat_id="123654789"/>
			<Chat chat_id="123654789"/>
			<Chat chat_id="123654789"/>
		</div>
	);
};

export default ChatList;