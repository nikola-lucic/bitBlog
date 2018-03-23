import React, { Component } from 'react';
import { Link } from "react-router-dom";
const PostItem = (props) => {
    return (
        <li className="collection-item"><div>Alvin<a className="secondary-content"><i className="material-icons"><Link to='/'>Home</Link></i></a></div></li>
    )
}

export default PostItem;