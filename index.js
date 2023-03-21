const returnFirstTwoDrivers = function(driversNames) {
    const driversNamesClone = [...driversNames];
    return [driversNamesClone[0], driversNamesClone[1]] ; 
}

const returnLastTwoDrivers = function(driversNames) {
    const driversNamesClone = [...driversNames];
    return [driversNamesClone[driversNamesClone.length-2], driversNamesClone[driversNamesClone.length-1]] ; 
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(fare) {
    return multiplier => fare * multiplier; 
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(driversNames, driversToSelect) {
    if (driversToSelect === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(driversNames); }
    else if (driversToSelect === returnLastTwoDrivers) {
        return returnLastTwoDrivers(driversNames); }
    }

