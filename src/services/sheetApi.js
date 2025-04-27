const SHEET_API_URL = 'https://docs.google.com/spreadsheets/d/1VsHVqRG_89p6tQecmrVAstwTBtwZHMrzBX3JNBiuJGQ'  // ganti YOUR_API_ID sama ID sheet lo

export async function getUserData(pin) {
  const response = await fetch(`${SHEET_API_URL}/search?pin=${pin}`)
  const data = await response.json()
  return data
}

export async function uploadNilai(newData) {
  const response = await fetch(SHEET_API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ data: [newData] })
  })
  return response.json()
}
