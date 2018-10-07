const API_URL = 'http://localhost:3000'

export async function fetchInvoices () {
  let response = await fetch(`${API_URL}/invoices`)
  return response.json()
}

export async function postInvoice (invoice) {
  await fetch(`${API_URL}/invoices`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(invoice)
  })
}
