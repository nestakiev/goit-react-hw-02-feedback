import React from "react";

import PropTypes from 'prop-types';
import { SectionWrapper } from "./Sections.styled";

export const Section = ({title, children}) => {
    return <SectionWrapper>
        <h2>{title}</h2>
        {children}
        </SectionWrapper>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}