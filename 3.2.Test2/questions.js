let CreationTableauLangages = () => {
  return ["Html", "CSS", "Java", "PHP"];
};

let CreationTableauNombres = () => {
  return [0, 1, 2, 3, 4, 5];
};

let RemplacementElement = (langages) => {
  langages[2] = "Javascript";
  return langages;
};

let AjoutElementLangages = (langages) => {
  langages.push("Ruby");
  langages.push("Python");
  return langages;
};

let AjoutElementNombres = (nombres) => {
  nombres.unshift(-1);
  nombres.unshift(-2);
  return nombres;
};

let SuppressionPremierElement = (langages) => {
  langages.shift();
  return langages;
};

let SuppressionDernierElement = (langages) => {
  langages.pop();
  return langages;
};

let ConversionChaineTableau = (reseaux_sociaux_chaine) => {
  let reseaux_sociaux = reseaux_sociaux_chaine.split(",");
  return reseaux_sociaux;
};

let ConversionTableauChaine = (langages) => {
  let texte = "";
  let length = langages.length;
  let i = 0;
  for (let elem of langages) {
    i === length - 1 ? (texte = texte + elem) : (texte = texte + elem + ",");
    i++;
  }
  return texte;
};

let TriTableau = (reseaux_sociaux) => {
  return reseaux_sociaux.sort();
};

let InversionTableau = (langages) => {
  langages = langages.reverse();
  return langages;
};
