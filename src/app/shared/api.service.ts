import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{ map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getProducts() { 
    
  }

  constructor(private http : HttpClient) { }

  postEmployee(data : any){
    return this.http.post<any>("https://647fed01f061e6ec4d486b14.mockapi.io/todo-",data)
    .pipe(map((res:any)=>{
      return res;

    }))

  }
  getEmployee(){
    return this.http.get<any>("https://647fed01f061e6ec4d486b14.mockapi.io/todo-/")
    .pipe(map((res:any)=>{
      return res;
        
    }))
  }
  updateEmployee(data :any,id: number){
    return this.http.put<any>("https://647fed01f061e6ec4d486b14.mockapi.io/todo-/"+id,data)
    .pipe(map((res:any)=>{
      return res;
        
    }))
}
deleteEmployee(id: number){
  return this.http.delete<any>("https://647fed01f061e6ec4d486b14.mockapi.io/todo-/" +id)
  .pipe(map((res:any)=>{
    return res;
      
  }))
}

}