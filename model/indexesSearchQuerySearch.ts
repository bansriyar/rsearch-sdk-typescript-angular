/**
 * ParallelStack RSearch API
 * REST API Specification for ParallelStack RSearch API
 *
 * OpenAPI spec version: 1.3.0
 * Contact: team@parallelstack.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SearchQuerySearchAggregations } from './searchQuerySearchAggregations';


export interface IndexesSearchQuerySearch {
    query: string;
    indexes: Array<string>;
    fuzzy?: number;
    resultFields?: Array<string>;
    searchFields?: Array<string>;
    pageNum?: number;
    pageCount?: number;
    filters?: any;
    sortFields?: Array<any>;
    aggregations?: Array<SearchQuerySearchAggregations>;
}
