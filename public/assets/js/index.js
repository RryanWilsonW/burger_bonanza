document.addEventListener('DOMContentLoaded', (event) => {
    if (event) {
      console.info('DOM loaded');
    }
  
    const devourBttns = document.querySelectorAll('.devour-bttn');
     if (devourBttns) {
         devourBttns.forEach((button) => {
             button.addEventListener('click', (event) => {
                 const id = event.target.getAttribute('data-id');
                 const newDevour = event.target.getAttribute('data-newdevour');

                 const newDevourState = {
                     devoured: newDevour
                 };
                 fetch(`/burgers/${id}`, {
                     method: 'PUT',
                     headers: {
                         Accept: 'application/json',
                         'Content-Type': 'application/json',
                     },
                     body: JSON.stringify(newDevourState),
                 }).then((response) => {
                     if( response.ok) {
                         console.log(`Burger Devoured`);
                         location.reload('/');
                     } else {
                         alert('You messed up kid!')
                     }
                 })
             })
         })
     }
    const deleteBttns = document.querySelectorAll('.delete-bttn');
        deleteBttns.forEach((button) => {
            button.addEventListener('click', (event) => {
                const id = event.target.getAttribute('data-id');

                fetch(`/burgers/${id}`, {
                    method: 'DELETE',
                }).then((res) => {
                    console.log(res)
                    console.log(`Deleted burger with id of ${id}`)
                    location.reload();
                })
            })
        })
})