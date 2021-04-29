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
})