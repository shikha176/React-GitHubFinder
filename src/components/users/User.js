import React, { useEffect, Fragment, useContext } from 'react';
import {Link} from 'react-router-dom';
import GitHubContext from '../context/github/gitHubContext';


const User = ({match}) => {

    const gitHubContext = useContext(GitHubContext);

    const {getUser, user} = gitHubContext;

    useEffect(()=>{
        getUser(match.params.login);
    },[]);
    
    const {
        name, 
        avatar_url, 
        location,
        login, 
        bio,
        html_url,
        blog,
        followers,
        following
    } = user;
    return (
        <Fragment>
            <Link to='/' className='btn btn-primary'> Back to Search</Link>
            <div className="card p-3 mt-3">
                <div className="row">
                    <div className='col-sm-6' style={{alignItems: 'center',textAlign:'center'}}>
                        <img className="card-img-top" src={avatar_url} alt="Card image"
                        style ={{width:'200px'}}/>
                        <div className="card-body">
                            <h4 className="card-title">{name}</h4>
                            <p className="card-text">Location:{location}</p>
                            <a href={html_url} className="btn btn-primary">See GitHub Profile</a>
                        </div>
                    </div> 
                    <div className='col-sm-6' style={{alignItems: 'center',textAlign:'center'}}>
                        <div className="card-body">
                            <h4 className="card-title">UserName: {login}</h4>
                            <div className="badge badge-primary mx-2">Followers:{followers}</div>
                            <div className="badge badge-secondary mx-2">Following:{following}</div>
                            <p>{bio}</p>
                            <a href={blog} className="btn btn-dark">Website</a>
                        </div>
                    </div> 
                </div>             
            </div>
        </Fragment>
    )
    
}



export default User
