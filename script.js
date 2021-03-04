var link = ""

var ent = 9

//var last = 0

var data = {}

var counter = 9

function load_data() {
	link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json"
	fill(link, ent)
}

function clearData(l) {
	if(document.getElementById("row")){
		for(i=0;i<l;i++)
		{var del = document.getElementById("row"); 
		del.remove();}
	}
}

function fill(link, lim) {

	clearData(counter)
	

	//var data = fetch(link).then(res => res.json()).then(data)
	data = fetch(link).then(res => res.json()).then(data)
	data.then(value => {
		for(i=lim-9;i<lim;i++) {
			const myDiv = document.getElementById('table')
			const row = document.createElement('div')
			row.className = "Row"
			row.setAttribute('id','row')

			
			for(j=0;j<6;j++){
				const cell = document.createElement('div')
				cell.className = "Cell"
				para = document.createElement('p')

				switch(j) {
					case 0:
					para.innerHTML = value[i].date
					break
					case 1:
					para.innerHTML = value[i].firstName
					//console.log(value[i].firstName)
					break
					case 2:
					para.innerHTML = value[i].id
					break
					case 3:
					para.innerHTML = value[i].lastName
					break
					case 4:
					para.innerHTML = value[i].location
					break
					case 5:
					para.innerHTML = value[i].salary
					break
				}
				//para.innerHTML = value[i].
				cell.append(para)
				row.append(cell)
			}
			
			myDiv.append(row)
		}
	})
}

function content(val) {
	if(val == 1) {
		link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/small.json"
		fill(link, 9)
	}
	else if(val == 2){
		link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/medium.json"
		fill(link, 9)
	}
	
	else if(val == 3) {
		link = "https://raw.githubusercontent.com/accuknox/TrainingAPI/main/large.json"
		fill(link, 9)
	}
}


function changeData(btn) {
	if(btn == "prev") {
		//page = page+1
		if(ent>9){
			ent-=9
			fill(link, ent)
		}
	}
	else if(btn == "next"){
		ent+=9
		fill(link, ent)
	}
}



function search() {
	var key = document.getElementById("searchbar").value;
	if (key == ""){
		load_data()
		return
	}
	
	clearData(counter)
	console.log(counter)
	counter = 0

	data.then(value => {

		for(i=0;i<Object.keys(value).length;i++){
			if(value[i].firstName.includes(key) || value[i].lastName.includes(key)) {
				const table = document.getElementById('table')
				const row = document.createElement('div')
				row.className = "Row"
				row.setAttribute('id','row')

				for(j=0;j<6;j++){
				const cell = document.createElement('div')
				cell.className = "Cell"
				para = document.createElement('p')

				switch(j) {
					case 0:
					para.innerHTML = value[i].date
					break
					case 1:
					para.innerHTML = value[i].firstName
					//console.log(value[i].firstName)
					break
					case 2:
					para.innerHTML = value[i].id
					break
					case 3:
					para.innerHTML = value[i].lastName
					break
					case 4:
					para.innerHTML = value[i].location
					break
					case 5:
					para.innerHTML = value[i].salary
					break
				}
				//para.innerHTML = value[i].
				cell.append(para)
				row.append(cell)
			}
			
			table.append(row)

			counter+=1
		}
		}
		console.log(value)
	})

  	//document.getElementById("demo").innerHTML = "You wrote: " + x;
}
