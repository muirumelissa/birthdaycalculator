
	
function male(){

var male = document.getElementById('male').value;
document.getElementById('result').innerHTML = male;
alert(male)

}


	
function female(){

var female = document.getElementById('female').value;
document.getElementById('result').innerHTML = female;
alert(female)
	
}




var maleNames = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame'];
var femaleNames = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'];
var weekdays = ['Sunday','Monday','Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday'];





	function akhanName(){


var resul = document.getElementById('result').innerHTML;
var dates = document.getElementById('dates').value;



var dayofweek = new Date(dates); 
var my  = dayofweek.getDay();


if (my == 6) {

	var myday = 0 ;

}else
{

	var myday  = my + 1;
}






var dayName = weekdays[myday];





if(dayName == 'Sunday' && resul == 'male'){

document.getElementById('name').innerHTML = (maleNames[0]);

}
else if(dayName == 'Monday' && resul == 'male'){

document.getElementById('name').innerHTML = (maleNames[1]);

}
else if(dayName == 'Tuesday' && resul == 'male'){

document.getElementById('name').innerHTML = (maleNames[2]);

}
else if(dayName == 'Wednesday' && resul == 'male'){

document.getElementById('name').innerHTML = (maleNames[3]);

}
else if(dayName == 'Thursday' && resul == 'male'){

document.getElementById('name').innerHTML = (maleNames[4]);

}
else if(dayName == 'Friday' && resul == 'male'){

document.getElementById('name').innerHTML = (maleNames[5]);

}
else if(dayName == 'Saturday' && resul == 'male'){

document.getElementById('name').innerHTML = (maleNames[6]);

}





if(dayName == 'Sunday' && resul == 'female'){

document.getElementById('name').innerHTML = (femaleNames[0]);

}
else if(dayName == 'Monday' && resul == 'female'){

document.getElementById('name').innerHTML = (femaleNames[1]);

}
else if(dayName == 'Tuesday' && resul == 'female'){

document.getElementById('name').innerHTML = (femaleNames[2]);

}
else if(dayName == 'Wednesday' && resul == 'female'){

document.getElementById('name').innerHTML = (femaleNames[3]);

}
else if(dayName == 'Thursday' && resul == 'female'){

document.getElementById('name').innerHTML = (femaleNames[4]);

}
else if(dayName == 'Friday' && resul == 'female'){

document.getElementById('name').innerHTML = (femaleNames[5]);

}
else if(dayName == 'Saturday' && resul == 'female'){

document.getElementById('name').innerHTML = (femaleNames[6]);

}