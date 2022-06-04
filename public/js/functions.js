function createCard(country_name, currency_name, currency_symbol, population, flag_png, coatofarms_png ,maps_googleMaps, country_capital) {
    // DIV
    var cardproduct = document.createElement("div"); // Créer la div
    cardproduct.className = "card-product";
    document.body.appendChild(cardproduct); // ajoute la div

    var link = document.createElement("a");
    link.href = maps_googleMaps;
    link.target = "_blank";
    link.style = "display:contents";
    cardproduct.appendChild(link);

    var img_flag_png = document.createElement("img"); // Créer l'image
    img_flag_png.src = flag_png;
    link.appendChild(img_flag_png); // ajoute le paragraph & son texte à la div

    var cardproductinfos = document.createElement("div"); // Créer la div
    cardproductinfos.className = "card-product-infos";
    cardproduct.appendChild(cardproductinfos); // ajoute la div

    // add name of the country
    var countryname = document.createElement("H3");
    countryname.className = "card-product-infos";
    bold = document.createElement('strong');
    textnode = document.createTextNode(country_name);
    bold.appendChild(textnode);
    cardproductinfos.appendChild(bold);


    // add the currency
    var p = document.createElement("p");
    bold = document.createElement("strong");
    textfix = document.createTextNode("Currency : ");
    textdynamic = document.createTextNode(currency_name + " (");
    textsymbol = document.createTextNode(currency_symbol + ")");
    bold.appendChild(textfix);
    p.appendChild(bold);
    p.appendChild(textdynamic);
    p.appendChild(textsymbol);
    cardproductinfos.appendChild(p);

        // add the currency
    var p = document.createElement("p");
    bold = document.createElement("strong");
    textfix = document.createTextNode("Population : ");
    textdynamic = document.createTextNode(population);
    bold.appendChild(textfix);
    p.appendChild(bold);
    p.appendChild(textdynamic);
    cardproductinfos.appendChild(p);

    var p = document.createElement("p");
    bold = document.createElement("strong");
    textfix = document.createTextNode("Capital : ");
    textdynamic = document.createTextNode(country_capital);
    bold.appendChild(textfix);
    p.appendChild(bold);
    p.appendChild(textdynamic);
    cardproductinfos.appendChild(p);
}