import React, {useState} from "react";
import Cookies from 'js-cookie';


const AddChatComponent = () => {

	const [addUser, setAddUser] = useState("");

	const addChat = () => {
		fetch(`http://176.114.91.95:8000/chats/add_chat/${Cookies.get('address')}/${addUser}`, {method: 'POST'})
	};

	return (
		<div className="AddChatComponent">
			<input id="AddChatInput"
				   type="text"
				   value={addUser}
				   placeholder="Введите адрес пользователя"
				   onChange={(e) => setAddUser(e.target.value)}/>
			<button id="AddChatButton" onClick={addChat}>+</button>
		</div>
	);
};

export default AddChatComponent;