const inpname  = document.querySelector(".name")
const price  = document.querySelector(".price")
const add = document.querySelector( ".signupbtn")
add.addEventListener("click", function(event){
    event.preventDefault()
    addCategories()
    console.log(inpname.value);
    
  });

function addCategories(obj) {
    fetch("https://6724ac02c39fedae05b24b01.mockapi.io/projectX" ,
{ 
method: `POST` ,
headers: {
    'Accept': 'application/json, text/plain, */*',
    'Content-Type': 'application/json'
  },
body: JSON.stringify({name : inpname.value, price : price.value})

})
    .then( x => x.json())
    .then( data =>{ console.log(data)
        window.location.href ="index.html"
    })
}