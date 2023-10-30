const apiUrl = "http://3.74.191.230:1337/api"

const qs = require('qs');

async function postComment({ data }) {
    const response = await fetch(`${apiUrl}/comments`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data
        }),
    })
    const dataa = await response.json()
    return dataa
}
export { postComment }