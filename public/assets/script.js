async function noms(id) {

    const fetchOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' }
    }
    await fetch(`/api/burgers/${id}`, fetchOptions).then(r => r.json())
    location.href = '/'
}