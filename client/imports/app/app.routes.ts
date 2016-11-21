import { Route } from '@angular/router';
import {DemoComponent} from "./demo/demo.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
export const routes: Route[] = [
    {
        path: 'demo',
        component: DemoComponent
    },
    {
        path: '',
        outlet: 'sidemenu',
        component: SidenavComponent
    },
    {
        path: '',
        redirectTo: '/demo',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/demo',
        pathMatch: 'full'
    }
]
