# Maxito

Sitio web oficial de presentación para Maxito, un bot de moderación y multifunciones de Discord.

## Desarrollo local

Es un sitio estático: abre `index.html` en tu navegador o sirve la carpeta con, por ejemplo:

```sh
python3 -m http.server 8000
```

No requiere instalación ni compilación. Puede publicarse en cualquier hosting estático, incluido GitHub Pages.

## Estructura

- `index.html`: contenido y estructura del sitio.
- `src/css/styles.css`: estilos y diseño adaptable.
- `src/js/app.js`: menú y guía interactiva de primeros pasos.

La guía guarda el progreso en el navegador mediante `localStorage`. Es informativa y no cambia la configuración del bot ni del servidor.

## Enlaces

- [Servidor de soporte](https://discord.gg/EEcxAtTzzr)
- [Invitar a Maxito](https://discord.com/oauth2/authorize?client_id=1561211537895718982&permissions=8&integration_type=0&scope=bot+applications.commands)

La invitación solicita el permiso de administrador; revisa los permisos antes de autorizar el bot.
