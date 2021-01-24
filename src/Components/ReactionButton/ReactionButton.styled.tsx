import styled from "styled-components";

const ReactionButtonWrapper = styled.div<{active:boolean}>`
    height: 32px;
    border-radius: 24px;
    width:50px;
    box-sizing: border-box;
    display: flex;
    padding: 0 8px;
    align-items: center;
    ${(props) => props.active && "border:2px solid #0f62fe"};
    ${(props) => props.active && "​background-color: #edf5ff"};
`

export {ReactionButtonWrapper}