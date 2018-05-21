import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SoulComponent } from './soul/soul.component';
import { CaseComponent } from './case/case.component';
import { ShareComponent } from './share/share.component';

export const ROUTES: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', redirectTo: 'index', pathMatch: 'full'},
      { path: 'index', component: IndexComponent},
      { path: 'aboutme', component: AboutmeComponent},
      { path: 'soul', component: SoulComponent},
      { path: 'case', component: CaseComponent},
      { path: 'share', component: ShareComponent}
    ]
  }
];
