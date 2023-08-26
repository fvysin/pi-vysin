export default function validation (input){
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  
      if (!emailRegex.test(input.email)){
        errors.email= "Debe ingresar un mail valido";
      
      }
      if (!input.email){
        errors.email = "Debe ingresar un mail"
      }
      if (input.email.length > 35){
        errors.email="Debe ingresar un mail válido"
      }
      
      if(!passwordRegex.test(input.password)){
        errors.password="Tiene que tener al menos un número"
      }
      if(input.password.length <6 || input.password.length >10 ){
        errors.password="Debe tener una longitud entre 6 a 10 caracteres"
      }
    return errors;
  
  
  }
  