let company={
    company_details:{
        name:"Charu solutions",
        location:"Chennai",
        block:"F-4 block"
    },
    owner:{
        name:"Charumathi",
        age:23,
        contact:{
            phone:9524980991,
            email:"charumathi@gmail.com",
            website:"charu.solutions"
        },
        address:{
            address1:"charu.solution, Mount road",
            address2:"charu.solution, Velacherry"
        },
    },
    manager:{
        name:"Yuvasri",
        age:21,
        qualification:"B.com",
        contact:{
            phone:9524980989,
            email:"yuva@gmail.com",
            website:"charu.solutions"
        },
        address:{
            address1:"charu.solution, Mount road",
            address2:"charu.solution, Velacherry"
        },

    },
    employee:[
        {name:"Yuvasri",
         age:21,
         qualification:"B.sc",
         phone:9554980989,
        },

        {name:"Jayasri",
         age:22,
         qualification:"B.sc",
         phone:9554985489,

        },

        {name:"Priya",
         age:24,
         qualification:"M.sc",
         phone:9554885489,
        
        }
    ]
    }
    company.employee.forEach(({name,age,qualification,phone})=>{
        console.log(`Employee:Employee name:${name},
        Employee age:${age},
        Employee qualification:${qualification},
        Employee phone:${phone}`)
    })

    let{name:company_name,
        location:company_location,
        block:company_block
    }=company.company_details

    let{name:owner_name,
        age:owner_age,
        contact:{
            phone:owner_phone,
            email:owner_email,
            website:owner_website
        },
        address:{
            address1:owner_add1,
            address2:owner_add2
        }
    }=company.owner

    let{name:manager_name,
        age:manager_age,
        qualification:manager_qua,
        contact:{
            phone:manager_phone,
            email:manager_email,
            website:manager_website
        }
    }=company.manager
     
    console.log(`Welcome to ${company_name} at ${company_location} in ${company_block}.
        Enjoy the services.`)
    console.log("This is Owner details.")
    console.log(`Owner name: ${owner_name}`)
    console.log(`Owner age: ${owner_age}`)
    console.log(`Owner email: ${owner_email},Owner phone:${owner_phone},Owner website: ${owner_website}`)
    console.log(`Main address:${owner_add1},Alternative address:${owner_add2}`)
    console.log("This is Manager details.")
    console.log(`Manager name: ${manager_name}`)
    console.log(`Manager age: ${manager_age}`)
    console.log(`Manager qualification:${manager_qua}`)
    console.log(`Manager email: ${manager_email}, Manager phone:${manager_phone}, Manager website: ${manager_website}`)


// #Palindrome
// 1.Check if it is palindrome.It is not palindrome make it palindrome.

let word="charumathi"
if(word==word.split("").reverse().join("")){
    console.log(`true:${word}-It is palindrome`)
}
else{
    console.log(`false:${word}-It is not palindrome`)
    let reversed=word.split("").reverse().join("")
    let palindrome=word+reversed.slice(1)
    console.log(palindrome)
}