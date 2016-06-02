var uservalid = false;
function check() {
    if (document.getElementById("n1").value.length == 0) {
        var str = "Give username";
        var result = str.fontcolor("yellow");

        document.getElementById("text").innerHTML = result;
    }
        //document.getElementById("text").innerHTML = "Give username";

    else {
        document.getElementById("text").innerHTML = "Checking...";
        $.post("../Admin/ValidateUN", {
            username: $("#name").val()
        }, function (data) {
            if (data == 0) {
                document.getElementById("text").innerHTML = "Available";
                uservalid = true;
            }
            else {
                document.getElementById("text").innerHTML = "Not Available";
                uservalid = false;
            }
        });
    }
}

