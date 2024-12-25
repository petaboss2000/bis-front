import React, { useState } from "react";
import Cookies from "js-cookie";
import { useParams } from "react-router";
import FileAlt from "../../images/FileAlt.svg";
import axios from "axios";

const InputPanel = () => {
    const [file, setFile] = useState(null);
    const [isImage, setIsImage] = useState(false);
    const [message, setMessage] = useState("");
    const params = useParams();

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const fileExtension = selectedFile.type.split("/")[1];
            setIsImage(["png", "jpg", "jpeg", "gif"].includes(fileExtension));

            setFile({
                file: selectedFile,
                url: URL.createObjectURL(selectedFile),
                name: selectedFile.name,
                type: fileExtension,
            });
        }
    };

    const sendMessage = async () => {
        if (!message.trim() && !file) return;

        const formData = new FormData();
        formData.append("chat_id", params.chat_id);
        formData.append("user", Cookies.get("address"));
        formData.append("text", message);

        if (file) {
            formData.append("file", file.file);
        }

        const response = await axios.post(
            "https://bis-api.online/messages/send_message/",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                    ...axios.defaults.headers.common,
                },
            }
        );
        console.log(response.data);
        resetInput();
    };

    const resetInput = () => {
        setMessage("");
        setFile(null);
    };

    return (
        <>
            {file && (
                <div className="UploadedFile">
                    <img
                        src={isImage ? file.url : FileAlt}
                        alt="file"
                        className="FileIcon"
                    />
                    <div className="FileName">{file.name}</div>
                    <button className="DeleteFileButton" onClick={() => setFile(null)}>
                        ×
                    </button>
                </div>
            )}

            <div className="InputPanel">
                <input
                    id="MessageInput"
                    type="text"
                    value={message}
                    placeholder="Введите сообщение"
                    onChange={(e) => setMessage(e.target.value)}
                />

                {(!message && !file) ? (
                    <>
                        <input
                            type="file"
                            id="AddFileButton"
                            name="AddFileButton"
                            onChange={handleChange}
                            hidden
                        />
                        <label id="AddFileButtonIMG" htmlFor="AddFileButton" />
                    </>
                ) : null}

                <button id="SendMessageButton" onClick={sendMessage} />
            </div>
        </>
    );
};

export default InputPanel;
