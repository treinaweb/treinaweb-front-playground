import { ApiService } from './ApiService';

import mock from './mockStructure';

export const DataStructureService = {
    async get(url){
        //return ApiService.get(url);
        return Promise.resolve(mock);
    }
};