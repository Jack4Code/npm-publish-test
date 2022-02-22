var pjson = require('./package.json')

function printVersion(){
    console.log('Version: ' + pjson.version);
}

function firstFeature(){
    console.log('First feature!');
}

function secondFeature(){
    console.log('Second feature!');
}

function thirdFeature(){
    console.log('Third feature! Modified!');
}

function firstBug(){
    console.log('First bug fixed!');
}

module.exports = { printVersion, firstFeature, secondFeature, thirdFeature, firstBug };