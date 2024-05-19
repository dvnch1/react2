import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {IPostModel} from "../model/IPostModel";
import {userApiService} from "../services/api.service";
import PostsComponent from "../components/PostsComponent";

const PostPage = () => {
    const {id} = useParams();

    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        if (id) {
            userApiService.getPostOfUser(id).then(value => setPosts(value.data))
        }
    }, [id]);
    return (
        <div>
            <PostsComponent posts={posts}/>
            <hr/>
            <Outlet/>
            
        </div>
    );
};

export default PostPage;