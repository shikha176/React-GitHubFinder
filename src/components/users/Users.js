import React, {useContext} from 'react'
import UserItem from './UserItem';
import GitHubContext from '../context/github/gitHubContext';


const Users = () => {

    const gitHubContext = useContext(GitHubContext);
    const {users} = gitHubContext;
    
    return (
        <div className='row'>
            {users.map(user=>(
                <UserItem key ={user.id} user={user}/>           
            ))}
        </div>
    )
    
}

export default Users
