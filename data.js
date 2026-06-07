const playlistData = [
  {
    "participant": "RICHARD Quentin",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Hope",
    "artiste": "XXXTentacion",
    "lien": "https://music.youtube.com/watch?v=KyAcMpQUY5s"
  },
  {
    "participant": "RICHARD Quentin",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Machtou Pichtou",
    "artiste": "Perceval",
    "lien": "https://music.youtube.com/watch?v=SxBqzOKQCgc"
  },
  {
    "participant": "HAMELIN Thierry",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "La Grange",
    "artiste": "ZZTop",
    "lien": "https://music.youtube.com/watch?v=bSt4myecN_c"
  },
  {
    "participant": "HAMELIN Thierry",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Oh, mon bateau !",
    "artiste": "Eric Morena",
    "lien": "https://music.youtube.com/watch?v=TYOdyqNUR9U"
  },
  {
    "participant": "HAMELIN Agnès",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "A Whiter Shade of Pale",
    "artiste": "Procol Harum",
    "lien": "https://music.youtube.com/watch?v=hxa6GUIkNac"
  },
  {
    "participant": "HAMELIN Agnès",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Itsi bitsi petit bikini",
    "artiste": "Dalida",
    "lien": "https://music.youtube.com/watch?v=UkEjLjHFWaU"
  },
  {
    "participant": "RICHARD Marie-Claude",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Chanter",
    "artiste": "Florent Pagny",
    "lien": "https://music.youtube.com/watch?v=xMuhR35sEHY"
  },
  {
    "participant": "RICHARD Marie-Claude",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Respire encore",
    "artiste": "Clara Luciani",
    "lien": "https://music.youtube.com/watch?v=uWH00ehhLP8"
  },
  {
    "participant": "ROUSSEAU Philippe",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "En cloque",
    "artiste": "Renaud",
    "lien": "https://music.youtube.com/watch?v=sPmyy_IHZg4"
  },
  {
    "participant": "ROUSSEAU Philippe",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Manureva",
    "artiste": "Alain Chamfort",
    "lien": "https://music.youtube.com/watch?v=LAyPdgQHLCI"
  },
  {
    "participant": "BRETAUDEAU Nicolas",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Karma girls",
    "artiste": "Indochine",
    "lien": "https://music.youtube.com/watch?v=S9Ur4ruX5HA"
  },
  {
    "participant": "BRETAUDEAU Nicolas",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Stach stach",
    "artiste": "Bratisla boys",
    "lien": "https://music.youtube.com/watch?v=dguwagsajok"
  },
  {
    "participant": "NICOLLE Laurence",
    "groupe": "Boulot",
    "type": "Préférée",
    "chanson": "Another brick in the wall",
    "artiste": "Pink Floyd",
    "lien": "https://music.youtube.com/watch?v=Ey8gm1W-e1Y"
  },
  {
    "participant": "NICOLLE Laurence",
    "groupe": "Boulot",
    "type": "Coupable",
    "chanson": "1987",
    "artiste": "Calogero",
    "lien": "https://music.youtube.com/watch?v=EOEvzbub4wk"
  },
  {
    "participant": "GOVAL Sébastien",
    "groupe": "Boulot",
    "type": "Préférée",
    "chanson": "Tostaky",
    "artiste": "Noir Désir",
    "lien": "https://music.youtube.com/watch?v=EPMqeEElqik"
  },
  {
    "participant": "GOVAL Sébastien",
    "groupe": "Boulot",
    "type": "Coupable",
    "chanson": "Sushi and Coca-Cola",
    "artiste": "St Paul & The Broken Bones",
    "lien": "https://music.youtube.com/watch?v=ZlR8JwdB8Qk"
  },
  {
    "participant": "RICHARD Daniel",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Les lacs du Connemara",
    "artiste": "Michel Sardou",
    "lien": "https://music.youtube.com/watch?v=q_uAMJwxzrM"
  },
  {
    "participant": "RICHARD Daniel",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Mon amant de Saint-Jean",
    "artiste": "Patrick Bruel",
    "lien": "https://music.youtube.com/watch?v=_qQeJLSYz_M"
  },
  {
    "participant": "GONTIER Gildas",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "Superstition",
    "artiste": "Stevie Wonder",
    "lien": "https://music.youtube.com/watch?v=7_tmeHCO1IM"
  },
  {
    "participant": "GONTIER Gildas",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "La bamba triste",
    "artiste": "Pierre Billon",
    "lien": "https://music.youtube.com/watch?v=AfeAhCWaMD0"
  },
  {
    "participant": "CALATAYUD Johann",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "A sky full of stars",
    "artiste": "Coldplay",
    "lien": "https://music.youtube.com/watch?v=VPRjCeoBqrI"
  },
  {
    "participant": "CALATAYUD Johann",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "Brave Margot",
    "artiste": "Georges Brassens",
    "lien": "https://music.youtube.com/watch?v=MBMumv4UrHg"
  },
  {
    "participant": "RICHARD Jérôme",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Flipper",
    "artiste": "Waxx & Philippe Catherine",
    "lien": "https://music.youtube.com/watch?v=uT6ZmbZo1g0"
  },
  {
    "participant": "RICHARD Jérôme",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Le petit pain au chocolat",
    "artiste": "Joe Dassin",
    "lien": "https://music.youtube.com/watch?v=A_8g3df4zcI"
  },
  {
    "participant": "RICHARD Clément",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Le cartel des cartables",
    "artiste": "Aldebert",
    "lien": "https://music.youtube.com/watch?v=_5yOuyyzMbA"
  },
  {
    "participant": "RICHARD Clément",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "La danse de la brioche",
    "artiste": "Teo le lavabo",
    "lien": "https://music.youtube.com/watch?v=dqJvagkNoHg"
  },
  {
    "participant": "BROSSARD Carine",
    "groupe": "Boulot",
    "type": "Préférée",
    "chanson": "La corrida",
    "artiste": "Francis Cabrel",
    "lien": "https://music.youtube.com/watch?v=2HyLN4PwfkA"
  },
  {
    "participant": "BROSSARD Carine",
    "groupe": "Boulot",
    "type": "Coupable",
    "chanson": "Elle est d'ailleurs",
    "artiste": "Pierre Bachelet",
    "lien": "https://music.youtube.com/watch?v=Sko7dU0qJN0"
  },
  {
    "participant": "HAMELIN Jérémy",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Lady Mélody",
    "artiste": "Tom Frager",
    "lien": "https://music.youtube.com/watch?v=VadTd3uYCg4"
  },
  {
    "participant": "HAMELIN Jérémy",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Girl on fire",
    "artiste": "Alycia Keys",
    "lien": "https://music.youtube.com/watch?v=J91ti_MpdHA"
  },
  {
    "participant": "RICHARD Bruno",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Back in black",
    "artiste": "AC /DC",
    "lien": "https://music.youtube.com/watch?v=pAgnJDJN4VA"
  },
  {
    "participant": "RICHARD Bruno",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Fous ta cagoule",
    "artiste": "Fatal Bazooka",
    "lien": "https://music.youtube.com/watch?v=PI9yKr39vGI"
  },
  {
    "participant": "HAMELIN Sophie",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "The kids aren't alright",
    "artiste": "The Offspring",
    "lien": "https://music.youtube.com/watch?v=7iNbnineUCI"
  },
  {
    "participant": "HAMELIN Sophie",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Le Cruiser (Et voilà)",
    "artiste": "Michel Vedette",
    "lien": "https://music.youtube.com/watch?v=GKHFMkCs6Ks"
  },
  {
    "participant": "BUCCELLI Charles",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Can you feel the love tonight",
    "artiste": "Elton John",
    "lien": "https://music.youtube.com/watch?v=KjgWWjkNbhU"
  },
  {
    "participant": "BUCCELLI Charles",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Pokemon (Attrapez les tous)",
    "artiste": "Jean-Marc Kabeya",
    "lien": "https://music.youtube.com/watch?v=YhN4oAS3O4c"
  },
  {
    "participant": "COGNY Lucie",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "Champagne",
    "artiste": "Suzanne",
    "lien": "https://music.youtube.com/watch?v=hcNyYyvUw7Q"
  },
  {
    "participant": "COGNY Lucie",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "Ca fait rire les oiseaux",
    "artiste": "La compagnie créole",
    "lien": "https://music.youtube.com/watch?v=GHMdLsLZLYk"
  },
  {
    "participant": "ROESCH Alexis",
    "groupe": "Boulot",
    "type": "Préférée",
    "chanson": "The Trooper",
    "artiste": "Iron Maiden",
    "lien": "https://music.youtube.com/watch?v=X4bgXH3sJ2Q"
  },
  {
    "participant": "ROESCH Alexis",
    "groupe": "Boulot",
    "type": "Coupable",
    "chanson": "L'oiseau et l'enfant",
    "artiste": "Marie Myriam",
    "lien": "https://music.youtube.com/watch?v=fhwL4bVhSoc"
  },
  {
    "participant": "DE BARROS Fabrice",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "Apocalypse",
    "artiste": "Cigarettes After Sex",
    "lien": "https://music.youtube.com/watch?v=DdI598gKkKw"
  },
  {
    "participant": "DE BARROS Fabrice",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "The Wonder of You",
    "artiste": "Ronnie Hilton",
    "lien": "https://music.youtube.com/watch?v=DJQbrnfuz04"
  },
  {
    "participant": "BARDOU Xavier",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "Bitter Sweet Synphony",
    "artiste": "The Verve",
    "lien": "https://music.youtube.com/watch?v=1lyu1KKwC74"
  },
  {
    "participant": "BARDOU Xavier",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "I Don't Want to Wait (série Dawson)",
    "artiste": "Paula Cole",
    "lien": "https://music.youtube.com/watch?v=dwtjp-v6-8E"
  },
  {
    "participant": "GROLLEAU Nathalie",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Message in a bottle",
    "artiste": "The Police",
    "lien": "https://music.youtube.com/watch?v=MbXWrmQW-OE"
  },
  {
    "participant": "GROLLEAU Nathalie",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "The time of my life",
    "artiste": "Bill Medley, Jennifer Warnes (Dirty Dancing)",
    "lien": "https://music.youtube.com/watch?v=4BQLE_RrTSU"
  },
  {
    "participant": "DURAND Séverine",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Shallow",
    "artiste": "Lady Gaga, Bradley Cooper",
    "lien": "https://music.youtube.com/watch?v=bo_efYhYU2A"
  },
  {
    "participant": "DURAND Séverine",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "La Peña Baiona",
    "artiste": "Kanta",
    "lien": "https://music.youtube.com/watch?v=gfY0jAZAqqA"
  },
  {
    "participant": "NAMBOT Thierry",
    "groupe": "Boulot",
    "type": "Préférée",
    "chanson": "Where is my mind ?",
    "artiste": "Pixies",
    "lien": "https://music.youtube.com/watch?v=OJ62RzJkYUo"
  },
  {
    "participant": "NAMBOT Thierry",
    "groupe": "Boulot",
    "type": "Coupable",
    "chanson": "Le chasseur",
    "artiste": "Michel Delpech",
    "lien": "https://music.youtube.com/watch?v=MZqWj1riYvM"
  },
  {
    "participant": "NAMBOT Laurence",
    "groupe": "Boulot",
    "type": "Préférée",
    "chanson": "La nuit je mens",
    "artiste": "Alain Bashung",
    "lien": "https://music.youtube.com/watch?v=r6_aNASroxo"
  },
  {
    "participant": "NAMBOT Laurence",
    "groupe": "Boulot",
    "type": "Coupable",
    "chanson": "Vacances j'oublie tout",
    "artiste": "Elegance",
    "lien": "https://music.youtube.com/watch?v=mvtbHhTYzcs"
  },
  {
    "participant": "BOUYER Cécile",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "I gotta feeling",
    "artiste": "Black Eyed Peas",
    "lien": "https://music.youtube.com/watch?v=uSD4vsh1zDA"
  },
  {
    "participant": "BOUYER Cécile",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "Daniela",
    "artiste": "Elmer Food Beat",
    "lien": "https://music.youtube.com/watch?v=FW74WtLD-ZY"
  },
  {
    "participant": "COUINET Alexandra",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Love story",
    "artiste": "Indila",
    "lien": "https://music.youtube.com/watch?v=4TIGwaBHuzg"
  },
  {
    "participant": "COUINET Alexandra",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Simarik",
    "artiste": "Tarkan",
    "lien": "https://music.youtube.com/watch?v=cpp69ghR1IM"
  },
  {
    "participant": "RICHARD Florent",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Song 2",
    "artiste": "Blur",
    "lien": "https://music.youtube.com/watch?v=SSbBvKaM6sk"
  },
  {
    "participant": "RICHARD Florent",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Coin coin",
    "artiste": "R-Wan",
    "lien": "https://music.youtube.com/watch?v=n4iJxIX0Hog"
  },
  {
    "participant": "RICHARD Estelle",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Riptide",
    "artiste": "Vance Joy",
    "lien": "https://music.youtube.com/watch?v=uJ_1HMAGb4k"
  },
  {
    "participant": "RICHARD Estelle",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Game over",
    "artiste": "Vitaa, GIMS",
    "lien": "https://music.youtube.com/watch?v=97Nis75DAgc"
  },
  {
    "participant": "THOLLE Jean-Luc",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "Knockin' On Heaven's Door",
    "artiste": "Guns N' Roses",
    "lien": "https://music.youtube.com/watch?v=mdJzKcfZJNo"
  },
  {
    "participant": "THOLLE Jean-Luc",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "Tout l'amour",
    "artiste": "Dario Moreno",
    "lien": "https://music.youtube.com/watch?v=WbvISQ5COQI"
  },
  {
    "participant": "BRETAUDEAU Adeline",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Tu ne m'as pas laissé le temps",
    "artiste": "David Hallyday",
    "lien": "https://music.youtube.com/watch?v=vZCpEPkalOA"
  },
  {
    "participant": "BRETAUDEAU Adeline",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Partir un jour",
    "artiste": "2be3",
    "lien": "https://music.youtube.com/watch?v=Oh0Dqp8AzL0"
  },
  {
    "participant": "COUGNAUD Edgar",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "T.N.T.",
    "artiste": "AC /DC",
    "lien": "https://music.youtube.com/watch?v=LADzLojLRCU"
  },
  {
    "participant": "COUGNAUD Edgar",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "Mais je t'aime",
    "artiste": "Grand Corps Malade / Camille Lellouche",
    "lien": "https://music.youtube.com/watch?v=7ss-xmvLGFw"
  },
  {
    "participant": "REDUREAU Jeanine",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Il est où le bonheur",
    "artiste": "Christophe Maé",
    "lien": "https://music.youtube.com/watch?v=m5qXr9lLdwA"
  },
  {
    "participant": "FERDJIOUI Estelle",
    "groupe": "Volley",
    "type": "Préférée",
    "chanson": "Le pouvoir des fleurs",
    "artiste": "Laurent Voulzy",
    "lien": "https://music.youtube.com/watch?v=S33slg2-dp8"
  },
  {
    "participant": "FERDJIOUI Estelle",
    "groupe": "Volley",
    "type": "Coupable",
    "chanson": "On écrit sur les murs",
    "artiste": "Kids United",
    "lien": "https://music.youtube.com/watch?v=VV5oVYVGfNc"
  },
  {
    "participant": "RICHARD Charly",
    "groupe": "Famille",
    "type": "Préférée",
    "chanson": "Thunderstruck",
    "artiste": "AC /DC",
    "lien": "https://music.youtube.com/watch?v=v2AC41dglnM"
  },
  {
    "participant": "RICHARD Charly",
    "groupe": "Famille",
    "type": "Coupable",
    "chanson": "Papaoutai",
    "artiste": "Stromae",
    "lien": "https://music.youtube.com/watch?v=oiKj0Z_Xnjc"
  }
];