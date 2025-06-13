
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
├── docker-compose.yml
├── Dockerfile
├── .env
├── db/
│   └── sql/
│       ├── create_schema.sql
│       └── data.sql
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


### 1. Clonar el Proyecto

```bash
git clone https://github.com/weizmanfabian/gestion_de_usuarios.git
cd gestion_de_usuarios
```

### 1.2 Cambiamos de rama a **docker-compose**
```bash
git checkout docker-compose
```

## Instalación y Ejecución

### 1. compilar proyecto

```bash
npm run docker:build
```

### 2. levantar aplicación

```bash
npm run docker:up
```

la aplicación estará disponible en `http://localhost:5000/users`

Si desea ver logs:
```bash
npm npm run docker:logs
```

y cuando desee terminar la ejecución

```bash
npm run docker:down
```

### 3. Conección a la base de datos (Opcional)
Si desea conectarse a la base de datos para monitorear los datos en tiempo real lo puede hacer conectandose mediante un gestor como **PgAdmin** o **DbBeaver**:
```bash
Host: localhost
Puerto: 5433
Usuario: postgres
Contraseña: root
Base de datos: usuarios
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

