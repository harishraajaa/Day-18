
const myURL="https://6678ff700bd4525056209675.mockapi.io/api/v1/users"

const urlParams = new URLSearchParams(window.location.search)
const id = urlParams.get('id')
console.log(id)
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

        console.log(newdata)

        editUser(newdata,id)

    } catch (error) {
        console.log(error)
    }

})



async function editUser(data,id){

    try {

        let res = await fetch(`${myURL}/${id}`,{
            method:"PUT",
            headers:{
                "content-Type":"application/json"
            },
            body:JSON.stringify(data)
        })

        if (res.status===200){
            window.location.replace("./dash.html")
        }
        else{
            alert(`Status Code: ${res.status}`)
        }
    } catch (error) {
        console.log(error)
    }
}


async function getData(){
    try {
        let res = await fetch(`${myURL}/${id}`,{
            method:"GET"
        })

        if(res.status===200)
        {   
            let data = await  res.json()
            document.getElementById("uname").value = data.Name
            document.getElementById("uemail").value = data.Email
            document.getElementById("uage").value = data.Age
            document.getElementById("uemp").value = data.Emp_num
            document.getElementById("urole").value = data.Role
            document.getElementById("ucity").value = data.City
        
        }
    } catch (error) {
        console.log(error)
    }
}

getData()
