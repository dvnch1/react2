import React, {FC} from 'react';
import {IUserModel} from "../model/IUserModel";
import {Link} from "react-router-dom";

interface  IProps {
    user: IUserModel;
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <Link to={user.id.toString()}>{user.name}</Link>

        </div>
    );
};

export default UserComponent;