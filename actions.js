export class Actions{
  constructor(){
    this.name = "Ulises",
    this.age = 18,
    this.school = "UAM-A"  
  }
  actionOne = (name, firstName) =>{
    this.name = name;
    alert("Datos guardados");
  }
  getDates = () =>{
    const dates = "He is "+this.name + " with " + this.age + " years old and he studing in the " +this.school;
    return dates;
  }
  clearStorage = () => {
    localStorage.clear();
  }
}   