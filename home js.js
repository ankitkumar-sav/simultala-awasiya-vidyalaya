let count =0;
let rotateAngle = 180;

function slider_func(x) {
    x.classList.toggle("change");
    let item = document.getElementById('navbar');
    let btn = document.getElementById('button');
    if (count == 0) {
        item.style.animationName = 'navbar-slider';
        item.style.animationDuration = '0.4s';
        item.style.animationFillMode = 'forwards' ;
        count += 1;
    }
    else{
        item.style.animationName = 'navbar-slider2';
        item.style.animationDuration = '0.4s';
        item.style.animationFillMode = 'forwards' ;
        count -= 1;
    }
}

function show_list() {
    let btn = document.getElementById('drop-btn-1');
    let item = document.getElementById('drop-list-1'); 
    let arrow = document.getElementById("arrow-1"); 
    arrow.setAttribute("style", `transform : rotate(${rotateAngle}deg)`);
    rotateAngle = rotateAngle + 180;
    if (item.style.display == 'none'){
        item.style.display = 'flex';
    }
    else{
        item.style.display = 'none';
    }
}

function show_list2() {
    let btn = document.getElementById('drop-btn-2');
    let item = document.getElementById('drop-list-2');
    let arrow = document.getElementById("arrow-2"); 
    arrow.setAttribute("style", `transform : rotate(${rotateAngle}deg)`);
    rotateAngle = rotateAngle + 180;
    if (item.style.display == 'none'){
        item.style.display = 'flex';
    }
    else{
        item.style.display = 'none';
    }
}

let imageCount = 0;
function plusSlide() {
    let item = document.getElementsByClassName('slides');
    let indicate = document.getElementsByClassName('dot');
    item[imageCount].style.display = 'none';
    indicate[imageCount].setAttribute("style" , "opacity : 0.7")
    imageCount += 1;
    if (imageCount == 5) {
        imageCount = 0;
    }
    item[imageCount].style.display = 'block';
    indicate[imageCount].setAttribute("style" , "opacity : 1")
}

function minusSlide() {
    let item = document.getElementsByClassName('slides');
    let indicate = document.getElementsByClassName('dot');
    item[imageCount].style.display = 'none';
    indicate[imageCount].setAttribute("style" , "opacity : 0.7")
    imageCount -= 1;
    console.log(imageCount);
    if (imageCount == -1) {
        imageCount = 4;
    }
    item[imageCount].style.display = 'block';
    indicate[imageCount].setAttribute("style" , "opacity : 1")
}

// let order= 'c';
function collapse_func1() {
    let content = document.getElementById('para-1')
    if (content.style.maxHeight == '0px'){
        content.style.maxHeight = '3300px';
        content.style.padding = '10px 10px';
    }
    else{
        content.style.maxHeight = '0px';
        content.style.padding = '0px 10px';
    }
}
function collapse_func2() {
    let content = document.getElementById('para-2')
    if (content.style.maxHeight == '0px'){
        content.style.maxHeight = '3300px';
        content.style.padding = '10px 10px';
    }
    else{
        content.style.maxHeight = '0px';
        content.style.padding = '0px 10px';
    }
}
function collapse_func3() {
    let content = document.getElementById('para-3')
    if (content.style.maxHeight == '0px'){
        content.style.maxHeight = '3300px';
        content.style.padding = '10px 10px';
    }
    else{
        content.style.maxHeight = '0px';
        content.style.padding = '0px 10px';
    }
}
function show_18th() {
    let sec_1= document.getElementById('sec-1');
    let sec_2= document.getElementById('sec-2');
    let main_list= document.getElementById('main-list');
    sec_1.style.display = 'none';
    sec_2.style.display = 'none';
    main_list.style.display = 'flex';
}
