let products = [];
let chart;

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

    for(let i=0;i<products.length;i++){

        if(!cat.includes(products[i].category)){
            cat.push(products[i].category);
        }

    }

    for(let i=0;i<cat.length;i++){

        category.innerHTML += "<option value='"+cat[i]+"'>"+cat[i]+"</option>";

    }

}

document.getElementById("category").addEventListener("change",function(){

    let result = [];

    if(this.value=="all"){
        updateDashboard(products);
        return;
    }

    for(let i=0;i<products.length;i++){

        if(products[i].category==this.value){
            result.push(products[i]);
        }

    }

    updateDashboard(result);

});

document.getElementById("reset").addEventListener("click",function(){

    document.getElementById("category").value="all";
    updateDashboard(products);

});

function updateDashboard(arr){

    let sum=0;
    let min=arr[0].price;
    let max=arr[0].price;

    let labels=[];
    let price=[];

    for(let i=0;i<arr.length;i++){

        sum+=arr[i].price;

        labels.push(arr[i].title);
        price.push(arr[i].price);

        if(arr[i].price<min){
            min=arr[i].price;
        }

        if(arr[i].price>max){
            max=arr[i].price;
        }

    }

    document.getElementById("sum").innerHTML="$"+sum.toFixed(2);
    document.getElementById("avg").innerHTML="$"+(sum/arr.length).toFixed(2);
    document.getElementById("min").innerHTML="$"+min;
    document.getElementById("max").innerHTML="$"+max;

    drawChart(labels,price);

}

function drawChart(labels,price){

    if(chart){
        chart.destroy();
    }

    chart = new Chart(document.getElementById("chart"),{

        type:"bar",

        data:{
            labels:labels,
            datasets:[{
                label:"Product Price",
                data:price,
                borderWidth:1
            }]
        },

        options:{
            responsive:true,
            scales:{
                y:{
                    beginAtZero:true
                }
            }
        }

    });

}