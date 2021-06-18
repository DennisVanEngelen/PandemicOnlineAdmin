import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import './panAdmin.css'
import './HomePage.css'

export interface IAdmin 
{
    id: number;
    password: string;
    username: string;
}

export function LoginAdmin(properties: any) : any
{
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [Admin, setAdmin] = useState<IAdmin>()

    return(
        <div className="BackGround">
        <Form onSubmit={(e) => {
            e.preventDefault();
            axios.post(`http://localhost:8080/login/admin`, {username, password})
                .then(res => {
                    if(res.data!==0){
                    localStorage.setItem("adminid",res.data)
                    window.location.href = 'http://localhost:3000/Management'
                    }
                })}}>

            <div className="Userbox">
                <Form.Group >
                    <div className="padding" >
                        <Form.Label>
                        <p className="title">Admin inloggen</p>
                        </Form.Label>
                        <div className="lineup"></div>
                        <Form.Label>
                        <p className="label">Username</p>
                        </Form.Label>
                            <div >
                                <InputGroup>
                                    <Form.Control
                                        type="text"
                                        id= "Username"
                                        className="username"
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value)
                                        }}
                                        required
                                    />
                                </InputGroup>
                            </div>
                    <div>
                        <Form.Label>
                                <p className="label">Wachtwoord</p>
                        </Form.Label>
                    </div>
                    <div >
                        <InputGroup>
                            <Form.Control
                                type="password"
                                id= "Password"
                                className="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                required
                            />
                        </InputGroup>
                    </div>
                    <div className="linebottom"></div>
                    <div className="padding">
                     <Button className="loginButton" type="submit">Log-in</Button>
                    </div>         
                    </div>
                </Form.Group>
             </div>
        </Form>
    </div>
    );
}
