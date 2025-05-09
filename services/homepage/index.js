const apiUrl = process.env.NEXT_PUBLIC_API_URL

async function getHomePage() {
    const response = await fetch(`${apiUrl}/homepage?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getHomePage }