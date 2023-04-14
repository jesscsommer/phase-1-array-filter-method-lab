function findMatching(driverNames, nameToMatch){
    return driverNames.filter((el) => el.toLowerCase()=== nameToMatch.toLowerCase());
}

function fuzzyMatch(driverNames, query){
// count provided letters in the query and use that to get the piece at the beginning in order to match 
    return driverNames.filter((el) => el.toLowerCase().slice(0, query.length) === query.toLowerCase());
}

function matchName(drivers, query){
    return drivers.filter((driverObj) => driverObj.name.toLowerCase() === query.toLowerCase());
}