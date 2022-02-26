let a=document.getElementById("temp");

function onEv() {
    let s=document.querySelector('#s1' );
    let value1 = s.options[s.selectedIndex].text;
     if (value1==="Celsius" ) {//&& value2==="Fahrenheit"
        document.querySelector('p').innerHTML=`Temperature in Celsius = ${(parseFloat(a.value)-32)*5/9} C`;
        }
    else if (value1==="Fahrenheit" ) {//&& value2==="Celsius"
        document.querySelector('p').innerHTML=`Temperature in Fahrenheit = ${(parseFloat(a.value)*9)/5+32} F`;
    } 
    else if (value1==="Kelvin" ) {//&& value2==="Kelvin"
        document.querySelector('p').innerHTML=`Temperature in Kelvin = ${(parseFloat(a.value)+273.15)} K`;
    } 
    else{
        document.querySelector('p').innerHTML="Please select valid options.... or Enter only numbers";
    }
}