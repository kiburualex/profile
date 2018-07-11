// ./src/pages/Subscribe.js
import React, { Component } from 'react';
import SubscribeForm from '../components/SubscribeForm';
class Subscribe extends Component {
  render() {
    return(
      <div>
        <h2>Welcome to My portfolio site!</h2>
        <p>More than happy to show you my work and share ny knowledge with you.</p>
        <SubscribeForm {...this.props} />
      </div>
    )
  }
}
export default Subscribe;