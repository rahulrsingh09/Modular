import * as React from 'react';
import {IReaction} from "../../Types/reactions.types";
import {Div} from "./ReactionButton.styled";
import Emoji from "../Emoji/Emoji";


interface IReactionButtonProps {
    onToggleClickHandler: (data: any) => void
    activeReaction: IReaction
}

const ReactionButton = (props: IReactionButtonProps) => {

    return (
        (props.activeReaction && props.activeReaction.id) ? (
            <Div active={props.activeReaction.id !== null} onClick={() => props.onToggleClickHandler({})}>
                <Emoji name={props.activeReaction.name} emoji={props.activeReaction.emoji} id={props.activeReaction.id}
                       preventHover={true} customPadding={"0 8px 0 0"}/>
                1
            </Div>
        ) : null
    )
}

export default React.memo(ReactionButton)