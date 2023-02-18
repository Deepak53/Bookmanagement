 let rows=[];
 let s = 0;
 function addData(){
    //  e.preventDefault;
     let name = document.querySelector("#name").value;
     let issuedto = document.querySelector("#issuedto").value;
     console.log(name, issuedto);
     rows.forEach((value)=>{
        if(value < rows.length){
            s++;
        }
     })
     let tr = table.insertRow();
     var cell = tr.appendChild(document.createElement('td'));
     
     rows += "<tr><td>"+ s +"<td></td>"+ name +"<td></td>"+ issuedto +"<td></tr>";

     `${rows}`.appendTo("#table tbody");
    console.log(s , name , issuedto , rows);
    return false;
}


// function addData(el) {
//   var table = document.getElementById('table');
//   var tr = table.insertRow();
//   el.form.querySelectorAll('input').forEach(function(el) {
//     var cell = tr.appendChild(document.createElement('td'));
//     cell.textContent = el.value;
//   });
// }