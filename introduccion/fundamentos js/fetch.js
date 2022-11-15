const apiKey = "iNMgJTWR401RoJzxEXFKvYT7O6vYlaSC";	
const peticion = fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${ apiKey }`)

peticion
    .then(res => res.json())
    .then( ({data}) => {
        // const [primerDato] = data;
        // console.log(primerDato);
        const {url} = data[0].images.original;
        
        let createNewImage = document.createElement('img');
        createNewImage.src = url;

        document.body.append(createNewImage);

    }).catch(error =>{
        console.log(error);
    });

