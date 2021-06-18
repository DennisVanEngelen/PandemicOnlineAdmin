import React, { useState } from "react";
import axios from 'axios';
import { Form, InputGroup, Button, Alert } from 'react-bootstrap';
import 'react-bootstrap';
export interface iUser {
    userid: number;
    username: string;
    setusername: React.Dispatch<React.SetStateAction<string>>
    email: string;
    setemail: React.Dispatch<React.SetStateAction<string>>
}
export function UserManager(){
    let [input, setInput] = useState<string>("");
    let [userList, setUserlist] = useState<iUser[]>([]);
    function DeleteUser(userid: number) {
        axios.delete('http://localhost:8080/adminapi/user/' + userid)
            .then((res) => {

            })
    }
    function SetUsername(Iuser:iUser, username:string){
        Iuser.username = username;
    }

    function SetEmail(Iuser:iUser, email:string){
        Iuser.email = email;
    }

    function UpdateUser(userid:number, username:string, email:string){
        const payload = {userid,username,email}
        console.log(payload)
        axios.put('http://localhost:8080/adminapi/user', payload)
    }

    function getUsers() {
        axios.get('http://localhost:8080/adminapi/user')
            .then((res) => {
                setUserlist(res.data);
                console.log(res.data)
                console.log(userList)
            })
            .catch((error) => {
                console.log(error);
            })
        returnUsers(userList);
    }
    
    function returnUsers(users: iUser[]) {
        let userList = users.map((User, index) =>

                <tr>
                    <td><input placeholder = {User.username}onChange={(e) => {SetUsername(User, e.target.value)}}></input></td>

                    <td><input placeholder = {User.email}onChange={(e) => {SetEmail(User, e.target.value)}}></input></td>
                    <td><button className="btnSmall btnNormal" onClick={() => UpdateUser(User.userid,User.username,User.email)}>Update</button>
                    </td>
                    <td><button className="btnSmall btnNormal" onClick={() => DeleteUser(User.userid)}>Delete</button>
                    </td>
                </tr>
      

        );
        return userList;
    }


    return (

        <div><Button className="loginButton" style={{ marginLeft: "100px" }} onClick={() => getUsers()}>Refresh Users</Button>
            <table className = "table">
                <tr>
                    <th scope = "col">
                        Username
                    </th>
                    <th scope = "col">
                        Email
                    </th>
                    <th scope = "col">
                        Update
                    </th>
                    <th scope = "col">
                        Delete
                    </th>
                </tr>
                {returnUsers(userList)}
            </table>
        </div>
    );
}