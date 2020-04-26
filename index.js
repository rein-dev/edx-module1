const express = require('express')
/*  __________________________________________

    Edx; Intro to Node; Module 1 Assignment
    Written in Visual Studio Code
    Date:                   26/04/2020
    Name:                   Reinhardt Schoeman
    Packages installed:     CSVTOJSON from npm
    __________________________________________
*/

const csvData = require('csvtojson')                                // csvtojson module used
const csvFilePath ='./exchange_data/customer-data.xls'              // file path 
const fs = require('fs')                                            // core module for file systems

csvData()
    .fromFile(csvFilePath)                                          // reading of file
    .then((jsonObj) => {                                            // json object created
        const jsonString = JSON.stringify(jsonObj, null, 3)         // (stringify prints data on single line) indent json data with 3 spaces
        fs.writeFile('./client-data.json', jsonString, err => {     // file created and written in root
            if (err) {                                              
                console.log('File writing error', err)              // error handling
            } else {
                console.log('File writing success')                 // success confirmation
            }
        })     
     
})
/*
    In terminal run --> node index.js
    client-data.json created in root
*/

