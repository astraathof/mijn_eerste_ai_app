'use client'

import { useState } from 'react'

interface Kerndoel {
  nummer: number
  vakgebied: string
  titel: string
  beschrijving: string
  voorbeelden: string[]
  leerjaren: string
  audioUrl?: string
}

const kerndoelen: Kerndoel[] = [
  // Nederlandse taal (1-5)
  {
    nummer: 1,
    vakgebied: "Nederlandse taal",
    titel: "Mondeling taalgebruik",
    beschrijving: "De leerlingen leren informatie te vergaren, te ordenen en door te geven. Zij leren naar anderen te luisteren en met anderen te spreken.",
    voorbeelden: [
      "Klasgesprek over een boek",
      "Presentatie over een onderwerp",
      "Luisteren naar instructies",
      "Vertellen van ervaringen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 2,
    vakgebied: "Nederlandse taal",
    titel: "Schriftelijk taalgebruik",
    beschrijving: "De leerlingen leren de functie van geschreven taal en de conventies van het schrift.",
    voorbeelden: [
      "Verhaal schrijven",
      "Brief opstellen",
      "Werkstuk maken",
      "Notities maken"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 3,
    vakgebied: "Nederlandse taal",
    titel: "Lezen",
    beschrijving: "De leerlingen leren technisch lezen en begrijpend lezen.",
    voorbeelden: [
      "Prentenboek lezen",
      "Informatieve tekst begrijpen",
      "Instructies volgen",
      "Verhaal samenvatten"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 4,
    vakgebied: "Nederlandse taal",
    titel: "Spelling",
    beschrijving: "De leerlingen leren de spelling van de Nederlandse taal.",
    voorbeelden: [
      "Werkwoorden vervoegen",
      "Meervoud maken",
      "Leestekens gebruiken",
      "Woorddelen herkennen"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 5,
    vakgebied: "Nederlandse taal",
    titel: "Woordenschat en begripsvorming",
    beschrijving: "De leerlingen leren de betekenis van woorden en begrippen.",
    voorbeelden: [
      "Synoniemen zoeken",
      "Woordfamilies maken",
      "Context gebruiken",
      "Vakwoorden leren"
    ],
    leerjaren: "Groep 1-8"
  },
  // Rekenen en wiskunde (6-15)
  {
    nummer: 6,
    vakgebied: "Rekenen en wiskunde",
    titel: "Getallen en bewerkingen",
    beschrijving: "De leerlingen leren getallen en hun onderlinge relaties kennen en gebruiken.",
    voorbeelden: [
      "Tellen tot 100",
      "Optellen en aftrekken",
      "Tafels van vermenigvuldiging",
      "Breuken begrijpen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 7,
    vakgebied: "Rekenen en wiskunde",
    titel: "Meten en meetkunde",
    beschrijving: "De leerlingen leren meten, schatten en meetkundige begrippen gebruiken.",
    voorbeelden: [
      "Lengte meten",
      "Tijd aflezen",
      "Vormen herkennen",
      "Oppervlakte berekenen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 8,
    vakgebied: "Rekenen en wiskunde",
    titel: "Verhoudingen",
    beschrijving: "De leerlingen leren verhoudingen, procenten en statistiek.",
    voorbeelden: [
      "Grafieken lezen",
      "Procenten berekenen",
      "Gemiddelde bepalen",
      "Kansen inschatten"
    ],
    leerjaren: "Groep 6-8"
  },
  {
    nummer: 9,
    vakgebied: "Rekenen en wiskunde",
    titel: "Hoofdrekenen",
    beschrijving: "De leerlingen leren hoofdrekenen, cijferen en rekenen met de rekenmachine.",
    voorbeelden: [
      "Handig optellen",
      "Schatten van uitkomsten",
      "Rekenmachine gebruiken",
      "Rekenstrategieën toepassen"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 10,
    vakgebied: "Rekenen en wiskunde",
    titel: "Ruimte en vorm",
    beschrijving: "De leerlingen leren ruimtelijke oriëntatie en meetkundige vormen.",
    voorbeelden: [
      "Vlakke figuren herkennen",
      "Ruimtelijke figuren bouwen",
      "Symmetrie ontdekken",
      "Plattegronden lezen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 11,
    vakgebied: "Rekenen en wiskunde",
    titel: "Gegevensverwerking",
    beschrijving: "De leerlingen leren gegevens verzamelen, ordenen en interpreteren.",
    voorbeelden: [
      "Tabellen maken",
      "Diagrammen lezen",
      "Enquêtes houden",
      "Conclusies trekken"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 12,
    vakgebied: "Rekenen en wiskunde",
    titel: "Verbanden",
    beschrijving: "De leerlingen leren verbanden en patronen herkennen en beschrijven.",
    voorbeelden: [
      "Rekenpatronen ontdekken",
      "Formules gebruiken",
      "Grafieken interpreteren",
      "Voorspellingen doen"
    ],
    leerjaren: "Groep 6-8"
  },
  {
    nummer: 13,
    vakgebied: "Rekenen en wiskunde",
    titel: "Rekenen in context",
    beschrijving: "De leerlingen leren rekenen toepassen in realistische situaties.",
    voorbeelden: [
      "Boodschappen doen",
      "Tijd plannen",
      "Afstanden berekenen",
      "Budgetteren"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 14,
    vakgebied: "Rekenen en wiskunde",
    titel: "Wiskundig redeneren",
    beschrijving: "De leerlingen leren wiskundig denken en redeneren.",
    voorbeelden: [
      "Problemen oplossen",
      "Strategieën bedenken",
      "Uitkomsten controleren",
      "Redeneringen uitleggen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 15,
    vakgebied: "Rekenen en wiskunde",
    titel: "Communiceren",
    beschrijving: "De leerlingen leren wiskundige taal gebruiken en over wiskunde communiceren.",
    voorbeelden: [
      "Rekenwerk uitleggen",
      "Wiskundige termen gebruiken",
      "Oplossingen presenteren",
      "Discussiëren over strategieën"
    ],
    leerjaren: "Groep 1-8"
  },
  // Engelse taal (16-19)
  {
    nummer: 16,
    vakgebied: "Engelse taal",
    titel: "Luisteren",
    beschrijving: "De leerlingen leren eenvoudige gesproken Engelse teksten begrijpen.",
    voorbeelden: [
      "Liedjes verstaan",
      "Instructies opvolgen",
      "Verhalen begrijpen",
      "Gesprekjes voeren"
    ],
    leerjaren: "Groep 7-8"
  },
  {
    nummer: 17,
    vakgebied: "Engelse taal",
    titel: "Spreken",
    beschrijving: "De leerlingen leren zich mondeling uiten in eenvoudige bewoordingen.",
    voorbeelden: [
      "Zichzelf voorstellen",
      "Vragen stellen",
      "Over hobby's praten",
      "Rollenspel doen"
    ],
    leerjaren: "Groep 7-8"
  },
  {
    nummer: 18,
    vakgebied: "Engelse taal",
    titel: "Lezen",
    beschrijving: "De leerlingen leren eenvoudige Engelse teksten lezen en begrijpen.",
    voorbeelden: [
      "Prentenboeken lezen",
      "Eenvoudige verhalen",
      "Instructies begrijpen",
      "Informatie zoeken"
    ],
    leerjaren: "Groep 7-8"
  },
  {
    nummer: 19,
    vakgebied: "Engelse taal",
    titel: "Schrijven",
    beschrijving: "De leerlingen leren eenvoudige Engelse teksten schrijven.",
    voorbeelden: [
      "Korte zinnen maken",
      "Briefje schrijven",
      "Verhaal afmaken",
      "Formulier invullen"
    ],
    leerjaren: "Groep 7-8"
  },
  // Oriëntatie op jezelf en de wereld (20-43)
  {
    nummer: 20,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Mens en samenleving - Identiteit",
    beschrijving: "De leerlingen leren over hun eigen identiteit en die van anderen.",
    voorbeelden: [
      "Familiegeschiedenis",
      "Culturele achtergrond",
      "Persoonlijke eigenschappen",
      "Verschillende tradities"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 21,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Mens en samenleving - Samenleven",
    beschrijving: "De leerlingen leren over samenleven in groepen en gemeenschappen.",
    voorbeelden: [
      "Klassenregels maken",
      "Conflicten oplossen",
      "Samenwerken",
      "Respect tonen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 22,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Mens en samenleving - Sociale rollen",
    beschrijving: "De leerlingen leren over verschillende rollen in de samenleving.",
    voorbeelden: [
      "Beroepen ontdekken",
      "Familie rollen",
      "Verantwoordelijkheden",
      "Hulpverlening"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 23,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Mens en samenleving - Regels en afspraken",
    beschrijving: "De leerlingen leren over regels, wetten en democratie.",
    voorbeelden: [
      "Verkeersregels",
      "Schoolregels",
      "Verkiezingen",
      "Rechten en plichten"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 24,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Mens en samenleving - Diversiteit",
    beschrijving: "De leerlingen leren over culturele en sociale diversiteit.",
    voorbeelden: [
      "Verschillende culturen",
      "Religies en tradities",
      "Talen in Nederland",
      "Inclusie en acceptatie"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 25,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Geschiedenis - Chronologisch besef",
    beschrijving: "De leerlingen leren tijdsbesef en chronologie ontwikkelen.",
    voorbeelden: [
      "Tijdlijn maken",
      "Voor en na begrijpen",
      "Generaties vergelijken",
      "Historische volgorde"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 26,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Geschiedenis - Kenmerkende aspecten",
    beschrijving: "De leerlingen leren kenmerkende aspecten van tijdvakken herkennen.",
    voorbeelden: [
      "Prehistorie kenmerken",
      "Middeleeuwen herkennen",
      "Gouden Eeuw aspecten",
      "Moderne tijd vergelijken"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 27,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Geschiedenis - Historisch besef",
    beschrijving: "De leerlingen leren historisch denken en redeneren.",
    voorbeelden: [
      "Oorzaak en gevolg",
      "Bronnen onderzoeken",
      "Verhalen vergelijken",
      "Verandering begrijpen"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 28,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Aardrijkskunde - Ruimtelijke oriëntatie",
    beschrijving: "De leerlingen leren zich oriënteren in de ruimte.",
    voorbeelden: [
      "Kaarten lezen",
      "Kompas gebruiken",
      "Routes plannen",
      "Locaties beschrijven"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 29,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Aardrijkskunde - Kenmerken van Nederland",
    beschrijving: "De leerlingen leren over de kenmerken van Nederland.",
    voorbeelden: [
      "Provincies kennen",
      "Landschappen herkennen",
      "Steden en dorpen",
      "Waterwegen"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 30,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Aardrijkskunde - Kenmerken van Europa",
    beschrijving: "De leerlingen leren over Europa en de Europese Unie.",
    voorbeelden: [
      "Europese landen",
      "Hoofdsteden",
      "EU samenwerking",
      "Europese culturen"
    ],
    leerjaren: "Groep 7-8"
  },
  {
    nummer: 31,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Aardrijkskunde - Kenmerken van de wereld",
    beschrijving: "De leerlingen leren over werelddelen en landen.",
    voorbeelden: [
      "Continenten",
      "Klimaatzones",
      "Wereldsteden",
      "Cultuurverschillen"
    ],
    leerjaren: "Groep 6-8"
  },
  {
    nummer: 32,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Aardrijkskunde - Wisselwerking mens-omgeving",
    beschrijving: "De leerlingen leren over de relatie tussen mens en omgeving.",
    voorbeelden: [
      "Landgebruik",
      "Milieuproblemen",
      "Duurzaamheid",
      "Klimaatverandering"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 33,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Natuur - Planten en dieren",
    beschrijving: "De leerlingen leren over de diversiteit van planten en dieren.",
    voorbeelden: [
      "Dieren classificeren",
      "Plantengroei",
      "Ecosystemen",
      "Voedselketens"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 34,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Natuur - Materialen en voorwerpen",
    beschrijving: "De leerlingen leren over eigenschappen van materialen.",
    voorbeelden: [
      "Materialen testen",
      "Eigenschappen vergelijken",
      "Geschiktheid beoordelen",
      "Recycling"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 35,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Natuur - Verschijnselen en processen",
    beschrijving: "De leerlingen leren over natuurverschijnselen en processen.",
    voorbeelden: [
      "Weer en seizoenen",
      "Dag en nacht",
      "Waterkringloop",
      "Groei en ontwikkeling"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 36,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Natuur - Onderzoek doen",
    beschrijving: "De leerlingen leren onderzoek doen naar natuurverschijnselen.",
    voorbeelden: [
      "Hypotheses opstellen",
      "Experimenten uitvoeren",
      "Waarnemingen doen",
      "Conclusies trekken"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 37,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Techniek - Ontwerpen en maken",
    beschrijving: "De leerlingen leren technische problemen oplossen door ontwerpen.",
    voorbeelden: [
      "Constructies bouwen",
      "Problemen analyseren",
      "Oplossingen bedenken",
      "Prototypes maken"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 38,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Techniek - Systemen",
    beschrijving: "De leerlingen leren over technische systemen en hun werking.",
    voorbeelden: [
      "Machines begrijpen",
      "Energie gebruiken",
      "Automatisering",
      "ICT-systemen"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 39,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "ICT - Basisvaardigheden",
    beschrijving: "De leerlingen leren basisvaardigheden voor ICT-gebruik.",
    voorbeelden: [
      "Computer bedienen",
      "Programma's gebruiken",
      "Bestanden beheren",
      "Internet navigeren"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 40,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "ICT - Informatievaardigheden",
    beschrijving: "De leerlingen leren informatie zoeken, beoordelen en gebruiken.",
    voorbeelden: [
      "Zoeken op internet",
      "Bronnen beoordelen",
      "Informatie verwerken",
      "Presentaties maken"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 41,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "ICT - Computational thinking",
    beschrijving: "De leerlingen leren computationeel denken en programmeren.",
    voorbeelden: [
      "Algoritmes maken",
      "Patronen herkennen",
      "Problemen opdelen",
      "Eenvoudig programmeren"
    ],
    leerjaren: "Groep 5-8"
  },
  {
    nummer: 42,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Gezondheid - Lichaam en gezondheid",
    beschrijving: "De leerlingen leren over het menselijk lichaam en gezondheid.",
    voorbeelden: [
      "Lichaamsdelen kennen",
      "Gezonde voeding",
      "Beweging en rust",
      "Hygiëne"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 43,
    vakgebied: "Oriëntatie op jezelf en de wereld",
    titel: "Gezondheid - Veiligheid",
    beschrijving: "De leerlingen leren over veiligheid en risico's.",
    voorbeelden: [
      "Verkeersdeelname",
      "Eerste hulp",
      "Gevaarherkenning",
      "Sociale veiligheid"
    ],
    leerjaren: "Groep 1-8"
  },
  // Kunstzinnige oriëntatie (44-51)
  {
    nummer: 44,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Beeldende vorming - Maken",
    beschrijving: "De leerlingen leren beelden maken met verschillende materialen en technieken.",
    voorbeelden: [
      "Tekenen en schilderen",
      "Boetseren en bouwen",
      "Collages maken",
      "Digitaal ontwerpen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 45,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Beeldende vorming - Kijken",
    beschrijving: "De leerlingen leren beelden bekijken en bespreken.",
    voorbeelden: [
      "Kunstwerken analyseren",
      "Stijlen herkennen",
      "Betekenis bespreken",
      "Eigen mening vormen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 46,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Muzikale vorming - Luisteren",
    beschrijving: "De leerlingen leren muziek beluisteren en waarderen.",
    voorbeelden: [
      "Muziekstijlen herkennen",
      "Instrumenten benoemen",
      "Ritme en melodie",
      "Emoties in muziek"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 47,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Muzikale vorming - Maken",
    beschrijving: "De leerlingen leren muziek maken en uitvoeren.",
    voorbeelden: [
      "Liedjes zingen",
      "Instrumenten bespelen",
      "Ritmes maken",
      "Muziek componeren"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 48,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Drama - Spelen",
    beschrijving: "De leerlingen leren spelen, toneelspelen en verhalen uitbeelden.",
    voorbeelden: [
      "Rollenspel",
      "Toneelstukje opvoeren",
      "Verhaal uitbeelden",
      "Improvisatie"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 49,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Drama - Reflecteren",
    beschrijving: "De leerlingen leren reflecteren op drama-activiteiten.",
    voorbeelden: [
      "Eigen spel bespreken",
      "Feedback geven",
      "Emoties herkennen",
      "Verbeteringen bedenken"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 50,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Dans en beweging - Bewegen",
    beschrijving: "De leerlingen leren bewegen op muziek en dansen.",
    voorbeelden: [
      "Volksdansen",
      "Vrije beweging",
      "Choreografie maken",
      "Uitdrukking door beweging"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 51,
    vakgebied: "Kunstzinnige oriëntatie",
    titel: "Dans en beweging - Waarderen",
    beschrijving: "De leerlingen leren dans en beweging waarderen.",
    voorbeelden: [
      "Dansvoorstellingen bekijken",
      "Bewegingskwaliteit beoordelen",
      "Culturele dansen ontdekken",
      "Eigen voorkeur ontwikkelen"
    ],
    leerjaren: "Groep 1-8"
  },
  // Bewegingsonderwijs (52-58)
  {
    nummer: 52,
    vakgebied: "Bewegingsonderwijs",
    titel: "Bewegen en spel",
    beschrijving: "De leerlingen leren bewegen en sporten in verschillende situaties.",
    voorbeelden: [
      "Hardlopen en springen",
      "Balspelen",
      "Turnen",
      "Zwemmen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 53,
    vakgebied: "Bewegingsonderwijs",
    titel: "Motorische vaardigheden",
    beschrijving: "De leerlingen leren grove en fijne motorische vaardigheden ontwikkelen.",
    voorbeelden: [
      "Coördinatie oefenen",
      "Balans houden",
      "Kracht ontwikkelen",
      "Lenigheid verbeteren"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 54,
    vakgebied: "Bewegingsonderwijs",
    titel: "Samenwerken en competitie",
    beschrijving: "De leerlingen leren samenwerken en omgaan met competitie.",
    voorbeelden: [
      "Teamsporten",
      "Eerlijk spelen",
      "Winnen en verliezen",
      "Regels respecteren"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 55,
    vakgebied: "Bewegingsonderwijs",
    titel: "Conditie en gezondheid",
    beschrijving: "De leerlingen leren over conditie en de relatie tussen bewegen en gezondheid.",
    voorbeelden: [
      "Uithoudingsvermogen",
      "Hartslag meten",
      "Warming-up en cooling-down",
      "Gezonde leefstijl"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 56,
    vakgebied: "Bewegingsonderwijs",
    titel: "Veiligheid",
    beschrijving: "De leerlingen leren veilig bewegen en sporten.",
    voorbeelden: [
      "Veilige speelruimte",
      "Beschermende kleding",
      "Risico's inschatten",
      "Hulp vragen"
    ],
    leerjaren: "Groep 1-8"
  },
  {
    nummer: 57,
    vakgebied: "Bewegingsonderwijs",
    titel: "Zelfstandigheid",
    beschrijving: "De leerlingen leren zelfstandig bewegen en sporten.",
    voorbeelden: [
      "Eigen grenzen kennen",
      "Keuzes maken",
      "Initiatief nemen",
      "Verantwoordelijkheid"
    ],
    leerjaren: "Groep 3-8"
  },
  {
    nummer: 58,
    vakgebied: "Bewegingsonderwijs",
    titel: "Waardering",
    beschrijving: "De leerlingen leren bewegen en sport waarderen.",
    voorbeelden: [
      "Plezier in bewegen",
      "Verschillende sporten proberen",
      "Prestaties waarderen",
      "Levenslang bewegen"
    ],
    leerjaren: "Groep 1-8"
  }
]

export default function KerndoelenViewer() {
  const [selectedVakgebied, setSelectedVakgebied] = useState<string>('alle')
  const [selectedKerndoel, setSelectedKerndoel] = useState<Kerndoel | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [isPlaying, setIsPlaying] = useState<number | null>(null)

  const vakgebieden = Array.from(new Set(kerndoelen.map(k => k.vakgebied)))

  const filteredKerndoelen = kerndoelen.filter(kerndoel => {
    const matchesVakgebied = selectedVakgebied === 'alle' || kerndoel.vakgebied === selectedVakgebied
    const matchesSearch = kerndoel.titel.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         kerndoel.beschrijving.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesVakgebied && matchesSearch
  })

  const getVakgebiedIcon = (vakgebied: string) => {
    switch (vakgebied) {
      case 'Nederlandse taal': return '📚'
      case 'Rekenen en wiskunde': return '🔢'
      case 'Engelse taal': return '🇬🇧'
      case 'Oriëntatie op jezelf en de wereld': return '🌍'
      case 'Kunstzinnige oriëntatie': return '🎨'
      case 'Bewegingsonderwijs': return '⚽'
      default: return '📖'
    }
  }

  const getVakgebiedColor = (vakgebied: string) => {
    switch (vakgebied) {
      case 'Nederlandse taal': return 'bg-blue-500'
      case 'Rekenen en wiskunde': return 'bg-green-500'
      case 'Engelse taal': return 'bg-red-500'
      case 'Oriëntatie op jezelf en de wereld': return 'bg-purple-500'
      case 'Kunstzinnige oriëntatie': return 'bg-pink-500'
      case 'Bewegingsonderwijs': return 'bg-orange-500'
      default: return 'bg-gray-500'
    }
  }

  const speakText = (text: string, kerndoelNummer: number) => {
    if ('speechSynthesis' in window) {
      // Stop current speech
      window.speechSynthesis.cancel()
      
      if (isPlaying === kerndoelNummer) {
        setIsPlaying(null)
        return
      }

      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'nl-NL'
      utterance.rate = 0.8
      utterance.pitch = 1

      utterance.onstart = () => setIsPlaying(kerndoelNummer)
      utterance.onend = () => setIsPlaying(null)
      utterance.onerror = () => setIsPlaying(null)

      window.speechSynthesis.speak(utterance)
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-6 text-white">
        <h2 className="text-2xl font-bold mb-2">📚 Alle 58 Kerndoelen Interactief</h2>
        <p className="text-blue-100">
          Ontdek, beluister en leer alle kerndoelen van het Nederlandse basisonderwijs
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Vakgebied Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🎯 Filter op vakgebied:
            </label>
            <select
              value={selectedVakgebied}
              onChange={(e) => setSelectedVakgebied(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="alle">Alle vakgebieden</option>
              {vakgebieden.map(vakgebied => (
                <option key={vakgebied} value={vakgebied}>
                  {getVakgebiedIcon(vakgebied)} {vakgebied}
                </option>
              ))}
            </select>
          </div>

          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              🔍 Zoeken:
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Zoek in titel of beschrijving..."
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Vakgebied Overview */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {vakgebieden.map(vakgebied => {
            const count = kerndoelen.filter(k => k.vakgebied === vakgebied).length
            return (
              <button
                key={vakgebied}
                onClick={() => setSelectedVakgebied(vakgebied === selectedVakgebied ? 'alle' : vakgebied)}
                className={`p-3 rounded-lg text-center transition-all ${
                  selectedVakgebied === vakgebied
                    ? `${getVakgebiedColor(vakgebied)} text-white shadow-lg`
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="text-2xl mb-1">{getVakgebiedIcon(vakgebied)}</div>
                <div className="text-xs font-medium">{vakgebied.split(' ')[0]}</div>
                <div className="text-xs opacity-75">{count} doelen</div>
              </button>
            )
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center">
        <span className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
          📊 {filteredKerndoelen.length} van {kerndoelen.length} kerndoelen
        </span>
      </div>

      {/* Kerndoelen Grid */}
      <div className="grid gap-6">
        {filteredKerndoelen.map((kerndoel) => (
          <div
            key={kerndoel.nummer}
            className={`bg-white rounded-xl shadow-lg border-2 overflow-hidden transition-all cursor-pointer hover:shadow-xl hover:scale-[1.02] ${
              selectedKerndoel?.nummer === kerndoel.nummer ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-blue-300'
            }`}
            onClick={() => setSelectedKerndoel(selectedKerndoel?.nummer === kerndoel.nummer ? null : kerndoel)}
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3 flex-1">
                  <div className={`w-12 h-12 ${getVakgebiedColor(kerndoel.vakgebied)} rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0`}>
                    {kerndoel.nummer}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-lg">{getVakgebiedIcon(kerndoel.vakgebied)}</span>
                      <span className="text-sm font-medium text-gray-600">{kerndoel.vakgebied}</span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">{kerndoel.titel}</h3>
                  </div>
                </div>
                
                {/* Audio Controls */}
                <div className="flex items-center space-x-2 flex-shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      speakText(`Kerndoel ${kerndoel.nummer}: ${kerndoel.titel}. ${kerndoel.beschrijving}`, kerndoel.nummer)
                    }}
                    className={`p-2 rounded-lg transition-colors ${
                      isPlaying === kerndoel.nummer
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                    }`}
                    title={isPlaying === kerndoel.nummer ? 'Stop voorlezen' : 'Lees voor'}
                  >
                    {isPlaying === kerndoel.nummer ? '🛑' : '🔊'}
                  </button>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                    selectedKerndoel?.nummer === kerndoel.nummer 
                      ? 'bg-blue-600 text-white shadow-lg scale-110' 
                      : 'bg-blue-100 text-blue-600 hover:bg-blue-200 hover:scale-105'
                  }`}>
                    <span className="text-xl">
                      {selectedKerndoel?.nummer === kerndoel.nummer ? '👁️‍🗨️' : '👁️'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">{kerndoel.beschrijving}</p>

              {/* Quick Info */}
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1 text-gray-600">
                    <span>🎯</span>
                    <span>{kerndoel.leerjaren}</span>
                  </span>
                  <span className="flex items-center space-x-1 text-gray-600">
                    <span>💡</span>
                    <span>{kerndoel.voorbeelden.length} voorbeelden</span>
                  </span>
                </div>
              </div>

              {/* Expanded Details */}
              {selectedKerndoel?.nummer === kerndoel.nummer && (
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-3">💡 Praktijkvoorbeelden:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                    {kerndoel.voorbeelden.map((voorbeeld, index) => (
                      <div key={index} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <div className="flex items-center space-x-2">
                          <span className="text-blue-600">•</span>
                          <span className="text-blue-800 text-sm">{voorbeeld}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        speakText(`Praktijkvoorbeelden voor ${kerndoel.titel}: ${kerndoel.voorbeelden.join(', ')}`, kerndoel.nummer + 1000)
                      }}
                      className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors text-sm"
                    >
                      🔊 Voorbeelden beluisteren
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        const text = `Kerndoel ${kerndoel.nummer}: ${kerndoel.titel}\n\n${kerndoel.beschrijving}\n\nVoorbeelden:\n${kerndoel.voorbeelden.map(v => `• ${v}`).join('\n')}`
                        navigator.clipboard.writeText(text)
                        alert('Kerndoel gekopieerd naar klembord!')
                      }}
                      className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors text-sm"
                    >
                      📋 Kopieer tekst
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredKerndoelen.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Geen kerndoelen gevonden</h3>
          <p className="text-gray-500">Probeer een andere zoekterm of vakgebied</p>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 border border-green-200">
        <h3 className="font-semibold text-green-800 mb-3">💡 Hoe gebruik je de kerndoelen?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <span className="text-green-600 mt-0.5">🔊</span>
              <span className="text-green-700">Laat kerndoelen voorlezen voor auditief leren</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 mt-0.5">👁️</span>
              <span className="text-green-700">Bekijk praktijkvoorbeelden voor concrete toepassingen</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 mt-0.5">🎯</span>
              <span className="text-green-700">Filter op vakgebied voor gerichte studie</span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start space-x-2">
              <span className="text-green-600 mt-0.5">📋</span>
              <span className="text-green-700">Kopieer teksten voor lesvoorbereiding</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 mt-0.5">🔍</span>
              <span className="text-green-700">Zoek specifieke onderwerpen snel op</span>
            </div>
            <div className="flex items-start space-x-2">
              <span className="text-green-600 mt-0.5">💡</span>
              <span className="text-green-700">Gebruik voorbeelden als inspiratie voor lessen</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}