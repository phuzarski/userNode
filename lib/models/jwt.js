import mongoose from 'mongoose'

const JwtSchemas = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    ref: 'merchantId'
  }
})

export default mongoose.model('tokens', JwtSchemas)
