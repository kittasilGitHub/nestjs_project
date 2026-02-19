import { Injectable } from '@nestjs/common';

@Injectable()
export class MyinfoService {

    getjson(){
        return{
            name : "kittasil",
            age : 40,
            hobby: "learn nestjs"
        };
    }
}
