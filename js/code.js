'use strict';

$(document).ready(function () {
    var total = 0;

    $('button').click(function (event) {

        var tbody = $('tbody');
        var prod = $('input[name="producto"]');
        var precio = $('input[name="precio"]');
        var totalElem = $('span');

        if(parseFloat(precio.val()))
            {
                var nuevaFila = $('<tr></tr>');
                var boton = $('<button></button>');

                boton.click(function (event) {
                    total -= parseFloat($(this).parent().prev().text());
                    $(this).parent().parent().remove();

                    if(tbody.children.length < 1)
                        total = 0;
                    totalElem.text('$'+total.toFixed(2));
                });
                boton.text('x');


                nuevaFila.html('<td>' + prod.val() + '</td>' + '<td>' + parseFloat(precio.val()).toFixed(2) + '</td><td></td>');

                boton.appendTo(nuevaFila.children().last());

                nuevaFila.appendTo(tbody);

                total += parseFloat(precio.val());
                totalElem.text('$'+total.toFixed(2));

                prod.val('');
                prod.focus();
                precio.val('');
            }else{
                alert('Ingresa un número válido');
                console.log('Ingresa un número válido');
            }

    });
});
