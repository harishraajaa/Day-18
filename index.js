//MockAPI URL
const my_url="https://6678ff700bd4525056209675.mockapi.io/api/v1/users"



function constructUserData(mydata){
    try {
        //Get column ID
        let tdheader= document.getElementById("user-data")
        tdheader.innerHTML=""
        mydata.forEach(e => {
            let trtag= document.createElement("tr")

            trtag.innerHTML=`
            <th>${e.id}</th>
            <td>${e.Name}</td>
            <td>${e.Emp_num}</td>
            <td>${e.Email}</td>
            <td>${e.Role}</td>
            <td>
                <button class="btn btn-primary"><a class="linkbutton" href="./edit.html?id=${e.id}">Edit</a></button>
                <button class="btn btn-danger" onclick="deleteUser(${e.id})">Delete</button>
            </td>
            `
            tdheader.appendChild(trtag)

        })

        
        

    } catch (error) {
        console.log(error)
    }
}

async function getData(){

    try {
        let response=await fetch(my_url,{
            method:"GET",
            headers:{
                "content-Type":"application/json"
            }
        })
    
        let mydata= await response.json()
        
        if(mydata.length){
            //console.log(mydata)
            constructUserData(mydata)
        }
        else{
            constructUserData(mydata)
            throw "No Data Found"
        }
    } catch (error) {
        console.log(error)
    }
}

//

async function deleteUser(id){

    try {
        
        let res= await fetch(`${my_url}/${id}`,{
            method:"DELETE",
            headers:{
                "content-Type":"application/json"
            }
        })

        if(res){
            getData()
        }
    } catch (error) {
        console.log(error)
    }
}


function home(){
    window.location.replace("./index.html");
}

getData()
