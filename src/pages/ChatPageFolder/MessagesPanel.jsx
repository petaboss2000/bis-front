import React, {useEffect, useRef} from "react";
import Cookies from 'js-cookie';
import Message from "./Message";

const MessagesPanel = () => {

	const usersDivRef = useRef(null);
	const socket = useRef(null);

	useEffect(() => {
		socket.current = new WebSocket("http://localhost:5000/ws");

		socket.current.onopen = function () {
			console.log("Соединение установлено");
		};

		socket.current.onmessage = function (event) {
			const data = JSON.parse(event.data);
			if (data.type === "messages") {
				usersDivRef.current.replaceChildren()
				data.messages.forEach(message => {
					if (usersDivRef.current) {
						const chatComponent = React.createElement(Message, {messageText: message.messageText}, null);
						if (message.userId === Cookies.get('address')) {
							Message.classList.add("user_message");
						} else {
							Message.classList.add("interlocutor_message");
						}
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
		<div className="MessageesPanel" ref={usersDivRef}>
			<Message className="user_message" messageText="Привет"/>
			<Message className="interlocutor_message" messageText="Как дела?"/>
		</div>
	);
};

export default MessagesPanel;