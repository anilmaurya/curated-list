import React from "react";
import "./modal.css";
import PropTypes from "prop-types";

export default class Modal extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  
    var target = event.target;

    var payload = {
      title: target.title.value,
      link: target.link.value,
      category: target.category.value
    };
 
    fetch(process.env.REACT_APP_API_BASE_URL + '/lists', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body:  JSON.stringify(payload),
      
    }).then(res => res.json())
    .then(
      (res) => {
        console.log(res)
        window.location =  window.location.protocol + '//' + window.location.host
      },
      (error) => {
        console.log(error)
      })

  }

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <h2>Add new item</h2>
        <form onSubmit={this.handleSubmit}>
          <div class="content">{this.props.children}</div>
          <div class="actions">
            <button class="toggle-button" type="submit">
            Submit
            </button>
            <button class="toggle-button" onClick={this.onClose}>
                close
            </button>
          </div>
        </form>
      </div>
    );
  }
}
Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};