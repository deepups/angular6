import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ClassComponent } from './components/class/class.component';
import { EvtComponent } from './components/evt/evt.component';
import { BindComponent } from './components/bind/bind.component';
import { ModelComponent } from './components/model/model.component';
import { ListviewComponent } from './components/listview/listview.component';
import { ChannelDetailComponent } from './components/channel-detail/channel-detail.component';
import { Listview02Component } from './components/listview02/listview02.component';
import { ForgetComponent } from './components/forget/forget.component';
import { StickieComponent } from './components/stickie/stickie.component';
import { BtnComponent } from './components/btn/btn.component';
import { KfcComponent } from './components/kfc/kfc.component';
import { KfcVegComponent } from './components/kfc-veg/kfc-veg.component';
import { KfcNonvegComponent } from './components/kfc-nonveg/kfc-nonveg.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { HttpClientModule } from '@angular/common/http';
import { RepoUserComponent } from './components/repo-user/repo-user.component';
import { PowerOfPipe } from './pipes/power-of.pipe';
import { MypipeComponent } from './components/mypipe/mypipe.component';
import { NewsComponent } from './components/news/news.component';
import { MarketComponent } from './components/market/market.component';
import { ToolsComponent } from './components/tools/tools.component';
import { ReposOfUserComponent } from './components/repos-of-user/repos-of-user.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsComponent } from './components/products/products.component';
import { FormComponent } from './components/form/form.component';
import { ContainerComponent } from './components/container/container.component';
import { CategorySenderComponent } from './components/category-sender/category-sender.component';
import { ProductReceiverComponent } from './components/product-receiver/product-receiver.component';


@NgModule({
  declarations: [
    AppComponent,ClassComponent, BtnComponent, EvtComponent, BindComponent, ModelComponent, ListviewComponent, ChannelDetailComponent, Listview02Component, ForgetComponent, StickieComponent, KfcComponent, KfcVegComponent, KfcNonvegComponent, UserInfoComponent, RepoUserComponent, PowerOfPipe, MypipeComponent, NewsComponent, MarketComponent, ToolsComponent, ReposOfUserComponent, ProductsComponent, FormComponent, ContainerComponent, CategorySenderComponent, ProductReceiverComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
