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
    const token = localStorage.getItem('token'); 
    return jwtUtil.isExpired(token);
  }

  public getUserRole(): string {
      const token = localStorage.getItem('token'); 
      return jwtUtil.getRole(token);
  }
}