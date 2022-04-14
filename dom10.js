document.body.addEventListener('click', function(e) {
    e.preventDefault();

    if (e.target.parentElement.classList.contains('delete-item') === true)
        e.target.parentElement.parentElement.remove();
})