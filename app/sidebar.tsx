'use client'

import styles from './navbar.module.css';
import { useState } from "react";

function Sidebar() {
    const [sidebar, setSidebar] = useState<boolean>(false);
  return (
    <>
    <div onClick={()=>{setSidebar(true)}}>
      <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" id={styles.menu} alt="menu"  />
      </div>
      {sidebar && (
      <div className={styles['navbar-side']}>
        <div style={{padding:"20px",}} onClick={()=>{setSidebar(false)}}>
            <img src="https://cdn-icons-png.flaticon.com/128/660/660252.png" alt="close icon"/>
        </div>
        <div style={{padding:"20px",}}>
            <h1>HOME</h1>
            <h1>SKILLS</h1>
            <h1>STORIES</h1>
            <h1>ABOUT</h1>
            <h1>CONTACT US</h1>
            </div>
      </div>
      )} 
    </>
  );
}
export default Sidebar;
