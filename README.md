ESTUDOS REDUX

- Basicamente o redux é uma forma de centralizar o estado(estado global) para a nossa aplicação, ou seja, qualquer estrutura da nossa aplicação será capaz de ter acesso a este estado/entidade, sem que seja necessário ficar passando esta informação de componente em componente, evitando assim o drop dilling (passar de componente para componente, sendo que em alguns ele realmente nem usa, servirá só para passar a propriedade).

- Podemos ter acesso de qualquer componente através do useSelector, interligando o componente com o estado com o Reducer(armazena o nosso estado).

- Podemos fazer modificações em nosso reducer através de actions. Usaremos o hook useDispatch para dispacharmos a action, que no caso é basicamente um objeto javascript ({} contendo 2 campos(type/identificador) e payload(Dados relacionados a este evento).

EX: { Type: "user/login", payload: {name, email}}.

- Quando houver o dispatch da action, o useReducer ficará monitrando certos types da action, podendo assim alterar o payload(valor) daquele certo type. Trazendo a renderização e atualização das informações para todos os componentes de maneira estantanea.
