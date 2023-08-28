// apprearance of the search bar....
let sr_br=document.querySelector('.srch');


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
    console.log('unclick')
    }
}