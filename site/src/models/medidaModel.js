var database = require("../database/config");

function buscarUltimasMedidas(idQuizz, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        // instrucaoSql = `select top ${limite_linhas}
        // dht11_temperatura as temperatura, 
        // dht11_umidade as umidade,  
        //                 momento,
        //                 FORMAT(momento, 'HH:mm:ss') as momento_grafico
        //             from medida
        //             where fk_aquario = ${idAquario}
        //             order by id desc`;

        instrucaoSql = `
            select top ${limite_linhas}
            acertos as acertos,
            erros as erros,
                    data_hora,
                    FORMAT(data_hora, 'HH:mm:ss') as momento_grafico
                from resolucao_quizz
                where fkQuizz = ${idQuizz}
                order by idResolucao desc
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        // instrucaoSql = `select 
        // dht11_temperatura as temperatura, 
        // dht11_umidade as umidade,
        //                 momento,
        //                 DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
        //             from medida
        //             where fk_aquario = ${idAquario}
        //             order by id desc limit ${limite_linhas}`;


        instrucaoSql = `select 
        acertos as acertos, 
        erros as erros,
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                    from resolucao_quizz
                    where fkQuizz = ${idQuizz}
                    order by idResolucao desc limit ${limite_linhas}`;


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal(idQuizz) {

    // fkUsuario = sessionStorage.ID_USUARIO

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        acertos as acertos, 
        erros as erros,  
                        CONVERT(varchar, data_hora, 108) as momento_grafico, 
                        fkQuizz 
                        from resolucao_quizz where fkQuizz = ${idQuizz} 
                    order by idResolucao desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        acertos as acertos, 
        erros as erros,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico, 
                        fkQuizz 
                        from resolucao_quizz where fkQuizz = ${idQuizz} 
                    order by idResolucao desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

//////////////////////////////////////////////////////////////////////////quizz2

function buscarUltimasMedidas2(idQuizz, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {

        instrucaoSql = `
            select top ${limite_linhas}
            maisJedi as jedi,
            maisSith as sith,
                    data_hora,
                    FORMAT(data_hora, 'HH:mm:ss') as momento_grafico
                from resolucao_quizz
                where fkQuizz = ${idQuizz} 
                order by idResolucao desc
        `;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
      
        instrucaoSql = `select 
        maisJedi as jedi, 
        maisSith as sith,
                        data_hora,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico
                    from resolucao_quizz
                    where fkQuizz = ${idQuizz}
                    order by idResolucao desc limit ${limite_linhas}`;


    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMedidasEmTempoReal2(idQuizz) {

    // fkUsuario = sessionStorage.ID_USUARIO

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top 1
        maisJedi as jedi, 
        maisSith as sith,  
                        CONVERT(varchar, data_hora, 108) as momento_grafico, 
                        fkQuizz 
                        from resolucao_quizz where fkQuizz = ${idQuizz} 
                    order by idResolucao desc`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        maisJedi as jedi, 
        maisSith as sith,
                        DATE_FORMAT(data_hora,'%H:%i:%s') as momento_grafico, 
                        fkQuizz 
                        from resolucao_quizz where fkQuizz = ${idQuizz} 
                    order by idResolucao desc limit 1`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2
}
