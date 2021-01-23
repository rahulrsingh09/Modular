import React from 'react';
import {IReaction} from "../../Types/reactions.types";
import {Span} from "./Emoji.styled";

export interface IEmoji extends IReaction{
    preventHover: boolean;
    customPadding: string;
}

const Emoji = (props: IEmoji) => (
    <Span
        customPadding={props.customPadding}
        preventHover={props.preventHover}
        role="img"
        aria-label={props.name ? props.name : ""}
        aria-hidden={props.name ? "false" : "true"}
        key={props.id}
    >
        {props.emoji}
    </Span>
);

Emoji.defaultProps ={
    preventHover: false,
    customPadding:'2px 8px 4px 8px'
}
export default React.memo(Emoji);