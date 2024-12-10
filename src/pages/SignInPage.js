import React, {useRef } from "react";

function SignInPage() {

  const addressDivRef = useRef(null);
  const secretDivRef = useRef(null);

  const handleRegister = () => {
    fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
    })

    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        const addressDiv = document.querySelector('#addressDiv')
        addressDiv.textContent = `${data.address}`; 
        const secretDiv = document.querySelector('#secretDiv')
        secretDiv.textContent = `${data.mnemonic}`; 
        document.cookie = `address=${data.address};max-age=360000;secretPhrase=${data.mnemonic}`
    })
  };

  const continueRegister = () => {
    window.location.href = '/'
  }

  const toLoginRegister = () => {
    window.location.href = '/LogIn'
  }

  return (
    <div className="SignInPage">
      <div id="signinform">
        <button id="registrButton" onClick={handleRegister}>
          {"Зарегистрироваться"}
        </button>
        <div id="addressDiv" ref={addressDivRef}></div>
        <div id="secretDiv" ref={secretDivRef}></div>
        <button id="registrButton" onClick={continueRegister}>
          {"Продолжить"}
        </button>
        <button id="loginButton" onClick={toLoginRegister}>
          {"login"}
        </button>
      </div>
    </div>
  );
}

export default SignInPage;
