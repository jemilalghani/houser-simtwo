const altImg= 'https://img.freepik.com/free-vector/pack-of-colorful-houses_23-2147776364.jpg?size=338&ext=jpg';
const INITIAL_STATE={
    name:'',
    address:'',
    city: '',
    state: '',
    zipcode: 0,
    image_url: altImg,
    monthly_mortgage: 0,
    desired_rent: 0
}
const UPDATE_NAME="UPDATE_NAME";
const UPDATE_ADDRESS="UPDATE_ADRESS";
const UPDATE_CITY="UPDATE_CITY";
const UPDATE_STATE="UPDATE_STATE";
const UPDATE_ZIPCODE="UPDATE_ZIPCODE";
const CLEAR="CLEAR";
const UPDATE_IMAGE="UPDATE_IMG";
const UPDATE_MORTGAGE="UPDATE_MORTGAGE";
const UPDATE_RENT="UPDATE_RENT";


function reducer(state=INITIAL_STATE, action){
    switch(action.type){
        case UPDATE_NAME:
            return Object.assign({}, state, {name:action.payload})
        case UPDATE_ADDRESS:
            return Object.assign({}, state, {address:action.payload})
        case UPDATE_CITY:
            return Object.assign({}, state, {city:action.payload})
        case UPDATE_STATE:
            return Object.assign({}, state, {state:action.payload})
        case UPDATE_ZIPCODE:
            return Object.assign({}, state, {zipcode:action.payload})
        case UPDATE_IMAGE:
            return Object.assign({}, state, {image_url:action.payload})
        case UPDATE_MORTGAGE:
            return Object.assign({}, state, {monthly_mortgage:action.payload})
        case UPDATE_RENT:
            return Object.assign({}, state, {desired_rent:action.payload})
        case CLEAR:
            return Object.assign({}, state, {name:'', address:'', city:'', state:'', zipcode:0})
        default: return state
    }
}
export function updateName(name){
    return {
        type: UPDATE_NAME,
        payload:name
    }
}
export function updateAddress(address){
    return {
        type:UPDATE_ADDRESS,
        payload:address
    }
}
export function updateCity(city){
    return {
        type:UPDATE_CITY,
        payload:city
    }
}
export function updateState(state){
    return {
        type:UPDATE_STATE,
        payload:state
    }
}
export function updateZip(zip){
    return {
        type:UPDATE_ZIPCODE,
        payload: zip
    }
}
export function clear(){
    return {
        type:CLEAR
    }
}
export function updateImg(image){
    return {
        type:UPDATE_IMAGE,
        payload:image
    }
}
export function updateMortgage(mortgage){
    return {
        type:UPDATE_MORTGAGE,
        payload:mortgage
    }
}
export function updateRent(rent){
    return {
        type:UPDATE_RENT,
        payload:rent
    }
}
export default reducer;