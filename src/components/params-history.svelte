<script>
    let parametros = [
        {
            name: "Nivel de detalle",
            description: "0% (Bajo detalle) - 100% (Alto detalle)",
            value: 50,
        },
        {
            name: "Ambiente",
            description: "0% (Realista) - 100% (Ficción)",
            value: 50,
        },
        {
            name: "Estilo de escritura",
            description: "0% (Formal) - 100% (Poético)",
            value: 50,
        },
        {
            name: "Tono de la historia",
            description: "0% (Humorístico) - 100% (Oscuro)",
            value: 50,
        },
        {
            name: "Longitud",
            description: "0% (Corta) - 100% (Larga)",
            value: 50,
        },
        {
            name: "Desarrollo de personajes",
            description: "0% (Simple) - 100% (Complejo)",
            value: 50,
        },
        {
            name: "Nivel de acción",
            description: "0% (Bajo) - 100% (Alto)",
            value: 50,
        },
        {
            name: "Final",
            description: "0% (Feliz) - 100% (Triste)",
            value: 50,
        },
        {
            name: "Nivel de suspenso",
            description: "0% (Bajo) - 100% (Alto)",
            value: 50,
        }
    ];

    function handleInputChange(index, event) {
        parametros[index].valor = event.target.value;
    }
</script>

<div class="container">
    <h1 class="title">Prompts de parámetros para la historia</h1>
    <section>
        <p class="list-title"><b>Parámetros:</b></p>

        {#each parametros as { name, description, value }, index}
            <div class="param-option" key={index}>
                <div>
                    <p><b>{name}</b><br /><br />{description}</p>
                </div>
                <div class="input-container">
                    <input
                        class="input-range"
                        type="range"
                        min="0"
                        max="100"
                        bind:value={value}
                        on:input={(event) => handleInputChange(index, event)}
                    />
                </div>
            </div>
        {/each}
    </section>
    <button class="button-send"><p class="text-button">Envíar parámetros</p></button>
</div>

<style>
    .container {
        height: 700px;
        overflow-y: scroll;
        padding-bottom: 20px;
    }

    .title {
        text-align: center;
        font-size: 30px;
        font-weight: 800;
    }

    .list-title {
        font-size: 20px;
        margin-left: 20px;
        padding-bottom: 30px;
    }

    .param-option {
        width: 90%;
        margin-left: 5%;
    }

    .input-container {
        width: 100%;
        color: #d2c09a;
    }

    .input-range {
        width: 100%;
        height: 1px; /* Altura del riel del control deslizante */
        background: #d2c09a !important; /* Color de fondo del riel */
        color: #d2c09a;
        outline: none;
        margin: 0px 0;
        appearance: none !important;
    }

    .input-range::-webkit-slider-runnable-track {
        background: #d2c09a; /* Cambia este color al color que desees */
        border-radius: 10px;
        height: 4px;
    }

    input[type="range"]::-webkit-slider-thumb {
        -webkit-appearance: none !important;
        appearance: none !important;
        width: 22px;
        height: 22px;
        background: #000000 !important; /* Cambia este color al color que desees */
        cursor: pointer;
        margin-top: -10px;
        border-radius: 200px;
        border: 3px solid #d2c09a;
    }

    .button-send{
        width: 60%;
        margin-left: 20%;
        border-radius: 15px;
        margin-top: 25px;
        cursor: pointer;
        height: 50px;
        background: #d2c09a;
        -webkit-transition: all 0.3 ease;
        transition: all 0.3 ease;
        cursor: pointer;
        border: 0;
        outline: 0;
    }

    .text-button{
        text-align: center;
        color: #000000;
        font-weight: 800;
        font-size: 17px;
        font-weight: 700;

    }
</style>
