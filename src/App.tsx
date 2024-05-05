import React, {useState} from 'react';
import './App.css';
import Users from "./Components/Users/Users";
import {getAllPostsOfCurrentUser} from "./Services/dummy.api.service";
import Posts from "./Components/Posts/Posts";
import {PostModel} from "./Model/PostModel";



function App() {


    const [posts, setPosts] = useState<PostModel[]>([])




    const lift = (id:number) => {
        getAllPostsOfCurrentUser(id).then(({data}) => {
           setPosts(data.posts)
        })
    }


  return (
    <div className="App">
       <div className="Users"><Users lift={lift}/></div>
        <div className="Posts"><Posts posts={posts}/></div>




    </div>
  );
}

export default App;
