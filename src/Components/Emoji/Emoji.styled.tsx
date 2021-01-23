import styled from "styled-components";


const Span = styled.span<{preventHover: boolean, customPadding: string}>`
  padding: ${(props) => props.customPadding ? props.customPadding: null};
  display: inline-block;
  transition: transform .2s;
  cursor: pointer; 
  ${(props) => !props.preventHover && `&:hover{
    transform: scale(2);
    position: relative;
    bottom: 8px;
}`}
`

export {Span}