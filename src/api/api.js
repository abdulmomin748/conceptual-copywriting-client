export const setAuthToken = user => {
    const currentUSer = {
        email: user.email
    }

    fetch('https://personal-service-server.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUSer)
    })
    .then(res => res.json())
    .then(data => {
       
        localStorage.setItem('personalService', data.token)
        console.log(data.token);
    })
    .catch(err => console.error(err))
}