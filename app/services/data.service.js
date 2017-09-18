var User = (function () {
    var id = 1;

    return function User(username, password, email, role, assigned) {
        this.id = id++;
        this.username = username;
        this.password = password;
        this.email = email;
        this.role = role;
        this.assigned = assigned;
    }

})();

app.service('DataService', function () {
    this.users = [];

    this.createDefaultUsers = function () {

        //students
        this.users.push(new User('parth', '123', 'p@g.com', 'student', [12, 14, 15]));
        this.users.push(new User('neel', '123', 'n@g.com', 'student', [13, 14, 15]));
        this.users.push(new User('kiran', '123', 'k@g.com', 'student', [12]));
        this.users.push(new User('as', '123', 'k@g.com', 'student', [19, 18]));
        this.users.push(new User('bs', '123', 'k@g.com', 'student', [17]));
        this.users.push(new User('cs', '123', 'k@g.com', 'student', [16, 17]));
        this.users.push(new User('ds', '123', 'k@g.com', 'student'));
        this.users.push(new User('es', '123', 'k@g.com', 'student'));
        this.users.push(new User('xs', '123', 'k@g.com', 'student'));
        this.users.push(new User('ys', '123', 'k@g.com', 'student'));
        this.users.push(new User('zs', '123', 'k@g.com', 'student'));

        //teachers
        this.users.push(new User('himanshu', '123', 'h@g.com', 'teacher', [1, 3]));
        this.users.push(new User('xt', '123', 'h@g.com', 'teacher', [2]));
        this.users.push(new User('yt', '123', 'h@g.com', 'teacher', [1, 2]));
        this.users.push(new User('zt', '123', 'h@g.com', 'teacher', [1, 2]));
        this.users.push(new User('at', '123', 'h@g.com', 'teacher', [6]));
        this.users.push(new User('bt', '123', 'h@g.com', 'teacher', [5, 6]));
        this.users.push(new User('ct', '123', 'h@g.com', 'teacher', [4]));
        this.users.push(new User('dt', '123', 's@g.com', 'student', [4]));

    }

    this.getAssignedUsers = function (assigned, role) {
        if (!assigned || !role) return undefined;

        if (role == "student") role = "teacher";
        else role = "student";

        return this.users.filter((item) => {
            if (assigned.includes(item.id) && item.role == role) return item;
        });
    }

    this.get = function (x) {
        return this.users;
    }

    this.login = function (user) {
        if (!user) return undefined;

        return this.users.find((item) => {
            if (item.username === user.username && item.password === user.password) return item;
        })
    }

    this.updateUser = function (user) {
        let users = this.users;
        let indexofUser = users.findIndex((item) => {
            if (item.id == user.id) return item;
        })

        this.users = users.splice(indexofUser, 1);
        this.users.push(user);
        return user;
    }

    this.register = function (user) {
        if (!user) return false;
        this.users.push(user);
        return true;
    }

});