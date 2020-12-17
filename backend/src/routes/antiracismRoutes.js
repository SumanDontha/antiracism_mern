import { addNewDonation, getDonation, getDonationWithID, updateDonation, deleteDonation } from '../controllers/antiracismController'

const routes = (app) => {
  
  // create route for donations
  app.route('/donations')

  // create GET request
  .get(getDonation)

  // create POST request
  .post(addNewDonation)

  // create a new route so you can get these donation entries by their ID's
  app.route('/donations/:donationID')

  .get(getDonationWithID)

  // create PUT request
  .put(updateDonation)

  // create DELETE request
  .delete(deleteDonation)

}

export default routes;