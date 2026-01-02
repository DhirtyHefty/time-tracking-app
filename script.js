let activitiesData = [];

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        activitiesData = data;
        console.log('Data loaded: ', activitiesData);
        
        // Set Weekly as default
        updateCards('weekly');
        
        // Make Weekly tab active visually
        tabs.forEach(function(tab) {
            if (tab.textContent.trim().toLowerCase() === 'weekly') {
                tab.classList.add('active');
            }
        });
    })
    .catch(error => {
        console.log('Error loading data:', error);
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
// function to update all activity cards with new data
function updateCards(timeFrame) {
    console.log('Updating cards for:', timeFrame);

    //loop through each activity in the data
    activitiesData.forEach(function(activity) {
        console.log('processing:', activity.title);

        //get current and previous hours
        const current = activity.timeframes[timeFrame].current;
        const previous = activity.timeframes[timeFrame].previous;

        console.log(`${activity.title} - Current: ${current}hrs, Previous: ${previous}hrs`);

        // Find the card in the HTML
        const activityClass = activity.title.toLowerCase().replace(' ', '-');
        const card = document.querySelector('.' + activityClass);

        if (card) {
            // Update the hours
            const hoursElement = card.querySelector('.hours');
            hoursElement.textContent = current + 'hrs';

            // Update the previous text
            const previousElement = card.querySelector('.previous');
            
            // Change text based on timeframe
            let timeframeText = '';
            if (timeFrame === 'daily') {
                timeframeText = 'Yesterday';
            } else if (timeFrame === 'weekly') {
                timeframeText = 'Last Week';
            } else {
                timeframeText = 'Last Month';
            }
            
            previousElement.textContent = timeframeText + ' - ' + previous + 'hrs';
        }
    });
}