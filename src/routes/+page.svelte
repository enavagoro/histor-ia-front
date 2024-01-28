<script>
    import CommentsHistory from "../components/comments-history.svelte";
    import PhotoHitstory from "../components/photo-hitstory.svelte";
    import ParamsHistory from "../components/params-history.svelte";
    import socket from "../services/socketService";

    let uri = "7GjPAMygtzn9lIAu0yFFWg";

    let selectedOptionIndex = 0;

    const options = [
        { name: "Historia" },
        { name: "Foto" },
        { name: "Parámetros" },
    ];

    function selectOption(index) {
        selectedOptionIndex = index;
    }
</script>

<div class="page-container">
    <div>
        <p class="page-title">Una historIA diaria</p>
    </div>

    <!-- svelte-ignore a11y-missing-attribute -->
    <iframe
        src={`https://open.spotify.com/embed/playlist/${uri}`}
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
    ></iframe>

    <div class="section-container">
        <div class="history-section">
            <p style="margin-right: 20px; font-size: 20px; text-align: right">
                <b>Historia de hoy</b>
            </p>
            <div class="history-content">
                <p class="history-title">
                    El Misterio de la Pecera Robada: Sombras en el Océano
                </p>
                <hr class="history-line" />
                <div class="history-text-container">
                    <p class="text">
                        En lo profundo del océano, en un arrecife lleno de
                        colores y vida marina, vivía una comunidad de peces
                        pacíficos. Un día, sin previo aviso, la pecera que
                        albergaba a algunos de los peces más queridos
                        desapareció misteriosamente. La noticia corrió como la
                        pólvora entre los habitantes del arrecife, y el pánico
                        se apoderó de ellos. Era una pecera mágica, con aguas
                        cristalinas que proporcionaban seguridad y comodidad a
                        quienes la habitaban. Sin embargo, la tranquilidad se
                        esfumó cuando los peces descubrieron que alguien la
                        había robado. Un murmullo de miedo y desconfianza se
                        extendió por la comunidad acuática. El líder de la
                        comunidad, un anciano pez sabio llamado Nereo, convocó a
                        una asamblea de emergencia en la Gruta de las Conchas.
                        Todos los peces se reunieron, ansiosos por descubrir la
                        verdad detrás del robo. Nereo, con su experiencia y
                        sabiduría, propuso que se formara un equipo de
                        investigación para resolver el misterio. Se seleccionó a
                        tres peces valientes: Marina, una intrépida pez payaso;
                        Tritón, un ágil pez espada; y Coral, una inteligente pez
                        ángel. Juntos, se embarcaron en una misión peligrosa
                        para encontrar la pecera perdida y descubrir al ladrón.
                        La búsqueda los llevó a través de corrientes oscuras y
                        cavernas tenebrosas. En su viaje, se encontraron con
                        criaturas marinas extrañas y hostiles que intentaron
                        detenerlos. Sintieron la presión del miedo y la
                        incertidumbre mientras se adentraban en lo desconocido.
                        Finalmente, llegaron a un rincón remoto del océano,
                        donde descubrieron la pecera robada. Estaba resguardada
                        por un feroz tiburón que se autodenominaba el "Guardián
                        del Tesoro Marino". El tiburón había planeado quedarse
                        con la pecera mágica para aumentar su propio poder. La
                        batalla que siguió fue intensa y aterradora. Los
                        valientes peces lucharon contra el tiburón con todas sus
                        fuerzas, pero no todos salieron ilesos. Tritón resultó
                        herido gravemente mientras protegía la pecera. A pesar
                        de su sacrificio, lograron vencer al tiburón y devolver
                        la pecera a su lugar original. De vuelta en el arrecife,
                        la comunidad celebró el regreso de su hogar mágico, pero
                        la victoria estaba ensombrecida por la pérdida de
                        Tritón. La experiencia dejó una cicatriz emocional en
                        todos los peces, recordándoles que incluso en un mundo
                        aparentemente pacífico, el mal podía acechar en las
                        sombras. La historia concluye con la pecera devuelta,
                        pero la comunidad nunca volvió a experimentar la misma
                        sensación de seguridad. Cada uno llevaba consigo las
                        cicatrices del enfrentamiento, recordándoles que la
                        oscuridad siempre podía amenazar su hogar en el océano.
                    </p>
                </div>
                <div class="history-image-container">
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <img class="history-image"
                        src="https://media.discordapp.net/attachments/1093087836149919764/1200802236960354334/quire_a_shadow_man_walking_on_a_mountain_ea089309-36d8-41e9-879c-770b31937cf1.png?ex=65c7813b&is=65b50c3b&hm=70b62238136cb9a1f665cee55deff4a0c109cdfc9e66b6f669ef074fc9df2328&=&format=webp&quality=lossless&width=1170&height=1170"
                    />
                </div>
            </div>
        </div>
        <div class="vote-section">
            <div class="vote-content">
                <p class="vote-title">Votaciones para mañana</p>
                <p>Tiempo restante:</p>
                <hr class="vote-line" />

                <div class="vote-tabs">
                    <section class="layout">
                        {#each options as option, i (option.name)}
                            <!-- svelte-ignore a11y-click-events-have-key-events -->
                            <!-- svelte-ignore a11y-no-static-element-interactions -->
                            <div
                                class="option"
                                style="background: {selectedOptionIndex === i
                                    ? '#d2c09a'
                                    : 'black'};
                                                      color: {selectedOptionIndex ===
                                i
                                    ? 'black'
                                    : '#d2c09a'}"
                                on:click={() => selectOption(i)}
                                role="button"
                                tabindex={i}
                            >
                                <p class="text-option">{option.name}</p>
                            </div>
                        {/each}
                    </section>
                </div>
                {#if selectedOptionIndex === 0}
                    <div class="vote-option-selected">
                        <CommentsHistory ></CommentsHistory>
                    </div>
                {/if}
                {#if selectedOptionIndex === 1}
                    <div class="vote-option-selected">
                        <PhotoHitstory></PhotoHitstory>
                    </div>
                {/if}

                {#if selectedOptionIndex === 2}
                    <div class="vote-option-selected">
                        <ParamsHistory></ParamsHistory>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
    iframe {
        width: 30%;
        margin-left: 68.5%;
        height: 80px; /* Adjust the height as needed */
        background: #d2c09a;
    }

    .page-title {
        margin: 0;
        padding-top: 20px;
        padding-bottom: 20px;
        font-size: 45px !important;
        font-weight: 600;
        text-align: center;
    }

    .page-container {
        background-color: #d2c09a;
        min-height: 100vh;
        padding-bottom: 50px;
    }

    .section-container {
        display: flex;
    }

    .history-section {
        width: 48%;
        margin-left: 1%;
        min-height: 100vh;
        border-radius: 10px;
        border: 2px solid black;
    }

    .history-content {
        width: 80%;
        margin-left: 10%;
    }

    .history-title {
        font-size: 64px;
        font-weight: 800;
        margin-bottom: 0px;
    }

    .history-line {
        height: 4px;
        background: black;
        border: 1px solid black;
    }


    .history-image-container{
        width: 100%;
        height: 300px;
        padding-bottom: 100px;
    }

    .history-image{
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }

    /* vote */

    .vote-section {
        background: black;
        color: #d2c09a;
        width: 48%;
        margin-left: 1%;
        min-height: 100vh;
        border-radius: 10px;
        border: 2px solid #d2c09a;
    }

    .vote-content {
        width: 70%;
        margin-left: 15%;
        padding-bottom: 30px;
    }

    .vote-title {
        font-size: 64px;
        font-weight: 800;
        margin-bottom: 0px;
        color: #d2c09a;
    }

    .vote-line {
        height: 4px;
        background: #d2c09a;
        border: 1px solid #d2c09a;
    }

    /* */

    .layout {
        width: 100%;
        display: flex;
    }

    /* */

    .option {
        width: 95%;
        margin-right: 2.5%;
        margin-left: 2.5%;
        border-radius: 10px;
        border: 1px solid #d2c09a;
        margin-top: 25px;
        cursor: pointer;
    }

    .text-option {
        text-align: center;
        font-size: 18px;
        font-weight: 600;
    }

    /* */

    .vote-option-selected {
        margin-top: 50px;
        border: 1px solid #d2c09a;
        min-height: 600px;
        border-radius: 10px;
    }

    @media (max-width: 900px) {
        .section-container {
            display: block;
        }

        .history-section {
            width: 95%;
            margin-left: 2.5%;
            min-height: 100vh;
            border-radius: 10px;
            border: 2px solid black;
        }

        .vote-section {
            margin-top: 20px;
            background: black;
            color: #d2c09a;
            width: 95%;
            margin-left: 2.5%;
            min-height: 100vh;
            border-radius: 10px;
            border: 2px solid #d2c09a;
        }

        .history-content {
            width: 90%;
            margin-left: 5%;
        }

        .vote-content {
            width: 90%;
            margin-left: 5%;
            padding-bottom: 30px;
        }

        iframe {
            width: 70%;
            margin-left: 28%;
            margin-bottom: 10px;
            height: 80px; /* Adjust the height as needed */
            background: #d2c09a;
        }
    }
</style>
