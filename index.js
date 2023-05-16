function calculate(){
    setInterval(() =>{
        // input birthdate
        let birthdate = new Date(document.getElementById('birthdate').value);
        // get time in milliseconds
        let now =new Date();
        let ageInMs = now.getTime() - birthdate.getTime();

        let ageInSeconds = ageInMs / 1000;
        let ageInMinutes = ageInSeconds / 60;
        let ageInHours = ageInMinutes / 60;
        let ageInDays = ageInHours / 24;
        let ageInMonths = ageInDays / 30.4375;
        let ageInYears = ageInMonths / 12;

        document.querySelector('#years').innerHTML = Math.floor(ageInYears);
        document.querySelector('#months').innerHTML = Math.floor(ageInMonths % 12);
        document.querySelector('#days').innerHTML = Math.floor(ageInDays % 30.4375);
        document.querySelector('#hours').innerHTML = Math.floor(ageInHours % 24);
        document.querySelector('#minutes').innerHTML = Math.floor(ageInMinutes % 60);
        document.querySelector('#seconds').innerHTML = Math.floor(ageInSeconds % 60);
        document.querySelector('#seconds').style.borderBottom = '1px grey solid';
        // calculate age
       
        
    }, 1000);
}
function reset (){
    window.location.reload();
}