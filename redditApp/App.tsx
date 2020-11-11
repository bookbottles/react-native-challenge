import React, {Component} from 'react';

import {
    ScrollView,
    StyleSheet,
    Alert,
    Text,
    View, Switch, StatusBar
} from 'react-native';

import {RedditRecord} from './RedditRecord';
import RedditPage from "./RedditPage";

const axios = require('axios');

interface Props {
    state: string,
}

interface States {
    switchValue: boolean,
    url: string,
    title: string
}

// This Component controls what to display and gets the info from the api
// The api fetches and stores in the status props, and toggleSwitch decides which page to render.
export default class Touchables extends Component<Props, States> {

    private items: any;

    toggleSwitch = (url, title) => {
        if (this.state.switchValue == true) {
            this.setState({
                switchValue: false,
                url: url,
                title: title
            })
        } else {
            this.setState({
                switchValue: true,
                url: url,
                title: url
            })
        }
    };

    constructor(props) {
        super(props);
        this.items = [];

        this.state = {
            switchValue: false,
            url: "",
            title: ""
        };

    }

    componentWillMount() {

        var _this = this;

        axios.get('https://api.reddit.com/r/pics/hot.json')
            .then(function (response) {
                // handle success
                for (let posts = 0; posts < response.data.data.dist; posts++) {

                    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
                    d.setUTCSeconds(response.data.data.children[posts].data.created);

                    _this.items.push({
                        id: response.data.data.children[posts].data.id,
                        date: d.toISOString(),
                        url: response.data.data.children[posts].data.url,
                        image: response.data.data.children[posts].data.thumbnail,
                        title: response.data.data.children[posts].data.title,
                        author: response.data.data.children[posts].data.author_fullname,
                        score: response.data.data.children[posts].data.score,
                        comments: response.data.data.children[posts].data.num_comments,
                    });

                    //console.log(_this.items);

                }

                _this.forceUpdate();
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });

    }

    generateView() {

        if (!this.state.switchValue) {

            return (
                <View>
                    <StatusBar backgroundColor="blue" barStyle="light-content" hidden={false}/>
                    <ScrollView
                        style={styles.scrollContainer}
                        contentContainerStyle={styles.scrollView}
                        scrollEnabled={true}
                        pagingEnabled={true}>
                        {this.items.map(state => (
                            <RedditRecord
                                style={styles.redditRecord}
                                id={state.id}
                                date={state.date}
                                url={state.url}
                                image={state.image}
                                title={state.title}
                                author={state.author}
                                score={state.score}
                                comments={state.comments}
                                key={state.date}
                                toggle={this.toggleSwitch}
                            />
                        ))}
                    </ScrollView>
                </View>
            );

        } else {

            return (
                <View>
                <RedditPage
                    id={this.state.url}
                    post={this.state.title}
                    toggle={this.toggleSwitch} />
                </View>
            )
        }

    }

    render() {
        console.log("CAlling Render");

        return (
            <View>
            { this.generateView() }
            </View>
        );
    }

};

const styles = StyleSheet.create({
    scrollContainer: {
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
    },
    scrollView: {
        flex: 1,
        width: '100%',
        height: '100%',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    redditRecord: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    welcome: {}
});
