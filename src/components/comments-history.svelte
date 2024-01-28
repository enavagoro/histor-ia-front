<script>
    import socket from "../services/socketService";
    import { onMount } from "svelte";

    onMount(() => {
        socket.emit('getComments', comments)// Aquí puedes procesar los datos o responder al cliente si es necesario
    });

    let comments = []
    let selectedUser = ''

    socket.on('comments', (_comments) => {
        comments = [..._comments];
    });

    let comment = { user: '1', content: '', id: new Date() };

    function handleSubmit(event) {
        event.preventDefault();
        comment.id = new Date();
        comment.user = selectedUser;
        socket.emit('addComment', comment);
        comment.content = '';
        comment.user  = '';
    }

    function selectOption(strin) {
        selectedUser = strin;
    }

</script>

<div class="container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!--<div on:click={() => selectOption('1')}>1</div>-->
    <h1 class="title">Prompts de generación de Historia</h1>
    <!--<div on:click={() => selectOption('2')}>2</div>-->

    <section >
        <p class="list-title"><b>Lista de prompts:</b> {comments.length}</p>
        {#each comments as comment (comment.id)}
            <div class="list-container" id="commentContainer">        
                <div class="comment-container">
                    <div class="comment">
                        <p>@{comment.user}</p>
                        <p>{comment.content}</p>
                    </div>
                    <div class="button">
                        <i class="mi mi-heart"><span class="u-sr-only"></span></i>
                    </div>
                </div>
            </div>
        {/each}
    </section>
</div>

<div class="add-section">
    <div class="prompt-section">
        <p class="add-prompt">Agregar prompt</p>
        <form on:submit={handleSubmit}>
            <label for="commentContent"></label>
            <textarea class="text-area" bind:value={comment.content} id="commentContent" name="commentContent" maxlength="150" required></textarea>
            <p class="rest-characters">Carácteres restantes: {comment.content.length} / 150</p>
            <button class="button-send"><p class="text-button">Envíar comentario</p></button>
        </form>
    </div>
</div>

<style>
    .container{
        height: 700px;
        overflow-y: scroll;
        padding-bottom: 40px;
    }

    .title {
        text-align: center;
        font-size: 30px;
        font-weight: 800;
    }

    .list-title {
        font-size: 20px;
        margin-left: 20px;
        padding-bottom: 15px;
    }

    .list-container {
        border-bottom: 1px solid #d2c09a;
        /* border-radius: 10px; */
        width: 90%;
        margin-left: 5%;
    }

    .comment-container {
        width: 100%;
        display: flex;
        cursor: pointer;
    }

    .comment {
        width: 95%;
    }

    .button {
        margin-top: 25px;
        width: 5%;
    }

    .add-section {
        width: 100%;
        margin-left: 0%;
        border-top: 2.4px solid #d2c09a;
        padding-bottom: 20px;
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

    .add-prompt{
        font-size: 20px;
        font-weight: 700;
    }

    .prompt-section{
        width: 90%;
        margin-left: 5%;
    }

    .text-area{
        width: 100%;
        padding-top: 10px;
        padding-left: 10px;
        padding-bottom: 10px;
        height: 85px;
        border: 1px solid #d2c09a;
        border-radius: 10px;
        background: #000000;
        color: #d2c09a;
    }

    .text-area:focus{
        outline: none; /* Esto quita el contorno que aparece al hacer clic en el botón */
    }

    .rest-characters{
        font-size: 18px;
        font-style: 600;
    }
</style>
