import React, {FC} from 'react';
import {UserModel} from "../../Model/UserModel";



type IProps = {item:UserModel} & {lift?:(id:number)=>void};



const User: FC<IProps> = ({item,lift}) => {
        const showPostCurrentUser = () => {

               if (lift) {
                   lift(item.id);
               }
        };


    return (
        <div>
            <p>User# - {item.id}</p>
            <p>Ім'я -{item.firstName}</p>
            <p>Прізвище - {item.lastName}</p>
            <p>Середнє ім'я - {item.maidenName}</p>
            <p>Вік - {item.age}</p>
            <p>Стать - {item.gender}</p>
            <p>Пошта - {item.email}</p>
            <p>Телефон - {item.phone}</p>
            <p>Нікнейм - {item.username}</p>
            <p>Пароль - {item.password}</p>
            <p>Дата народження - {item.birthDate}</p>
            <img src={item.image} alt={item.firstName}/>
            <p>Тип крові - {item.bloodGroup}</p>
            <p>Зріст - {item.height}</p>
            <p>Вага - {item.weight}</p>
            <p>Колір очей - {item.eyeColor}</p>
                <button onClick={showPostCurrentUser}>Post From User</button>

            <hr/>


        </div>
    );
};

export default User;