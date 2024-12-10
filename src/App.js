import './App.css';
import ChatListPage from './pages/ChatListPage';
import ChatPage from './pages/ChatPage';
import SignInPage from './pages/SignInPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<ChatListPage/>}/>
					<Route path="/chat/:chat_id" element={<ChatPage />} />
					<Route path="/signIn" element={<SignInPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
