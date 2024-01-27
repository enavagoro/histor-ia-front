<script>
    let comments = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        user: `Usuario ${i}`,
        content: `Contenido del comentario ${i}`,
    }));
</script>

<div class="container">
    <h1 class="title">Prompts de generación de Historia</h1>
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
                            <i class="mi mi-heart"
                                ><span class="u-sr-only"></span></i
                            >
                        </div>
                    </div>
            </div>
        {/each}
    </section>
    
</div>

<style>
    .container{
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
</style>
