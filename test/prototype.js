console.clear();

function Person(gname, age){
  this.name = gname;
  this.age = age
}

Person.prototype.walk = function(speed) {
  console.log(speed + 'Km 속도로 걸어갑니다.')
}

var person1 = new Person('소녀시대', 20)
var person2 = new Person('걸스데이', 21)

person1.walk(10)
person2.walk(20)