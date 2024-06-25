console.log("Welcome to Harish Currency Conversion API Service")

//https://v6.exchangerate-api.com/v6/24592a527f79bd32d7012d2a/pair/USD/INR/1

const myAPI="https://v6.exchangerate-api.com/v6/"
const myAPIkey="24592a527f79bd32d7012d2a"


let myForm= document.getElementById("myform")

myForm.addEventListener("submit",(e)=>{

    e.preventDefault()

    try {
        
        let fromcurrency= document.getElementById("fromcurr").value
        let tocurrency=document.getElementById("tocurr").value
        let value= document.getElementById("valuecurr").value

        console.log(fromcurrency,tocurrency,value)
        currencyConversion(fromcurrency,tocurrency,value)

    } catch (error) {
        console.log(error)
    }

})



async function currencyConversion(from,to,value){

    try {

        //console.log(`${myAPI}${myAPIkey}/pair/${from}/${to}/${value}`)
        let res= await fetch(`${myAPI}${myAPIkey}/pair/${from}/${to}/${value}`)

        let data = await res.json()

        console.log(data["result"])

        let resulttag= document.getElementById("card-text")

        if ( data["result"]==="success")
            {
                resulttag.innerHTML = `Conversion Result : ${data.conversion_result}`
            }
        else{
                resulttag.innerHTML=""
                alert("Status: "+res.result+" Message: "+res.error-type);
                console.log("Status: "+res.status+" Message: "+res.statusText);
            }
        
            
    } catch (error) {
        console.log(error)
    }
}

