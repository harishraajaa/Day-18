
async function catFacts(){

    try {
        
        let ptag= document.getElementById("facts")
        
        let res= await fetch("https://meowfacts.herokuapp.com/")
        let data = await res.json()
        console.log(data["data"][0])
        ptag.innerText=data["data"][0]

    } catch (error) {
        console.log(error)
    }
}


catFacts()