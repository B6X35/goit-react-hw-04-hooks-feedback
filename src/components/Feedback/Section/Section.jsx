import PropTypes from "prop-types";
import style from "./Section.module.css";
import { memo } from "react";
const Section = ({ title, children }) => {
    return (
        <section className={style.section}>
            <h1>{title}</h1>
            {children}
        </section>
    )
}

export default memo(Section);

Section.proptype = {
    title: PropTypes.string.isRequired,
}