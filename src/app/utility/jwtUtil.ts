import * as jwt_decode from "jwt-decode";

export class jwtUtil {

    static getRole(token: string): any {
    try{
        return jwt_decode(token).Role;
    }
    catch(Error){
        return null;
    }
    }

    static getUsername(token: string): any {
    try{
        return jwt_decode(token).sub;
    }
    catch(Error){
        return null;
    }
    }

    static getAll(token: string): any {
    try{
        return jwt_decode(token);
    }
    catch(Error){
        return null;
    }
    }

    static isExpired(token: string): boolean {
        var current_time = new Date().getTime() / 1000;
	    if (current_time > jwt_decode(token).exp) 
        {
            console.log("EXPIRED");
            return true; 
        } else {
            console.log("NOT EXPIRED");
            return false;
        }
    }
}