import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import Author from './Author';
import Comments from './Comments';
import AddComment from './AddComment';

class Post extends Component {
  render() {
    const addComment = this.props.name 
      ? (<AddComment postId={this.props.id} />)
      : null;

    return (
      <View style={{flex: 1}}>
        <Image source={this.props.image} style={styles.image} />
        <Author email={this.props.email} nickname={this.props.nickname} />
        <Comments comments={this.props.comments} />
        {addComment}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    resizeMode: 'contain',
  },
});

const mapStateToProps = ({ user }) => ({
  name: user.name
});

export default connect(mapStateToProps)(Post);
