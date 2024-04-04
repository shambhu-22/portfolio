import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { HeaderComponent } from './Components/header/header.component';
import { MenuComponent } from './Components/menu/menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ContentComponent } from './Components/content/content.component';
import {MatCardModule} from '@angular/material/card';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatFormFieldModule } from '@angular/material/form-field';  
import {MatExpansionModule} from '@angular/material/expansion';
import { ProfileComponent } from './Components/profile/profile.component';
import { WorkComponent } from './Components/work/work.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    ProfileComponent,
    WorkComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    HttpClientModule,
    MatTooltipModule,
    MatCardModule,
    MatBottomSheetModule,
    MatFormFieldModule,
    MatExpansionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
