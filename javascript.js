function validationform(){
    var fname=document.validate.fname.value;
    var lname=document.validate.lname.value;
    var city=document.validate.city.value;
    var address=document.validate.address.value;
    var number=document.validate.number.value;
    if(fname===null || fname===""){
      alert("Please enter your first name");
      return false;
    }
    else if(lname===null || lname===""){
      alert("Please enter your last name");
      return false;
    }
    else if(city===null || city===""){
      alert("Please enter your city");
      return false;
    }
    else if(number===null || number===""){
      alert("Please enter your Mobile number");
      return false;
    }
    else if(address===null || address===""){
      alert("Please enter your address");
      return false;
    }
    else if(number.length!==10){
      alert("Please enter valid Mobile number");
      return false;
    }
    else{
      alert("Thank you for your registration");
      return true;
    }
    }
