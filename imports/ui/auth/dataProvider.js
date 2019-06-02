export const signup = (credentials) => {
    return fetch('api/users', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}
export const login = (credentials) => {
    return fetch('api/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}
export const logout = (userData) => {
    return fetch('api/logout', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'X-Auth-Token': `${userData.authToken}`,
            'X-User-Id': `${userData.userId}`
        }
    })
    .then(res => {return res.json()})
    .catch(err => console.log(err))
}