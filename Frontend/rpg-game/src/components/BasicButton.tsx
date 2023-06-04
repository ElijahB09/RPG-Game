import { render } from '@testing-library/react';
import { GetPlayerById, GetPlayers } from '../api/PlayerApi';
import Player from '../models/PlayerModel';

function BasicButton() {
    const handleClick = () => {
        const playerById = GetPlayerById(1).then(response => {
            const player: Array<Player> = response.data;
            render(
            <div>
                <p>{player[0].id}</p>
                <p>{player[0].name}</p>
                <p>{player[0].health}</p>
                <p>{player[0].strength}</p>
                <p>{player[0].defense}</p>
            </div>
            )
            console.log(player);
        }).catch(error => {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser 
                // and an instance of http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
        })
    }

    return (
        <div>
            <button onClick={handleClick}>Test Button</button>
        </div>
    );
}
export default BasicButton;