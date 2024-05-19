import React, {FC} from 'react';
import {IPostModel} from "../model/IPostModel";
import {Link} from "react-router-dom";


interface IProps {
    post: IPostModel
}

const PostComponent: FC<IProps> = ({post}) => {
    return (
        <div>
            <Link to={`posts/${post.id.toString()}`}>Title: {post.title}</Link>
        </div>
    );
};

export default PostComponent;