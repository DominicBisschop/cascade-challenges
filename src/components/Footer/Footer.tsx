import React from "react";
import styles from "./styles.module.scss";

export const Footer = () => {
    const dateNow = new Date().getFullYear();
    return <footer className={styles.footer}>
        Cascade Challenges | &#169; Copyright {dateNow}
    </footer>;
}