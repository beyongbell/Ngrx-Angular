import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { appReducers } from '@reducers/app.reducers';
import { environment } from '@environments/environment';

import { ConfigEffects } from '@effects/config.effects';
import { UserEffects } from '@effects/user.effects';

import { UserService } from '@services/user.service';

import { UserComponent } from '@containers/user/user.component';
import { UsersComponent as UsersContainerComponent } from '@containers/users/users.component';

import { UsersComponent } from '@pages/users/users.component';
import { DetailComponent } from '@pages/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UserComponent,
    UsersComponent,
    DetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
