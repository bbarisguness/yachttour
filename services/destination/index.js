const apiUrl = process.env.NEXT_PUBLIC_API_URL

const qs = require('qs');

async function getDestinations() {
    const response = await fetch(`${apiUrl}/destinations?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


async function getDestinationsJustName() {
    const response = await fetch(`${apiUrl}/destinations?fields[0]=name&fields[1]=slug`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getDestinationsIsNot({ slug }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            slug: {
                $ne: `${slug}`,
            },
        },
    }, {
        encodeValuesOnly: true,
    });
    const response = await fetch(`${apiUrl}/destinations?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getDestinationDetail({ slug }) {
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
    const response = await fetch(`${apiUrl}/destinations?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getSearchDestination({ searchValue }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            name: {
                $startsWithi: `${searchValue}`,
            },
        },
    }, {
        encodeValuesOnly: true,
    });
    const response = await fetch(`${apiUrl}/destinations?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getDestinations, getDestinationDetail, getSearchDestination, getDestinationsIsNot, getDestinationsJustName }