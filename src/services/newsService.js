import axios from 'axios'

//!!!!!!!!!!!!!!!!!!implementirati error handling!!!!!!!!!!!

const baseUrl = 'http://localhost:3001/data'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

/* instead of this:

  export default { 
  getAll: getAll, 
  create: create, 
  update: update 

  we can use this because the keys are equal to values:
} */

export default { getAll, create, update }
