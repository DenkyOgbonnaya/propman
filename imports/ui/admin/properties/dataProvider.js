export const addProperty = (property, userData) => {
    console.log('dp',userData.authToken)
    return fetch('/api/properties', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': `${userData.authToken}`,
            'X-User-Id': `${userData.userId}`
        },
        body: JSON.stringify(property)
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}
export const getProperties = (userId) => {
    return fetch(`/api/users/${userId}/properties`)
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}
export const updateProperty = (id, attributes, userData) => {
    return fetch(`/api/properties/${id}`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': `${userData.authToken}`,
            'X-User-Id': `${userData.userId}`
        },
        body: JSON.stringify(attributes)
    })
    .then(res => { return res.json()})
    .catch(err => console.log(err))
}