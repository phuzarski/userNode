import axios from 'axios'
import config from '../config'

const renderEmail = (emailObj) => {
  const content = {
    'subject': emailObj.subject,
    'to': emailObj.email,
    'name': emailObj.name,
    'weblink': `${config.server.host}/${emailObj.accountLink}`,
    'amount': emailObj.money || ''
  }
  axios.post(`${config.email.host}${emailObj.template}`, content)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
}

export default renderEmail
