import React, {FC, useEffect, useState} from 'react';
import User from "../User/User";
import {getAllUsers} from "../../Services/dummy.api.service";
import {UserModel} from "../../Model/UserModel";

type IUserProps = {lift?:(userid:number)=>void}
const Users:FC<IUserProps>= ({lift}) => {
    const [users, setUsers] = useState<UserModel[]>([])
    useEffect(() => {
        getAllUsers().then(({data:{users}}) => setUsers(users))
    }, []);

    return (
        <div>
            {
                users.map(value =>
                    <User key={value.id}
                          lift={lift}
                          item={value}/> )
            }
            
        </div>
    );
};

export default Users;