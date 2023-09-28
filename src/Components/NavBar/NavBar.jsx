import { Stack } from "@mui/material";
import React from "react";
import NavButton from "../Button/NavButton";
import styles from "./NavBar.module.css";
import igstudio from "../Assets/igstudio.png";

function NavBar() {
  return (
    <div className={styles.navdiv}>
      <Stack direction="row" spacing={2} className={styles.nav}>
        <div>
          <img src={igstudio} alt="IGStudio" />
        </div>
        <Stack direction="row" spacing={6}>
          <div className={styles.navtext}>Home</div>
          <div className={styles.navtext}>Attorneys</div>
          <div className={styles.navtext}>Practice Areas</div>
          <div className={styles.navtext}>About Us</div>
        </Stack>
        <NavButton />
      </Stack>
    </div>
  );
}

export default NavBar;
