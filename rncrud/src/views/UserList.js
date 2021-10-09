import React, { useContext } from 'react';
import { View, FlatList, Text, Alert } from 'react-native';
import { ListItem, Button, Icon } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default props => {
    
    const { state, dispatch } = useContext(UsersContext);
    
    const confirmUserDeletion = (user) => {
        Alert.alert('Excluir usuário', 'Deseja excluir o usuário', [{
            text: 'Sim',
            onPress() {
                dispatch({
                    type: 'deleteUser',
                    payload: user,
                });
            }
        }, {
            text: 'Não'
        }]);
    }

    const getActions = (user) => {
        return (
            <>
                <Button onPress={() => props.navigation.navigate('UserForm', user)} 
                    type="clear"
                    icon={<Icon name="edit" size={25} color="orange" />}
                />

                <Button onPress={() => confirmUserDeletion(user)} 
                    type="clear"
                    icon={<Icon name="delete" size={25} color="red" />}
                />
            </>
        );
    };

    const getUserItem = ({ item: user }) => {
        return (
            <ListItem leftAvatar={{source: {uri: user.avatarUrl}}} 
                key={user.id} 
                title={user.name}
                subtitle={user.email}
                bottomDivider
                rightElement={getActions(user)}
                onPress={() => props.navigation.navigate('UserForm')}
            />
        );
    };

    return (
        <View>
            <FlatList keyExtractor={user => user.id.toString()} 
                data={state.users}
                renderItem={getUserItem}
            />
        </View>
    );
};