import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { AngularSvgIconPreloaderModule } from 'angular-svg-icon-preloader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AgentsComponent } from './components/agents/agents.component';
import { AgentInfoComponent } from './components/agents/agent-info/agent-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AgentsComponent,
    AgentInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    AngularSvgIconPreloaderModule.forRoot({
      configUrl: './assets/json/icons.json'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
