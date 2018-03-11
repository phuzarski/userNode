import moment from 'moment'
import db from '../utils/firebase'

async function createAdmin (req, res, next) {
  moment.locale('en-us')
  const dateCreated = Date.now()
  const AdminsRef = db.ref('Admins')
  await AdminsRef
    .push({ ...req.body, dateCreated, type: 'admin' })
    .then((snap) => {
      return snap.key
    })
    .catch((error) => {
      console.log(error)
      res.status(500).json({
        error: 'Server error'
      })
    })
  res.status(200).json({
    message: 'Admin created sucessfully'
  })
}

function respondStatus (req, res, next) {
  if (!req.partnerUrl) {
    res.status(400).json({
      error: 'Invalid input data'
    })
  } else {
    res.status(200).json({
      message: 'Admin created sucessfully'
    })
  }
}

export default { createAdmin, respondStatus }
