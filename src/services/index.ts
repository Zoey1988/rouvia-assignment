export function getRequestAPI<T>(url: string): Promise<T> {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        console.log({response});
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        
        resolve(response.json())})
      .catch(reject)
  })
  
}