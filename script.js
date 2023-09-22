// apprearance of the search bar....
let sr_br=document.querySelector('.srch');




// the variablesssss.... to be fetched in apiiiiii
// wind,humidity,description,temperature...
let wind_val,hum_val,des_val,temp,im_nme,im_m;

im_m=document.getElementById('im_m')
let city,place;


let is_search=false;
function search_bar(){

    let sr_ic=document.querySelector('.sr_ic')

    if(!is_search){
    sr_br.classList.remove('disappear')
    sr_br.classList.add('appear')
    is_search=true;
    console.log('clickkk')
    }
    else{
        sr_br.classList.remove('appear')
        sr_br.classList.add('disappear')
    is_search=false;
    console.log('searching.....')

    serach_weather()
    console.log('unclick')
    }
}



//// accessing the local location.....

function local_loc(){
    console.log('local...')

    // if we have a=cess to location call the get location function or
    // or else load preset value for chennai.....

    if (navigator.geolocation) {
        getlocation()
        // getlocalweather()
    } else { 
        console.log('access denied');
        set_lat_lon(13.067439,80.237617)
    }
}


//   /lattitude and longitude variablesss...
let lat,lon
function getlocation() {
    navigator.geolocation.getCurrentPosition(showposition);
  }

  function showposition(position) {
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    // console.log(lat)
    set_lat_lon(lat,lon)
  }


//  this is to setting the lattitude and longitude from the shoeposition function...
// and fetch it with lat and longi api .....(for laitude and longitude api key....)

 function set_lat_lon(lt,ln){
    lat=lt;
    lon=ln;
    console.log(lat)


    //using the latitude and longitude Api...
// the api key==> http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ebf0e29926cc939f557a936228e1129

    let api1=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0ebf0e29926cc939f557a936228e1129&units=metric`
    fetch_api(api1)

}


let ma=document.querySelector('.ma');
let notfound=document.querySelector('.notfound')

// fetching the apiiiii.....
function fetch_api(api){

    // trying to fetch the api....
    //if not then handle the errors....

    fetch(api)
    .then(response=> response.json())
    .then(json=> {console.log(json)
    
       if(json.cod=="404"){
        console.log('not found...')
        ma.classList.add('none')
        notfound.classList.remove('none')

       
       }
       else{
        notfound.classList.add('none')
        ma.classList.remove('none')
     wind_val=json.wind.speed
    //  console.log(wind_val)

    hum_val=json.main.humidity
    // console.log(hum_val)

    temp=json.main.temp
    // console.log(temp)

    des_val=json.weather[0].description
    // console.log(des_val)

    city=json.name
    // console.log(city)

    im_nme=(json.weather[0].main).toLowerCase();
    console.log(im_nme)

    
    fetchdata()
       }
 })
}





let fol;


// fetching the data....
let wind_=document.querySelector('.win_val') 
let hum_=document.querySelector('.hum_val')   
let place_=document.querySelector('.loc')
let des_=document.querySelector('.des')
let temp_=document.querySelector('.temp')
function fetchdata(){
    
    wind_.textContent=wind_val
    hum_.textContent=hum_val
    place_.textContent=city;
    des_.textContent=des_val
    temp_.textContent=Math.ceil(temp)
    im_m.src=`img/${im_nme}.png`
    if(im_nme=='drizzle' || im_nme=='humidity'){
        im_m.style='zoom:0.92;'
    }

    
 

}

// AIzaSyDdTRBE1FxSJQ9JnwyGv5pH5xKnBe3IN60

// https://maps.googleapis.com/maps/api/geocode/json?latlng=13.010236,80.215652&sensor=true&key=AIzaSyDdTRBE1FxSJQ9JnwyGv5pH5xKnBe3IN60

// finaaly trying to acess the location using local_eather)()
local_loc()

// search for the weather of given input.....

function serach_weather(){
var city_to_find=sr_br.value
let cty=String(city_to_find).toLowerCase().replace(' ','')
console.log(cty)

if(cty){
let api2=`https://api.openweathermap.org/data/2.5/weather?q=${cty}&appid=0ebf0e29926cc939f557a936228e1129&units=metric`
fetch_api(api2)
}

sr_br.value=''
}


if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    let api3=`https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=0ebf0e29926cc939f557a936228e1129&units=metric`
    fetch_api(api3)  
}