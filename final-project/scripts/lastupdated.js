// wait for the page to load then make changes
document.addEventListener('DOMContentLoaded', function() {
    // update the last modified date and time
    document.querySelector('#lastUpdated').textContent = 'Last Modified ' + document.lastModified;   
 }, false); 
