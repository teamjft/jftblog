/**
 * Created by Manish Kumar Bharti on 21/9/14.
 */

angular.module('jftblogApp')
    .directive("encodeAsHtml", function ($compile, $timeout) {
        return {
            template: '<div></div>',
            scope: {
                rawHtml: '=encodeAsHtml'
            },
            link: function (scope, elem, attrs) {
                scope.$watch('rawHtml', function (value) {
                    if (!value) {
                        return;
                    }

                    var newElem = $compile(value)(scope.$parent);
                    elem.contents().remove();
                    elem.append(newElem);
                });
            }
        };
    });