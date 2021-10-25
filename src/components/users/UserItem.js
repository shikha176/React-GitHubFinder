import React from 'react';
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';


const UserItem =(props) => {
   
    const {avatar_url, login} = props.user;
    return (
        <div className="card col-sm-4 mt-4" style={{alignItems: 'center',textAlign:'center'}}>
            <img className="card-img-top" src={avatar_url} alt=""
            style = {{width:'60px'}}/>
            <div className="card-body">
                <h4 className="card-title">{login}</h4>
                <Link to={`/user/${login}`} className="btn btn-dark">See Profile</Link>
            </div>
        </div>
    )
    
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
