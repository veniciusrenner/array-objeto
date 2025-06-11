let pessoa = {
    nome: 'joão',
    cpf: '12345678901',
    genero: 'F',
    idade: 30,
    altura: 1.75,
    dataNacismento: '1993-05-15',
    endereco: 'Rua das Flores, 123',
    adicionar: function() {
        console.log('Adicionando pessoa...');  
    },
    remover: function() {
        console.log('Removendo pessoa...');  
    },
    telefone: {
        celular: '11987654321',
        email: 'ana@gmail.com',
        tamanhos: ['G', 'GG'],

        estrangeiro: false
    }
  
}
console.log(pessoa);

// Acessando propriedades do objeto
console.log(pessoa.dataNacismento);
console.log(pessoa.endereco);
console.log(pessoa.telefone);
//ao chamar uma propiedade que é um objeto, é possível acessar as propriedades desse objeto

