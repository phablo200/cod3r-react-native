import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import UsersContext from '../context/UsersContext';

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ?? {});
    const { dispatch } = useContext(UsersContext);
    
    return (
        <View style={styles.form}>
            <Text>Nome</Text>
            <TextInput 
                style={styles.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder="Informe o nome"
                value={user.name}
            />
            <Text>Email</Text>
            <TextInput 
                style={styles.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder="Informe o email"
                value={user.email}
            />
            <Text>URL do Avatar</Text>
            <TextInput 
                style={styles.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
            <Button title="Salvar"
                onPress={() => {
                    dispatch({
                        type: user.id ? 'updateUser' : 'createUser',
                        payload: user,
                    });

                    navigation.goBack()
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    form: {
        padding: 15,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
});