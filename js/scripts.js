window.onload = function () {
    const body = document.querySelector("body");
    const firstH1 = document.querySelector("h1");

    const p = document.createElement("p");
    const img = document.createElement("img");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    const h1 = document.createElement("h1");
    const secondH1 = document.createElement("h1");

    
    firstH1.remove();

    h1.append("Webpage Recreation Practice");
    body.append(h1);

    p.append("The HTML of this webpage was created with JavaScript.")
    body.append(p);

    img.src = "https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
    img.alt = "A picture of a bird";
    img.style ="width:50%"
    body.append(img);

    secondH1.append("Facts about the Multicolored Tanager");
    body.append(secondH1);

    body.append(ul);

    li1.append("It is endemic to the mountains of Colombia.")
    li2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.")
    ul.append(li1);
    ul.append(li2);

    h2.append("Source");
    body.append(h2);
    
    a.append("Wikipedia");
    a.href = "https://en.wikipedia.org/wiki/Multicolored_tanager";

    body.append(a);

};