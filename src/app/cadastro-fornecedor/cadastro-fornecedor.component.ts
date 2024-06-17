import {Component} from '@angular/core';
import {FornecedorService} from "../core/fornecedor.service";
import {FornecedorModel} from "../models/FornecedorModel";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {AlertService} from "../core/alert.service";

@Component({
  selector: 'app-cadastro-fornecedor',
  templateUrl: './cadastro-fornecedor.component.html',
  styleUrl: './cadastro-fornecedor.component.css'
})
export class CadastroFornecedorComponent {
  fonecedorForm: any;
  id: number;

  constructor(private _fornecedorService: FornecedorService,
              private alertService: AlertService,
              private formBuilder: FormBuilder,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.fonecedorForm = this.formBuilder.group({
      name: ['', Validators.required],
      comment: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      cnpj: ['', [Validators.required, Validators.pattern('([0-9]{2}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[\\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\\.]?[0-9]{3}[\\.]?[0-9]{3}[-]?[0-9]{2})\n')]],
    });
  }

  ngOnInit(): void {
    this.id = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    this.setFormFuncionario(this.id);
  }

  salvar() {
    if (this.fonecedorForm?.valid) {
      const fornecedorNovo: FornecedorModel = new FornecedorModel();
      fornecedorNovo.name = this.fonecedorForm.controls['name'].value;
      fornecedorNovo.cnpj = this.fonecedorForm.controls['cnpj'].value;
      fornecedorNovo.email = this.fonecedorForm.controls['email'].value;
      fornecedorNovo.comment = this.fonecedorForm.controls['comment'].value;

      if (this.id && this.id !== 0) {
        fornecedorNovo.id = this.id;
        this._fornecedorService.alterar(fornecedorNovo).subscribe({
          next: () => {
            this.router.navigate(['']);
            this.alertService.showAlertSuccess("alteração salva");
          }, error: () => {
            this.alertService.showAlertDanger("erro ao salvar");
          }
        })
      } else {
        this._fornecedorService.salvar(fornecedorNovo).subscribe({
          next: () => {
            this.router.navigate(['']);
            this.alertService.showAlertSuccess("cadastro salvo");
          }, error: () => {
            this.alertService.showAlertDanger("erro ao salvar");
          }
        })
      }

    } else {
      this.alertService.showAlertDanger("preencha todos os campos corretamente");
    }

  }

  private setFormFuncionario(id: number) {
    console.log(id)
    if (id && id !== 0) {
      this._fornecedorService.getById(id).subscribe(fornecedor => {
        this.fonecedorForm.controls['name'].setValue(fornecedor.name);
        this.fonecedorForm.controls['cnpj'].setValue(fornecedor.cnpj);
        this.fonecedorForm.controls['email'].setValue(fornecedor.email);
        this.fonecedorForm.controls['comment'].setValue(fornecedor.comment);
      })


    }
  }
}
