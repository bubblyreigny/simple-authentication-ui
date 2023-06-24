export class UserTransformer {
    
    static transform (payload = {}) {
        let data = {}

        data.id = payload.id
        data.first_name = payload.attributes.first_name 
        data.last_name = payload.attributes.last_name
        data.email = payload.attributes.email 
        data.username = payload.attributes.username
        data.address = payload.attributes.address
        data.postcode = payload.attributes.postcode

        return data;
    }
    
    static transformCustom(payload = {}) {
        let data = {}

        data.id = payload.id
        data.first_name = payload.attributes.first_name 
        data.last_name = payload.attributes.last_name
        data.email = payload.attributes.email 
        data.username = payload.attributes.username
        data.address = payload.attributes.address
        data.postcode = payload.attributes.postcode
        
        return data
    }

    /**
     * @param {object} payload 
     */
    static transformForDataTable (payload = {}) {
        let data = {}

        data.id = payload.id
        data.first_name = payload.attributes.first_name 
        data.last_name = payload.attributes.last_name
        data.email = payload.attributes.email 
        data.username = payload.attributes.username
        data.address = payload.attributes.address
        data.postcode = payload.attributes.postcode
        
        return data;
    }   
}