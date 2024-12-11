import React from "react";
import Cookies from 'js-cookie';

const ExitButton = () => {

	// Ну тут тоже ничего нет, иди в ChatList.jsx

	const exit = () =>{
		Cookies.remove('address')
		window.location.href = '/signIn'
	}

	return (
		<button className="ExitButton" onClick={exit}/>
	);
};

export default ExitButton;