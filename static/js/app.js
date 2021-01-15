// from data.js


// YOUR CODE HERE

const tableData = data;

//<tbody> setting it up into html and creating the const for it. Also functions and consol log goes here

const tbody = d3.select("tbody")

function inputChange () {
    var chanInput = d3.select(this).select("input");
    var inputsId = chanInput.attr("id");
    var valueInput = chanInput.property("value");

    console.log("1= " + inputsId)
    console.log("2= " + valueInput)

    // working on filters for valueInput. If statements

    if (valueInput){
        filterRows = tableData.filter(row => row[inputsId] === valueInput);
    }

        console.log("3= " + filterRows)


    // clean up and cleat tbody

    tbody.html("");
    // for each statement
    filterRows.forEach((row_data) => {
        // now I am creating a TR for each row of the table in the html file using the append formula
        const row = tbody.append("tr");
    
        // now i am creating multiple TD cells for each row in the html file using the for each formula
        Object.values(row_data).forEach((value) =>{
            let cell = row.append("td");
            cell.text(value);

        }
        );
    });


}


// changing the input fields 

d3.selectAll(".filter").on("change", inputChange);
