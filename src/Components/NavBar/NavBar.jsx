import { Stack, Button } from "@mui/material";
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
          <Button className={styles.navtext}>Home</Button>
          <Button className={styles.navtext}>Attorneys</Button>
          <Button className={styles.navtext}>Practice Areas</Button>
          <Button className={styles.navtext}>About Us</Button>
        </Stack>
        <NavButton />
      </Stack>
    </div>
  );
}

export default NavBar;
