import { Routes } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AuthComponent } from './components/auth/auth.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';
import { authGuard } from './guards/auth.guard';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback';

export const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  { path: 'auth/callback', component: AuthCallbackComponent },
  { path: 'history', component: HistoryComponent, canActivate: [authGuard] },
  { path: '**', redirectTo: '' }
  
];


