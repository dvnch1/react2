import axios, {AxiosResponse} from "axios";
import {UsersResponceModel} from "../Model/ResponceModels/UsersResponceModel";
import {PostsResponceModel} from "../Model/ResponceModels/PostsResponceModel";


let axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {}
})

const getAllUsers = ():Promise<AxiosResponse<UsersResponceModel>> => {
    return axiosInstance.get('/users')
}



const getAllPostsOfCurrentUser = (id:number):Promise<AxiosResponse<PostsResponceModel>> =>{
    return axiosInstance.get(`/posts/user/` + id)
}


export {
    getAllPostsOfCurrentUser,
    getAllUsers
}