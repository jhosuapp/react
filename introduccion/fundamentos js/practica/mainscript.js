const getInputCountry = document.getElementById('country');
const getListCountries = document.getElementById('list-items');
const getErrorMessage = document.querySelector('.error');
//REMOVE ACCENTS
const removeAccents = (str) => {
    let strToLoweCase = str.toLowerCase();
    return strToLoweCase.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 
//GET DATA
const conexToApi = async()=>{
    const resp = await fetch('https://restcountries.com/v3.1/all');
    const data = await resp.json();

    const resolveData = await data.map((data)=>{
        const {common} = data.translations.spa;
        return common;
    });

    return resolveData;
}
//RESOLVE PROMISE
conexToApi()
    .then(dataCountry =>{

        const labelFunction = ()=>{
            const getAllLabel = document.querySelectorAll('#list-items label');
            getAllLabel.forEach((data)=>{
                data.remove();
            });  
            setTimeout(()=>{
                const getAllLabelValues = document.querySelectorAll('#list-items label');
                getAllLabelValues.forEach((data)=>{
                    data.addEventListener('click', ()=>{
                        getInputCountry.value = data.getAttribute('data-value');
                        getListCountries.classList.remove('active');
                    });
                });
            }, 500);
        }

        const filterValues = ()=>{
            const valuesToExp =  new RegExp(removeAccents(getInputCountry.value)); 
            const filterData = dataCountry.filter(item =>{
                return valuesToExp.test(removeAccents(item));
            });

            filterData.sort();
            labelFunction();

            if(filterData.length >= 1){
                filterData.forEach((data)=>{
                    let createLabel = document.createElement('label');
                    createLabel.setAttribute('for', data);
                    createLabel.setAttribute('data-value', data);
                    const templateCountries =   `${data}<input type="radio" id="${data}" name="countrySelected">`;
                    createLabel.innerHTML = templateCountries;
                    getListCountries.append(createLabel);
                });
                getErrorMessage.classList.remove('active');
            }else{
                getErrorMessage.classList.add('active');
            }
        }

        getInputCountry.addEventListener('keyup', ()=>{
            filterValues();
            getListCountries.classList.add('active');
        });
        getInputCountry.addEventListener('click', ()=>{
            filterValues();
            getListCountries.classList.toggle('active');
        });

    }).catch(err=>{
        console.log(err);
    });