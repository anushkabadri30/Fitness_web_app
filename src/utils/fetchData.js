export const exerciseOptions = {
  
    
        method: 'GET',
       
        headers: {
          'X-RapidAPI-Key': 'c431e0da5fmsh15a0bcb23d2ce3ap1d19cajsn0b12f77ac5bb',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      
};

export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': 'c431e0da5fmsh15a0bcb23d2ce3ap1d19cajsn0b12f77ac5bb',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const  BMIOptions={
  method: 'GET',

  headers: {
    'X-RapidAPI-Key': 'c431e0da5fmsh15a0bcb23d2ce3ap1d19cajsn0b12f77ac5bb',
    'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
  }

};


export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data=await response.json();
    //console.log(data);
    return data;
    
}