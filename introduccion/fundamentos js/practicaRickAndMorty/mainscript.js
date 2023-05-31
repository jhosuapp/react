//VARIABLES GLOBALES
const getForm = document.querySelector('#form-search');
const getBtnSubmit = document.querySelector('#form-search #search-btn');
const app = document.querySelector('#app');
let url = `https://rickandmortyapi.com/api/character/?page=1`;

//================
//TEMPLATE STRING
//================
const TemplateString = (cImgSrc, cName, cStatus, cSpecies)=>{
    const createDiv = document.createElement('div');
    const stringHtml = `
                        <picture>
                            <img src="${cImgSrc}">
                        </picture>                        
                        <h5>${cName}</h5>
                        <p>Status: ${cStatus}</p>
                        <p>Species: ${cSpecies}</p>
                        `;
    createDiv.innerHTML += stringHtml;
    return createDiv;
}
//================
//CONEXIÓN AL API
//================
const ConexToApi = async (url)=>{
    const resp = await fetch(url);
    const data = await resp.json();

    return data; //se retorna la data resuelta
}
//================
//SE RESUELVE LA PROMESA
//================
ConexToApi(url)
    .then(data =>{
        const { results } = data;
        
        results.forEach((info)=>{
            const { image, name, status, species } = info;
            app.append(TemplateString(image, name, status, species));
        });

    }).catch(err=>{ console.log(err); });

//================
//FUNCIÓN PARA HACER LA PETICIÓN AL API
//================
const EventApi = ()=>{
    ConexToApi(url)
        .then(data =>{
            const { results, info } = data;
            console.log(results);
        }).catch(err=>{ console.log(err); });
}

//================
//SE EJECUTA EL EVENTO CLICK EN EL SUBMIT
//================
getForm.addEventListener('submit', (e)=>{
    e.preventDefault();
});

