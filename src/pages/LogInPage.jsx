import React, {useState} from "react";
import Cookies from 'js-cookie';


const LogInPage = () => {

	const [secret, setSecret] = useState("");

	const handleRegister = () => {
		fetch(`http://127.0.0.1:5000/baseApi/login/${secret}`, {method: 'POST'})

			.then((response) => response.json())
			.then((data) => {
				Cookies.set('address', `${data.address}`, {expires: 365})
				console.log(Cookies.get());
				console.log("fwefwwf");
				window.location.href = '/'
			})
	};

	return (
		<div className="LogInPage">
			<h1 id="login_h1">Вход</h1>
			<h3 id="login_h3">Введите секретную фразу</h3>
			<input id="login_input"
				   type="text"
				   value={secret}
				   onChange={(e) => setSecret(e.target.value)}
			/>
			<button id="login_button" onClick={handleRegister}>Войти</button>
			<a id="login_button" href={"/signIn"}>Регистрация</a>
		</div>
	);
};

export default LogInPage;