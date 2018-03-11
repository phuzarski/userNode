import config from '../config'
import jwt from 'express-jwt'

const authenticate = jwt({
  secret: config.tokens.jwtSecret
})

export default authenticate
