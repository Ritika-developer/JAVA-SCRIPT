//sucess ka code 200
// let fetchData=()=>{

// let url='http://localhost:3000/whatsapp'

// let res =fetch(url)

// console.log(res);

// }

// fetchData()



// let fetchData= async()=>{

//     let url='http://localhost:3000/whatsapp'
    
//     let res =await fetch(url)
    
//     console.log(res);
    
//     }
    
//     fetchData()



let fetchData= async()=>{

    let url='http://localhost:3000/whatsapp'
    
    // let res =await fetch(url)
    let res =await fetch(url ,{method:"GET"})


    let data = await res.json()
    
    console.log(data);
    
    let show = document.getElementById('datashow')
    data.map((e)=>{
        show.innerHTML+=`
        
            <tr>
            <td>${e.name} </td>
           <td>${e.age} </td>
            <td>${e.aadharno} </td>
            <td>${e.checkin} </td>
            <td>${e.checkout} </td>
            <td>${e.mobileno} </td>
            <td>${e.country}</td>
            <td>${e.person} </td>
            <td>${e.price*e.person} </td>
            <td onclick="del('${e.id}')">Delete</td>
            <td onclick="FormFill('${e.id}')">update</td>
            </tr>
        `
    })

    }
    //data ko delete karna h 
    let del=(id)=>{

        let url =`http://localhost:3000/whatsapp/${id}`

        fetch(url,{method:"DELETE"})
    }

    // fetchData():- isko body mai dal diya



//post method 
let book=()=>{
    let inpname = document.getElementById('name').value
    let inpage = document.getElementById('age').value
    let inpaadharno = document.getElementById('adhar').value
    let inpcheckin = document.getElementById('checkin').value
    let inpcheckout = document.getElementById('checkout').value
    let inpmobileno = document.getElementById('mobile').value
    let inpcountry = document.getElementById('country').value
    let inpperson = document.getElementById('person').value

    let url = "http://localhost:3000/whatsapp"

    fetch(url,{
method:"POST",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify(
    {
        "name":inpname,
        "age":inpage,
        "aadharno":inpaadharno,
        "checkin":inpcheckin,
        "checkout":inpcheckout,
        "mobileno":inpmobileno,
        "country":inpcountry,
        "person":inpperson,
        "price":500
    }
)
    })
    location.href="prectice.html"
    return false
}





let FormFill=async(id)=>{

let url = `http://localhost:3000/whatsapp/${id}`

let res = await fetch(url,{method:"GET"})

let data = await res.json()

console.log(data);

let FormData = document.getElementById("data2")

FormData.innerHTML=`

Enter name: <input type="text" id="upname" value="${data.name}"><br><br>
Enter age: <input type="number" id="upage" value="${data.age}"><br><br>
Enter aadharno: <input type="text" id="upadhar" value="${data.aadharno}"><br><br>
Enter checkin: <input type="date" id="upcheckin" value="${data.checkin}"><br><br>
Enter checkout: <input type="date" id="upcheckout" value="${data.checkout}"><br><br>
Enter mobileno: <input type="text" id="upmobile" value="${data.mobileno}"><br><br>
choose country:
<select  id="upcountry" value="${data.country}">
    <option value="india">India</option>
    <option value="india">china</option>
    <option value="india">usa</option>
    <option value="india">nepal</option>
    <option value="india">canada</option>
</select><br><br>
Enter person:<input type="text" id="upperson" value="${data.person}"><br><br>
<input type="submit" value="update now" onclick="return FinalUpdate('${data.id}')">
`

}




let FinalUpdate=(id)=>{

    let inpname = document.getElementById('upname').value
    let inpage = document.getElementById('upage').value
    let inpaadharno = document.getElementById('upadhar').value
    let inpcheckin = document.getElementById('upcheckin').value
    let inpcheckout = document.getElementById('upcheckout').value
    let inpmobileno = document.getElementById('upmobile').value
    let inpcountry = document.getElementById('upcountry').value
    let inpperson = document.getElementById('upperson').value

    let url = `http://localhost:3000/whatsapp/${id}`

    fetch(url,{
method:"PUT",
headers:{
    "content-type":"application/json"
},
body:JSON.stringify(
    {
        "name":inpname,
        "age":inpage,
        "aadharno":inpaadharno,
        "checkin":inpcheckin,
        "checkout":inpcheckout,
        "mobileno":inpmobileno,
        "country":inpcountry,
        "person":inpperson,
        "price":500
    }
)
    })
    location.href="prectice.html"
    return false

}