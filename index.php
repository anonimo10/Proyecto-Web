<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>..Practica ::..</title>
        <link href="css/stilos.css" rel="stylesheet" type="text/css"/>
    </head>
    <body>
        
        <div class="centrar">
            <input type="number" placeholder="ingresar código" id="codigo"><br>
            <button class="boton1" onclick="consultarPorId()">Consultar</button>
            <button class="boton2" onclick="limpiar()">Limpiar</button>
            
           
       
        
        <div class="" id="espera" style="display:none">Procesando tu consulta</div>
        <div id="resultado">
          
        </div>
        </div>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
         <script src="js/scripts.js" type="text/javascript"></script>
    </body>
</html>
