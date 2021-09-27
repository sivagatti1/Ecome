import { Component, OnInit } from '@angular/core';
import{ ApiService} from "./api.service";
import { FormGroup, FormControl,FormBuilder,Validators } from '@angular/forms';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private api:ApiService,private formBuilder:FormBuilder){
    console.log("constuctor");
    
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit");
    
  }
  openflyout=false;
  registerForm=this.formBuilder.group({
    username:[],
    password:[]
  })
  userdata:any=[]


  delete(user:any){
    
  }
  edit(user:any){
this.registerForm.setValue(user)
  }
  formSubmitted1(){
    this.userdata.push(this.registerForm.value)
  }
  openflyout1(){
    this.openflyout=true
  }
  public SPACEBAR_KEY_CODE = [0, 32];
  public ENTER_KEY_CODE = 13;
  public DOWN_ARROW_KEY_CODE = 40;
  public UP_ARROW_KEY_CODE = 38;
  public ESCAPE_KEY_CODE = 27;
  
  public list:any;
  public listContainer:any;
  public dropdownArrow:any;
  public listItems:any;
  X:any;
  dropdownSelectedNode:any;
  public listItemIds:any = [];
  cars:any=[];
  carsForm=this.formBuilder.group({
    id:"",
    name:"",
    price:"",
    colour:"",
    picture:""
  })
  ngOnChanges(){
    console.log("ngOnChanges");
  }
  ngDoCheck(){
    console.log("ngDoCheck");
  }
  getcars(){
    this.api.getcars().subscribe(data=>{
      this.cars=data;
      console.log(data);
      
    })
  }
  deletecars(id:any){
this.api.deletecar(id).subscribe(data=>{
  this.getcars();
})
  }
  Submit(){
    this.api.createcar(this.carsForm.value).subscribe(data=>{
console.log(data);
this.getcars()
    })
  }
  editcars(id:any){
this.carsForm.setValue(id);
  }
  ngOnInit(){
    this.getcars();
    console.log("ngOnIniit");
    this.list=document.querySelector(".dropdown__list")
    this.dropdownArrow=document.querySelector(".dropdown__arrow");
    this.listContainer=document.querySelector(".dropdown__list-container");
    this.listItems=document.querySelectorAll(".dropdown__list-item");
    this.dropdownSelectedNode = (<HTMLInputElement>document.getElementById("dropdown_selected"))
    this.dropdownSelectedNode.addEventListener("keydown", (e:any) =>{
    this.toggleListVisibility(e)
    });

this.listItems.forEach((item:any) => this.listItemIds.push(item.id));
console.log(this.listItems);

this.listItems.forEach((item:any) => {
  item.addEventListener("click", (e:any)=> {
    this.setSelectedListItem(e);
    this.closeList();
  });

  item.addEventListener("keydown", (e:any) => {
    console.log(e.keyCode);
    
    switch (e.keyCode) {
      case this.ENTER_KEY_CODE:
        this.setSelectedListItem(e);
        this.closeList();
        return;

      case this.DOWN_ARROW_KEY_CODE:
        this.focusNextListItem(this.DOWN_ARROW_KEY_CODE);
        return;

      case this.UP_ARROW_KEY_CODE:
        this.focusNextListItem(this.UP_ARROW_KEY_CODE);
        return;

      case this.ESCAPE_KEY_CODE:
        this.closeList();
        return;

      default:
        return;
    }
  });
});
    let data={
      "userName":"Siva"
    }
    //this.loginForm.patchValue(data)
  }
  // loginForm=new FormGroup({
  //   userName:new FormControl(),
  //   Password:new FormControl

  // })
  loginForm=this.formBuilder.group({
    userName:['',[Validators.required,Validators.min(18)]],
    Password:[],
    gender:[],
    cars:[]
  })
   setSelectedListItem(e:any) {
    let selectedTextToAppend = document.createTextNode(e.target.innerText);
    this.dropdownSelectedNode.innerHTML = null;
    this.dropdownSelectedNode.appendChild(selectedTextToAppend);
  }
  
   closeList() {
    this.list.classList.remove("open");
    this.dropdownArrow.classList.remove("expanded");
    this.listContainer.setAttribute("aria-expanded", false);
  }
  
   toggleListVisibility(e:any) {
    let openDropDown =
        this.SPACEBAR_KEY_CODE.includes(e.keyCode) || e.keyCode === this.ENTER_KEY_CODE;
  
    if (e.keyCode === this.ESCAPE_KEY_CODE) {
      this.closeList();
    }
  
    if (e.type === "click" || openDropDown) {
      this.list.classList.toggle("open");
      this.dropdownArrow.classList.toggle("expanded");
      this.listContainer.setAttribute(
        "aria-expanded",
        this.list.classList.contains("open")
      );
    }
  
    if (e.keyCode === this.DOWN_ARROW_KEY_CODE) {
      this.focusNextListItem(this.DOWN_ARROW_KEY_CODE);
    }
  
    if (e.keyCode === this.UP_ARROW_KEY_CODE) {
      this.focusNextListItem(this.UP_ARROW_KEY_CODE);
    }
  }
  
   focusNextListItem(direction:any) {
    setTimeout(() => {
      this.X = document.activeElement;
    });
    const activeElementId = this.X.id;
    if (activeElementId === "dropdown__selected") {
      (<HTMLInputElement>document.querySelector(`#${this.listItemIds[0]}`)).focus();
    } else {
      const currentActiveElementIndex = this.listItemIds.indexOf(
        activeElementId
      );
      if (direction === this.DOWN_ARROW_KEY_CODE) {
        const currentActiveElementIsNotLastItem =
              currentActiveElementIndex < this.listItemIds.length - 1;
        if (currentActiveElementIsNotLastItem) {
          const nextListItemId = this.listItemIds[currentActiveElementIndex + 1];
          (<HTMLInputElement>document.querySelector(`#${nextListItemId}`)).focus();
        }
      } else if (direction === this.UP_ARROW_KEY_CODE) {
        const currentActiveElementIsNotFirstItem =
              currentActiveElementIndex > 0;
        if (currentActiveElementIsNotFirstItem) {
          const nextListItemId = this.listItemIds[currentActiveElementIndex - 1];
          (<HTMLInputElement>document.querySelector(`#${nextListItemId}`)).focus();
        }
      }
    }
  }
  formSubmitted(){
    if(this.loginForm.valid){
      this.api.postdata(this.loginForm.value).subscribe(data=>{
        console.log(data);
        
      })
    }
    else{
      console.log("form is Invalid");
      
          }
    
  }
  cartitems:any=[]
  productsp=[]
  menuItmes=[
  {"menuname":"Shoes","menulink":"/shoes",},
  {"menuname":"Tvs","menulink":"/tvs"},
  {"menuname":"Furniture","menulink":"/tvs"}]
  addtocartP(item:any){
    this.cartitems.push(item)
  }
}
