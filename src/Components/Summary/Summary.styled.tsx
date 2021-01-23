import styled from "styled-components";

const Div = styled.div`
    width: max-content;
    -webkit-box-shadow: 3px 0px 35px -8px rgba(0,0,0,0.24);
    -moz-box-shadow: 3px 0px 35px -8px rgba(0,0,0,0.24);
    box-shadow: 3px 0px 35px -8px rgba(0,0,0,0.24);
`

const SmallCircle = styled.span`
  width: 4px;
  display: inline-block;
  height: 4px;
  border-radius: 50%;
  background-color: black;
`

const Text = styled.span`
  padding-left: 8px;
`
const TabHeader = styled.div<{height?: string, emphasis?: string}>`
 display: flex;
 justify-content: center;
 align-items: center;
 height: ${(props) => props.height};
 ${(props) => props.emphasis && `font-weight: ${props.emphasis}`}
`

const TabHeaderContainer = styled.div`
  width: max-content;
  height: max-content;
`

const SummaryHeader = styled.div`
  font-weight: bold;
  padding: 24px 16px 16px 16px;
`

const DetailsComponent = styled.div`
  display: flex;
  height: 300px;
  width: 100%;
  overflow-x: auto;
`

export {Div, SmallCircle, Text, TabHeader, TabHeaderContainer,SummaryHeader, DetailsComponent}