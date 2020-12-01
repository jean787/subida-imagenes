<div class="row">

    <div class="col-4">
        <h3>Seleccione archivos</h3>

        <div class="custom-input-file">
            <input id="file" type="file" class="input-file" multiple>
            <div style="width: 250px; border: 1px solid #699fac">
                <h4 style="color: #dddd; text-align: center">Suelte la imagen</h4>
                <div style="margin: auto; display: flex;align-items: start;justify-content: center;">
                    <img style="" src="assets/img/drop-images.png" width="100" height="100">
                </div>
            </div>
        </div>
    </div>

    <div class="col-8">
        <h3>Cargar Archivos</h3>
        <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
            <div class="btn-group mr-2" role="group" aria-label="First group">
                <button type="button" class="btn btn-success btn-sm btn-cargar">Cargar imagen</button>
            </div>
            <div class="btn-group" role="group" aria-label="Third group">
                <button type="button" class="btn btn-danger btn-sm">Limpiar archivos</button>
            </div>
        </div>

        <table class="table" style="margin-top: 10px">
            <thead class="thead-dark">
            <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Tamaño</th>
                <th scope="col">Progreso</th>
            </tr>
            </thead>
            <tbody class="table-images">
            </tbody>
        </table>

    </div>

</div>