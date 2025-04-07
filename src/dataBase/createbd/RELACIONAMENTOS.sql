ALTER TABLE LIVRARIAS
ADD FOREIGN KEY (liv_id) 
REFERENCES USUARIOS(usu_id);  

ALTER TABLE RESENHISTAS
ADD FOREIGN KEY (res_id) 
REFERENCES USUARIOS(usu_id);  

ALTER TABLE RESENHISTAS
ADD FOREIGN KEY (tit_id) 
REFERENCES TITULO(tit_id);  

ALTER TABLE LIVRARIAS_LIVROS
ADD FOREIGN KEY (livro_id) 
REFERENCES LIVROS(livro_id);  

ALTER TABLE LIVRARIAS_LIVROS
ADD FOREIGN KEY (liv_id) 
REFERENCES LIVRARIAS(liv_id);  

ALTER TABLE LIVRO_AUTORES
ADD FOREIGN KEY (livro_id) 
REFERENCES LIVROS(livro_id);  

ALTER TABLE LIVRO_AUTORES
ADD FOREIGN KEY (aut_id) 
REFERENCES AUTORES(aut_id);  

ALTER TABLE LIVRO_GENEROS
ADD FOREIGN KEY (livro_id) 
REFERENCES LIVROS(livro_id);  

ALTER TABLE LIVRO_GENEROS
ADD FOREIGN KEY (gen_id) 
REFERENCES GENEROS(gen_id);  

ALTER TABLE RESENHAS
ADD FOREIGN KEY (livro_id) 
REFERENCES LIVROS(livro_id);  

ALTER TABLE RESENHAS
ADD FOREIGN KEY (res_id) 
REFERENCES RESENHISTAS(res_id);  

