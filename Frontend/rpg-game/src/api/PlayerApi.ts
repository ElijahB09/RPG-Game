import BuildAxiosRequest from "../util/RequestBuilder";
import Player from "../models/PlayerModel";

export const PostPlayer = async (
    player: Player
) => {
    const axios = await BuildAxiosRequest();
    const inputPlayer = player

    return await axios.post('players', inputPlayer);
}

export const GetPlayers = async () => {
    const axios = await BuildAxiosRequest();
    
    return await axios.get('players');
}