let loader = false;
export const fetchData = async (url) => {
       loader = true
       const response = await fetch(url, {
                method: 'GET', 
                headers: {
                      'content': 'application/json'
                }
       });
       loader = false;
       const  data = await response.json();
       return data;
}

export default loader;

