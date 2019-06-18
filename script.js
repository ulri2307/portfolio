window.addEventListener("load", sidenVises);


//Laver burger og nav_links til konstanter

const burger = document.querySelector(".burger");
const nav = document.querySelector("#burger_window");
const opgave = document.querySelector("#opgave");
const skitse1 = document.querySelector(".skitse1");
const skitse2 = document.querySelector(".skitse2");
const skitse3 = document.querySelector(".skitse3");
const porto = document.querySelector("#proto");


function sidenVises() {
    console.log("sidenVises ok");

    burger.addEventListener("click", toggleMenu);

    opgave.addEventListener("mouseover", filterGone);
    opgave.addEventListener("mouseout", filterOn);

    skitse1.addEventListener("mouseover", dropOn1);
    skitse1.addEventListener("mouseout", dropOff1);

    skitse2.addEventListener("mouseover", dropOn2);
    skitse2.addEventListener("mouseout", dropOff2);

    skitse3.addEventListener("mouseover", dropOn3);
    skitse3.addEventListener("mouseout", dropOff3);


    skitse1.addEventListener("click", startLyd);
    skitse2.addEventListener("click", taberLyd);
    skitse3.addEventListener("click", vinderLyd);

}

function toggleMenu() {
    console.log("toggleMenu starter");
    nav.classList.toggle("hidden");

    let erSkjult = nav.classList.contains("hidden");

    if (erSkjult == true) {
        console.log("Bruger icon vises");

        burger.classList.add("burger");
        burger.classList.remove("toggle");

    } else {
        console.log("burger icon gemmes");
        burger.classList.add("toggle");

    }
}

function filterGone() {
    console.log("filter af");

    opgave.classList.remove("shadow");
    opgave.classList.add("hover_zoom");
}

function filterOn() {
    console.log("filter på");

    opgave.classList.add("shadow");
    opgave.classList.remove("hover_zoom");
}




function dropOn1() {
    console.log("filter på");
    skitse1.classList.add("dropshadow");
}

function dropOff1() {
    console.log("filter af");

    skitse1.classList.remove("dropshadow");
}



function dropOn2() {
    console.log("filter på");
    skitse2.classList.add("dropshadow");

}

function dropOff2() {
    console.log("filter af");

    skitse2.classList.remove("dropshadow");
}



function dropOn3() {
    console.log("filter på");
    skitse3.classList.add("dropshadow");

}

function dropOff3() {
    console.log("filter af");

    skitse3.classList.remove("dropshadow");
}



function startLyd() {
    console.log("start lyd begynder");

    document.querySelector("#spil_lyd").play();
    document.querySelector("#spil_lyd").volume = 0.3;
}

function taberLyd() {
    console.log("taber lyd begynder");

    document.querySelector("#taber_lyd").play();
    document.querySelector("#taber_lyd").volume = 0.3;
}

function vinderLyd() {
    console.log("vinder lyd begynder");

    document.querySelector("#vinder_lyd").play();
    document.querySelector("#vinder_lyd").volume = 0.3;
}
