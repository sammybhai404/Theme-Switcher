console.log("theme switcher");

const ThemeSwitcher = document.getElementById('ThemeSwitcher')

const default_theme = localStorage.getItem('theme') || 'Theme-light';
setTheme(default_theme)



ThemeSwitcher.addEventListener("change", (e) => {
    console.log(e.target.value);
    setTheme(e.target.value);
})


function setTheme(theme) {
    const htmltheme = document.documentElement
    htmltheme.className = theme
    localStorage.setItem('theme', theme)
    ThemeSwitcher.value = theme
}


// navigator.geolocation.getCurrentPosition((position) => {
//     console.log(position);
// })

// function formatAMPM(date) {
//     var hours = date.getHours();
//     var minutes = date.getMinutes();
//     var ampm = hours >= 12 ? 'pm' : 'am';
//     hours = hours % 12;
//     hours = hours ? hours : 12; // the hour '0' should be '12'
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     // var strTime = hours + ':' + minutes + ' ' + ampm;
//     var strTime = hours;
//     return strTime;
// }




// console.log(formatAMPM(new Date));