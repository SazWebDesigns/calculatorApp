
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
                createElement('buttons', 'textContent', '*'),
                createElement('buttons', 'textContent', '/'),
                createElement('buttons', 'textContent', '.'),
                createElement('buttons', 'textContent', '=')
    ];
    for(let i = 0; i < buttons.length; i++){
        buttons[i].className = "text-center btn btn-primary col-xs-3"
    }
    row1 = createElement('div', 'className', 'row col-xs-12');
    row1.appendChild(buttons[9]);
    row1.appendChild(buttons[14]);
    row1.appendChild(buttons[15]);
    row1.appendChild(buttons[10]);
    parent.appendChild(row1);

    row2 = createElement('div', 'className', 'row col-xs-12');
    row2.appendChild(buttons[0]);
    row2.appendChild(buttons[1]);
    row2.appendChild(buttons[2]);
    row2.appendChild(buttons[11]);
    parent.insertBefore(row2, row1);

    row3 = createElement('div', 'className', 'row col-xs-12');
    row3.appendChild(buttons[3]);
    row3.appendChild(buttons[4]);
    row3.appendChild(buttons[5]);
    row3.appendChild(buttons[12]);
    parent.insertBefore(row3, row2);

    row4 = createElement('div', 'className', 'row col-xs-12');
    row4.appendChild(buttons[6]);
    row4.appendChild(buttons[7]);
    row4.appendChild(buttons[8]);
    row4.appendChild(buttons[13]);
    parent.insertBefore(row4, row3);
}


calculator  = createElement('div', 'className', 'container');
calculator.style.width = '400px';
calculator.style.height = '600px';
calculator.style.backgroundColor = 'lightgray';
createButtons(calculator);
body = document.querySelector('body');
scriptTags = body.children;
body.insertBefore(calculator, scriptTags[0]);

