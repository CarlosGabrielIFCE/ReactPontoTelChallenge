import React, { Component } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList, TouchableWithoutFeedback } from 'react-native'
import commonStyles from '../commonStyles'

import LaunchCard from '../components/LaunchesList/LaunchCard';
import BigLaunchCard from '../components/LaunchesList/BigLaunchCard';
import LaunchSearchBar from '../components/LaunchesList/LaunchSearchBar';


export default class LaunchesList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            data: [
                { id: "00", name: "Relâmpago" },
                { id: "01", name: "Agente" },
                { id: "02", name: "Doc" },
                { id: "03", name: "Cruz" },
                { id: "04", name: "McQueen" },
                { id: "05", name: "Mate" },
                { id: "06", name: "Hudson" },
                { id: "07", name: "Ramirez" }
            ],
            search: '',
            filteredDataSource: [],
            masterDataSource: [],
        }
        this.state.filteredDataSource = this.state.data;
        this.state.masterDataSource = this.state.data;
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
            this.setState({ filteredDataSource: newData})
            this.setState({ search: text})
        } else {
            this.setState({ filteredDataSource: this.state.masterDataSource})
            this.setState({ search: text})
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
                    value={this.state.search}/>
                <View style={styles.content}>
                    <BigLaunchCard name="Big Launch Card" />
                    <FlatList data={this.state.filteredDataSource}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => {
                            return (
                                <LaunchCard name={item.name} item></LaunchCard>
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