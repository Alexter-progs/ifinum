const API_URL = 'http://localhost:3000'

export async function fetchInvoices () {
  let response = await fetch(`${API_URL}/invoices`)
  return response.json()
}
