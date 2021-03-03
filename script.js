function load_data() {
	var data = fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json").then(res => res.json()).then(data)

	data.then(value => {
		for(i=0;i<9;i++){
			element = document.getElementById('row'+i)
			
			//element = document.createElement('p')

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
		var data = fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json").then(res => res.json()).then(data)
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
	else if(val == 2){
		var data = fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json").then(res => res.json()).then(data)
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
	
	else if(val == 3) {
		var data = fetch("https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json").then(res => res.json()).then(data)
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
}