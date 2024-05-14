import React, {FC} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from "../validators/post.validator";
import axios from "axios";



interface IFormProps{
    Userid: number,
    title: string,
    body: string
}

const FormComponent:FC = () => {
    let formObj = useForm<IFormProps>({mode:"all",resolver:joiResolver(postValidator)});
    let {register, handleSubmit, formState: {errors}} = formObj;

    const save = (formValue:IFormProps) => {
        console.log(formValue)
       axios.post("https://jsonplaceholder.typicode.com/posts", {
            UserId: formValue.Userid,
            title: formValue.title,
            body: formValue.body

       })
           .then(response => {
           console.log("New Post created", response.data);
       })
           .catch(error => {
               console.log("Cannot create post", error);
           })
    }


    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <input type="number" {...register("Userid")}/>
                {
                    errors.Userid && <span>{errors.Userid.message}</span>
                }
                <br/>
                <input type="text" {...register("title")}/>
                {
                    errors.title && <span>{errors.title.message}</span>
                }
                <br/>
                <input type="text" {...register("body")}/>
                {
                    errors.body && <span>{errors.body.message}</span>
                }
                <br/>
                <button>Post save</button>
            </form>
        </div>
    );
};

export default FormComponent;