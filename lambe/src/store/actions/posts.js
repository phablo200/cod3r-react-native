import { ADD_COMMENT, SET_POSTS } from './actionsTypes';
import axios from 'axios';

/** 
export const addPost = post => ({
    type: ADD_POST,
    payload: post
});
*/

export const addPost = (post) => {
    return (dispatch) => {
        axios.post('/posts.json', { ...post }).catch(console.log)
        .then((resp) => console.log('resp.data', resp.data));
    };
}

export const addComment = comment => ({
    type: ADD_COMMENT,
    payload: comment
});

export const setPosts = (posts) => ({
    type: SET_POSTS,
    payload: posts
});