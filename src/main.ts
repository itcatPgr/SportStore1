import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

if (environment.production) {
  enableProdMode();
  }

platformBrowserDynamic().bootstrapModule(AppModule); 

//bootstrapApplication(AppComponent, appConfig)
//  .catch((err) => console.error(err));
