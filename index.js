function storeRecClick() {
    carObj = {
        carBrand: carbrand.value,
        carPrice: carprice.value,
        carKey: carkey.value
    };
    if (carObj.carBrand == "" || carObj.carPrice == "" || carObj.carKey == "")
        alert("Please enter full details.");
    else {
        if (carObj.carKey in localStorage)
            alert("Car details already exists.");
        else {
            localStorage.setItem(carObj.carKey, JSON.stringify(carObj));
            alert("Car details added successfully.");
        }
    }
}

function retrieveRecClick() {
    carObj = JSON.parse(localStorage.getItem(searchcarkey.value));
    if (carObj == null)
        alert("No such car record found.");
    else
        carSearchResult.innerHTML = `
        <div style="text-align : center">Car Brand : ${carObj.carBrand}</div>
        <div style="text-align : center">Car Price : ${carObj.carPrice}</div>
        <div style="text-align : center">Car Key : ${carObj.carBrand}</div>`;
}

function removeRecClick() {
    carObj = JSON.parse(localStorage.getItem(removecarkey.value));
    if (carObj == null)
        alert("No such car record found.");
    else {
        localStorage.removeItem(carObj.carKey);
        alert("Car record " + carObj.carKey + " has been removed.");
    }
}

function clearAllRecClick() {
    localStorage.clear();
    alert("All car records have been cleared.");
}