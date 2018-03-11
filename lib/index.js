import 'babel-core/register'
import 'babel-polyfill'
import app from './config/express'

app.listen(process.env.PORT || 3001, () => {
  console.log(`API Server started and listening on port ${process.env.PORT || 3001} (${process.env.NODE_ENV || 'development'})`)
})

// cronjob()

export default app
