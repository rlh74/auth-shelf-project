import React, { Component } from 'react';
import {connect} from 'react-redux';

class AddItemForm extends Component {

state = {
  description: '',
  image_url: '',
  user_id: this.props.reduxState.user.id
}

handleClick = (event) => {
  event.preventDefault();
  this.props.dispatch({type: 'ADD_ITEM', payload: this.state})
}

handleDescription = (event) => {
  event.preventDefault();
  console.log('In handleDescription', event.target.value)
  this.setState({
    description: event.target.value
  })
}

handleImage = (event) => {
  event.preventDefault();
  console.log('In handleDescription', event.target.value)
  this.setState({
    image_url: event.target.value
  })
}
  
  render() {
    return (
    <form onSubmit={this.handleClick}>
    <label>Description: </label>
    <input type="text" placeholder="Description" onChange={this.handleDescription}></input>
    <br />
    <label>Image URL: </label>
    <input type="text" placeholder="image URL" onChange={this.handleImage}></input>
    <br />
    <button>Add</button>
    </form>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
});

export default connect(mapReduxStateToProps)(AddItemForm);


