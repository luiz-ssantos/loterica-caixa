import { carregarFecharCaixa } from "./carregarFecharCaixa.min.js";

// Função para imprimir detalhes
function imprimirDetalhes() {
  const fechamentoCaixa = document.getElementById("fechar-caixa");

  if (!fechamentoCaixa) {
    console.error(
      "Não foi possível encontrar o elemento de fechamento de caixa."
    );
    return;
  }

  const janelaImpressao = window.open("", "", "height=600,width=800");

  if (!janelaImpressao) {
    console.error("Não foi possível abrir a nova janela de impressão.");
    return;
  }

  janelaImpressao.document.write(
    "<html><head><title>Imprimir Detalhes</title>"
  );
  janelaImpressao.document.write(
    "<style>body { font-family: Arial, sans-serif; }</style>"
  );
  janelaImpressao.document.write("</head><body>");
  janelaImpressao.document.write(fechamentoCaixa.innerHTML);
  janelaImpressao.document.write("</body></html>");

  janelaImpressao.document.close();
  janelaImpressao.focus();
  janelaImpressao.print();
}

// Função para calcular o total
function calcularTotal() {
  function parseCurrency(value) {
    return (
      parseFloat(value.replace("R$ ", "").replace(".", "").replace(",", ".")) ||
      0
    );
  }

  const totalCreditos1 = parseCurrency(
    document.getElementById("totalCreditos1").value
  );
  const totalDebitos1 = parseCurrency(
    document.getElementById("totalDebitos1").value
  );
  const totalCreditos2 = parseCurrency(
    document.getElementById("totalCreditos2").value
  );
  const totalDebitos2 = parseCurrency(
    document.getElementById("totalDebitos2").value
  );

  const suprimentos = [
    "esperado1",
    "esperado2",
    "esperado3",
    "esperado4",
    "esperado5",
    "esperado6",
    "esperado7",
    "esperado8",
    "esperado9",
  ].map((id) => parseCurrency(document.getElementById(id).value));

  const saidas = [
    "pix1",
    "pix2",
    "pix3",
    "pix4",
    "fiado1",
    "fiado2",
    "fiado3",
    "retirada1",
    "retirada2",
  ].map((id) => parseCurrency(document.getElementById(id).value));

  const totalSuprimentos = suprimentos.reduce((acc, val) => acc + val, 0);
  const totalSaidas = saidas.reduce((acc, val) => acc + val, 0);

  const totalCreditos = totalCreditos1 + totalCreditos2 + totalSuprimentos;
  const totalDebitos = totalDebitos1 + totalDebitos2 + totalSaidas;

  const totalFinal = totalCreditos - totalDebitos;

  document.getElementById("totalEntradas").innerText = `R$${totalCreditos
    .toFixed(2)
    .replace(".", ",")}`;
  document.getElementById("totalSaidas").innerText = `R$${totalDebitos
    .toFixed(2)
    .replace(".", ",")}`;

  let resultadoMsg = `Resultado do Fechamento: R$${totalFinal
    .toFixed(2)
    .replace(".", ",")}`;
  if (totalFinal > 0) {
    resultadoMsg += " (Sobra)";
  } else if (totalFinal < 0) {
    resultadoMsg += " (Falta)";
  } else {
    resultadoMsg += " (Correto)";
  }
  document.getElementById("resultado").innerText = resultadoMsg;
}

// Função para zerar campos
function zerarCampos() {
  document.getElementById("formFecharCaixa").reset();
  document.getElementById("totalEntradas").innerText = "R$0,00";
  document.getElementById("totalSaidas").innerText = "R$0,00";
  document.getElementById("resultado").innerText = "";
}

// Função para salvar dados
function salvarDados() {
  alert("Dados salvos com sucesso!");
}

// Inicializa eventos e funcionalidades
document.addEventListener("DOMContentLoaded", function () {
  const fecharCaixaLink = document.querySelector('a[href="#fechar-caixa"]');
  if (fecharCaixaLink) {
    fecharCaixaLink.addEventListener("click", function (event) {
      event.preventDefault();
      carregarFecharCaixa();
      // Adiciona eventos aos botões após o conteúdo ser carregado
      setTimeout(() => {
        document
          .querySelector(".btn-primary")
          .addEventListener("click", calcularTotal);
        document
          .querySelector(".btn-red")
          .addEventListener("click", zerarCampos);
        document
          .querySelector(".btn-green")
          .addEventListener("click", salvarDados);
      }, 0);
    });
  }

  const dropdownSubmenus = document.querySelectorAll(".dropdown-submenu");
  dropdownSubmenus.forEach(function (submenu) {
    submenu.addEventListener("mouseover", function () {
      const submenuDropdown = submenu.querySelector(".dropdown-menu");
      if (submenuDropdown) {
        submenuDropdown.classList.add("show");
      }
    });

    submenu.addEventListener("mouseleave", function () {
      const submenuDropdown = submenu.querySelector(".dropdown-menu");
      if (submenuDropdown) {
        submenuDropdown.classList.remove("show");
      }
    });
  });

  const btnPrint = document.querySelector(".btn-print");
  if (btnPrint) {
    btnPrint.addEventListener("click", imprimirDetalhes);
  } else {
    console.error("Botão de impressão não encontrado.");
  }

  Inputmask().mask(document.querySelectorAll("input"));
});
