import styled from "styled-components";

export const HomeWrapper = styled.div`
    .top {
        .banner {
            color: red;
        }
    }

    .bottom {
        .header {
            color: ${props => props.theme.color};
            font-size: ${props => props.theme.size};
        }

        .produc-list {
            .item {
                color: blue;
            }
        }

    }

`