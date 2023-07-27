let film1 = {
    filmName: "Queens Gambit",
    filmLink: "https://vidadi-ali.com",
    filmCover: "films/qg.jpeg",
    filmDate: "2020  -  1s8p"
}, film2 = {
    filmName: "Game of Thrones",
    filmLink: "https://qu",
    filmCover: "films/got.jpg",
    filmDate: "2011  -  8s10p"
}, film3 = {
    filmName: "Walking Dead",
    filmLink: "https://qu",
    filmCover: "films/wd.jpg",
    filmDate: "2018  -  3s14p"
}, film4 = {
    filmName: "House of Dragon",
    filmLink: "https://qu",
    filmCover: "films/hot.jpg",
    filmDate: "2022  -  1s10p"
}, film5 = {
    filmName: "Lord of the Rings",
    filmLink: "https://qu",
    filmCover: "films/lotr.jpg",
    filmDate: "2022  -  1s10p"
}, film6 = {
    filmName: "Elite",
    filmLink: "https://qu",
    filmCover: "films/elite.webp",
    filmDate: "2018  -  5s8p"
}, film7 = {
    filmName: "The 100",
    filmLink: "https://qu",
    filmCover: "films/100.jpg",
    filmDate: "2014  - 8s16p"
}, film8 = {
    filmName: "13 Reasons Why",
    filmLink: "https://qu",
    filmCover: "films/13.jpg",
    filmDate: "2017  -  3s8p"
}, film9 = {
    filmName: "Vikings",
    filmLink: "https://qu",
    filmCover: "films/vikings.jpg",
    filmDate: "2012  -  6s20p"
}, film10 = {
    filmName: "Night King",
    filmLink: "https://qu",
    filmCover: "films/night.jpg",
    filmDate: "2020  -  1s8p"
};
let listOfFilms = [film1, film2, film3, film4, film5, film6, film7, film8, film9, film10];

let watch_list = document.getElementsByClassName('watch-list')[0];

let look_list = document.getElementsByClassName('list-of-watch')[0], watch_list_div = document.getElementsByClassName('watch-list-div')[0];
look_list.onclick = function () {
    watch_list_div.style.display = "block";
    for (let i = 0; i < listOfFilms.length; i++) {
        const list_element = document.createElement('li');
        list_element.className = "list-element";

        const links = document.createElement('a');
        links.className = "li-child";
        links.setAttribute('href', listOfFilms[i].filmLink)

        const image = document.createElement('img');
        image.className = "film-cover";
        image.setAttribute('src', listOfFilms[i].filmCover);

        const name = document.createElement('span');
        name.className = "film-name";
        name.textContent = listOfFilms[i].filmName;

        const icon = document.createElement('i');
        icon.className = "bx bx-x";

        links.appendChild(image);
        list_element.appendChild(links);
        list_element.appendChild(name);
        list_element.appendChild(icon)
        watch_list.appendChild(list_element);
    }
}
let close_watch_list = document.getElementsByClassName('close-watch-list')[0];
close_watch_list.onclick = function () {
    watch_list_div.style.display = "none";
    watch_list.innerHTML = "";
}






let form_div=document.getElementsByClassName('form-div')[0];
const form=document.createElement('form');

function sign_in() {
    const h1=document.createElement('h1');
    h1.textContent="Sign In";
    const p=document.createElement('p');
    p.textContent="Do you have an toog account?";

    const section=document.createElement('section');

    const div1=document.createElement('div');
    const label1=document.createElement('label');
    label1.textContent="Email";
    const input1=document.createElement('input');
    input1.setAttribute('type', 'email');

    const div2=document.createElement('div');
    const label2=document.createElement('label');
    label2.textContent="Password";
    const input2=document.createElement('input');
    input2.setAttribute('type', 'password');
    
    const a=document.createElement('a');
    a.setAttribute('href', '#');
    a.textContent="Forgot Password?";

    const div3=document.createElement('div');
    div3.className="div-3";
    const button1=document.createElement('button');
    button1.textContent="Sign Up";
    const button2=document.createElement('button');
    button2.textContent="Sign In";

    div3.appendChild(button1);
    div3.appendChild(button2);
    div2.appendChild(label2);
    div2.appendChild(input2);
    div1.appendChild(label1);
    div1.appendChild(input1);
    section.appendChild(div1);
    section.appendChild(div2);

    form.appendChild(h1);
    form.appendChild(p);
    form.appendChild(section);
    form.appendChild(a);
    form.appendChild(div3);

    form_div.appendChild(form);
    form_div.style.display="block";
}
let close_form=document.getElementsByClassName('close-form')[0];
close_form.onclick=function(){
    form.innerHTML="";
    form_div.style.display="none";
}

let films=document.getElementsByClassName('carosel-child-mother')[0], filmsCover, filmsName, filmsName1, filmsChild, filmsDate, datename, date1, filmsPlay, i1, i2, i3; 
let distance=0;
films.style.left=distance+"px";
for(let i=0; i<listOfFilms.length; i++){
    filmsChild=document.createElement('div');
    filmsChild.className="carosel-child";

    filmsCover=document.createElement('img');
    filmsCover.className="carosel-child-image";
    filmsCover.setAttribute('src', listOfFilms[i].filmCover);

    filmsName=document.createElement('h5');
    filmsName.className="carosel-child-name";
    filmsName.textContent=listOfFilms[i].filmName;

    filmsName1=document.createElement('section');
    filmsName1.className="carosel-child-name-hover";

    filmsDate=document.createElement('div');
    datename=document.createElement('span');
    datename.textContent=listOfFilms[i].filmName;
    date1=document.createElement('span');
    date1.textContent=listOfFilms[i].filmDate;

    filmsDate.appendChild(datename);
    filmsDate.appendChild(date1);

    filmsPlay=document.createElement('div');
    i1=document.createElement('i');
    i1.className="bx bx-heart";
    i2=document.createElement('i');
    i2.className="bx bxl-play-store"
    i3=document.createElement('i');
    i3.className="bx bx-x"

    filmsPlay.appendChild(i1);
    filmsPlay.appendChild(i2);
    filmsPlay.appendChild(i3);

    filmsName1.appendChild(filmsDate);
    filmsName1.appendChild(filmsPlay);

    filmsChild.appendChild(filmsCover);
    filmsChild.appendChild(filmsName);
    filmsChild.appendChild(filmsName1);
    films.appendChild(filmsChild);
}




let remote1=document.getElementsByClassName('bxs-chevron-left-circle')[0];
let remote2=document.getElementsByClassName('bxs-chevron-right-circle')[0];
remote1.onclick=function(){
    distance-=290;
    films.style.left=distance+"px";
    remote1.style.opacity="1";
    remote2.style.opacity="1";
    if(distance<-1740){
        distance+=290;
        films.style.left=distance+"px";
        remote1.style.opacity="0.4";
    }
}
remote2.onclick=function(){
    distance+=290;
    films.style.left=distance+"px";
    remote2.style.opacity="1";
    remote1.style.opacity="1";
    if(distance>0){
        distance-=290;
        films.style.left=distance+"px";
        remote2.style.opacity="0.4";
    }
}