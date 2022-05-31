const students = [
    {id: 21, name:'omor'},
    {id: 31, name:'mannaaaa'},
    {id: 41, name:'moyouri'},
    {id: 71, name:'deepjol'}
]

var student = students.map(function(Element){
    for(let i = 0; i < students.length; i++){
        var arr = students[i];
        var name = arr.name;
        return name;
    }
    // return name;
})
console.log(student);


const name = students.map(s => s.name);
console.log(name);
const ids = students.map(s => s.id);
console.log(ids);
const bigger = students.filter(s => s.id>40);
console.log(bigger);
const biggerOne = students.find(s => s.id>40);
console.log(biggerOne);