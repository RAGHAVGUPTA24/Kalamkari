import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/";
  const [ query, setQuery ] = useState("");
  const [ searchBarVisible, setSearchBarVisible ] = useState(false);
  
  const handleSearch = event => {
    if(event) event.preventDefault();
    window.location.replace("?in_post="+query);
  };
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  
  return (
    <div className='top'>
      <div className='topLeft'>
        {
          user ? (
            <Link to="/settings">
            <img className="topImg" src={PF+(user.profilePic || "usericon.jpg")} alt="pic" />
          </Link>
          ) :
            (
              <ul className='topList'>
              <li className='topListItem'>
              <Link className="link" to="/login">LOGIN</Link>
              </li>
               <li className='topListItem'> <Link className="link" to="/register" >REGISTER</Link>
               </li>
                </ul>
                )
        }
        <div className="searchBase">
          {searchBarVisible ? <form className="inlined" method="GET" onSubmit={handleSearch}>
            <input className="searchBar" placeholder="Search Posts" name="query" onChange={e => setQuery(e.target.value)}></input>
          </form> : <></>}
          <button className="searchButton" onClick={ () => {
            setSearchBarVisible(!searchBarVisible);
            if(searchBarVisible) handleSearch();
          } }><i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem '>
            <Link className="link" to="/" >HOME</Link>
          </li>
          <li className='topListItem '>
            <Link className="link" to="/write" >WRITE</Link>
          </li>
          
          <li className='topListItem' onClick={handleLogout}>
            {user && "LOGOUT"}

          </li>
        </ul>
      </div>
    </div>
  )
}
