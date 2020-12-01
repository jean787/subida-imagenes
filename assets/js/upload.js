/*$(document).ready(function (){

    let array = [];

    $("#file").change(function (){

        let template = "";
        const files = $(this)[0].files;

        for (let i = 0; i< files.length; i++){
            if(files[i].type == "image/png" || files[i].type == "image/jpeg"){
                array.push(files[i]);
            }
        }

        array.forEach((element, index) => {
            template += `<tr>
                        <th>${element.name}</th>
                        <td>${element.size}</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info 
                                progress-bar-animated progress-index-${index}"
                                     role="progressbar" style="width: 0%">30%</div>
                            </div>
                        </td>
                    </tr>`;
        });


        $(".table-images").html(template);
        console.log(array);
    })

    $(document).on("click",".btn-cargar", function (){

        const files = $("#file")[0].files;

        console.log(files);

    });

});*/


$(document).ready(function (){


    let arrayImagesLocalStoreage = [];

    getImages();

    $(document).on("click",".index",function (){
       getImages();
    });

    $("#file").change(function (){

        const fileDom = $("#file")[0].files;

        console.log(fileDom);

        let template = "";

        for (let i = 0; i < fileDom.length; i++){

            //if(fileDom[i].type == "image/png" || fileDom[i].type == "image/jpeg"){

                template += `<tr>
                        <th>${fileDom[i].name}</th>
                        <td>${fileDom[i].size}</td>
                        <td>
                            <div class="progress">
                                <div class="progress-bar progress-bar-striped bg-info 
                                progress-bar-animated progress-index-${i}"
                                     role="progressbar" style="width: 0%">30%</div>
                            </div>
                        </td>
                    </tr>`;
            //}

        }

        $(".table-images").html(template);

    })

    $(document).on("click",".btn-cargar", function (){
        const fileDom = $("#file")[0].files;

        const progressBar = $(".progress-bar");

        progressBar.css('width',"0%");

        let form = new FormData();

        console.log(fileDom);

        for (let i = 0; i < fileDom.length; i++){

            //if(fileDom[i].type == "image/png" || fileDom[i].type == "image/jpeg"){

                const progressBarId = $(".progress-index-"+i);

                let formdara = new FormData();
                formdara.append("img",fileDom[i]);
                $.ajax({
                    xhr: function (){
                        console.log("XHR");
                        let xhr = new window.XMLHttpRequest();
                        xhr.upload.addEventListener("progress", function (event){
                            console.log("COMPUTABLE");
                            if(event.lengthComputable){
                                let porcentaje = Math.floor((event.loaded / event.total) * 100);
                                progressBarId.css('width',porcentaje+"%");
                                progressBarId.html(porcentaje+"%");
                            }
                            console.log(event);
                        })

                        return xhr;
                    },
                    url: "upload.ajax.php",
                    method: "POST",
                    data: formdara,
                    contentType: false,
                    processData: false,
                    cache: false,
                    dataType: "json"
                }).done( res => {
                    //let json = JSON.parse(res);
                    arrayImagesLocalStoreage.push(res);
                    console.log(res);
                    localStorage.setItem("rutas",JSON.stringify(arrayImagesLocalStoreage));
                    progressBar.removeClass("bg-info").addClass("bg-success");
                    progressBar.html("¡Carga completa!");
                    getImages();
                });

            //}

        }

    });

});

function getImages(){

    let rutas = localStorage.getItem("rutas")

    console.log("estas son las rutas")
    let template = "";
    if(JSON.parse(rutas)){

        JSON.parse(rutas).forEach(element => {
            template += `<div class="card">
                            <img src="${element.ruta}" class="card-img-top image-php">
                        </div>`;
        });
    }
    $(".images-php").html(template);

}
