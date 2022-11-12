const input = document.querySelector(".input");
const search = document.querySelector(".searchBtn");
const imageContainer = document.querySelector(".imageContainer");
const toggle = document.querySelector(".toggle")
      searchEngine = document.querySelector(".searchEngine")
const module = document.querySelector(".fullImg");
const module_image = document.querySelector(".modelImg img");
const module_user_name = document.querySelector(".name")
const module_discription = document.querySelector(".discription")
const closeModule = document.querySelector(".closeModule")

const APIKEY = "r0o_YxwDJU15PKaGycj9b8h1hV99bIDspF_kGt2kmXI";
const user_search = document.querySelector(".user_search")
let imageArray= "";
let discription;


toggle.addEventListener("click", () => {
    searchEngine.classList.toggle('active')
})

search.addEventListener("click", () =>{
    const inputSearch = input.value;
    user_search.textContent = inputSearch;
    if(inputSearch !== null){
        if(imageContainer.children.length > 0) { 
            imageContainer.innerHTML = ""
        }
        
        fetch(`https://api.unsplash.com/search/photos?query=${inputSearch}&page=2&client_id=${APIKEY}`)

        .then(Response => Response.json())
        .then((data) => {
            imageArray = data.results;
            console.log(imageArray)

            imageArray.map((item, index) =>{
                console.log(item)
                discription = item.alt_description;
                imageLink = item.urls.regular;
                UserName = item.user.username;

                const imagDetail =  document.createElement("div");
                imagDetail.className = "imagDetail";
                imageContainer.appendChild(imagDetail);

                const imgDiscription = document.createElement("div")
                imgDiscription.className = "imgDiscription";
                imagDetail.appendChild(imgDiscription);

                const ImageWrapper = document.createElement("div")
                ImageWrapper.className = "ImageWrapper";
                imagDetail.appendChild(ImageWrapper);

                const img = document.createElement('img');
                ImageWrapper.appendChild(img)
                img.src = imageLink;
                img.setAttribute("width", "100%");
                img.addEventListener("click",() =>{
                    module.style.display = "block"
                    module_image.src = img.src;
                    module_user_name.textContent = UserName;
                    module_discription.textContent = discription;

                })
            })
        })
        
    }else{

    }
})

closeModule.addEventListener("click", () =>{
    module.style.display = "none"
})