import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { SoulComponent } from './soul/soul.component';
import { CaseComponent } from './case/case.component';
import { ShareComponent } from './share/share.component';
import { ShareListComponent } from './component/share-list/share-list.component';
import { CaptionListComponent } from './component/caption-list/caption-list.component';

import { ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    IndexComponent,
    AboutmeComponent,
    SoulComponent,
    CaseComponent,
    ShareComponent,
    ShareListComponent,
    CaptionListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(ROUTES,
      { enableTracing: true }
    ),
    NgZorroAntdModule.forRoot({ extraFontName: 'anticon', extraFontUrl: './assets/fonts/iconfont' })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
