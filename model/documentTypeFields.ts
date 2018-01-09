/**
 * ParallelStack RSearch API
 * REST API Specification for ParallelStack RSearch API
 *
 * OpenAPI spec version: 1.1.0
 * Contact: team@parallelstack.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface DocumentTypeFields {
    name?: string;
    type?: DocumentTypeFields.TypeEnum;
    suggest?: DocumentTypeFields.SuggestEnum;
}
export namespace DocumentTypeFields {
    export type TypeEnum = 'string' | 'text' | 'float' | 'integer' | 'date' | 'location' | 'fixed';
    export const TypeEnum = {
        String: 'string' as TypeEnum,
        Text: 'text' as TypeEnum,
        Float: 'float' as TypeEnum,
        Integer: 'integer' as TypeEnum,
        Date: 'date' as TypeEnum,
        Location: 'location' as TypeEnum,
        Fixed: 'fixed' as TypeEnum
    }
    export type SuggestEnum = 'true';
    export const SuggestEnum = {
        True: 'true' as SuggestEnum
    }
}
