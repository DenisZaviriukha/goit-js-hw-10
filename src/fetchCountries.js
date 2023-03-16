import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';

array = []

export default function fetchCountries(name) {
    return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`).then(res => {
        if (res.ok) {
            return res.json()
        }
        else {
            Notify.failure('Oops, there is no country with that name') 
        }
    })
        // .then(response => {  }).catch(() => { })
        
} 

// https://restcountries.com/v2/{service}?fields={field},{field},{field}

