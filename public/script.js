async function noms(id){

    const fetchOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    }
    await fetch( `/api/burgers/${id}`, fetchOptions ).then(r=>r.json())
    
    // refreshList()
}

async function request() {
    const fetchOptions = {
        headers: { 'Content-Type': 'application/json' },
        method: 'POST'
    }
    console.log(fetchOptions)

    await fetch('api/burgers', fetchOptions).then(r=>r.json())
    // refreshList()
}

// async function refreshList() {

//     const r = await fetch('/api/burgers').then(r => r.json())

//     document.querySelector('.preMunch').innerHTML = ''
//     document.querySelector('.postMunch').innerHTML = ''
//     r.map(req => {
//         if (req.eaten < 1){
//         document.querySelector('.preMunch').innerHTML += `
//             <div class="row d-flex">
//                 <div class="card munch">
//                 <div class="card-body">
//                   ${req.id}. ${req.request}
//                 </div>
//                 </div>
//                 <button class="btn btn-primary mt-3 devour" onClick="devour(${req.id})">Devour!</button>
//             </div>
//             `
//         } else {
//             document.querySelector('.postMunch').innerHTML += `
//         <div class="card munch">
//             <div class="card-body">
//                 ${req.id}. ${req.request}
//             </div>
//         </div>
//         `
//         }
//     })
// }
// refreshList()