import NovaPoshta from 'novaposhta'

export const novaposhtaApi = new NovaPoshta({ apiKey: process.env.GATSBY_NOVAPOSHTA_API_KEY })