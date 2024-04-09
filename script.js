function searchAnimal() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
    let search = document.querySelector('#list');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
            search.style.display="block"; 
        }
        else {
            x[i].style.display="list-item";
            search.style.display="none";    
        }
    }
}