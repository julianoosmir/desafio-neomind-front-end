import {Component} from '@angular/core';
import {FornecedorService} from "../core/fornecedor.service";
import {IFornecedor} from "../interfaces/IFornecedor";
import {AlertService} from "../core/alert.service";

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrl: './fornecedor.component.css'
})
export class FornecedorComponent {

  fornecedores: IFornecedor[] = [];

  constructor(private _fornecedorService: FornecedorService, private alertService: AlertService) {
  }

  ngOnInit(): void {
    this.getFornecedores();
  }

  getFornecedores() {
    this._fornecedorService.listar().subscribe({
      next: (fornecedors: IFornecedor[]) => {
        this.fornecedores = fornecedors
      }, error: () => {
        this.alertService.showAlertDanger("erro ao listar fornecedores");
      }
    });
  }

  deletar(id: number) {
    this._fornecedorService.deletar(id).subscribe({
      next: () => {
        this.getFornecedores();
      }, error: () => {
        this.alertService.showAlertDanger("erro ao deletar");
      }
    })
  }
}
