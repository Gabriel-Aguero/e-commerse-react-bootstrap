# 🛒 Ecommerce App
Este es un proyecto fue realizado bajo en el marco del curso de react de Telento Tech. 

## Ecommerce con React y Bootstrap

Una aplicación de comercio electrónico moderna que consume la Fake Store API para mostrar productos, categorías y simular una experiencia de compra real.

## 🚀 Tecnologías Utilizadas

🟢​ Frontend: React.js / Vite 

🟢​ Estilos: Bootstrap

🟢​ Estado: Context API 

🟢​ HTTP: Fetch API

🟢​ API: Fake Store API

## 📋 Prerrequisitos
🟢​ Node.js (versión 14 o superior)

🟢​ npm 

🟢​ Navegador web moderno

## 🛠️ Instalación

```
git clone https://github.com/Gabriel-Aguero/e-commerse-react-bootstrap.git

cd ecommerce-react-bootstrap
```

`$ npm install`


## 📚 Endpoints de la API Utilizados

### Productos:
GET /products - Todos los productos

GET /products/:id - Producto específico

GET /products/categories - Todas las categorías

GET /products/category/:category - Productos por categoría

POST /products - Agregar nuevo producto (simulado)

### 🙋‍♂️ Autenticación

- POST /auth/login - Iniciar sesión

Para loguearte ingresa a https://fakestoreapi.com/users
Podes logearte con cualquier de los usuarios para probar las
funcionalidades de la aplicación como administrador.

## 🎯 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── CategoryCard.jsx
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── ProductCart.jsx
├── context/          # Contextos de React
│   ├── AuthContext.jsx
│   ├── CartContext.jsx
├── pages/   
|   ├── Administracion.jsx       
|   ├── CartPage.jsx
│   ├── Home.jsx
│   ├── Productos.jsx
│   ├── NoEncontrado.jsx
│   └── UserProfile/
├── routes/           # Servicios de API
│   └── AppRoutes.jsx
│   └── RutaProtegida.jsx   
├── utils/              # Utilidades
│   └── categories.js   
│   └── featuredProducts.js   
```

## 📝 Licencia

Este proyecto está licenciado bajo licencia MIT.

---

Creado con mucho ♥ por Gabriel Agüero [Linkedin](https://www.linkedin.com/in/gabrielhaguero/)

# --- No olvides dejar tu ⭐ ---