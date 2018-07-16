initState = {
    name: '',
    address:'',
    city:'',
    state:'',
    zipcode:0,
    image_url:'',
    mortgage:'',
    rent:''
}
 const UPDATE_NAME = "UPDATE_NAME";
 const UPDATE_ADDRESS = "UPDATE_ADDRESS";
 const UPDATE_CITY = "UPDATE_CITY";
 const UPDATE_STATE = "UPDATE_STATE";
 const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
 const UPDATE_IMAGE_URL = "UPDATE_IMAGE_URL";
 const UPDATE_MORTGAGE = "UPDATE_MORTGAGE";
 const UPDATE_RENT = "UPDATE_RENT";


 export default reducer = (state = initState , action) => {
     switch (action.type) {
         case UPDATE_NAME:
             return {
            ...state,
            name: action.payload
     };
     case UPDATE_ADDRESS:
             return {
            ...state,
            address: action.payload
     };
     case UPDATE_CITY:
             return {
            ...state,
            city: action.payload
     };
     case UPDATE_STATE:
             return {
            ...state,
            state: action.payload
     };
     case UPDATE_ZIPCODE:
             return {
            ...state,
            zipcode: action.payload
     };
     case UPDATE_IMAGE_URL:
             return {
            ...state,
            image_url: action.payload
     };
     case UPDATE_MORTGAGE:
             return {
            ...state,
            mortgage: action.payload
     };
     case UPDATE_RENT:
             return {
            ...state,
            rent: action.payload
     };
     default:
             return state
     }
 }
