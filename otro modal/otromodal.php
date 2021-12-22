<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="modal.css">
    <script type="text/javascript" src="jquery-3.6.0.js"></script>
</head>
<body>
<div id="modalRCT" class="modal">
    <div class="modal-content">
        <h3>Hola!</h3><br>
        <p style="font-size:17px;">Recuerda que antes de registrar un nuevo contrato, deben existir Proveedores con sus respectivos encargados registrados en el sistema.
        Dale clic en el botón "Agregar", si deseas agregar un nuevo proveedor en este instante.
        De lo contrario, dale clic en "Cerrar" para continuar.</p>
    </div>
    <div class="modal-footer">
        <a href="proveedor/registrarProveedor" class="modal-action modal-close waves-effect waves-blue btn blue">Agregar</a>
        <a href="#!" class="modal-action modal-close waves-effect waves-red btn-flat">Cerrar</a>
    </div>
</div>
</body>
<script type="text/javascript" src="jquery-3.6.0.js"></script>
<script>
    $(document).ready(function(){
  $("#modalRCT").openModal();
})
</script>

</html>