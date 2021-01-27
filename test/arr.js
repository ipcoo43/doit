console.clear()
var names = ['소녀시대', '걸스데이', '티아라'];

var users = [
  {name:'소녀시대', age:20},
  {name:'걸스데이', age:22}
]

users.push({name:'티아라', age:21})

console.log('사용자 수 : ' + users.length)

for (var i = 0; i < users.length; i++) {
  console.log(users[i].name, ':' ,users[i].age)
}
