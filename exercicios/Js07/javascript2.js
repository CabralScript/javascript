function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = window.document.getElementById('txtano');
  var res = window.document.querySelector('div#res');

  if (fano.value.length == 0 || Number(fano.value) > ano) {
      window.alert('[ERRO] Verifique os dados e tente novamente');
  } else {
      var fsex = document.getElementsByName('radsex');
      var idade = ano - Number(fano.value);
      var genero = '';
      var img = document.createElement('img');
      img.setAttribute('id', 'foto');

      if (fsex[0].checked) {
          fsex = 'um homem';
          genero = fsex;
          if (idade >= 0 && idade < 15) {
              //criança
              img.setAttribute('src', 'homemcriança.jpg');
          } else if (idade >= 15 && idade <= 25) {
              //jovem
              img.setAttribute('src', 'homemjovem.jpg');
          } else if (idade >= 26 && idade < 58) {
              //adulto
              img.setAttribute('src', 'homemadulto.jpg');
          } else {
              //idoso
              img.setAttribute('src', 'homemidoso.jpg');
          }
      } else if (fsex[1].checked) {
          fsex = 'uma mulher';
          genero = fsex;
          if (idade >= 0 && idade < 15) {
              //criança
              img.setAttribute('src', 'mulhercriança.jpg');
          } else if (idade >= 15 && idade <= 25) {
              //jovem
              img.setAttribute('src', 'mulherjovem.jpg');
          } else if (idade >= 26 && idade < 58) {
              //adulto
              img.setAttribute('src', 'mulheradulta.jpg');
          } else {
              //idoso
              img.setAttribute('src', 'mulheridosa.jpg');
          }
      }

      res.style.textAlign = 'center';
      res.innerHTML = `Detectamos ${genero} de ${idade} anos <br> <br>`;
      res.appendChild(img);
  }
}
