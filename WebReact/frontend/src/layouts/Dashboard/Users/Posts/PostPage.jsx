import React, { Component } from 'react';
import PostForm from '../../../../components/Posts/PostForm';
import AllPost from '../../../../components/Posts/AllPost';
import "../../../../components/Posts/PostCss.css"
import "../../../../assets/css/App.css";

class PostPage extends Component {
    render() {
        return (
            <div className="App">
                    <div className="navbar">
                        <h2 className="center ">New Project Creation</h2>
                    </div>
                <div className="container">
                    
                    <PostForm />
                    <hr />
                    <AllPost />
                </div>
            </div>
        );
    }
}
export default PostPage;