console.log("Hola mundo")

let firstName = 'cadena'
const lastname= 4
var isDeveloper =true

console.log(lastname)
//lastname= 'Pepito'
//console.log(lastname)
console.log(firstName)
firstName='Pepito'

console.log(firstName)

//tipos primitivos 
//javascrip tipado debil 
firstName=3
console.log(firstName)

//tipos primitivos
"string"
true ,false
undefined
null
//
const FirstName1='Miguel'
const firstNameWithUpperCase =FirstName1.toUpperCase()

console.log(firstNameWithUpperCase)


const list= []
const anotherList= list.concat(157)

console.log(list[0])
console.log(anotherList)



const persona = {
    name: 'Miguel',
    twitter: '@jhon',
    age: 18,
    links: ['https://midu.tube','http://midu.live']
}


const fild = 'twitter'



console.log(persona.twitter)
console.log(persona.links[0])
console.log(persona[fild])

const sumar = (a,b)=>{
    console.log(a)
    console.log(b)
    return  a + b
}
console.log( sumar(2,2) )



function restar(a,b){
    return a - b
}
restar(1,2)












