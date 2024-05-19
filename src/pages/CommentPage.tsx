import React, {useEffect, useState} from 'react';
import CommentsComponent from "../components/CommentsComponent";
import {useParams} from "react-router-dom";
import {ICommentModel} from "../model/ICommentModel";
import {userApiService} from "../services/api.service";


const CommentPage = () => {
    const {postId} = useParams();


    const [comments, setComments] = useState<ICommentModel[]>([]);
    useEffect(() => {
        if (postId) {
            userApiService.getCommentsOfPost(postId).then(value => setComments(value.data))
        }
    }, [postId]);
    return (
        <div>
            <CommentsComponent comments={comments}/>

        </div>
    );
};

export default CommentPage;