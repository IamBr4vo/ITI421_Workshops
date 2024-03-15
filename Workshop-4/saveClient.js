function saveClient() {
    //get the values of the inputs
    var name = document.getElementById('name').value;
    var lastName = document.getElementById('lastName').value;
    var phone = document.getElementById('phone').value;
    //Check if there are already clients stored in localstorage
    var clients = JSON.parse(localStorage.getItem('clients')) || [];
    //create a client object
    var newClient = {
        name: name,
        lastName: lastName,
        phone: phone
    };
    //this adds a new client to the array
    clients.push(newClient);
    //save the client array in localstorage
    localStorage.setItem('clients', JSON.stringify(clients));
    //clear the form
    document.getElementById('clientForm').reset();
    alert('Client saved successfully');
}