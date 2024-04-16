const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
  // Evita o envio do formulário como post
  // event.preventDefault();
  event.preventDefault()

  const n1 = parseInt(document.getElementById('numero1').value);
  const n2 = parseInt(document.getElementById('numero2').value);

  // Validação de dados (opcional)
  if (isNaN(n1) || isNaN(n2)) {
    alert("Por favor, digite apenas números!");
    return;
  }

  const result = n1 * n2;
  const value = document.getElementById('value');
  value.textContent = result;

  // Exibir seção de resultados (opcional)
  // document.getElementById('info').classList.remove("hidden");
});
