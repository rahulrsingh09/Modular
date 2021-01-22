import React from 'react';
import {IReaction} from "../../Types/reactions.types";
import {Span} from "./Emoji.styled";

const Emoji = (props: IReaction) => (
    <Span
        role="img"
        aria-label={props.name ? props.name : ""}
        aria-hidden={props.name ? "false" : "true"}
        key={props.id}
    >
        {props.emoji}
    </Span>
);
export default React.memo(Emoji);