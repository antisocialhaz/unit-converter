
let meterFactor = 3.281 
let  literFactor = 0.264 
let kilogramFactor = 2.204 


/*
the Js must listen for clicks
create functions which grab the input value and multiplies and divides subsiquently

*/

let inputEl = document.getElementById("input-el")

let convertBtn = document.getElementById("convert-btn")

let lengthEl = document.getElementById("value1")

let massEl = document.getElementById("value2")

let volumeEl = document.getElementById("value3")



function lengthConversion(){
    const conv1 = (inputEl.value * meterFactor).toFixed(2)
    const conv2 = (inputEl.value/meterFactor).toFixed(2)

    const meterFeet = `${inputEl.value} meters = ${conv1} feet`
    const Feetmeter = `${inputEl.value} feet = ${conv2} meters`
    lengthEl.textContent = `${meterFeet} | ${Feetmeter}`
}

function volumeConversion(){
    const conv3 = (inputEl.value * literFactor).toFixed(2)
    const conv4 = (inputEl.value/literFactor).toFixed(2)

    const litresGallon = `${inputEl.value} liters = ${conv3} gallons`
    const gallonLitres = `${inputEl.value} gallons = ${conv4} liters`
    volumeEl.textContent = `${litresGallon} | ${gallonLitres}`
}

function massConversion() {

const conv5 = (inputEl.value * kilogramFactor).toFixed(2)
const conv6 = (inputEl.value/kilogramFactor).toFixed(2)


    const kilogramPounds = `${inputEl.value} kilograms = ${conv5} pounds`
    const poundKilograms = `${inputEl.value} pounds = ${conv6} kilograms`
    massEl.textContent = `${kilogramPounds} | ${poundKilograms}`
}

convertBtn.addEventListener("click", function(){
    lengthConversion()
    volumeConversion()
    massConversion()
})

