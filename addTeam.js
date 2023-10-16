let localTeam = JSON.parse(localStorage.getItem("teamArray"));
let localPlayers = JSON.parse(localStorage.getItem("playerArray"));

var selectTeam = document.getElementById("inp4")
for (var i = 0; i < localTeam.length; i++) {
    selectTeam.innerHTML += `
    <option value="${localTeam[i].teamFullName}">${localTeam[i].teamFullName}</option>
               
    `
}
var newData = 10
$("#addteamform").submit(function(e) {
    e.preventDefault();
    let inp_val = $("#inp1").val();
    let shortName = '';
    for (let i = 0; i < inp_val.length; i++) {
        if (i == 0) {
            shortName += inp_val[i++].toUpperCase();
            continue;
        } else if (inp_val[i] == ' ') {
            shortName += inp_val[++i].toUpperCase();
            i++;
        }
    }
  

    let addData = {
        "id": localTeam.length,
        "teamFullName": $("#inp1").val(),
        "sName": shortName,
        "teamIcon": $("#inp3").val() + "Cr",
      
        "wonCount": $("#inp4").val(),
   


    }

    localTeam.push(addData)
    localStorage.setItem('teamArray', JSON.stringify(localTeam))

    location.href = `./teams.html?name=${addData.sName}`;
})



/*

$(document).ready(function() {
    $("#addTeamButton").click(function() {
        // Get the values from the form inputs
        var teamName = $("#inp1").val();
        var logoUrl = $("#inp3").val();
        var wonCount = $("#inp4").val();

        // Create a new team object
        var newTeam = {
            "teamName": teamName,
            "logoUrl": logoUrl,
            "wonCount": wonCount
        };

        // Retrieve the existing teams from local storage
        var localTeams = JSON.parse(localStorage.getItem("teams")) || [];

        // Add the new team to the array of teams
        localTeams.push(newTeam);

        // Update the local storage with the updated team data
        localStorage.setItem("teams", JSON.stringify(localTeams));

        // Redirect to the home page or perform any other desired action
        window.location.href = "./index.html";
    });
});
*/