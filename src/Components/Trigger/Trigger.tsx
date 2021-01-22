import * as React from 'react';
import {IReactions} from "../../Types/reactions.types";
import Emoji from "../Emoji/Emoji";
import {Div} from "./Trigger.styled";
import {ToolTip, ToolTipText} from "../Tooltip/Tootip.styled";

interface ITriggerProps extends IReactions{
}

const Trigger = (props: ITriggerProps) => {

   const getEmojisList = (): React.ReactElement => {
      const list = <React.Fragment>
         {props.reactions.map(reaction =>
             <ToolTip>
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
       <Div>
          {getEmojisList()}
       </Div>
   )
}

export default React.memo(Trigger)