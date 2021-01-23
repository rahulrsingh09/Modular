import * as React from 'react';
import API, {REACTIONS_REQUEST, USER_CONTENT_REACTIONS, USERS} from "../api";
import {IReaction, IReactions} from "../Types/reactions.types";
import Trigger from "../Components/Trigger/Trigger";
import {Div} from "./AppComponent.styled";
import {IUser} from "../Types/user.types";
import {IUserContentReaction} from "../Types/userContent.types";
import SummaryComponent from "../Components/Summary/Summary";


interface IAppComponentProps {

}

interface IAppComponentState extends IReactions{
    activeTabIndex: number;
    users: Array<IUser>;
    userContentReactions: Array<IUserContentReaction>;
}

class AppContainer extends React.PureComponent<IAppComponentProps, IAppComponentState> {
    state:IAppComponentState = {
        reactions: [],
        users: [],
        userContentReactions: [],
        activeTabIndex: 0
    }
    _reactionMapCount: Map<number,number> = new Map<number, number>()
    async componentDidMount() {
        try{
            const [reactions, users, userContentReactions] = await Promise.all([
                API.get(REACTIONS_REQUEST),
                API.get(USERS),
                API.get(USER_CONTENT_REACTIONS)
            ]);
            if(reactions.data && reactions.data.length) this.setState({
                reactions: reactions.data as Array<IReaction>
            })
            if(users.data && users.data.length) this.setState({
                users: users.data as Array<IUser>
            })
            if(userContentReactions.data && userContentReactions.data.length){
                userContentReactions.data.forEach((userReaction: IUserContentReaction) => {
                    const countOfReactions = this._reactionMapCount.get(userReaction.reaction_id);
                    this._reactionMapCount.set(userReaction.reaction_id, countOfReactions ? countOfReactions + 1 : 1)
                    }
                )
                this.setState({
                    userContentReactions: userContentReactions.data as Array<IUserContentReaction>
                })
            }

        }catch(error){
            console.log(error);
        }
    }



    render() {
        return (
            <Div>
                <Trigger reactions={this.state.reactions}/>
                <SummaryComponent users={this.state.users} userContentReactions={this.state.userContentReactions} reactions={this.state.reactions} reactionMapCount={this._reactionMapCount}/>
            </Div>
        );
    }

}

export default AppContainer;