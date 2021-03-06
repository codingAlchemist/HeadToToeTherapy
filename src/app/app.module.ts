import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatLabel,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';

import { FabMenu2Component } from './fab-menu2/fab-menu2.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MassagesComponent } from './massages/massages.component';
import { BodyWrapsComponent } from './body-wraps/body-wraps.component';
import { PackagesComponent } from './packages/packages.component';
import { WaxingComponent } from './waxing/waxing.component';
import { GiftCertificateComponent } from './gift-certificate/gift-certificate.component';
import { ServicesComponent } from './services/services.component';
import { FacialsComponent } from './facials/facials.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent, pathMatch: 'full'},
  {path: 'about', component: AboutComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, pathMatch: 'full'},
  {path: 'testimonials', component: TestimonialsComponent, pathMatch: 'full'},
  {path: 'massages', component: MassagesComponent},
  {path: 'waxing', component: WaxingComponent},
  {path: 'body-wraps', component: BodyWrapsComponent},
  {path: 'packages', component: PackagesComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'facials', component: FacialsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
    FabMenu2Component,
    TestimonialsComponent,
    MassagesComponent,
    BodyWrapsComponent,
    PackagesComponent,
    WaxingComponent,
    GiftCertificateComponent,
    ServicesComponent,
    FacialsComponent,
  ],
  imports: [
    MatButtonModule,
    BrowserModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
