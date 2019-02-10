import request from 'superagent'

const categoryUrl = 'http://localhost:3000/api/v1'

export function getCategory (){
    return request
    .get(`${categoryUrl}/category`) 
     .then(category => {return category.body})
     .catch(err=>console.log(err)) 
}
export function getCategoryList (name){
    return request
    .get(`${categoryUrl}/category/${name}`) 
     .then(categoryList => {return categoryList.body})
     .catch(err=>console.log(err)) 
}

export function getItemDetails(name, itemName){
    return request
        .get(`${categoryUrl}/category/${name}/${itemName}`)
        .then(detail => {return detail.body})
        .catch(err => console.log(err))
}