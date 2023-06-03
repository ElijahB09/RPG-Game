import { PostPlayer } from "../api/Player-Api";
import Player from "../models/Player-Model";

export default function Viewtest () {
    const player: Player = {
        "id": 0,
        "strength": 13,
        "defence": 14,
        "health": 90,
        "name": "Test-User"
    }
    PostPlayer(player)
    return (
    <div>
        <header>
            This works
        </header>
    </div>
    );
}