

const getImagen = async ()=>{

    try {
        const apiKey = "iNMgJTWR401RoJzxEXFKvYT7O6vYlaSC";	
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${ apiKey }`);
        const { data } = await respuesta.json();
        const { url } =  data[0].images.original;
    
        let createElementImage = document.createElement('img');
        createElementImage.src = url;
    
        document.body.append(createElementImage);
    } catch (error) {
        console.log(error);
    }

}

getImagen();

