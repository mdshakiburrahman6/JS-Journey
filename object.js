const student = {
    name: 'Md Shakibur Rahman',
    subject: 'Mern Stack Development',
    class: 'Lavel 1',
}
const keys = Object.keys(student);
// console.log(keys);

for (const key of keys){
    console.log(key + ':' + student[key]);
}