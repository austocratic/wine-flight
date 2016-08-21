

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


export function setTest(val) {
    return {
        type: 'RATE_TASTE',
        payload: val
    }
}

//toChange = key to change
//changeValue = what to change value to
export function setRating(elementID, toChange, changedValue) {
    return {
        type: 'SET_RATING',
        payload: {elementID, toChange, changedValue}
    }
}

export function editingRating(elementID, toChange, editing) {
    return {
        type: 'EDITING_RATING',
        payload: {elementID, toChange, editing}
    }
}