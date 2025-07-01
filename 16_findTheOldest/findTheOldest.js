const findTheOldest = function(person) {

    person.map(obj => {
        obj.age = ("yearOfDeath" in obj) ? obj.yearOfDeath - obj.yearOfBirth : (2025 - obj.yearOfBirth); 
    });

    const oldestPerson = person.reduce((oldest, currentPerson) => {
        
        if (currentPerson.age > oldest.age) {
            return currentPerson;
        }
        else {
            return oldest;
        }
    }, person[0])

    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
