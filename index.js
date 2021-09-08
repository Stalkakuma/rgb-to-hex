document.querySelector('form').addEventListener('submit', handleSubmit);

function handleSubmit(e) {
     e.preventDefault();
    let input = document.querySelector('input')
    if (input.value != '') {
      const conv =  rgbToHex(input.value)
        showResult(conv)
    }
    else {
        alert('No value = no conversion')
    }
}

function showResult(result) {
    document.querySelector('.result').innerHTML = "";
    let div = document.querySelector('.result');
    let h1 = document.createElement('h1');

    h1.innerHTML = 'Hex value is ' + result;
    div.appendChild(h1);
}

function rgbToHex(rgb) {
    let sep = rgb.indexOf(",") > -1 ? "," : " ";
    rgb = rgb.split(sep);

    let r = (+rgb[0]).toString(16),
        g = (+rgb[1]).toString(16),
        b = (+rgb[2]).toString(16);

    if(r.length == 1)
        r = '0' + r;
    if (g.length == 1)
        g = '0' + g;
    if (b.length == 1)
        b = '0' + b;
    
        return '#' + r + g + b;
}
