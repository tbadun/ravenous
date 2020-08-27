const apiKey = 'rCLR91_b_FcEX3AM28824cld4vosY44jpTdiC4JcpDzBqsl6JHawxcwJyidVqMCUE9c-mzbFGBCAwXOBohFTLLY21sFOzYoyMNXF2CEH3Ep9IbGyQ9iAoWrkJ-5HX3Yx';

const parseBusiness = (business) => {
    return {
        id: business.id,
        imageSrc: business.image_url,
        name: business.name,
        address: [business.location.address1, business.location.address2, business.location.address3].join(', '),
        city: business.location.city,
        state: business.location.state,
        zipCode: business.location.zip_code,
        category: business.categories[0].title,
        rating: business.rating,
        reviewCount: business.review_count
    }
}

let Yelp = {

    search: (term, location, sortBy) => {
        const corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
        const url = `${corsAnywhere}https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`;
        return fetch(url, { headers: { Authorization: `Bearer ${apiKey}` } })
            .then(response => {
                return response.json();
            })
            .then(jsonResponse => {
                if (jsonResponse.businesses) {
                    return jsonResponse.businesses.map(business => { return parseBusiness(business); });
                }
            });
    }
};

export default Yelp;