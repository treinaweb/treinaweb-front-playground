import { ApiService } from './ApiService';

import mock from './mockStructure';

export const DataStructureService = {
    async get(){
        const {playgroundData} = getQueryParams();
        if(playgroundData){
          if(playgroundData.endsWith('.json')){
            return ApiService.get(playgroundData);
          }else if(playgroundData.endsWith('.js')){
            return getObjectFromJSText(playgroundData);
          }
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

function getObjectFromJSText(url){
  return fetch(url)
    .then(response => response.text())
    .then(content => {
      const toAvoid = ['var ', 'eval', 'function','if ', 'if(', 'class ', '=>', 'debugger', 'new ', 'import'],
        toHave = ['const data = {', 'export default data;'];
      if(toAvoid.some(item => content.includes(item)) || !toHave.every(item => content.includes(item))){
          return '';
      }
      return content;
    })
    .then(text => text.replace('export default data;', ''))
    .then(text => {
      let evaluatedData = '';
      eval(text + 'evaluatedData = data');
      return evaluatedData;
    });
}