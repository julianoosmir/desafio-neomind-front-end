import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IFornecedor} from "../interfaces/IFornecedor";
import {URL_API_FORNECEDOR} from "../contants/api";
import {FornecedorModel} from "../models/FornecedorModel";

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(private http: HttpClient) { }

  listar(): Observable<IFornecedor[]>{
    return this.http.get<IFornecedor[]>(URL_API_FORNECEDOR);
  }
  getById(id: number): Observable<IFornecedor> {
    return this.http.get<IFornecedor>(URL_API_FORNECEDOR + '/' + id);
  }
  deletar(id: number): Observable<void> {
    return this.http.delete<void>(URL_API_FORNECEDOR + '/' + id);
  }
  salvar(fonecedor: FornecedorModel){
    return this.http.post(URL_API_FORNECEDOR,fonecedor)
  }
  alterar(fonecedor: FornecedorModel){
    return this.http.put(URL_API_FORNECEDOR,fonecedor)
  }
}
