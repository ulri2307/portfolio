window.addEventListener("load", sidenVises);


//Laver burger og nav_links til konstanter

const burger = document.querySelector(".burger");
const nav = document.querySelector("#burger_window");
const opgave = document.querySelector("#opgave");
const eksempel1 = document.querySelector(".eksempel1");
const eksempel2 = document.querySelector(".eksempel2");
const porto = document.querySelector("#proto");
const porto1 = document.querySelector("#proto1");


function sidenVises() {
    console.log("sidenVises ok");

    burger.addEventListener("click", toggleMenu);

    opgave.addEventListener("mouseover", filterGone);
    opgave.addEventListener("mouseout", filterOn);

    eksempel1.addEventListener("mouseover", dropOn1);
    eksempel1.addEventListener("mouseout", dropOff1);

    eksempel2.addEventListener("mouseover", dropOn2);
    eksempel2.addEventListener("mouseout", dropOff2);

    proto.addEventListener("mouseover", protoOff);
    proto.addEventListener("mouseout", protoOn);

    proto1.addEventListener("mouseover", protoOff1);
    proto1.addEventListener("mouseout", protoOn1);
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
    eksempel1.classList.add("dropshadow");
}

function dropOff1() {
    console.log("filter af");

    eksempel1.classList.remove("dropshadow");
}



function dropOn2() {
    console.log("filter på");
    eksempel2.classList.add("dropshadow");

}

function dropOff2() {
    console.log("filter af");

    eksempel2.classList.remove("dropshadow");
}



function protoOff() {
    console.log("filter af");

    proto.classList.remove("shadow");
    proto.classList.add("hover_zoom");
}

function protoOn() {
    console.log("filter af");

    proto.classList.add("shadow");
    proto.classList.remove("hover_zoom");
}

function protoOff1() {
    console.log("filter af");

    proto1.classList.remove("shadow");
    proto1.classList.add("hover_zoom");
}

function protoOn1() {
    console.log("filter af");

    proto1.classList.add("shadow");
    proto1.classList.remove("hover_zoom");
}
