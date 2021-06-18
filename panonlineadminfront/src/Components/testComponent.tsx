import React, { useState } from "react";
import axios from 'axios';

import { Form, InputGroup, Button, Alert } from 'react-bootstrap';
export interface Lobby {
    lobbynumber: number;
    users: string[];
    GetCurrentLobbyList: () => Lobby[];
}
export function Lobbies() {
    let [input, setInput] = useState<string>("");
    let [lobbyList, setLobbylist] = useState<Lobby[]>([]);

    function joinLobby(lobbynumber: number) {
        let username = localStorage.getItem("username")
        const payload = { username }
        axios.post('http://localhost:8080/api/join/' + lobbynumber, payload)
            .then((res) => {

            })
    }
    function getLobbies() {
        axios.get('http://localhost:8080/api/lobby')
            .then((res) => {
                setLobbylist(res.data);
                console.log(res.data)
                console.log(lobbyList)
            })
            .catch((error) => {
                console.log(error);
            })
        returnLobbies(lobbyList);
    }
    function returnLobbies(lobbies: Lobby[]) {
        let lobbiesList = lobbies.map((Lobby, index) =>
            <div key={index}>
                <li>
                    Lobby {Lobby.lobbynumber}
                </li>
                <li>
                    {Lobby.users}
                </li>

                <button className="btnSmall btnNormal" onClick={() => joinLobby(Lobby.lobbynumber)}>Join Lobby</button>

            </div>

        );
        return lobbiesList;
    }


    return (
        <div >
            <Button className="loginButton" onClick={() => getLobbies()}>Refresh Lobbies</Button>
            <div> {returnLobbies(lobbyList)}</div>
        </div>
    );
}