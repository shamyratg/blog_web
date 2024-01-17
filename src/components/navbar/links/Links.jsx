"use client";
import React, { useState } from "react";
import styles from "./links.module.css";
import NavLink from "./navLink/navLink";
import Image from "next/image";

const Links = ({ item }) => {
  const links = [
    {
      title: "Home",
      path: "/",
      id: 4,
    },
    {
      title: "About",
      path: "/about",
      id: 3,
    },
    {
      title: "Blog",
      path: "/blog",
      id: 2,
    },
    {
      title: "Contact",
      path: "/contact",
      id: 1,
    },
  ];

  const [open, setOpen] = useState();

  // Temporary
  const session = true;
  const isAdmin = true;
  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      {/* 
      <button
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        Menu
      </button> */}
      <Image
      className={styles.menuBtn}
        src="/menu.png"
        alt="Menu"
        onClick={() => setOpen((prev) => !prev)}
        width={30}
        height={30}
      ></Image>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
