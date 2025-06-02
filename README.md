# 📱 CartXStockerApp - App de Gestión de Inventario

**Aplicación móvil React Native para reponedores - Gestión de inventario con RFID**

[![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactnative.dev/)
[![Expo](https://img.shields.io/badge/Expo-1C1E24?style=for-the-badge&logo=expo&logoColor=white)](https://expo.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=react-query&logoColor=white)](https://tanstack.com/query)

---

## 📋 Descripción

CartXStockerApp es la aplicación móvil diseñada para el personal de reposición de tiendas. Permite escanear códigos de barras de productos y asociarlos con etiquetas RFID, además de proporcionar estadísticas en tiempo real del inventario y métricas de ventas.

## 🎯 Funcionalidades Principales

### Escaneado Dual
- **📷 Códigos de Barras:** Identificación de productos mediante cámara
- **🏷️ Etiquetas RFID:** Vinculación de productos con tags RFID
- **🔗 Asociación:** Conexión automática barcode-RFID en backend

### Analytics en Tiempo Real
- **📊 Estadísticas de Tienda:** Métricas generales de rendimiento
- **📦 Últimos Productos:** Historial de productos añadidos recientemente
- **🔥 Top Ventas:** Productos más vendidos y tendencias

### Gestión de Inventario
- **✅ Productos Confirmados:** Tracking de productos procesados
- **🔄 Sincronización:** Datos actualizados mediante pull-to-refresh
- **📈 Métricas Visuales:** Gráficos y estadísticas de inventario

## 🏗️ Arquitectura

### Stack Principal
- **React Native 0.76.3** - Framework multiplataforma
- **Expo ~52.0.11** - Plataforma de desarrollo y APIs nativas
- **TypeScript** - Tipado estático para mejor maintainability

### Gestión de Estado
- **@tanstack/react-query 5.60.5** - Gestión de estado del servidor y caché
- **axios 1.7.7** - Cliente HTTP para comunicación con API
- **expo-secure-store** - Almacenamiento seguro de tokens

### Hardware & UI
- **expo-camera ~16.0.7** - Integración con cámara para escaneo
- **lottie-react-native 7.1.0** - Animaciones y micro-interacciones
- **@react-navigation/native** - Sistema de navegación entre pantallas

## 🎨 Componentes Principales

### Home Screen
- **Header:** Saludo y estadísticas principales
- **LastStoredProducts:** Lista de productos recién añadidos
- **TopSoldItems:** Analytics de productos más vendidos
- **Footer:** FAB para iniciar proceso de escaneo

### Características UX
- **Pull-to-Refresh:** Actualización manual de datos
- **Toast Notifications:** Feedback visual de operaciones
- **Loading States:** Indicadores de progreso
- **Navegación Fluida:** Transiciones suaves entre pantallas

## ⚙️ Instalación y Desarrollo

```bash
# Clonar repositorio
git clone https://github.com/tu-org/CartXStockerApp.git
cd CartXStockerApp

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo Expo
npx expo start

# Para iOS
npx expo run:ios

# Para Android
npx expo run:android
```

## 🔧 Configuración

### React Query Setup
- **QueryClient** configurado globalmente
- **Caché automático** de respuestas API
- **Refetch en background** para datos actualizados
- **Error handling** integrado

### Navegación
- **Stack Navigator** con 4 pantallas principales
- **Configuración específica** por pantalla (gestos, animaciones)
- **Comunicación entre pantallas** mediante parámetros

### Almacenamiento Seguro
- **Tokens de autenticación** en expo-secure-store
- **Configuración sensible** protegida localmente
- **Sesión persistente** entre reinicios de app

## 📱 Compatibilidad

- **React Native 0.76.3** - Última versión estable
- **Expo SDK 52** - APIs nativas optimizadas
- **iOS & Android** - Desarrollo multiplataforma
- **TypeScript** - Tipado completo del proyecto

## 🎯 Características Específicas

### Diseño
- **Fuente Montserrat** cargada dinámicamente
- **Tema consistente** con el ecosistema CartX
- **Responsive design** para diferentes tamaños de pantalla

### Performance
- **Query caching** para reducir llamadas API
- **Lazy loading** de componentes pesados
- **Optimized renders** con React.memo donde corresponde

---

**Parte del ecosistema CartX - TFG DAM 2023-2025**