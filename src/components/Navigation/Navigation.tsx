import React, {useEffect, useState} from "react";
import {Link, Trans} from "gatsby-plugin-react-i18next";

// @ts-ignore
import * as styles from "./Navigation.module.scss";

type Props = {
    transparencyMode?: "opaque"|"transparentWhenAtTop"
}

const Navigation = ({transparencyMode}: Props) => {
    let [atTop, setAtTop] = useState(false);

    const updateTransparency = () => {
        if (typeof window === "undefined") return;

        if (window.scrollY < 15) {
            if (!atTop) setAtTop(true);
        } else {
            if (atTop) setAtTop(false);
        }
    };

    useEffect(() => {
        if (typeof window === "undefined") return;

        window.addEventListener("scroll", updateTransparency);
        window.addEventListener("navigate", updateTransparency);

        updateTransparency();

        let int = window.setInterval(updateTransparency, 10000);

        return () => {
            window.removeEventListener("scroll", updateTransparency);
            window.removeEventListener("navigate", updateTransparency);

            window.clearInterval(int);
        };
    });

    return <div className={styles.topBar + (transparencyMode ==="transparentWhenAtTop" && atTop ? " "+styles.transparent : "")}>
        <nav>
            <Link to={"/"} className={styles.logo}>KREIG.de</Link>
            {/*<Link to={"/members"}><Trans i18nKey={"layout.navigation.members"} /></Link>*/}
            <div className={styles.spacer} />
            {/*<Link to={"/login"}>
                <div className={styles.btn}>
                    <Trans i18nKey={"layout.navigation.login"} />
                </div>
            </Link>*/}
        </nav>
    </div>
}

export default Navigation
