import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FornecedorComponent} from "./fornecedor/fornecedor.component";
import {CadastroFornecedorComponent} from "./cadastro-fornecedor/cadastro-fornecedor.component";

const routes: Routes = [
  {path: '', component: FornecedorComponent},
  {path: 'cadastro-fornecedor', component: CadastroFornecedorComponent},
  {path: 'cadastro-fornecedor/:id', component: CadastroFornecedorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
