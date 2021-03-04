function load_data() {
	link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json"
	fill(link)
	
}

function fill(link) {
	var data = fetch(link).then(res => res.json()).then(data)
	data.then(value => {
		for(i=0;i<9;i++){
			element = document.getElementById('row'+i)
		
			console.log(element.children[0].innerHTML)
			element.children[0].innerHTML = value[i].date
			element.children[1].innerHTML = value[i].firstName
			element.children[2].innerHTML = value[i].id
			element.children[3].innerHTML = value[i].lastName
			element.children[4].innerHTML = value[i].location
			element.children[5].innerHTML = value[i].salary
		}
		})	
}



function content(val) {
	if(val == 1) {
		link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json"
		fill(link)
	}
	else if(val == 2){
		link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json"
		fill(link)
	}
	
	else if(val == 3) {
		link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json"
		fill(link)
	}
}
