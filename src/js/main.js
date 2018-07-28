function myFirstApp(name, age) {
    alert('Привет, меня зовут ' + name + ' и это моя очередная программа!');

    function showSkills() {
        let skills = [
            ' html ',
            ' js',
            ' scc'
        ];

        for (let i = 0; i < skills.length; i++) {
            skills[i]
            console.log('Я владею' + skills + ' !');
        }
    }

    showSkills();

    function checkAge() {
        if (age > 18) {
            document.write('Отлично ' + name + ' так держать!');    
        }
    }

    checkAge();
}

myFirstApp("Mike", 35);