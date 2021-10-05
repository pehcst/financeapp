import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {

  useEffect(() => {
    api.get('/transactions')
    .then(response => console.log(response.data));
  }, [])

  return(
  <Container>
    <table>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Valor</th>
          <th>Categoria</th>
          <th>Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Desenvolvimento de aplicativo</td>
          <td className="deposit">R$1500,00</td>
          <td>Freelance</td>
          <td>01/10/2021</td>
        </tr>
        <tr>
          <td>Pizza</td>
          <td className="withdraw">- R$120,00</td>
          <td>Alimentos</td>
          <td>02/10/2021</td>
        </tr>
        </tbody>
    </table>
  </Container>
  )
}