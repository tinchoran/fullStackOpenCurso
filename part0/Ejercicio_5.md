# Diagrama de aplicación de una sola página

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET <br> https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML file
    deactivate server

    browser->>server: GET <br> https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: CSS file
    deactivate server

    browser->>server: GET <br> https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: Javascript File
    deactivate server

    Note right of browser: El navegador ejecuta el código javascript para solicitar el JSON al servidor

    browser->>server: GET <br> https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: JSON document <br> [{"content":"Javascript is Easy", "date": "2023-01-01"},...]
    deactivate server

    activate browser
    Note right of browser: El navegador ejecuta el código javascript para renderizar dinámicamente las notas
    deactivate browser

```