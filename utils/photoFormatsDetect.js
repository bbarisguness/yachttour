const photoFormatsDetect = (data, priority = '') => {
    if (data?.attributes?.formats && priority !== '') {
        if (data?.attributes?.formats[priority]) {
            return data?.attributes?.formats[priority]
        } else {
            return data?.attributes
        }
    } else {
        return data?.attributes
    }
}

export { photoFormatsDetect }