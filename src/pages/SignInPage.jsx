import React, {useRef, useState} from "react";

const SignInPage = () => {

	const addressDivRef = useRef("");
	const secretDivRef = useRef("");
	const [name, setName] = useState("");

	const handleRegister = () => {
		fetch(`http://127.0.0.1:5000/baseApi/register/${name}`, {method: 'POST'})
		.then((response) => {
			console.log(response);
			return response.json()})
		.then((data) => {
			console.log(data);
			const addressDiv = document.querySelector('.addressDiv')
			addressDiv.textContent = `${data.address}`;
			const secretDiv = document.querySelector('.secretDiv')
			secretDiv.textContent = `${data.mnemonic}`;
		})
	};



	return (
		<div className="SignInPage">
			<h1 id="registration_h">Регистрация</h1>
			<h3 id="signIn_h3">Придумайте себе имя</h3>
			<input id="name_input"
				   type="text"
				   value={name}
				   onChange={(e) => setName(e.target.value)}
			/>
			<button id="registration_button" onClick={handleRegister}>Зарегистрироваться</button>
			<p id="registration_p">Запомните или запишите ваши данные для входа:</p>
			<p id="registration_p_important" className="addressDiv" ref={addressDivRef}></p>
			<p id="registration_p_important" className="secretDiv" ref={secretDivRef}></p>
			<a id="registration_button" href={"/logIn"}>Вход</a>
		</div>
	);
};

export default SignInPage;