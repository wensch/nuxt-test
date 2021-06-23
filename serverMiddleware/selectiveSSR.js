import axios from "axios"
import { mutations, state, getters } from "../store/vuex.js"

export default function(req, res, next) {
  const paths = ['/a']
  // A very simple check
  if (paths.includes(req.originalUrl)) {
    // Will trigger the "traditional SPA mode"
    res.spa = true
  }
  // Don't forget to call next in all cases!
  // Otherwise, your app will be stuck forever :|
  axios.get('https://api.json-generator.com/templates/RJ2IEMY493l2/data?delay=5000', {
    headers: {
      Authorization: 'Bearer xu9qp8s43xiy72hlac4m1i5mtoshkpagkmhfhngx',
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    mutations.adicionar(res)
    // console.log('🎈', state().list)
    // console.log('🎈', getters.myList())
  })
  next()
}
