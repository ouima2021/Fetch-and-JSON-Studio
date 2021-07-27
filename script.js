window.addEventListener('load', function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function(response) {
      response.json().then(function(json) {
        const div = document.getElementById("container");
        let inner = "";
        for (let i = 0; i < json.length; i++) {
          inner += addHtml(json[i]);
        }
        div.innerHTML= inner;
      });
    });
  });


function addHtml(data) {
    
    let astronaut = `
      <div class="astronaut">
      <div class="bio">
        <h3>${data.firstName} ${data.lastName}</h3>
        <ul>
           <li>Hours in space: ${data.hoursInSpace}</li>
           <li id="${data.active ? "green" : "no"}">Active: ${data.active}</li>
           <li>Skills: ${data.skills.join(", ")}</li>
        </ul>
     </div>
     <img class="avatar" src="${data.picture}">
    </div>
    `;
    return astronaut;
  }