const apiUrl = "http://3.74.191.230:1337/api"

// const qs = require('qs');

async function getTestimonials() {
    const response = await fetch(`${apiUrl}/testimonials?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

export { getTestimonials }