import {createBrowserRouter, RouteObject} from "react-router-dom";
import UsersPage from "../pages/UsersPage";
import PostsPage from "../pages/PostsPage";
import UserWithPostsPage from "../pages/UserWithPostsPage";
import App from "../App";
import CommentsPage from "../pages/CommentsPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>},
            {path:'userPosts', element:<UserWithPostsPage/>},
        ]
    }
]
export const router = createBrowserRouter(routes);