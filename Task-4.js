// #Every
// 1.Verify if all emails in a mailing list end with @gmail.com.
let emails=["charu@gmail.com",
            "yuvasri@yahoo.com",
            "nivedha@gmail.com",
            "preethi@gmail.com",
            "monisha@ex.com"]
console.log(emails.every(mail=>mail.endsWith("@gmail.com")))

//  2.Check if all orders in a shopping site are marked as “delivered”.
let shop=[
    {item:"Chocolate",status:"delivered"},
    {item:"Badam",status:"delivered"},
    {item:"Ice-cream",status:"delivered"}
]
let delivery=shop.every((item=>item.status=="delivered"))
console.log(delivery)

// #find
// 1.Find the first student who got full marks in any subject.
let sub=[
    {name:"Charu",mark:{tam:90,eng:70,science:90}},
    {name:"Nivedha",mark:{tam:100,eng:60,science:100}},
    {name:"Priya",mark:{tam:90,eng:100,science:100}}
]
let topper=sub.find(student =>Object.keys(student.mark).find(marks=>student.mark[marks]==100))
console.log(topper)

// 2.From a stock price list, find the first price drop below a threshold.
let list =[
    {item:"Badam",price:100},
    {item:"Pista",price:520},
    {item:"Walnut",price:150},
    {item:"Dry grapes",price:250}
]
let price=list.find((s=>s.price>100))
console.log(price)

// #filter
// 1.From a list of employees, return only those who joined after 2020 and have salary above 50k.
let company_details=[
    {name:"Parkavi",joined:2019,salary:28000},
    {name:"Thirisha",joined:2021,salary:35000},
    {name:"Veeralakshmi",joined:2023,salary:52000},
    {name:"Geetha",joined:2022,salary:55000},
    {name:"Kamali",joined:2020,salary:57000}
]
let employee=company_details.filter(emp=>emp.joined>2020 && emp.salary>50000)
console.log(employee)

// 2.From an array of books, filter only those that belong to more than one category (multi-genre).
let books=[
    {book:"Wings of fire",category:["Inspiration","Motivation"]},
    {book:"Gitangali",category:["Classic fiction","Poetry","Drama"]},
    {book:"The White Tiger",category:["Picarsque novel"]},
    {book:"Long time coming",category:["Love","Romance"]}
]
let genre=books.filter(book=>book.category.length>1)
console.log (genre)

// #map
// 1.Take an array of sentences and return the length of the longest word in each sentence
let sentence=[
  "All is well",
  "Life is full of ups and down",
  "Failure is the stepping stone of success",
  "Everything is happens for reason"
];
let long=sentence.map(sentences=>{
  let word= sentences.split(' ');
  return Math.max(...word.map(word => word.length));
})
console.log(long)

// 2.Convert an array of transaction amounts into objects showing amount + GST (18%).
let transactions= [8900,8760,9000,8870,9200]
let transaction = transactions.map(amount => {
  let gst=amount*0.18
  return {
    amount: amount,
    gst: gst,
    total: amount + gst
  }
})
console.log(transaction)

// #forEach
// 1.Build a frequency counter of product categories in a shopping cart.
let cart=[
    {item:"Kurtis",category:"Clothing"},
    {item:"Chocolate",category:"Food"},
    {item:"Ice-cream",category:"Food"},
    {item:"Sarees",category:"Clothing"},
    {item:"Chain",category:"Jewellery"},
    {item:"Raincoat",category:"Clothing"},
    {item:"Juics",category:"Food"},
    {item:"Anklet",category:"Jewellery"},
    {item:"Bindi",category:"Fancy"}
]
let count={}
cart.forEach(items=>{
   if(!count[items.category]){
    count[items.category]=0;
  }
    count[items.category]++
})
console.log(count)

// 2.Count how many vowels are present in each word of a paragraph.
let para="Friendships a chosen bond of mutual affection"
let vowels = ['a', 'e', 'i', 'o', 'u'];
let words = para.split(" ");
let vowelCounts = {};
words.forEach(word => {
    let count = 0;
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    vowelCounts[word] = count;
});
console.log(vowelCounts);

// #some
// 1.From a list of projects, check if at least one is delayed beyond deadline.
let projects = [
  { name: "Project A", deadline: "2025-08-01", completedOn: "2025-07-30" },
  { name: "Project B", deadline: "2025-08-15", completedOn: "2025-08-20" },
  { name: "Project C", deadline: "2025-08-31", completedOn: "2025-08-28" },
  { name: "Project D", deadline: "2025-09-30", completedOn: "2025-09-29"}
];

let delayed = projects.some(project => 
  project.completedOn > project.deadline
);

console.log(delayed); 

// 2.Check if any password in a list contains both numbers and special characters.
let passwords = [
  "charu123",
  "nivi@nivedha",
  "moni#456",
  "world",
  "no$words"
];

let check = passwords.some(pass =>
  /[0-9]/.test(pass) && /[^A-Za-z0-9]/.test(pass)
);
console.log(check)