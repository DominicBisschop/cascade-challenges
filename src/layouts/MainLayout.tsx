import React, {FC, PropsWithChildren, ReactNode} from "react";
import styles from "./styles.module.scss";
import {Header} from "../components/Header/Header";
import {Footer} from "../components/Footer/Footer";

type Props = {
    children?: ReactNode;
}
export const MainLayout: FC<Props> = ({children}) => {
    return <div className={styles.mainLayout}>
        <Header/>
        <div className={styles.mainContainer}>{children}</div>
        <Footer/>
    </div>;
};