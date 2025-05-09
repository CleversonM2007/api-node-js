const db = require('../dataBase/connection'); 

module.exports = {
    async listarLivroGeneros(request, response) {
        try {

            const sql = `
            SELECT livro_id, gen_id FROM livro_generos;
            `;

            const [rows] = await db.query(sql);

            const nRegistros = [rows=length];

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de generos', 
                dados: rows
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async cadastrarLivroGeneros(request, response) {
        try {

            const { livro_id, gen_id } = request.body;
            const usu_ativo = 1;

            // instrução SQL

            const sql = `
            INSERT INTO LIVRO_GENEROS
                (livro_id, gen_id)
            VALUES
                (?,?)`;

            // definição dos dados a serem inseridos em um array
            const values = [livro_id, gen_id];

            //execução da instrução SQL passando os parâmetros
            const [result] = await db.query(sql, values);

            // identificação do ID do registro inserido
            const dados = {
                id: result.insertId,
                livro_id, 
                gen_id
            }

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de generos de livros', 
                dados: dados
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async editarLivroGeneros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Alteração no cadastro de generos de livros', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
    async apagarLivroGeneros(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão de generos', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false, 
                mensagem: 'Erro na requisição.', 
                dados: error.message
            });
        }
    }, 
};  