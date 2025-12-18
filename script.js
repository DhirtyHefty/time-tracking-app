let activitiesData = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        // when we get the data, store it in activites.Data = data;
        activitiesData = data
        console.log('Data loaded: ', activitiesData)
    })
    .catch(error => {
        //throw an error
        console.log('Error loading data:', error)
    });
    