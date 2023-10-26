const apiUrl = "http://3.74.191.230:1337/api"

const qs = require('qs');


async function postReservation({ data }) {
    const response = await fetch(`${apiUrl}/reservations`, {
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

async function postReservationInfo({ data, id }) {
    const response = await fetch(`${apiUrl}/reservation-infos`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            data: {
                "name": data?.n,
                "surname": data.s,
                "email": data.e,
                "phone": data.p,
                "reservation": id
            }
        }),
    })
    const dataa = await response.json()
    return dataa
}

export { postReservation, postReservationInfo }