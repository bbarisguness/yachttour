const apiUrl = "http://3.74.191.230:1337/api"

const qs = require('qs');

async function getYachtServices() {
    const response = await fetch(`${apiUrl}/yacht-services?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getYachtServiceDetail({ slug }) {
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
    const response = await fetch(`${apiUrl}/yacht-services?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getYachtServices, getYachtServiceDetail }