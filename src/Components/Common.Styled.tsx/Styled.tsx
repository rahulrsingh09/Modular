import styled from "styled-components";

const Text = styled.span<{padding?: string}>`
  text-align: center;
  ${(props) => props.padding && `padding : ${props.padding}`};
`

export {Text}