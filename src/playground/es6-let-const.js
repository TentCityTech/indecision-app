var nameVar = 'Josh';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Maria';
nameLet = 'Jayden';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameConst', nameConst);

function getPetName () {
    let petName = 'Hal';
    return petName;
}

const petName = getPetName();
console.log(petName)

// Block scoping

const fullName = 'Maria Hoagland';
let firstName;
if(fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName)
}

console.log(firstName);