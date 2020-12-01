import React, { useState, useEffect } from 'react'
import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import commonStyles from '../common/commonStyles'

import { fetchLaunches } from '../store/actions/actions'

import Header from '../components/LaunchesList/LaunchesListHeader'
import LaunchCard from '../components/LaunchesList/LaunchesListCard'
import LaunchesListSearchBar from '../components/LaunchesList/LaunchesListSearchBar'

export default () => {
    // Declaração de Variáveis usando Hooks
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    // Semelhante ao ComponentDidMount
    useEffect(() => {
        dispatch(fetchLaunches(page))
    }, [])
    // Recebe a variável armazenada no Store
    const { launches } = useSelector(state => state.launches)

    // Função de paginação automática
    const loadWhenListEnds = () => {
        setPage(page + 1)
        dispatch(fetchLaunches(page + 1))
    } 

    // Função disparada quando o usuário insere um texto
    // no SearchBar
    const searchFilterFunction = (text) => {
        setSearch(text)
    }

    // Função que realiza o filtro do conteúdo pelo
    // nome buscado e renderiza a lista
    onSearchFilterFunction = () => {
        const filteredData = launches.filter(({ name }) =>
            name.toLowerCase().includes(search.toLowerCase())
        )

        return (
            <View style={styles.content}>
                <FlatList data={filteredData}                    
                    keyExtractor={item => `${item.id}`}
                    onEndReached={loadWhenListEnds}
                    renderItem={({ item }) => {
                        return (
                            <LaunchCard name={item.name} launched={item.success} item={item} image={item.links.patch.small}></LaunchCard>
                        )
                    }}
                />
            </View>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: commonStyles.container.backgroundColor }}>
            <Header />
            <LaunchesListSearchBar onChangeText={(text) => searchFilterFunction(text)}
                onClear={(text) => searchFilterFunction('')}
                value={search} />
            {onSearchFilterFunction()}
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    content: {
        flex: 6,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 3,
        backgroundColor: '#f2f2f2'
    },
})