import React, { useEffect, useRef, useState } from "react";
import Cookies from 'js-cookie';
import Chat from "./Chat";

const ChatList = () => {
	const [chats, setChats] = useState([]); // Состояние для списка чатов
	const socket = useRef(null);
	const usersDivRef = useRef(null);

	useEffect(() => {
		const cookieValue = Cookies.get('address');

		// Подключение к WebSocket
		socket.current = new WebSocket(`ws://localhost:5000/chats/${cookieValue}`);

		socket.current.onopen = () => {
			console.log("Соединение установлено!!");
		};

		socket.current.onmessage = (event) => {
			console.log("Получены данные");
			console.log(event.data);

			const data = JSON.parse(event.data);

			// Обновляем состояние чатов
			setChats(data.chats);
		};

		socket.current.onclose = () => {
			console.log("Соединение закрыто");
		};

		socket.current.onerror = (error) => {
			console.log(`Ошибка: ${error.message}`);
		};

		// Закрываем соединение при размонтировании компонента
		return () => {
			if (socket.current) {
				socket.current.close();
			}
		};
	}, []);

	return (
		<div className="ChatList" ref={usersDivRef}>
			{chats.map((chat) => (
				<Chat key={chat.chat_id} chat_id={chat.chat_id} />
			))}
		</div>
	);
};

export default ChatList;
