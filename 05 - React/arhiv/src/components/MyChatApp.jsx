import React, { useState } from "react";
import Login from "./login/Login";
import Chat from "./chat/Chat";
import UserContext from "./context/UserContext";

/* Scaledrone channel ID goes here */
const CHANNEL_ID = "dZNk6g5tSDui82co";


export default function MyChatApp() {
  const [user, setUser] = useState("");
  const [drone, setDrone] = useState(null);

  function randomColor() {
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
  }

  function onUserLogin(username, avatar) {
    if (username) {
      const avcolor = randomColor();
      const drone = new window.Scaledrone(CHANNEL_ID, {
        data: { username, avatar, avcolor },
      });
      drone.on("open", () => {
        setDrone(drone);
        setUser({ id: drone.clientId, username, avatar, avcolor });
      });
    }
  }

  function userLogout() {
    drone.close();
    setDrone(null);
    setUser(null);
  }

  return (
    <>
      <UserContext.Provider value={{ user, drone, onUserLogin, userLogout }}>
        {!user && <Login />}
        {user && <Chat />}
      </UserContext.Provider>
    </>
  );
}
