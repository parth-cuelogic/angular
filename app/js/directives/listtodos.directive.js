app.directive('listTodo', function () {
    return {
        restrict: 'EA',
        template: `<tr>
                    <td>{{todo.id}}</td>
                    <td>{{todo.name}}</td>
                    <td>{{todo.date | date:'dd/MM/yyyy'}}</td>
                    <td>{{todo.description}}</td>
                    <td>{{todo.categories.join(', ')}}</td>
                    <td class="text-center">
                    <img onclick="document.getElementById('fileUpload').click()" class="img-div" width="35" height="35" ng-src="{{vm.todo.pic?vm.todo.pic:'assets/img/noimg.png'}}">
                    </td>
                    <td>{{todo.isPublic?'Yes':'No'}}</td>
                    <td>{{todo.isCompleted?'Yes':'No'}}</td>
                    <td>
                        <button type="button" class="btn btn-outline-success" ng-click="vm.editTodo(todo.id)"><i class="fa fa-pencil"></i></button>
                        <button type="button" delete-permission ng-attr-title="{{todo.isPublic?'only owner can delete public todos':null}}" class="btn btn-outline-danger" ng-click="vm.openModal(todo.id)"><i class="fa fa-trash"></i></button>
                    </td>
                </tr>`,
        replace: true
    }
})

// 