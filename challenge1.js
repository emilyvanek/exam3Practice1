window.addEventListener("load", function() {
    document.querySelector('h1').style.color = '#A334ED';
    document.querySelector('h1').style.textAlign = 'center';
});
window.addEventListener('dblclick', function(){
    alert(Date());
});

document.querySelector('#toggle').addEventListener('change', function(){
    let emailfield = document.querySelector('#emailBox')
    if(emailfield.classList.contains('hidden')) {
        emailfield.classList.remove('hidden');
    }
    else {
        emailfield.classList.add('hidden');
    }
});

