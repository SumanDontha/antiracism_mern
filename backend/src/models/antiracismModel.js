import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const DonationSchema = new Schema({

  organizationName: {
    type: String,
    required: "Enter Organization Name"
  },

  dollarAmount: {
    type: Number,
    required: "Enter Amount Donated"
  },

  comment: {
    type: String
  },

  created_date: {
    type: Date,
    default: Date.now
  }

})