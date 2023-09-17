const apiUrl = "http://3.74.191.230:1337/api"

async function getAbout() {
    const response = await fetch(`${apiUrl}/about?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getAbout }