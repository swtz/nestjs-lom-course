# NestJS — Udemy — LOM

## Section 4

### Routing

`@Param()` → retorna um objeto
`@Param('id')` → já retorna o valor da propriedade 'id'

`@Body('key')` → cuidado! Pois, isso pode fazer com que a
propriedade deixe de ser validada pelo corpo/objeto que veio
da requisição. O Coach-Luiz ressaltou que, caso essa prática
seja necessária, deve-ser testar bem o comportamento desse
valor.

### Http Status Code

- Para recursos comuns (CRUD | GET, POST, PUT/PATCH, DELETE),
  o nest já consegui definir um código HTTP padrão. Entretanto,
  há alguma situações que é recomendável o DEV definir esse
  status code, para uma melhor depuração ou até informação
  para quem estiver acessando o recurso/rota.

- _Hint: HttpsStatus.ENUM_VALUE_

### Http Methods

PATCH → é utilizado para atualizar dados de um recurso
PUT → é utilizado para atualizar um recurso inteiro

### Query Parameters

- Comumente usado para paginação

### Validation

- `@IsOptional`
  - Torna a **chave** do DTO como opcional, isto é,
    ele checa se a chave está ou não presente.
    Se estiver presente, aplica os outros decorators
    presentes na propriedade, se não ignora todos.

- ```ts
  export class UpdateEntityDto extends PartialType(CreateEntityDto, {
    skipNullProperties: false,
  }) {} // Por padrão, esse classe utilitária permite valores `null`.
  ```

### Pagination

- _"A paginação de qualquer site que utiliza consultas SQL é a combinação dos parâmetros:"_
  - `limit` & `offset`
  - limit → é a quantidade de itens exibidos por página
  - offset → é a quantidade de páginas que a consulta deve "pular"
  - Exemplo:
    - `limit = 10`, logo `offset = 0` (1 página)
    - `limit = 10`, logo `offset = 10` (2 página)
    - `limit = 10`, logo `offset = 20` (3 página)
      e assim sucessivamente...
- Obs.: cuidado com a ordenação das consultas, pois isso pode confundir o usuário durante a navegação
  entre as páginas
