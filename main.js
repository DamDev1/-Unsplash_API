const input = document.querySelector(".input");
const search = document.querySelector(".searchBtn");
const imageContainer = document.querySelector(".imageContainer")
const APIKEY = "r0o_YxwDJU15PKaGycj9b8h1hV99bIDspF_kGt2kmXI";
let imageArray= "";
let discription;


search.addEventListener("click", () =>{
    const inputSearch = input.value;
    if(inputSearch !== null){
        fetch(`https://api.unsplash.com/search/photos?query=${inputSearch}&page=2&client_id=${APIKEY}`)

        .then(Response => Response.json())
        .then((data) => {
            imageArray = data.results;
            console.log(imageArray)

            imageArray.map((item, index) =>{
                discription = item.alt_description;
                imageLink = item.urls.raw;
                UserName = item.user.username;

                const imagDetail =  document.createElement("div");
                imagDetail.className = "imagDetail";
                imageContainer.appendChild(imagDetail);

                const imgDiscription = document.createElement("div")
                imgDiscription.className = "imgDiscription";
                imagDetail.appendChild(imgDiscription);

                const name = document.createElement("span")
                name.className = "name";
                imgDiscription.appendChild(name);
                name.textContent = UserName;

                const contentDiscription = document.createElement("span")
                contentDiscription.className = "discription";
                imgDiscription.appendChild(contentDiscription);
                contentDiscription.textContent = discription;

                const ImageWrapper = document.createElement("div")
                ImageWrapper.className = "ImageWrapper";
                imagDetail.appendChild(ImageWrapper);

                const img = document.createElement('img');
                ImageWrapper.appendChild(img)
                img.src = imageLink;
                img.setAttribute("width", "100%")
            })
        })
        
    }else{

    }
})