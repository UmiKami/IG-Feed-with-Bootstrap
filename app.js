let galleryBTN = document.querySelector("#galleryBTN")
let postBTN = document.querySelector("#postBTN")
let feed = document.querySelector(".feed")

postBTN.addEventListener("click", e=>{
    if(galleryBTN.classList.contains("btn-secondary")){
        galleryBTN.classList.remove("btn-secondary")
        galleryBTN.classList.add("btn-outline-secondary", "boder-0")
        e.currentTarget.classList.remove("btn-outline-secondary")
        e.currentTarget.classList.add("btn-secondary", ".active")
        feed.classList.add("bg-light", "d-flex", "flex-column", "align-items-center", "py-3")
        
        feed.innerHTML = ` <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-alex-azabache-3214958.jpg" alt="" class="img-fluid col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
    <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-george-lebada-567540.jpg" alt="" class="col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
    <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-grafixartphoto-samir-belhamra-4254555.jpg" alt="" class="col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
    <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-jonathan-borba-2983101.jpg" alt="" class="col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
    <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-luca-nardone-3651618.jpg" alt="" class="col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
    <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-pixabay-37833.jpg" alt="" class="col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
    <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-pixabay-39317.jpg" alt="" class="col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
    <div class="card col-4 mb-5">
        <div class="card-header d-flex justify-content-between align-items-center bg-white">
            <h5 class="m-0">My first photo</h5>
            <p class="m-0">12/24</p>
        </div>
        <div class="card-body p-0">
            <img src="./img/pexels-taryn-elliott-3889855.jpg" alt="" class="col-12 img-fluid" height="614px">    
        </div>
        <div class="card-footer bg-white">
            <h6>23 likes</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis tempora amet et molestias quae cum sapiente illum tenetur hic quidem architecto commodi nesciunt mollitia, culpa dolorem dolore quam molestiae odit!</p>
            <div class="actionBTNs d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="rgba(0,0,0,.5)" class="bi bi-suit-heart me-4" viewBox="0 0 16 16">
                    <path d="m8 6.236-.894-1.789c-.222-.443-.607-1.08-1.152-1.595C5.418 2.345 4.776 2 4 2 2.324 2 1 3.326 1 4.92c0 1.211.554 2.066 1.868 3.37.337.334.721.695 1.146 1.093C5.122 10.423 6.5 11.717 8 13.447c1.5-1.73 2.878-3.024 3.986-4.064.425-.398.81-.76 1.146-1.093C14.446 6.986 15 6.131 15 4.92 15 3.326 13.676 2 12 2c-.777 0-1.418.345-1.954.852-.545.515-.93 1.152-1.152 1.595L8 6.236zm.392 8.292a.513.513 0 0 1-.784 0c-1.601-1.902-3.05-3.262-4.243-4.381C1.3 8.208 0 6.989 0 4.92 0 2.755 1.79 1 4 1c1.6 0 2.719 1.05 3.404 2.008.26.365.458.716.596.992a7.55 7.55 0 0 1 .596-.992C9.281 2.049 10.4 1 12 1c2.21 0 4 1.755 4 3.92 0 2.069-1.3 3.288-3.365 5.227-1.193 1.12-2.642 2.48-4.243 4.38z"/>
                </svg>
                <p class="m-0 text-secondary-special">Commment ...</p>
            </div>
        </div>
    </div>
`
    }
})
galleryBTN.addEventListener("click", e=>{
    if(!galleryBTN.classList.contains("btn-secondary")){
        postBTN.classList.remove("btn-secondary")
        postBTN.classList.add("btn-outline-secondary", "boder-0")
        e.currentTarget.classList.remove("btn-outline-secondary")
        e.currentTarget.classList.add("btn-secondary", ".active")
        feed.classList.remove("bg-light", "d-flex", "flex-column", "align-items-center", "py-3")
    }

    feed.innerHTML = `            <div class="row mb-1">
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-alex-azabache-3214958.jpg" alt="" class="" height="265px">
    </div>
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-george-lebada-567540.jpg" alt="" class="" height="265px">
    </div>
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-grafixartphoto-samir-belhamra-4254555.jpg" alt="" class="" height="265px">
    </div>
</div>

<div class="row mb-1">
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-jonathan-borba-2983101.jpg" alt="" class="" height="265px">
    </div>
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-luca-nardone-3651618.jpg" alt="" class="" height="265px">
    </div>
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-pixabay-37833.jpg" alt="" class="" height="265px">
    </div>
</div>

<div class="row mb-1">
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-pixabay-39317.jpg" alt="" class="" height="265px">
    </div>
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-taryn-elliott-3889855.jpg" alt="" class="" height="265px">
    </div>
    <div class="col me-1 d-flex justify-content-center border border-light-special">
        <img src="./img/pexels-vinicius-benedit-1082343.jpg" alt="" class="" height="265px">
    </div>
</div>`
})


