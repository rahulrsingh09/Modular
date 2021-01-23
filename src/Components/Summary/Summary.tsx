import * as React from 'react';
import {IUserContentReaction} from "../../Types/userContent.types";
import {IReaction} from "../../Types/reactions.types";
import {Content, Tab, Tabs} from "../Tabs/Tabs";
import {IUser} from "../../Types/user.types";
import Emoji from "../Emoji/Emoji";
import {DetailsComponent, Div, SmallCircle, SummaryHeader, TabHeader, TabHeaderContainer, Text} from "./Summary.styled";
import Item from "../Item/Item";

const ALL_TAB_INDEX = 999;


interface ISummaryComponentProps {
    users: Array<IUser>;
    userContentReactions: Array<IUserContentReaction>;
    reactions: Array<IReaction>;
    reactionMapCount: Map<number,number>;
    globalTabIndex: number;
    tabClickHandler: (data: number) => void;
}

interface ISummaryComponentState{
}

class SummaryComponent extends React.PureComponent<ISummaryComponentProps, ISummaryComponentState> {
    
    _userIdToUsersMap: Map<number, IUser> = new Map<number, IUser>();
    _reactionIdToReactionsMap: Map<number, IReaction> = new Map<number, IReaction>();
    _userContentReactionsMap: Map<number, Array<number>> = new Map<number, Array<number>>();
    constructor(props: ISummaryComponentProps) {
        super(props);
        props.users.forEach((user) => {
            this._userIdToUsersMap.set(user.id, user)
        })
        props.reactions.forEach((reaction) => {
            this._reactionIdToReactionsMap.set(reaction.id, reaction)
        })
        props.userContentReactions.forEach((userContent) => {
            let userIds:Array<number> | undefined = this._userContentReactionsMap.get(userContent.reaction_id);
            if(userIds == undefined) userIds = [];
            userIds.push(userContent.user_id)
            this._userContentReactionsMap.set(userContent.reaction_id, userIds)
        })
    }

    getTabs = () => {
        const Tabs = this.props.reactions.map((reaction, index) => {
            return (
                <Tab onClick={() => this.props.tabClickHandler(index)} active={this.props.globalTabIndex === reaction.id}>
                    <TabHeader>
                        <Emoji emoji={reaction.emoji} name={reaction.name}
                               id={reaction.id} key={reaction.id} preventHover={true}
                               customPadding={'2px 8px 4px 0px'}/>
                        <SmallCircle/>
                        <Text>{this.props.reactionMapCount.get(reaction.id)}</Text>
                    </TabHeader>
                </Tab>
            )
        })
        return Tabs;
    }

    getFilteredContent = (id:number, tabIndex:number) => {
        let filteredContent;
            const userIds = this._userContentReactionsMap.get(id);
            if(userIds != undefined ){
                filteredContent = userIds.map(userId => {
                    const user = this._userIdToUsersMap.get(userId);
                    const reaction:IReaction | undefined = this._reactionIdToReactionsMap.get(id)
                    if(user != undefined && reaction !=undefined){
                        return <Item user={user} reaction={reaction}/>
                    }
                })
        }
        return filteredContent;
    }

    getAllContent = () => {
        let filteredContent;
        filteredContent = this.props.userContentReactions.map(userContentId => {
            const user: IUser | undefined = this._userIdToUsersMap.get(userContentId.user_id);
            const reaction:IReaction | undefined = this._reactionIdToReactionsMap.get(userContentId.reaction_id)
            if (user !=undefined && reaction !=undefined) return <Item user={user} reaction={reaction}/>
        })
        return filteredContent;
    }

    getTabContent = () => {
        const TabContent = this.props.reactions.map((reaction, index) => {
            return (
                <Content active={this.props.globalTabIndex === reaction.id}>
                    {this.props.globalTabIndex === reaction.id && this.getFilteredContent(reaction.id, this.props.globalTabIndex)}
                </Content>
            )
        })
        return TabContent;
    }


    render() {
        return (
            <Div>
                <SummaryHeader>Reactions</SummaryHeader>
                <TabHeaderContainer>
                    <Tabs>
                        <Tab onClick={() => this.props.tabClickHandler(ALL_TAB_INDEX)} active={this.props.globalTabIndex === ALL_TAB_INDEX}>
                            <TabHeader height={'39px'} emphasis={'bold'} >
                                All
                            </TabHeader>
                        </Tab>
                        {this.getTabs()}
                    </Tabs>
                </TabHeaderContainer>
                <DetailsComponent>
                    <Content active={this.props.globalTabIndex === ALL_TAB_INDEX}>
                        {this.getAllContent()}
                    </Content>
                    {this.getTabContent()}
                </DetailsComponent>
            </Div>
        );
    }

}

export default SummaryComponent;