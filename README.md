# Paypal-API-Proyecto2
Este es un ejemplo de un módulo de .Net para consumir el API de pagos de PayPal

# Introducción 
Paypal es una empresa de pagos en línea que soporta transferencias de dinero entre usuarios y sirve como una alternativa electrónica a los métodos de pago tradicionales como cheques y giros postales. PayPal es una de las mayores compañías de pago por Internet del mundo.

# Paso 1: Conseguir las credenciales del API
Las credenciales son importantes porque autentican las requests del API.

Para conseguir las credenciales:
Se debe loguear con la cuenta de PayPal al Developer Dashboard (si no tiene cuenta, debe crear una).
En el menú de Dashboard, selecciona “My apps & Credentials”.
Asegúrese de estar en la pestaña de “Sandbox” para conseguir las credenciales del API que se usarán para programar. Después de probar el código y antes de hacer una prueba real, asegúrese de cambiar a la pestaña de “Live” para conseguir las credenciales en tiempo real.
Bajo la columna de “app name”, seleccione “Default application”, con cuál Paypal crea una cuenta cuenta de desarrollador.

# Paso 2: Cambiar sus credenciales de API por un token de acceso
Un token de acceso le permite a los desarrolladores utilizar el API de Paypal.
Para hacer uso del API intercambie su ID de cliente y su contraseña por un token de acceso. 
El API de Paypal puede ser utilizado desde cualquier lenguaje de programación.

# Paso 3: Demostración con Postman
Realice una petición POST al siguiente URL: https://api.sandbox.paypal.com/v1/oauth2/token

- Seleccione la pestaña de “Authorization”.
- Seleccione el tipo como “Basic Auth”.
- En el campo de “Username” ingrese su nombre de usuario y en el campo de “Password” ingrese su contraseña.
- Seleccione la pestaña de “Cuerpo” y seleccione la opción de x-www-form-urlencoded.
- En el campo de “Key” ingrese grant_type y en el campo “Value” ingrese client_credentials


Paypal retornará el token de acceso y el número de segundos que el token es válido. Para hacer llamadas a la API debe incluir el token de acceso en la pestaña de “Authorization” con el tipo “Bearer token”. Una vez que el token expire debe seguir los pasos nuevamente.



# Paso 4: Conseguir información de cuenta de Sandbox
Use cuentas de sandbox para probar comprar sin necesidad de usar dinero real. Por ejemplo cuando hace una compra mediante una cuenta sandbox, PayPal crea una “compra de prueba” que simula una compra real.

Para conseguir la información de logueo:
Debe loguearse en el Developer Dashboard con la cuenta de PayPal.
Dentro del Developer Dashboard debajo de donde dice “Sandbox” seleccione cuentas.
Donde dice nombre de cuenta (Account name), podrá encontrar su cuenta de sandbox personal.
Donde dice Gestionar cuentas (Manage accounts), seleccione el botón de ”...” para ver su cuenta personal.
Seleccione Ver/Editar Cuenta (View/Edit Account) para ver su ID de email y una contraseña generada por el sistema.
Repita estos pasos para la cuenta “Business”.

Una vez tenga esta información y haya hecho calls al API logueese dentro del sandbox como un comerciante o un comprador. De esta manera puede ver el flujo de dinero de la cuenta del comprador hacia la cuenta del comerciante para asegurarse que las calls al API funcionan correctamente.


# Links


video parte 1
https://drive.google.com/file/d/119IJdefTzbzL0kdjxgQbL3xiEQ6S56ZH/view?usp=sharing

video parte 2
https://www.youtube.com/watch?v=2ScjaxGhZIA
