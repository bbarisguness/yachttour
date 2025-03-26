const extractNumbers = (str) => {
    const a = str.match(/\d+/)[0];
    if (parseInt(a) > 1) {
        return `${a} hours`
    } else {
        return `${a} hour`
    }
}

export { extractNumbers }