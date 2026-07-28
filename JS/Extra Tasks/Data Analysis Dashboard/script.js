let products = [];
let chart;
let currentChartType = "bar"; 

fetch("https://dummyjson.com/products")
.then(function(response){
    return response.json();
})
.then(function(data){
    products = data.products;
    loadCategory();
    updateDashboard(products);
});

function loadCategory(){
    let category = document.getElementById("category");
    category.innerHTML = "<option value='all'>All Category</option>";

    let cat = [];

    for(let i=0; i<products.length; i++){
        if(!cat.includes(products[i].category)){
            cat.push(products[i].category);
        }
    }

    for(let i=0; i<cat.length; i++){
        category.innerHTML += "<option value='"+cat[i]+"'>"+cat[i]+"</option>";
    }
}


document.getElementById("category").addEventListener("change", function(){
    filterAndDisplay();
});


document.getElementById("chartType").addEventListener("change", function(){
    currentChartType = this.value; 
    filterAndDisplay();
});


document.getElementById("reset").addEventListener("click", function(){
    document.getElementById("category").value = "all";
    document.getElementById("chartType").value = "bar";
    currentChartType = "bar";
    updateDashboard(products);
});

function filterAndDisplay(){
    let selectedCategory = document.getElementById("category").value;
    
    if(selectedCategory === "all"){
        updateDashboard(products);
        return;
    }

    let result = [];
    for(let i=0; i<products.length; i++){
        if(products[i].category === selectedCategory){
            result.push(products[i]);
        }
    }
    updateDashboard(result);
}

function updateDashboard(arr){
    if(!arr || arr.length === 0) return;

    let sum = 0;
    let min = arr[0].price;
    let max = arr[0].price;

    let labels = [];
    let price = [];

    for(let i=0; i<arr.length; i++){
        sum += arr[i].price;

        labels.push(arr[i].title);
        price.push(arr[i].price);

        if(arr[i].price < min){
            min = arr[i].price;
        }

        if(arr[i].price > max){
            max = arr[i].price;
        }
    }

    document.getElementById("sum").innerHTML = "$" + sum.toFixed(2);
    document.getElementById("avg").innerHTML = "$" + (sum/arr.length).toFixed(2);
    document.getElementById("min").innerHTML = "$" + min;
    document.getElementById("max").innerHTML = "$" + max;

    drawChart(labels, price);
}

function drawChart(labels, price){
    if(chart){
        chart.destroy();
    }

    chart = new Chart(document.getElementById("chart"), {
        type: currentChartType, 

        data: {
            labels: labels,
            datasets: [{
                label: "Product Price",
                data: price,
                borderWidth: 1
            }]
        },

        options: {
            responsive: true,
            scales: currentChartType === "pie" ? {} : {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}