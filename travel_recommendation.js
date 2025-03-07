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
  
  // fetch('travel_recommendation_api.json')
  fetch('https://cf-courses-data.s3.us.cloud-object-storage.appdomain.cloud/IBMSkillsNetwork-JS0101EN-SkillsNetwork/travel1.json')
    .then(response => response.json())
    .then(data => {
      if (user_input === "beaches") {
      } else if (user_input === "temples") {
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
