import { ApiService } from './ApiService';

import mock from './mockStructure';

export const DataStructureService = {
    async get(url){
        const {playgroundData} = getQueryParams();
        if(playgroundData){
            return ApiService.get(playgroundData);
        }
        return Promise.resolve(mock);
    }
};


function getQueryParams() {
    var pairs = window.location.search.substring(1).split("&"),
      obj = {},
      pair,
      i;
  
    for ( i in pairs ) {
      if ( pairs[i] === "" ) continue;
  
      pair = pairs[i].split("=");
      obj[ decodeURIComponent( pair[0] ) ] = decodeURIComponent( pair[1] );
    }
  
    return obj;
  }