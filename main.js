"use strict"

var date1,
    date2,
    days,
    hrs,
    min,
    leftSec

var dateDiff = function(input) {
    date1 = new Date()
    date2 = new Date(input)
        //Customise date2 for your required future time

    var diff = (date2 - date1) / 1000
    var diff = Math.abs(Math.floor(diff))

    days = Math.floor(diff / (24 * 60 * 60))
    if (days.toString().length <= 1) {
        days = "0" + days
    }
    leftSec = diff - days * 24 * 60 * 60

    hrs = Math.floor(leftSec / (60 * 60))
    if (hrs.toString().length <= 1) {
        hrs = "0" + hrs
    }
    leftSec = leftSec - hrs * 60 * 60

    min = Math.floor(leftSec / (60))
    if (min.toString().length <= 1) {
        min = "0" + min
    }
    leftSec = leftSec - min * 60
    if (leftSec.toString().length <= 1) {
        leftSec = "0" + leftSec
    }

}
var printTime = function(newDate) {
    dateDiff(newDate)
    var cdDays = document.getElementById("cd-days")
    var cdHrs = document.getElementById("cd-hrs")
    var cdMin = document.getElementById("cd-min")
    var cdLeftsec = document.getElementById("cd-leftSec")
    cdDays.innerHTML = days
    cdHrs.innerHTML = hrs
    cdMin.innerHTML = min
    cdLeftsec.innerHTML = leftSec
}

var dateObject = {
    day: '',
    month: '',
    year: ''
}

document.getElementById("newYear").addEventListener("keyup", function() {
    dateObject.year = document.getElementById('newYear').value
})

document.getElementById("newMonth").addEventListener("keyup", function() {
    dateObject.month = document.getElementById('newMonth').value
})

document.getElementById("newDay").addEventListener("keyup", function() {
    dateObject.day = document.getElementById('newDay').value
})

setInterval(function() {
    printTime(dateObject.year + "-" + dateObject.month + "-" + dateObject.day)
}, 1000)
