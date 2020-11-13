(function() {
    var person = {
        name: 'John doe',
        age: '20',
        greeting: function (greet) {
            console.log(greet + 'I am ' + this.name
                +' and I am' + this.age + ' years old.');
        },

        speak: function (a,b) {
            console.log('I am' + this.name
             + ',' + a, +' ' + b);
        }
    };

    person.greeting('Hi');

    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.greeting = function (greet) {
            console.log(greet + ' I am ' + this.name
             + ' and I am ' + this.age + ' years old.');
        };

        this.speak = function (a,b) {
            console.log('I am ' + this.name + ', ' + a +' ' + b);
        };
    }

    var bob = new Person('bob', '18');
    var alice = new Person('Alice', '17');

    bob.greeting("hello");
    alice.greeting('hi there');

    var grt = bob.greeting;
    grt('Hi');


    grt.call(bob, 'Hi');
    grt.call(alice, 'Hi there');

    var spk = bob.speak;

    spk.apply(bob, ['Good', 'morning']);
    spk.apply(alice, ['Nice', 'day']);

    grt = bob.greeting.bind(bob);
    grt('Bind haha ');

})();