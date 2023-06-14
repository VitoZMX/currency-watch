import axios from 'axios'
import {CurrencyRateChartType, RateType} from '../types/types'

const url = 'https://api.nbrb.by/exrates/'
export const instance = axios.create({
    baseURL: url,
})

export const currenciesAPI = {
    async getAllCurrencies() {
        return fetch(`${url}currencies`)
            .then(response => response.json())
    },
    async getRateCurrency(Cur_Code: string) {
        return instance.get<RateType>(`rates/${Cur_Code}?parammode=1`).then(res => res.data)
    },
    async getRateCurrencyDynamics(ID: number, from: string, to: string) {
        return instance.get<CurrencyRateChartType[]>(`rates/Dynamics/${ID}?startDate=${from}&endDate=${to}`).then(res => res.data)
    }
}