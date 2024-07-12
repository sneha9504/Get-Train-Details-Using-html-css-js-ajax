let btn = document.querySelector('#submit');

btn.addEventListener('click', async (event) => {
    event.preventDefault();

    const train_no = document.querySelector('#Trainid').value;

    const url = `<Enter your APL url>`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '<Enter your API-key>',
            'x-rapid-api': '<Enter your API-database>'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const mainRes = result;
        console.log(result);
        document.querySelector('#details').innerHTML += `
        <div id = "trainInfo">
        <h1> Details of Train </h1>
            <h3>Train Number : ${mainRes.body[0].trains[0].trainNumber}</h3>
            <h3>Train Name : ${mainRes.body[0].trains[0].trainName}</h3>
            <h3>Train Origin : ${mainRes.body[0].trains[0].origin}</h3>
            <h3>Train Destination : ${mainRes.body[0].trains[0].destination}</h3>
    
        </div>
        `
    } catch (error) {
        console.error(error);
    }


});
