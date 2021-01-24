import * as React from 'react';
import {IReactions} from "../../Types/reactions.types";
import Emoji from "../Emoji/Emoji";
import {TriggerWrapper} from "./Trigger.styled";
import {ToolTip, ToolTipText} from "../Tooltip/Tootip.styled";

interface ITriggerProps extends IReactions{
   onHoverEventHandler: (data: any) => void
   onClickHandler: (data: any) => void
}

const Trigger = (props: ITriggerProps) => {

   const getEmojisList = (): React.ReactElement => {
      const list = <React.Fragment>
         {props.reactions.map(reaction =>
             <ToolTip onMouseEnter={() => props.onHoverEventHandler(reaction.id)} onClick={() => props.onClickHandler(reaction)}>
                <Emoji id={reaction.id} name={reaction.name} emoji={reaction.emoji} key={reaction.id}/>
                <ToolTipText>
                   {reaction.name}
                </ToolTipText>
             </ToolTip>
             )}
      </React.Fragment>
      return list
   }

   return (
       <TriggerWrapper>
          {getEmojisList()}
       </TriggerWrapper>
   )
}

export default React.memo(Trigger)