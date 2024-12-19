import React, {useRef, useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Cookies from "js-cookie";


const SignInPage = () => {

	const addressDivRef = useRef("");
	const secretDivRef = useRef("");
	const [name, setName] = useState("");
	const [address, setAddress] = useState("");
	const [secret, setSecret] = useState("");


	const handleRegister = () => {
		fetch(`http://127.0.0.1:5000/baseApi/register/${name}`, {method: 'POST'})
			.then((response) => {
				console.log(response);
				return response.json()
			})
			.then((data) => {
				console.log(data);
				const addressDiv = document.querySelector('.addressDiv')
				addressDiv.textContent = `${data.address}`;
				setAddress(data.address);
				const secretDiv = document.querySelector('.secretDiv')
				secretDiv.textContent = `${data.mnemonic}`;
				setSecret(data.mnemonic)
			})
	};

	const addressDiv = document.querySelector('.addressDiv')
	const secretDiv = document.querySelector('.secretDiv')



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
			{(secret)
				?
				<>
					<p id="registration_p">Запомните или запишите ваши данные для входа:</p>
					<CopyToClipboard text={address}>
						<p id="registration_p_important" className="addressDiv" ref={addressDivRef}></p>
					</CopyToClipboard>
					<CopyToClipboard text={secret}>
						<p id="registration_p_important" className="secretDiv" ref={secretDivRef}></p>
					</CopyToClipboard>
				</>
				: null}

			<p id="registration_p_important" className="secretDiv" ref={secretDivRef}></p>
			<a id="registration_button" href={"/logIn"}>Вход</a>
		</div>
	);
};

export default SignInPage;