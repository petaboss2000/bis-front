import AddChatComponent from "./AddChatComponent";
import ExitButton from "./ExitButton";

const TopChatPagePanel = () => {

	// :) Давай в AddChatComponent.jsx

	return (
		<div className="TopChatPagePanel">
			<ExitButton/>
			<AddChatComponent/>
		</div>
	);
};

export default TopChatPagePanel;