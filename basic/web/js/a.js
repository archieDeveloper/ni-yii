$(document).ready(function() {

    var controller = (function() {
        var Controller = function () {

        };

        Controller.prototype.callAjax = function(contoller, data, callback, err) {
            $.ajax({
                dataType : "json",
                type     : "POST",
                data     : data,
                url      : '/' + contoller + '.html',
                success  : callback,
                error    : err
            });
        };

        return new Controller;
    })();

    var data = {
        id: 1,
        title: 'new title'
    };

    var callback = function(result) {
        console.log(result);
    };
    controller.callAjax('admin/portfolio/update-title', data, callback, callback);

});