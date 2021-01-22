import styled from "styled-components";


const Span = styled.span`
  padding: 2px 8px 4px 8px;
  display: inline-block;
  transition: transform .2s;
  cursor: pointer; 
  &:hover{
    transform: scale(2);
    position: relative;
    bottom: 8px;
}
`

export {Span}