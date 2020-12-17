import React from 'react'

const DonationList = (props) => {
  console.log(props)
  return (
    <div>
      <h4> Donation List </h4>
      <ul className="collection">
        {props.donations.map((item) => (
          <div className="collection-item" 
              key={item._id}
              onClick={props.updateCurrentDonation.bind(this, item)}>
                {item.organizationName} - ${item.dollarAmout}
                <li>
                  {item.comment}
                </li>
              </div>
        ))}
      </ul>

      <h5> Total: ${props.donations.reduce((totalDonations, donation) => totalDonations + donation.dollarAmout, 0)}</h5>

    </div>
  )
}

export default DonationList
