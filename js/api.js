
//     const url = 'www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata';



// fetch('www.themealdb.com/api/json/v1/1/random.php')
//   .then((response) => response.json())
//   .then((data) => console.log(data));


// Seafood

function loadData(search) {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`)
        .then(response => response.json())
        .then(data => displayData(data.meals))
}


const displayData = (data) => {
    console.log(data);

    const conatiner = document.getElementById('section-container');

    
    


    data.forEach(element => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
    
    <div class="card">
      <img src="${element.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${element.strMeal}</h5>
        
      </div>
    </div>
  
    `;
    conatiner.appendChild(div);


    });



    // display no phone found




   


}


document.getElementById('btn-search').addEventListener('click', function(){
    const searchvalue = document.getElementById('input-field').value;
    loadData(searchvalue);
})

// loadData();
