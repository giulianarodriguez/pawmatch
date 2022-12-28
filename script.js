// Esta vez opte por hacer esta parte de la página que la vez pasada me quedo colgada y voy a intentar unir todo para la proxima pre entrega usando los elementos en la tienda y las fotos de las mascotas, mas visual y mas lindo


//Se que todavia no esta terminado y tiene errores, pero por si lo ves antes de que lo arregle/ termine prefiero que lo veas asi y me digas que es lo que esta mal o le falta 


function Producto ( nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = parseFloat (precio);
        this.stock = parseFloat (stock);
}

function filtrarPorNombre (arr, filtro){
    return arr.filter((productos) =>{
        return productos.nombre.includes(filtro);
    });
}


const productos = [ 
    {nombre: "Collares", precio: 1600, stock: 50},
    {nombre: "Piedritas para gato", precio: 900, stock: 60},
    {nombre: "Camas para perros", precio: 4200, stock: 20},
    {nombre: "Comederos", precio: 1400, stock: 26},
];


let index= prompt ("¡Hola, Bienvenido a PawMatch! \n ¿Qué le gustaría realizar? Ingresá la opción que corresponda \n 1 - Ver productos \n 2 - Buscar un producto \n 0 - Salir");

while (index != "0") { 

    switch (index) {
        case "1": 
        let tienda= prompt(" 1 - Collares $1600 \n 2 - Piedritas para gato $900 \n 3- Camas para perros $4200 \n 4- Comederos $1400 \n  Ingresa el número que corresponde al producto o 0 para salir");

        while (tienda !="0"){
            switch (tienda){
                case "1":
                    cantidad = parseInt (prompt("¿Cuántos collares desea llevar?")); 
                    alert("Se agregaron " + cantidad + " collares al carrito");
                    if (resultado <= cantidad) {
                        total += (cantidad * collares.precio);
                        alert("El valor de su carrito es de $" + total);
                    }
                break;  
                case "2":
                    cantidad = parseInt (prompt("¿Cuántas piedritas para gatos desea llevar?")); 
                    alert("Se agregaron " + cantidad + " piedritas para gatos al carrito");
                    if (resultado <= cantidad) {
                        total += (cantidad * piedritas.precio);
                        alert("El valor de su carrito es de $" + total);
                    }
                break;    
                case "3":
                    cantidad = parseInt (prompt("¿Cuántas camas para perros desea llevar?")); 
                    alert("Se agregaron " + cantidad + " camas de perro al carrito");
                    if (resultado <= cantidad) {
                        total += (cantidad * camas.precio);
                        alert("El valor de su carrito es de $" + total);
                    }
                break;      
                case "4":
                    cantidad = parseInt (prompt("¿Cuántos comederos desea llevar?")); 
                    alert("Se agregaron " + cantidad + " comederos al carrito");
                    if (resultado <= cantidad) {
                        total += (cantidad * comederos.precio);
                        alert("El valor de su carrito es de $" + total);
                    }
                break;    
                default: alert("Producto no disponible");
            }
            
        }

        case "2":
            let buscar = prompt("Ingresa el nombre del producto");

            const filtrado= filtrarPorNombre (productos, buscar);

            filtrarPorNombre();
            console.log(filtrado);
            break;

        case "0":
            alert("Hasta la próxima, te esperamos!");
            break;

        default:
            alert("Opción no válida, por favor vuelva a intentarlo");
            break;
    }


}








