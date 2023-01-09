import styled from "styled-components";
import {primaryColor} from "./style/variables";
export const AppWrapper = styled.div`
    .footer {
        border: 1px solid orange;
    }
`


export const SectionWrapper = styled.div`
    border: 1px solid red;

    .title {
        font-size: ${props => props.size}px;
        color: ${props => props.color};

        &:hover {
            background-color: purple;
        }
    }

    .content {
        font-size: 30px;
        color: ${primaryColor}
    }
`