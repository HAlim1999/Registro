var contenedor = document.getElementById('display');
const paises =['Buenos Aires', 'Italy']

for(i=0; i<paises.length;i++){

  inputValue = paises[i]

  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue+'&appid=54feb3f310fa9f125dc1d21f93bbf9a4')
  .then(response => response.json())
  .then(data=>{
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var imgC = data['weather'][0]['icon'];


    let div = document.createElement('div');
    div.innerHTML=`<div class="card" style="width: 10rem;">
    <img src='http://openweathermap.org/img/wn/${imgC}@2x.png' class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${nameValue}</h5>
      <p class="card-text">${descValue}.</p>
      <p class="card-text">${(tempValue-273.15).toFixed(2)}</p>
    </div>
  </div>`
  contenedor.appendChild(div)
  })
  .catch(err => console.log(err))
}

