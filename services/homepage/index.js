const apiUrl = "http://3.74.191.230:1337/api"

async function getHomePage() {
    const response = await fetch(`${apiUrl}/homepage?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getHomePage }