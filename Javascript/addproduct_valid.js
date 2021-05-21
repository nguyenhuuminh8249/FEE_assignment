// validation form check
function validation() {
    //  Product name check
    if (document.getElementById("Product Name").value == "")
    {
        
        document.getElementById("alert_productname").innerHTML = "*Please enter product name";
        document.getElementById("Product Name").focus();
    }
    else
    {
        document.getElementById("alert_productname").innerHTML = "";
    }
    // Unit price check
    if (document.getElementById("Unit Price").value == "")
    {
        document.getElementById("alert_unitprice").innerHTML = "*Please enter price";
        document.getElementById("Unit Price").focus();
    }
    else
    {
        document.getElementById("alert_unitprice").innerHTML = "";
    }
    //  Unit in Stock
    if (document.getElementById("Unit In Stock").value == "")
    {
        document.getElementById("alert_UiS").innerHTML = "*please enter units in stock";
        document.getElementById("Unit In Stock").focus();
    }
    else
    {
        document.getElementById("alert_UiS").innerHTML = "";
    }

    // Description check
    if (document.getElementById("Description").value == "")
    {
        document.getElementById("alert_des").innerHTML = "*Write product description";
        document.getElementById("Description").focus();
    }
    else
    {
        document.getElementById("alert_des").innerHTML = "";
    }

    if (document.getElementById("Manufacturer").value == "")
    {
        document.getElementById("alert_manu").innerHTML = "*Please enter manufacturer";
        document.getElementById("Manufacturer").focus();
    }
    else
    {
        document.getElementById("alert_manu").innerHTML = "";
    }

    if (document.getElementById("Category").value == "")
    {
        document.getElementById("alert_category").innerHTML = "*Please enter category";
        document.getElementById("Category").focus();
    }
    else
    {
        document.getElementById("alert_category").innerHTML = "";
    }

    // Condition (input: radio type) check
    var product_stt = document.getElementsByTagName("cond");
    var init = false;
    var i = 0;
    while (!init && i < product_stt.length) {
        if (product_stt[i].checked) {
            init = true;
        }
        i++;        
    }
    if (!init) {
        document.getElementById("alert_radio").innerHTML = "*Choose Product condition";
    }
    else
    {
        document.getElementById("alert_radio").innerHTML = "";
    }

    if (document.getElementById("Product Image").value == "")
    {
        document.getElementById("alert_image").innerHTML = "*Please upload product image";
        document.getElementById("Product Image").focus();
    }
    else
    {
        document.getElementById("alert_image").innerHTML = "";
    }
    return false;
}
