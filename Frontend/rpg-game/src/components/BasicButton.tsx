import { GetPlayers } from '../api/PlayerApi';

function BasicButton() {
    const handleClick = () => {
        const players = GetPlayers()
    }

    return (
        <div>
            <button onClick={handleClick}>Test Button</button>
        </div>
    );
}
export default BasicButton;