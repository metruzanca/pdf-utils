export async function sendFile(url: string, data: File[]) {
  const formData = new FormData();

  for (const name in data) {
    formData.append(name, data[name]);
  }

  return await fetch(url, {
    method: 'POST',
    body: formData
  });
}