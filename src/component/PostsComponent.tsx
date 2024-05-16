import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../model/IPostModel";
import {apiService} from "../services/api.service";

const PostsComponent: FC = () => {
    const [posts, setPosts] = useState<IPostModel[]>([]);
    useEffect(() => {
        apiService.getAllPost().then(value => setPosts(value.data))
    }, []);
    return (
        <div>
            {posts.map(post => <div key={post.id}>User ID - {post.userId}<br/>Title - {post.title}<br/>{post.body}<hr/></div> )}
        </div>
    );
};

export default PostsComponent;