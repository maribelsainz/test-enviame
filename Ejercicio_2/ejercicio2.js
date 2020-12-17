// JSON
let values = {
    1: {
        carrier: "CCH",
        service: "DEX",
    },
    17: {
        carrier: "CHP",
        service: "express",
    }
}

// JSON
let json = {
    data: {
        BUIN: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
        },
        LAJA: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
        },
        LEBU: {
            limit: 1,
            over_carrier_service_id: 1,
            under_carrier_service_id: 1
        },
        LOTA: {
            limit: 1,
            over_carrier_service_id: 17,
            under_carrier_service_id: 17
        }
    }
}

//solution
let result = {}
Object.keys(json.data).forEach(city => {
    const limit = json.data[city].limit
    const over =  json.data[city].over_carrier_service_id
    const under = json.data[city].under_carrier_service_id
    result[city] = {
        limit: limit,
        over: {
            carrier: values[over].carrier,
            service: values[over].service
        },
        under: {
            carrier: values[under].carrier,
            service: values[under].service
        }
    }
})
console.log(result);