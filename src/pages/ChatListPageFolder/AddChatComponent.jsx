import React, {useState} from "react";

const AddChatComponent = () => {

	const [addUser, setAddUser] = useState("");

	const addChat = () => {
		fetch('http://127.0.0.1:5000/addUser', {
			mode: "no-cors",
			method: 'POST',
			body: JSON.stringify({address: addUser}),
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