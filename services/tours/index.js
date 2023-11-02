const apiUrl = "http://3.74.191.230:1337/api"

const qs = require('qs');

async function getTours() {
    const response = await fetch(`${apiUrl}/tours?populate=*`, {
        cache: 'no-store'
    })
    const data = await response.json()
    return data
}

async function getToursPagination({ page }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        pagination: {
            pageSize: 9,
            page: page,
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

async function getTourFilter({ page, cat, dest, price, person, width, hp, year, sort }) {
    const splitCat = cat?.split(",");
    const splitDest = dest?.split(",");
    const splitPrice = price?.split(',') || '';
    const splitPerson = person?.split('-') || '';
    const splitWidth = width?.split('-') || '';
    const splitHp = hp?.split('-') || '';
    const splitYear = year?.split(',') || '';
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        sort: {
            price: sort
        },
        filters: {
            category: {
                slug: {
                    $in: splitCat,
                },
            },
            destinations: {
                slug: {
                    $in: splitDest,
                },
            },
            price: {
                $between: [parseInt(splitPrice[0]?.slice(4, splitPrice[0].length)) || 0, parseInt(splitPrice[1]?.slice(4, splitPrice[1].length)) || 20000],
            },
            person: {
                $between: [parseInt(splitPerson[0]) == 20 ? 0 : parseInt(splitPerson[0]) || 0, parseInt(splitPerson[1]) || 100000],
            },
            width: {
                $between: [parseInt(splitWidth[0]) == 40 ? 0 : parseInt(splitWidth[0]) || 0, parseInt(splitWidth[1]) || 100000],
            },
            enginehp: {
                $between: [parseInt(splitHp[0]) == 1000 ? 0 : parseInt(splitHp[0]) || 0, parseInt(splitHp[1]) || 100000],
            },
            year: {
                $between: [parseInt(splitYear[0]?.slice(4, splitYear[0].length)) || 1956, parseInt(splitYear[1]?.slice(4, splitYear[1].length)) || 2024],
            },
        },
        pagination: {
            pageSize: 9,
            page: page,
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

async function getTourFilterSlug({ rSlug, category, page, price, person, width, hp, year, sort }) {
    const splitPrice = price?.split(',') || '';
    const splitPerson = person?.split('-') || '';
    const splitWidth = width?.split('-') || '';
    const splitHp = hp?.split('-') || '';
    const splitYear = year?.split(',') || '';
    const sorting = sort?.toUpperCase()
    const filterSort = sorting == 'ASC' || sorting == 'DESC' ? sorting : 'ASC'
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        sort: {
            price: filterSort
        },
        filters: {
            destinations: {
                slug: {
                    $eqi: `${rSlug}`,
                }
            },
            category: {
                slug: {
                    $eqi: `${category}`,
                }
            },
            price: {
                $between: [parseInt(splitPrice[0]?.slice(4, splitPrice[0].length)) || 0, parseInt(splitPrice[1]?.slice(4, splitPrice[1].length)) || 20000],
            },
            person: {
                $between: [parseInt(splitPerson[0]) == 20 ? 0 : parseInt(splitPerson[0]) || 0, parseInt(splitPerson[1]) || 100000],
            },
            width: {
                $between: [parseInt(splitWidth[0]) == 40 ? 0 : parseInt(splitWidth[0]) || 0, parseInt(splitWidth[1]) || 100000],
            },
            enginehp: {
                $between: [parseInt(splitHp[0]) == 1000 ? 0 : parseInt(splitHp[0]) || 0, parseInt(splitHp[1]) || 100000],
            },
            year: {
                $between: [parseInt(splitYear[0]?.slice(4, splitYear[0].length)) || 1956, parseInt(splitYear[1]?.slice(4, splitYear[1].length)) || 2024],
            },
        },
        pagination: {
            pageSize: 9,
            page: page,
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

async function getTourDetail({ tourSlug }) {
    const query = qs.stringify({
        fields: '*',
        populate: [
            "itineraries",
            "itineraries.image",
            "images",
            "feature",
            "metaFields",
            "destinations",
            "tag",
            "category",
            "reservations",
            "comments"
        ],
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
                slug: {
                    $eqi: `${rSlug}`,
                }
            },
            category: {
                slug: {
                    $eqi: `${category}`,
                }
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

async function getOtherTour({ rSlug, category, slug }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            destinations: {
                slug: {
                    $eqi: `${rSlug}`,
                }
            },
            category: {
                slug: {
                    $eqi: `${category}`,
                }
            },
            slug: {
                $nei: `${slug}`,
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

async function getTourCategory({ category }) {
    const query = qs.stringify({
        fields: '*',
        populate: '*',
        filters: {
            categories: {
                slug: {
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


export { getTours, getTourDetail, getTourCategory, getTourDestination, getToursPagination, getTourFilter, getTourFilterSlug, getOtherTour }