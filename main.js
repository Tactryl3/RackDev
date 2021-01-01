//Table Searching
function tableSearch() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue, nbValue, nb, chkBan, chkNote;
    input = document.getElementById("myInput");
    chkBan = document.getElementById("ban").checked;
    chkNote = document.getElementById("note").checked;
    filter = input.value.toUpperCase();
    table = document.getElementById("tbody");
    tr = table.getElementsByTagName("tr");
  
    // Loop through all table rows, and hide those who don't match the search query
    for (i = 1; i < tr.length; i++) { //Changed i = 1 to show top row
      td = tr[i].getElementsByTagName("td")[1]; //Brackets at end indicate what column
      nb = tr[i].getElementsByTagName("td")[0]; //GET BAN OR NOTE
      if (td) {
        txtValue = td.textContent || td.innerText;
        nbValue = nb.textContent || nb.innerText;
        if (nbValue = "NOTE" && chkNote == true) {
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }  else {tr[i].style.display = "none";}
      }
    }
  }