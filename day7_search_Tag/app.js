var content = document.querySelector(".content");
var input = document.querySelector(".content input");
var btn = document.querySelector(".remove-all");

var tags = ['Nodejs', 'reactjs']
function rerender() {
    content.innerHTML = "";
    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i];
        content.innerHTML += `
        <li>
        ${tag}
        <i class="fa-solid fa-xmark" onclick="removeTag(${i})"></i>
        </li>
    `
    }
    content.appendChild(input);
    input.focus();
}

rerender();

input.addEventListener('keydown',function(e){
    if(e.key == "Enter"){
        tags.push(input.value.trim());
        input.value = '';
        rerender();
    }
})

function removeTag(index){
    tags.splice(index,1);
    rerender();
}

btn.addEventListener('click',function(){
    tags = [];
    rerender();
})