import React, {Component} from 'react';
import {
    Button,
    ScrollView,
    StyleSheet,
    WebView
} from 'react-native';

interface Props {
    toggle: any,
    id: string,
    post: string,
}

interface State {
    id: string,
    post: string
}

// This Component is for viewing the requested page in a webview
// The idea is to pass true or false to show this page along with post id and the title
// which is sent with the props and state variables
export default class RedditPage extends Component<Props, State> {

    constructor(props) {
        super(props);

        this.state = {
            id: props.id || "Id",
            post: props.post || "Post"
        }

    }

    render() {
        console.log("CAlling Render");
        return (
            <ScrollView
                style={styles.scrollContainer}
                contentContainerStyle={styles.scrollView}
                scrollEnabled={true}
                pagingEnabled={true}>
                <Button
                    onPress={this.props.toggle}
                    title="Go Back to Previous Screen"
                    color="#841584"
                    accessibilityLabel="Go Back to Previous Screen purple button"
                />
                <WebView
                    source={{uri: 'https://www.reddit.com/r/pics/comments/' + this.state.id + "/" + this.state.post}}
                    style={{marginTop: 20}}/>
            </ScrollView>
        );
    }

};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'grey',
    },
    scrollView: {
        flexGrow: 1,
        width: '100%',
        height: '100%',
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: 'green'
    },
});
