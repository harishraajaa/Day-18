const myURL="https://6678ff700bd4525056209675.mockapi.io/api/v1/users"

let myForm= document.getElementById("myform")

myForm.addEventListener("submit",(e)=>{

    e.preventDefault()

    try {
        
        let newdata={
            Name:document.getElementById("uname").value,
            Age:document.getElementById("uage").value,
            Email:document.getElementById("uemail").value,
            City:document.getElementById("ucity").value,
            EmpNum:document.getElementById("uemp").value,
            Role:document.getElementById("urole").value,
        }

        //console.log(newdata)

        addUser(newdata)

    } catch (error) {
        console.log(error)
    }

})



async function addUser(data){

    try {

        let res = await fetch(myURL,{
            method:"POST",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })

        if (res.status===201){
            window.location.replace("./dash.html")
        }
        else{
            alert(`Status Code: ${res.status}`)
        }
    } catch (error) {
        console.log(error)
    }
}

function home(){
    window.location.replace("./index.html");
}
