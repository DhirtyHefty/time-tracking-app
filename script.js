const tabs = document.querySelectorAll('.tab');
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

//add event listeners to each tab
tabs.forEach(tab => {
    tab.addEventListener('click', function() {
        // remove active class from all tabs
        tabs.forEach(t = t.classList.remove('active'));

        //add active class to the clicked tab
        this.classList.add('active');

        //get timeframe text
        const timeFrame = this.textContext.toLowerCase();
        console.log('Timeframe selected', timeFrame);
    });
});