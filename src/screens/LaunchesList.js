import React, { Component, useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native'

import commonStyles from '../commonStyles'

import LaunchCard from '../components/LaunchesList/LaunchCard';
import LaunchSearchBar from '../components/LaunchesList/LaunchSearchBar';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchLaunches } from '../store/actions/fetchLaunches';

import { useDispatch } from 'react-redux';

class LaunchesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            search: '',
            filteredDataSource: [],
            masterDataSource: [],
            loading: true,
            loadingExtraData: false,
            page: 1
        }
        this.shouldComponentRender = this.shouldComponentRender.bind(this);
        this.loadMoreItems = this.loadMoreItems.bind(this);
    }

    loadMoreItems(dispatch) {
        const { page } = this.state;
        this.setState({page:page+1})
        dispatch(this.props.fetchLaunches(this.state.page))
        this.setState({ masterDataSource: this.props.launches.launches})
    }

    componentDidMount() {
        this.props.fetchLaunches(this.state.page)
        this.setState({ filteredDataSource: this.props.launches.launches })
        this.setState({ masterDataSource: this.props.launches.launches })
    }

    shouldComponentRender() {
        const { pending } = this.props;
        if (pending === false) return false;
        // more tests
        return true;
    }

    searchFilterFunction = (text) => {
        if (text) {
            const newData = this.state.masterDataSource.filter(item => {
                const itemData = item.name
                    ? item.name.toUpperCase()
                    : ''.toUpperCase()
                const textData = text.toUpperCase()
                return itemData.indexOf(textData) > -1;
            })
            this.setState({ filteredDataSource: newData })
            this.setState({ search: text })
        } else {
            this.setState({ filteredDataSource: this.state.masterDataSource })
            this.setState({ search: text })
        }
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: commonStyles.container.backgroundColor }}>
                <View style={styles.header}>
                    <View style={styles.imageHeader}>
                        <Image source={require('../../assets/imgs/astronaut.jpg')} style={{ height: 150, width: 150 }}></Image>
                    </View>
                    <View style={styles.textHeader}>
                        <Text style={styles.text}>Lançamentos</Text>
                        <Text style={styles.text}>Hoje, 28 de Novembro de 2020</Text>
                    </View>
                </View>
                <LaunchSearchBar onChangeText={(text) => this.searchFilterFunction(text)}
                    onClear={(text) => this.searchFilterFunction('')}
                    value={this.state.search} />
                <View style={styles.content}>
                    <FlatList data={this.state.filteredDataSource}
                        numColumns={2}
                        onEndReached={(dispatch) => this.loadMoreItems(dispatch)}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            console.log(item.links.patch.small)
                            return (
                                <LaunchCard name={item.name} item={item} image={item.links.patch.small}></LaunchCard>
                            )
                        }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        flex: 3,
        flexDirection: 'row',
        backgroundColor: commonStyles.container.backgroundColor
    },
    imageHeader: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader: {
        flex: 5,
        justifyContent: 'center',
        paddingRight: 20,
        paddingBottom: 20
    },
    content: {
        flex: 6,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 5,
        backgroundColor: '#b5b5b5'
    },
    principalItem: {
        height: 150,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: "#e6e6e6",
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
    },
    text: {
        textAlign: 'right',
        fontFamily: commonStyles.fontFamily,
        color: '#FFF',
        fontSize: 15,
        alignItems: 'flex-end'
    }
})

function mapStateToProps(state) {
    return {
        launches: state.launches
    }
}

function mapDispatchToProps(dispatch) {
    return {
        ...bindActionCreators({ fetchLaunches }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchesList)


