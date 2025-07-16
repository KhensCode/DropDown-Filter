document.addEventListener('DOMContentLoaded',()=> {
    const selectField = document.getElementById('selectField');
    const selectText = document.getElementById('selectText');
    const list = document.getElementById('list');
    const options = document.getElementsByClassName('options');

    selectField.addEventListener('click',()=> {
        list.classList.toggle('hide');
        
    });

   for(let option of options) {
    option.addEventListener('click',function() {
        selectText.textContent= this.textContent;
        setTimeout(() => {
            list.classList.add('hide');
        },500)
        
    })
   }



})
