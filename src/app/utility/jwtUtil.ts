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
}