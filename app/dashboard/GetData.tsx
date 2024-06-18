const BASEURL = 'http://localhost:8000/metrics/'

export default async function getData(url: string) {
    try {
        const response = await fetch(BASEURL + url, {
            method: 'GET', // or 'POST'
            headers: {
              'Content-Type': 'application/json',
              // Include other headers as required
            },
            // mode: 'cors', // This is the default value, so it's optional to include
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return await response.json();
      } catch (error) {
        console.error('Error fetching data:', error);
        return null;
      }
}



   


