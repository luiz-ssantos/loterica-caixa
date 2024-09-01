export function carregarFecharCaixa() {
  const mainContent = document.querySelector(".main-content");
  mainContent.innerHTML = `
  <section id="fechar-caixa" class="my-5">
  <div class="container">
    <div class="card shadow-sm border-0 rounded-4">
      <div class="card-body">
        <h2 class="card-title text-center mb-4">Fechamento de Caixa</h2>
        <form id="formFecharCaixa">
          <div class="table-responsive">
            <table class="table table-bordered text-center">
              <thead>
                <tr>
                  <th>Data:</th>
                  <th colspan="3"><input id="date" type="date" /></th>
                </tr>
                <tr>
                  <th>Operador:</th>
                  <th colspan="3">
                    <select
                      name="nomeOperador"
                      id="nomeOperador"
                      class="form-select"
                    >
                      <option value="operador01">Operador - 01</option>
                      <option value="operador02">Operador - 02</option>
                      <option value="operador03">Operador - 03</option>
                      <option value="operador04">Operador - 04</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody id="caixa-tabela-corpo">
                <tr>
                  <td>Total de Créditos 1:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="totalCreditos1"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Total de Débitos 1:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="totalDebitos1"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Total de Créditos 2:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="totalCreditos2"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Total de Débitos 2:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="totalDebitos2"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <th colspan="2">ENTRADAS</th>
                  <th colspan="2">SAÍDAS</th>
                </tr>
                <tr>
                  <td>Suprimento 01:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado1"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Pix 01:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="pix1"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 02:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado2"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Pix 02:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="pix2"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 03:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado3"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Pix 03:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="pix3"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 04:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado4"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Pix 04:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="pix4"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 05:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado5"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Fiado 01:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="fiado1"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 06:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado6"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Fiado 02:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="fiado2"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 07:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado7"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Fiado 03:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="fiado3"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 08:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado8"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Retirada 01:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="retirada1"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td>Suprimento 09:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="esperado9"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                  <td>Retirada 02:</td>
                  <td>
                    <input
                      type="text"
                      class="form-control"
                      id="retirada2"
                      data-inputmask="'alias': 'currency', 'prefix': 'R$ ', 'groupSeparator': '.', 'decimalSeparator': ',', 'autoGroup': true, 'digits': 2, 'digitsOptional': false"
                    />
                  </td>
                </tr>
                <tr>
                  <td class="text-center fw-bold">Total Entradas:</td>
                  <td id="totalEntradas">R$0,00</td>
                  <td class="text-center fw-bold">Total Saídas:</td>
                  <td id="totalSaidas">R$0,00</td>
                </tr>
                <tr>
                  <td class="text-center fw-bold">Resultado do Fechamento:</td>
                  <td colspan="3" id="resultado">R$0,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="d-flex justify-content-end">
            <button type="button" class="btn btn-primary me-2">Calcular Total</button>
            <button type="reset" class="btn btn-red me-2">Zerar Campos</button>
            <button type="button" class="btn btn-green me-2">Salvar Dados</button>
            <button type="button" class="btn btn-print">Imprimir</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
  `;

  // Configurar o Inputmask para todos os campos de entrada com máscara de moeda
  Inputmask().mask(document.querySelectorAll("input"));
}
