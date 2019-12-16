import { Injectable } from '@angular/core';
import { jwtUtil } from '../utility/jwtUtil';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService {  
    
  constructor() {
  }
  
  public isAuthenticated(): boolean {    
    if (localStorage.getItem('token') != null) {
      const token = localStorage.getItem('token'); 
      return jwtUtil.isExpired(token);
    } else return false;
  }

  public getUserRole(): string {
    if (localStorage.getItem('token') != null) {
      const token = localStorage.getItem('token'); 
      return jwtUtil.getRole(token);
    } else return '';
  }
}