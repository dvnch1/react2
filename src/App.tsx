import React, {useEffect, useState} from 'react';
import {IUserModel} from "./models/IUserModel";
import {IPostModel} from "./models/IPostModel";
import {ICommentModel} from "./models/ICommentModel";
import {commentService, postService, userService} from "./services/api.services";
import HeaderComponent from "./components/HeaderComponent";
import {Context} from "./context/ContextProvider";
import {Outlet} from "react-router-dom";

const App = () => {
    const [users, setUsers] = useState<IUserModel[]>([]);
    const [posts, setPosts] = useState<IPostModel[]>([]);
    const [comments, setComments] = useState<ICommentModel[]>([]);
    const [favoriteUserState, setFavoriteUserState] = useState<IUserModel | null>(null);

    useEffect(() => {
        userService.getUsers().then(value => setUsers(value.data));
        postService.getPosts().then(value => setPosts(value.data));
        commentService.getComments().then(value => setComments(value.data))
    }, []);

    const setFavoriteUser = (obj: IUserModel) => {
        setFavoriteUserState(obj);
    }
    return (
        <div>
            <HeaderComponent/>

            <Context.Provider value={{
                userStore: {
                    allUsers: users,
                    setFavoriteUser: (obj: IUserModel) => setFavoriteUser(obj)
            },
                postStore: {
                    allPosts: posts,
                },
                commentStore: {
                    allComments: comments
                }
            }}>
                <Outlet/>
            </Context.Provider>

            <hr/>
            {favoriteUserState && <div>{favoriteUserState.email}</div>}
            <hr/>


        </div>
    );
};

export default App;