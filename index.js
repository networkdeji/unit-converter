let inputEl = document.getElementById("input-el")
let topHalf = document.getElementById("top-half")
let secondHalf = document.getElementById("second-half")
const convertBtn = document.getElementById("main-btn")
const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")


const darkMode = function(){
    topHalf.style.background = "deepblue"
    secondHalf.style.background = "navyblue"
}
convertBtn.onclick = function(){
    let mainInput = Number(inputEl.value)
   
    function convertToLength(){
        let toFeet = mainInput * 0.3048
        let toMeter = mainInput * 3.28084
        console.log(toFeet,toMeter)
        length.innerHTML = ` <p id="mass"> 
        ${mainInput} meters = ${toFeet.toFixed(3)} pounds | ${mainInput} feet = ${toMeter.toFixed(3)} meters
                                </p>`
    }

    function convertToVolume(){
        let toGallons = mainInput * 3.78541
        let toLiters = mainInput / 3.785
        console.log(toGallons,toLiters)
        volume.innerHTML = ` <p id="volume">${mainInput} liters = ${toGallons.toFixed(3)} gallons | ${mainInput} gallons = ${toLiters.toFixed(3)} liters
                                </p>`
    }

    function convertToMass(){
        let toPounds = mainInput * 2.20462
        let toKilos = mainInput / 2.205
        mass.innerHTML = ` <p id="mass">${mainInput} kilos = ${toPounds.toFixed(3)} pounds | ${mainInput} pounds = ${toKilos.toFixed(3)} kilos   
                            </p>`
    }

    if (Number.isNaN(mainInput)){
        window.alert("Kindly input a valid number")
    }else{

        console.log("i will run")
        convertToLength()
        convertToVolume()
        convertToMass()
        darkMode()
        // inputEl.value = ""  To clear out the input field after converting the number
    }
}

