import React from 'react'
import { SearchBar } from 'react-native-elements'

import commonStyles from '../../common/commonStyles'


export default props => {
        return (
            <SearchBar placeholder="Escreva aqui..."
                onChangeText={props.onChangeText}
                onClear={props.onClear}
                value={props.value}
                containerStyle={{ backgroundColor: commonStyles.container.backgroundColor }} />
        )
}