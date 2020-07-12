let scroll;
scroll = () =>{
    let el = document.getElementById('skill');
    // get scroll position in px
    console.log(el.scrollTop);

}
function toggle(){
    var head = document.getElementById("header");
    head.classList.toggle('active');
}
// 3d image
VanillaTilt.init(document.querySelector(".img_box"), {
    max: 25,
    speed: 400
});

//timeline 3d
VanillaTilt.init(document.querySelector(".Timeline"), {
    max: 25,
    speed: 400
});

//skill 3d 


