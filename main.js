var dateDiff = function(input) {
    var date1 = new Date()
    var date2 = new Date(input)
        //Customise date2 for your required future time

    var diff = (date2 - date1) / 1000
    var diff = Math.abs(Math.floor(diff))

    days = Math.floor(diff / (24 * 60 * 60))
    leftSec = diff - days * 24 * 60 * 60

    hrs = Math.floor(leftSec / (60 * 60))
    leftSec = leftSec - hrs * 60 * 60

    min = Math.floor(leftSec / (60))
    leftSec = leftSec - min * 60

}
var printTime = function() {
    dateDiff('2016-09-22')
    var cdDays = document.getElementById("cd-days")
    var cdHrs = document.getElementById("cd-hrs")
    var cdMin = document.getElementById("cd-min")
    var cdLeftsec = document.getElementById("cd-leftSec")
    cdDays.innerHTML = days
    cdHrs.innerHTML = hrs
    cdMin.innerHTML = min
    cdLeftsec.innerHTML = leftSec
}

setInterval(printTime, 1000)
