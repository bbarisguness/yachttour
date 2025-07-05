const apiUrl = process.env.NEXT_PUBLIC_API_URL

const qs = require('qs');

async function getTourTypes() {
    const query = qs.stringify({
        fields: '*',
    }, {
        encodeValuesOnly: true,
    });
    const response = await fetch(`${apiUrl}/tour-types?${query}`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

export { getTourTypes }