import { pollingUnitResults } from "./data.js"
const partyResult = document.getElementById('party-result')

const pdp = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'PDP')

const dpp = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'DPP')

const acn = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'ACN')

const ppa = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'PPA')

const cdc = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'CDC')

const jp = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'JP')

const anpp = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'ANPP')

const labo = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'LABO')

const cpp = pollingUnitResults.filter(pollingUnit => pollingUnit.party_abbreviation === 'CPP')

const totalVotesCasted = pollingUnitResults.reduce((acc, obj) => {
    return acc + obj.party_score
}, 0)

console.log(totalVotesCasted)

function getPartyResults() {
    partyResult.innerHTML = `
        <h4>PDP</h4>
        <div class="result-details">
            <p>${pdp.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 16.78%</p>
            <div class="percentage-bar-container">
                <div class="pdp-percentage-bar"></div>
            </div>
        </div>
        <h4>DPP</h4>
        <div class="result-details">
            <p>${dpp.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 13.63%</p>
            <div class="percentage-bar-container">
                <div class="dpp-percentage-bar"></div>
            </div>
        </div>
        <h4>ACN</h4>
        <div class="result-details">
            <p>${acn.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 11.23%</p>
            <div class="percentage-bar-container">
                <div class="acn-percentage-bar"></div>
            </div>
        </div>
        <h4>PPA</h4>
        <div class="result-details">
            <p>${ppa.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 13.15%</p>
            <div class="percentage-bar-container">
                <div class="ppa-percentage-bar"></div>
            </div>
        </div>
        <h4>CDC</h4>
        <div class="result-details">
            <p>${cdc.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 10.76%</p>
            <div class="percentage-bar-container">
                <div class="cdc-percentage-bar"></div>
            </div>
        </div>
        <h4>JP</h4>
        <div class="result-details">
            <p>${jp.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 9.87%</p>
            <div class="percentage-bar-container">
                <div class="jp-percentage-bar"></div>
            </div>
        </div>
        <h4>ANPP</h4>
        <div class="result-details">
            <p>${anpp.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 11.74%</p>
            <div class="percentage-bar-container">
                <div class="anpp-percentage-bar"></div>
            </div>
        </div>
        <h4>LABO</h4>
        <div class="result-details">
            <p>${labo.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 8.48%</p>
            <div class="percentage-bar-container">
                <div class="labo-percentage-bar"></div>
            </div>
        </div>
        <h4>CPP</h4>
        <div class="result-details">
            <p>${cpp.reduce((acc, obj) => {
                return acc + obj.party_score
            }, 0)} votes 4.35%</p>
            <div class="percentage-bar-container">
                <div class="cpp-percentage-bar"></div>
            </div>
        </div>
    `
}

getPartyResults()