import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

function App() {
  const [loading, setLoading] = useState(false);
  const [isClicked, setIsClicked] = useState(0);
  const [data, setData] = useState(null);

  const getUsersFromAPI = () => {
    axios.get("https://reqres.in/api/users?page=1/").then((res) => {
      setData(res.data.data);
    });
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
      
    },500);
    isClicked && getUsersFromAPI();
  }, [isClicked]);

  const getDataFromAPI = () => {
    setIsClicked(1);
    
    
  };

  return (
    <div className="App">
    {loading ? (      
        <div className="loader-container">
      	  <div className="spinner"></div>
        </div>) : (
          <div>
          <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div className="container-fluid">
            <h2 className="navbar-brand">Api inc.</h2>
            <button onClick={getDataFromAPI} className="btn btn-info">
              Get Users
            </button>
          </div>
        </nav>
      </header>

      <div className="row p-3 m-2 mt-1 card1">
     
        {data &&
          data.map((userData) => {
            return (
              <UserCard className="card2"
                first_name={userData.first_name}
                last_name={userData.last_name}
                email={userData.email}
                avatar={userData.avatar}
              />
            );
          })}
      </div>


      </div>)}
      
     
    </div>
  );
}

export default App;
