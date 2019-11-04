var addItem = () => {

    let input = document.getElementsByClassName("form-control")[0];
  
    if (input.value != "") {
        let listItem = document.createElement("li");
        listItem.className = "list-group-item";

        let textNode = document.createTextNode(" " + input.value);
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "list-check";

        listItem.appendChild(checkbox);
        listItem.appendChild(textNode);

        var list = document.getElementsByClassName("list-group")[0];
        list.appendChild(listItem);
    }
    else{
        alert("Write something in textbox!");
    }

    

}


