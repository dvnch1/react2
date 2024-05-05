import React, {FC} from 'react';
import {PostModel} from "../../Model/PostModel";


interface IProps{
    posts: PostModel[];
}

const Posts:FC<IProps> = ({posts}) => {



    return (
        <div>
            {
                posts.map((posts) => (<div>{posts.title} {posts.id} {posts.userId} {posts.body} </div>))
            }

        </div>
    );
};

export default Posts;