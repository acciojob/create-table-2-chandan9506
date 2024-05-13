function createTable() {
    //Write your code here
	
	let row = prompt("Input number of rows");
	let column = prompt("Input number of columns");
	let mytable = document.getElementById("myTable");
	for (let i = 0; i < row; i++) {
		let tableRow = document.createElement("tr");
		mytable.append(tableRow);
		for (let j = 0; j < column; j++) {
			let tableColumn = document.createElement("td");
			tableColumn.innerText = `Row-${i} Column-${j}`;
			mytable.append(tableColumn);
		}
	}
  
}
