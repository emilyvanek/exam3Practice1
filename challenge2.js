window.addEventListener('load', function(){
    let textdefault = document.querySelector('#billing').innerHTML
    console.log(textdefault)
});

document.querySelector('input[name=useBilling]').addEventListener('change', function() {
    let billinginfo = document.querySelector('#billing').innerHTML;
    let homebox = document.querySelector('#home');
    if (this.checked == true) {
        homebox.innerHTML = billinginfo;
        homebox.disabled = true;
    }
    else{
        homebox.innerHTML = "";
        homebox.disabled = false;
    }
});
