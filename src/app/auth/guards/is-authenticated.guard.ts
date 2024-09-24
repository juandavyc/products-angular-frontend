import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { AuthStatus } from '../interfaces';

export const isAuthenticatedGuard: CanActivateFn = (route, state) => {

  // const url = state.url; // url que quiere visitar el usuario
  // localStorage.setItem('pathUrl',url);

  const authService = inject(AuthService);
  const router = inject(Router);
  // si esta autenticado
  if(authService.authStatus() === AuthStatus.authenticated){
    return true;
  }
  // no tiene el conocimiento para cambiar el url
  if(authService.authStatus() === AuthStatus.checking){
    return false;
  }
  // solo cambia cuando no esta autenticado
  router.navigateByUrl('/auth/login');
  return false;

};
