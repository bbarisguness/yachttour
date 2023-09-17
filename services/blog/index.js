const apiUrl = "http://3.74.191.230:1337/api"

const qs = require('qs');

async function getBlogs() {
    const response = await fetch(`${apiUrl}/blogs?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getBlogDetails({ slug }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            slug: {
                $eq: `${slug}`,
            },
        },
    }, {
        encodeValuesOnly: true,
    });
    const response = await fetch(`${apiUrl}/blogs?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getBlogs, getBlogDetails }