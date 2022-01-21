import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import "./App.css";
import { onMessageListener } from "./firebaseInit";
import Notifications from "./Notifications";
import { ReactNotificationComponent } from "./ReactNotificationComponent";

// import { askForPermissionToReceiveNotifications } from "./push-notification.jsxxx";
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

  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ title: "", body: "" });
  console.log(notification, "notificatiob");
  onMessageListener()
    .then((payload) => {
      console.log("onMEssage111", payload);
      setShow(true);
      setNotification({
        title: payload.notification.title,
        body: payload.notification.body,
      });

      console.log("onMEssage2222", payload);
    })
    .catch((err) => console.log("failed: ", err));

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

      <Notifications />
      {show && (
        <ReactNotificationComponent
          title={notification.title}
          body={notification.body}
        />
      )}

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
