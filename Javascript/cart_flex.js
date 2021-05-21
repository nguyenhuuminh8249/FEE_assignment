function clear_all() {
    var check = confirm("Are you sure ?");
    if(check == true){
        document.getElementById('right_s').innerHTML = "";
    }
};

function clear_part(x) {
    var id_product = x;
    var check = confirm("Are you sure ?");
    if(check == true){
        if (id_product == 1) {
            document.getElementById('p1').innerHTML = "";
        }
        else if(id_product == 2)
        {
            document.getElementById('p2').innerHTML = "";
        }
        else if (id_product == 3)
        {
            document.getElementById('p3').innerHTML = "";
        }
    }
};