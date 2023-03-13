// allow domain 
import {whiteList} from '../config/DomainConfig.js';

const crosOptions = {
    origin:(origin, callback) => {
        if(whiteList.indexOf(origin) !== -1 || !origin){
            callback(null,true)
        }
        else{
            callback(new Error('Not allowed to access'))
        }
    },
    optionsSuccessStatus:200
}

export default crosOptions