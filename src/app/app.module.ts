import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/nav-bar.component';
import { IconFacebook } from './icon/facebook.icon';
import { IconMessage } from './icon/message.icon';
import { IconGroup } from './icon/group.icon';
import { IconGame } from './icon/game.icon';
import { IconHome } from './icon/home.icon';
import { IconMarketPlace } from './icon/marketpalce.icon';
import { IconWatch } from './icon/watch.icon';
import { IconMenu } from './icon/menu.icon';
import { IconNotify } from './icon/notify.icon';

import { ProfileFacebookComponent } from './profile-facebook/profile-facebook.component';
import { IconProfileCT } from './icon/profile-ct..icon';
import { IconPhoto } from './icon/photo.icon';
import { IconSearch } from './icon/icon.search';
import { ReactiveFormsModule } from '@angular/forms';
import { IconThreePoint } from './icon/icon.threepoint';
import { IconDrowdown } from './icon/icon.dropdown';
import { IconGameActive } from './icon/icon.game-active';
import { IconGroupActive } from './icon/icon.group-active';
import { IconWatchActive } from './icon/icon.watch-active';
import { IconHomeActive } from './icon/icon.home-active';
import { IconMarketplaceActive } from './icon/icon.marketplace-active';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IconFacebook,
    IconMessage,
    IconGroup,
    IconGame,
    IconHome,
    IconMarketPlace,
    IconSearch,
    IconWatch,
    IconMenu,
    IconDrowdown,
    IconNotify,
    IconProfileCT,
    IconPhoto,
    IconThreePoint,
    IconGameActive,
    IconGroupActive,
    IconWatchActive,
    IconHomeActive,
    IconMarketplaceActive,
    ProfileFacebookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
