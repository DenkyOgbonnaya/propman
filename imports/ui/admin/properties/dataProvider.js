export const addProperty = (property) => {
    return fetch('/api/properties', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(property)
    })
    .then(res => {
        console.log(res)
         return res.json})
    .catch(err => console.log(err))
}
export const getProperties = () => {
    return fetch(`/api/properties`)
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}