import React, { Component } from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput 
} from 'react-native';

import { connect } from 'react-redux';
import { login } from '../store/actions/user';


class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    login = () => {
        this.props.onLogin({ ...this.state });
    };

    render () {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Email" style={styles.input} autoFocus={true} 
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />

                <TextInput placeholder="Senha" 
                    style={styles.input} 
                    secureTextEntry 
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />

                <TouchableOpacity onPress={this.login} style={styles.buttom}>
                    <Text style={styles.buttomText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {}} style={styles.buttom}>
                    <Text style={styles.buttomText}>Criar nova conta</Text>
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

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: user => dispatch(login(user))
    };
};

export default connect(null, mapDispatchToProps)(Login);