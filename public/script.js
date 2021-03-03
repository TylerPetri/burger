async function noms(id) {

    const fetchOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    }
    await fetch(`/api/burgers/${id}`, fetchOptions).then(r => r.json())
    location.href = '/'
}

async function hungry() {
    const fetchOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    }
    const data = {
        request: document.querySelector('#burgerIn').textContent
    }
    console.log(document.querySelector('#burgerIn').textContent)
    data.body = JSON.stringify(data)

    await fetch('/api/burgers', fetchOptions).then(r => r.json())
}