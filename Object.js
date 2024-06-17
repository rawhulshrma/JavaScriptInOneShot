function firstProg(){
    let school = {
        name: "Vivekanada School",
        location: "Delhi",
        established: 1995,
        20: 1000,
        displayinfo: function () {
            document.write(`${school.name} was established 
            in ${school.established} at ${school.location}`);
        }
    }
    
    // Output : Vivekanada School 
    document.write(school['name']);
    
    // Output: 1000 
    document.write(school['20']); 
    
}