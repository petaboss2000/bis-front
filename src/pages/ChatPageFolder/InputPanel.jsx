import React, {useState} from "react";
import Cookies from 'js-cookie';
import {useParams} from "react-router";
import FileAlt from "../../images/FileAlt.svg";


const InputPanel = () => {
	const [file, setFile] = useState(null);
	const [isImage, setIsImage] = useState(false); // Добавляем состояние для определения, является ли файл изображением

	const handleChange = (e) => {
		const selectedFile = e.target.files[0];
		if (selectedFile) {
			const fileExtension = selectedFile.type.split('/')[1];
			setIsImage(fileExtension === 'png' || fileExtension === 'jpg' || fileExtension === 'jpeg' || fileExtension === 'gif');

			setFile({
				url: URL.createObjectURL(selectedFile),
				name: selectedFile.name,
				type: fileExtension
			});
		}
	};


	const [message, setMessage] = useState("");
	const params = useParams();


	const sendMessage = () => {
		if (!message.trim()) return;
		fetch(`http://127.0.0.1:5000/baseApi/messages/${params.chat_id}/${Cookies.get('address')}/${message}`, {method: 'POST'})
		setMessage("");
	};

	return (
		<>
			{(file != null)
				? <div className="UploadedFile">
					<img
						src={isImage
							? file.url
							: FileAlt}
						alt="file"
						className="FileIcon"
					/>
					<div className="FileName">{file.name}</div>
					<button className="DeleteFileButton" onClick={() => setFile(null)}></button>
				</div>
				: null}

			<div className="InputPanel">
				<input id="MessageInput"
					   type="text"
					   value={message}
					   placeholder="Введите сообщение"
					   onChange={(e) => setMessage(e.target.value)}/>

				{(message === "" && file === null)
					? <>
						<input type="file" id="AddFileButton" name="AddFileButton"
							   onChange={handleChange}></input>
						<label id="AddFileButtonIMG" htmlFor="AddFileButton"/>
						<button id="RecordVoiseButton" onClick={sendMessage}/>
					</>
					: <button id="SendMessageButton" onClick={sendMessage}/>
				}
			</div>
		</>
	)
		;
};

export default InputPanel;