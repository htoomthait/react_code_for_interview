

let mode = import.meta.env.VITE_MODE 
let backendUrl = '';

if(mode == 'local'){
    backendUrl = import.meta.env.VITE_LOCAL_BACKEND_URL;
}
else if(mode == 'staging'){
    backendUrl = import.meta.env.VITE_STAGING_BACKEND_URL;
}
else if(mode == 'production'){
    backendUrl = import.meta.env.VITE_PRODUCTION_BACKEND_URL;
}
else{
    backendUrl = import.meta.env.VITE_PRODUCTION_BACKEND_URL;
}


export {mode, backendUrl};