import React, { Component, useState, useEffect } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native'
import axios from 'axios'

import commonStyles from '../commonStyles'

import LaunchCard from '../components/LaunchesList/LaunchCard';
import LaunchSearchBar from '../components/LaunchesList/LaunchSearchBar';

import { fetchLaunches } from '../store/actions/fetchLaunches';

import { useDispatch, useSelector } from 'react-redux';

export default props => {
    const [search, setSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchLaunches(page))
    }, [dispatch, page])
    const { launches } = useSelector(state => state)

    const searchFilterFunction = (text) => {
        setSearch(text)
    }

    onSearchFilterFunction = () => {
        const filteredData = launches.launches.filter(({ name }) =>
            name.toLowerCase().includes(search.toLowerCase()),
        );

        return (
            <View style={styles.content}>
                <FlatList data={filteredData}
                    numColumns={2}
                    keyExtractor={item => item.id}
                    renderItem={({ item }) => {
                        console.log(item.links.patch.small)
                        return (
                            <LaunchCard name={item.name} item={item} image={item.links.patch.small}></LaunchCard>
                        )
                    }}
                />
            </View>
        );
    }


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
            <LaunchSearchBar onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                value={search} />
            {onSearchFilterFunction()}
        </SafeAreaView>
    )

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