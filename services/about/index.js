const apiUrl = process.env.NEXT_PUBLIC_API_URL

async function getAbout() {
    const response = await fetch(`${apiUrl}/about?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getAbout }