import { debounce } from 'lodash';
import fetchCountries from './fetchCountries'
import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';



const DEBOUNCE_DELAY = 300;
const screachBox = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
let array = []


screachBox.addEventListener('input', debounce(() => {
    onScreachboxInput().catch(() => { return Notify.failure('Oops, there is no country with that name') })
.then(response => {amountOfCountryCheck(response)})
    }, DEBOUNCE_DELAY)
) 

//.catch(() => { return Notify.failure('Oops, there is no country with that name') })

// onScreachboxInput.then(response => {amountOfCountryCheck(response)}.then

function onScreachboxInput(){
    if (screachBox.value.trim() !== '') {
        return countryInfo.innerHTML = '', countryList.innerHTML = '', array = [],fetchCountries(screachBox.value)
    }
    else {
        return countryInfo.innerHTML = '', countryList.innerHTML = '', array = []
    }
}




function amountOfCountryCheck(response) {
    for (let i = 0; i < response.length; i++) {
        if (response.length <= 10) {
            console.log('ll')
            countryList.innerHTML
            return paintingHTML(i, response)   
        }
        else {
            Notify.info("Too many matches found. Please enter a more specific name."); 
            return
        }
    }    
}

function paintingHTML(i, response) {
    if (response.length > 1) {
        for (let index = 0; index < response.length; index++) {
            array.push(
            `<li class="country-wrapper">
                <svg width="70px" height="40px">
                    <image xlink:href="${response[index].flags.svg}" height="40"></image>
                </svg>
                <p>${response[index].name.official}</p>
            </li>`)
            
        }
        countryInfo.innerHTML = '' 
        
        return countryList.insertAdjacentHTML('beforeend', array.join(''))
    }

    else {
        return countryList.innerHTML = '', countryInfo.innerHTML =
        `<svg>
            <image xlink:href="${response[i].flags.svg}" height="100"></image>
        </svg>
        <p>${response[i].name.official}</p>
        <ul>
            <li>Capital: ${response[i].capital[0]}</li>
            <li>Population: ${response[i].population}</li>
            <li>Languages: ${response[i].languages}</li>
        </ul>`
    } 
}





// console.log(debounce)




// fetchCountries(screachBox.value)/




// // fetchCountries(screachBox)

// function listOfCountriesInScreach() {

// }

// listOfCountries 