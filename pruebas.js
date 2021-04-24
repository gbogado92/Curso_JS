
/*
class Producto {
    constructor (nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto () {
        return `El producto ${this.nombre} tiene un precio de ${this.precio}`;
    }
}

const Producto2 = new Producto ("Monitor led", 40000);
const Producto3 = new Producto ("Teclado", 13000);

// Herencia

class Libro extends Producto {
    constructor(nombre, precio, codigo) {
        super(nombre, precio);
        this.codigo = codigo;
    }

    formatearProducto () {
        return `${super.formatearProducto()} y su código es: ${this.codigo}`;
    }
}

const libro = new Libro("Javascript la revolución", 120, 12373625772);

console.log(libro.formatearProducto());
console.log(Producto2.formatearProducto());



class Libro {
    constructor (nombre, autor, precio) {
        this.nombre = nombre;
        this.autor = autor;
        this.precio = precio;
    }
    descripción() {
        return `El libro "${this.nombre}" fue escrito por ${this.autor}, y su precio es de $${this.precio} + IVA`;
    }

    obtenerPrecio(){
        console.log(`${this.precio}`)
    }
}

const libro = new Libro("El tren", "Diego Roldan", 220);

class Libro2 extends Libro {
    constructor(nombre, autor, precio, codigo){
        super(nombre, autor, precio);
        this.codigo = codigo;
    }
    descripción(){
        return `${super.descripción()}. También lo podes encontrar con su código: ${this.codigo}`;
    }

    obtenerPrecio(){
        super.obtenerPrecio();
        console.log("Y si hay en existencia");
    }
}

const libro2 = new Libro2("El principito", "Jorge López", 330, 534263444);

console.log(libro2.descripción());
console.log(libro.descripción());

<!-- PROMISE -->

const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = false; 
    
    if (auth) {
        resolve("Usuario autenticado"); // El Promise se cumple.
    } else {
        reject("No se pudo iniciar sesión"); // El Promise no se cumple.
    }
});

usuarioAutenticado
.then( resultado => console.log(resultado))

.catch( error => console.log(error))

// En los promises existen 3 valores:
// Pending: No se ha cumplido pero tampoco se ha rechazado.
// Fulfilled: Ya se cumplió
// Rejected: Se ha rechazado o no se pudo cumplir.


const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if (auth) {
        resolve('Usuario autenticado');
    } else {
        reject('Usuario no autenticado');
    }
})

usuarioAutenticado
.then( resultado => console.log(resultado))

.catch( error => console.log(error))

*/

const boton = document.querySelector('#boton');
boton.addEventListener('click', () => Notification.requestPermission()
.then( (resultado) => console.log(`El resultado es: ${resultado}`))
)

if(Notification.permission == 'granted'){
    new Notification('Esta es una notificación', {
        icon: 'img/ccj.png',
        body: 'Código con Gabriel, los mejores tutoriales'
    })
}



