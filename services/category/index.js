const apiUrl = "http://3.74.191.230:1337/api"

const qs = require('qs');

async function getCategories() {
    const response = await fetch(`${apiUrl}/categories?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getSearchCategory({ searchValue }) {
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
    const response = await fetch(`${apiUrl}/categories?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}


export { getCategories, getSearchCategory }