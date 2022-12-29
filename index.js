const users = [
    { "name": "하윤", "gender": "female", "age": 23, "birth": "2000-3-25" },
    { "name": "예준", "gender": "male", "age": 24, "birth": "1999-4-4" },
    { "name": "도윤", "gender": "female", "age": 22, "birth": "2001-5-12" },
    { "name": "민준", "gender": "male", "age": 24, "birth": "1999-4-14" },
    { "name": "서준", "gender": "male", "age": 23, "birth": "2000-10-27" }
];

function Q1(users) {
    const sum = users.reduce(
        (acc,cur) => { return acc += cur.age }, 0
        );
    const num = Object.keys(users).length;
    return sum/num;
}
console.log(Q1(users))

function Q2(users) {
    const result = users.filter(
        user => user.age > 23
        );
    return result;
}
console.log(Q2(users))

function Q3(users) {
    const step1 = users.map(
      user => user.name + '[' + user.age + '/' + user.gender + ']'
    );
    const step2 = JSON.stringify(step1)
      .replace(/female/gi, '여')
      .replace(/male/gi, '남')
      .replace(/"/gi, '');
    const result = step2.slice(1,step2.length - 1);
    return result;
}
console.log(Q3(users))

function Q4(users) {
    return users.sort(
        (a,b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0
        );
}
console.log(Q4(users))

function Q5(users) {
    return users.sort(
        (a, b) => b.age - a.age
        );
}
console.log(Q5(users))

function Q6(users) {
    return users.sort(
        (a, b) => new Date(a.birth) - new Date(b.birth)
        );
}
console.log(Q6(users))