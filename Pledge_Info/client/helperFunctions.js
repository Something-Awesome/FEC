const server = 'http://localhost:3000'
const pledgeEndpoint = '/pledges'

const url = server+pledgeEndpoint;

const fetchfromServer = function(url){
   console.log('fetching');
   fetch(url).then((res)=>{
     res.json().then((data)=>{
       return data;
     })
   })
}

export default fetchfromServer;