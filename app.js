
function createElement(type, attr, value){
    element = document.createElement(type);
    element[attr] = value;
    return element;
}

function createButtons(parent){
    buttons = [createElement('buttons', 'textContent', '1'),
                createElement('buttons', 'textContent', '2'),
                createElement('buttons', 'textContent', '3'),
                createElement('buttons', 'textContent', '4'),
                createElement('buttons', 'textContent', '5'),
                createElement('buttons', 'textContent', '6'),
                createElement('buttons', 'textContent', '7'),
                createElement('buttons', 'textContent', '8'),
                createElement('buttons', 'textContent', '9'),
                createElement('buttons', 'textContent', '0'),
                createElement('buttons', 'textContent', '+'),
                createElement('buttons', 'textContent', '-'),
                createElement('buttons', 'textContent', '/'),
                createElement('buttons', 'textContent', '*'),
                createElement('buttons', 'textContent', '.'),
                createElement('buttons', 'textContent', '=')
    ];
    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = "text-center btn btn-primary"
        parent.appendChild(buttons[i]);
    }

}


calculator  = createElement('div', 'className', 'container');
calculator.style.width = '400px';
calculator.style.height = '600px';
calculator.style.backgroundColor = 'lightgray';
createButtons(calculator);
body = document.querySelector('body');
scriptTags = body.children;
body.insertBefore(calculator, scriptTags[0]);

