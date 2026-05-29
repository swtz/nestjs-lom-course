# NestJS — Udemy — LOM

- Module
  - serve para
    - organizar o código
    - encapsular coisas
  - App Module
    - é o módulo principal da aplicação
    - sempre que se cria um novo módulo, ele deve estar incluído
      dentro do array de imports do AppModule, pois o NestJS
      carrega esse módulo ao iniciar a aplicação (main.js)
      e assim é feita uma cadeia de dependências, isto é,
      um módulo vai importando o outro

- Controller
  - http://localhost:3000/
    - http:// → protocolo
    - localhost → domínio (servidor)
    - :3000 → porta de acesso
    - / → recurso (normalmente, o recurso '/' condiz ao recurso raiz
      da aplicação)

  - todo método dentro de um nest Controller precisa ser decorado
    com o nome do método HTTP respectivo, a saber:
    @Get | @Post | @Patch | @Delete | etc...
    Sem isso, o nest retornará uma mensagem de erro ao tentar fazer
    uma requisição para o recurso desse Controller, pois ele, de fato,
    não existe

- Service
  - A maioria dos sistema que usam a arquitetura REST precisa de
    lógica entre a requisição para o servidor e a resposta dele.
    É aí que entra a camada de serviços. O NestJS chama o Service
    de Provider também.

  - Toda classe da camada service que tem por objetivo ser usada
    em outra classe do nest deve possui o decorator `@Injectable`,
    pois, quando for utilizada, o nest saberá que é uma classe
    injetável por meio do seu tipo. Esse decorator faz com que a
    classe faça parte do Sistema de Injeção de Dependência do nest.

  - Ficar atento ao criar o service, pois ele deve constar no
    contexto do módulo respectivo, isto é, deve ser importado e incluído
    no array de 'providers' que fica dentro do decorator `@Module({})`.

### Término da Seção 1, 2 & 3.
