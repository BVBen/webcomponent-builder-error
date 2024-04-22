import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    redirectTo: 'wrapper',
    pathMatch: 'full'
},
{
    path: "wrapper",
    data: {
        preload: true
    },
    loadComponent: () => import('./wrapper/wrapper.component').then(m=> m.WrapperComponent)
},];
