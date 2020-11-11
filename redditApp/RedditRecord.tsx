import React, {Component} from 'react';

import {
    Alert,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

//Defining interfaces due to typescript error with ReadOnly<{},{}>
interface Props {
    toggle: any,
    id: string,
    title: string
}

interface State {
    date: string,
    id: string,
    image: string,
    title: string,
    author: string,
    score: string,
    comments: string,
}

// This Component displays the data row for each post.
// The Idea here is we use the state to hold the post data and
// use the props to pass info to the display page.
// This component is all custom I am sure there is a better way
// to build this view however it was quite helpful in seeing how this works.
export class RedditRecord extends Component<Props, State> {

    constructor(props) {
        super(props);

        // Define state for Post
        this.state = {
            date: props.date || "Date",
            id: props.id || "Id",
            image: props.image || "./icon-512x512.png",
            title: props.title || "Title",
            author: props.author || "Author",
            score: props.score || "Score",
            comments: props.comments || "Comments"
        }

    }

    // Switch variable to show the result page.
    _onPressButton(id) {
        {this.props.toggle(this.props.id, this.props.title)}
    }

    // Render html row
    // Probably easier way to do this but useful to learn this anyway.
    render() {

        return (

            <View style={styles.viewContainer}>

                    <View style={styles.rowContainer}>

                        <TouchableOpacity style={styles.button} onPress={() => this._onPressButton(this.state.id)} activeOpacity={0}>
                        <View style={styles.imageView}>

                            <Image style={styles.image} source={{uri: this.state.image}}/>
                        </View>
                        </TouchableOpacity>

                        <View style={styles.dataContainer}>

                            <View style={styles.topContainer}>
                                <View style={styles.dateRow}>

                                    <View style={styles.dateView}>
                                        <View style={styles.filler1}/>
                                        <View style={styles.filler2}/>
                                        <View style={styles.date}>
                                            <Text>{this.state.date}</Text>
                                        </View>
                                    </View>

                                </View>
                            </View>

                            <View style={styles.middleContainer}>
                                <View style={styles.title}>
                                    <Text>{this.state.title}</Text>
                                </View>
                            </View>

                            <View style={styles.bottomContainer}>
                                <View style={styles.detailsView}>


                                    <View style={styles.author}>

                                        <Text>{this.state.author}</Text>

                                    </View>

                                    <View style={styles.score}>

                                        <Text>{this.state.score}</Text>

                                    </View>

                                    <View style={styles.comments}>

                                        <Text>{this.state.comments}</Text>

                                    </View>

                                </View>
                            </View>

                        </View>
                    </View>

            </View>

        );
    }

}

// Define Css Styles
const styles = StyleSheet.create({
    viewContainer: {
        flexGrow: 1,
        width: '100%',
        height: '20%',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    rowContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%'
    },
    imageView: {
        flex: 1,
        flexDirection: 'row',
        width: '20%',
        height: '100%',
        backgroundColor: 'white',
    },
    image: {
        width: '100%',
        height: '100%'
    },
    dataContainer: {
        flex: 2,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    topContainer: {
        flex: 1,
        flexDirection: 'column',
        width: '100%',
        height: '5%',
    },
    dateRow: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        width: '100%',
        height: '20%',
    },
    dateView: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
    },
    filler1: {
        flex: 1,
        flexDirection: 'row',
        width: '45%',
        height: '100%',
        backgroundColor: 'white',
    },
    filler2: {
        flex: 2,
        flexDirection: 'row',
        width: '45%',
        height: '100%',
        backgroundColor: 'white',
    },
    date: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '10%',
        height: '100%'
    },

    middleContainer: {
        flex: 2,
        flexDirection: 'column',
        width: '100%',
        height: '90%'
    },
    title: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },

    bottomContainer: {
        flex: 3,
        flexDirection: 'column',
        width: '100%',
        height: '5%',
    },
    detailsView: {
        flex: 1,
        flexDirection: 'row',
    },

    author: {
        flex: 2,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    score: {
        flex: 3,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    },
    comments: {
        flex: 4,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
    }

});
