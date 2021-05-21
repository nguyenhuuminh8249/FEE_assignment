function validation() {
    if (document.getElementById("Name").value == "")
    {
        // alert("please provide your name!");
        document.getElementById("name_error").innerHTML = "*Enter your name!";
        document.getElementById("Name").focus();
    }
    else
    {
        document.getElementById("name_error").innerHTML = "";
    }

    if (document.getElementById("Password").value == "")
    {
        // alert("please provide your email!");
        document.getElementById("password_error").innerHTML = "*Enter your password!";
        document.getElementById("Password").focus();
    }
    else
    {
        document.getElementById("password_error").innerHTML = "";
    }
    return false;
}