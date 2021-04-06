$(document).ready(() => {
    $('.insertOne').on('submit', (event) => {
        let newBurger = {
            burger_name: $('#newBurger').val().trim(),
            devoured: 0
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log('New menu option.');
            location.reload();
        });
    });
});