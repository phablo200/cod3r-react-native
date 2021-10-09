import { USER_LOGGED_IN, USER_LOGGED_OUT } from './actionsTypes';
import axios from 'axios';

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = 'AIzaSyAz6ivKM1LuZD4BJ8qWnukMwTFlLTFvIwo';

export const login = user => {
    return {
        type: USER_LOGGED_IN,
        payload: user
    };
};

export const createUser = (user) => {

    console.log({
        email: user.email,
        password: user.password,
        returnSecureToken: true
    });

    return dispatch => {
        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email,
            password: user.password,
            returnSecureToken: true
        }).catch(err => console.log('Houve um erro: ', err))
        .then(res => {
            /** 
            if (res.data.localId) {
                axios.put(`/users/${res.data.localId}.json`, {
                    name: user.name,
                })
                .catch(console.log)
                .then(res => {
                    console.log('Usuário criado com sucesso !')
                });
            }
            */
        });
    }
}

export const logout = () => {
    return {
        type: USER_LOGGED_OUT
    };
};