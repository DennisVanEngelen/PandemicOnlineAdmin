
import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoginAdmin, IAdmin } from './AdminLogin';
import './AdminLogin.css';
import './HomePage.css';

export interface User 
{
    Username: string;
    EmailAddress: string
    ClanTag: string
}

export function HomePage(props: any) : any
{
    const [UserList, setUserList] = useState<User[]>([])

    const [SearchUser, setSearchUser] = useState<string>("")

    const Admin = props.Admin;

    function GetUsers(){
        if(SearchUser !== ""){
            axios.post(`http://localhost:8080/api/User/GetAllByUsername`,SearchUser)
            .then(res => {
                 setUserList(res.data)   
            })
        } else {
            axios.get(`http://localhost:8080/api/User/GetAllUsers`)
            .then(res => {
                 setUserList(res.data)   
            })
        }   
    }

    function returnUserList() : any {
        return UserList.map((user, index) => 
        <tr>
            <td>
                <h4>{user.Username}</h4>
            </td>
            <td>
                <h4>{user.EmailAddress}</h4>
            </td>
            <td>
                <h4>{user.ClanTag}</h4>
            </td>
            <td>
                
            </td>
        </tr>  
        );
    }

    return(
        <div className="BackGround">
            <Form>
                <div className="Adminbox">
                    <div className="SearchBox">
                        <Form.Control
                                type="text"
                                id= "SearchBox"
                                className="AdminTextbox"
                                value={SearchUser}
                                onChange={(e) => {
                                    setSearchUser(e.target.value)
                                }}
                            />
                    </div>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <h4>{Admin?.username}</h4>
                                </td>
                                <td>
                                    <h4>{Admin?.password}</h4>
                                </td>
                                <td>
                                    <h4>{Admin?.id}</h4>
                                </td>
                                <td>
                                </td>
                            </tr>
                            {returnUserList()}       
                        </tbody>
                    </table>
                    <div className="padding">
                        <Button onClick= { GetUsers } className="Adminbutton" type="submit">Haal alle Users op</Button>
                    </div>
                </div>
            </Form>
        </div>
    );
}