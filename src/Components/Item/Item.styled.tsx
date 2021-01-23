import styled from "styled-components";

const ItemContainer = styled.div`
  padding: 16px 16px 0px 16px;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
`

const Image = styled.img`
  border-radius: 50%;
  width: 30px;
  height: 30px;
`

const Text = styled.span`
  text-align: center;
`

export {Image, ItemContainer, Text}