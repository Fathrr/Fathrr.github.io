let angka_1, operator, angka_2, samaDengan, hasil;

document.getElementById("samaDengan").onclick = function (){
	angka_1 = document.getElementById("angka_1").value;
	angka_2 = document.getElementById("angka_2").value;
	operator = document.getElementById("operator").value;

	samaDengan = angka_1 + operator + angka_2;
	console.log(eval(samaDengan));

	hasil = document.getElementById("hasil").textContent = (eval(samaDengan));

};