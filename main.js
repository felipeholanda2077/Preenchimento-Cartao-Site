function funcao1()
{
var x;
var r=confirm("Deseja pagar?");
if (r==true)
  {
  x="Efetuado com Sucesso";
  }
else
  {
  x="Pagamento não realizado!"
  }
document.getElementById("demo").innerHTML=x;
}