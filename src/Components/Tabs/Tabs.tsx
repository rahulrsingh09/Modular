import styled from "styled-components";

export const Tabs = styled.div`
  height: 40px;
`;

export const Tab = styled.button<{active: boolean}>`
  border-style: none;
  background-color: #fff;
  padding: 0 16px;
  outline: none;
  height: 40px;
  cursor: pointer;
  position: relative;
  font-size: 14px;
  border-bottom:  ${props => (props.active ? "2px solid #0f62fe" : "2px solid rgba(0,0,0,0.24)")};

`;

export const Content = styled.div<{active: boolean}>`
  ${props => (props.active ? "" : "display:none")}
  
`;
