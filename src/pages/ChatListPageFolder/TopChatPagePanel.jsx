import AddChatComponent from "./AddChatComponent";
import ExitButton from "./ExitButton";

const TopChatPagePanel = () => {

	return (
		<div className="TopChatPagePanel">
			<ExitButton/>
			<AddChatComponent/>
		</div>
	);
};

export default TopChatPagePanel;