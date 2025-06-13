
# Sistema de Gestión de Usuarios - Backend

Este proyecto es un sistema backend para la gestión de usuarios, desarrollado en TypeScript con Express y TypeORM, utilizando PostgreSQL como base de datos.

## Tecnologías y Versiones

- **Node.js**: 22.12.0
- **Express**: 4.18.2
- **TypeORM**: 0.3.24
- **PostgreSQL**: 15.0
- **TypeScript**: 5.8.3

## Estructura del Proyecto

```
gestion_de_usuarios/
├── src/
│   ├── controllers/       # Controladores de la aplicación
│   │   └── user.controller.ts
│   ├── entities/          # Entidades de TypeORM
│   │   └── User.ts
│   ├── routes/            # Definición de rutas
│   │   └── user.routes.ts
│   ├── db.ts     # Configuración de la base de datos
│   └── index.ts           # Punto de entrada de la aplicación
├── package.json
├── tsconfig.json
└── README.md
```

## Requisitos Previos

- Node.js v22.12.0 o superior
- PostgreSQL v16.0 o superior
- npm v11.4.2 o superior

## Configuración Inicial

### 1. Crear Base de Datos

Ejecutar en PostgreSQL: 
```sql
CREATE DATABASE usuarios
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Colombia.1252'
    LC_CTYPE = 'Spanish_Colombia.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```
NOTA: Se puede también ir abrir la conexión de PostgreSql y crear una nueva base de datos con el nombre **usuarios**

### 2. Crear Tabla e Insertar Datos

```sql
CREATE TABLE usuarios (
    usu_id SERIAL PRIMARY KEY,
    usu_nombre VARCHAR(255) NOT NULL,
    usu_email VARCHAR(255),
    usu_created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usu_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO usuarios (usu_nombre, usu_email) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Bob Johnson', 'bob.johnson@example.com');
```

### 3. Clonar el Proyecto

```bash
git clone https://github.com/weizmanfabian/gestion_de_usuarios.git
cd gestion_de_usuarios
```

## Instalación y Ejecución

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar en Modo Desarrollo

```bash
npm run dev
```

la aplicación estará disponible en `http://localhost:5000/users`

### 3. Compilar y Ejecutar en Producción

```bash
npm run build
npm start
```

## Endpoints Disponibles

| Método | Ruta       | Descripción               |
|--------|------------|---------------------------|
| GET    | /users     | Obtiene todos los usuarios|
| POST   | /users     | Crear nuevo usuario       |
| GET    | /users/:id | Obtiene usuario por id |
| PUT    | /users/:id | Actualizar usuario existente |
| DELETE    | /users/:id | Elimina usuario por id |

## Testing con Postman

1. Importar la colección de Postman ubicada el directorio principal:
   `GestionDeUsuarios.postman_collection.json`
   
2. Ejecutar las peticiones de prueba:
   

## Características Clave

1. **Arquitectura Modular**: Separación clara entre controladores, rutas y entidades
2. **TypeORM**: ORM fuertemente tipado para operaciones con PostgreSQL
3. **Manejo Automático de Fechas**: `createdAt` y `updatedAt` gestionados automáticamente
4. **Sistema de Actualización Parcial**: Método `merge` para actualizaciones seguras
5. **Logging Detallado**: Registro completo de operaciones con la base de datos

