export const exerciseOptions= {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19c6cfc301msh033ed86ccfc6bf9p1b3e18jsn0f45c0e9f2da',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

export const fetchData=async(url,opt)=>{



    const response=await fetch(url,opt);
    const data=await response.json();

    return data;
}