const apiUrl = process.env.NEXT_PUBLIC_API_URL

// const qs = require('qs');

async function getTestimonials() {
    const response = await fetch(`${apiUrl}/testimonials?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

export { getTestimonials }