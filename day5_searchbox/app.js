var btnSearch = document.querySelector('.btn-search');

btnSearch.addEventListener('click',function(){
    this.parentElement.classList.toggle('open');
    console.log(this.previousSibling);
    this.previousElementSibling.focus();
})