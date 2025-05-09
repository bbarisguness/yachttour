const apiUrl = process.env.NEXT_PUBLIC_API_URL

const qs = require('qs');

async function getReservation() {
    const response = await fetch(`${apiUrl}/reservations?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

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
                "name": data?.name,
                "surname": data.surname,
                "email": data.email,
                "phone": data.phone,
                "reservation": id,
                "port": data?.port
            }
        }),
    })
    const dataa = await response.json()
    return dataa
}

export { postReservation, postReservationInfo, getReservation }