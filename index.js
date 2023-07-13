/*
 * Created on Thu Jul 13 2023
 *
 * Copyright (c) 2023 Roshan Dhabekar
 */

/**
 * @param {double} lat1 - latitude of first location
 * @param {double} long1 - longitude of first location
 * @param {double} lat2- latitude of second location
 * @param {double} long2 - longitude of second location
 * @return {double} distance - description
 */
function calculate(lat1, long1, lat2, long2) {
    const distance = 30;
    let y = lat2 - lat1;
    let x = long2 - long1;
    return Math.sqrt(x * x + y * y);
}

module.exports = calculate