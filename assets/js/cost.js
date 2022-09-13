function month(month_name){
	switch (month_name){
		case "ЯНВАРЬ":
			return "01";
		case "ФЕВРАЛЬ":
			return "02";
		case "МАРТ":
			return "03";
		case "АПРЕЛЬ":
			return "04";
		case "МАЙ":
			return "05";
		case "ИЮНЬ":
			return "06";
		case "ИЮЛЬ":
			return "07";
		case "АВГУСТ":
			return "08";
		case "СЕНТЯБРЬ":
			return "09";
		case "ОКТЯБРЬ":
			return "10";
		case "НОЯБРЬ":
			return "11";
		case "ДЕКАБРЬ":
			return "12";
	}
}

function chooseString(choose){
	let result = "";
	for (let i = 0; i < choose.length; i++)
		result = result + choose[i][0] + "," + choose[i][1] + ";";
	return result;
}

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
			choose.push([document.getElementById(`${all[i].parentNode.parentNode.id.split('_')[0]}_${all[i].parentNode.parentNode.id.split('_')[1]}`).textContent + "." + month(all[i].parentNode.parentNode.parentNode.previousElementSibling.previousElementSibling.textContent), all[i].nextSibling.textContent]);
		}
	}
	if (sum === 0){
		tag.innerHTML = "<h1 class=\"calendar-header\" style=\"color: red\">ОШИБКА: Выберите время работы для рассчёта!</h1>";
	} else {
		tag.innerHTML = "<h1 class=\"calendar-header\">Рассчёт стоимости для работы:</h1>\n";
		for (let i = 0; i < choose.length; i++) {
			tag.innerHTML += `<h3 style="font-weight: 500">${choose[i][0]}.2022 в ${choose[i][1]}</h3>`;
		}
		tag.innerHTML += `<h2>Общая сумма - ${sum}&#8381</h2>`
		tag.innerHTML += '<label class="cost"><input type="submit" onclick="window.open(\'reserve.php?sum=' + String(sum) + '&choose=' + chooseString(choose) + '\')"><span>Забронировать</span></label>'
	}
}
