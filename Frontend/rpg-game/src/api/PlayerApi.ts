import BuildBaseRequest from "../util/RequestBuilder";
import Player from "../models/PlayerModel";

export const PostPlayer = async (
    player: Player
) => {
    const axios = await BuildBaseRequest();
    const inputPlayer = player

    return (
        await axios.post('players', inputPlayer)
    );
}

export const GetPlayers = async () => {
    const axios = await BuildBaseRequest();

    return (
        await axios.get('players')
    );
}