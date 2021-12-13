//alert("wlecome")

 function restparameters(...names) {
    console.log(names)
}
restparameters(1,2,3,4,5,6,8,9,7,5,4,5,)

let obj={
    name:'yaseen',
    age:'25',
    state:'karnatak',
    country:'india'
}
//let name=obj.name
//console.log(name)
let obj2={...obj}
obj2.name="mustak"
console.log(obj2)
console.log(obj)
let {name,state,country}={...obj}
console.log(name)
console.log(state)

//console.log(obj)



let str=['yaseen','attar',25]


let [s1,,s3]=str
console.log(s1)
console.log(s3)