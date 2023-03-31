import { pollingUnitResults } from "./data.js"
const lgaSelect = document.getElementById('lga')
const lgaResult = document.getElementById('lg-result-container')

const bomadi = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '08')

const okpe = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '09')

const sapele = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '10')

const ndokwaEast = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '11')

const ndokwaWest = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '12')

const isokoNorth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '13')

const isokoSouth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '14')

const oshimiliNorth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '15')

const oshimiliSouth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '16')

const patani = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '18')

const udu = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '19')

const ughelliNorth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '20')

const ughelliSouth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '21')

const ukwuani = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '22')

const ikaNorth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '23')

const ikaSouth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '24')

const warriNorth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '25')

const warriSouth = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '26')
const ozoro = pollingUnitResults.filter(pollingUnit => pollingUnit.polling_unit_uniqueid === '27')

lgaSelect.addEventListener('change', function() {
    if (lgaSelect.value === '08') {
        lgaResult.innerHTML = `
        <h3>Bomadi LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${bomadi[0].date_entered}</td>
                <td width="25%">${bomadi[0].user_ip_address}</td>
                <td width="25%">${bomadi[0].entered_by_user}</td>
                <td class='total-result' width="30%">${bomadi.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
        console.log(bomadi[0].entered_by_user)
    } else if (lgaSelect.value === '09') {
        lgaResult.innerHTML = `
        <h3>Okpe LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${okpe[0].date_entered}</td>
                <td width="25%">${okpe[0].user_ip_address}</td>
                <td width="25%">${okpe[0].entered_by_user}</td>
                <td class='total-result' width="30%">${okpe.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '10') {
        lgaResult.innerHTML = `
        <h3>Sapele LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${sapele[0].date_entered}</td>
                <td width="25%">${sapele[0].user_ip_address}</td>
                <td width="25%">${sapele[0].entered_by_user}</td>
                <td class='total-result' width="30%">${sapele.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '12') {
        lgaResult.innerHTML = `
        <h3>Ndokwa-West LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ndokwaWest[0].date_entered}</td>
                <td width="25%">${ndokwaWest[0].user_ip_address}</td>
                <td width="25%">${ndokwaWest[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ndokwaWest.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '11') {
        lgaResult.innerHTML = `
        <h3>Ndokwa-East LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ndokwaEast[0].date_entered}</td>
                <td width="25%">${ndokwaEast[0].user_ip_address}</td>
                <td width="25%">${ndokwaEast[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ndokwaEast.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '13') {
        lgaResult.innerHTML = `
        <h3>Isoko-North LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${isokoNorth[0].date_entered}</td>
                <td width="25%">${isokoNorth[0].user_ip_address}</td>
                <td width="25%">${isokoNorth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${isokoNorth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '14') {
        lgaResult.innerHTML = `
        <h3>Isoko-South LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${isokoSouth[0].date_entered}</td>
                <td width="25%">${isokoSouth[0].user_ip_address}</td>
                <td width="25%">${isokoSouth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${isokoSouth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '15') {
        lgaResult.innerHTML = `
        <h3>Oshimili-North LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${oshimiliNorth[0].date_entered}</td>
                <td width="25%">${oshimiliNorth[0].user_ip_address}</td>
                <td width="25%">${oshimiliNorth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${oshimiliNorth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '16') {
        lgaResult.innerHTML = `
        <h3>Oshimili-South LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${oshimiliSouth[0].date_entered}</td>
                <td width="25%">${oshimiliSouth[0].user_ip_address}</td>
                <td width="25%">${oshimiliSouth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${oshimiliSouth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '18') {
        lgaResult.innerHTML = `
        <h3>Patani LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${patani[0].date_entered}</td>
                <td width="25%">${patani[0].user_ip_address}</td>
                <td width="25%">${patani[0].entered_by_user}</td>
                <td class='total-result' width="30%">${patani.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '19') {
        lgaResult.innerHTML = `
        <h3>Udu LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${udu[0].date_entered}</td>
                <td width="25%">${udu[0].user_ip_address}</td>
                <td width="25%">${udu[0].entered_by_user}</td>
                <td class='total-result' width="30%">${udu.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '20') {
        lgaResult.innerHTML = `
        <h3>Ughelli-North LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ughelliNorth[0].date_entered}</td>
                <td width="25%">${ughelliNorth[0].user_ip_address}</td>
                <td width="25%">${ughelliNorth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ughelliNorth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '21') {
        lgaResult.innerHTML = `
        <h3>Ughelli-South LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ughelliSouth[0].date_entered}</td>
                <td width="25%">${ughelliSouth[0].user_ip_address}</td>
                <td width="25%">${ughelliSouth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ughelliSouth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '22') {
        lgaResult.innerHTML = `
        <h3>Ukwuani LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ukwuani[0].date_entered}</td>
                <td width="25%">${ukwuani[0].user_ip_address}</td>
                <td width="25%">${ukwuani[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ukwuani.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '23') {
        lgaResult.innerHTML = `
        <h3>Ika-North LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ikaNorth[0].date_entered}</td>
                <td width="25%">${ikaNorth[0].user_ip_address}</td>
                <td width="25%">${ikaNorth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ikaNorth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '24') {
        lgaResult.innerHTML = `
        <h3>Ika-South LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ikaSouth[0].date_entered}</td>
                <td width="25%">${ikaSouth[0].user_ip_address}</td>
                <td width="25%">${ikaSouth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ikaSouth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '25') {
        lgaResult.innerHTML = `
        <h3>Warri-North LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${warriNorth[0].date_entered}</td>
                <td width="25%">${warriNorth[0].user_ip_address}</td>
                <td width="25%">${warriNorth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${warriNorth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '26') {
        lgaResult.innerHTML = `
        <h3>Warri-South LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${warriSouth[0].date_entered}</td>
                <td width="25%">${warriSouth[0].user_ip_address}</td>
                <td width="25%">${warriSouth[0].entered_by_user}</td>
                <td class='total-result' width="30%">${warriSouth.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } else if (lgaSelect.value === '27') {
        lgaResult.innerHTML = `
        <h3>Ozoro LGA</h3>
        <table class='lga-table' bgcolor='black'>             
            <tr bgcolor='white'>
                <th width="20%">Date</th>
                <th width="25%">Officer IP Address</th>
                <th width="25%">Presiding Officer</th>
                <th width="30%">Total Number of Votes</th>
            </tr>
            <tr align='center' bgcolor='white'>
                <td width="20%">${ozoro[0].date_entered}</td>
                <td width="25%">${ozoro[0].user_ip_address}</td>
                <td width="25%">${ozoro[0].entered_by_user}</td>
                <td class='total-result' width="30%">${ozoro.reduce((acc, obj) => {
                    return acc + obj.party_score
                }, 0)}</td>
            </tr>
        </table>  
        `
    } 

})