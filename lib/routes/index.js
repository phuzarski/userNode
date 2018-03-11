import express from 'express'
import adminsRoutes from './admins'

const router = express.Router()

/** GET /api-status - Check service status **/
router.get('/api-status', (req, res) =>
  res.json({
    status: 'ok'
  })
)

router.use('/admins', adminsRoutes)

export default router
