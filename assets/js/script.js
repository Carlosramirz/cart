// Clase Producto
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
}

// Clase Carrito
class Carrito {
    constructor() {
        this.productos = [];
    }

    // Agregar producto al carrito
    agregarProducto(producto, cantidad) {
        for (let i = 0; i < cantidad; i++) {
            this.productos.push(producto);
        }
    }

    // Calcular total de la compra
    calcularTotal() {
        return this.productos.reduce((total, producto) => total + producto.precio, 0);
    }

    // Mostrar detalles de la compra
    mostrarDetalles() {
        const detalles = this.productos.map(producto => producto.nombre).join(', ');
        return `Productos en el carrito: ${detalles}`;
    }

    // Finalizar compra
    finalizarCompra() {
        const total = this.calcularTotal();
        alert(`El total de su compra es: $${total}. ¡Gracias por su compra!`);
    }
}

// Crear productos disponibles
const productosDisponibles = [
    new Producto('Leche', 1000),
    new Producto('Pan de Molde', 2000),
    new Producto('Queso', 1200),
    new Producto('Mermelada', 890),
    new Producto('Azúcar', 1300)
];

// Instanciar carrito
const carrito = new Carrito();

// Función para realizar la compra
function realizarCompra() {
    let continuar = true;

    while (continuar) {
        // Mostrar los productos disponibles
        let productosTexto = productosDisponibles.map((producto, index) => `${index + 1}. ${producto.nombre} - $${producto.precio}`).join('\n');
        let seleccion = parseInt(prompt(`Ingrese el número del producto que desea agregar al carrito:\n${productosTexto}`));

        // Validar selección
        if (seleccion < 1 || seleccion > productosDisponibles.length || isNaN(seleccion)) {
            alert('Selección no válida. Inténtelo nuevamente.');
            continue;
        }

        let productoSeleccionado = productosDisponibles[seleccion - 1];

        // Solicitar cantidad
        let cantidad = parseInt(prompt('Ingrese la cantidad que desea agregar:'));
        if (isNaN(cantidad) || cantidad <= 0) {
            alert('Cantidad no válida. Inténtelo nuevamente.');
            continue;
        }

        // Agregar producto al carrito
        carrito.agregarProducto(productoSeleccionado, cantidad);
        alert(`${cantidad} ${productoSeleccionado.nombre}(s) agregados al carrito.`);

        // Preguntar si desea seguir agregando productos
        let respuesta = prompt('¿Deseas seguir agregando productos? (s/n)');
        if (respuesta.toLowerCase() !== 's') {
            continuar = false;
        }
    }

    // Mostrar detalles del carrito
    const detallesCompra = carrito.mostrarDetalles();
    const totalCompra = carrito.calcularTotal();
    document.getElementById('detalles-compra').innerHTML = `<h3>${detallesCompra}</h3><p>Total: $${totalCompra}</p>`;

    // Finalizar compra
    carrito.finalizarCompra();
}
