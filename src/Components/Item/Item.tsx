import * as React from 'react';
import {Image, ItemContainer} from "./Item.styled";
import {IReaction} from "../../Types/reactions.types";
import {IUser} from "../../Types/user.types";
import Emoji from "../Emoji/Emoji";
import {Text} from "../Common.Styled.tsx/Styled";


interface IItemProps{
    user: IUser;
    reaction: IReaction;
}

const Item = (props: IItemProps) => {

    return (
        <ItemContainer>
            <Image src={props.user.avatar}/>
            <Emoji emoji={props.reaction.emoji} id={props.reaction.id} name={props.reaction.name}/>
            <Text>{props.user.first_name}&nbsp;{props.user.last_name}</Text>
        </ItemContainer>
    )
}

export default React.memo(Item)