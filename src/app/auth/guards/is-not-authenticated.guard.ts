import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

//PublicGuard, PrivateGuard
// private guard
export const isNotAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url = state.url; // url que quiere visitar el usuario
  // localStorage.setItem('pathUrl',url);

  const authService = inject(AuthService);
  const router = inject(Router);
  // si esta autenticado
  if(authService.authStatus() === AuthStatus.authenticated){
    router.navigateByUrl('/dashboard');
    return false;
  }

  return true;

};
