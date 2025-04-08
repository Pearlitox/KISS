const form = document.querySelector('.form');
const input = document.querySelector('.menu');
const searchresult = document.querySelector('.searchresult');

fetch("./assets/data/data.json")
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
    data.forEach((entry) => {
        
    })
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        searchresult.innerHTML = ""; // Clear previous results

        const searchValue = input.value.toLowerCase(); // Get the search input and convert to lowercase
        let found = false;

        // Loop through the data and check if the name matches the input
        data.forEach((entry) => {
            const name = Object.keys(entry)[0]; // Get the key (name) of each object in the array
            if (name.toLowerCase() === searchValue) { // Case-insensitive match
                found = true;
                const searchresult__text = document.createElement('div');
                const searchresult__pics = document.createElement('div');
                searchresult__pics.classList.add('searchresult__pics')
                const resulth1 = document.createElement('h3');
                const pic = document.createElement('img');
                const pic2 = document.createElement('img');
                const pic3 = document.createElement('img');
                pic.classList.add('searchresult__img')
                pic2.classList.add('searchresult__img')
                pic3.classList.add('searchresult__img')
                
     
                const images = entry[name];
                pic.src = images.image1;
                pic2.src = images.image2;
                pic3.src = images.image3 || ""; // Use an empty string if image3 doesn't exist

                resulth1.innerText = name; // Display the name in the h3

                // Append the result to the searchresult
                searchresult.appendChild(searchresult__text);
                searchresult.appendChild(searchresult__pics);
                searchresult__text.appendChild(resulth1)
                searchresult__pics.appendChild(pic);
                searchresult__pics.appendChild(pic2);
                if (pic3.src) { // Only add the third image if it exists
                    searchresult__pics.appendChild(pic3);
                }
            }
            

        });

        if (!found) {
            // If no match found, display a message
            searchresult.innerHTML = "<p>No results found</p>";
        }
    });
});