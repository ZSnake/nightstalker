//@flow
'use strict';

export default class TestMetric{
    constructor() : any{

    }

    run(substractValue: boolean){
        if(substractValue){
            return -10;
        }else{
            return 0
        }
    }
}