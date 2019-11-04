var deleteItem = () => {

    var items = document.getElementsByClassName("list-group-item");
    var cheeckboxes = document.getElementsByClassName("list-check");
    var haveChecks = false;

    for (let i = 0; i < cheeckboxes.length; i++) {
        if (cheeckboxes[i].checked) {
            haveChecks = true;
        }
    }

    if (haveChecks) {
        for (var i = 0; i < cheeckboxes.length; i++) {
            if(cheeckboxes[i].checked){
                console.log(i + " cheked");
                items[i].parentNode.removeChild(items[i]);
                i--;
            }
       }
    }
    else{
        alert("Choose what you want to delete");
    }
    
    
    
}