const apiUrl = "http://3.74.191.230:1337/api"

const qs = require('qs');

async function getTours() {
    const response = await fetch(`${apiUrl}/tours?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getTourDetail({ tourSlug }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            slug: {
                $eq: `${tourSlug}`,
            },
        },
    }, {
        encodeValuesOnly: true,
    });
    const response = await fetch(`${apiUrl}/tours?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getTourDestination({ rSlug, category }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            destinations: {
                name: {
                    $eqi: `${rSlug}`,
                }
            },
            categories: {
                name: {
                    $eqi: `${category}`,
                }
            }
        },
    }, {
        encodeValuesOnly: true,
    });
    const response = await fetch(`${apiUrl}/tours?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


async function getTourCategory({ category }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            categories: {
                name: {
                    $eq: `${category}`,
                },
            },
        },
    }, {
        encodeValuesOnly: true,
    });
    const response = await fetch(`${apiUrl}/tours?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getTours, getTourDetail, getTourCategory, getTourDestination }