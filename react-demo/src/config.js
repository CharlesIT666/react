
export let API
if(process.env.NODE_ENV==='prodcution') {
    API=process.env.REACT_APP_PRODUCTION_API_URL
}
else if (process.env.NODE_ENV==='development') {
    API=process.env.REACT_APP_DEVLOPMENT_API_URL
}