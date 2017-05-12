
function createElement(type, attr, value){
    element = document.createElement(type);
    element[attr] = value;
    return element;
}

calculator  = createElement('div', 'class', 'container');
body = document.querySelector('body');
scriptTags = body.children;
body.insertBefore(calculator, scriptTags[0]);

