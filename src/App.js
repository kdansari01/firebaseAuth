import "./App.css";
import { signInWithGoogle } from "./firebase/firebase";
import { GoogleButton } from "react-google-button";
import { useState } from "react";

function App() {
  const [isLoged, setIsLogedIn] = useState(false);
  const profile = localStorage.getItem("profilePic");

  const logout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('profilePic');

    setIsLogedIn(true);
  };

  return (
    <div className="App">
      {isLoged ? (
        <>
        <h1>SignIn</h1>
        <GoogleButton onClick={signInWithGoogle} />
        </>
      ) : (
        <>
          <div>
            <h1>User is logged in</h1>
          </div>
          <div>
            <h1>{localStorage.getItem("name")}</h1>
          </div>
          <div>
            <h1>{localStorage.getItem("email")}</h1>
          </div>
          <div>
            <img src={profile} alt="profile" />
          </div>
          <button onClick={logout}>logout user</button>
        </>
      )}

   
    </div>
  );
}

export default App;
