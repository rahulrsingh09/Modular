import * as React from 'react';
import API, {REACTIONS_REQUEST} from "../api";
import {IReaction, IReactions} from "../Types/reactions.types";
import Trigger from "../Components/Trigger/Trigger";
import {Div} from "./AppComponent.styled";


interface IAppComponentProps {

}

interface IAppComponentState extends IReactions{
}

class AppContainer extends React.PureComponent<IAppComponentProps, IAppComponentState> {
    state:IAppComponentState = {
      reactions: []
    }
    async componentDidMount() {
      try{
          const res = await API.get(REACTIONS_REQUEST);
          if(res.data && res.data.length) this.setState({
              reactions: res.data as Array<IReaction>
          })
      }catch(error){
          console.log(error);
      }
    }

    render() {
        return (
          <Div>
              <Trigger reactions={this.state.reactions}/>
          </Div>
        );
    }

}

export default AppContainer;