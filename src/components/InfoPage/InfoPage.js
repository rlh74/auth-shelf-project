import React, {Component} from 'react';
import { connect } from 'react-redux';

class InfoPage extends Component {
  componentDidMount() {
    this.props.dispatch({type: 'FETCH_SHELF'});
  }

  render() {
    return (
      <div>
        {/* {JSON.stringify(this.props.shelf)} */}
        <h2>Your Shelf:</h2>
        <ul>
          {this.props.shelf.map(item => (
            <li key = {item.id}>
              {item.description}
              <img src = {item.img_url} alt = {item.description}/>
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
