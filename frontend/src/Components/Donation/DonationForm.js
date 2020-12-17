import React, { Component } from 'react'
import axios from 'axios'

class DonationForm extends Component {

  submitDonation(event){
    event.preventDefault()

    axios.post('http://localhost:4000/donations', {
      organizationName: this.refs.organizationName.nodeValue,
      dollarAmount: this.refs.dollarAmount.nodeValue,
      comment: this.refs.comment.value
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => console.log(error))
  }

  render() {
    return (
      <div className="row">
        <h4> Add a new donation </h4>
        <form className="col s12" onSubmit={this.submitDonation.bind(this)}>
          <div className="row">
            <div className="input-field col s6">
              <input id="organizationName" ref="organizationName" type="text"/>
              <label htmlFor="organizationName"> Organization Name</label>
            </div>

            <div className="input-field col s6">
              <input id="dollarAmount" ref="dollarAmount" type="text"/>
              <label htmlFor="dollarAmount"> Dollar Amount </label>
            </div>

            <div className="input-field col s6">
              <input id="comment" ref="comment" type="text"/>
              <label htmlFor="comment"> Comment </label>
            </div>
            
          </div>

          <button className="btn waves-effect waves-light" type="submit" name="action">
            Add Donation
          </button>

        </form>
      </div>
    )
  }
}

export default DonationForm