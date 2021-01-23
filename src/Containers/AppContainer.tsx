import * as React from 'react';
import API, {REACTIONS_REQUEST, USER_CONTENT_REACTIONS, USERS} from "../api";
import {IReaction, IReactions} from "../Types/reactions.types";
import Trigger from "../Components/Trigger/Trigger";
import {Div, EmojiButton} from "./AppComponent.styled";
import {IUser} from "../Types/user.types";
import {IUserContentReaction} from "../Types/userContent.types";
import SummaryComponent from "../Components/Summary/Summary";
import Spinner from "../Components/Spinner/Spinner.styled";
import ReactionButton from "../Components/ReactionButton/ReactionButton";


interface IAppComponentProps {

}

interface IAppComponentState extends IReactions{
    activeTabIndex: number;
    users: Array<IUser>;
    userContentReactions: Array<IUserContentReaction>;
    toggleEmojis: boolean;
    activeReaction: IReaction
}

class AppContainer extends React.PureComponent<IAppComponentProps, IAppComponentState> {
    state:IAppComponentState = {
        reactions: [],
        users: [],
        userContentReactions: [],
        activeTabIndex: 1,
        activeReaction: {} as IReaction,
        toggleEmojis: false
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

    onHoverEventHandler = (reactionId: number) => {
        this.setState({
            activeTabIndex: reactionId
        })
    }

    onClickEventHandler = (reaction: IReaction) => {
        this.setState({
            activeReaction: reaction
        })
    }

    tabClickHandler = (index:number) => {
        if (index !== this.state.activeTabIndex) {
            this.setState({activeTabIndex: index});
        }
    };


    onEmojiButtonClickHandler = () => {
        this.setState(prevState => ({
            toggleEmojis: !prevState.toggleEmojis
        }))
    }

    render() {
        const renderedView = (
            this.state.userContentReactions.length ? (
                <React.Fragment>
                    {this.state.toggleEmojis && <Trigger reactions={this.state.reactions}
                                                         onHoverEventHandler={this.onHoverEventHandler}
                                                         onClickHandler = {this.onClickEventHandler}/> }
                    <EmojiButton onClick={this.onEmojiButtonClickHandler}/>
                    <SummaryComponent users={this.state.users} userContentReactions={this.state.userContentReactions}
                                      reactions={this.state.reactions} reactionMapCount={this._reactionMapCount}
                                      globalTabIndex={this.state.activeTabIndex} tabClickHandler={this.tabClickHandler}/>
                    {this.state.activeReaction && this.state.activeReaction.id &&
                    <ReactionButton onToggleClickHandler={this.onClickEventHandler} activeReaction={this.state.activeReaction}/>}
                </React.Fragment>
            ) : <Spinner/>
        )
        return (
            <Div>
                {renderedView}
            </Div>
        )
    }

}

export default AppContainer;