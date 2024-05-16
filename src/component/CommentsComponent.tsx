import React, {FC, useEffect, useState} from 'react';
import {ICommentModel} from "../model/ICommentModel";
import {apiService} from "../services/api.service";

const CommentsComponent: FC = () => {
    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        apiService.getAllComments().then(value => setComments(value.data))
    }, []);
    return (
        <div>
            {comments.map(comment => <div key={comment.id}>Comment ID - {comment.postId}<br/>Name - {comment.name}<br/>{comment.body}<br/>Email - {comment.email}<hr/></div>)}
        </div>
    );
};

export default CommentsComponent;