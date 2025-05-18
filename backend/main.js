const express = require("express");
const axios = require('axios');

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const neighbour = [
  "JARDIM CAMBURI",
  "MARIA ORTIZ",
  "RESISTÊNCIA",
  "JARDIM DA PENHA",
  "ITARARÉ",
  "CENTRO",
  "TABUAZEIRO",
  "SANTA MARTHA",
  "JESUS DE NAZARETH",
  "BONFIM",
  "SANTO ANTÔNIO",
  "SANTO ANDRÉ",
  "CARATOÍRA",
  "JABOUR",
  "SÃO PEDRO",
  "ILHA DO PRÍNCIPE",
  "NOVA PALESTINA",
  "ANDORINHAS",
  "DA PENHA",
  "ROMÃO",
  "GURIGICA",
  "SÃO JOSÉ",
  "BELA VISTA",
  "MARUÍPE",
  "FORTE SÃO JOÃO",
  "ILHA DE SANTA MARIA",
  "SÃO CRISTÓVÃO",
  "REDENÇÃO",
  "SÃO BENEDITO",
  "JOANA D´ARC",
  "CRUZAMENTO",
  "CONSOLAÇÃO",
  "SANTA TEREZA",
  "PRAIA DO SUÁ",
  "SANTOS DUMONT",
  "GRANDE VITÓRIA",
  "ILHA DAS CAIEIRAS",
  "INHANGUETÁ",
  "PRAIA DO CANTO",
  "BENTO FERREIRA",
  "VILA RUBIM",
  "CONQUISTA",
  "DO QUADRO",
  "REPÚBLICA",
  "MONTE BELO",
  "PARQUE MOSCOSO",
  "GOIABEIRAS",
  "JUCUTUQUARA",
  "FONTE GRANDE",
  "MATA DA PRAIA",
  "DO CABRAL",
  "SANTOS REIS",
  "ESTRELINHA",
  "SANTA CLARA",
  "SOLON BORGES",
  "PIEDADE",
  "SANTA CECÍLIA",
  "SANTA LÚCIA",
  "SANTA LUÍZA",
  "BARRO VERMELHO",
  "DO MOSCOSO",
  "MÁRIO CYPRESTE",
  "BOA VISTA",
  "COMDUSA",
  "DE LOURDES",
  "ARIOVALDO FAVALESSA",
  "ANTÔNIO HONÓRIO",
  "FRADINHOS",
  "ENSEADA DO SUÁ",
  "SANTA HELENA",
  "HORTO",
  "UNIVERSITÁRIO",
  "SEGURANÇA DO LAR",
  "NAZARETH",
  "MORADA DE CAMBURI",
  "PONTAL DE CAMBURI",
  "ILHA DO BOI",
  "ILHA DO FRADE",
  "AEROPORTO",
  "ILHAS OCEÂNICAS DE TRINDADE",
  "PARQUE INDUSTRIAL",
];

app.get("/", (req, res) => {
  let prediction = null;
  res.render("Home", { neighbour, prediction });
});

app.post("/submit", (req, res) => {
  const {
    gender,
    age,
    scholarship,
    neighbourhood,
    hipertension,
    diabetes,
    alcoholism,
    scheduledDay,
    appointmentDay,
    handcap,
    smsr,
  } = req.body;

  const scdate = new Date(scheduledDay);
  const acdate = new Date(appointmentDay);

  const subsDay = acdate - scdate;
  const waitingTime = subsDay / (1000 * 60 * 60 * 24);

  const jsDay = acdate.getDay();
  const AppointmentDayOfWeek = (jsDay + 6) % 7;

  let waitingGroup = "VeryLong";

  if (waitingTime >= 0 && waitingTime < 3) {
    waitingGroup = "SameDay";
  } else if (waitingTime >= 3 && waitingTime < 7) {
    waitingGroup = "Short";
  } else if (waitingTime >= 7 && waitingTime < 30) {
    waitingGroup = "Mid";
  } else if (waitingTime >= 30 && waitingTime <= 120) {
    waitingGroup = "Long";
  } else {
    waitingGroup = "VeryLong";
  }

  const data = {
    'Gender': gender,
    'Age': age,
    "Neighbourhood": neighbourhood,
    'Scholarship': scholarship,
    "Hipertension": hipertension,
    "Diabetes": diabetes,
    "Alcoholism": alcoholism,
    "Handcap": handcap,
    "SMSreceived": smsr,
    "WaitingTime": waitingTime,
    "AppointmentDayOfWeek": AppointmentDayOfWeek,
    "WaitingGroup": waitingGroup,
  };

  axios.post("http://127.0.0.1:5000/datareceive", data)
  .then((response) => {
    let prediction = response.data;
    console.log(prediction)
    res.render('Home', { neighbour, prediction });
  })
  .catch((error) => {
    console.log(error);
  });

  
});

const PORT = 7000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
