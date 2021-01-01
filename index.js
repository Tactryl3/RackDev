const url = "https://api.rackmc.net:8080/punishments";

const apiGetPunishTemp = [{
  "id": 12,
  "name": "Hyp3r7",
  "uuid": "d8d5a9237b2043d8883b1150148d6955",
  "reason": "Gay",
  "operator": "Tactryl3",
  "punishmentType": "BAN",
  "start": "1609366487454",
  "end": "-1",
  "calculation": ""
}
,{
  "id": 12,
  "name": "NEvana0003",
  "uuid": "d8d5a9237b2043d8883b1150148d6955",
  "reason": "Made an api that doesnt have https Sadge",
  "operator": "Tactryl3",
  "punishmentType": "BAN",
  "start": "1609366487454",
  "end": "1609666487454",
  "calculation": ""
}]



fetch(url)
.then(function (response) {
  console.log(response)
  return response.json();
})
.then(function (data) {
  console.log(data)
  const apiGetPunish = data;

  var tbody = document.getElementById('tbody');

for (var i = 0; i < apiGetPunish.length; i++) {
  if (apiGetPunish[i].punishmentType !== 'i want all of them rn') {
    var tr = "<tr>";

    tr += `
    <td> ${apiGetPunish[i].punishmentType} </td>
    <td> ${apiGetPunish[i].name} </td>
    <td> ${apiGetPunish[i].uuid} </td>
    <td> ${apiGetPunish[i].reason} </td>
    <td> ${apiGetPunish[i].operator} </td>
    <td> ${timeConverter(apiGetPunish[i].start)} </td>
    <td> ${timeConverter(apiGetPunish[i].end)}</tr>`;

    tbody.innerHTML += tr;
  }
}


function timeConverter(UNIX_timestamp){
  if (UNIX_timestamp == -1 ) return 'NEVER'
  var a = new Date(UNIX_timestamp * 1); //dont ask
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = a.getHours();
  var hour12 = hour
  var ampm = 'am'
  if (hour > 12) {
    hour12 = hour -12
    ampm = 'pm'
  }
  var min = a.getMinutes();
  var sec = a.getSeconds();
  var time = `${month} ${date} ${year} ${hour12}:${min}:${sec} ${ampm}`;
  return time;
}
}).catch(function (err) {
	// There was an error
	console.warn('Something went wrong.', err);
});


