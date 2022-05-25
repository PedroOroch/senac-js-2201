<?php

require 'controleDeAcesso.php';

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/css/materialize.min.css">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <title>Lista de Tarefas</title>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col s12">
                <div id="main" class="card">
                    <div>
                        <a href="../app/index.php">Voltar</a>
                    </div>
                    <div class="card-content">
                        <span class="card-title">Lista de Tarefas</span>
                        <div class="row">
                            <form id="form-tarefa">
                                <div class="input-field col s12">
                                    <input type="text" name="tarefa" id="tarefa">
                                    <label for="tarefa">Nova Tarefa</label>
                                </div>
                                <input type="submit" value="Adicionar Tarefa" class="btn">
                            </form>
                        </div>
                    </div>
                    <div class="card-action">
                        <h5 id="task-title">Tarefas</h5>
                        <div class="input-field col s12">
                            <input type="text" name="filtro" id="filtro">
                            <label for="filtro">Filtrar</label>
                        </div>
                        <ul class="collection"></ul>
                        <a href="#" class="limpar-tarefas btn black">Limpar</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.2.1.js" integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.100.2/js/materialize.min.js"></script>
    <script src="listaDeTarefas.js"></script>
</body>

</html>