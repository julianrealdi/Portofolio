const scriptURL = 'https://script.google.com/macros/s/AKfycbyTKBLeFeIbIQCtKXv_ztB-8LKMyeslS_NJyjjO9sB35yLxOX93UPBJRIbxQFgU1ZBy/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank You! Your form is submitted succesfully."))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})