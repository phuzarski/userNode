import express from 'express'
import validate from 'express-validation'
import adminController from '../controllers/admins'
import validations from './validation/admins'

const router = express.Router()

router.route('/createAdmin')
  .post(validate(validations.createAdmin),
    adminController.createAdmin,
    adminController.respondStatus
  )

export default router
