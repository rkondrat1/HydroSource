
const wrapper = document.querySelector('.formSection'); 

const form = wrapper.querySelectorAll('.input-group'); 

const submitInput = form[0].querySelector('input[type = "submit"]');

function getDataForm(e){
    e.preventDefault();
    var formData = new FormData(form[0]);

    alert(formData.get('address') + ' - ' + formData.get('level')
    + ' - ' + formData.get('month'));

}

document.addEventListener('DOMContentLoaded', function(){
    submitInput.addEventListener('click', getDataForm, false);

}, false);

