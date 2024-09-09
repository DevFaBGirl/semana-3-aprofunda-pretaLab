#Tarefa Semana 3 - API de Blog
Descrição da atividade
Continuar o desenvolvimento da API de blog refatorada que criamos em sala de aula. O foco foi implementar as rotas DELETE e PATCH/PUT para editar e excluir postagens específicas. O projeto segue o padrão do código discutido nas aulas, sem alterações na estrutura original.

#Funcionalidades Implementadas:

PATCH/PUT:
- Permite a edição de uma postagem específica;
- Utiliza o método HTTP PATCH ou PUT para atualizar o conteúdo de um post.

#DELETE:
- Permite excluir uma postagem específica;
- Utiliza o método HTTP DELETE para remover o post do banco de dados.

#Requisitos da tarefa:
- Editar uma postagem específica utilizando a rota PATCH/PUT.
- Excluir uma postagem específica utilizando a rota DELETE.

#Tecnologias Utilizadas:
- Node.js;
- Express;
- Insomnia/Postman para testes das rotas.


# Testes no Insomnia

EDIÇÃO DE POSTAGEM ESPECÍFICA

Lista de textos criados:
![listTexts](https://github.com/user-attachments/assets/cf158c65-549f-4645-b2d1-8cf571a4be95)

Print texto (ID) editado:
![updadeText](https://github.com/user-attachments/assets/593e3a2f-f218-4f0f-81fe-7ef35771b4df)

Verificação de edição:
![Verificação da alteração -uodateText](https://github.com/user-attachments/assets/919bf14e-cf1d-42c0-b0e8-7fa926cc6c04)


EXCLUIR UMA POSTAGEM
(testes a concluir)


#O que Estudei Esta Semana:

Estudei Design Patterns e boas práticas, com foco no constructor, que inicializa objetos ao criar instâncias de uma classe, e o uso do this para definir propriedades. Aprofundei-me no Singleton Pattern, que garante uma única instância de uma classe, útil para gerenciar recursos compartilhados. Explorei o Factory Pattern, que facilita a criação centralizada e flexível de objetos, e o Strategy Pattern, que permite alternar entre algoritmos dinamicamente, tornando o código mais modular e adaptável.Também trabalhei na refatoração da API de blog, focando nas rotas de edição e exclusão de postagens. Aprendi as diferenças entre PATCH e PUT e como aplicá-los corretamente.
