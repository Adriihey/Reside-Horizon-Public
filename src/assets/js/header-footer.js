class ResideHeader extends HTMLElement{connectedCallback(){this.innerHTML=`
    <header class="navbar navbar-expand-lg position-sticky top-0 start-0 end-0 z-3">
        <div class="container-fluid justify-content-center position-relative">
            <div class=" row w-100">
                <div class="col-12 col-lg-4 d-flex justify-content-lg-center justify-content-between px-3 z-1">
                    <a class="navbar-brand" href="/">
                        <img class="logo" src="/src/assets/img/reside horizon logo.webp" alt="logo">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div class="hide-mobile col">
                    <div class="collapse navbar-collapse d-lg-flex justify-content-lg-center align-items-center h-100" id="navbarNav">
                        <ul class="navbar-nav ps-1 d-lg-flex justify-content-lg-center align-items-start align-items-lg-center gap-lg-4 gap-0">
                            <li class="nav-item">
                                <a class="nav-link fw-bold fs-6" href="/">HOME</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold fs-6" href="what-we-do.html">WHAT WE DO</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold fs-6" href="who-we-are.html">WHO WE ARE</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold fs-6" href="contact-us.html">CONTACT US</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link fw-bold fs-6" href="reside-career.html">CAREER</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
    `}}class ResideFooter extends HTMLElement{connectedCallback(){this.innerHTML=`
    <footer class="container-fluid px-md-5 py-5 fw-light">
        <div class="row">
            <div class="col-12 col-md-6 d-flex px-md-2 px-lg-5 justify-content-center justify-content-md-start pb-4">
                <div class="d-flex flex-column gap-3 px-md-2 px-lg-5 text-md-start text-center">
                    <a href="/">
                        <img class="logo" src="/src/assets/img/reside horizon logo.webp" alt="logo">
                    </a>
                    <p class="m-0">We serve global businesses with cutting-edge, <br class="d-none d-md-inline-block">tailored solutions to optimize operations, reduce costs, <br class="d-none d-md-inline-block">and enhance productivity.
</p>
                    <div class="d-flex gap-3 justify-content-center justify-content-md-start">
                        <a href="#" class="socials">
                            <svg fill="#f26d23" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M169.5,357.6l-2.9,38.3h-39.3v133H77.7v-133H51.2v-38.3h26.5v-25.7c0-11.3,0.3-28.8,8.5-39.7c8.7-11.5,20.6-19.3,41.1-19.3 c33.4,0,47.4,4.8,47.4,4.8l-6.6,39.2c0,0-11-3.2-21.3-3.2c-10.3,0-19.5,3.7-19.5,14v29.9H169.5z"></path> </g></svg>
                        </a>
                        <a href="#" class="socials">
                            <svg fill="#f26d23" height="30px" width="30px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-143 145 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7c0-15.8,12.1-27.7,30.5-27.7 c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6c0-21.6-8.8-36.4-28.3-36.4 c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1c3.3-11,21.2-26.6,49.8-26.6 c35.5,0,63.3,23,63.3,72.4V508.1z"></path> </g></svg>
                        </a>
                        
                    </div>
                    <p>&copy; All Rights Reserved Reside Horizon</p>
                </div>
            </div>
            <div class="col-12 col-md-6 d-flex px-lg-5 px-md-2 justify-content-center justify-content-md-end">
                <div class=" px-md-2 px-lg-5 fw-light d-flex flex-column gap-2 text-md-start text-center">
                    <p class="fw-bold">Company</p>
                    <a href="#">Help & Support</a>
                    <a href="#">Terms & Condition</a>
                    <a href="#">Privacy Policy</a>
                    <a href="/src/assets/pdf/RH-Brochure-R2.pdf" download>Brochure</a>
                </div>
            </div>
        </div>
    </footer>  
    `}}customElements.define("reside-header",ResideHeader),customElements.define("reside-footer",ResideFooter);