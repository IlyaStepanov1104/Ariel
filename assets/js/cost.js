function cost(){
	let all = document.getElementsByClassName("time");
	let tag = document.getElementById("cost");
	let sum = 0;
	let choose = [];
	for (let i = 0; i < all.length; i++) {
		if (all[i].checked) {
			if((all[i].parentNode.parentNode.id.split('_')[0] === 'Saturday') || (all[i].parentNode.parentNode.id.split('_')[0] === "Sunday")){
				sum += 600;
			} else {
				sum += 450;
			}
			choose.push([document.getElementById(`${all[i].parentNode.parentNode.id.split('_')[0]}_${all[i].parentNode.parentNode.id.split('_')[1]}`).textContent, all[i].parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent, all[i].nextSibling.textContent]);
		}
	}
	if (sum === 0){
		tag.innerHTML = "<h1 class=\"calendar-header\" style=\"color: red\">ОШИБКА: Выберите время работы для рассчёта!</h1>";
	} else {
		tag.innerHTML = "<h1 class=\"calendar-header\">Рассчёт стоимости для работы:</h1>\n";
		for (let i = 0; i < choose.length; i++) {
			tag.innerHTML += `<h3 style="font-weight: 500">${choose[i][0]} ${choose[i][1]} в ${choose[i][2]}</h3>`;
		}
		tag.innerHTML += `<h2>Общая сумма - ${sum}&#8381</h2>`
	}
}