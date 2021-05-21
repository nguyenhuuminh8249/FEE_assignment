var inc= 0;
function countclick() {
   inc=inc+1;
   document.getElementById('cart_btn_update').innerHTML = 'View Cart' + '(' + inc + ')';
}