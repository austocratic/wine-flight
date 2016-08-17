

export default function reducer(state={
    favorites: [{
        id: 1,
        attributes: {
            bottle_image: 'http://justinwine.com/wordpress/wp-content/uploads/2016/04/Justin_2014_Cab_750ml_52395_smpl_sRGB-300x980.jpg',
            name: 'Justin 2014 Cabernet Sauvignon',
            description: 'Crafted with artisanal techniques typically reserved for the most revered labels, it’s the perfect go-to red.'
        },
        myRatings: {
            acidity: 'not set',
            elegance: 'not set',
            taste: 'not set',
            total: 'not set'
        }
    },
        {
            id: 2,
            rating: 'Default Rating',
            attributes: {
                bottle_image: 'http://justinwine.com/wordpress/wp-content/uploads/2016/01/iso_2013.jpg',
                name: 'Justin ISOSCELES',
                description: 'For more than 25 vintages, ISOSCELES has been our flagship wine and quality benchmark for this style of wine here on the Central Coast of California. A blend based on cabernet sauvignon supported by cabernet franc and merlot, the 2013 ISOSCELES is a perfect example of what makes Paso Robles such a great place to grow these varieties.'
            },
            myRatings: {
                acidity: 'not set',
                elegance: 'not set',
                taste: 'not set',
                total: 'not set'
            }
        }],
    fetching: false,
    fetched: false,
    error: null
}, action) {

    switch (action.type) {
        case 'RATE_ACIDITY':
        {
            return {
                ...state,
                favorites: {...state.myRatings, acidity: action.payload}
            }

        }
        case 'RATE_TASTE':
        {

            var modState = state;

            modState.favorites[0].myRatings.taste = action.payload;

            return modState;
            
        }
    }

    return state;
}
