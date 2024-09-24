// Logo and navigation bar section 
const setHeaderContainer = () => {
    const headerContainer = document.getElementById('header-container');
        // create a div
    const headerCard = document.createElement('div');
       // set classlist
    headerCard.classList = `grid md:grid-cols-2`;
       // set inner html
    headerCard.innerHTML = `                 
        <a href="#" class="logo"> MAHP</a>
        <box-icon name='menu' id="menu_icon"></box-icon>
        <nav class="navbar justify-evenly">
            <a href="#home" class="active">Home</a>
            <a href="#about">About</a>
            <a href="#project">project</a>
            <a href="#contact">contact</a>
        </nav>
 `;
      // append child
 headerContainer.appendChild(headerCard);
}
setHeaderContainer();


//Home section 
const SetHomeContainer = () =>{
    const homeContainer = document.getElementById('home-container');
    const homeCard = document.createElement('div');
    homeCard.classList = `grid grid-cols-1 md:grid-cols-2 gap-2`;
    homeCard.innerHTML = `            
            <div class="home_content md:pt-64">
                    <h3 class="pb-2">Hello, It's Me...</h3>
                    <h1 class="text-7xl font-semibold py-12">Md Arman Hosen Patoary </h1>
                    <h3 class="pb-2">And I'm a <span>Frontend Developer</span></h3>
                    <p>Learner| Software Engineer| Web Developer</p>

                <div class="social_media">
                    <a href="https://www.facebook.com/armanhossen.fahim.1"><i class='bx bxl-facebook'></i></a>
                    <a href="https://x.com/Arman_Fam"><i class='bx bxl-twitter'></i></a>
                    <a href="https://github.com/Md-Arman-Hosen"><i class='bx bxl-github'></i></a>
                    <a href="https://www.linkedin.com/in/md-arman-hosen-patoary-5b409b20b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i
                            class='bx bxl-linkedin'></i></a>
                </div>


                <a href="https://drive.usercontent.google.com/u/0/uc?id=1PziHf3nhSCkICoWAfeZ7ukJ8fzPLg5D7&export=download"
                    class="btn md:btn-md lg:btn-lg btn-accent text-white text-2xl">Download CV</a>
            </div>
            <div class="home_img">
                <img class="mt-32 md:mt-64 lg:mt-52 xl:mt-44 mx-auto w-5/6 rounded-full" src="photos/index-page.png"
                    alt="home image">
            </div>`;

            homeContainer.appendChild(homeCard);
}

SetHomeContainer();

const SetAboutContainer = () => {
    const aboutContainer = document.getElementById('about-container');
    const aboutCard = document.createElement ('div');
    aboutCard.classList = `grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2`;
    aboutCard.innerHTML = `            <div class="about_img">
                <img class="md:mt-52 lg:mt-64 mx-auto w-2/4 md:w-3/4 rounded-full" src="photos/about-section.png"
                    alt="about section image">
            </div>

            <div class="about_content pt-10 md:pt-64">
                <h2 class="heading">About <span>Me</span></h2>
                <h3>Frontend Developer</h3>
                <p>Hello, this is Arman, a Dedicated Frontend Developer from the vibrant heart of Bangladesh.
                    Web Development isn't just my profession; it's my lifeblood. I'm more than just a Coder; I'm
                    acreative
                    problem solver. I transform my imagination and dreams into interactive and visually stunning web
                    experiences through code and design. I specialize in creating responsive, user-friendly interfaces
                    and
                    have a keen eye for detail. My skills encompass HTML, CSS, JavaScript, and various other modern web
                    technologies. I love building web applications that are not only functional but also beautiful and
                    engaging.</p>
                <a href="#" class="btn md:btn-md lg:btn-lg btn-accent text-white text-2xl">Read more</a>
                <!-- btn-xs sm:btn-sm -->
            </div>`;

            aboutContainer.appendChild(aboutCard);

}
SetAboutContainer();