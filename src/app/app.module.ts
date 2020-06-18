import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { ItemsComponent } from './items/items.component';
import { HomeComponent } from './menu/home/home.component';
import { GirlComponent } from './menu/girl/girl.component';
import { BoyComponent } from './menu/boy/boy.component';
import { ChildComponent } from './menu/child/child.component';
import { AboutComponent } from './menu/about/about.component';
import { SigninComponent } from './menu/signin/signin.component';
import { CartComponent } from './menu/cart/cart.component';
import { AllComponent } from './shoes/all/all.component';
import { NikeComponent } from './shoes/nike/nike.component';
import { AdidasComponent } from './shoes/adidas/adidas.component';
import { RebookComponent } from './shoes/rebook/rebook.component';
import { PumaComponent } from './shoes/puma/puma.component';
import { NewbalanceComponent } from './shoes/newbalance/newbalance.component';
import { SignupuserComponent } from './register/signupuser/signupuser.component';
import { SigninuserComponent } from './register/signinuser/signinuser.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    ItemsComponent,
    HomeComponent,
    GirlComponent,
    BoyComponent,
    ChildComponent,
    AboutComponent,
    SigninComponent,
    CartComponent,
    AllComponent,
    NikeComponent,
    AdidasComponent,
    RebookComponent,
    PumaComponent,
    NewbalanceComponent,
    SignupuserComponent,
    SigninuserComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
