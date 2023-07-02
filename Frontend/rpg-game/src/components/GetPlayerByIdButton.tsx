import { render } from '@testing-library/react';
import { GetPlayerById } from '../api/PlayerApi';
import { Player } from '../models/PlayerModel';

function GetPlayerByIdButton() {
    const handleClick = () => {
        GetPlayerById(1).then(response => {
            const player: Player = response.data;
            console.log(player);
            render(
            <div>
                <p>{player.id}</p>
                <p>{player.name}</p>
                <p>{player.health}</p>
                <p>{player.strength}</p>
                <p>{player.defense}</p>
            </div>
            )
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
export default GetPlayerByIdButton;