
import React, {Component} from 'react';
import { connect } from 'react-redux';
import AddItemForm from '../AddItemForm/AddItemForm';

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_SHELF'});
  }

  removeItem = (event, id) => {
    event.preventDefault();
    console.log('in remove item:', id);
    this.props.dispatch({type: 'REMOVE_ITEM', payload: id})
  }

  render() {
    return (
      <div>
        <AddItemForm />
        <h2>Your Shelf:</h2>
        <ul>
          {this.props.shelf.map(item => (
            <li key = {item.id}>
              {item.description}
              <img src={item.image_url} alt ={item.description}/>
              <button onClick={ (event) => this.removeItem(event, item.id) }>Remove</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  shelf: state.shelf,
  user: state.user,
});

export default connect(mapStateToProps)(InfoPage);
