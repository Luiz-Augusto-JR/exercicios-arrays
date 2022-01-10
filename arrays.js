let clients = [
    {name: 'Angelo Luz', birth: 1986, genre: 'M', purchaseDaysAgo: 10},
    {name: 'Chuck', birth: 1940, genre: 'M', purchaseDaysAgo: 5},
    {name: 'Sansa Stark', birth: 2002, genre: 'F', purchaseDaysAgo: 32},
    {name: 'Dean winchester', birth: 1982, genre: 'M', purchaseDaysAgo: 45},
    {name: 'Ragnar', birth: 1960, genre: 'M', purchaseDaysAgo: 25},
  ]

  let ages = [17, 21, 16, 14, 9, 22, 12, 43, 99, 44, 32];
  console.log(ages);
  //TODO: Altera todos os valores em +1

    imprimindo = ages.map(value => value -1);
        console.log(imprimindo);

  //TODO: Retorna todos os valores ímpares

    impares = ages.filter(valor => valor%2 === 1);
        console.log(impares);

  //TODO: Altera todos os valores ímpares para o próximo par

    novosPares = ages.map(value => (value%2 == 0? value : value+1));
        console.log(novosPares);
  //TODO: Cria um novo array com os valores menores do que 20 de numbers

    menores20 = ages.map(value => value < 20)
        console.log(menores20);

  //TODO: Cria um novo array com os valores menores do que 17 e incrementar eles em um

    menores17 = ages.filter(valor => valor < 17 ).map(valor => valor+1)
    console.log(menores17)

  //TODO: Retorne a soma de todos os valores menores do que 20

    menores20Soma = ages.filter(valor => valor < 20 ).reduce((soma, prox) => soma += prox, 1000)
    console.log(menores20Soma)

  //TODO: Incrementa em 1 o purchaseDaysAgo de todos objetos

    let newClients = clients.map(value => ({...value}))
    newClients = newClients.map(value => {
        value.purchaseDaysAgo+=1;
            return value;
    });
    console.log(clients)
    console.log(newClients)

   //TODO: Verifica se um determinado número de entrada está contigo no array

    console.log(ages.includes(17))

   //TODO BONUS: Verifica se uma determinada data contigo no array

    idades = clients.map(value => value.birth)
    console.log(idades.includes(1986))

  //TODO: Altera array para ficar só com o primeiro nome dos clientes
        nomes = clients.map(value => value.name.split(" ")[0])
        console.log(nomes)

  
  //TODO: Incrementa a idade apenas dos clientes das posições ímpares do array


  //TODO: Retorna todos as pessoas de sexo masculino

