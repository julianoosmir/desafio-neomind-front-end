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

@NgModule({
  declarations: [
    AppComponent,
    FornecedorComponent,
    CadastroFornecedorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskDirective,
  ],
  providers: [provideNgxMask({ /* opções de cfg */ })],
  bootstrap: [AppComponent]
})
export class AppModule { }
