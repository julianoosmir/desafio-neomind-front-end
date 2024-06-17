import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import { CadastroFornecedorComponent } from './cadastro-fornecedor/cadastro-fornecedor.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgxMaskDirective, provideNgxMask} from "ngx-mask";
import { AlertComponent } from './alert/alert.component';
import {ModalModule} from "ngx-bootstrap/modal";

@NgModule({
  declarations: [
    AppComponent,
    FornecedorComponent,
    CadastroFornecedorComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    ModalModule.forRoot(),
  ],
  providers: [provideNgxMask({ /* opções de cfg */ })],
  bootstrap: [AppComponent]
})
export class AppModule { }
