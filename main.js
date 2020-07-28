console.log("Hello Buddy !");

const text = document.querySelector(".query");
const cards = document.getElementById("cards");
const cardContainer = document.getElementById("cardContainer");



function createCards(){
    console.log("hello !");
let html = "";

let names  = ["HTML" , "CSS", "JAVASCRIPT"];
    names.forEach((element)=>{
        html += `  <div class="cards p-4 md:w-1/3">
        <div class="h-full border-2 border-white-200 square-lg overflow-hidden">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="https://images.unsplash.com/photo-1547231583-fb5cc1224458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=720&q=400" alt="blog">
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-white-900 mb-3">${element}</h1>
            <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <div class="flex items-center flex-wrap ">
              <a class="text-blue-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span class="text-white-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>1.2K
              </span>
              <span class="text-white-600 inline-flex items-center leading-none text-sm">
                <svg class="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>6
              </span>
            </div>
          </div>
        </div>
      </div>
   `
    })

 


 cardContainer.innerHTML = html;
}



// Search Box Logic
text.addEventListener("input",(e)=>{
    let query = e.target.value;
    let queryValue = query.toLowerCase();
    let cards = document.getElementsByClassName("cards");
    Array.from(cards).forEach(function(element){
        let queryitem = element.getElementsByTagName("h1")[0].innerText;
        let queryText = queryitem.toLowerCase();
        if(queryText.includes(queryValue))
        element.style.display = "block";
        else
        element.style.display = "none";

    })
})