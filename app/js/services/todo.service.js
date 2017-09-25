var Todo = (function () {
    var id = 1;
    return function Todo(todo) {
        this.id = id++;
        this.name = todo.name;
        this.categories = todo.categories;
        this.description = todo.description;
        this.date = todo.date ? todo.date : new Date();
        this.isReminder = todo.isReminder;
        this.reminderDate = todo.reminderDate;
        this.isPublic = todo.isPublic;
        this.pic = ''
        this.isCompleted = this.isCompleted;
    }
})();

angular.module('angulardemo').service('TodoService', ['DataService', function (DataService) {
    var Todos = [];

    this.insertTodo = function (todo, userId) {
        let newTodo = new Todo(todo, userId);
        Todos.push(newTodo);
        DataService.updateTodo(userId, newTodo.id);
    }

    this.getUserTodos = function (todoIds) {
        return Todos.filter((todo) => {
            if (todoIds.includes(todo.id) || todo.isPublic) return todo;
        })
        return Todos
    }

    this.getUserTodoByStartEndDate = function (todoIds, startDate, endDate) {
        if (!startDate) {
            startDate = new Date();
        }
        if (!endDate) {
            endDate = new Date();
        }
        return Todos.filter((todo) => {
            if (todoIds.includes(todo.id) || todo.isPublic) {
                if (new Date(todo.date) >= new Date(startDate) && new Date(todo.date) <= new Date(endDate)) {
                    return todo;
                }
            }

        })
    }

    this.updateTodo = function (todo) {
        let index = Todos.findIndex((item) => {
            if (item.id == todo.id) return item;
        })
        Todos.splice(index, 1, todo);
    }

    this.getTodo = function (todoId) {
        return Todos.find((item) => {
            if (item.id == todoId) return item;
        })
    }

    this.deleteTodo = function (userId, todoId) {
        let index = Todos.findIndex((item) => {
            if (item.id == todoId) return item;
        })
        Todos.splice(index, 1);
        DataService.deleteUserTodo(userId, todoId);

    }
    Todos.push(new Todo({
        name: 'asdf',
        categories: ['work'],
        description: '',
        isPublic: true,
        isReminder: false,
        date: new Date().setDate(1)
    }));
    Todos.push(new Todo({
        name: 'zxcds',
        categories: ['work'],
        description: '',
        isPublic: false,
        isReminder: false
    }));
    Todos.push(new Todo({
        name: 'ghhff',
        categories: ['work'],
        description: '',
        isPublic: true,
        isReminder: false
    }));
    Todos.push(new Todo({
        name: 'bopdfsdf',
        categories: ['work', 'other'],
        description: '',
        isPublic: false,
        isReminder: false,
    }));

}])