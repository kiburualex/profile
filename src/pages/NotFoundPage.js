// ./src/pages/NotFoundPage.js
import React, { Component } from 'react';
import SubscribeForm from '../components/SubscribeForm';
class NotFoundPage extends Component {
  render() {
    return(
      <div>
        <h2>OOps!</h2>
        <p>404! Page Not Found.</p>
        <SubscribeForm thanks={true} {...this.props}/>
      </div>
    )
  }
}
export default NotFoundPage;