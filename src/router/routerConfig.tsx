import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import UsersComponent from "../component/UsersComponent";
import PostsComponent from "../component/PostsComponent";
import CommentsComponent from "../component/CommentsComponent";


export const routerConfig = createBrowserRouter([{
    path: '/', element: <MainLayout/>,
    errorElement: <h2>404</h2>,
    children: [
        {index:true, element: <HomePage/>},
        {path: 'users', element: <UsersComponent/>},
        {path: 'posts', element: <PostsComponent/>},
        {path: 'comments', element: <CommentsComponent/>}

    ]
}])