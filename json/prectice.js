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
