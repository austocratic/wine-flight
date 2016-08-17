

export function setAcidity(acidity) {
    return {
        type: 'RATE_ACIDITY',
        payload: acidity
    }
}

export function setTaste(taste) {
    return {
        type: 'RATE_TASTE',
        payload: taste
    }
}
