let Usuario= prompt("Hola ingresa tu nombre para logearte");
alert("Bienvenido/a " + Usuario);

const Mascotas = [
    { id: 1, nombre: "tito", edad: "cachorro", genero: "macho", tipo: "perro"},
    { id: 2, nombre: "juana", edad: "adulto", genero: "hembra", tipo: "perro"},
    { id: 3, nombre: "roco", edad: "adulto mayor", genero: "macho", tipo: "perro"},
    { id: 4, nombre: "pelusa", edad: "cachorro", genero: "hembra", tipo: "gato"},
    { id: 5, nombre: "luna", edad: "adulto", genero: "hembra", tipo: "gato"},
    { id: 6, nombre: "atom", edad: "cachorro", genero: "macho", tipo: "gato"},
];
console.table(Mascotas);

function agregar (id, nombre, edad, genero, tipo){
    this.id = id;
   this.nombre = nombre;
   this.edad = edad;
   this.genero = genero;
   this.tipo = tipo;
}


let index= prompt ("¡Hola, Bienvenido a PawMatch! \n ¿Qué le gustaría realizar? Ingresá la opción que corresponda \n 1 - Adoptar una mascota \n 2 - Buscar una mascota \n 3 - Publicar una mascota \n 0 - Salir");

while (index != "0"){

    switch(index){

        case "1": 

            alert("Ellos son los que estan esperando un hogar: \n Tito: Perro cachorro \n Juana: Perra adulta \n Roco: Perro adulto mayor \n Pelusa: Gata cachorra \n Luna: Gata adulta \n Atom: Gato cachorro");

            let adoptado=alert(prompt("Ingresa el nombre correspondiente a la mascota que deseas adoptar en minúscula \n 0 - Salir"));

            if (adoptado != "0"){

                alert("Gracias por adoptar! Nos estaremos comunicando para finalizar la adopción, por favor a continuación completa los datos")

                let adoptante=prompt("Por favor indicanos tu nombre");

                let mailadoptante= prompt("Por favor ingresa tu emal");

                alert("En minutos te llegará el formulario al mail " + mailadoptante);

                console.log( "El adoptante es " + adoptante + " y su email es " + mailadoptante);
            
            break;

            } else {
                alert("Hasta la próxima, te esperamos!");
            }
        
        break;

        case "2": 

            let buscar= prompt("Ingresa que estás buscando \n Nosotros te ayudamos, las palabras clave pueden ser Perro, Gato, Cachorro, Adulto, Adulto mayor, Hembra, Macho o si buscas a tu mascota, su nombre, por favor ingresa la palabra en minúsculas");

            const resultado = Mascotas.filter ((el) =>
            el.includes(buscar))

            console.log("Estos son los resultados de tu búsqueda " + resultado);

        break;

        case "3":

            let nombreNuevaMascota= prompt("Ingrese el nombre de la mascota \n En caso de no tener o no saberlo indíquele uno");
            let edadNuevaMascota= prompt("Ingrese si la mascota es cachorro, adulto o adulto mayor \n Escriba la opcion que corresponde en minúscula");
            let generoNuevaMascota= prompt("Ingrese si la mascota es hembra o macho \n Escriba la opcion que corresponde en minúscula");
            let tipoNuevaMascota= prompt("Ingrese si la mascota es gato o perro \n Escriba la opcion que corresponde en minúscula");

            const publicado= [nombreNuevaMascota,edadNuevaMascota, generoNuevaMascota, tipoNuevaMascota];
            Mascotas.push(publicado);

            alert("Perfecto, la mascota " + nombreNuevaMascota + " " + edadNuevaMascota + " " + generoNuevaMascota + " " + tipoNuevaMascota + " fue publicada con éxito, ante cualquier novedad nos estaremos comunicando, por favor a continuación completa los datos");
            let contacto=prompt("Por favor indicanos tu nombre");
            let mailcontacto= prompt("Por favor ingresa tu emal");
            console.log( "El contacto es " + contacto + " y su email es " + mailcontacto);
        
        break;

        case "0":
            alert("Hasta la próxima, te esperamos!");
        break;

        default:
            alert("Opción no válida, por favor vuelva a intentarlo");
        break;
    }

}







