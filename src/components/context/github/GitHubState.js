import {useReducer} from 'react';
import axios from 'axios';
import GitHubReducer from './gitHubReducer';
import GitHubContext from './gitHubContext';
import {
    GET_USER,
    GET_USERS,
    SET_LOADING,
    CLEAR_USERS
} from '../types'

const GitHubState = (props) => {

    const initialState = {
        users: [],
        user: {},
        loading : false
    }

    const [state, dispatch] = useReducer(GitHubReducer, initialState);
    
    // get Users

    const searchUsers = async text => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        //console.log(res.data.items);
        
        dispatch({type: GET_USERS, payload: res.data.items});
      };

    // get User

    const getUser = async userName =>{
        setLoading();
        const res = await axios.get(`https://api.github.com/users/${userName}?client_id=
        ${process.env.REACT_APP_GITHUB_CLIENT_ID}
        &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
        //console.log(res.data);
        dispatch({type: GET_USER, payload: res.data});
      } 

    // clear User
    const clearUsers = () => dispatch({type: CLEAR_USERS});
      

    // Set loading
   const  setLoading = () =>{
          dispatch({type: SET_LOADING});
      }

    return <GitHubContext.Provider
    value = {{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser
    }}>
        {props.children}
    </GitHubContext.Provider>
}

export default GitHubState;