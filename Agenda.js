var editare = -1;
var lista =[];

function adauga(event) {
	event.preventDefault();
	var obj = {};
	form = document.querySelector('#formular');
	obj.nume = form.querySelector("[name='nume']").value;
	obj.telefon = form.querySelector("[name='telefon']").value;

	if (obj.nume === "" || obj.telefon === "") {
	alert("Introdu Nume si Numar de telefon");
	return;
	}

	if (obj.telefon.length !== 10 || obj.telefon.substring(0,2)!=="07") {
	alert("Introdu numarul de telefon corect (10 cifre)");
	return;
	}

	if(form.checkValidity() == false) {
		return
	}

	form.querySelector("[name='nume']").value="";
	form.querySelector("[name='telefon']").value="";

	if(editare === -1) {
		lista.push(obj);
	} else {
		lista[editare]=obj;
		editare=-1;
	}

	draw();
	afiseazaTabel();
}

function afiseazaTabel () {
	if(document.querySelector(".hidden") !== null) {
		document.querySelector(".hidden").classList.remove("hidden");		
	}
}

function draw () {
	var str = "";
	for (i=0; i<lista.length; i++) {
		str+=` <tr>
		<td>${lista[i].nume}</td>
        <td>${lista[i].telefon}</td>
        <td><input class="editeaza" type="button" onclick="editeaza(${i});" value="Editeaza">
        <input class="sterge" type="button" onclick="sterge(${i});" value="Sterge"> </td>
            	</tr>
    
    `;
	}
	document.querySelector("#rezultat").innerHTML= str;

}

function sterge (x) {
	lista.splice(x,1);
	draw();
}

function editeaza (n) {
	window.editare = n; 
	var m = lista[n];
	var form = document.querySelector("#formular");
	form.querySelector("[name='nume']").value=m.nume;
	form.querySelector("[name='telefon']").value=m.telefon;

}