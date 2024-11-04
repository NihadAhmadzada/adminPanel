const tbody = document.querySelector("tbody")

const duzelis = document.querySelector(".u")


fetch("https://6724ac02c39fedae05b24b01.mockapi.io/projectX")
    .then(x => x.json())
    .then(data => {
        data.forEach(element => {
            // tbody.innerHTML +=  element.name + element.price + "<br>"
            tbody.innerHTML += `
                <tr>
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.price}</td>
                    <td class="x_u">
                        <div id="${element.id}" class="x">X</div>
                        <div class="u">U</div>
                    </td>
                </tr>
                `

                const silmek = document.querySelectorAll(".x")
               
                silmek.forEach((btn)=>{
                    btn.addEventListener("click",function () {
                        
                  
                        console.log(btn.id)
                        
        fetch("https://6724ac02c39fedae05b24b01.mockapi.io/projectX/" + btn.id,
            {
                method: 'DELETE'

            }

             )
            .then(res => res.json())
            .then(data => console.log(data))
            btn.parentElement.parentElement.remove()
                    }
                    )
                })
        });
    })



