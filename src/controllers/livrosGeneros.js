const db = require('../dataBase/connection'); 

module.exports = {
    async listarLivroGeneros(request, response) {
        try {

            const sql = `
            SELECT livro_id, gen_id FROM livro_generos;
            `;

            const [rows] = await db.query(sql);

            const nRegistros = rows.length;

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
    async editarLivroGeneros(request, response) {
        try {
            const { livro_id, gen_id } = request.body;
            const { id } = request.params;

            const sql = `
                UPDATE LIVRO_GENEROS SET
                    livro_id = ?, gen_id = ?
                WHERE
                    livro_id = ?;
            `;

            const values = [livro_id, gen_id, id];
            const [result] = await db.query(sql, values);

            if (result.affectedRows === 0) {
                return response.status(404).json({
                    sucess: false,
                    mensagem: `Usuário ${id} não encontrado!`,
                    dados: null
                });
            }

            const dados = { livro_id, gen_id };

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