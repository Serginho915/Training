const getLocalData = () =>{
    const localData = {};
    const allData = Object.keys(localStorage).reduce((acc, key) => {
        acc[key] = localStorage.getItem(key);
        return acc;
    }, {}); 
}

