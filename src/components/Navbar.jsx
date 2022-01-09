import styles from "./Navbar.module.scss";

//ICONS FROM REACT-ICONS PACKAGE
import {
  MdOutlineDashboard,
  MdOutlineAnalytics,
  MdOutlinedFlag,
  MdPeopleOutline,
  MdOutlineMessage,
  MdOutlineLogout,
  MdOutlineFlag,
} from "react-icons/md";
import { IoMdLogIn } from "react-icons/io";
import { FaReact, FaTimes } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

import { VscDashboard } from "react-icons/vsc";
import { RiGlobalLine } from "react-icons/ri";


import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo1 from './01.png'
import logo2 from './02.png'

const Navbar = () => {
  const [nav, setnav] = useState(false);

  const NavUrl = ({ url, icon, description }) => {
    const checkWindowSize = () => {
      if (window.innerWidth < 1024) setnav(!nav);
    };
    return (
      <li className={styles.li_navlink}>
        <NavLink
          to={`${url}`}
          onClick={() => checkWindowSize()}
          className={({ isActive }) => (isActive ? styles.active : undefined)}
        >
          {icon}
          <span className={styles.description}>{description}</span>
        </NavLink>
      </li>
    );
  };

  return (
    <div
      className={`${styles.navbar_container} ${
        nav ? styles.navbar_mobile_active : undefined
      }`}
    >
      {/* TEST     */}
      <div className={styles.test}>
        <AiOutlineMenu
          onClick={() => {
            setnav(!nav);
          }}
        />
          
        
      </div>

      <nav className={nav ? undefined : styles.nav_small}>
        {/* LOGO */}

        {/* <div className={styles.logo}>
          <VscDashboard className={styles.logo_icon} />
          <FaTimes
            className={styles.mobile_cancel_icon}
            onClick={() => setnav(!nav)}
          />
        </div> */}
        
        {nav ? 
        <div
        className={styles.btn_logout}
        onClick={() => {
          setnav(!nav);
        }}
      >
        <img src={logo1} alt='e'/>

      </div> 
        : 
        <div
        className={styles.btn_logout}
        onClick={() => {
          setnav(!nav);
        }}
        >
          <RiGlobalLine />
        
        </div>
        }
        



        {/* SUBMENU */}
        <ul className={styles.menu_container}>
          {/* FIRST CATEGORY */}
          <span className={styles.categories}>
            {nav ? "Pages" : <BsThreeDots />}
          </span>

          <NavUrl
            url="/"
            icon={<MdOutlineDashboard />}
            description="Dashboard"
          />

          <NavUrl
            url="/schedule"
            icon={<MdOutlineAnalytics />}
            description="Schedule"
          />

          <NavUrl
            url="/plants"
            icon={<MdOutlineFlag />}
            description="Plants"
          />

          <NavUrl
            url="/payment"
            icon={<MdOutlineMessage />}
            description="Payment"
          />
          <NavUrl
            url="/setting"
            icon={<MdOutlineMessage />}
            description="Setting"
          />

          {/* SECOND CATEGORY */}
         
        </ul>

        
        {/* ADD BACKGROUND FOR MOBILE */}
        {nav ? 
        <div className={styles.sideBarIMGBox}>
          <img src={logo2} alt='e' className={styles.sideBarIMG} />
          <div  className={styles.sideBarImgText}>You can manage multiple forms here.</div>
          <div  className={styles.sideBarImgText2}>+ Add farm</div>
        </div> 
        : ""}
        
      </nav>
      
    </div>
  );
};

export default Navbar;
