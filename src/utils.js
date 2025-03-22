import axios from "axios";

const TWO_HOURS_IN_MS = 2 * 60 * 60 * 1000;

/**
 * Devuelve en una promesa la entidad consultada a través de la API
 * @param {String} entity Entidad buscada siguiendo el path de Firebase.
 * @returns {Promise} Una promesa que resuelve con los datos o null.
 */
export function get_or_load_data_from(entity) {
    if (!entity || typeof entity !== 'string') {
        return Promise.reject('Invalid entity provided');
    }

    let url = null;

    if (entity.includes('http') || entity.includes('https')) {
        url = entity;
    } else {
        url = `https://machuinka-f6ef7-default-rtdb.firebaseio.com/${entity}.json`;
    }

    // console.log('URL:', url);

    // Verificar si la información ya está almacenada en localStorage
    const storedData = localStorage.getItem(entity);
    if (storedData) {
        let storedDataJson;
        try {
            storedDataJson = JSON.parse(storedData);
        } catch (error) {
            console.error('Error parsing localStorage data:', error);
            localStorage.removeItem(entity); // Eliminar datos corruptos
            storedDataJson = null;
        }

        if (storedDataJson) {
            const { timestamp, data } = storedDataJson;
            const currentTime = new Date().getTime();

            // Verificar si la información almacenada es más reciente que 2 horas
            if (currentTime - timestamp < TWO_HOURS_IN_MS) {
                return Promise.resolve(data);
            } else {
                localStorage.removeItem(entity); // Eliminar datos antiguos
            }
        }
    }

    // Descargar la información de la API si no está almacenada o es más antigua que 2 horas
    return new Promise((resolve, reject) => {
        axios.get(url)
            .then((response) => {
                if (response.status === 200) {
                    const dataToStore = {
                        data: response.data,
                        timestamp: new Date().getTime(),
                    };
                    localStorage.setItem(entity, JSON.stringify(dataToStore));
                    resolve(response.data);
                } else {
                    reject(`API responded with status: ${response.status}`);
                }
            })
            .catch((error) => {
                console.error('Error fetching data from API:', error);
                reject('Failed to fetch data from API');
            });
    });
}

/**
 * Capitaliza la primera letra de una palabra.
 * @param {String} word Palabra a capitalizar.
 * @returns {String} Palabra capitalizada.
 */
export function capitalize(word) {
    if (typeof word === 'string' && word.length) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return word;
}

/**
 * Capitaliza la primera letra de cada palabra en un string.
 * @param {String} sentence Frase o texto a capitalizar.
 * @returns {String} Texto con cada palabra capitalizada.
 */
export function capitalize_each_word(sentence) {
    if (typeof sentence !== 'string' || !sentence.length) {
        return sentence;
    }

    return sentence
        .split(' ') // Divide el string en palabras
        .map(word => capitalize(word)) // Capitaliza cada palabra
        .join(' '); // Une las palabras nuevamente en un string
}

/**
 * Converts a slug string (e.g., "hello-world") into a human-readable format
 * with each word capitalized (e.g., "Hello World").
 *
 * @param {string} slug - The slug string to be converted. It should be a string
 *                        with words separated by hyphens ("-").
 * @returns {string} - The human-readable string with each word capitalized.
 *                     If the input is not a valid string or is empty, it returns the input as is.
 */
export function de_slugify(slug,formatter) {
    if (typeof slug !== 'string' || !slug.length) {
        return slug;
    }

    return (formatter) ? formatter(slug.replace(/-/g, ' ')) : slug.replace(/-/g, ' ');
}

/**
 * Constructs the path to an image file based on the provided filename, directory slug, and format.
 *
 * @param {string} filename - The name of the image file (including extension).
 * @param {string} slug_directory - The slug representing the directory where the image is stored.
 * @param {string} format - The format or subdirectory indicating the image type (e.g., 'thumb', 'review', 'desktop'. 'mobile').
 * @returns {string} The constructed image path as a string.
 */
export function get_image_path(slug_directory,format,filename){
    return '/images/tours/' + slug_directory + '/' + format + '/' + filename;
}

export function simple_markdown_format(text){
    // Convertir títulos (# Título)
    text = text.replace(/^# (.+)$/gm, '<h3 class="fs-5 mb-1">$1</h3>');
  
    // Convertir negritas (**texto**)
    text = text.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  
    // Convertir saltos de línea a <br>
    text = text.replace(/\n/g, '<div class="mb-2"></div>');
  
    return text;
  };


  export function get_whatsapp_url(phone,message){
    const m = (message) ? message : '';
    return `https://api.whatsapp.com/send?phone=${phone.replaceAll(' ','').replaceAll('-','').replaceAll('+','')}&text=${m}`;
    // window.open(url, '_blank');
  }