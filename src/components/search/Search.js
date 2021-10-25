import React, {useState, useContext} from 'react';
import GitHubContext from '../../components/context/github/gitHubContext';


const Search = () => {
    const gitHubContext = useContext(GitHubContext);
     const [text, setText] = useState('');

    const onSubmit = (e) =>{
        e.preventDefault();
        gitHubContext.searchUsers(text);
        setText('');
    }

    const onChange = (e) =>{
        setText(e.target.value);
    }

    
    return (
        <form name="form" onSubmit={onSubmit}>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Search Users.." name="text"
                value={text} onChange={onChange} />
            </div>
            <button type="submit" className="btn btn-dark btn-block">Submit</button>
            {gitHubContext.users.length>0 && (
            <button className="btn btn-primary btn-block" 
                onClick={gitHubContext.clearUsers}>Clear</button>
                )}
        </form>
    )
    
}


export default Search
