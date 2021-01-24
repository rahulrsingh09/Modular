import styled from "styled-components";

const AppContainerWrapper = styled.div`
  padding: 80px;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;  
`

const TopButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: space-between;
`

const EmojiButton = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 10px;
  padding: 5px;
  box-sizing: border-box;
  border: 1px solid #e6e0e0;
`

export {EmojiButton, AppContainerWrapper,TopButtonContainer}