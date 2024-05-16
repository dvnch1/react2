import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";
import {ICommentModel} from "../model/ICommentModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const apiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users");
    },

    getAllPost: (): Promise<AxiosResponse<IPostModel[]>> => {
            return axiosInstance.get("/posts")
    },
    getAllComments: (): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get("/comments")
    }



}

export {
    apiService
}