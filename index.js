import { pollingUnitResults } from "./data.js"
const pollingData = document.getElementById('polling-results')

function render() {
  let pollingResults = ``
  pollingUnitResults.forEach(pollingunit => {
      pollingResults += `
      <table bgcolor='black' class="polling-head">
        <tr bgcolor='white' align='center' >
          <td width="6%">${pollingunit.result_id}</td>
          <td width="10%">${pollingunit.polling_unit_uniqueid}</td>
          <td width="10%">${pollingunit.party_abbreviation}</td>
          <td width="13%">${pollingunit.party_score}</td>
          <td width="20%">${pollingunit.entered_by_user}</td>
          <td width="23%">${pollingunit.date_entered}</td>
          <td width="18%">${pollingunit.user_ip_address}</td>
        </tr>
      </table>
    `
  })

  pollingData.innerHTML += pollingResults


}
render()