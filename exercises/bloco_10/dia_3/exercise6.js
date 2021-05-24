const api = () => {
return fetch('https://dog.ceo/api/breeds/image/random')
    .then(r =>  r.json()
    .then(json => resolve(json)))
    .catch(error => reject(error))
}
module.exports = { api }