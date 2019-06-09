let idade = prompt('Digite sua idade');
let salario = prompt ('Quanto voce ganha');
let vlEmprestimo =prompt('Digite o valor do Emprestimo');

if(idade>=25 && idade<=55 && salario>=100  && vlEmprestimo<=salario*5){
    alert('Aprovado' + salario)
    console.log('Aprovado '+ salario)
}
else{
    alert('Reprovado')
}