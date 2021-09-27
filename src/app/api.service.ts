import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  cartitmes:any=[]
  shoeProducts:any; //undefined flase 0 '' NAN null
  addtocart(item:any){
this.cartitmes.push(item)
  }
  getShoeProducts(){//cached
    const obs=new Observable(observer=>{
      if(!this.shoeProducts){ //once it called i m saving the data into shoeProducts
        this.http.get("http://localhost:8080/shoes").subscribe(data=>{
          observer.next(data);
          this.shoeProducts=data;
        })
      }//
      else{
        observer.next(this.shoeProducts)
      }
    })
    return obs;
  }//
  getShoeProducts1(){//// not cached
       return this.http.get("http://localhost:8080/shoes");
  }
  postShoeProducts1(){//// not cached
    return this.http.post("http://localhost:8080/shoes",{"name":"test"});
}
postdata(data:any){//// not cached
  return this.http.post("http://localhost:8080/shoes",data);
}
checkadminorNot(){
  return false
}
getcars(){
  return this.http.get("http://klonrr.com/klonrrapp/api/cars");
}
deletecar(id:any){
  return this.http.get("http://klonrr.com/klonrrapp/api/delete_car?id="+id);
}
createcar(body:any){
  return this.http.post("http://klonrr.com/klonrrapp/api/create_car",body);
}

}

