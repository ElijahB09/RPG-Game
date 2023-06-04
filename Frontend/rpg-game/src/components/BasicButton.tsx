import { render } from '@testing-library/react';
import { GetPlayers } from '../api/PlayerApi';
import Player from '../models/PlayerModel';

function BasicButton() {
    const handleClick = () => {
        const players = GetPlayers().then(response => {
            const allPlayers: Array<Player> = response.data;
            render(
            <div>
                <p>{allPlayers[0].id}</p>
                <p>{allPlayers[0].name}</p>
                <p>{allPlayers[0].health}</p>
                <p>{allPlayers[0].strength}</p>
                <p>{allPlayers[0].defense}</p>
            </div>
            )
            console.log(allPlayers);
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