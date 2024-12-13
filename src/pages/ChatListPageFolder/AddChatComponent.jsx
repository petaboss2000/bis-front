import React, {useState} from "react";
import Cookies from 'js-cookie';


const AddChatComponent = () => {

	const [addUser, setAddUser] = useState("");

	const addChat = () => {
		fetch('http://127.0.0.1:5000/addUser', {
			method: 'POST',
			body: JSON.stringify({first_user: Cookies.get('address'), second_user: addUser}),
		})
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