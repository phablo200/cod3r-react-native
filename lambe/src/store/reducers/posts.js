import { ADD_POST } from '../actions/actionsTypes';
import { ADD_COMMENT } from '../actions/actionsTypes';

const initialState = {
  posts: []    
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
          return {
              ...state,
              posts: state.posts.concat({
                  ...action.payload
              })
          };
        case ADD_COMMENT:
          const newState = {
            ...state,
            posts: state.posts
              .filter(post => post.id === action.payload.postId)
              .map(post => {
                if (post.comments) {
                  post.comments = post.comments.concat(action.payload.comment)
                } else {
                  post.comments = [action.payload.comment];
                }

                return post;
              })
          };

          console.log('newState', newState);
          return newState;
        default:
            return state;
    }
};

export default reducer;
