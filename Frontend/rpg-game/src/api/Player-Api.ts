import BuildAxiosRequest from "../util/Request-Builder";
import Player from "../models/Player-Model";

export const PostPlayer = async (
    player: Player
) => {
    const axios = await BuildAxiosRequest();
    const inputPlayer = {
        ...player
    }

    return await axios.post('players', inputPlayer);
}