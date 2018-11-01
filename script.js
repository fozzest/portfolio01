
//animate
window.onscroll = function() {myFunction()};
function myFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myP").className = "test";
    } else {
        document.getElementById("myP").className = "";
    }


    
}
// if (document.body.scrollTop = 10000 ) {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
// }
// else if (document.body.scrollTop > 502 || document.documentElement.scrollTop > 502) {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("stay");
// }