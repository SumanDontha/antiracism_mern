import React, { Component } from 'react'
import axios from 'axios'

import DonationList from './Donation/DonationList'
import DonationForm from './Donation/DonationForm'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      donations: [],
      currentDonation: {}
    }

    this.updateCurrentDonation = this.updateCurrentDonation.bind(this)

  }

  componentDidMount() {

    const url = 'http://localhost:4000/donations'

    axios.get(url, { crossdomain: true })
         .then((Response) => {
          this.setState({ donations: Response.data })
        })
        .catch((error) => console.log(error))
  }

  updateCurrentDonation(item){
    this.setState({ currentDonation: item })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
         <div className="col s10">
           <DonationList 
            donations = {this.state.donations}
            updateCurrentDonation = {this.updateCurrentDonation}
           />
         </div>
       </div>
       <div className="row">
         <div className="col s10">
           <DonationForm />
         </div>
       </div>
     </div>
    )
  }
}

export default App

// import './App.css';

// import DonationList from './Donation/DonationList'
// import DonationForm from './Donation/DonationForm'



// function App() {
//   return (
//     <div className="container-fluid">
//       <div className="row">
//         <div className="col s10">
//           <DonationList />
//         </div>
//       </div>
//       <div className="row">
//         <div className="col s10">
//           <DonationForm />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
