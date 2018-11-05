<template>
  <div id="app">
    <div class="page">
        <header class="header">
            <div class="header-wrap">
                <div class="header__menu-wrap">
                    <div class="header__menu">
                        <div class="header__menu-siteTitle">Arthome</div>
                        <aside class="burger">
                            <button class="burger__button">
                                <div class="burger__spacer"></div>
                                <div class="burger__spacer"></div>
                                <div class="burger__spacer"></div>
                            </button>
                        </aside>
                        <nav class="navigation">
                            <ul class="navigation__list">
                                <li class="navigation__item">
                                    <div class="navigation__name-wrap">
                                        <a href="#" class="navigation__name">Digest</a>
                                        <span class="navigation__item-quantity">1045</span>
                                    </div>
                                </li>
                                <li class="navigation__item">
                                    <div class="navigation__name-wrap">
                                        <a href="#" class="navigation__name">Artists</a>
                                        <span class="navigation__item-quantity">235</span>
                                    </div>
                                </li>
                                <li class="navigation__item">
                                    <div class="navigation__name-wrap">
                                        <a href="#" class="navigation__name">Gallery</a>
                                        <span class="navigation__item-quantity">831</span>
                                    </div>
                                </li>

                                <li class="navigation__item">
                                    <div class="navigation__name-wrap">
                                        <a href="#" class="navigation__name">About</a>
                                    </div>
                                </li>
                                <li class="navigation__item">
                                    <div class="navigation__name-wrap">
                                        <a href="#" class="navigation__name">Events</a>
                                    </div>
                                </li>

                            </ul>
                        </nav>
                        <div class="header__login login">
                            <div class="login__block login__block_join"><a href="#" class="login__item">Join</a></div>
                            <div class="login__block login__block_sign"><a href="#" class="login__item">Sign in</a></div>
                        </div>
                    </div>
                </div>
                <div class="header__main">
                    <div class="header__widget">
                        <div class="widget">
                            <h3 class="widget__title">Last viewed</h3>
                            <div class="widget__item widget__item_first">
                                <img src="./img/widjet-1.png" alt="photo" class="widget__image">
                            </div>
                            <div class="widget__item widget__item_second">
                                <img src="./img/widjet-2.png" alt="photo" class="widget__image">

                            </div>

                        </div>
                    </div>

                    <div class="header__content">
                        <h1 class="header__title">The World’s Leading Online Art Gallery</h1>
                        <p class="header__text">Discover new works by emerging artists from around the world</p>



                        <div class="menu">
                            <a class="menu__item" href="#Paintings">
                                <figure class="menu__image-wrap">
                                    <picture>
                                        <source srcset='./img/paintings.png' />
                                        <img class='menu__image' src="./img/paintings.png" alt="Paintings">
                                    </picture>
                                    <figcaption class="menu__title">Paintings</figcaption>
                                </figure>
                            </a>
                            <a class="menu__item" href="#Prints">
                                <figure class="menu__image-wrap">
                                    <picture>
                                        <source srcset='./img/prints.png' />
                                        <img class='menu__image' src="./img/prints.png" alt="Prints">
                                    </picture>
                                    <figcaption class="menu__title">Prints</figcaption>
                                </figure>
                            </a>
                            <a class="menu__item" href="#Photographs">
                                <figure class="menu__image-wrap">
                                    <picture>
                                        <source srcset='./img/photographs.png' />
                                        <img class='menu__image' src="./img/photographs.png" alt="Photographs">
                                    </picture>
                                    <figcaption class="menu__title">Photographs</figcaption>
                                </figure>
                            </a>
                            <a class="menu__item" href="#Sculptures">
                                <figure class="menu__image-wrap">
                                    <picture>
                                        <source srcset='./img/sculptures.png' />
                                        <img class='menu__image' src="./img/sculptures.png" alt="Sculptures">
                                    </picture>
                                    <figcaption class="menu__title">Sculptures</figcaption>
                                </figure>
                            </a>
                            <a class="menu__item" href="#Drawings">
                                <figure class="menu__image-wrap">
                                    <picture>
                                        <source srcset='./img/drawings.png' />
                                        <img class='menu__image' src="./img/drawings.png" alt="Drawings">
                                    </picture>
                                    <figcaption class="menu__title">Drawings</figcaption>
                                </figure>
                            </a>
                            <a class="menu__item" href="#Collages">
                                <figure class="menu__image-wrap">
                                    <picture>
                                        <source srcset='./img/collages.png' />
                                        <img class='menu__image' src="./img/collages.png" alt="Collages">
                                    </picture>
                                    <figcaption class="menu__title">Collages</figcaption>
                                </figure>
                            </a>
                            <a class="menu__item" href="#Digital-Art">
                                <figure class="menu__image-wrap">
                                    <picture>
                                        <source srcset='./img/digital-art.png' />
                                        <img class='menu__image' src="./img/digital-art.png" alt="Digital Art">
                                    </picture>
                                    <figcaption class="menu__title">Digital Art</figcaption>
                                </figure>
                            </a>

                        </div>
                    </div>
                </div>
            </div>


        </header>

        <div class="picks">
            <div class="block-title">
                <div class="block-title__wrap">
                    <h2 class="block-title__title">Editor's picks</h2>
                    <span class="block-title__views">see all 147</span>
                </div>
            </div>
            <div class="picks-container">
                <div class="picks-container__block">
                    <figure class="picks-container__img-container">
                        <picture class="picks-container__banner">
                            <source srcset="./img/picks-image-1.png">
                            <img src="./img/picks-image-1.png" alt="picks-image-1" class="picks-container__image">
                        </picture>
                        <figcaption class="picks-container__discription">
                            <h3 class="picks-container__title">Two's company...
                            </h3>
                            <p class="picks-container__text">Discover artists experimenting with all manner of</p>
                        </figcaption>
                    </figure>
                </div>
                <div class="picks-container__block">
                    <figure class="picks-container__img-container">
                        <picture class="picks-container__banner">
                            <source srcset="./img/picks-image-2.png">
                            <img src="./img/picks-image-2.png" alt="picks-image-2" class="picks-container__image">
                        </picture>
                    </figure>
                    <figcaption class="picks-container__discription">
                        <h3 class="picks-container__title">Landscapes</h3>
                        <p class="picks-container__text">Turner, Emin, Hockney and now these Artfinder</p>
                    </figcaption>
                </div>
                <div class="picks-container__block">
                    <figure class="picks-container__img-container">
                        <picture class="picks-container__banner">
                            <source srcset="./img/picks-image-3.png">
                            <img src="./img/picks-image-3.png" alt="picks-image-3" class="picks-container__image">
                        </picture>
                    </figure>
                    <figcaption class="picks-container__discription">
                        <h3 class="picks-container__title">Cityscapes and Urban
                        </h3>
                        <p class="picks-container__text">For those times when just one artwork won't do,</p>
                    </figcaption>
                </div>
                <div class="picks-container__block">
                    <figure class="picks-container__img-container">
                        <picture class="picks-container__banner">
                            <source srcset="./img/picks-image-4.png">
                            <img src="./img/picks-image-4.png" alt="picks-image-4" class="picks-container__image">
                        </picture>
                    </figure>
                    <figcaption class="picks-container__discription">
                        <h3 class="picks-container__title">Artworks by Ann Marie </h3>
                        <p class="picks-container__text">At Artfinder we believe that you should buy art</p>
                    </figcaption>
                </div>
                <div class="picks-container__block">
                    <figure class="picks-container__img-container">
                        <picture class="picks-container__banner">
                            <source srcset="./img/picks-image-5.png">
                            <img src="./img/picks-image-5.png" alt="picks-image-5" class="picks-container__image">
                        </picture>
                    </figure>
                    <figcaption class="picks-container__discription">
                        <h3 class="picks-container__title">Brooke's favorites
                        </h3>
                        <p class="picks-container__text">Discover artists experimenting with all manner of</p>
                    </figcaption>
                </div>
                <div class="picks-container__block">
                    <figure class="picks-container__img-container">
                        <picture class="picks-container__banner">
                            <source srcset="./img/picks-image-6.png">
                            <img src="./img/picks-image-6.png" alt="picks-image-6" class="picks-container__image">
                        </picture>
                    </figure>
                    <figcaption class="picks-container__discription">
                        <h3 class="picks-container__title">Figures & forms
                        </h3>
                        <p class="picks-container__text">Turner, Emin, Hockney and now these Artfinder</p>
                    </figcaption>
                </div>
            </div>
        </div>

        <div class="celebrating">
            <div class="block-title">
                <div class="block-title__wrap">
                    <h2 class="block-title__title">Celebrating Artists</h2>
                    <span class="block-title__views">see all 235</span>
                </div>
            </div>
            <div class="celebrating-container">
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/ksavera-1.png">
                            <img src="./img/ksavera-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/ksavera-2.png">
                            <img src="./img/ksavera-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/ksavera-3.png">
                            <img src="./img/ksavera-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/ksavera-4.png">
                            <img src="./img/ksavera-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="">
                            <img src="./img/ksavera.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Ksavera</h3>
                            <p class="celebrating__author-from">Russia</p>
                        </div>
                    </div>
                </div>
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/hunter-1.png">
                            <img src="./img/hunter-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/hunter-2.png">
                            <img src="./img/hunter-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/hunter-3.png">
                            <img src="./img/hunter-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/hunter-4.png">
                            <img src="./img/hunter-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="./img/hunter.png">
                            <img src="./img/hunter.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Ronald Hunter</h3>
                            <p class="celebrating__author-from">Germany</p>
                        </div>
                    </div>
                </div>
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/whelan-1.png">
                            <img src="./img/whelan-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/whelan-2.png">
                            <img src="./img/whelan-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/whelan-3.png">
                            <img src="./img/whelan-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/whelan-4.png">
                            <img src="./img/whelan-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="./img/whelan.png">
                            <img src="./img/whelan.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Fintan Whelan</h3>
                            <p class="celebrating__author-from">Germany</p>
                        </div>
                    </div>
                </div>
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/artist-1.png">
                            <img src="./img/artist-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/artist-2.png">
                            <img src="./img/artist-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/artist-3.png">
                            <img src="./img/artist-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/artist-4.png">
                            <img src="./img/artist-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="./img/artist.png">
                            <img src="./img/artist.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Name Artist</h3>
                            <p class="celebrating__author-from">Country</p>
                        </div>
                    </div>
                </div>
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/belanszky-1.png">
                            <img src="./img/belanszky-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/belanszky-2.png">
                            <img src="./img/belanszky-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/belanszky-3.png">
                            <img src="./img/belanszky-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/belanszky-4.png">
                            <img src="./img/belanszky-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="./img/belanszky.png">
                            <img src="./img/belanszky.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Beata Belanszky</h3>
                            <p class="celebrating__author-from">Hungary</p>
                        </div>
                    </div>
                </div>
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/leonardi-1.png">
                            <img src="./img/leonardi-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/leonardi-2.png">
                            <img src="./img/leonardi-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/leonardi-3.png">
                            <img src="./img/leonardi-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/leonardi-4.png">
                            <img src="./img/leonardi-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="./img/leonardi.png">
                            <img src="./img/leonardi.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Manuel Leonardi</h3>
                            <p class="celebrating__author-from">France</p>
                        </div>
                    </div>
                </div>
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/abernethy-1.png">
                            <img src="./img/abernethy-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/abernethy-2.png">
                            <img src="./img/abernethy-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/abernethy-3.png">
                            <img src="./img/abernethy-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/abernethy-4.png">
                            <img src="./img/abernethy-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="./img/abernethy.png">
                            <img src="./img/abernethy.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Hugh Abernethy</h3>
                            <p class="celebrating__author-from">United Kingdom</p>
                        </div>
                    </div>
                </div>
                <div class="celebrating__block">
                    <div class="celebrating__picture-block">
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/shulman-1.png">
                            <img src="./img/shulman-1.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/shulman-2.png">
                            <img src="./img/shulman-2.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/shulman-3.png">
                            <img src="./img/shulman-3.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                        <picture class="celebrating__picture-item">
                            <source scrset="./img/shulman-4.png">
                            <img src="./img/shulman-4.png" alt="celebrating image" class="celebrating__image">
                        </picture>
                    </div>
                    <div class="celebrating__author__block">
                        <picture class="celebrating__author-avatar">
                            <source srcset="./img/shulman.png">
                            <img src="./img/shulman.png" alt="author avatar" class="celebrating__author-image">
                        </picture>
                        <div class="celebrating__autor-info-block">
                            <h3 class="celebrating__author-name">Igor Shulman</h3>
                            <p class="celebrating__author-from">Czech Republic</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>

        <div class="select">
            <div class="select__block">
                <img src="./img/bg2.png" alt="123" class="select__image">
                <button class="select__btn-question">Are You An Artist?</button>
            </div>
            <div class="select__block">
                <img src="./img/bg2.png" alt="123" class="select__image">
                <button class="select__btn-question">Are you a buyer?</button>
            </div>
        </div>

        <div class="events">

            <div class="block-title">
                <div class="block-title__wrap">
                    <h2 class="block-title__title">Events</h2>
                    <span class="block-title__views">see all 62</span>
                </div>
            </div>
            <div class="events-container">
                <div class="events__block">
                    <div class="events__wrap">
                        <picture class="events__pic">
                            <source srcset="./img/events-1.png">
                            <img src="./img/events-1.png" alt="events image" class="events__image">
                        </picture>
                        <div class="events__description">
                            <h3 class="events__title">Two's company...</h3>
                            <p class="events__date">17 august — 6 september</p>
                            <p class="events__text">For those times when just one artwork</p>
                        </div>
                    </div>

                </div>
                <div class="events__block">
                    <div class="events__wrap">
                        <picture class="events__pic">
                            <source srcset="./img/events-2.png">
                            <img src="./img/events-2.png" alt="events image" class="events__image">
                        </picture>
                        <div class="events__description">
                            <h3 class="events__title">Shopping just got personal.</h3>
                            <p class="events__date">13 july</p>
                            <p class="events__text">At Artfinder we believe that you should buy art because you</p>
                        </div>
                    </div>
                </div>
                <div class="events__block">
                    <div class="events__wrap">
                        <picture class="events__pic">
                            <source srcset="./img/events-3.png">
                            <img src="./img/events-3.png" alt="events image" class="events__image">
                        </picture>
                        <div class="events__description">
                            <h3 class="events__title">Get experimental with mixed-media</h3>
                            <p class="events__date">18 september</p>
                            <p class="events__text">Discover artists experimenting with all manner of unusual</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <footer class="ftr">
            <div class="ftr-container">
                <div class="ftr__block ftr__main">
                    <div class="ftr__input-wrap">
                        <h3 class="ftr__title">Your regional settings</h3>
                        <div class="ftr__input-list">
                            <div class="ftr__input-block">
                                <input class="ftr__input" type="text" />
                                <button class="ftr__input-arrow"></button>
                            </div>
                            <div class="ftr__input-block">
                                <input class="ftr__input" type="text" />
                                <button class="ftr__input-arrow"></button>
                            </div>
                            <div class="ftr__input-block">
                                <input class="ftr__input" type="text" />
                                <button class="ftr__input-arrow"></button>
                            </div>
                            <div class="ftr__input-block">
                                <input class="ftr__input" type="text" />
                                <button class="ftr__input-arrow"></button>
                            </div>
                        </div>
                        <div class="ftr__copirate">© Arthome 2017</div>
                        <div class="ftr__social">
                            <a href="#" class="social__link-wrap">
                                <svg class="social__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="30" height="30">
                                    <defs>
                                        <clipPath id="clip_0">
                                            <rect x="-100" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_0)">
                                        <path fill="rgb(49,74,107)" stroke="none" d="M15 0L15 0Q15.3842 0 15.7658 0.0174863Q16.1475 0.0349725 16.5257 0.0699093Q16.904 0.104846 17.2782 0.157162Q17.6523 0.209478 18.0216 0.279067Q18.3908 0.348656 18.7544 0.435375Q19.118 0.522095 19.4753 0.625768Q19.8325 0.729441 20.1826 0.849856Q20.5327 0.970271 20.875 1.10718Q21.2173 1.24409 21.551 1.39722Q21.8848 1.55035 22.2093 1.71939Q22.5339 1.88842 22.8485 2.07301Q23.1632 2.25761 23.4674 2.45739Q23.7715 2.65716 24.0645 2.87172Q24.3576 3.08627 24.6389 3.31516Q24.9202 3.54405 25.1892 3.78681Q25.4581 4.02958 25.7143 4.28571Q25.9704 4.54185 26.2132 4.81085Q26.456 5.07984 26.6848 5.36113Q26.9137 5.64243 27.1283 5.93546Q27.3428 6.22849 27.5426 6.53265Q27.7424 6.83681 27.927 7.15148Q28.1116 7.46615 28.2806 7.7907Q28.4496 8.11524 28.6028 8.44899Q28.7559 8.78274 28.8928 9.12502Q29.0297 9.4673 29.1502 9.81741Q29.2706 10.1675 29.3742 10.5247Q29.4779 10.882 29.5646 11.2456Q29.6514 11.6092 29.7209 11.9784Q29.7905 12.3477 29.8428 12.7218Q29.8952 13.096 29.9301 13.4743Q29.965 13.8525 29.9825 14.2342Q30 14.6158 30 15L30 15Q30 15.3842 29.9825 15.7658Q29.965 16.1475 29.9301 16.5257Q29.8952 16.904 29.8428 17.2782Q29.7905 17.6523 29.7209 18.0216Q29.6514 18.3908 29.5646 18.7544Q29.4779 19.118 29.3742 19.4753Q29.2706 19.8325 29.1502 20.1826Q29.0297 20.5327 28.8928 20.875Q28.7559 21.2173 28.6028 21.551Q28.4496 21.8848 28.2806 22.2093Q28.1116 22.5339 27.927 22.8485Q27.7424 23.1632 27.5426 23.4674Q27.3428 23.7715 27.1283 24.0645Q26.9137 24.3576 26.6848 24.6389Q26.456 24.9202 26.2132 25.1892Q25.9704 25.4581 25.7143 25.7143Q25.4581 25.9704 25.1892 26.2132Q24.9202 26.456 24.6389 26.6848Q24.3576 26.9137 24.0645 27.1283Q23.7715 27.3428 23.4674 27.5426Q23.1632 27.7424 22.8485 27.927Q22.5339 28.1116 22.2093 28.2806Q21.8848 28.4496 21.551 28.6028Q21.2173 28.7559 20.875 28.8928Q20.5327 29.0297 20.1826 29.1501Q19.8325 29.2706 19.4753 29.3742Q19.118 29.4779 18.7544 29.5646Q18.3908 29.6513 18.0216 29.7209Q17.6523 29.7905 17.2782 29.8428Q16.904 29.8952 16.5257 29.9301Q16.1475 29.965 15.7658 29.9825Q15.3842 30 15 30L15 30Q14.6158 30 14.2342 29.9825Q13.8525 29.965 13.4743 29.9301Q13.096 29.8952 12.7218 29.8428Q12.3477 29.7905 11.9784 29.7209Q11.6092 29.6513 11.2456 29.5646Q10.882 29.4779 10.5247 29.3742Q10.1675 29.2706 9.81741 29.1501Q9.4673 29.0297 9.12502 28.8928Q8.78274 28.7559 8.44899 28.6028Q8.11524 28.4496 7.79069 28.2806Q7.46615 28.1116 7.15148 27.927Q6.83681 27.7424 6.53265 27.5426Q6.22849 27.3428 5.93546 27.1283Q5.64243 26.9137 5.36113 26.6848Q5.07984 26.456 4.81085 26.2132Q4.54185 25.9704 4.28571 25.7143Q4.02958 25.4581 3.78681 25.1892Q3.54405 24.9202 3.31516 24.6389Q3.08627 24.3576 2.87172 24.0645Q2.65716 23.7715 2.45739 23.4674Q2.25761 23.1632 2.07301 22.8485Q1.88842 22.5339 1.71939 22.2093Q1.55035 21.8848 1.39722 21.551Q1.24409 21.2173 1.10718 20.875Q0.970271 20.5327 0.849856 20.1826Q0.729441 19.8325 0.625768 19.4753Q0.522095 19.118 0.435375 18.7544Q0.348656 18.3908 0.279067 18.0216Q0.209478 17.6523 0.157162 17.2782Q0.104846 16.904 0.0699093 16.5257Q0.0349725 16.1475 0.0174863 15.7658Q0 15.3842 0 15L0 15Q0 14.6158 0.0174863 14.2342Q0.0349725 13.8525 0.0699093 13.4743Q0.104846 13.096 0.157162 12.7218Q0.209478 12.3477 0.279067 11.9784Q0.348656 11.6092 0.435375 11.2456Q0.522095 10.882 0.625768 10.5247Q0.729441 10.1675 0.849856 9.81741Q0.970271 9.4673 1.10718 9.12502Q1.24409 8.78274 1.39722 8.44899Q1.55035 8.11524 1.71939 7.79069Q1.88842 7.46615 2.07301 7.15148Q2.25761 6.83681 2.45739 6.53265Q2.65716 6.22849 2.87172 5.93546Q3.08627 5.64243 3.31516 5.36113Q3.54405 5.07984 3.78681 4.81085Q4.02958 4.54185 4.28571 4.28571Q4.54185 4.02958 4.81085 3.78681Q5.07984 3.54405 5.36113 3.31516Q5.64243 3.08627 5.93546 2.87172Q6.22849 2.65716 6.53265 2.45739Q6.83681 2.25761 7.15148 2.07301Q7.46615 1.88842 7.7907 1.71939Q8.11524 1.55035 8.44899 1.39722Q8.78274 1.24409 9.12502 1.10718Q9.4673 0.970271 9.81741 0.849856Q10.1675 0.729441 10.5247 0.625768Q10.882 0.522095 11.2456 0.435375Q11.6092 0.348656 11.9784 0.279067Q12.3477 0.209478 12.7218 0.157162Q13.096 0.104846 13.4743 0.0699093Q13.8525 0.0349725 14.2342 0.0174863Q14.6158 0 15 0Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_1">
                                            <rect x="-100" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_1)">
                                        <path class="social__img_active" stroke="none" transform="translate(10.6577 7.89429)"
                                            d="M7.895 2.473L5.639 2.473C5.373 2.473 5.076 2.823 5.076 3.291L5.076 4.92L7.895 4.92L7.895 7.241L5.076 7.241L5.076 14.211L2.413 14.211L2.413 7.241L0 7.241L0 4.92L2.413 4.92L2.413 3.553C2.413 1.594 3.774 0 5.639 0L7.895 0L7.895 2.473Z" />
                                    </g>
                                </svg>
                            </a>
                            <a href="#" class="social__link-wrap">
                                <svg class="social__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="30" height="30">
                                    <defs>
                                        <clipPath id="clip_0">
                                            <rect x="-135" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_0)">
                                        <path fill="rgb(49,74,107)" stroke="none" d="M15 0L15 0Q15.3842 0 15.7658 0.0174863Q16.1475 0.0349725 16.5257 0.0699093Q16.904 0.104846 17.2782 0.157162Q17.6523 0.209478 18.0216 0.279067Q18.3908 0.348656 18.7544 0.435375Q19.118 0.522095 19.4753 0.625768Q19.8325 0.729441 20.1826 0.849856Q20.5327 0.970271 20.875 1.10718Q21.2173 1.24409 21.551 1.39722Q21.8848 1.55035 22.2093 1.71939Q22.5339 1.88842 22.8485 2.07301Q23.1632 2.25761 23.4674 2.45739Q23.7715 2.65716 24.0645 2.87172Q24.3576 3.08627 24.6389 3.31516Q24.9202 3.54405 25.1892 3.78681Q25.4581 4.02958 25.7143 4.28571Q25.9704 4.54185 26.2132 4.81085Q26.456 5.07984 26.6848 5.36113Q26.9137 5.64243 27.1283 5.93546Q27.3428 6.22849 27.5426 6.53265Q27.7424 6.83681 27.927 7.15148Q28.1116 7.46615 28.2806 7.7907Q28.4496 8.11524 28.6028 8.44899Q28.7559 8.78274 28.8928 9.12502Q29.0297 9.4673 29.1502 9.81741Q29.2706 10.1675 29.3742 10.5247Q29.4779 10.882 29.5646 11.2456Q29.6514 11.6092 29.7209 11.9784Q29.7905 12.3477 29.8428 12.7218Q29.8952 13.096 29.9301 13.4743Q29.965 13.8525 29.9825 14.2342Q30 14.6158 30 15L30 15Q30 15.3842 29.9825 15.7658Q29.965 16.1475 29.9301 16.5257Q29.8952 16.904 29.8428 17.2782Q29.7905 17.6523 29.7209 18.0216Q29.6514 18.3908 29.5646 18.7544Q29.4779 19.118 29.3742 19.4753Q29.2706 19.8325 29.1502 20.1826Q29.0297 20.5327 28.8928 20.875Q28.7559 21.2173 28.6028 21.551Q28.4496 21.8848 28.2806 22.2093Q28.1116 22.5339 27.927 22.8485Q27.7424 23.1632 27.5426 23.4674Q27.3428 23.7715 27.1283 24.0645Q26.9137 24.3576 26.6848 24.6389Q26.456 24.9202 26.2132 25.1892Q25.9704 25.4581 25.7143 25.7143Q25.4581 25.9704 25.1892 26.2132Q24.9202 26.456 24.6389 26.6848Q24.3576 26.9137 24.0645 27.1283Q23.7715 27.3428 23.4674 27.5426Q23.1632 27.7424 22.8485 27.927Q22.5339 28.1116 22.2093 28.2806Q21.8848 28.4496 21.551 28.6028Q21.2173 28.7559 20.875 28.8928Q20.5327 29.0297 20.1826 29.1501Q19.8325 29.2706 19.4753 29.3742Q19.118 29.4779 18.7544 29.5646Q18.3908 29.6513 18.0216 29.7209Q17.6523 29.7905 17.2782 29.8428Q16.904 29.8952 16.5257 29.9301Q16.1475 29.965 15.7658 29.9825Q15.3842 30 15 30L15 30Q14.6158 30 14.2342 29.9825Q13.8525 29.965 13.4743 29.9301Q13.096 29.8952 12.7218 29.8428Q12.3477 29.7905 11.9784 29.7209Q11.6092 29.6513 11.2456 29.5646Q10.882 29.4779 10.5247 29.3742Q10.1675 29.2706 9.81741 29.1501Q9.4673 29.0297 9.12502 28.8928Q8.78274 28.7559 8.44899 28.6028Q8.11524 28.4496 7.79069 28.2806Q7.46615 28.1116 7.15148 27.927Q6.83681 27.7424 6.53265 27.5426Q6.22849 27.3428 5.93546 27.1283Q5.64243 26.9137 5.36113 26.6848Q5.07984 26.456 4.81085 26.2132Q4.54185 25.9704 4.28571 25.7143Q4.02958 25.4581 3.78681 25.1892Q3.54405 24.9202 3.31516 24.6389Q3.08627 24.3576 2.87172 24.0645Q2.65716 23.7715 2.45739 23.4674Q2.25761 23.1632 2.07301 22.8485Q1.88842 22.5339 1.71939 22.2093Q1.55035 21.8848 1.39722 21.551Q1.24409 21.2173 1.10718 20.875Q0.970271 20.5327 0.849856 20.1826Q0.729441 19.8325 0.625768 19.4753Q0.522095 19.118 0.435375 18.7544Q0.348656 18.3908 0.279067 18.0216Q0.209478 17.6523 0.157162 17.2782Q0.104846 16.904 0.0699093 16.5257Q0.0349725 16.1475 0.0174863 15.7658Q0 15.3842 0 15L0 15Q0 14.6158 0.0174863 14.2342Q0.0349725 13.8525 0.0699093 13.4743Q0.104846 13.096 0.157162 12.7218Q0.209478 12.3477 0.279067 11.9784Q0.348656 11.6092 0.435375 11.2456Q0.522095 10.882 0.625768 10.5247Q0.729441 10.1675 0.849856 9.81741Q0.970271 9.4673 1.10718 9.12502Q1.24409 8.78274 1.39722 8.44899Q1.55035 8.11524 1.71939 7.79069Q1.88842 7.46615 2.07301 7.15148Q2.25761 6.83681 2.45739 6.53265Q2.65716 6.22849 2.87172 5.93546Q3.08627 5.64243 3.31516 5.36113Q3.54405 5.07984 3.78681 4.81085Q4.02958 4.54185 4.28571 4.28571Q4.54185 4.02958 4.81085 3.78681Q5.07984 3.54405 5.36113 3.31516Q5.64243 3.08627 5.93546 2.87172Q6.22849 2.65716 6.53265 2.45739Q6.83681 2.25761 7.15148 2.07301Q7.46615 1.88842 7.7907 1.71939Q8.11524 1.55035 8.44899 1.39722Q8.78274 1.24409 9.12502 1.10718Q9.4673 0.970271 9.81741 0.849856Q10.1675 0.729441 10.5247 0.625768Q10.882 0.522095 11.2456 0.435375Q11.6092 0.348656 11.9784 0.279067Q12.3477 0.209478 12.7218 0.157162Q13.096 0.104846 13.4743 0.0699093Q13.8525 0.0349725 14.2342 0.0174863Q14.6158 0 15 0Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_1">
                                            <rect x="-135" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_1)">
                                        <path class="social__img_active" stroke="none" transform="translate(18.9996 12)"
                                            d="M2.003 0L4.001 0C4.004 0.663 3.994 1.337 4.001 2C4.664 2.007 5.337 1.994 6 2L6 3.999C5.337 4.006 4.667 3.992 4.001 3.999C3.994 4.666 4.004 5.337 4.001 6L2.003 6C1.997 5.337 2.01 4.662 2.003 3.999C1.34 3.992 0.664 4.006 0 3.999L0 2C0.664 1.994 1.336 2.003 2.003 2C2.006 1.333 1.996 0.663 2.003 0" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_2">
                                            <rect x="-135" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_2)">
                                        <path class="social__img_active" stroke="none" transform="translate(6.00003 8.99976)"
                                            d="M0.0161727 5.70005C0.0691727 2.60905 2.96717 -0.0979465 6.12117 0.00505349C7.63117 -0.0639465 9.05117 0.581053 10.2092 1.48605C9.71517 2.03605 9.20417 2.56605 8.65717 3.06205C7.26617 2.11905 5.28817 1.85005 3.89717 2.93905C1.90717 4.28805 1.81617 7.47305 3.73017 8.92605C5.59117 10.5821 9.11017 9.75905 9.62417 7.22405C8.45817 7.20705 7.28917 7.22405 6.12317 7.18705C6.12117 6.50505 6.11817 5.82905 6.12117 5.14705C8.07017 5.14105 11.9712 5.14705 11.9712 5.14705C12.0882 6.75105 11.8722 8.45905 10.8662 9.78505C9.34417 11.8851 6.28717 12.4981 3.90317 11.5981C1.50917 10.7051 -0.184827 8.22705 0.0161727 5.70005" />
                                    </g>
                                </svg>
                            </a>
                            <a href="#" class="social__link-wrap">
                                <svg class="social__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="30" height="30">
                                    <defs>
                                        <clipPath id="clip_0">
                                            <rect x="-170" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_0)">
                                        <path fill="rgb(49,74,107)" stroke="none" d="M15 0L15 0Q15.3842 0 15.7658 0.0174863Q16.1475 0.0349725 16.5257 0.0699093Q16.904 0.104846 17.2782 0.157162Q17.6523 0.209478 18.0216 0.279067Q18.3908 0.348656 18.7544 0.435375Q19.118 0.522095 19.4753 0.625768Q19.8325 0.729441 20.1826 0.849856Q20.5327 0.970271 20.875 1.10718Q21.2173 1.24409 21.551 1.39722Q21.8848 1.55035 22.2093 1.71939Q22.5339 1.88842 22.8485 2.07301Q23.1632 2.25761 23.4674 2.45739Q23.7715 2.65716 24.0645 2.87172Q24.3576 3.08627 24.6389 3.31516Q24.9202 3.54405 25.1892 3.78681Q25.4581 4.02958 25.7143 4.28571Q25.9704 4.54185 26.2132 4.81085Q26.456 5.07984 26.6848 5.36113Q26.9137 5.64243 27.1283 5.93546Q27.3428 6.22849 27.5426 6.53265Q27.7424 6.83681 27.927 7.15148Q28.1116 7.46615 28.2806 7.7907Q28.4496 8.11524 28.6028 8.44899Q28.7559 8.78274 28.8928 9.12502Q29.0297 9.4673 29.1502 9.81741Q29.2706 10.1675 29.3742 10.5247Q29.4779 10.882 29.5646 11.2456Q29.6514 11.6092 29.7209 11.9784Q29.7905 12.3477 29.8428 12.7218Q29.8952 13.096 29.9301 13.4743Q29.965 13.8525 29.9825 14.2342Q30 14.6158 30 15L30 15Q30 15.3842 29.9825 15.7658Q29.965 16.1475 29.9301 16.5257Q29.8952 16.904 29.8428 17.2782Q29.7905 17.6523 29.7209 18.0216Q29.6514 18.3908 29.5646 18.7544Q29.4779 19.118 29.3742 19.4753Q29.2706 19.8325 29.1502 20.1826Q29.0297 20.5327 28.8928 20.875Q28.7559 21.2173 28.6028 21.551Q28.4496 21.8848 28.2806 22.2093Q28.1116 22.5339 27.927 22.8485Q27.7424 23.1632 27.5426 23.4674Q27.3428 23.7715 27.1283 24.0645Q26.9137 24.3576 26.6848 24.6389Q26.456 24.9202 26.2132 25.1892Q25.9704 25.4581 25.7143 25.7143Q25.4581 25.9704 25.1892 26.2132Q24.9202 26.456 24.6389 26.6848Q24.3576 26.9137 24.0645 27.1283Q23.7715 27.3428 23.4674 27.5426Q23.1632 27.7424 22.8485 27.927Q22.5339 28.1116 22.2093 28.2806Q21.8848 28.4496 21.551 28.6028Q21.2173 28.7559 20.875 28.8928Q20.5327 29.0297 20.1826 29.1501Q19.8325 29.2706 19.4753 29.3742Q19.118 29.4779 18.7544 29.5646Q18.3908 29.6513 18.0216 29.7209Q17.6523 29.7905 17.2782 29.8428Q16.904 29.8952 16.5257 29.9301Q16.1475 29.965 15.7658 29.9825Q15.3842 30 15 30L15 30Q14.6158 30 14.2342 29.9825Q13.8525 29.965 13.4743 29.9301Q13.096 29.8952 12.7218 29.8428Q12.3477 29.7905 11.9784 29.7209Q11.6092 29.6513 11.2456 29.5646Q10.882 29.4779 10.5247 29.3742Q10.1675 29.2706 9.81741 29.1501Q9.4673 29.0297 9.12502 28.8928Q8.78274 28.7559 8.44899 28.6028Q8.11524 28.4496 7.79069 28.2806Q7.46615 28.1116 7.15148 27.927Q6.83681 27.7424 6.53265 27.5426Q6.22849 27.3428 5.93546 27.1283Q5.64243 26.9137 5.36113 26.6848Q5.07984 26.456 4.81085 26.2132Q4.54185 25.9704 4.28571 25.7143Q4.02958 25.4581 3.78681 25.1892Q3.54405 24.9202 3.31516 24.6389Q3.08627 24.3576 2.87172 24.0645Q2.65716 23.7715 2.45739 23.4674Q2.25761 23.1632 2.07301 22.8485Q1.88842 22.5339 1.71939 22.2093Q1.55035 21.8848 1.39722 21.551Q1.24409 21.2173 1.10718 20.875Q0.970271 20.5327 0.849856 20.1826Q0.729441 19.8325 0.625768 19.4753Q0.522095 19.118 0.435375 18.7544Q0.348656 18.3908 0.279067 18.0216Q0.209478 17.6523 0.157162 17.2782Q0.104846 16.904 0.0699093 16.5257Q0.0349725 16.1475 0.0174863 15.7658Q0 15.3842 0 15L0 15Q0 14.6158 0.0174863 14.2342Q0.0349725 13.8525 0.0699093 13.4743Q0.104846 13.096 0.157162 12.7218Q0.209478 12.3477 0.279067 11.9784Q0.348656 11.6092 0.435375 11.2456Q0.522095 10.882 0.625768 10.5247Q0.729441 10.1675 0.849856 9.81741Q0.970271 9.4673 1.10718 9.12502Q1.24409 8.78274 1.39722 8.44899Q1.55035 8.11524 1.71939 7.79069Q1.88842 7.46615 2.07301 7.15148Q2.25761 6.83681 2.45739 6.53265Q2.65716 6.22849 2.87172 5.93546Q3.08627 5.64243 3.31516 5.36113Q3.54405 5.07984 3.78681 4.81085Q4.02958 4.54185 4.28571 4.28571Q4.54185 4.02958 4.81085 3.78681Q5.07984 3.54405 5.36113 3.31516Q5.64243 3.08627 5.93546 2.87172Q6.22849 2.65716 6.53265 2.45739Q6.83681 2.25761 7.15148 2.07301Q7.46615 1.88842 7.7907 1.71939Q8.11524 1.55035 8.44899 1.39722Q8.78274 1.24409 9.12502 1.10718Q9.4673 0.970271 9.81741 0.849856Q10.1675 0.729441 10.5247 0.625768Q10.882 0.522095 11.2456 0.435375Q11.6092 0.348656 11.9784 0.279067Q12.3477 0.209478 12.7218 0.157162Q13.096 0.104846 13.4743 0.0699093Q13.8525 0.0349725 14.2342 0.0174863Q14.6158 0 15 0Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_1">
                                            <rect x="-170" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_1)">
                                        <path class="social__img_active" stroke="none" transform="translate(7 7)" d="M4.70163 0.0481333C5.5549 0.0092 5.82733 0 8.00003 0C10.1727 0 10.4451 0.0092 11.2984 0.0481333C12.1499 0.0869667 12.7314 0.222233 13.2403 0.42C13.7664 0.624433 14.2125 0.897967 14.6573 1.3427C15.102 1.7875 15.3756 2.23363 15.58 2.7597C15.7778 3.26857 15.913 3.8501 15.9519 4.7016C15.9908 5.5549 16 5.82733 16 8C16 10.1727 15.9908 10.4451 15.9519 11.2984C15.913 12.1499 15.7778 12.7314 15.58 13.2403C15.3756 13.7664 15.102 14.2125 14.6573 14.6573C14.2125 15.102 13.7664 15.3756 13.2403 15.58C12.7314 15.7778 12.1499 15.913 11.2984 15.9519C10.4451 15.9908 10.1727 16 8.00003 16C5.82733 16 5.5549 15.9908 4.70163 15.9519C3.8501 15.913 3.26857 15.7778 2.7597 15.58C2.23363 15.3756 1.7875 15.102 1.3427 14.6573C0.897967 14.2125 0.624433 13.7664 0.42 13.2403C0.222233 12.7314 0.0869667 12.1499 0.0481333 11.2984C0.0092 10.4451 0 10.1727 0 8C0 5.82733 0.0092 5.5549 0.0481333 4.7016C0.0869667 3.8501 0.222233 3.26857 0.42 2.7597C0.624433 2.23363 0.897967 1.7875 1.3427 1.3427C1.7875 0.897967 2.23363 0.624433 2.7597 0.42C3.26857 0.222233 3.8501 0.0869667 4.70163 0.0481333ZM11.2327 1.4881C10.3891 1.4496 10.1361 1.44143 8.00003 1.44143C5.8639 1.44143 5.61087 1.4496 4.7673 1.4881C3.98733 1.52367 3.56373 1.65397 3.28183 1.76353C2.9084 1.90867 2.64193 2.08203 2.36197 2.362C2.08203 2.6419 1.90867 2.9084 1.76353 3.28183C1.65397 3.56373 1.52367 3.98733 1.4881 4.7673C1.4496 5.61087 1.44143 5.8639 1.44143 8C1.44143 10.1361 1.4496 10.3891 1.4881 11.2327C1.52367 12.0127 1.65397 12.4363 1.76353 12.7182C1.90867 13.0916 2.08207 13.3581 2.36197 13.638C2.64193 13.918 2.9084 14.0913 3.28183 14.2365C3.56373 14.346 3.98733 14.4763 4.7673 14.5119C5.61077 14.5504 5.86373 14.5586 8.00003 14.5586C10.1363 14.5586 10.3892 14.5504 11.2327 14.5119C12.0127 14.4763 12.4363 14.346 12.7182 14.2365C13.0916 14.0913 13.3581 13.918 13.638 13.638C13.918 13.3581 14.0913 13.0916 14.2365 12.7182C14.346 12.4363 14.4763 12.0127 14.5119 11.2327C14.5504 10.3891 14.5586 10.1361 14.5586 8C14.5586 5.8639 14.5504 5.61087 14.5119 4.7673C14.4763 3.98733 14.346 3.56373 14.2365 3.28183C14.0913 2.9084 13.918 2.6419 13.638 2.362C13.3581 2.08203 13.0916 1.90867 12.7182 1.76353C12.4363 1.65397 12.0127 1.52367 11.2327 1.4881Z"
                                            fill-rule="evenodd" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_2">
                                            <rect x="-170" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_2)">
                                        <path class="social__img_active" stroke="none" transform="translate(10.8919 10.8918)"
                                            d="M0 4.1081C0 1.83923 1.83923 0 4.10813 0C6.37697 0 8.2162 1.83923 8.2162 4.1081C8.2162 6.37697 6.37697 8.2162 4.10813 8.2162C1.83923 8.2162 0 6.37697 0 4.1081ZM1.44143 4.1081C1.44143 5.58087 2.63533 6.77477 4.10813 6.77477C5.58087 6.77477 6.77477 5.58087 6.77477 4.1081C6.77477 2.63533 5.58087 1.44143 4.10813 1.44143C2.63533 1.44143 1.44143 2.63533 1.44143 4.1081Z"
                                            fill-rule="evenodd" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_3">
                                            <rect x="-170" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_3)">
                                        <path class="social__img_active" stroke="none" transform="translate(18.3104 9.76953)"
                                            d="M1.92 0.960033C1.92 1.49023 1.4902 1.92 0.959967 1.92C0.4298 1.92 0 1.49023 0 0.960033C0 0.429833 0.4298 0 0.959967 0C1.4902 0 1.92 0.429833 1.92 0.960033L1.92 0.960033Z" />
                                    </g>
                                </svg>
                            </a>
                            <a href="#" class="social__link-wrap">
                                <svg class="social__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="30" height="30">
                                    <defs>
                                        <clipPath id="clip_0">
                                            <rect x="-205" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_0)">
                                        <path fill="rgb(49,74,107)" stroke="none" d="M15 0L15 0Q15.3842 0 15.7658 0.0174863Q16.1475 0.0349725 16.5257 0.0699093Q16.904 0.104846 17.2782 0.157162Q17.6523 0.209478 18.0216 0.279067Q18.3908 0.348656 18.7544 0.435375Q19.118 0.522095 19.4753 0.625768Q19.8325 0.729441 20.1826 0.849856Q20.5327 0.970271 20.875 1.10718Q21.2173 1.24409 21.551 1.39722Q21.8848 1.55035 22.2093 1.71939Q22.5339 1.88842 22.8485 2.07301Q23.1632 2.25761 23.4674 2.45739Q23.7715 2.65716 24.0645 2.87172Q24.3576 3.08627 24.6389 3.31516Q24.9202 3.54405 25.1892 3.78681Q25.4581 4.02958 25.7143 4.28571Q25.9704 4.54185 26.2132 4.81085Q26.456 5.07984 26.6848 5.36113Q26.9137 5.64243 27.1283 5.93546Q27.3428 6.22849 27.5426 6.53265Q27.7424 6.83681 27.927 7.15148Q28.1116 7.46615 28.2806 7.7907Q28.4496 8.11524 28.6028 8.44899Q28.7559 8.78274 28.8928 9.12502Q29.0297 9.4673 29.1502 9.81741Q29.2706 10.1675 29.3742 10.5247Q29.4779 10.882 29.5646 11.2456Q29.6514 11.6092 29.7209 11.9784Q29.7905 12.3477 29.8428 12.7218Q29.8952 13.096 29.9301 13.4743Q29.965 13.8525 29.9825 14.2342Q30 14.6158 30 15L30 15Q30 15.3842 29.9825 15.7658Q29.965 16.1475 29.9301 16.5257Q29.8952 16.904 29.8428 17.2782Q29.7905 17.6523 29.7209 18.0216Q29.6514 18.3908 29.5646 18.7544Q29.4779 19.118 29.3742 19.4753Q29.2706 19.8325 29.1502 20.1826Q29.0297 20.5327 28.8928 20.875Q28.7559 21.2173 28.6028 21.551Q28.4496 21.8848 28.2806 22.2093Q28.1116 22.5339 27.927 22.8485Q27.7424 23.1632 27.5426 23.4674Q27.3428 23.7715 27.1283 24.0645Q26.9137 24.3576 26.6848 24.6389Q26.456 24.9202 26.2132 25.1892Q25.9704 25.4581 25.7143 25.7143Q25.4581 25.9704 25.1892 26.2132Q24.9202 26.456 24.6389 26.6848Q24.3576 26.9137 24.0645 27.1283Q23.7715 27.3428 23.4674 27.5426Q23.1632 27.7424 22.8485 27.927Q22.5339 28.1116 22.2093 28.2806Q21.8848 28.4496 21.551 28.6028Q21.2173 28.7559 20.875 28.8928Q20.5327 29.0297 20.1826 29.1501Q19.8325 29.2706 19.4753 29.3742Q19.118 29.4779 18.7544 29.5646Q18.3908 29.6513 18.0216 29.7209Q17.6523 29.7905 17.2782 29.8428Q16.904 29.8952 16.5257 29.9301Q16.1475 29.965 15.7658 29.9825Q15.3842 30 15 30L15 30Q14.6158 30 14.2342 29.9825Q13.8525 29.965 13.4743 29.9301Q13.096 29.8952 12.7218 29.8428Q12.3477 29.7905 11.9784 29.7209Q11.6092 29.6513 11.2456 29.5646Q10.882 29.4779 10.5247 29.3742Q10.1675 29.2706 9.81741 29.1501Q9.4673 29.0297 9.12502 28.8928Q8.78274 28.7559 8.44899 28.6028Q8.11524 28.4496 7.79069 28.2806Q7.46615 28.1116 7.15148 27.927Q6.83681 27.7424 6.53265 27.5426Q6.22849 27.3428 5.93546 27.1283Q5.64243 26.9137 5.36113 26.6848Q5.07984 26.456 4.81085 26.2132Q4.54185 25.9704 4.28571 25.7143Q4.02958 25.4581 3.78681 25.1892Q3.54405 24.9202 3.31516 24.6389Q3.08627 24.3576 2.87172 24.0645Q2.65716 23.7715 2.45739 23.4674Q2.25761 23.1632 2.07301 22.8485Q1.88842 22.5339 1.71939 22.2093Q1.55035 21.8848 1.39722 21.551Q1.24409 21.2173 1.10718 20.875Q0.970271 20.5327 0.849856 20.1826Q0.729441 19.8325 0.625768 19.4753Q0.522095 19.118 0.435375 18.7544Q0.348656 18.3908 0.279067 18.0216Q0.209478 17.6523 0.157162 17.2782Q0.104846 16.904 0.0699093 16.5257Q0.0349725 16.1475 0.0174863 15.7658Q0 15.3842 0 15L0 15Q0 14.6158 0.0174863 14.2342Q0.0349725 13.8525 0.0699093 13.4743Q0.104846 13.096 0.157162 12.7218Q0.209478 12.3477 0.279067 11.9784Q0.348656 11.6092 0.435375 11.2456Q0.522095 10.882 0.625768 10.5247Q0.729441 10.1675 0.849856 9.81741Q0.970271 9.4673 1.10718 9.12502Q1.24409 8.78274 1.39722 8.44899Q1.55035 8.11524 1.71939 7.79069Q1.88842 7.46615 2.07301 7.15148Q2.25761 6.83681 2.45739 6.53265Q2.65716 6.22849 2.87172 5.93546Q3.08627 5.64243 3.31516 5.36113Q3.54405 5.07984 3.78681 4.81085Q4.02958 4.54185 4.28571 4.28571Q4.54185 4.02958 4.81085 3.78681Q5.07984 3.54405 5.36113 3.31516Q5.64243 3.08627 5.93546 2.87172Q6.22849 2.65716 6.53265 2.45739Q6.83681 2.25761 7.15148 2.07301Q7.46615 1.88842 7.7907 1.71939Q8.11524 1.55035 8.44899 1.39722Q8.78274 1.24409 9.12502 1.10718Q9.4673 0.970271 9.81741 0.849856Q10.1675 0.729441 10.5247 0.625768Q10.882 0.522095 11.2456 0.435375Q11.6092 0.348656 11.9784 0.279067Q12.3477 0.209478 12.7218 0.157162Q13.096 0.104846 13.4743 0.0699093Q13.8525 0.0349725 14.2342 0.0174863Q14.6158 0 15 0Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_1">
                                            <rect x="-205" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_1)">
                                        <path class="social__img_active" stroke="none" transform="translate(7 7)" d="M8.00047 0C3.58253 0 0 3.58158 0 8.00047C0 11.2754 1.97001 14.0902 4.78956 15.3273C4.76698 14.7694 4.78579 14.0977 4.92785 13.49C5.08214 12.8408 5.95708 9.1313 5.95708 9.1313C5.95708 9.1313 5.70212 8.62045 5.70212 7.865C5.70212 6.6796 6.38984 5.79432 7.24502 5.79432C7.97225 5.79432 8.3241 6.34092 8.3241 6.99571C8.3241 7.7267 7.85747 8.82084 7.61757 9.83407C7.41718 10.6836 8.04281 11.3751 8.88011 11.3751C10.3957 11.3751 11.4165 9.42859 11.4165 7.12177C11.4165 5.36908 10.2358 4.05668 8.08796 4.05668C5.66167 4.05668 4.14982 5.86582 4.14982 7.88663C4.14982 8.5847 4.35491 9.07579 4.67666 9.45587C4.82531 9.6318 4.84506 9.70142 4.79144 9.90275C4.75381 10.0486 4.66537 10.4042 4.62868 10.5444C4.57506 10.7466 4.41136 10.82 4.22885 10.7448C3.11025 10.2885 2.58999 9.0645 2.58999 7.68813C2.58999 5.41612 4.50638 2.68972 8.30717 2.68972C11.3619 2.68972 13.3724 4.90151 13.3724 7.27324C13.3724 10.4117 11.6282 12.7562 9.05509 12.7562C8.19239 12.7562 7.37955 12.2895 7.10108 11.7599C7.10108 11.7599 6.63633 13.6029 6.53848 13.9585C6.36914 14.5747 6.03704 15.1919 5.73317 15.6717C6.45287 15.8843 7.21303 16 8.00047 16C12.4184 16 16 12.4184 16 8.00047C16 3.58158 12.4184 0 8.00047 0" />
                                    </g>
                                </svg>
                            </a>
                            <a href="#" class="social__link-wrap">
                                <svg class="social__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="30" height="30">
                                    <defs>
                                        <clipPath id="clip_0">
                                            <rect x="-240" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_0)">
                                        <path fill="rgb(49,74,107)" stroke="none" d="M15 0L15 0Q15.3842 0 15.7658 0.0174863Q16.1475 0.0349725 16.5257 0.0699093Q16.904 0.104846 17.2782 0.157162Q17.6523 0.209478 18.0216 0.279067Q18.3908 0.348656 18.7544 0.435375Q19.118 0.522095 19.4753 0.625768Q19.8325 0.729441 20.1826 0.849856Q20.5327 0.970271 20.875 1.10718Q21.2173 1.24409 21.551 1.39722Q21.8848 1.55035 22.2093 1.71939Q22.5339 1.88842 22.8485 2.07301Q23.1632 2.25761 23.4674 2.45739Q23.7715 2.65716 24.0645 2.87172Q24.3576 3.08627 24.6389 3.31516Q24.9202 3.54405 25.1892 3.78681Q25.4581 4.02958 25.7143 4.28571Q25.9704 4.54185 26.2132 4.81085Q26.456 5.07984 26.6848 5.36113Q26.9137 5.64243 27.1283 5.93546Q27.3428 6.22849 27.5426 6.53265Q27.7424 6.83681 27.927 7.15148Q28.1116 7.46615 28.2806 7.7907Q28.4496 8.11524 28.6028 8.44899Q28.7559 8.78274 28.8928 9.12502Q29.0297 9.4673 29.1502 9.81741Q29.2706 10.1675 29.3742 10.5247Q29.4779 10.882 29.5646 11.2456Q29.6514 11.6092 29.7209 11.9784Q29.7905 12.3477 29.8428 12.7218Q29.8952 13.096 29.9301 13.4743Q29.965 13.8525 29.9825 14.2342Q30 14.6158 30 15L30 15Q30 15.3842 29.9825 15.7658Q29.965 16.1475 29.9301 16.5257Q29.8952 16.904 29.8428 17.2782Q29.7905 17.6523 29.7209 18.0216Q29.6514 18.3908 29.5646 18.7544Q29.4779 19.118 29.3742 19.4753Q29.2706 19.8325 29.1502 20.1826Q29.0297 20.5327 28.8928 20.875Q28.7559 21.2173 28.6028 21.551Q28.4496 21.8848 28.2806 22.2093Q28.1116 22.5339 27.927 22.8485Q27.7424 23.1632 27.5426 23.4674Q27.3428 23.7715 27.1283 24.0645Q26.9137 24.3576 26.6848 24.6389Q26.456 24.9202 26.2132 25.1892Q25.9704 25.4581 25.7143 25.7143Q25.4581 25.9704 25.1892 26.2132Q24.9202 26.456 24.6389 26.6848Q24.3576 26.9137 24.0645 27.1283Q23.7715 27.3428 23.4674 27.5426Q23.1632 27.7424 22.8485 27.927Q22.5339 28.1116 22.2093 28.2806Q21.8848 28.4496 21.551 28.6028Q21.2173 28.7559 20.875 28.8928Q20.5327 29.0297 20.1826 29.1501Q19.8325 29.2706 19.4753 29.3742Q19.118 29.4779 18.7544 29.5646Q18.3908 29.6513 18.0216 29.7209Q17.6523 29.7905 17.2782 29.8428Q16.904 29.8952 16.5257 29.9301Q16.1475 29.965 15.7658 29.9825Q15.3842 30 15 30L15 30Q14.6158 30 14.2342 29.9825Q13.8525 29.965 13.4743 29.9301Q13.096 29.8952 12.7218 29.8428Q12.3477 29.7905 11.9784 29.7209Q11.6092 29.6513 11.2456 29.5646Q10.882 29.4779 10.5247 29.3742Q10.1675 29.2706 9.81741 29.1501Q9.4673 29.0297 9.12502 28.8928Q8.78274 28.7559 8.44899 28.6028Q8.11524 28.4496 7.79069 28.2806Q7.46615 28.1116 7.15148 27.927Q6.83681 27.7424 6.53265 27.5426Q6.22849 27.3428 5.93546 27.1283Q5.64243 26.9137 5.36113 26.6848Q5.07984 26.456 4.81085 26.2132Q4.54185 25.9704 4.28571 25.7143Q4.02958 25.4581 3.78681 25.1892Q3.54405 24.9202 3.31516 24.6389Q3.08627 24.3576 2.87172 24.0645Q2.65716 23.7715 2.45739 23.4674Q2.25761 23.1632 2.07301 22.8485Q1.88842 22.5339 1.71939 22.2093Q1.55035 21.8848 1.39722 21.551Q1.24409 21.2173 1.10718 20.875Q0.970271 20.5327 0.849856 20.1826Q0.729441 19.8325 0.625768 19.4753Q0.522095 19.118 0.435375 18.7544Q0.348656 18.3908 0.279067 18.0216Q0.209478 17.6523 0.157162 17.2782Q0.104846 16.904 0.0699093 16.5257Q0.0349725 16.1475 0.0174863 15.7658Q0 15.3842 0 15L0 15Q0 14.6158 0.0174863 14.2342Q0.0349725 13.8525 0.0699093 13.4743Q0.104846 13.096 0.157162 12.7218Q0.209478 12.3477 0.279067 11.9784Q0.348656 11.6092 0.435375 11.2456Q0.522095 10.882 0.625768 10.5247Q0.729441 10.1675 0.849856 9.81741Q0.970271 9.4673 1.10718 9.12502Q1.24409 8.78274 1.39722 8.44899Q1.55035 8.11524 1.71939 7.79069Q1.88842 7.46615 2.07301 7.15148Q2.25761 6.83681 2.45739 6.53265Q2.65716 6.22849 2.87172 5.93546Q3.08627 5.64243 3.31516 5.36113Q3.54405 5.07984 3.78681 4.81085Q4.02958 4.54185 4.28571 4.28571Q4.54185 4.02958 4.81085 3.78681Q5.07984 3.54405 5.36113 3.31516Q5.64243 3.08627 5.93546 2.87172Q6.22849 2.65716 6.53265 2.45739Q6.83681 2.25761 7.15148 2.07301Q7.46615 1.88842 7.7907 1.71939Q8.11524 1.55035 8.44899 1.39722Q8.78274 1.24409 9.12502 1.10718Q9.4673 0.970271 9.81741 0.849856Q10.1675 0.729441 10.5247 0.625768Q10.882 0.522095 11.2456 0.435375Q11.6092 0.348656 11.9784 0.279067Q12.3477 0.209478 12.7218 0.157162Q13.096 0.104846 13.4743 0.0699093Q13.8525 0.0349725 14.2342 0.0174863Q14.6158 0 15 0Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_1">
                                            <rect x="-240" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_1)">
                                        <path class="social__img_active" stroke="none" transform="translate(8.1736 9.375)"
                                            d="M12.927 2.914C12.932 3.041 12.936 3.168 12.936 3.297C12.936 7.201 9.963 11.703 4.529 11.703C2.861 11.703 1.307 11.213 0 10.375C0.233 10.402 0.468 10.416 0.706 10.416C2.09 10.416 3.364 9.943 4.375 9.15C3.082 9.127 1.992 8.273 1.614 7.1C1.795 7.135 1.981 7.152 2.171 7.152C2.44 7.152 2.701 7.117 2.949 7.049C1.598 6.777 0.578 5.584 0.578 4.152L0.578 4.115C0.977 4.336 1.434 4.469 1.918 4.484C1.125 3.955 0.604 3.051 0.604 2.025C0.604 1.484 0.749 0.977 1.003 0.541C2.459 2.328 4.637 3.504 7.092 3.627C7.042 3.41 7.017 3.185 7.017 2.953C7.017 1.322 8.339 0 9.971 0C10.82 0 11.588 0.357 12.126 0.932C12.8 0.801 13.432 0.555 14.003 0.215C13.782 0.906 13.315 1.484 12.703 1.85C13.301 1.779 13.871 1.621 14.402 1.385C14.004 1.977 13.504 2.498 12.927 2.914" />
                                    </g>
                                </svg>
                            </a>
                            <a href="#" class="social__link-wrap">
                                <svg class="social__img" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="30" height="30">
                                    <defs>
                                        <clipPath id="clip_0">
                                            <rect x="-275" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_0)">
                                        <path fill="rgb(49,74,107)" stroke="none" d="M15 0L15 0Q15.3842 0 15.7658 0.0174863Q16.1475 0.0349725 16.5257 0.0699093Q16.904 0.104846 17.2782 0.157162Q17.6523 0.209478 18.0216 0.279067Q18.3908 0.348656 18.7544 0.435375Q19.118 0.522095 19.4753 0.625768Q19.8325 0.729441 20.1826 0.849856Q20.5327 0.970271 20.875 1.10718Q21.2173 1.24409 21.551 1.39722Q21.8848 1.55035 22.2093 1.71939Q22.5339 1.88842 22.8485 2.07301Q23.1632 2.25761 23.4674 2.45739Q23.7715 2.65716 24.0645 2.87172Q24.3576 3.08627 24.6389 3.31516Q24.9202 3.54405 25.1892 3.78681Q25.4581 4.02958 25.7143 4.28571Q25.9704 4.54185 26.2132 4.81085Q26.456 5.07984 26.6848 5.36113Q26.9137 5.64243 27.1283 5.93546Q27.3428 6.22849 27.5426 6.53265Q27.7424 6.83681 27.927 7.15148Q28.1116 7.46615 28.2806 7.7907Q28.4496 8.11524 28.6028 8.44899Q28.7559 8.78274 28.8928 9.12502Q29.0297 9.4673 29.1502 9.81741Q29.2706 10.1675 29.3742 10.5247Q29.4779 10.882 29.5646 11.2456Q29.6514 11.6092 29.7209 11.9784Q29.7905 12.3477 29.8428 12.7218Q29.8952 13.096 29.9301 13.4743Q29.965 13.8525 29.9825 14.2342Q30 14.6158 30 15L30 15Q30 15.3842 29.9825 15.7658Q29.965 16.1475 29.9301 16.5257Q29.8952 16.904 29.8428 17.2782Q29.7905 17.6523 29.7209 18.0216Q29.6514 18.3908 29.5646 18.7544Q29.4779 19.118 29.3742 19.4753Q29.2706 19.8325 29.1502 20.1826Q29.0297 20.5327 28.8928 20.875Q28.7559 21.2173 28.6028 21.551Q28.4496 21.8848 28.2806 22.2093Q28.1116 22.5339 27.927 22.8485Q27.7424 23.1632 27.5426 23.4674Q27.3428 23.7715 27.1283 24.0645Q26.9137 24.3576 26.6848 24.6389Q26.456 24.9202 26.2132 25.1892Q25.9704 25.4581 25.7143 25.7143Q25.4581 25.9704 25.1892 26.2132Q24.9202 26.456 24.6389 26.6848Q24.3576 26.9137 24.0645 27.1283Q23.7715 27.3428 23.4674 27.5426Q23.1632 27.7424 22.8485 27.927Q22.5339 28.1116 22.2093 28.2806Q21.8848 28.4496 21.551 28.6028Q21.2173 28.7559 20.875 28.8928Q20.5327 29.0297 20.1826 29.1501Q19.8325 29.2706 19.4753 29.3742Q19.118 29.4779 18.7544 29.5646Q18.3908 29.6513 18.0216 29.7209Q17.6523 29.7905 17.2782 29.8428Q16.904 29.8952 16.5257 29.9301Q16.1475 29.965 15.7658 29.9825Q15.3842 30 15 30L15 30Q14.6158 30 14.2342 29.9825Q13.8525 29.965 13.4743 29.9301Q13.096 29.8952 12.7218 29.8428Q12.3477 29.7905 11.9784 29.7209Q11.6092 29.6513 11.2456 29.5646Q10.882 29.4779 10.5247 29.3742Q10.1675 29.2706 9.81741 29.1501Q9.4673 29.0297 9.12502 28.8928Q8.78274 28.7559 8.44899 28.6028Q8.11524 28.4496 7.79069 28.2806Q7.46615 28.1116 7.15148 27.927Q6.83681 27.7424 6.53265 27.5426Q6.22849 27.3428 5.93546 27.1283Q5.64243 26.9137 5.36113 26.6848Q5.07984 26.456 4.81085 26.2132Q4.54185 25.9704 4.28571 25.7143Q4.02958 25.4581 3.78681 25.1892Q3.54405 24.9202 3.31516 24.6389Q3.08627 24.3576 2.87172 24.0645Q2.65716 23.7715 2.45739 23.4674Q2.25761 23.1632 2.07301 22.8485Q1.88842 22.5339 1.71939 22.2093Q1.55035 21.8848 1.39722 21.551Q1.24409 21.2173 1.10718 20.875Q0.970271 20.5327 0.849856 20.1826Q0.729441 19.8325 0.625768 19.4753Q0.522095 19.118 0.435375 18.7544Q0.348656 18.3908 0.279067 18.0216Q0.209478 17.6523 0.157162 17.2782Q0.104846 16.904 0.0699093 16.5257Q0.0349725 16.1475 0.0174863 15.7658Q0 15.3842 0 15L0 15Q0 14.6158 0.0174863 14.2342Q0.0349725 13.8525 0.0699093 13.4743Q0.104846 13.096 0.157162 12.7218Q0.209478 12.3477 0.279067 11.9784Q0.348656 11.6092 0.435375 11.2456Q0.522095 10.882 0.625768 10.5247Q0.729441 10.1675 0.849856 9.81741Q0.970271 9.4673 1.10718 9.12502Q1.24409 8.78274 1.39722 8.44899Q1.55035 8.11524 1.71939 7.79069Q1.88842 7.46615 2.07301 7.15148Q2.25761 6.83681 2.45739 6.53265Q2.65716 6.22849 2.87172 5.93546Q3.08627 5.64243 3.31516 5.36113Q3.54405 5.07984 3.78681 4.81085Q4.02958 4.54185 4.28571 4.28571Q4.54185 4.02958 4.81085 3.78681Q5.07984 3.54405 5.36113 3.31516Q5.64243 3.08627 5.93546 2.87172Q6.22849 2.65716 6.53265 2.45739Q6.83681 2.25761 7.15148 2.07301Q7.46615 1.88842 7.7907 1.71939Q8.11524 1.55035 8.44899 1.39722Q8.78274 1.24409 9.12502 1.10718Q9.4673 0.970271 9.81741 0.849856Q10.1675 0.729441 10.5247 0.625768Q10.882 0.522095 11.2456 0.435375Q11.6092 0.348656 11.9784 0.279067Q12.3477 0.209478 12.7218 0.157162Q13.096 0.104846 13.4743 0.0699093Q13.8525 0.0349725 14.2342 0.0174863Q14.6158 0 15 0Z" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip_1">
                                            <rect x="-275" y="-3855" width="1380" height="3940" clip-rule="evenodd" />
                                        </clipPath>
                                    </defs>
                                    <g clip-path="url(#clip_1)">
                                        <path class="social__img_active" stroke="none" transform="translate(7 9)" d="M16.0984 0.895188C16.6061 1.41289 16.7718 2.58853 16.7718 2.58853C16.7718 2.58853 16.9412 3.96943 16.9412 5.3498L16.9412 6.64433C16.9412 8.02524 16.7718 9.40561 16.7718 9.40561C16.7718 9.40561 16.6061 10.5812 16.0984 11.0989C15.4541 11.7787 14.7319 11.7819 14.4011 11.8219C12.0304 11.9947 8.47059 12 8.47059 12C8.47059 12 4.06588 11.9595 2.71059 11.8283C2.33365 11.7574 1.48712 11.7787 0.842294 11.0989C0.334588 10.5812 0.169412 9.40561 0.169412 9.40561C0.169412 9.40561 0 8.02524 0 6.64433L0 5.3498C0 3.96943 0.169412 2.58853 0.169412 2.58853C0.169412 2.58853 0.334588 1.41289 0.842294 0.895188C1.48712 0.2154 2.20871 0.212201 2.54012 0.172746C4.91082 0 8.46688 0 8.46688 0L8.47429 0C8.47429 0 12.0304 0 14.4011 0.172746C14.7319 0.212201 15.4541 0.2154 16.0984 0.895188ZM6.72088 3.4192L6.72141 8.21291L11.2982 5.82432L6.72088 3.4192Z"
                                            fill-rule="evenodd" />
                                    </g>
                                </svg>
                            </a>

                        </div>
                    </div>
                    <div class="ftr__links-block">
                        <ul class="ftr__link-list list">
                            <li class="ftr__link-item"><a href="" class="ftr__link">Jobs</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">The list of artists</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">Feedback</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">Terms of the agreement</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">Support</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">Personal order</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">Get bonuses</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">Clearance</a></li>
                            <li class="ftr__link-item"><a href="" class="ftr__link">Conditions</a></li>
                        </ul>
                    </div>
                </div>
                <div class="ftr__block ftr__block-list">
                    <ul class="ftr__sales-list list">
                        <li class="ftr__item"><a href="" class="ftr__link-text">Digest</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Art of the day</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Selections</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Directions</a></li>
                    </ul>
                    <ul class="ftr__interview-list list">
                        <li class="ftr__item"><a href="" class="ftr__link-text">Artists</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Artist of the day</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Bestsellers</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Selection</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">New</a></li>
                    </ul>
                    <ul class="ftr__genres-list list">
                        <li class="ftr__item"><a href="" class="ftr__link-text">Gallery</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">All</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Inspiration</a></li>
                    </ul>
                    <ul class="ftr__contacts-list list">
                        <li class="ftr__item"><a href="" class="ftr__link-text">About</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Press about us</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">The interior designers</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Personal buyer</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Apply for sale</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Partnership</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Blog</a></li>
                    </ul>
                    <ul class="ftr__art-travel-list list">
                        <li class="ftr__item"><a href="" class="ftr__link-text">Events</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Recent events</a></li>
                        <li class="ftr__item"><a href="" class="ftr__link-text">Calendar</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style src="./css/style.less" lang="less"></style>
