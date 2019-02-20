.container {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
}

* {
    margin: 0;
    box-sizing: border-box;
}


.logo {
    /* background-image: url(Pictures/enso.svg); */
    height: 50px;
}

p {
    font-family: font3;
}

h3, .main {
    font-family: font1;
    font-size: 20px;
}


.main {
    color: white;
    bottom: 0;
}
.icons {
    font-family: font4;
    display: flex;
    /* height: 100px; */
    background-color: #134347;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, .5);
    font-size: 20px;
    padding: 1em;
}

.bottomPic {
    background-image: url(Pictures/koi.jpg);
    height: 210px;
    background-size: cover;
    background-position: center;
    /* background-repeat: no-repeat; */
    color: white;
    font-family: font2;
}

ul {
    list-style: none;
    background-color: rgba(255, 255, 255, .2);
    /* position: absolute; */
    /* bottom: -16px; */
    /* width: 100%; */
    /* grid-row: 2; */
}

header {
    font-family: font1;
    color: white;
    position: relative;
    text-align: center;
}

li {
    display: inline-block;
    /* height: 45px; */
}

.header{
    display: grid;
    background-image: url(Pictures/contours-opaque.png), url(Pictures/gridlines-opaque.png), url(Pictures/huntington.jpg);
    background-size: cover;
    height: 248px;
    width: 100%;
    background-position: center;
    grid-row: 1/2;
    grid-column: 1/3;
}

.participation {
    background-color: rgba(138,188,159,0.5);
    background-image: url(Pictures/bamboo.png);
}

.bottom {
    grid-row: 3;
}

.right {
    grid-row: 4;
}



/* @media (max-width: 767px) {
    .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-auto-rows: max-content;
    }
} */

@media (min-width: 1130px) {
    .container {
        /* display: grid; */
        grid-auto-rows: max-content;
        grid-template-columns: 2fr 1fr;
    }

ß
    .header {
        /* display: grid; */
        font-family: font1;
        /* grid-row: 1/2; */
        grid-column: 1/ span 3;

    }

    /* .main > ul {
        background-color: aqua;
        grid-column: 2/3;
        grid-row: 1;
    } */

    .left {
        grid-row: 2;
    }

    .right {
        grid-row: 2;
        grid-column: 2/3;
    }

    .bottom {
        grid-column: 1/ span 3;
        grid-row: 3;
    }

    /* .authors {
        grid-row: 2;
        grid-column: 2/ span 3;
    }

    .links {
        grid-row: 3;
        grid-column: 
    } */
   

    .authors {
        grid-row: 2/3;
    }

    .links {
        grid-row: 3/4;
    }

    .bottomPic {
        grid-row: 5/6;
    }

    .footer {
        grid-row: 6/7;
    }

    .main {
       grid-column: 3;
    }
}