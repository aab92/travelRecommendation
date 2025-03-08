const resultElement = document.getElementById('result');

function showResult() {
  user_input = document.getElementById('searchInput').value.toLowerCase();
  if (user_input.includes("beach")) {
    user_input = "beaches";
  }
  if (user_input.includes("temple")) {
    user_input = "temples";
  }
  if (user_input.includes("countr")) {
    user_input = "countries";
  }
  
  fetch('travel_recommendation_api.json')
  //fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
    .then(response => response.json())
    .then(data => {
      if (user_input === "beaches") {
        data.beaches.forEach( (beach) => {
          // TODO
          resultElement.innerHTML = '<div id="result_entry">';
          resultElement.innerHTML += `<img src="${beach.img}"/>`;
          resultElement.innerHTML += '</div>;
          /*for (const condition in conditionsCount) {
            resultElement.innerHTML += `${condition}: ${conditionsCount[condition]}<br>`;
          }*/
          console.log(`found beach : ${beach.name.toLowerCase()}`);
        });
      } else if (user_input === "temples") {
        data.temples.forEach( (temple) => {
          // TODO
          console.log(`found temple : ${temple.name.toLowerCase()}`);
        });
      } else if (user_input === "countries") {
        data.countries.forEach( (country) => {
          // TODO
          console.log(`found country : ${country.name.toLowerCase()}`);
        });
      }
  
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

btnSearch.addEventListener('click', showResult);
