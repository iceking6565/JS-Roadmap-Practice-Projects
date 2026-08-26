function createGreeting(firstName, lastName, timeOfDay){
    function formatName(firstName, lastName){
        return firstName + ' ' + lastName;
    }

    function getGreeting(timeOfDay){
        if (timeOfDay === 'morning'){
            let morning = "Good morning, ";
            return morning;
        }else if (timeOfDay === 'afternoon'){
            let afternoon = 'Good afternoon, ';
            return afternoon;
        }else if (timeOfDay === 'evening'){
            let evening = 'Good evening, ';
            return evening;
        }else{
            return 'No time of day detected, '
        }
    }

    return getGreeting(timeOfDay) + formatName(firstName, lastName)
}

console.log(createGreeting('Ava', 'Stone', 'morning'));
console.log(createGreeting('Noah', 'Kim', 'evening'));
console.log(createGreeting('Mina', 'Patel', 'afternoon'));