import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
const Users = () => {
  // state
  const [users, setUsers] = React.useState([]);

  const [offline, setOffline] = React.useState(false);
  const setOff = (e) => {
    console.log("setOff", e);

    setOffline(true);
  };
  const setOn = (e) => {
    console.log("setOn", e);

    setOffline(false);
  };
  // effects
  React.useEffect(() => {
    window.addEventListener("offline", setOff);
    window.addEventListener("online", setOn);

    return () => {
      window.removeEventListener("offline", setOff);
      window.removeEventListener("online", setOn);
    };
  }, []);
  // effects
  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => {
        setUsers(users);
      })
      .catch((err) => {});
  }, []);
  // render
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
      {offline ? (
        <div style={{ background: "red" }}>The app is currently offline</div>
      ) : null}
    </div>
  );
};
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Users />}></Route>
    </Routes>
  </BrowserRouter>
);
export default App;
