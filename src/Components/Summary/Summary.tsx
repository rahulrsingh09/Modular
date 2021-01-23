import * as React from 'react';
import {IUserContentReaction} from "../../Types/userContent.types";
import {IReaction} from "../../Types/reactions.types";
import {Content, Tab, Tabs} from "../Tabs/Tabs";
import {IUser} from "../../Types/user.types";
import Emoji from "../Emoji/Emoji";
import {DetailsComponent, Div, SmallCircle, SummaryHeader, TabHeader, TabHeaderContainer, Text} from "./Summary.styled";



interface ISummaryComponentProps {
    users: Array<IUser>;
    userContentReactions: Array<IUserContentReaction>;
    reactions: Array<IReaction>;
    reactionMapCount: Map<number,number>
}

interface ISummaryComponentState{
    activeTabIndex: number;
}

class SummaryComponent extends React.PureComponent<ISummaryComponentProps, ISummaryComponentState> {
    state:ISummaryComponentState = {
        activeTabIndex: 999
    }

    getTabs = () => {
        const Tabs = this.props.reactions.map((reaction, index) => {
            return (
                <Tab onClick={() => this.tabClickHandler(index)} active={this.state.activeTabIndex === index}>
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

    getTabContent = () => {
        const TabContent = this.props.reactions.map((reaction, index) => {
            return (
                <Content active={this.state.activeTabIndex === index}>
                    <h1>{reaction.name}</h1>
                </Content>
            )
        })
        return TabContent;
    }

    tabClickHandler = (index:number) => {
        if (index !== this.state.activeTabIndex) {
            this.setState({activeTabIndex: index});
        }
    };



    render() {
        return (
            <Div>
                <SummaryHeader>Reactions</SummaryHeader>
                <TabHeaderContainer>
                    <Tabs>
                        <Tab onClick={() => this.tabClickHandler(999)} active={this.state.activeTabIndex === 999}>
                            <TabHeader height='39px'>
                                All
                            </TabHeader>
                        </Tab>
                        {this.getTabs()}
                    </Tabs>
                </TabHeaderContainer>
                <DetailsComponent>
                    <Content active={this.state.activeTabIndex === 999}>
                        <h1>ALL</h1>
                    </Content>
                    {this.getTabContent()}
                </DetailsComponent>
            </Div>
        );
    }

}

export default SummaryComponent;