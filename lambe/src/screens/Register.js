import React, { Component } from 'react';

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { createUser } from '../store/actions/user';

class Register extends Component {
    state = {
        name: 'Phablo Vilas Boas',
        email: 'phablovilasboas24@gmail.com',
        password: '12345'
    };

    render () {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Nome" 
                    style={styles.input} 
                    autoFocus
                    value={this.state.name}
                    onChange={name => this.setState({ name })}
                />

                <TextInput placeholder="Email" 
                    keyboardType="email-address"
                    style={styles.input} 
                    autoFocus
                    value={this.state.email}
                    onChange={email => this.setState({ email })}
                />

                <TextInput placeholder="Senha" 
                    style={styles.input} 
                    secureTextEntry
                    value={this.state.password}
                    onChange={password => this.setState({ password })}
                />

                <TouchableOpacity onPress={() => this.props.onCreateUser(this.state)} style={styles.buttom}>
                    <Text style={styles.buttomText}>Salvar</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginTop: 20,
        width: '90%',
        backgroundColor: '#eee',
        height: 40,
        borderWidth: 1,
        borderColor: '#333',
    },
    buttom: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttomText: {
        fontSize: 20,
        color: '#fff',
    },
});


const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user)),
    };
};

export default connect(null, mapDispatchToProps)(Register);