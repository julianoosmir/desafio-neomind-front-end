import { Component } from '@angular/core';
import {FornecedorService} from "../core/fornecedor.service";
import {IFornecedor} from "../interfaces/IFornecedor";

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent {

  fornecedores : IFornecedor[] = [];

  constructor(private _fornecedorService: FornecedorService) { }

  ngOnInit(): void {
    this.getFornecedores();
  }
  getFornecedores(){
    this._fornecedorService.listar().subscribe((fornecedors: IFornecedor[]) => {
      this.fornecedores = fornecedors
      console.log(this.fornecedores);
    });
  }

  deletar(id: number) {
    this._fornecedorService.deletar(id).subscribe(()=>{
      this.getFornecedores();
    })
  }
}
