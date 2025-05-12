const db = require('../dataBase/connection'); 

module.exports = {
    async listarLivroAutores(request, response) {
        
        try {

            const sql = `
            SELECT livro_id, aut_id FROM livro_autores;
        `;

        const [rows] = await db.query(sql);
        const nRegistros = rows.length;

        return response.status(200).json({
            sucesso: true,
            mensagem: `Lista de gêneros (${nRegistros} registros)`,
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
    async cadastrarLivroAutores(request, response) {
        try {

            const { livro_id, aut_id } = request.body;
            const usu_ativo = 1;

            // instrução SQL
            const sql = `
            INSERT INTO LIVRO_AUTORES
                (livro_id, aut_id)
            VALUES
                (?,?)`;

            // definição dos dados a serem inseridos em um array
            const values = [livro_id, aut_id];

            //execução da instrução SQL passando os parâmetros
            const [result] = await db.query(sql, values);

            // identificação do ID do registro inserido
            const dados = {
                id: result.insertId,
                livro_id,
                aut_id
            }

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de Autores', 
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
    async editarLivroAutores(request, response) {
        try {

            // parâmetros recebidos pelo corpo da requisição
        const { livro_id, aut_id } = request.body;
        // parâmetro recebido pela URL via params /:usuario/1
        const { id } = request.params;
        // instruções SQL
        const sql = `
            UPDATE livrosAutores SET
                livro_id
            WHERE
                aut_id = ?;
        `;
        // preparo do array com dados que serão atualizados
        const values = [ livro_id ];
        // execução e obtenção de confirmação da atualização realizada
        const [result] = await db.query(sql, values);

        if (result.affectedRows === 0) {
            return response.status(404).json({
                sucesso: false,
                mensagem: `Usuário ${id} não encontrado!`,
                dados: null
            });
        };

        const dados = {
            id,
            livro_id
        };

        return response.status(200).json({
            sucesso: true,
            mensagem: `Usuário ${id} atualizado com sucesso!`,
            dados
        });

    } catch (error) {
        return response.status(500).json({
            sucesso: false,
            mensagem: 'Erro na requisição.',
            dados: error.message
        });
    }
},

    async apagarLivroAutores(request, response) {
        try {
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Exclusão do Autor.', 
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