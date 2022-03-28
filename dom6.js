//Criando o elemento li
const LI = document.createElement('li');

LI.className = ('collection-item'); //atribuição de classe para um elemento

LI.id = 'nova-tarefa-qualquer'; //atriubuição de id para um elemento

LI.setAttribute('title', 'Pare o mouse para ver'); //adicionando um atributo para um elemento
//FIM colocando o elemento li

//Criamos um texto para colocar em li
const TXT = document.createTextNode('Tarefa inserida dinamicamente');

LI.appendChild(TXT); //Coloca um elemento dentro do outro

console.log(LI);


//Criando elemento a
const X = document.createElement('a');

X.className = ('delete-item secondary-content');

X.setAttribute('href', '#');
//FIM criando elemento a

//Criando elemento i
const I = document.createElement('i');

I.className = ('fa fa-remove');
//Fim criando element i

console.log(X);

X.appendChild(I); //Colocamos o i no a

LI.appendChild(X); //Colocamos o a no li

//capturando o elemento ul para poder inserir o li
const UL = document.querySelector('ul.collection');

UL.appendChild(LI); //colocamos o li no ul

const NEWTITLE = document.createElement('h2'); //Criando elemento h2

NEWTITLE.id = 'task-title'; //define o id

NEWTITLE.append(document.createTextNode('Listinha')); //cria um novo texto pra constante atributo

const OLDTITLE = document.getElementById('task-title');

const ACTIONC = document.querySelector('.card-action');

ACTIONC.replaceChild(NEWTITLE, OLDTITLE); //substitui um elemento e suas informacoes