//Number of rows of the table
var t_rows = 5;

function Mean(){
    var sum = 0;
    var total = 0;
    var err = 1;
    document.getElementById("result").innerHTML = "Result ";
    for(var i = 1; i < t_rows; i++){
        var p = document.getElementById("p" + i).innerHTML;
        if(p !== "Infinity" && p !== "Invalid Input" && p.length !== 0){
            err = 0;
            total++;
            sum += parseFloat(p, 10);
        } else if(p === "Infinity" || p === "Invalid Input"){
            alert("Error. Invalid Input");
            err = 1;
            break;
        }
    }
    if(!err){
        document.getElementById("result").innerHTML = "Result " + (sum / total).toFixed(2) + "%";
    }
}

function Weighted(){
    var sum = 0;
    var total = 0;
    var err = 1;
    document.getElementById("result").innerHTML = "Result ";
    for(var i = 1; i < t_rows; i++){
        var p = document.getElementById("p" + i).innerHTML;
        var w = document.getElementById("w" + i).value;
        if(p !== "Infinity" && p !== "Invalid Input" && p.length !== 0){
            if(w === ""){
                alert("Error. Missing Input");
                err = 1;
                break;
            }
            err = 0;
            total += parseFloat(w, 10);
            sum += parseFloat(p, 10) * parseFloat(w, 10);
        } else if(p === "Infinity" || p === "Invalid Input"){
            alert("Error. Invalid Input");
            err = 1;
            break;
        }
    }
    if(!err){
        document.getElementById("result").innerHTML = "Result " + (sum / total).toFixed(2) + "%";
    }
}

// Function that adds a new row to the table
function Add(){
    var table = document.getElementById("table");
    var new_html = "<tr>\n" +
        "      <td>Activity "+ t_rows + "</td>\n" +
        "      <td>A" + t_rows + "</td>\n" +
        "      <td><input type = \"number\" class=\"input_field\" id=\"w" + t_rows + "\"/></td>\n" +
        "      <td><input type = \"number\" class=\"input_field\" id=\"num" + t_rows + "\" onkeyup=\"Percent()\"/> / <input type = \"number\" class=\"input_field\" id=\"den" + t_rows + "\" onkeyup=\"Percent()\"/></td>\n" +
        "      <td id=\"p" + t_rows + "\"></td>\n" +
        "    </tr>";
    var new_row = table.insertRow(table.rows.length);
    new_row.innerHTML = new_html;
    t_rows++;
}

//Function that deletes the last row of the table
function Delete(){
    if(t_rows === 2){
        alert("Error. You can't have less than 1 row");
        return;
    }
    t_rows--;
    if(document.getElementById("p" + t_rows).innerHTML !== ""){
        document.getElementById("result").innerHTML = "Result ";
    }
    document.getElementById("table").deleteRow(t_rows);
}

// Function for main calculations. Each time key is up it displays percentages if both parameters are present
function Percent(){
    document.getElementById("result").innerHTML = "Result ";
    for(var i = 1; i < t_rows; i++){
        var num = document.getElementById("num" + i).value;
        var den = document.getElementById("den" + i).value;
        if(num.length && den.length){
            if(den === "0"){
                document.getElementById("p" + i).innerHTML = "Invalid Input";
            } else{
                document.getElementById("p" + i).innerHTML = (num / den * 100).toFixed(2) + "%";
            }
        } else{
            document.getElementById("p" + i).innerHTML = "";
        }
    }
}

