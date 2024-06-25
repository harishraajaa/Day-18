console.log("Welcome to Harish weather API Service")

//http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=62ba508f7699d71a32e80231420bdb42

const myAPI="https://api.openweathermap.org/data/2.5/weather?"
const myAPIkey="62ba508f7699d71a32e80231420bdb42"


let myForm= document.getElementById("myform")

myForm.addEventListener("submit",(e)=>{

    e.preventDefault()

    try {
        
        let city= document.getElementById("city").value
        let country=document.getElementById("country").value

        weatherCheck(city,country)

    } catch (error) {
        console.log(error)
    }

})



async function weatherCheck(city,country){

    try {

        var res = new XMLHttpRequest()
        var url = `${myAPI}q=${city},${country}&APPID=${myAPIkey}`
        res.open('GET',url,true)
        res.send()

        res.onload = function(){
            console.log(res.status)
            let resulttag=document.getElementById("card-text")
            if( res.status == 200){
            var data = JSON.parse(this.response)
            console.log(data)
            var temp = (data["main"]["temp"]-273.15).toFixed(1)
            
            resulttag.innerHTML = data["name"]+" : "+data["sys"]["country"]+" Temperature :"+temp+"&deg, Wind :"+data["wind"]["speed"] +" m/s, Pressure :" +data["main"]["pressure"]+" hpa";
            	
            }
            else{
                resulttag.innerHTML=""
                alert("Status: "+res.status+" Message: "+res.statusText);
                console.log("Status: "+res.status+" Message: "+res.statusText);
            }
        }

    } catch (error) {
        console.log(error)
    }
}
