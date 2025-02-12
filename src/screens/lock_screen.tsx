import '../styles/screens/lock_screen.css';
import AvatarImg from "../assets/avatar.jpg"
import { useState } from 'react';
import { LuCircleHelp as HelpIcon } from "react-icons/lu";

const correctPassword : string = "love";

function unlock(password: string) {
  if(password === correctPassword) {
    window.location.href = "/terminal";
  }
  else {
    alert("Incorrect password!");
  }
}

export default function LockScreen() {
  const [password, setPassword] = useState(correctPassword);
  return (
    <div className="body-root">
      <img src={AvatarImg} className="avatar" />
      <h1 className="username">love-terminal</h1>
      <input type="password" className="text-field" placeholder="Enter your password" onChange={(val) => setPassword(val.target.value)} value={password}/>
      <button className="btn" onClick={()=>unlock(password)}>Unlock</button>
      <button className="help" onClick={()=>alert("Password is 'love'")}>
        <HelpIcon className='icon'/>
      </button>
    </div>
  );
}