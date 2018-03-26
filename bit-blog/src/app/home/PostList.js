import React, { Component } from 'react';
import PostItem from './PostItem';
const PostList = (props) => {
    return (
            <div className="row">
                <div className="col s12 m12 l12">
                    <ul className="collection with-header">
                        <PostItem />
                    </ul>
                </div>
            </div>
    )
}

export default PostList;