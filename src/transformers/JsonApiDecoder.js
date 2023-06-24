import { UserTransformer } from "./UserTransformer.js"

export class JsonApiDecoder {


    constructor (customTransformerMethod, dataTable = false) {
        this.customTransformerMethod = customTransformerMethod
        this.dataTable = dataTable
    }

    /**
     * Convert JSON API formatted 
     * response to a normal json.
     * 
     * @param {array} jsonResponse 
     * @returns {array}
     */
    static normalize(jsonResponse, dataTable = false) {
        jsonResponse = jsonResponse.data

        const collection = [];
        const data = jsonResponse.data
        const included = jsonResponse.included
        const results = Array.isArray(data) ? data : [data]

        const transformers = {

            'users': UserTransformer,
        }

        const transformData = function (obj, type) {
            const transformer = type && Object.prototype.hasOwnProperty.call(transformers, type) ? transformers[type] : false
            
            if (dataTable === true) {
                return transformer ? transformer.transformForDataTable(obj) : obj
            }

            return transformer ? transformer.transform(obj) : obj
        }

        results.forEach( result => {
            const type = result.type
            const relationships = result.relationships || {}

            let entity = transformData(result, type)
            let associations = {}            

            Object.entries(relationships).forEach( ([idx, relation]) => {
                const relationData = relation.data
                let includes = []
                let summaries = Array.isArray(relationData) ? relationData : [relationData] 

                summaries.forEach(summary => {
                    let matches = included.filter(element => element.type == summary.type && element.id == summary.id)
                    if (matches.length) {
                        matches.forEach(match => {
                            if (match.attributes.relationships && match.attributes.relationships.length > 0) {
                                console.log()
                            } else {
                                includes.push(transformData(match, summary.type))
                            }
                        })
                    }
                })

                associations[idx] = Array.isArray(relationData) ? includes : includes.shift()
            })

            Object.entries(associations).forEach( ([ associationName, association]) => {
                entity[associationName] = association
            })

            collection.push(entity);
        })

        return Array.isArray(data) ? collection : collection.shift()
    }
}