// Code your solution in this file!
const returnFirstTwoDrivers = function(driversArray){
    let newArray = []
    return newArray = driversArray.slice(0,2)
}

const returnLastTwoDrivers = function(driversArray){
    let newArray = []
    return newArray = driversArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    return function(fare){
        return fare * multiplier
    }
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare)
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, driversFunction){
    return driversFunction(arrayOfDrivers)
}