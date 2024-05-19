import React, {FC} from 'react';
import CommentComponent from "./CommentComponent";
import {ICommentModel} from "../model/ICommentModel";

interface IProps {
    comments: ICommentModel[]
}


const CommentsComponent: FC<IProps>= (comments) => {
    return (
        <div>
            {
                comments.comments.map(comment => <CommentComponent key={comment.postId} comment={comment}/>)
            }

        </div>
    );
};

export default CommentsComponent;