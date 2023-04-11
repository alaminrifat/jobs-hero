const getData = () =>{
    const storedJob = JSON.parse(localStorage.getItem("jobs")) || [];
    return storedJob;
}
export   {getData};