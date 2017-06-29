import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from '../components/app.component';
import { AddComponent } from '../components/add.component';
import { AboutComponent } from '../components/about.component';
import { HomeComponent } from '../components/home.component';

export const router: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'addElement', component: AddComponent},
    { path: 'about', component: AboutComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);