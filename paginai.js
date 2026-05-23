const form  = document.querySelector('.task-form')
const input = document.querySelector('input')

form.addEventListener('submit', function(event) {
    event.preventDefault()

    console.log(input.value)
})