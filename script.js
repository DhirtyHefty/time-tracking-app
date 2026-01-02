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

    const tabs = document.querySelectorAll('.tab');

//add event listeners to each tab
tabs.forEach(function(tab) {
    tab.addEventListener('click', function(event) {
        // remove active class from all tabs
        tabs.forEach(function(t) {
            t.classList.remove('active');
        });

        //add active class to the clicked tab
        event.target.classList.add('active');

        //get timeframe text
        const timeFrame = event.target.textContent.trim().toLowerCase();
        console.log('Timeframe selected:', timeFrame);

        updateCards(timeFrame);
    });
});

   //function to update all activity cards with new data
    function updateCards(timeFrame) {
        console.log('Updating cards for:', timeFrame);

        //loop through each activity in the data
        activitiesData.forEach(activity => {
            console.log('processing:', activity.title);

            //get current and previous hours
            const current = activity.timeframes[timeFrame].current;
            const previous = activity.timeframes[timeFrame].previous;

            console.log(`${activity.title} - Current: ${current}hrs, Previous: ${previous}hrs`);
        });
    }