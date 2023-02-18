/* Write your solutions here to get the data from https://covid19api.com (find the API URL on that page - connect to the 'summary' endpoint.)
*  Use this text in order to save time: 
*   
*  COVID-19: Worldwide Statistics
*
*  There is a total of XXX confirmed COVID-19 cases worldwide. So far, XXX people have died because of COVID-19. 
*  Data is updated automatically once a day. Data updated on XXX. NOTE: (Replace XXX with values from API).
*/

function naslov() {
    const mparagraf = document.createElement('p');
    const text = document.createTextNode('COVID1-19: Worldwide Statistics');
    mparagraf.appendChild(text);

    const element = document.getElementById('wrapper');
    element.insertBefore(mparagraf, element.firstChild);



};

const url = "https://api.covid19api.com/summary";
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new error(`Response status: ${response.status}`)
        }
        return response.json()
    })
    .then(data => ShowData(data))
    .catch(error => ShowError(error))

function ShowData(data) {
    // let tab=document.getElementById("covid-data");
  
    let mtab = `<tr>
    <th>Country</th>
    <th>Total cases</th>
    <th>Total death</th>
    </tr>`;
    for (i of data.Countries) {

        mtab = mtab + `
        <tr>
        <td>${i.Country}</td>
        <td>${i.TotalConfirmed}</td>
        <td>${i.TotalDeaths}</td>
        </tr>`;
    }

    document.getElementById("covid-data").innerHTML = mtab;
    naslov();
  ;
}

function ShowError(error) {
    console.log(error);

    let merror = document.getElementById("error-message")
    merror.style.display = 'block';
    merror.innerHTML = `${error}`;
}