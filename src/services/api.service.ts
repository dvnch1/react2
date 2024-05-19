import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";
import {IPostModel} from "../model/IPostModel";
import {ICommentModel} from "../model/ICommentModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
});

const userApiService = {
    getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get("/users");
    },
    getPostOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`)
    },
    getCommentsOfPost: (postId: string): Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`/posts/${postId}/comments`)
    }
}

export {
    userApiService
}