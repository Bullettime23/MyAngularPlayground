import { Routes } from '@angular/router';
import { TreeJsComponent } from './pages/tree-js/tree-js.component';
import { NgrxComponent } from './pages/ngrx/ngrx.component';

export const routes: Routes = [
    {path: 'tree-js', component: TreeJsComponent},
    {path: 'ngrx', component: NgrxComponent},
    {path: '**', redirectTo: ''}
];
