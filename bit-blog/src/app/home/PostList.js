import React, { Component } from 'react';
import PostItem from './PostItem';
const PostList = (props) => {
    return (
        <main className="container">
            <div className="row">
                <div className="col s12 m12 l12">
                    <ul className="collection with-header">
                    <li className="collection-header center-align"><h1>Post List</h1></li>
                        <PostItem />
                    </ul>
                </div>
            </div>
        </main>
    )
}

export default PostList;