const states = [
    {
        "id": 3901,
        "name": "Badakhshan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3871,
        "name": "Badghis",
        "country_name": "Afghanistan"
    },
    {
        "id": 3875,
        "name": "Baghlan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3884,
        "name": "Balkh",
        "country_name": "Afghanistan"
    },
    {
        "id": 3872,
        "name": "Bamyan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3892,
        "name": "Daykundi",
        "country_name": "Afghanistan"
    },
    {
        "id": 3899,
        "name": "Farah",
        "country_name": "Afghanistan"
    },
    {
        "id": 3889,
        "name": "Faryab",
        "country_name": "Afghanistan"
    },
    {
        "id": 3870,
        "name": "Ghazni",
        "country_name": "Afghanistan"
    },
    {
        "id": 3888,
        "name": "Ghōr",
        "country_name": "Afghanistan"
    },
    {
        "id": 3873,
        "name": "Helmand",
        "country_name": "Afghanistan"
    },
    {
        "id": 3887,
        "name": "Herat",
        "country_name": "Afghanistan"
    },
    {
        "id": 3886,
        "name": "Jowzjan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3902,
        "name": "Kabul",
        "country_name": "Afghanistan"
    },
    {
        "id": 3890,
        "name": "Kandahar",
        "country_name": "Afghanistan"
    },
    {
        "id": 3879,
        "name": "Kapisa",
        "country_name": "Afghanistan"
    },
    {
        "id": 3878,
        "name": "Khost",
        "country_name": "Afghanistan"
    },
    {
        "id": 3876,
        "name": "Kunar",
        "country_name": "Afghanistan"
    },
    {
        "id": 3900,
        "name": "Kunduz Province",
        "country_name": "Afghanistan"
    },
    {
        "id": 3891,
        "name": "Laghman",
        "country_name": "Afghanistan"
    },
    {
        "id": 3897,
        "name": "Logar",
        "country_name": "Afghanistan"
    },
    {
        "id": 3882,
        "name": "Nangarhar",
        "country_name": "Afghanistan"
    },
    {
        "id": 3896,
        "name": "Nimruz",
        "country_name": "Afghanistan"
    },
    {
        "id": 3880,
        "name": "Nuristan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3894,
        "name": "Paktia",
        "country_name": "Afghanistan"
    },
    {
        "id": 3877,
        "name": "Paktika",
        "country_name": "Afghanistan"
    },
    {
        "id": 3881,
        "name": "Panjshir",
        "country_name": "Afghanistan"
    },
    {
        "id": 3895,
        "name": "Parwan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3883,
        "name": "Samangan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3885,
        "name": "Sar-e Pol",
        "country_name": "Afghanistan"
    },
    {
        "id": 3893,
        "name": "Takhar",
        "country_name": "Afghanistan"
    },
    {
        "id": 3898,
        "name": "Urozgan",
        "country_name": "Afghanistan"
    },
    {
        "id": 3874,
        "name": "Zabul",
        "country_name": "Afghanistan"
    },
    {
        "id": 603,
        "name": "Berat County",
        "country_name": "Albania"
    },
    {
        "id": 629,
        "name": "Berat District",
        "country_name": "Albania"
    },
    {
        "id": 607,
        "name": "Bulqizë District",
        "country_name": "Albania"
    },
    {
        "id": 618,
        "name": "Delvinë District",
        "country_name": "Albania"
    },
    {
        "id": 608,
        "name": "Devoll District",
        "country_name": "Albania"
    },
    {
        "id": 610,
        "name": "Dibër County",
        "country_name": "Albania"
    },
    {
        "id": 605,
        "name": "Dibër District",
        "country_name": "Albania"
    },
    {
        "id": 632,
        "name": "Durrës County",
        "country_name": "Albania"
    },
    {
        "id": 639,
        "name": "Durrës District",
        "country_name": "Albania"
    },
    {
        "id": 598,
        "name": "Elbasan County",
        "country_name": "Albania"
    },
    {
        "id": 631,
        "name": "Fier County",
        "country_name": "Albania"
    },
    {
        "id": 627,
        "name": "Fier District",
        "country_name": "Albania"
    },
    {
        "id": 604,
        "name": "Gjirokastër County",
        "country_name": "Albania"
    },
    {
        "id": 621,
        "name": "Gjirokastër District",
        "country_name": "Albania"
    },
    {
        "id": 617,
        "name": "Gramsh District",
        "country_name": "Albania"
    },
    {
        "id": 600,
        "name": "Has District",
        "country_name": "Albania"
    },
    {
        "id": 594,
        "name": "Kavajë District",
        "country_name": "Albania"
    },
    {
        "id": 628,
        "name": "Kolonjë District",
        "country_name": "Albania"
    },
    {
        "id": 630,
        "name": "Korçë County",
        "country_name": "Albania"
    },
    {
        "id": 597,
        "name": "Korçë District",
        "country_name": "Albania"
    },
    {
        "id": 614,
        "name": "Krujë District",
        "country_name": "Albania"
    },
    {
        "id": 612,
        "name": "Kuçovë District",
        "country_name": "Albania"
    },
    {
        "id": 601,
        "name": "Kukës County",
        "country_name": "Albania"
    },
    {
        "id": 623,
        "name": "Kukës District",
        "country_name": "Albania"
    },
    {
        "id": 622,
        "name": "Kurbin District",
        "country_name": "Albania"
    },
    {
        "id": 609,
        "name": "Lezhë County",
        "country_name": "Albania"
    },
    {
        "id": 595,
        "name": "Lezhë District",
        "country_name": "Albania"
    },
    {
        "id": 596,
        "name": "Librazhd District",
        "country_name": "Albania"
    },
    {
        "id": 599,
        "name": "Lushnjë District",
        "country_name": "Albania"
    },
    {
        "id": 602,
        "name": "Malësi e Madhe District",
        "country_name": "Albania"
    },
    {
        "id": 637,
        "name": "Mallakastër District",
        "country_name": "Albania"
    },
    {
        "id": 635,
        "name": "Mat District",
        "country_name": "Albania"
    },
    {
        "id": 638,
        "name": "Mirditë District",
        "country_name": "Albania"
    },
    {
        "id": 619,
        "name": "Peqin District",
        "country_name": "Albania"
    },
    {
        "id": 625,
        "name": "Përmet District",
        "country_name": "Albania"
    },
    {
        "id": 606,
        "name": "Pogradec District",
        "country_name": "Albania"
    },
    {
        "id": 620,
        "name": "Pukë District",
        "country_name": "Albania"
    },
    {
        "id": 624,
        "name": "Sarandë District",
        "country_name": "Albania"
    },
    {
        "id": 611,
        "name": "Shkodër County",
        "country_name": "Albania"
    },
    {
        "id": 626,
        "name": "Shkodër District",
        "country_name": "Albania"
    },
    {
        "id": 593,
        "name": "Skrapar District",
        "country_name": "Albania"
    },
    {
        "id": 616,
        "name": "Tepelenë District",
        "country_name": "Albania"
    },
    {
        "id": 615,
        "name": "Tirana County",
        "country_name": "Albania"
    },
    {
        "id": 633,
        "name": "Tirana District",
        "country_name": "Albania"
    },
    {
        "id": 636,
        "name": "Tropojë District",
        "country_name": "Albania"
    },
    {
        "id": 634,
        "name": "Vlorë County",
        "country_name": "Albania"
    },
    {
        "id": 613,
        "name": "Vlorë District",
        "country_name": "Albania"
    },
    {
        "id": 1118,
        "name": "Adrar",
        "country_name": "Algeria"
    },
    {
        "id": 1119,
        "name": "Aïn Defla",
        "country_name": "Algeria"
    },
    {
        "id": 1122,
        "name": "Aïn Témouchent",
        "country_name": "Algeria"
    },
    {
        "id": 1144,
        "name": "Algiers",
        "country_name": "Algeria"
    },
    {
        "id": 1103,
        "name": "Annaba",
        "country_name": "Algeria"
    },
    {
        "id": 1142,
        "name": "Batna",
        "country_name": "Algeria"
    },
    {
        "id": 1108,
        "name": "Béchar",
        "country_name": "Algeria"
    },
    {
        "id": 1128,
        "name": "Béjaïa",
        "country_name": "Algeria"
    },
    {
        "id": 4909,
        "name": "Béni Abbès",
        "country_name": "Algeria"
    },
    {
        "id": 1114,
        "name": "Biskra",
        "country_name": "Algeria"
    },
    {
        "id": 1111,
        "name": "Blida",
        "country_name": "Algeria"
    },
    {
        "id": 4908,
        "name": "Bordj Baji Mokhtar",
        "country_name": "Algeria"
    },
    {
        "id": 1116,
        "name": "Bordj Bou Arréridj",
        "country_name": "Algeria"
    },
    {
        "id": 1104,
        "name": "Bouïra",
        "country_name": "Algeria"
    },
    {
        "id": 1125,
        "name": "Boumerdès",
        "country_name": "Algeria"
    },
    {
        "id": 1105,
        "name": "Chlef",
        "country_name": "Algeria"
    },
    {
        "id": 1121,
        "name": "Constantine",
        "country_name": "Algeria"
    },
    {
        "id": 4912,
        "name": "Djanet",
        "country_name": "Algeria"
    },
    {
        "id": 1098,
        "name": "Djelfa",
        "country_name": "Algeria"
    },
    {
        "id": 1129,
        "name": "El Bayadh",
        "country_name": "Algeria"
    },
    {
        "id": 4905,
        "name": "El M'ghair",
        "country_name": "Algeria"
    },
    {
        "id": 4906,
        "name": "El Menia",
        "country_name": "Algeria"
    },
    {
        "id": 1099,
        "name": "El Oued",
        "country_name": "Algeria"
    },
    {
        "id": 1100,
        "name": "El Tarf",
        "country_name": "Algeria"
    },
    {
        "id": 1127,
        "name": "Ghardaïa",
        "country_name": "Algeria"
    },
    {
        "id": 1137,
        "name": "Guelma",
        "country_name": "Algeria"
    },
    {
        "id": 1112,
        "name": "Illizi",
        "country_name": "Algeria"
    },
    {
        "id": 4914,
        "name": "In Guezzam",
        "country_name": "Algeria"
    },
    {
        "id": 4913,
        "name": "In Salah",
        "country_name": "Algeria"
    },
    {
        "id": 1113,
        "name": "Jijel",
        "country_name": "Algeria"
    },
    {
        "id": 1126,
        "name": "Khenchela",
        "country_name": "Algeria"
    },
    {
        "id": 1138,
        "name": "Laghouat",
        "country_name": "Algeria"
    },
    {
        "id": 1134,
        "name": "M'Sila",
        "country_name": "Algeria"
    },
    {
        "id": 1124,
        "name": "Mascara",
        "country_name": "Algeria"
    },
    {
        "id": 1109,
        "name": "Médéa",
        "country_name": "Algeria"
    },
    {
        "id": 1132,
        "name": "Mila",
        "country_name": "Algeria"
    },
    {
        "id": 1140,
        "name": "Mostaganem",
        "country_name": "Algeria"
    },
    {
        "id": 1102,
        "name": "Naama",
        "country_name": "Algeria"
    },
    {
        "id": 1101,
        "name": "Oran",
        "country_name": "Algeria"
    },
    {
        "id": 1139,
        "name": "Ouargla",
        "country_name": "Algeria"
    },
    {
        "id": 4907,
        "name": "Ouled Djellal",
        "country_name": "Algeria"
    },
    {
        "id": 1136,
        "name": "Oum El Bouaghi",
        "country_name": "Algeria"
    },
    {
        "id": 1130,
        "name": "Relizane",
        "country_name": "Algeria"
    },
    {
        "id": 1123,
        "name": "Saïda",
        "country_name": "Algeria"
    },
    {
        "id": 1141,
        "name": "Sétif",
        "country_name": "Algeria"
    },
    {
        "id": 4902,
        "name": "Sidi Bel Abbès",
        "country_name": "Algeria"
    },
    {
        "id": 1110,
        "name": "Skikda",
        "country_name": "Algeria"
    },
    {
        "id": 1143,
        "name": "Souk Ahras",
        "country_name": "Algeria"
    },
    {
        "id": 1135,
        "name": "Tamanghasset",
        "country_name": "Algeria"
    },
    {
        "id": 1117,
        "name": "Tébessa",
        "country_name": "Algeria"
    },
    {
        "id": 1106,
        "name": "Tiaret",
        "country_name": "Algeria"
    },
    {
        "id": 4910,
        "name": "Timimoun",
        "country_name": "Algeria"
    },
    {
        "id": 1120,
        "name": "Tindouf",
        "country_name": "Algeria"
    },
    {
        "id": 1115,
        "name": "Tipasa",
        "country_name": "Algeria"
    },
    {
        "id": 1133,
        "name": "Tissemsilt",
        "country_name": "Algeria"
    },
    {
        "id": 1131,
        "name": "Tizi Ouzou",
        "country_name": "Algeria"
    },
    {
        "id": 1107,
        "name": "Tlemcen",
        "country_name": "Algeria"
    },
    {
        "id": 4911,
        "name": "Touggourt",
        "country_name": "Algeria"
    },
    {
        "id": 488,
        "name": "Andorra la Vella",
        "country_name": "Andorra"
    },
    {
        "id": 489,
        "name": "Canillo",
        "country_name": "Andorra"
    },
    {
        "id": 487,
        "name": "Encamp",
        "country_name": "Andorra"
    },
    {
        "id": 492,
        "name": "Escaldes-Engordany",
        "country_name": "Andorra"
    },
    {
        "id": 493,
        "name": "La Massana",
        "country_name": "Andorra"
    },
    {
        "id": 491,
        "name": "Ordino",
        "country_name": "Andorra"
    },
    {
        "id": 490,
        "name": "Sant Julià de Lòria",
        "country_name": "Andorra"
    },
    {
        "id": 221,
        "name": "Bengo Province",
        "country_name": "Angola"
    },
    {
        "id": 218,
        "name": "Benguela Province",
        "country_name": "Angola"
    },
    {
        "id": 212,
        "name": "Bié Province",
        "country_name": "Angola"
    },
    {
        "id": 228,
        "name": "Cabinda Province",
        "country_name": "Angola"
    },
    {
        "id": 226,
        "name": "Cuando Cubango Province",
        "country_name": "Angola"
    },
    {
        "id": 217,
        "name": "Cuanza Norte Province",
        "country_name": "Angola"
    },
    {
        "id": 216,
        "name": "Cuanza Sul",
        "country_name": "Angola"
    },
    {
        "id": 215,
        "name": "Cunene Province",
        "country_name": "Angola"
    },
    {
        "id": 213,
        "name": "Huambo Province",
        "country_name": "Angola"
    },
    {
        "id": 225,
        "name": "Huíla Province",
        "country_name": "Angola"
    },
    {
        "id": 222,
        "name": "Luanda Province",
        "country_name": "Angola"
    },
    {
        "id": 223,
        "name": "Lunda Norte Province",
        "country_name": "Angola"
    },
    {
        "id": 220,
        "name": "Lunda Sul Province",
        "country_name": "Angola"
    },
    {
        "id": 227,
        "name": "Malanje Province",
        "country_name": "Angola"
    },
    {
        "id": 219,
        "name": "Moxico Province",
        "country_name": "Angola"
    },
    {
        "id": 224,
        "name": "Uíge Province",
        "country_name": "Angola"
    },
    {
        "id": 214,
        "name": "Zaire Province",
        "country_name": "Angola"
    },
    {
        "id": 3708,
        "name": "Barbuda",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3703,
        "name": "Redonda",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3709,
        "name": "Saint George Parish",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3706,
        "name": "Saint John Parish",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3707,
        "name": "Saint Mary Parish",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3705,
        "name": "Saint Paul Parish",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3704,
        "name": "Saint Peter Parish",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3710,
        "name": "Saint Philip Parish",
        "country_name": "Antigua And Barbuda"
    },
    {
        "id": 3656,
        "name": "Buenos Aires",
        "country_name": "Argentina"
    },
    {
        "id": 3647,
        "name": "Catamarca",
        "country_name": "Argentina"
    },
    {
        "id": 3640,
        "name": "Chaco",
        "country_name": "Argentina"
    },
    {
        "id": 3651,
        "name": "Chubut",
        "country_name": "Argentina"
    },
    {
        "id": 4880,
        "name": "Ciudad Autónoma de Buenos Aires",
        "country_name": "Argentina"
    },
    {
        "id": 3642,
        "name": "Córdoba",
        "country_name": "Argentina"
    },
    {
        "id": 3638,
        "name": "Corrientes",
        "country_name": "Argentina"
    },
    {
        "id": 3654,
        "name": "Entre Ríos",
        "country_name": "Argentina"
    },
    {
        "id": 3652,
        "name": "Formosa",
        "country_name": "Argentina"
    },
    {
        "id": 3645,
        "name": "Jujuy",
        "country_name": "Argentina"
    },
    {
        "id": 3655,
        "name": "La Pampa",
        "country_name": "Argentina"
    },
    {
        "id": 3653,
        "name": "La Rioja",
        "country_name": "Argentina"
    },
    {
        "id": 3646,
        "name": "Mendoza",
        "country_name": "Argentina"
    },
    {
        "id": 3644,
        "name": "Misiones",
        "country_name": "Argentina"
    },
    {
        "id": 3648,
        "name": "Neuquén",
        "country_name": "Argentina"
    },
    {
        "id": 3639,
        "name": "Río Negro",
        "country_name": "Argentina"
    },
    {
        "id": 3643,
        "name": "Salta",
        "country_name": "Argentina"
    },
    {
        "id": 3634,
        "name": "San Juan",
        "country_name": "Argentina"
    },
    {
        "id": 3636,
        "name": "San Luis",
        "country_name": "Argentina"
    },
    {
        "id": 3649,
        "name": "Santa Cruz",
        "country_name": "Argentina"
    },
    {
        "id": 3641,
        "name": "Santa Fe",
        "country_name": "Argentina"
    },
    {
        "id": 3635,
        "name": "Santiago del Estero",
        "country_name": "Argentina"
    },
    {
        "id": 3650,
        "name": "Tierra del Fuego",
        "country_name": "Argentina"
    },
    {
        "id": 3637,
        "name": "Tucumán",
        "country_name": "Argentina"
    },
    {
        "id": 2023,
        "name": "Aragatsotn Region",
        "country_name": "Armenia"
    },
    {
        "id": 2024,
        "name": "Ararat Province",
        "country_name": "Armenia"
    },
    {
        "id": 2026,
        "name": "Armavir Region",
        "country_name": "Armenia"
    },
    {
        "id": 2028,
        "name": "Gegharkunik Province",
        "country_name": "Armenia"
    },
    {
        "id": 2033,
        "name": "Kotayk Region",
        "country_name": "Armenia"
    },
    {
        "id": 2029,
        "name": "Lori Region",
        "country_name": "Armenia"
    },
    {
        "id": 2031,
        "name": "Shirak Region",
        "country_name": "Armenia"
    },
    {
        "id": 2027,
        "name": "Syunik Province",
        "country_name": "Armenia"
    },
    {
        "id": 2032,
        "name": "Tavush Region",
        "country_name": "Armenia"
    },
    {
        "id": 2025,
        "name": "Vayots Dzor Region",
        "country_name": "Armenia"
    },
    {
        "id": 2030,
        "name": "Yerevan",
        "country_name": "Armenia"
    },
    {
        "id": 3907,
        "name": "Australian Capital Territory",
        "country_name": "Australia"
    },
    {
        "id": 3909,
        "name": "New South Wales",
        "country_name": "Australia"
    },
    {
        "id": 3910,
        "name": "Northern Territory",
        "country_name": "Australia"
    },
    {
        "id": 3905,
        "name": "Queensland",
        "country_name": "Australia"
    },
    {
        "id": 3904,
        "name": "South Australia",
        "country_name": "Australia"
    },
    {
        "id": 3908,
        "name": "Tasmania",
        "country_name": "Australia"
    },
    {
        "id": 3903,
        "name": "Victoria",
        "country_name": "Australia"
    },
    {
        "id": 3906,
        "name": "Western Australia",
        "country_name": "Australia"
    },
    {
        "id": 2062,
        "name": "Burgenland",
        "country_name": "Austria"
    },
    {
        "id": 2057,
        "name": "Carinthia",
        "country_name": "Austria"
    },
    {
        "id": 2065,
        "name": "Lower Austria",
        "country_name": "Austria"
    },
    {
        "id": 2061,
        "name": "Salzburg",
        "country_name": "Austria"
    },
    {
        "id": 2059,
        "name": "Styria",
        "country_name": "Austria"
    },
    {
        "id": 2064,
        "name": "Tyrol",
        "country_name": "Austria"
    },
    {
        "id": 2058,
        "name": "Upper Austria",
        "country_name": "Austria"
    },
    {
        "id": 2060,
        "name": "Vienna",
        "country_name": "Austria"
    },
    {
        "id": 2063,
        "name": "Vorarlberg",
        "country_name": "Austria"
    },
    {
        "id": 540,
        "name": "Absheron District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 559,
        "name": "Agdam District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 553,
        "name": "Agdash District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 577,
        "name": "Aghjabadi District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 543,
        "name": "Agstafa District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 547,
        "name": "Agsu District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 528,
        "name": "Astara District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 575,
        "name": "Babek District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 552,
        "name": "Baku",
        "country_name": "Azerbaijan"
    },
    {
        "id": 560,
        "name": "Balakan District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 569,
        "name": "Barda District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 554,
        "name": "Beylagan District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 532,
        "name": "Bilasuvar District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 561,
        "name": "Dashkasan District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 527,
        "name": "Fizuli District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 585,
        "name": "Ganja",
        "country_name": "Azerbaijan"
    },
    {
        "id": 589,
        "name": "Gədəbəy",
        "country_name": "Azerbaijan"
    },
    {
        "id": 573,
        "name": "Gobustan District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 551,
        "name": "Goranboy District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 531,
        "name": "Goychay",
        "country_name": "Azerbaijan"
    },
    {
        "id": 574,
        "name": "Goygol District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 571,
        "name": "Hajigabul District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 544,
        "name": "Imishli District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 564,
        "name": "Ismailli District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 570,
        "name": "Jabrayil District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 578,
        "name": "Jalilabad District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 572,
        "name": "Julfa District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 525,
        "name": "Kalbajar District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 567,
        "name": "Kangarli District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 590,
        "name": "Khachmaz District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 537,
        "name": "Khizi District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 524,
        "name": "Khojali District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 549,
        "name": "Kurdamir District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 541,
        "name": "Lachin District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 587,
        "name": "Lankaran",
        "country_name": "Azerbaijan"
    },
    {
        "id": 558,
        "name": "Lankaran District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 546,
        "name": "Lerik District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 568,
        "name": "Martuni",
        "country_name": "Azerbaijan"
    },
    {
        "id": 555,
        "name": "Masally District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 580,
        "name": "Mingachevir",
        "country_name": "Azerbaijan"
    },
    {
        "id": 562,
        "name": "Nakhchivan Autonomous Republic",
        "country_name": "Azerbaijan"
    },
    {
        "id": 530,
        "name": "Neftchala District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 556,
        "name": "Oghuz District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 534,
        "name": "Ordubad District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 542,
        "name": "Qabala District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 526,
        "name": "Qakh District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 521,
        "name": "Qazakh District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 563,
        "name": "Quba District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 548,
        "name": "Qubadli District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 588,
        "name": "Qusar District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 557,
        "name": "Saatly District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 565,
        "name": "Sabirabad District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 522,
        "name": "Sadarak District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 545,
        "name": "Salyan District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 536,
        "name": "Samukh District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 591,
        "name": "Shabran District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 579,
        "name": "Shahbuz District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 518,
        "name": "Shaki",
        "country_name": "Azerbaijan"
    },
    {
        "id": 586,
        "name": "Shaki District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 529,
        "name": "Shamakhi District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 583,
        "name": "Shamkir District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 535,
        "name": "Sharur District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 520,
        "name": "Shirvan",
        "country_name": "Azerbaijan"
    },
    {
        "id": 592,
        "name": "Shusha District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 584,
        "name": "Siazan District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 582,
        "name": "Sumqayit",
        "country_name": "Azerbaijan"
    },
    {
        "id": 519,
        "name": "Tartar District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 533,
        "name": "Tovuz District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 539,
        "name": "Ujar District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 550,
        "name": "Yardymli District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 538,
        "name": "Yevlakh",
        "country_name": "Azerbaijan"
    },
    {
        "id": 523,
        "name": "Yevlakh District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 581,
        "name": "Zangilan District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 566,
        "name": "Zaqatala District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 576,
        "name": "Zardab District",
        "country_name": "Azerbaijan"
    },
    {
        "id": 1992,
        "name": "Capital Governorate",
        "country_name": "Bahrain"
    },
    {
        "id": 1996,
        "name": "Central Governorate",
        "country_name": "Bahrain"
    },
    {
        "id": 1995,
        "name": "Muharraq Governorate",
        "country_name": "Bahrain"
    },
    {
        "id": 1994,
        "name": "Northern Governorate",
        "country_name": "Bahrain"
    },
    {
        "id": 1993,
        "name": "Southern Governorate",
        "country_name": "Bahrain"
    },
    {
        "id": 796,
        "name": "Bagerhat District",
        "country_name": "Bangladesh"
    },
    {
        "id": 802,
        "name": "Bahadia",
        "country_name": "Bangladesh"
    },
    {
        "id": 752,
        "name": "Bandarban District",
        "country_name": "Bangladesh"
    },
    {
        "id": 784,
        "name": "Barguna District",
        "country_name": "Bangladesh"
    },
    {
        "id": 818,
        "name": "Barisal District",
        "country_name": "Bangladesh"
    },
    {
        "id": 807,
        "name": "Barisal Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 756,
        "name": "Bhola District",
        "country_name": "Bangladesh"
    },
    {
        "id": 797,
        "name": "Bogra District",
        "country_name": "Bangladesh"
    },
    {
        "id": 810,
        "name": "Brahmanbaria District",
        "country_name": "Bangladesh"
    },
    {
        "id": 768,
        "name": "Chandpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 761,
        "name": "Chapai Nawabganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 785,
        "name": "Chittagong District",
        "country_name": "Bangladesh"
    },
    {
        "id": 803,
        "name": "Chittagong Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 788,
        "name": "Chuadanga District",
        "country_name": "Bangladesh"
    },
    {
        "id": 763,
        "name": "Comilla District",
        "country_name": "Bangladesh"
    },
    {
        "id": 751,
        "name": "Cox's Bazar District",
        "country_name": "Bangladesh"
    },
    {
        "id": 771,
        "name": "Dhaka District",
        "country_name": "Bangladesh"
    },
    {
        "id": 760,
        "name": "Dhaka Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 783,
        "name": "Dinajpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 762,
        "name": "Faridpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 816,
        "name": "Feni District",
        "country_name": "Bangladesh"
    },
    {
        "id": 795,
        "name": "Gaibandha District",
        "country_name": "Bangladesh"
    },
    {
        "id": 798,
        "name": "Gazipur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 792,
        "name": "Gopalganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 805,
        "name": "Habiganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 808,
        "name": "Jamalpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 757,
        "name": "Jessore District",
        "country_name": "Bangladesh"
    },
    {
        "id": 778,
        "name": "Jhalokati District",
        "country_name": "Bangladesh"
    },
    {
        "id": 789,
        "name": "Jhenaidah District",
        "country_name": "Bangladesh"
    },
    {
        "id": 806,
        "name": "Joypurhat District",
        "country_name": "Bangladesh"
    },
    {
        "id": 786,
        "name": "Khagrachari District",
        "country_name": "Bangladesh"
    },
    {
        "id": 811,
        "name": "Khulna District",
        "country_name": "Bangladesh"
    },
    {
        "id": 775,
        "name": "Khulna Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 779,
        "name": "Kishoreganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 793,
        "name": "Kurigram District",
        "country_name": "Bangladesh"
    },
    {
        "id": 774,
        "name": "Kushtia District",
        "country_name": "Bangladesh"
    },
    {
        "id": 819,
        "name": "Lakshmipur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 780,
        "name": "Lalmonirhat District",
        "country_name": "Bangladesh"
    },
    {
        "id": 817,
        "name": "Madaripur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 776,
        "name": "Meherpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 794,
        "name": "Moulvibazar District",
        "country_name": "Bangladesh"
    },
    {
        "id": 790,
        "name": "Munshiganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 766,
        "name": "Mymensingh District",
        "country_name": "Bangladesh"
    },
    {
        "id": 758,
        "name": "Mymensingh Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 814,
        "name": "Naogaon District",
        "country_name": "Bangladesh"
    },
    {
        "id": 769,
        "name": "Narail District",
        "country_name": "Bangladesh"
    },
    {
        "id": 770,
        "name": "Narayanganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 787,
        "name": "Natore District",
        "country_name": "Bangladesh"
    },
    {
        "id": 764,
        "name": "Netrokona District",
        "country_name": "Bangladesh"
    },
    {
        "id": 772,
        "name": "Nilphamari District",
        "country_name": "Bangladesh"
    },
    {
        "id": 815,
        "name": "Noakhali District",
        "country_name": "Bangladesh"
    },
    {
        "id": 754,
        "name": "Pabna District",
        "country_name": "Bangladesh"
    },
    {
        "id": 800,
        "name": "Panchagarh District",
        "country_name": "Bangladesh"
    },
    {
        "id": 777,
        "name": "Patuakhali District",
        "country_name": "Bangladesh"
    },
    {
        "id": 791,
        "name": "Pirojpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 773,
        "name": "Rajbari District",
        "country_name": "Bangladesh"
    },
    {
        "id": 813,
        "name": "Rajshahi District",
        "country_name": "Bangladesh"
    },
    {
        "id": 753,
        "name": "Rajshahi Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 809,
        "name": "Rangamati Hill District",
        "country_name": "Bangladesh"
    },
    {
        "id": 759,
        "name": "Rangpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 750,
        "name": "Rangpur Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 799,
        "name": "Satkhira District",
        "country_name": "Bangladesh"
    },
    {
        "id": 801,
        "name": "Shariatpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 755,
        "name": "Sherpur District",
        "country_name": "Bangladesh"
    },
    {
        "id": 781,
        "name": "Sirajganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 812,
        "name": "Sunamganj District",
        "country_name": "Bangladesh"
    },
    {
        "id": 767,
        "name": "Sylhet District",
        "country_name": "Bangladesh"
    },
    {
        "id": 765,
        "name": "Sylhet Division",
        "country_name": "Bangladesh"
    },
    {
        "id": 782,
        "name": "Tangail District",
        "country_name": "Bangladesh"
    },
    {
        "id": 804,
        "name": "Thakurgaon District",
        "country_name": "Bangladesh"
    },
    {
        "id": 1228,
        "name": "Christ Church",
        "country_name": "Barbados"
    },
    {
        "id": 1229,
        "name": "Saint Andrew",
        "country_name": "Barbados"
    },
    {
        "id": 1226,
        "name": "Saint George",
        "country_name": "Barbados"
    },
    {
        "id": 1224,
        "name": "Saint James",
        "country_name": "Barbados"
    },
    {
        "id": 1227,
        "name": "Saint John",
        "country_name": "Barbados"
    },
    {
        "id": 1223,
        "name": "Saint Joseph",
        "country_name": "Barbados"
    },
    {
        "id": 1221,
        "name": "Saint Lucy",
        "country_name": "Barbados"
    },
    {
        "id": 1230,
        "name": "Saint Michael",
        "country_name": "Barbados"
    },
    {
        "id": 1222,
        "name": "Saint Peter",
        "country_name": "Barbados"
    },
    {
        "id": 1220,
        "name": "Saint Philip",
        "country_name": "Barbados"
    },
    {
        "id": 1225,
        "name": "Saint Thomas",
        "country_name": "Barbados"
    },
    {
        "id": 2959,
        "name": "Brest Region",
        "country_name": "Belarus"
    },
    {
        "id": 2955,
        "name": "Gomel Region",
        "country_name": "Belarus"
    },
    {
        "id": 2956,
        "name": "Grodno Region",
        "country_name": "Belarus"
    },
    {
        "id": 2958,
        "name": "Minsk",
        "country_name": "Belarus"
    },
    {
        "id": 2957,
        "name": "Minsk Region",
        "country_name": "Belarus"
    },
    {
        "id": 2954,
        "name": "Mogilev Region",
        "country_name": "Belarus"
    },
    {
        "id": 2960,
        "name": "Vitebsk Region",
        "country_name": "Belarus"
    },
    {
        "id": 1381,
        "name": "Antwerp",
        "country_name": "Belgium"
    },
    {
        "id": 1376,
        "name": "Brussels-Capital Region",
        "country_name": "Belgium"
    },
    {
        "id": 1377,
        "name": "East Flanders",
        "country_name": "Belgium"
    },
    {
        "id": 1373,
        "name": "Flanders",
        "country_name": "Belgium"
    },
    {
        "id": 1374,
        "name": "Flemish Brabant",
        "country_name": "Belgium"
    },
    {
        "id": 1375,
        "name": "Hainaut",
        "country_name": "Belgium"
    },
    {
        "id": 1384,
        "name": "Liège",
        "country_name": "Belgium"
    },
    {
        "id": 1372,
        "name": "Limburg",
        "country_name": "Belgium"
    },
    {
        "id": 1379,
        "name": "Luxembourg",
        "country_name": "Belgium"
    },
    {
        "id": 1378,
        "name": "Namur",
        "country_name": "Belgium"
    },
    {
        "id": 1380,
        "name": "Wallonia",
        "country_name": "Belgium"
    },
    {
        "id": 1382,
        "name": "Walloon Brabant",
        "country_name": "Belgium"
    },
    {
        "id": 1383,
        "name": "West Flanders",
        "country_name": "Belgium"
    },
    {
        "id": 264,
        "name": "Belize District",
        "country_name": "Belize"
    },
    {
        "id": 269,
        "name": "Cayo District",
        "country_name": "Belize"
    },
    {
        "id": 266,
        "name": "Corozal District",
        "country_name": "Belize"
    },
    {
        "id": 268,
        "name": "Orange Walk District",
        "country_name": "Belize"
    },
    {
        "id": 265,
        "name": "Stann Creek District",
        "country_name": "Belize"
    },
    {
        "id": 267,
        "name": "Toledo District",
        "country_name": "Belize"
    },
    {
        "id": 3077,
        "name": "Alibori Department",
        "country_name": "Benin"
    },
    {
        "id": 3076,
        "name": "Atakora Department",
        "country_name": "Benin"
    },
    {
        "id": 3079,
        "name": "Atlantique Department",
        "country_name": "Benin"
    },
    {
        "id": 3078,
        "name": "Borgou Department",
        "country_name": "Benin"
    },
    {
        "id": 3070,
        "name": "Collines Department",
        "country_name": "Benin"
    },
    {
        "id": 3072,
        "name": "Donga Department",
        "country_name": "Benin"
    },
    {
        "id": 3071,
        "name": "Kouffo Department",
        "country_name": "Benin"
    },
    {
        "id": 3081,
        "name": "Littoral Department",
        "country_name": "Benin"
    },
    {
        "id": 3075,
        "name": "Mono Department",
        "country_name": "Benin"
    },
    {
        "id": 3080,
        "name": "Ouémé Department",
        "country_name": "Benin"
    },
    {
        "id": 3074,
        "name": "Plateau Department",
        "country_name": "Benin"
    },
    {
        "id": 3073,
        "name": "Zou Department",
        "country_name": "Benin"
    },
    {
        "id": 4860,
        "name": "Devonshire Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 4861,
        "name": "Hamilton Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 4863,
        "name": "Paget Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 4864,
        "name": "Pembroke Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 4866,
        "name": "Saint George's Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 4867,
        "name": "Sandys Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 4868,
        "name": "Smith's Parish,",
        "country_name": "Bermuda"
    },
    {
        "id": 4869,
        "name": "Southampton Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 4870,
        "name": "Warwick Parish",
        "country_name": "Bermuda"
    },
    {
        "id": 240,
        "name": "Bumthang District",
        "country_name": "Bhutan"
    },
    {
        "id": 239,
        "name": "Chukha District",
        "country_name": "Bhutan"
    },
    {
        "id": 238,
        "name": "Dagana District",
        "country_name": "Bhutan"
    },
    {
        "id": 229,
        "name": "Gasa District",
        "country_name": "Bhutan"
    },
    {
        "id": 232,
        "name": "Haa District",
        "country_name": "Bhutan"
    },
    {
        "id": 234,
        "name": "Lhuntse District",
        "country_name": "Bhutan"
    },
    {
        "id": 242,
        "name": "Mongar District",
        "country_name": "Bhutan"
    },
    {
        "id": 237,
        "name": "Paro District",
        "country_name": "Bhutan"
    },
    {
        "id": 244,
        "name": "Pemagatshel District",
        "country_name": "Bhutan"
    },
    {
        "id": 235,
        "name": "Punakha District",
        "country_name": "Bhutan"
    },
    {
        "id": 243,
        "name": "Samdrup Jongkhar District",
        "country_name": "Bhutan"
    },
    {
        "id": 246,
        "name": "Samtse District",
        "country_name": "Bhutan"
    },
    {
        "id": 247,
        "name": "Sarpang District",
        "country_name": "Bhutan"
    },
    {
        "id": 241,
        "name": "Thimphu District",
        "country_name": "Bhutan"
    },
    {
        "id": 236,
        "name": "Trashigang District",
        "country_name": "Bhutan"
    },
    {
        "id": 245,
        "name": "Trongsa District",
        "country_name": "Bhutan"
    },
    {
        "id": 230,
        "name": "Tsirang District",
        "country_name": "Bhutan"
    },
    {
        "id": 231,
        "name": "Wangdue Phodrang District",
        "country_name": "Bhutan"
    },
    {
        "id": 233,
        "name": "Zhemgang District",
        "country_name": "Bhutan"
    },
    {
        "id": 3375,
        "name": "Beni Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3382,
        "name": "Chuquisaca Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3381,
        "name": "Cochabamba Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3380,
        "name": "La Paz Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3376,
        "name": "Oruro Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3379,
        "name": "Pando Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3383,
        "name": "Potosí Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3377,
        "name": "Santa Cruz Department",
        "country_name": "Bolivia"
    },
    {
        "id": 3378,
        "name": "Tarija Department",
        "country_name": "Bolivia"
    },
    {
        "id": 5086,
        "name": "Bonaire",
        "country_name": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "id": 5087,
        "name": "Saba",
        "country_name": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "id": 5088,
        "name": "Sint Eustatius",
        "country_name": "Bonaire, Sint Eustatius and Saba"
    },
    {
        "id": 472,
        "name": "Bosnian Podrinje Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 460,
        "name": "Brčko District",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 471,
        "name": "Canton 10",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 462,
        "name": "Central Bosnia Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 467,
        "name": "Federation of Bosnia and Herzegovina",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 463,
        "name": "Herzegovina-Neretva Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 464,
        "name": "Posavina Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 470,
        "name": "Republika Srpska",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 466,
        "name": "Sarajevo Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 461,
        "name": "Tuzla Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 465,
        "name": "Una-Sana Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 469,
        "name": "West Herzegovina Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 468,
        "name": "Zenica-Doboj Canton",
        "country_name": "Bosnia and Herzegovina"
    },
    {
        "id": 3067,
        "name": "Central District",
        "country_name": "Botswana"
    },
    {
        "id": 3061,
        "name": "Ghanzi District",
        "country_name": "Botswana"
    },
    {
        "id": 3066,
        "name": "Kgalagadi District",
        "country_name": "Botswana"
    },
    {
        "id": 3062,
        "name": "Kgatleng District",
        "country_name": "Botswana"
    },
    {
        "id": 3069,
        "name": "Kweneng District",
        "country_name": "Botswana"
    },
    {
        "id": 3060,
        "name": "Ngamiland",
        "country_name": "Botswana"
    },
    {
        "id": 3068,
        "name": "North-East District",
        "country_name": "Botswana"
    },
    {
        "id": 3065,
        "name": "North-West District",
        "country_name": "Botswana"
    },
    {
        "id": 3064,
        "name": "South-East District",
        "country_name": "Botswana"
    },
    {
        "id": 3063,
        "name": "Southern District",
        "country_name": "Botswana"
    },
    {
        "id": 2012,
        "name": "Acre",
        "country_name": "Brazil"
    },
    {
        "id": 2007,
        "name": "Alagoas",
        "country_name": "Brazil"
    },
    {
        "id": 1999,
        "name": "Amapá",
        "country_name": "Brazil"
    },
    {
        "id": 2004,
        "name": "Amazonas",
        "country_name": "Brazil"
    },
    {
        "id": 2002,
        "name": "Bahia",
        "country_name": "Brazil"
    },
    {
        "id": 2016,
        "name": "Ceará",
        "country_name": "Brazil"
    },
    {
        "id": 2017,
        "name": "Distrito Federal",
        "country_name": "Brazil"
    },
    {
        "id": 2018,
        "name": "Espírito Santo",
        "country_name": "Brazil"
    },
    {
        "id": 2000,
        "name": "Goiás",
        "country_name": "Brazil"
    },
    {
        "id": 2015,
        "name": "Maranhão",
        "country_name": "Brazil"
    },
    {
        "id": 2011,
        "name": "Mato Grosso",
        "country_name": "Brazil"
    },
    {
        "id": 2010,
        "name": "Mato Grosso do Sul",
        "country_name": "Brazil"
    },
    {
        "id": 1998,
        "name": "Minas Gerais",
        "country_name": "Brazil"
    },
    {
        "id": 2009,
        "name": "Pará",
        "country_name": "Brazil"
    },
    {
        "id": 2005,
        "name": "Paraíba",
        "country_name": "Brazil"
    },
    {
        "id": 2022,
        "name": "Paraná",
        "country_name": "Brazil"
    },
    {
        "id": 2006,
        "name": "Pernambuco",
        "country_name": "Brazil"
    },
    {
        "id": 2008,
        "name": "Piauí",
        "country_name": "Brazil"
    },
    {
        "id": 1997,
        "name": "Rio de Janeiro",
        "country_name": "Brazil"
    },
    {
        "id": 2019,
        "name": "Rio Grande do Norte",
        "country_name": "Brazil"
    },
    {
        "id": 2001,
        "name": "Rio Grande do Sul",
        "country_name": "Brazil"
    },
    {
        "id": 2013,
        "name": "Rondônia",
        "country_name": "Brazil"
    },
    {
        "id": 4858,
        "name": "Roraima",
        "country_name": "Brazil"
    },
    {
        "id": 2014,
        "name": "Santa Catarina",
        "country_name": "Brazil"
    },
    {
        "id": 2021,
        "name": "São Paulo",
        "country_name": "Brazil"
    },
    {
        "id": 2003,
        "name": "Sergipe",
        "country_name": "Brazil"
    },
    {
        "id": 2020,
        "name": "Tocantins",
        "country_name": "Brazil"
    },
    {
        "id": 1217,
        "name": "Belait District",
        "country_name": "Brunei"
    },
    {
        "id": 1216,
        "name": "Brunei-Muara District",
        "country_name": "Brunei"
    },
    {
        "id": 1218,
        "name": "Temburong District",
        "country_name": "Brunei"
    },
    {
        "id": 1219,
        "name": "Tutong District",
        "country_name": "Brunei"
    },
    {
        "id": 4699,
        "name": "Blagoevgrad Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4715,
        "name": "Burgas Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4718,
        "name": "Dobrich Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4693,
        "name": "Gabrovo Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4704,
        "name": "Haskovo Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4702,
        "name": "Kardzhali Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4703,
        "name": "Kyustendil Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4710,
        "name": "Lovech Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4696,
        "name": "Montana Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4712,
        "name": "Pazardzhik Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4695,
        "name": "Pernik Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4706,
        "name": "Pleven Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4701,
        "name": "Plovdiv Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4698,
        "name": "Razgrad Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4713,
        "name": "Ruse Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4882,
        "name": "Shumen",
        "country_name": "Bulgaria"
    },
    {
        "id": 4708,
        "name": "Silistra Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4700,
        "name": "Sliven Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4694,
        "name": "Smolyan Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4705,
        "name": "Sofia City Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4719,
        "name": "Sofia Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4707,
        "name": "Stara Zagora Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4714,
        "name": "Targovishte Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4717,
        "name": "Varna Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4709,
        "name": "Veliko Tarnovo Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4697,
        "name": "Vidin Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4711,
        "name": "Vratsa Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 4716,
        "name": "Yambol Province",
        "country_name": "Bulgaria"
    },
    {
        "id": 3160,
        "name": "Balé Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3155,
        "name": "Bam Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3120,
        "name": "Banwa Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3152,
        "name": "Bazèga Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3138,
        "name": "Boucle du Mouhoun Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3121,
        "name": "Bougouriba Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3131,
        "name": "Boulgou",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3153,
        "name": "Cascades Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3136,
        "name": "Centre",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3162,
        "name": "Centre-Est Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3127,
        "name": "Centre-Nord Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3115,
        "name": "Centre-Ouest Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3149,
        "name": "Centre-Sud Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3167,
        "name": "Comoé Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3158,
        "name": "Est Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3148,
        "name": "Ganzourgou Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3122,
        "name": "Gnagna Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3143,
        "name": "Gourma Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3165,
        "name": "Hauts-Bassins Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3129,
        "name": "Houet Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3135,
        "name": "Ioba Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3168,
        "name": "Kadiogo Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3112,
        "name": "Kénédougou Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3132,
        "name": "Komondjari Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3157,
        "name": "Kompienga Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3146,
        "name": "Kossi Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3133,
        "name": "Koulpélogo Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3161,
        "name": "Kouritenga Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3147,
        "name": "Kourwéogo Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3159,
        "name": "Léraba Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3151,
        "name": "Loroum Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3123,
        "name": "Mouhoun",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3116,
        "name": "Nahouri Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3113,
        "name": "Namentenga Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3142,
        "name": "Nayala Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3164,
        "name": "Nord Region, Burkina Faso",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3156,
        "name": "Noumbiel Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3141,
        "name": "Oubritenga Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3144,
        "name": "Oudalan Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3117,
        "name": "Passoré Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3125,
        "name": "Plateau-Central Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3163,
        "name": "Poni Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3114,
        "name": "Sahel Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3154,
        "name": "Sanguié Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3126,
        "name": "Sanmatenga Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3139,
        "name": "Séno Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3119,
        "name": "Sissili Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3166,
        "name": "Soum Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3137,
        "name": "Sourou Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3140,
        "name": "Sud-Ouest Region",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3128,
        "name": "Tapoa Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3134,
        "name": "Tuy Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3124,
        "name": "Yagha Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3150,
        "name": "Yatenga Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3145,
        "name": "Ziro Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3130,
        "name": "Zondoma Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3118,
        "name": "Zoundwéogo Province",
        "country_name": "Burkina Faso"
    },
    {
        "id": 3196,
        "name": "Bubanza Province",
        "country_name": "Burundi"
    },
    {
        "id": 3198,
        "name": "Bujumbura Mairie Province",
        "country_name": "Burundi"
    },
    {
        "id": 3200,
        "name": "Bujumbura Rural Province",
        "country_name": "Burundi"
    },
    {
        "id": 3202,
        "name": "Bururi Province",
        "country_name": "Burundi"
    },
    {
        "id": 3201,
        "name": "Cankuzo Province",
        "country_name": "Burundi"
    },
    {
        "id": 3190,
        "name": "Cibitoke Province",
        "country_name": "Burundi"
    },
    {
        "id": 3197,
        "name": "Gitega Province",
        "country_name": "Burundi"
    },
    {
        "id": 3194,
        "name": "Karuzi Province",
        "country_name": "Burundi"
    },
    {
        "id": 3192,
        "name": "Kayanza Province",
        "country_name": "Burundi"
    },
    {
        "id": 3195,
        "name": "Kirundo Province",
        "country_name": "Burundi"
    },
    {
        "id": 3188,
        "name": "Makamba Province",
        "country_name": "Burundi"
    },
    {
        "id": 3193,
        "name": "Muramvya Province",
        "country_name": "Burundi"
    },
    {
        "id": 3186,
        "name": "Muyinga Province",
        "country_name": "Burundi"
    },
    {
        "id": 3187,
        "name": "Mwaro Province",
        "country_name": "Burundi"
    },
    {
        "id": 3199,
        "name": "Ngozi Province",
        "country_name": "Burundi"
    },
    {
        "id": 3185,
        "name": "Rumonge Province",
        "country_name": "Burundi"
    },
    {
        "id": 3189,
        "name": "Rutana Province",
        "country_name": "Burundi"
    },
    {
        "id": 3191,
        "name": "Ruyigi Province",
        "country_name": "Burundi"
    },
    {
        "id": 3984,
        "name": "Banteay Meanchey",
        "country_name": "Cambodia"
    },
    {
        "id": 3976,
        "name": "Battambang",
        "country_name": "Cambodia"
    },
    {
        "id": 3991,
        "name": "Kampong Cham",
        "country_name": "Cambodia"
    },
    {
        "id": 3979,
        "name": "Kampong Chhnang",
        "country_name": "Cambodia"
    },
    {
        "id": 3988,
        "name": "Kampong Speu",
        "country_name": "Cambodia"
    },
    {
        "id": 5070,
        "name": "Kampong Thom",
        "country_name": "Cambodia"
    },
    {
        "id": 3981,
        "name": "Kampot",
        "country_name": "Cambodia"
    },
    {
        "id": 3983,
        "name": "Kandal",
        "country_name": "Cambodia"
    },
    {
        "id": 3978,
        "name": "Kep",
        "country_name": "Cambodia"
    },
    {
        "id": 3982,
        "name": "Koh Kong",
        "country_name": "Cambodia"
    },
    {
        "id": 3986,
        "name": "Kratie",
        "country_name": "Cambodia"
    },
    {
        "id": 3985,
        "name": "Mondulkiri",
        "country_name": "Cambodia"
    },
    {
        "id": 3987,
        "name": "Oddar Meanchey",
        "country_name": "Cambodia"
    },
    {
        "id": 3980,
        "name": "Pailin",
        "country_name": "Cambodia"
    },
    {
        "id": 3994,
        "name": "Phnom Penh",
        "country_name": "Cambodia"
    },
    {
        "id": 3973,
        "name": "Preah Vihear",
        "country_name": "Cambodia"
    },
    {
        "id": 3974,
        "name": "Prey Veng",
        "country_name": "Cambodia"
    },
    {
        "id": 3977,
        "name": "Pursat",
        "country_name": "Cambodia"
    },
    {
        "id": 3990,
        "name": "Ratanakiri",
        "country_name": "Cambodia"
    },
    {
        "id": 3992,
        "name": "Siem Reap",
        "country_name": "Cambodia"
    },
    {
        "id": 3989,
        "name": "Sihanoukville",
        "country_name": "Cambodia"
    },
    {
        "id": 3993,
        "name": "Stung Treng",
        "country_name": "Cambodia"
    },
    {
        "id": 3972,
        "name": "Svay Rieng",
        "country_name": "Cambodia"
    },
    {
        "id": 3975,
        "name": "Takeo",
        "country_name": "Cambodia"
    },
    {
        "id": 2663,
        "name": "Adamawa",
        "country_name": "Cameroon"
    },
    {
        "id": 2660,
        "name": "Centre",
        "country_name": "Cameroon"
    },
    {
        "id": 2661,
        "name": "East",
        "country_name": "Cameroon"
    },
    {
        "id": 2656,
        "name": "Far North",
        "country_name": "Cameroon"
    },
    {
        "id": 2662,
        "name": "Littoral",
        "country_name": "Cameroon"
    },
    {
        "id": 2665,
        "name": "North",
        "country_name": "Cameroon"
    },
    {
        "id": 2657,
        "name": "Northwest",
        "country_name": "Cameroon"
    },
    {
        "id": 2659,
        "name": "South",
        "country_name": "Cameroon"
    },
    {
        "id": 2658,
        "name": "Southwest",
        "country_name": "Cameroon"
    },
    {
        "id": 2664,
        "name": "West",
        "country_name": "Cameroon"
    },
    {
        "id": 872,
        "name": "Alberta",
        "country_name": "Canada"
    },
    {
        "id": 875,
        "name": "British Columbia",
        "country_name": "Canada"
    },
    {
        "id": 867,
        "name": "Manitoba",
        "country_name": "Canada"
    },
    {
        "id": 868,
        "name": "New Brunswick",
        "country_name": "Canada"
    },
    {
        "id": 877,
        "name": "Newfoundland and Labrador",
        "country_name": "Canada"
    },
    {
        "id": 878,
        "name": "Northwest Territories",
        "country_name": "Canada"
    },
    {
        "id": 874,
        "name": "Nova Scotia",
        "country_name": "Canada"
    },
    {
        "id": 876,
        "name": "Nunavut",
        "country_name": "Canada"
    },
    {
        "id": 866,
        "name": "Ontario",
        "country_name": "Canada"
    },
    {
        "id": 871,
        "name": "Prince Edward Island",
        "country_name": "Canada"
    },
    {
        "id": 873,
        "name": "Quebec",
        "country_name": "Canada"
    },
    {
        "id": 870,
        "name": "Saskatchewan",
        "country_name": "Canada"
    },
    {
        "id": 869,
        "name": "Yukon",
        "country_name": "Canada"
    },
    {
        "id": 2994,
        "name": "Barlavento Islands",
        "country_name": "Cape Verde"
    },
    {
        "id": 2999,
        "name": "Boa Vista",
        "country_name": "Cape Verde"
    },
    {
        "id": 2996,
        "name": "Brava",
        "country_name": "Cape Verde"
    },
    {
        "id": 2991,
        "name": "Maio Municipality",
        "country_name": "Cape Verde"
    },
    {
        "id": 2987,
        "name": "Mosteiros",
        "country_name": "Cape Verde"
    },
    {
        "id": 2997,
        "name": "Paul",
        "country_name": "Cape Verde"
    },
    {
        "id": 2989,
        "name": "Porto Novo",
        "country_name": "Cape Verde"
    },
    {
        "id": 2988,
        "name": "Praia",
        "country_name": "Cape Verde"
    },
    {
        "id": 2982,
        "name": "Ribeira Brava Municipality",
        "country_name": "Cape Verde"
    },
    {
        "id": 3002,
        "name": "Ribeira Grande",
        "country_name": "Cape Verde"
    },
    {
        "id": 2984,
        "name": "Ribeira Grande de Santiago",
        "country_name": "Cape Verde"
    },
    {
        "id": 2998,
        "name": "Sal",
        "country_name": "Cape Verde"
    },
    {
        "id": 2985,
        "name": "Santa Catarina",
        "country_name": "Cape Verde"
    },
    {
        "id": 2995,
        "name": "Santa Catarina do Fogo",
        "country_name": "Cape Verde"
    },
    {
        "id": 3004,
        "name": "Santa Cruz",
        "country_name": "Cape Verde"
    },
    {
        "id": 2986,
        "name": "São Domingos",
        "country_name": "Cape Verde"
    },
    {
        "id": 3000,
        "name": "São Filipe",
        "country_name": "Cape Verde"
    },
    {
        "id": 2993,
        "name": "São Lourenço dos Órgãos",
        "country_name": "Cape Verde"
    },
    {
        "id": 2990,
        "name": "São Miguel",
        "country_name": "Cape Verde"
    },
    {
        "id": 3001,
        "name": "São Vicente",
        "country_name": "Cape Verde"
    },
    {
        "id": 2992,
        "name": "Sotavento Islands",
        "country_name": "Cape Verde"
    },
    {
        "id": 2983,
        "name": "Tarrafal",
        "country_name": "Cape Verde"
    },
    {
        "id": 3003,
        "name": "Tarrafal de São Nicolau",
        "country_name": "Cape Verde"
    },
    {
        "id": 1259,
        "name": "Bamingui-Bangoran Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1262,
        "name": "Bangui",
        "country_name": "Central African Republic"
    },
    {
        "id": 1264,
        "name": "Basse-Kotto Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1258,
        "name": "Haut-Mbomou Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1268,
        "name": "Haute-Kotto Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1263,
        "name": "Kémo Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1256,
        "name": "Lobaye Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1257,
        "name": "Mambéré-Kadéï",
        "country_name": "Central African Republic"
    },
    {
        "id": 1266,
        "name": "Mbomou Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1253,
        "name": "Nana-Grébizi Economic Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1260,
        "name": "Nana-Mambéré Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1255,
        "name": "Ombella-M'Poko Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1265,
        "name": "Ouaka Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1254,
        "name": "Ouham Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1267,
        "name": "Ouham-Pendé Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 1252,
        "name": "Sangha-Mbaéré",
        "country_name": "Central African Republic"
    },
    {
        "id": 1261,
        "name": "Vakaga Prefecture",
        "country_name": "Central African Republic"
    },
    {
        "id": 3583,
        "name": "Bahr el Gazel",
        "country_name": "Chad"
    },
    {
        "id": 3590,
        "name": "Batha Region",
        "country_name": "Chad"
    },
    {
        "id": 3574,
        "name": "Borkou",
        "country_name": "Chad"
    },
    {
        "id": 3578,
        "name": "Ennedi Region",
        "country_name": "Chad"
    },
    {
        "id": 3575,
        "name": "Ennedi-Est",
        "country_name": "Chad"
    },
    {
        "id": 3584,
        "name": "Ennedi-Ouest",
        "country_name": "Chad"
    },
    {
        "id": 3576,
        "name": "Guéra Region",
        "country_name": "Chad"
    },
    {
        "id": 3573,
        "name": "Hadjer-Lamis",
        "country_name": "Chad"
    },
    {
        "id": 3588,
        "name": "Kanem Region",
        "country_name": "Chad"
    },
    {
        "id": 3577,
        "name": "Lac Region",
        "country_name": "Chad"
    },
    {
        "id": 3585,
        "name": "Logone Occidental Region",
        "country_name": "Chad"
    },
    {
        "id": 3591,
        "name": "Logone Oriental Region",
        "country_name": "Chad"
    },
    {
        "id": 3589,
        "name": "Mandoul Region",
        "country_name": "Chad"
    },
    {
        "id": 3580,
        "name": "Mayo-Kebbi Est Region",
        "country_name": "Chad"
    },
    {
        "id": 3571,
        "name": "Mayo-Kebbi Ouest Region",
        "country_name": "Chad"
    },
    {
        "id": 3570,
        "name": "Moyen-Chari Region",
        "country_name": "Chad"
    },
    {
        "id": 3586,
        "name": "N'Djamena",
        "country_name": "Chad"
    },
    {
        "id": 3582,
        "name": "Ouaddaï Region",
        "country_name": "Chad"
    },
    {
        "id": 3592,
        "name": "Salamat Region",
        "country_name": "Chad"
    },
    {
        "id": 3572,
        "name": "Sila Region",
        "country_name": "Chad"
    },
    {
        "id": 3579,
        "name": "Tandjilé Region",
        "country_name": "Chad"
    },
    {
        "id": 3587,
        "name": "Tibesti Region",
        "country_name": "Chad"
    },
    {
        "id": 3581,
        "name": "Wadi Fira Region",
        "country_name": "Chad"
    },
    {
        "id": 2828,
        "name": "Aisén del General Carlos Ibañez del Campo",
        "country_name": "Chile"
    },
    {
        "id": 2832,
        "name": "Antofagasta",
        "country_name": "Chile"
    },
    {
        "id": 2829,
        "name": "Arica y Parinacota",
        "country_name": "Chile"
    },
    {
        "id": 2823,
        "name": "Atacama",
        "country_name": "Chile"
    },
    {
        "id": 2827,
        "name": "Biobío",
        "country_name": "Chile"
    },
    {
        "id": 2825,
        "name": "Coquimbo",
        "country_name": "Chile"
    },
    {
        "id": 2826,
        "name": "La Araucanía",
        "country_name": "Chile"
    },
    {
        "id": 2838,
        "name": "Libertador General Bernardo O'Higgins",
        "country_name": "Chile"
    },
    {
        "id": 2835,
        "name": "Los Lagos",
        "country_name": "Chile"
    },
    {
        "id": 2834,
        "name": "Los Ríos",
        "country_name": "Chile"
    },
    {
        "id": 2836,
        "name": "Magallanes y de la Antártica Chilena",
        "country_name": "Chile"
    },
    {
        "id": 2833,
        "name": "Maule",
        "country_name": "Chile"
    },
    {
        "id": 2831,
        "name": "Ñuble",
        "country_name": "Chile"
    },
    {
        "id": 2824,
        "name": "Región Metropolitana de Santiago",
        "country_name": "Chile"
    },
    {
        "id": 2837,
        "name": "Tarapacá",
        "country_name": "Chile"
    },
    {
        "id": 2830,
        "name": "Valparaíso",
        "country_name": "Chile"
    },
    {
        "id": 2251,
        "name": "Anhui",
        "country_name": "China"
    },
    {
        "id": 2257,
        "name": "Beijing",
        "country_name": "China"
    },
    {
        "id": 2271,
        "name": "Chongqing",
        "country_name": "China"
    },
    {
        "id": 2248,
        "name": "Fujian",
        "country_name": "China"
    },
    {
        "id": 2275,
        "name": "Gansu",
        "country_name": "China"
    },
    {
        "id": 2279,
        "name": "Guangdong",
        "country_name": "China"
    },
    {
        "id": 2278,
        "name": "Guangxi Zhuang",
        "country_name": "China"
    },
    {
        "id": 2261,
        "name": "Guizhou",
        "country_name": "China"
    },
    {
        "id": 2273,
        "name": "Hainan",
        "country_name": "China"
    },
    {
        "id": 2280,
        "name": "Hebei",
        "country_name": "China"
    },
    {
        "id": 2265,
        "name": "Heilongjiang",
        "country_name": "China"
    },
    {
        "id": 2259,
        "name": "Henan",
        "country_name": "China"
    },
    {
        "id": 2267,
        "name": "Hong Kong SAR",
        "country_name": "China"
    },
    {
        "id": 2274,
        "name": "Hubei",
        "country_name": "China"
    },
    {
        "id": 2258,
        "name": "Hunan",
        "country_name": "China"
    },
    {
        "id": 2269,
        "name": "Inner Mongolia",
        "country_name": "China"
    },
    {
        "id": 2250,
        "name": "Jiangsu",
        "country_name": "China"
    },
    {
        "id": 2256,
        "name": "Jiangxi",
        "country_name": "China"
    },
    {
        "id": 2253,
        "name": "Jilin",
        "country_name": "China"
    },
    {
        "id": 2268,
        "name": "Liaoning",
        "country_name": "China"
    },
    {
        "id": 2266,
        "name": "Macau SAR",
        "country_name": "China"
    },
    {
        "id": 2262,
        "name": "Ningxia Huizu",
        "country_name": "China"
    },
    {
        "id": 2270,
        "name": "Qinghai",
        "country_name": "China"
    },
    {
        "id": 2272,
        "name": "Shaanxi",
        "country_name": "China"
    },
    {
        "id": 2252,
        "name": "Shandong",
        "country_name": "China"
    },
    {
        "id": 2249,
        "name": "Shanghai",
        "country_name": "China"
    },
    {
        "id": 2254,
        "name": "Shanxi",
        "country_name": "China"
    },
    {
        "id": 2277,
        "name": "Sichuan",
        "country_name": "China"
    },
    {
        "id": 2255,
        "name": "Taiwan",
        "country_name": "China"
    },
    {
        "id": 2276,
        "name": "Tianjin",
        "country_name": "China"
    },
    {
        "id": 2263,
        "name": "Xinjiang",
        "country_name": "China"
    },
    {
        "id": 2264,
        "name": "Xizang",
        "country_name": "China"
    },
    {
        "id": 2260,
        "name": "Yunnan",
        "country_name": "China"
    },
    {
        "id": 2247,
        "name": "Zhejiang",
        "country_name": "China"
    },
    {
        "id": 2895,
        "name": "Amazonas",
        "country_name": "Colombia"
    },
    {
        "id": 2890,
        "name": "Antioquia",
        "country_name": "Colombia"
    },
    {
        "id": 2881,
        "name": "Arauca",
        "country_name": "Colombia"
    },
    {
        "id": 2900,
        "name": "Archipiélago de San Andrés, Providencia y Santa Catalina",
        "country_name": "Colombia"
    },
    {
        "id": 2880,
        "name": "Atlántico",
        "country_name": "Colombia"
    },
    {
        "id": 4921,
        "name": "Bogotá D.C.",
        "country_name": "Colombia"
    },
    {
        "id": 2893,
        "name": "Bolívar",
        "country_name": "Colombia"
    },
    {
        "id": 2903,
        "name": "Boyacá",
        "country_name": "Colombia"
    },
    {
        "id": 2887,
        "name": "Caldas",
        "country_name": "Colombia"
    },
    {
        "id": 2891,
        "name": "Caquetá",
        "country_name": "Colombia"
    },
    {
        "id": 2892,
        "name": "Casanare",
        "country_name": "Colombia"
    },
    {
        "id": 2884,
        "name": "Cauca",
        "country_name": "Colombia"
    },
    {
        "id": 2899,
        "name": "Cesar",
        "country_name": "Colombia"
    },
    {
        "id": 2876,
        "name": "Chocó",
        "country_name": "Colombia"
    },
    {
        "id": 2898,
        "name": "Córdoba",
        "country_name": "Colombia"
    },
    {
        "id": 2875,
        "name": "Cundinamarca",
        "country_name": "Colombia"
    },
    {
        "id": 2882,
        "name": "Guainía",
        "country_name": "Colombia"
    },
    {
        "id": 2888,
        "name": "Guaviare",
        "country_name": "Colombia"
    },
    {
        "id": 4871,
        "name": "Huila",
        "country_name": "Colombia"
    },
    {
        "id": 2889,
        "name": "La Guajira",
        "country_name": "Colombia"
    },
    {
        "id": 2886,
        "name": "Magdalena",
        "country_name": "Colombia"
    },
    {
        "id": 2878,
        "name": "Meta",
        "country_name": "Colombia"
    },
    {
        "id": 2897,
        "name": "Nariño",
        "country_name": "Colombia"
    },
    {
        "id": 2877,
        "name": "Norte de Santander",
        "country_name": "Colombia"
    },
    {
        "id": 2896,
        "name": "Putumayo",
        "country_name": "Colombia"
    },
    {
        "id": 2874,
        "name": "Quindío",
        "country_name": "Colombia"
    },
    {
        "id": 2879,
        "name": "Risaralda",
        "country_name": "Colombia"
    },
    {
        "id": 2901,
        "name": "Santander",
        "country_name": "Colombia"
    },
    {
        "id": 2902,
        "name": "Sucre",
        "country_name": "Colombia"
    },
    {
        "id": 2883,
        "name": "Tolima",
        "country_name": "Colombia"
    },
    {
        "id": 2904,
        "name": "Valle del Cauca",
        "country_name": "Colombia"
    },
    {
        "id": 2885,
        "name": "Vaupés",
        "country_name": "Colombia"
    },
    {
        "id": 2894,
        "name": "Vichada",
        "country_name": "Colombia"
    },
    {
        "id": 2821,
        "name": "Anjouan",
        "country_name": "Comoros"
    },
    {
        "id": 2822,
        "name": "Grande Comore",
        "country_name": "Comoros"
    },
    {
        "id": 2820,
        "name": "Mohéli",
        "country_name": "Comoros"
    },
    {
        "id": 2866,
        "name": "Bouenza Department",
        "country_name": "Congo"
    },
    {
        "id": 2870,
        "name": "Brazzaville",
        "country_name": "Congo"
    },
    {
        "id": 2864,
        "name": "Cuvette Department",
        "country_name": "Congo"
    },
    {
        "id": 2869,
        "name": "Cuvette-Ouest Department",
        "country_name": "Congo"
    },
    {
        "id": 2867,
        "name": "Kouilou Department",
        "country_name": "Congo"
    },
    {
        "id": 2868,
        "name": "Lékoumou Department",
        "country_name": "Congo"
    },
    {
        "id": 2865,
        "name": "Likouala Department",
        "country_name": "Congo"
    },
    {
        "id": 2872,
        "name": "Niari Department",
        "country_name": "Congo"
    },
    {
        "id": 2862,
        "name": "Plateaux Department",
        "country_name": "Congo"
    },
    {
        "id": 2863,
        "name": "Pointe-Noire",
        "country_name": "Congo"
    },
    {
        "id": 2873,
        "name": "Pool Department",
        "country_name": "Congo"
    },
    {
        "id": 2871,
        "name": "Sangha Department",
        "country_name": "Congo"
    },
    {
        "id": 1215,
        "name": "Alajuela Province",
        "country_name": "Costa Rica"
    },
    {
        "id": 1209,
        "name": "Guanacaste Province",
        "country_name": "Costa Rica"
    },
    {
        "id": 1212,
        "name": "Heredia Province",
        "country_name": "Costa Rica"
    },
    {
        "id": 1213,
        "name": "Limón Province",
        "country_name": "Costa Rica"
    },
    {
        "id": 1211,
        "name": "Provincia de Cartago",
        "country_name": "Costa Rica"
    },
    {
        "id": 1210,
        "name": "Puntarenas Province",
        "country_name": "Costa Rica"
    },
    {
        "id": 1214,
        "name": "San José Province",
        "country_name": "Costa Rica"
    },
    {
        "id": 2634,
        "name": "Abidjan",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2626,
        "name": "Agnéby",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2636,
        "name": "Bafing Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2643,
        "name": "Bas-Sassandra District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2635,
        "name": "Bas-Sassandra Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2654,
        "name": "Comoé District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2644,
        "name": "Denguélé District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2642,
        "name": "Denguélé Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2645,
        "name": "Dix-Huit Montagnes",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2633,
        "name": "Fromager",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2651,
        "name": "Gôh-Djiboua District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2638,
        "name": "Haut-Sassandra",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2632,
        "name": "Lacs District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2640,
        "name": "Lacs Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2627,
        "name": "Lagunes District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2639,
        "name": "Lagunes region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2631,
        "name": "Marahoué Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2629,
        "name": "Montagnes District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2646,
        "name": "Moyen-Cavally",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2630,
        "name": "Moyen-Comoé",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2655,
        "name": "N'zi-Comoé",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2648,
        "name": "Sassandra-Marahoué District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2625,
        "name": "Savanes Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2628,
        "name": "Sud-Bandama",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2652,
        "name": "Sud-Comoé",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2637,
        "name": "Vallée du Bandama District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2647,
        "name": "Vallée du Bandama Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2650,
        "name": "Woroba District",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2649,
        "name": "Worodougou",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2653,
        "name": "Yamoussoukro",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 2641,
        "name": "Zanzan Region",
        "country_name": "Cote D'Ivoire (Ivory Coast)"
    },
    {
        "id": 734,
        "name": "Bjelovar-Bilogora",
        "country_name": "Croatia"
    },
    {
        "id": 737,
        "name": "Brod-Posavina",
        "country_name": "Croatia"
    },
    {
        "id": 728,
        "name": "Dubrovnik-Neretva",
        "country_name": "Croatia"
    },
    {
        "id": 743,
        "name": "Istria",
        "country_name": "Croatia"
    },
    {
        "id": 5069,
        "name": "Karlovac",
        "country_name": "Croatia"
    },
    {
        "id": 742,
        "name": "Koprivnica-Križevci",
        "country_name": "Croatia"
    },
    {
        "id": 729,
        "name": "Krapina-Zagorje",
        "country_name": "Croatia"
    },
    {
        "id": 731,
        "name": "Lika-Senj",
        "country_name": "Croatia"
    },
    {
        "id": 726,
        "name": "Međimurje",
        "country_name": "Croatia"
    },
    {
        "id": 740,
        "name": "Osijek-Baranja",
        "country_name": "Croatia"
    },
    {
        "id": 724,
        "name": "Požega-Slavonia",
        "country_name": "Croatia"
    },
    {
        "id": 735,
        "name": "Primorje-Gorski Kotar",
        "country_name": "Croatia"
    },
    {
        "id": 730,
        "name": "Šibenik-Knin",
        "country_name": "Croatia"
    },
    {
        "id": 733,
        "name": "Sisak-Moslavina",
        "country_name": "Croatia"
    },
    {
        "id": 725,
        "name": "Split-Dalmatia",
        "country_name": "Croatia"
    },
    {
        "id": 739,
        "name": "Varaždin",
        "country_name": "Croatia"
    },
    {
        "id": 732,
        "name": "Virovitica-Podravina",
        "country_name": "Croatia"
    },
    {
        "id": 741,
        "name": "Vukovar-Syrmia",
        "country_name": "Croatia"
    },
    {
        "id": 727,
        "name": "Zadar",
        "country_name": "Croatia"
    },
    {
        "id": 736,
        "name": "Zagreb",
        "country_name": "Croatia"
    },
    {
        "id": 738,
        "name": "Zagreb",
        "country_name": "Croatia"
    },
    {
        "id": 283,
        "name": "Artemisa Province",
        "country_name": "Cuba"
    },
    {
        "id": 286,
        "name": "Camagüey Province",
        "country_name": "Cuba"
    },
    {
        "id": 282,
        "name": "Ciego de Ávila Province",
        "country_name": "Cuba"
    },
    {
        "id": 287,
        "name": "Cienfuegos Province",
        "country_name": "Cuba"
    },
    {
        "id": 275,
        "name": "Granma Province",
        "country_name": "Cuba"
    },
    {
        "id": 285,
        "name": "Guantánamo Province",
        "country_name": "Cuba"
    },
    {
        "id": 272,
        "name": "Havana Province",
        "country_name": "Cuba"
    },
    {
        "id": 279,
        "name": "Holguín Province",
        "country_name": "Cuba"
    },
    {
        "id": 278,
        "name": "Isla de la Juventud",
        "country_name": "Cuba"
    },
    {
        "id": 281,
        "name": "Las Tunas Province",
        "country_name": "Cuba"
    },
    {
        "id": 284,
        "name": "Matanzas Province",
        "country_name": "Cuba"
    },
    {
        "id": 276,
        "name": "Mayabeque Province",
        "country_name": "Cuba"
    },
    {
        "id": 277,
        "name": "Pinar del Río Province",
        "country_name": "Cuba"
    },
    {
        "id": 274,
        "name": "Sancti Spíritus Province",
        "country_name": "Cuba"
    },
    {
        "id": 273,
        "name": "Santiago de Cuba Province",
        "country_name": "Cuba"
    },
    {
        "id": 280,
        "name": "Villa Clara Province",
        "country_name": "Cuba"
    },
    {
        "id": 749,
        "name": "Famagusta District (Mağusa)",
        "country_name": "Cyprus"
    },
    {
        "id": 744,
        "name": "Kyrenia District (Keryneia)",
        "country_name": "Cyprus"
    },
    {
        "id": 747,
        "name": "Larnaca District (Larnaka)",
        "country_name": "Cyprus"
    },
    {
        "id": 748,
        "name": "Limassol District (Leymasun)",
        "country_name": "Cyprus"
    },
    {
        "id": 745,
        "name": "Nicosia District (Lefkoşa)",
        "country_name": "Cyprus"
    },
    {
        "id": 746,
        "name": "Paphos District (Pafos)",
        "country_name": "Cyprus"
    },
    {
        "id": 4627,
        "name": "Benešov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4620,
        "name": "Beroun",
        "country_name": "Czech Republic"
    },
    {
        "id": 4615,
        "name": "Blansko",
        "country_name": "Czech Republic"
    },
    {
        "id": 4542,
        "name": "Břeclav",
        "country_name": "Czech Republic"
    },
    {
        "id": 4568,
        "name": "Brno-město",
        "country_name": "Czech Republic"
    },
    {
        "id": 4545,
        "name": "Brno-venkov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4644,
        "name": "Bruntál",
        "country_name": "Czech Republic"
    },
    {
        "id": 4633,
        "name": "Česká Lípa",
        "country_name": "Czech Republic"
    },
    {
        "id": 4556,
        "name": "České Budějovice",
        "country_name": "Czech Republic"
    },
    {
        "id": 4543,
        "name": "Český Krumlov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4573,
        "name": "Cheb",
        "country_name": "Czech Republic"
    },
    {
        "id": 4553,
        "name": "Chomutov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4634,
        "name": "Chrudim",
        "country_name": "Czech Republic"
    },
    {
        "id": 4609,
        "name": "Děčín",
        "country_name": "Czech Republic"
    },
    {
        "id": 4641,
        "name": "Domažlice",
        "country_name": "Czech Republic"
    },
    {
        "id": 4559,
        "name": "Frýdek-Místek",
        "country_name": "Czech Republic"
    },
    {
        "id": 4611,
        "name": "Havlíčkův Brod",
        "country_name": "Czech Republic"
    },
    {
        "id": 4561,
        "name": "Hodonín",
        "country_name": "Czech Republic"
    },
    {
        "id": 4580,
        "name": "Hradec Králové",
        "country_name": "Czech Republic"
    },
    {
        "id": 4612,
        "name": "Jablonec nad Nisou",
        "country_name": "Czech Republic"
    },
    {
        "id": 4625,
        "name": "Jeseník",
        "country_name": "Czech Republic"
    },
    {
        "id": 4640,
        "name": "Jičín",
        "country_name": "Czech Republic"
    },
    {
        "id": 4613,
        "name": "Jihlava",
        "country_name": "Czech Republic"
    },
    {
        "id": 4639,
        "name": "Jihočeský kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4602,
        "name": "Jihomoravský kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4624,
        "name": "Jindřichův Hradec",
        "country_name": "Czech Republic"
    },
    {
        "id": 4581,
        "name": "Karlovarský kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4604,
        "name": "Karlovy Vary",
        "country_name": "Czech Republic"
    },
    {
        "id": 4586,
        "name": "Karviná",
        "country_name": "Czech Republic"
    },
    {
        "id": 4631,
        "name": "Kladno",
        "country_name": "Czech Republic"
    },
    {
        "id": 4591,
        "name": "Klatovy",
        "country_name": "Czech Republic"
    },
    {
        "id": 4618,
        "name": "Kolín",
        "country_name": "Czech Republic"
    },
    {
        "id": 4575,
        "name": "Kraj Vysočina",
        "country_name": "Czech Republic"
    },
    {
        "id": 4614,
        "name": "Královéhradecký kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4593,
        "name": "Kroměříž",
        "country_name": "Czech Republic"
    },
    {
        "id": 4923,
        "name": "Kutná Hora",
        "country_name": "Czech Republic"
    },
    {
        "id": 4590,
        "name": "Liberec",
        "country_name": "Czech Republic"
    },
    {
        "id": 4601,
        "name": "Liberecký kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4605,
        "name": "Litoměřice",
        "country_name": "Czech Republic"
    },
    {
        "id": 4617,
        "name": "Louny",
        "country_name": "Czech Republic"
    },
    {
        "id": 4638,
        "name": "Mělník",
        "country_name": "Czech Republic"
    },
    {
        "id": 4643,
        "name": "Mladá Boleslav",
        "country_name": "Czech Republic"
    },
    {
        "id": 4600,
        "name": "Moravskoslezský kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4629,
        "name": "Most",
        "country_name": "Czech Republic"
    },
    {
        "id": 4550,
        "name": "Náchod",
        "country_name": "Czech Republic"
    },
    {
        "id": 4548,
        "name": "Nový Jičín",
        "country_name": "Czech Republic"
    },
    {
        "id": 4582,
        "name": "Nymburk",
        "country_name": "Czech Republic"
    },
    {
        "id": 4574,
        "name": "Olomouc",
        "country_name": "Czech Republic"
    },
    {
        "id": 4589,
        "name": "Olomoucký kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4623,
        "name": "Opava",
        "country_name": "Czech Republic"
    },
    {
        "id": 4584,
        "name": "Ostrava-město",
        "country_name": "Czech Republic"
    },
    {
        "id": 4547,
        "name": "Pardubice",
        "country_name": "Czech Republic"
    },
    {
        "id": 4588,
        "name": "Pardubický kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4645,
        "name": "Pelhřimov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4560,
        "name": "Písek",
        "country_name": "Czech Republic"
    },
    {
        "id": 4608,
        "name": "Plzeň-jih",
        "country_name": "Czech Republic"
    },
    {
        "id": 4544,
        "name": "Plzeň-město",
        "country_name": "Czech Republic"
    },
    {
        "id": 4564,
        "name": "Plzeň-sever",
        "country_name": "Czech Republic"
    },
    {
        "id": 4607,
        "name": "Plzeňský kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4578,
        "name": "Prachatice",
        "country_name": "Czech Republic"
    },
    {
        "id": 4606,
        "name": "Praha-východ",
        "country_name": "Czech Republic"
    },
    {
        "id": 4619,
        "name": "Praha-západ",
        "country_name": "Czech Republic"
    },
    {
        "id": 4598,
        "name": "Praha, Hlavní město",
        "country_name": "Czech Republic"
    },
    {
        "id": 4626,
        "name": "Přerov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4546,
        "name": "Příbram",
        "country_name": "Czech Republic"
    },
    {
        "id": 4551,
        "name": "Prostějov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4558,
        "name": "Rakovník",
        "country_name": "Czech Republic"
    },
    {
        "id": 4583,
        "name": "Rokycany",
        "country_name": "Czech Republic"
    },
    {
        "id": 4636,
        "name": "Rychnov nad Kněžnou",
        "country_name": "Czech Republic"
    },
    {
        "id": 4596,
        "name": "Semily",
        "country_name": "Czech Republic"
    },
    {
        "id": 4595,
        "name": "Sokolov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4628,
        "name": "Strakonice",
        "country_name": "Czech Republic"
    },
    {
        "id": 4554,
        "name": "Středočeský kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4642,
        "name": "Šumperk",
        "country_name": "Czech Republic"
    },
    {
        "id": 4571,
        "name": "Svitavy",
        "country_name": "Czech Republic"
    },
    {
        "id": 4565,
        "name": "Tábor",
        "country_name": "Czech Republic"
    },
    {
        "id": 4646,
        "name": "Tachov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4621,
        "name": "Teplice",
        "country_name": "Czech Republic"
    },
    {
        "id": 4597,
        "name": "Třebíč",
        "country_name": "Czech Republic"
    },
    {
        "id": 4579,
        "name": "Trutnov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4592,
        "name": "Uherské Hradiště",
        "country_name": "Czech Republic"
    },
    {
        "id": 4576,
        "name": "Ústecký kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4599,
        "name": "Ústí nad Labem",
        "country_name": "Czech Republic"
    },
    {
        "id": 4647,
        "name": "Ústí nad Orlicí",
        "country_name": "Czech Republic"
    },
    {
        "id": 4572,
        "name": "Vsetín",
        "country_name": "Czech Republic"
    },
    {
        "id": 4622,
        "name": "Vyškov",
        "country_name": "Czech Republic"
    },
    {
        "id": 4648,
        "name": "Žďár nad Sázavou",
        "country_name": "Czech Republic"
    },
    {
        "id": 4563,
        "name": "Zlín",
        "country_name": "Czech Republic"
    },
    {
        "id": 4552,
        "name": "Zlínský kraj",
        "country_name": "Czech Republic"
    },
    {
        "id": 4630,
        "name": "Znojmo",
        "country_name": "Czech Republic"
    },
    {
        "id": 2753,
        "name": "Bas-Uélé",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2744,
        "name": "Équateur",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2750,
        "name": "Haut-Katanga",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2758,
        "name": "Haut-Lomami",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2734,
        "name": "Haut-Uélé",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2751,
        "name": "Ituri",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2757,
        "name": "Kasaï",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2742,
        "name": "Kasaï Central",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2735,
        "name": "Kasaï Oriental",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2741,
        "name": "Kinshasa",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2746,
        "name": "Kongo Central",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2740,
        "name": "Kwango",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2759,
        "name": "Kwilu",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2747,
        "name": "Lomami",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 4953,
        "name": "Lualaba",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2755,
        "name": "Mai-Ndombe",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2745,
        "name": "Maniema",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2752,
        "name": "Mongala",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2749,
        "name": "Nord-Kivu",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2739,
        "name": "Nord-Ubangi",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2743,
        "name": "Sankuru",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2738,
        "name": "Sud-Kivu",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2748,
        "name": "Sud-Ubangi",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2733,
        "name": "Tanganyika",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2756,
        "name": "Tshopo",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 2732,
        "name": "Tshuapa",
        "country_name": "Democratic Republic of the Congo"
    },
    {
        "id": 1530,
        "name": "Capital Region of Denmark",
        "country_name": "Denmark"
    },
    {
        "id": 1531,
        "name": "Central Denmark Region",
        "country_name": "Denmark"
    },
    {
        "id": 1532,
        "name": "North Denmark Region",
        "country_name": "Denmark"
    },
    {
        "id": 1529,
        "name": "Region of Southern Denmark",
        "country_name": "Denmark"
    },
    {
        "id": 1528,
        "name": "Region Zealand",
        "country_name": "Denmark"
    },
    {
        "id": 2933,
        "name": "Ali Sabieh Region",
        "country_name": "Djibouti"
    },
    {
        "id": 2932,
        "name": "Arta Region",
        "country_name": "Djibouti"
    },
    {
        "id": 2930,
        "name": "Dikhil Region",
        "country_name": "Djibouti"
    },
    {
        "id": 2929,
        "name": "Djibouti",
        "country_name": "Djibouti"
    },
    {
        "id": 2928,
        "name": "Obock Region",
        "country_name": "Djibouti"
    },
    {
        "id": 2931,
        "name": "Tadjourah Region",
        "country_name": "Djibouti"
    },
    {
        "id": 4082,
        "name": "Saint Andrew Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4078,
        "name": "Saint David Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4079,
        "name": "Saint George Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4076,
        "name": "Saint John Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4085,
        "name": "Saint Joseph Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4083,
        "name": "Saint Luke Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4077,
        "name": "Saint Mark Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4080,
        "name": "Saint Patrick Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4084,
        "name": "Saint Paul Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4081,
        "name": "Saint Peter Parish",
        "country_name": "Dominica"
    },
    {
        "id": 4114,
        "name": "Azua Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4105,
        "name": "Baoruco Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4090,
        "name": "Barahona Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4107,
        "name": "Dajabón Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4095,
        "name": "Distrito Nacional",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4113,
        "name": "Duarte Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4086,
        "name": "El Seibo Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4102,
        "name": "Espaillat Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4106,
        "name": "Hato Mayor Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4089,
        "name": "Hermanas Mirabal Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4097,
        "name": "Independencia",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4109,
        "name": "La Altagracia Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4087,
        "name": "La Romana Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4116,
        "name": "La Vega Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4094,
        "name": "María Trinidad Sánchez Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4099,
        "name": "Monseñor Nouel Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4115,
        "name": "Monte Cristi Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4111,
        "name": "Monte Plata Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4101,
        "name": "Pedernales Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4096,
        "name": "Peravia Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4092,
        "name": "Puerto Plata Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4103,
        "name": "Samaná Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4091,
        "name": "San Cristóbal Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4112,
        "name": "San José de Ocoa Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4098,
        "name": "San Juan Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4110,
        "name": "San Pedro de Macorís",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4088,
        "name": "Sánchez Ramírez Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4108,
        "name": "Santiago Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4100,
        "name": "Santiago Rodríguez Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4093,
        "name": "Santo Domingo Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4104,
        "name": "Valverde Province",
        "country_name": "Dominican Republic"
    },
    {
        "id": 4520,
        "name": "Aileu municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4518,
        "name": "Ainaro Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4521,
        "name": "Baucau Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4525,
        "name": "Bobonaro Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4522,
        "name": "Cova Lima Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4524,
        "name": "Dili municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4516,
        "name": "Ermera District",
        "country_name": "East Timor"
    },
    {
        "id": 4523,
        "name": "Lautém Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4515,
        "name": "Liquiçá Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4517,
        "name": "Manatuto District",
        "country_name": "East Timor"
    },
    {
        "id": 4519,
        "name": "Manufahi Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 4514,
        "name": "Viqueque Municipality",
        "country_name": "East Timor"
    },
    {
        "id": 2923,
        "name": "Azuay",
        "country_name": "Ecuador"
    },
    {
        "id": 2920,
        "name": "Bolívar",
        "country_name": "Ecuador"
    },
    {
        "id": 2917,
        "name": "Cañar",
        "country_name": "Ecuador"
    },
    {
        "id": 2915,
        "name": "Carchi",
        "country_name": "Ecuador"
    },
    {
        "id": 2925,
        "name": "Chimborazo",
        "country_name": "Ecuador"
    },
    {
        "id": 2921,
        "name": "Cotopaxi",
        "country_name": "Ecuador"
    },
    {
        "id": 2924,
        "name": "El Oro",
        "country_name": "Ecuador"
    },
    {
        "id": 2922,
        "name": "Esmeraldas",
        "country_name": "Ecuador"
    },
    {
        "id": 2905,
        "name": "Galápagos",
        "country_name": "Ecuador"
    },
    {
        "id": 2914,
        "name": "Guayas",
        "country_name": "Ecuador"
    },
    {
        "id": 2911,
        "name": "Imbabura",
        "country_name": "Ecuador"
    },
    {
        "id": 5068,
        "name": "Loja",
        "country_name": "Ecuador"
    },
    {
        "id": 2910,
        "name": "Los Ríos",
        "country_name": "Ecuador"
    },
    {
        "id": 2913,
        "name": "Manabí",
        "country_name": "Ecuador"
    },
    {
        "id": 2918,
        "name": "Morona-Santiago",
        "country_name": "Ecuador"
    },
    {
        "id": 2916,
        "name": "Napo",
        "country_name": "Ecuador"
    },
    {
        "id": 2926,
        "name": "Orellana",
        "country_name": "Ecuador"
    },
    {
        "id": 2907,
        "name": "Pastaza",
        "country_name": "Ecuador"
    },
    {
        "id": 2927,
        "name": "Pichincha",
        "country_name": "Ecuador"
    },
    {
        "id": 2912,
        "name": "Santa Elena",
        "country_name": "Ecuador"
    },
    {
        "id": 2919,
        "name": "Santo Domingo de los Tsáchilas",
        "country_name": "Ecuador"
    },
    {
        "id": 2906,
        "name": "Sucumbíos",
        "country_name": "Ecuador"
    },
    {
        "id": 2908,
        "name": "Tungurahua",
        "country_name": "Ecuador"
    },
    {
        "id": 2909,
        "name": "Zamora Chinchipe",
        "country_name": "Ecuador"
    },
    {
        "id": 3235,
        "name": "Alexandria",
        "country_name": "Egypt"
    },
    {
        "id": 3225,
        "name": "Aswan",
        "country_name": "Egypt"
    },
    {
        "id": 3236,
        "name": "Asyut",
        "country_name": "Egypt"
    },
    {
        "id": 3241,
        "name": "Beheira",
        "country_name": "Egypt"
    },
    {
        "id": 3230,
        "name": "Beni Suef",
        "country_name": "Egypt"
    },
    {
        "id": 3223,
        "name": "Cairo",
        "country_name": "Egypt"
    },
    {
        "id": 3245,
        "name": "Dakahlia",
        "country_name": "Egypt"
    },
    {
        "id": 3224,
        "name": "Damietta",
        "country_name": "Egypt"
    },
    {
        "id": 3238,
        "name": "Faiyum",
        "country_name": "Egypt"
    },
    {
        "id": 3234,
        "name": "Gharbia",
        "country_name": "Egypt"
    },
    {
        "id": 3239,
        "name": "Giza",
        "country_name": "Egypt"
    },
    {
        "id": 3244,
        "name": "Ismailia",
        "country_name": "Egypt"
    },
    {
        "id": 3222,
        "name": "Kafr el-Sheikh",
        "country_name": "Egypt"
    },
    {
        "id": 3242,
        "name": "Luxor",
        "country_name": "Egypt"
    },
    {
        "id": 3231,
        "name": "Matrouh",
        "country_name": "Egypt"
    },
    {
        "id": 3243,
        "name": "Minya",
        "country_name": "Egypt"
    },
    {
        "id": 3228,
        "name": "Monufia",
        "country_name": "Egypt"
    },
    {
        "id": 3246,
        "name": "New Valley",
        "country_name": "Egypt"
    },
    {
        "id": 3227,
        "name": "North Sinai",
        "country_name": "Egypt"
    },
    {
        "id": 3229,
        "name": "Port Said",
        "country_name": "Egypt"
    },
    {
        "id": 3232,
        "name": "Qalyubia",
        "country_name": "Egypt"
    },
    {
        "id": 3247,
        "name": "Qena",
        "country_name": "Egypt"
    },
    {
        "id": 3240,
        "name": "Red Sea",
        "country_name": "Egypt"
    },
    {
        "id": 5067,
        "name": "Sharqia",
        "country_name": "Egypt"
    },
    {
        "id": 3226,
        "name": "Sohag",
        "country_name": "Egypt"
    },
    {
        "id": 3237,
        "name": "South Sinai",
        "country_name": "Egypt"
    },
    {
        "id": 3233,
        "name": "Suez",
        "country_name": "Egypt"
    },
    {
        "id": 4139,
        "name": "Ahuachapán Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4132,
        "name": "Cabañas Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4131,
        "name": "Chalatenango Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4137,
        "name": "Cuscatlán Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4134,
        "name": "La Libertad Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4136,
        "name": "La Paz Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4138,
        "name": "La Unión Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4130,
        "name": "Morazán Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4135,
        "name": "San Miguel Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4133,
        "name": "San Salvador Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4127,
        "name": "San Vicente Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4128,
        "name": "Santa Ana Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4140,
        "name": "Sonsonate Department",
        "country_name": "El Salvador"
    },
    {
        "id": 4129,
        "name": "Usulután Department",
        "country_name": "El Salvador"
    },
    {
        "id": 3444,
        "name": "Annobón Province",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3446,
        "name": "Bioko Norte Province",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3443,
        "name": "Bioko Sur Province",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3445,
        "name": "Centro Sur Province",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3442,
        "name": "Insular Region",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3439,
        "name": "Kié-Ntem Province",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3441,
        "name": "Litoral Province",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3438,
        "name": "Río Muni",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3440,
        "name": "Wele-Nzas Province",
        "country_name": "Equatorial Guinea"
    },
    {
        "id": 3425,
        "name": "Anseba Region",
        "country_name": "Eritrea"
    },
    {
        "id": 3427,
        "name": "Debub Region",
        "country_name": "Eritrea"
    },
    {
        "id": 3428,
        "name": "Gash-Barka Region",
        "country_name": "Eritrea"
    },
    {
        "id": 3426,
        "name": "Maekel Region",
        "country_name": "Eritrea"
    },
    {
        "id": 3424,
        "name": "Northern Red Sea Region",
        "country_name": "Eritrea"
    },
    {
        "id": 3429,
        "name": "Southern Red Sea Region",
        "country_name": "Eritrea"
    },
    {
        "id": 3567,
        "name": "Harju County",
        "country_name": "Estonia"
    },
    {
        "id": 3555,
        "name": "Hiiu County",
        "country_name": "Estonia"
    },
    {
        "id": 3569,
        "name": "Ida-Viru County",
        "country_name": "Estonia"
    },
    {
        "id": 3566,
        "name": "Järva County",
        "country_name": "Estonia"
    },
    {
        "id": 3565,
        "name": "Jõgeva County",
        "country_name": "Estonia"
    },
    {
        "id": 3568,
        "name": "Lääne County",
        "country_name": "Estonia"
    },
    {
        "id": 3564,
        "name": "Lääne-Viru County",
        "country_name": "Estonia"
    },
    {
        "id": 3562,
        "name": "Pärnu County",
        "country_name": "Estonia"
    },
    {
        "id": 3563,
        "name": "Põlva County",
        "country_name": "Estonia"
    },
    {
        "id": 3559,
        "name": "Rapla County",
        "country_name": "Estonia"
    },
    {
        "id": 3561,
        "name": "Saare County",
        "country_name": "Estonia"
    },
    {
        "id": 3557,
        "name": "Tartu County",
        "country_name": "Estonia"
    },
    {
        "id": 3558,
        "name": "Valga County",
        "country_name": "Estonia"
    },
    {
        "id": 3556,
        "name": "Viljandi County",
        "country_name": "Estonia"
    },
    {
        "id": 3560,
        "name": "Võru County",
        "country_name": "Estonia"
    },
    {
        "id": 11,
        "name": "Addis Ababa",
        "country_name": "Ethiopia"
    },
    {
        "id": 6,
        "name": "Afar Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 3,
        "name": "Amhara Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 9,
        "name": "Benishangul-Gumuz Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 8,
        "name": "Dire Dawa",
        "country_name": "Ethiopia"
    },
    {
        "id": 10,
        "name": "Gambela Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 7,
        "name": "Harari Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 5,
        "name": "Oromia Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 2,
        "name": "Somali Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 1,
        "name": "Southern Nations, Nationalities, and Peoples' Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 4,
        "name": "Tigray Region",
        "country_name": "Ethiopia"
    },
    {
        "id": 1917,
        "name": "Ba",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1930,
        "name": "Bua",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1924,
        "name": "Cakaudrove",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1929,
        "name": "Central Division",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1932,
        "name": "Eastern Division",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1934,
        "name": "Kadavu",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1933,
        "name": "Lau",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1916,
        "name": "Lomaiviti",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1922,
        "name": "Macuata",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1919,
        "name": "Nadroga-Navosa",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1927,
        "name": "Naitasiri",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1928,
        "name": "Namosi",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1921,
        "name": "Northern Division",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1926,
        "name": "Ra",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1920,
        "name": "Rewa",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1931,
        "name": "Rotuma",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1925,
        "name": "Serua",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1918,
        "name": "Tailevu",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1923,
        "name": "Western Division",
        "country_name": "Fiji Islands"
    },
    {
        "id": 1509,
        "name": "Åland Islands",
        "country_name": "Finland"
    },
    {
        "id": 1511,
        "name": "Central Finland",
        "country_name": "Finland"
    },
    {
        "id": 1494,
        "name": "Central Ostrobothnia",
        "country_name": "Finland"
    },
    {
        "id": 1492,
        "name": "Eastern Finland Province",
        "country_name": "Finland"
    },
    {
        "id": 1507,
        "name": "Finland Proper",
        "country_name": "Finland"
    },
    {
        "id": 1496,
        "name": "Kainuu",
        "country_name": "Finland"
    },
    {
        "id": 1512,
        "name": "Kymenlaakso",
        "country_name": "Finland"
    },
    {
        "id": 1500,
        "name": "Lapland",
        "country_name": "Finland"
    },
    {
        "id": 1504,
        "name": "North Karelia",
        "country_name": "Finland"
    },
    {
        "id": 1505,
        "name": "Northern Ostrobothnia",
        "country_name": "Finland"
    },
    {
        "id": 1503,
        "name": "Northern Savonia",
        "country_name": "Finland"
    },
    {
        "id": 1508,
        "name": "Ostrobothnia",
        "country_name": "Finland"
    },
    {
        "id": 1499,
        "name": "Oulu Province",
        "country_name": "Finland"
    },
    {
        "id": 1502,
        "name": "Päijänne Tavastia",
        "country_name": "Finland"
    },
    {
        "id": 1506,
        "name": "Pirkanmaa",
        "country_name": "Finland"
    },
    {
        "id": 1501,
        "name": "Satakunta",
        "country_name": "Finland"
    },
    {
        "id": 1497,
        "name": "South Karelia",
        "country_name": "Finland"
    },
    {
        "id": 1498,
        "name": "Southern Ostrobothnia",
        "country_name": "Finland"
    },
    {
        "id": 1495,
        "name": "Southern Savonia",
        "country_name": "Finland"
    },
    {
        "id": 1493,
        "name": "Tavastia Proper",
        "country_name": "Finland"
    },
    {
        "id": 1510,
        "name": "Uusimaa",
        "country_name": "Finland"
    },
    {
        "id": 4967,
        "name": "Ain",
        "country_name": "France"
    },
    {
        "id": 4968,
        "name": "Aisne",
        "country_name": "France"
    },
    {
        "id": 4969,
        "name": "Allier",
        "country_name": "France"
    },
    {
        "id": 4970,
        "name": "Alpes-de-Haute-Provence",
        "country_name": "France"
    },
    {
        "id": 4972,
        "name": "Alpes-Maritimes",
        "country_name": "France"
    },
    {
        "id": 4811,
        "name": "Alsace",
        "country_name": "France"
    },
    {
        "id": 4973,
        "name": "Ardèche",
        "country_name": "France"
    },
    {
        "id": 4974,
        "name": "Ardennes",
        "country_name": "France"
    },
    {
        "id": 4975,
        "name": "Ariège",
        "country_name": "France"
    },
    {
        "id": 4976,
        "name": "Aube",
        "country_name": "France"
    },
    {
        "id": 4977,
        "name": "Aude",
        "country_name": "France"
    },
    {
        "id": 4798,
        "name": "Auvergne-Rhône-Alpes",
        "country_name": "France"
    },
    {
        "id": 4978,
        "name": "Aveyron",
        "country_name": "France"
    },
    {
        "id": 5035,
        "name": "Bas-Rhin",
        "country_name": "France"
    },
    {
        "id": 4979,
        "name": "Bouches-du-Rhône",
        "country_name": "France"
    },
    {
        "id": 4825,
        "name": "Bourgogne-Franche-Comté",
        "country_name": "France"
    },
    {
        "id": 4807,
        "name": "Bretagne",
        "country_name": "France"
    },
    {
        "id": 4981,
        "name": "Calvados",
        "country_name": "France"
    },
    {
        "id": 4982,
        "name": "Cantal",
        "country_name": "France"
    },
    {
        "id": 4818,
        "name": "Centre-Val de Loire",
        "country_name": "France"
    },
    {
        "id": 4983,
        "name": "Charente",
        "country_name": "France"
    },
    {
        "id": 4984,
        "name": "Charente-Maritime",
        "country_name": "France"
    },
    {
        "id": 4985,
        "name": "Cher",
        "country_name": "France"
    },
    {
        "id": 5064,
        "name": "Clipperton",
        "country_name": "France"
    },
    {
        "id": 4986,
        "name": "Corrèze",
        "country_name": "France"
    },
    {
        "id": 4806,
        "name": "Corse",
        "country_name": "France"
    },
    {
        "id": 4996,
        "name": "Corse-du-Sud",
        "country_name": "France"
    },
    {
        "id": 4987,
        "name": "Côte-d'Or",
        "country_name": "France"
    },
    {
        "id": 4988,
        "name": "Côtes-d'Armor",
        "country_name": "France"
    },
    {
        "id": 4989,
        "name": "Creuse",
        "country_name": "France"
    },
    {
        "id": 5047,
        "name": "Deux-Sèvres",
        "country_name": "France"
    },
    {
        "id": 4990,
        "name": "Dordogne",
        "country_name": "France"
    },
    {
        "id": 4991,
        "name": "Doubs",
        "country_name": "France"
    },
    {
        "id": 4992,
        "name": "Drôme",
        "country_name": "France"
    },
    {
        "id": 5059,
        "name": "Essonne",
        "country_name": "France"
    },
    {
        "id": 4993,
        "name": "Eure",
        "country_name": "France"
    },
    {
        "id": 4994,
        "name": "Eure-et-Loir",
        "country_name": "France"
    },
    {
        "id": 4995,
        "name": "Finistère",
        "country_name": "France"
    },
    {
        "id": 4822,
        "name": "French Guiana",
        "country_name": "France"
    },
    {
        "id": 4824,
        "name": "French Polynesia",
        "country_name": "France"
    },
    {
        "id": 5065,
        "name": "French Southern and Antarctic Lands",
        "country_name": "France"
    },
    {
        "id": 4998,
        "name": "Gard",
        "country_name": "France"
    },
    {
        "id": 5000,
        "name": "Gers",
        "country_name": "France"
    },
    {
        "id": 5001,
        "name": "Gironde",
        "country_name": "France"
    },
    {
        "id": 4820,
        "name": "Grand-Est",
        "country_name": "France"
    },
    {
        "id": 4829,
        "name": "Guadeloupe",
        "country_name": "France"
    },
    {
        "id": 5036,
        "name": "Haut-Rhin",
        "country_name": "France"
    },
    {
        "id": 4997,
        "name": "Haute-Corse",
        "country_name": "France"
    },
    {
        "id": 4999,
        "name": "Haute-Garonne",
        "country_name": "France"
    },
    {
        "id": 5011,
        "name": "Haute-Loire",
        "country_name": "France"
    },
    {
        "id": 5020,
        "name": "Haute-Marne",
        "country_name": "France"
    },
    {
        "id": 5039,
        "name": "Haute-Saône",
        "country_name": "France"
    },
    {
        "id": 5043,
        "name": "Haute-Savoie",
        "country_name": "France"
    },
    {
        "id": 5055,
        "name": "Haute-Vienne",
        "country_name": "France"
    },
    {
        "id": 4971,
        "name": "Hautes-Alpes",
        "country_name": "France"
    },
    {
        "id": 5033,
        "name": "Hautes-Pyrénées",
        "country_name": "France"
    },
    {
        "id": 4828,
        "name": "Hauts-de-France",
        "country_name": "France"
    },
    {
        "id": 5060,
        "name": "Hauts-de-Seine",
        "country_name": "France"
    },
    {
        "id": 5002,
        "name": "Hérault",
        "country_name": "France"
    },
    {
        "id": 4796,
        "name": "Île-de-France",
        "country_name": "France"
    },
    {
        "id": 5003,
        "name": "Ille-et-Vilaine",
        "country_name": "France"
    },
    {
        "id": 5004,
        "name": "Indre",
        "country_name": "France"
    },
    {
        "id": 5005,
        "name": "Indre-et-Loire",
        "country_name": "France"
    },
    {
        "id": 5006,
        "name": "Isère",
        "country_name": "France"
    },
    {
        "id": 5007,
        "name": "Jura",
        "country_name": "France"
    },
    {
        "id": 4823,
        "name": "La Réunion",
        "country_name": "France"
    },
    {
        "id": 5008,
        "name": "Landes",
        "country_name": "France"
    },
    {
        "id": 5009,
        "name": "Loir-et-Cher",
        "country_name": "France"
    },
    {
        "id": 5010,
        "name": "Loire",
        "country_name": "France"
    },
    {
        "id": 5012,
        "name": "Loire-Atlantique",
        "country_name": "France"
    },
    {
        "id": 5013,
        "name": "Loiret",
        "country_name": "France"
    },
    {
        "id": 5014,
        "name": "Lot",
        "country_name": "France"
    },
    {
        "id": 5015,
        "name": "Lot-et-Garonne",
        "country_name": "France"
    },
    {
        "id": 5016,
        "name": "Lozère",
        "country_name": "France"
    },
    {
        "id": 5017,
        "name": "Maine-et-Loire",
        "country_name": "France"
    },
    {
        "id": 5018,
        "name": "Manche",
        "country_name": "France"
    },
    {
        "id": 5019,
        "name": "Marne",
        "country_name": "France"
    },
    {
        "id": 4827,
        "name": "Martinique",
        "country_name": "France"
    },
    {
        "id": 5021,
        "name": "Mayenne",
        "country_name": "France"
    },
    {
        "id": 4797,
        "name": "Mayotte",
        "country_name": "France"
    },
    {
        "id": 5038,
        "name": "Métropole de Lyon",
        "country_name": "France"
    },
    {
        "id": 5022,
        "name": "Meurthe-et-Moselle",
        "country_name": "France"
    },
    {
        "id": 5023,
        "name": "Meuse",
        "country_name": "France"
    },
    {
        "id": 5024,
        "name": "Morbihan",
        "country_name": "France"
    },
    {
        "id": 5025,
        "name": "Moselle",
        "country_name": "France"
    },
    {
        "id": 5026,
        "name": "Nièvre",
        "country_name": "France"
    },
    {
        "id": 5027,
        "name": "Nord",
        "country_name": "France"
    },
    {
        "id": 4804,
        "name": "Normandie",
        "country_name": "France"
    },
    {
        "id": 4795,
        "name": "Nouvelle-Aquitaine",
        "country_name": "France"
    },
    {
        "id": 4799,
        "name": "Occitanie",
        "country_name": "France"
    },
    {
        "id": 5028,
        "name": "Oise",
        "country_name": "France"
    },
    {
        "id": 5029,
        "name": "Orne",
        "country_name": "France"
    },
    {
        "id": 4816,
        "name": "Paris",
        "country_name": "France"
    },
    {
        "id": 5030,
        "name": "Pas-de-Calais",
        "country_name": "France"
    },
    {
        "id": 4802,
        "name": "Pays-de-la-Loire",
        "country_name": "France"
    },
    {
        "id": 4812,
        "name": "Provence-Alpes-Côte-d’Azur",
        "country_name": "France"
    },
    {
        "id": 5031,
        "name": "Puy-de-Dôme",
        "country_name": "France"
    },
    {
        "id": 5032,
        "name": "Pyrénées-Atlantiques",
        "country_name": "France"
    },
    {
        "id": 5034,
        "name": "Pyrénées-Orientales",
        "country_name": "France"
    },
    {
        "id": 5037,
        "name": "Rhône",
        "country_name": "France"
    },
    {
        "id": 4821,
        "name": "Saint Pierre and Miquelon",
        "country_name": "France"
    },
    {
        "id": 4794,
        "name": "Saint-Barthélemy",
        "country_name": "France"
    },
    {
        "id": 4809,
        "name": "Saint-Martin",
        "country_name": "France"
    },
    {
        "id": 5040,
        "name": "Saône-et-Loire",
        "country_name": "France"
    },
    {
        "id": 5041,
        "name": "Sarthe",
        "country_name": "France"
    },
    {
        "id": 5042,
        "name": "Savoie",
        "country_name": "France"
    },
    {
        "id": 5045,
        "name": "Seine-et-Marne",
        "country_name": "France"
    },
    {
        "id": 5044,
        "name": "Seine-Maritime",
        "country_name": "France"
    },
    {
        "id": 5061,
        "name": "Seine-Saint-Denis",
        "country_name": "France"
    },
    {
        "id": 5048,
        "name": "Somme",
        "country_name": "France"
    },
    {
        "id": 5049,
        "name": "Tarn",
        "country_name": "France"
    },
    {
        "id": 5050,
        "name": "Tarn-et-Garonne",
        "country_name": "France"
    },
    {
        "id": 5058,
        "name": "Territoire de Belfort",
        "country_name": "France"
    },
    {
        "id": 5063,
        "name": "Val-d'Oise",
        "country_name": "France"
    },
    {
        "id": 5062,
        "name": "Val-de-Marne",
        "country_name": "France"
    },
    {
        "id": 5051,
        "name": "Var",
        "country_name": "France"
    },
    {
        "id": 5052,
        "name": "Vaucluse",
        "country_name": "France"
    },
    {
        "id": 5053,
        "name": "Vendée",
        "country_name": "France"
    },
    {
        "id": 5054,
        "name": "Vienne",
        "country_name": "France"
    },
    {
        "id": 5056,
        "name": "Vosges",
        "country_name": "France"
    },
    {
        "id": 4810,
        "name": "Wallis and Futuna",
        "country_name": "France"
    },
    {
        "id": 5057,
        "name": "Yonne",
        "country_name": "France"
    },
    {
        "id": 5046,
        "name": "Yvelines",
        "country_name": "France"
    },
    {
        "id": 2727,
        "name": "Estuaire Province",
        "country_name": "Gabon"
    },
    {
        "id": 2726,
        "name": "Haut-Ogooué Province",
        "country_name": "Gabon"
    },
    {
        "id": 2730,
        "name": "Moyen-Ogooué Province",
        "country_name": "Gabon"
    },
    {
        "id": 2731,
        "name": "Ngounié Province",
        "country_name": "Gabon"
    },
    {
        "id": 2725,
        "name": "Nyanga Province",
        "country_name": "Gabon"
    },
    {
        "id": 2724,
        "name": "Ogooué-Ivindo Province",
        "country_name": "Gabon"
    },
    {
        "id": 2729,
        "name": "Ogooué-Lolo Province",
        "country_name": "Gabon"
    },
    {
        "id": 2728,
        "name": "Ogooué-Maritime Province",
        "country_name": "Gabon"
    },
    {
        "id": 2723,
        "name": "Woleu-Ntem Province",
        "country_name": "Gabon"
    },
    {
        "id": 2666,
        "name": "Banjul",
        "country_name": "Gambia The"
    },
    {
        "id": 2669,
        "name": "Central River Division",
        "country_name": "Gambia The"
    },
    {
        "id": 2670,
        "name": "Lower River Division",
        "country_name": "Gambia The"
    },
    {
        "id": 2671,
        "name": "North Bank Division",
        "country_name": "Gambia The"
    },
    {
        "id": 2668,
        "name": "Upper River Division",
        "country_name": "Gambia The"
    },
    {
        "id": 2667,
        "name": "West Coast Division",
        "country_name": "Gambia The"
    },
    {
        "id": 900,
        "name": "Adjara",
        "country_name": "Georgia"
    },
    {
        "id": 901,
        "name": "Autonomous Republic of Abkhazia",
        "country_name": "Georgia"
    },
    {
        "id": 907,
        "name": "Guria",
        "country_name": "Georgia"
    },
    {
        "id": 905,
        "name": "Imereti",
        "country_name": "Georgia"
    },
    {
        "id": 910,
        "name": "Kakheti",
        "country_name": "Georgia"
    },
    {
        "id": 897,
        "name": "Khelvachauri Municipality",
        "country_name": "Georgia"
    },
    {
        "id": 904,
        "name": "Kvemo Kartli",
        "country_name": "Georgia"
    },
    {
        "id": 902,
        "name": "Mtskheta-Mtianeti",
        "country_name": "Georgia"
    },
    {
        "id": 909,
        "name": "Racha-Lechkhumi and Kvemo Svaneti",
        "country_name": "Georgia"
    },
    {
        "id": 908,
        "name": "Samegrelo-Zemo Svaneti",
        "country_name": "Georgia"
    },
    {
        "id": 906,
        "name": "Samtskhe-Javakheti",
        "country_name": "Georgia"
    },
    {
        "id": 898,
        "name": "Senaki Municipality",
        "country_name": "Georgia"
    },
    {
        "id": 903,
        "name": "Shida Kartli",
        "country_name": "Georgia"
    },
    {
        "id": 899,
        "name": "Tbilisi",
        "country_name": "Georgia"
    },
    {
        "id": 3006,
        "name": "Baden-Württemberg",
        "country_name": "Germany"
    },
    {
        "id": 3009,
        "name": "Bavaria",
        "country_name": "Germany"
    },
    {
        "id": 3010,
        "name": "Berlin",
        "country_name": "Germany"
    },
    {
        "id": 3013,
        "name": "Brandenburg",
        "country_name": "Germany"
    },
    {
        "id": 3014,
        "name": "Bremen",
        "country_name": "Germany"
    },
    {
        "id": 3016,
        "name": "Hamburg",
        "country_name": "Germany"
    },
    {
        "id": 3018,
        "name": "Hesse",
        "country_name": "Germany"
    },
    {
        "id": 3008,
        "name": "Lower Saxony",
        "country_name": "Germany"
    },
    {
        "id": 3007,
        "name": "Mecklenburg-Vorpommern",
        "country_name": "Germany"
    },
    {
        "id": 3017,
        "name": "North Rhine-Westphalia",
        "country_name": "Germany"
    },
    {
        "id": 3019,
        "name": "Rhineland-Palatinate",
        "country_name": "Germany"
    },
    {
        "id": 3020,
        "name": "Saarland",
        "country_name": "Germany"
    },
    {
        "id": 3021,
        "name": "Saxony",
        "country_name": "Germany"
    },
    {
        "id": 3011,
        "name": "Saxony-Anhalt",
        "country_name": "Germany"
    },
    {
        "id": 3005,
        "name": "Schleswig-Holstein",
        "country_name": "Germany"
    },
    {
        "id": 3015,
        "name": "Thuringia",
        "country_name": "Germany"
    },
    {
        "id": 53,
        "name": "Ahafo",
        "country_name": "Ghana"
    },
    {
        "id": 48,
        "name": "Ashanti",
        "country_name": "Ghana"
    },
    {
        "id": 4959,
        "name": "Bono",
        "country_name": "Ghana"
    },
    {
        "id": 4958,
        "name": "Bono East",
        "country_name": "Ghana"
    },
    {
        "id": 52,
        "name": "Central",
        "country_name": "Ghana"
    },
    {
        "id": 50,
        "name": "Eastern",
        "country_name": "Ghana"
    },
    {
        "id": 54,
        "name": "Greater Accra",
        "country_name": "Ghana"
    },
    {
        "id": 4960,
        "name": "North East",
        "country_name": "Ghana"
    },
    {
        "id": 51,
        "name": "Northern",
        "country_name": "Ghana"
    },
    {
        "id": 4961,
        "name": "Oti",
        "country_name": "Ghana"
    },
    {
        "id": 4962,
        "name": "Savannah",
        "country_name": "Ghana"
    },
    {
        "id": 55,
        "name": "Upper East",
        "country_name": "Ghana"
    },
    {
        "id": 57,
        "name": "Upper West",
        "country_name": "Ghana"
    },
    {
        "id": 56,
        "name": "Volta",
        "country_name": "Ghana"
    },
    {
        "id": 49,
        "name": "Western",
        "country_name": "Ghana"
    },
    {
        "id": 4963,
        "name": "Western North",
        "country_name": "Ghana"
    },
    {
        "id": 2116,
        "name": "Achaea Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2123,
        "name": "Aetolia-Acarnania Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2098,
        "name": "Arcadia Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2105,
        "name": "Argolis Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2122,
        "name": "Attica Region",
        "country_name": "Greece"
    },
    {
        "id": 2126,
        "name": "Boeotia Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2128,
        "name": "Central Greece Region",
        "country_name": "Greece"
    },
    {
        "id": 2125,
        "name": "Central Macedonia",
        "country_name": "Greece"
    },
    {
        "id": 2115,
        "name": "Chania Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2124,
        "name": "Corfu Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2129,
        "name": "Corinthia Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2109,
        "name": "Crete Region",
        "country_name": "Greece"
    },
    {
        "id": 2130,
        "name": "Drama Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2120,
        "name": "East Attica Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2117,
        "name": "East Macedonia and Thrace",
        "country_name": "Greece"
    },
    {
        "id": 2110,
        "name": "Epirus Region",
        "country_name": "Greece"
    },
    {
        "id": 2101,
        "name": "Euboea",
        "country_name": "Greece"
    },
    {
        "id": 2102,
        "name": "Grevena Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2099,
        "name": "Imathia Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2113,
        "name": "Ioannina Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2131,
        "name": "Ionian Islands Region",
        "country_name": "Greece"
    },
    {
        "id": 2095,
        "name": "Karditsa Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2100,
        "name": "Kastoria Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2127,
        "name": "Kefalonia Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2111,
        "name": "Kilkis Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2112,
        "name": "Kozani Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2106,
        "name": "Laconia",
        "country_name": "Greece"
    },
    {
        "id": 2132,
        "name": "Larissa Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2104,
        "name": "Lefkada Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2107,
        "name": "Pella Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2119,
        "name": "Peloponnese Region",
        "country_name": "Greece"
    },
    {
        "id": 2114,
        "name": "Phthiotis Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2103,
        "name": "Preveza Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2121,
        "name": "Serres Prefecture",
        "country_name": "Greece"
    },
    {
        "id": 2118,
        "name": "South Aegean",
        "country_name": "Greece"
    },
    {
        "id": 2097,
        "name": "Thessaloniki Regional Unit",
        "country_name": "Greece"
    },
    {
        "id": 2096,
        "name": "West Greece Region",
        "country_name": "Greece"
    },
    {
        "id": 2108,
        "name": "West Macedonia Region",
        "country_name": "Greece"
    },
    {
        "id": 3867,
        "name": "Carriacou and Petite Martinique",
        "country_name": "Grenada"
    },
    {
        "id": 3865,
        "name": "Saint Andrew Parish",
        "country_name": "Grenada"
    },
    {
        "id": 3869,
        "name": "Saint David Parish",
        "country_name": "Grenada"
    },
    {
        "id": 3864,
        "name": "Saint George Parish",
        "country_name": "Grenada"
    },
    {
        "id": 3868,
        "name": "Saint John Parish",
        "country_name": "Grenada"
    },
    {
        "id": 3866,
        "name": "Saint Mark Parish",
        "country_name": "Grenada"
    },
    {
        "id": 3863,
        "name": "Saint Patrick Parish",
        "country_name": "Grenada"
    },
    {
        "id": 3671,
        "name": "Alta Verapaz Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3674,
        "name": "Baja Verapaz Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3675,
        "name": "Chimaltenango Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3666,
        "name": "Chiquimula Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3662,
        "name": "El Progreso Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3677,
        "name": "Escuintla Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3672,
        "name": "Guatemala Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3670,
        "name": "Huehuetenango Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3659,
        "name": "Izabal Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3658,
        "name": "Jalapa Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3673,
        "name": "Jutiapa Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3669,
        "name": "Petén Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3668,
        "name": "Quetzaltenango Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3657,
        "name": "Quiché Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3664,
        "name": "Retalhuleu Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3676,
        "name": "Sacatepéquez Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3667,
        "name": "San Marcos Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3665,
        "name": "Santa Rosa Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3661,
        "name": "Sololá Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3660,
        "name": "Suchitepéquez Department",
        "country_name": "Guatemala"
    },
    {
        "id": 3663,
        "name": "Totonicapán Department",
        "country_name": "Guatemala"
    },
    {
        "id": 2672,
        "name": "Beyla Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2699,
        "name": "Boffa Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2709,
        "name": "Boké Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2676,
        "name": "Boké Region",
        "country_name": "Guinea"
    },
    {
        "id": 2686,
        "name": "Conakry",
        "country_name": "Guinea"
    },
    {
        "id": 2705,
        "name": "Coyah Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2679,
        "name": "Dabola Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2706,
        "name": "Dalaba Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2688,
        "name": "Dinguiraye Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2681,
        "name": "Dubréka Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2682,
        "name": "Faranah Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2683,
        "name": "Forécariah Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2675,
        "name": "Fria Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2685,
        "name": "Gaoual Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2711,
        "name": "Guéckédou Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2704,
        "name": "Kankan Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2697,
        "name": "Kankan Region",
        "country_name": "Guinea"
    },
    {
        "id": 2710,
        "name": "Kérouané Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2693,
        "name": "Kindia Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2701,
        "name": "Kindia Region",
        "country_name": "Guinea"
    },
    {
        "id": 2691,
        "name": "Kissidougou Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2692,
        "name": "Koubia Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2703,
        "name": "Koundara Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2695,
        "name": "Kouroussa Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2680,
        "name": "Labé Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2677,
        "name": "Labé Region",
        "country_name": "Guinea"
    },
    {
        "id": 2690,
        "name": "Lélouma Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2708,
        "name": "Lola Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2702,
        "name": "Macenta Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2700,
        "name": "Mali Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2689,
        "name": "Mamou Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2698,
        "name": "Mamou Region",
        "country_name": "Guinea"
    },
    {
        "id": 2673,
        "name": "Mandiana Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2678,
        "name": "Nzérékoré Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2684,
        "name": "Nzérékoré Region",
        "country_name": "Guinea"
    },
    {
        "id": 2694,
        "name": "Pita Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2707,
        "name": "Siguiri Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2687,
        "name": "Télimélé Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2696,
        "name": "Tougué Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2674,
        "name": "Yomou Prefecture",
        "country_name": "Guinea"
    },
    {
        "id": 2720,
        "name": "Bafatá",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2714,
        "name": "Biombo Region",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2722,
        "name": "Bolama Region",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2713,
        "name": "Cacheu Region",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2719,
        "name": "Gabú Region",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2721,
        "name": "Leste Province",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2717,
        "name": "Norte Province",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2718,
        "name": "Oio Region",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2715,
        "name": "Quinara Region",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2716,
        "name": "Sul Province",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2712,
        "name": "Tombali Region",
        "country_name": "Guinea-Bissau"
    },
    {
        "id": 2764,
        "name": "Barima-Waini",
        "country_name": "Guyana"
    },
    {
        "id": 2760,
        "name": "Cuyuni-Mazaruni",
        "country_name": "Guyana"
    },
    {
        "id": 2767,
        "name": "Demerara-Mahaica",
        "country_name": "Guyana"
    },
    {
        "id": 2766,
        "name": "East Berbice-Corentyne",
        "country_name": "Guyana"
    },
    {
        "id": 2768,
        "name": "Essequibo Islands-West Demerara",
        "country_name": "Guyana"
    },
    {
        "id": 2762,
        "name": "Mahaica-Berbice",
        "country_name": "Guyana"
    },
    {
        "id": 2765,
        "name": "Pomeroon-Supenaam",
        "country_name": "Guyana"
    },
    {
        "id": 2761,
        "name": "Potaro-Siparuni",
        "country_name": "Guyana"
    },
    {
        "id": 2763,
        "name": "Upper Demerara-Berbice",
        "country_name": "Guyana"
    },
    {
        "id": 2769,
        "name": "Upper Takutu-Upper Essequibo",
        "country_name": "Guyana"
    },
    {
        "id": 4123,
        "name": "Artibonite",
        "country_name": "Haiti"
    },
    {
        "id": 4125,
        "name": "Centre",
        "country_name": "Haiti"
    },
    {
        "id": 4119,
        "name": "Grand'Anse",
        "country_name": "Haiti"
    },
    {
        "id": 4118,
        "name": "Nippes",
        "country_name": "Haiti"
    },
    {
        "id": 4117,
        "name": "Nord",
        "country_name": "Haiti"
    },
    {
        "id": 4121,
        "name": "Nord-Est",
        "country_name": "Haiti"
    },
    {
        "id": 4126,
        "name": "Nord-Ouest",
        "country_name": "Haiti"
    },
    {
        "id": 4120,
        "name": "Ouest",
        "country_name": "Haiti"
    },
    {
        "id": 4122,
        "name": "Sud",
        "country_name": "Haiti"
    },
    {
        "id": 4124,
        "name": "Sud-Est",
        "country_name": "Haiti"
    },
    {
        "id": 4047,
        "name": "Atlántida Department",
        "country_name": "Honduras"
    },
    {
        "id": 4045,
        "name": "Bay Islands Department",
        "country_name": "Honduras"
    },
    {
        "id": 4041,
        "name": "Choluteca Department",
        "country_name": "Honduras"
    },
    {
        "id": 4051,
        "name": "Colón Department",
        "country_name": "Honduras"
    },
    {
        "id": 4042,
        "name": "Comayagua Department",
        "country_name": "Honduras"
    },
    {
        "id": 4049,
        "name": "Copán Department",
        "country_name": "Honduras"
    },
    {
        "id": 4046,
        "name": "Cortés Department",
        "country_name": "Honduras"
    },
    {
        "id": 4043,
        "name": "El Paraíso Department",
        "country_name": "Honduras"
    },
    {
        "id": 4052,
        "name": "Francisco Morazán Department",
        "country_name": "Honduras"
    },
    {
        "id": 4048,
        "name": "Gracias a Dios Department",
        "country_name": "Honduras"
    },
    {
        "id": 4044,
        "name": "Intibucá Department",
        "country_name": "Honduras"
    },
    {
        "id": 4058,
        "name": "La Paz Department",
        "country_name": "Honduras"
    },
    {
        "id": 4054,
        "name": "Lempira Department",
        "country_name": "Honduras"
    },
    {
        "id": 4056,
        "name": "Ocotepeque Department",
        "country_name": "Honduras"
    },
    {
        "id": 4050,
        "name": "Olancho Department",
        "country_name": "Honduras"
    },
    {
        "id": 4053,
        "name": "Santa Bárbara Department",
        "country_name": "Honduras"
    },
    {
        "id": 4055,
        "name": "Valle Department",
        "country_name": "Honduras"
    },
    {
        "id": 4057,
        "name": "Yoro Department",
        "country_name": "Honduras"
    },
    {
        "id": 4889,
        "name": "Central and Western District",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4891,
        "name": "Eastern",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4888,
        "name": "Islands District",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4895,
        "name": "Kowloon City",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4898,
        "name": "Kwai Tsing",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4897,
        "name": "Kwun Tong",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4900,
        "name": "North",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4887,
        "name": "Sai Kung District",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4901,
        "name": "Sha Tin",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4894,
        "name": "Sham Shui Po",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4892,
        "name": "Southern",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4885,
        "name": "Tai Po District",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4884,
        "name": "Tsuen Wan District",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4899,
        "name": "Tuen Mun",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4890,
        "name": "Wan Chai",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4896,
        "name": "Wong Tai Sin",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4893,
        "name": "Yau Tsim Mong",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 4883,
        "name": "Yuen Long District",
        "country_name": "Hong Kong S.A.R."
    },
    {
        "id": 1048,
        "name": "Bács-Kiskun",
        "country_name": "Hungary"
    },
    {
        "id": 1055,
        "name": "Baranya",
        "country_name": "Hungary"
    },
    {
        "id": 1060,
        "name": "Békés",
        "country_name": "Hungary"
    },
    {
        "id": 1036,
        "name": "Békéscsaba",
        "country_name": "Hungary"
    },
    {
        "id": 1058,
        "name": "Borsod-Abaúj-Zemplén",
        "country_name": "Hungary"
    },
    {
        "id": 1064,
        "name": "Budapest",
        "country_name": "Hungary"
    },
    {
        "id": 1031,
        "name": "Csongrád County",
        "country_name": "Hungary"
    },
    {
        "id": 1032,
        "name": "Debrecen",
        "country_name": "Hungary"
    },
    {
        "id": 1049,
        "name": "Dunaújváros",
        "country_name": "Hungary"
    },
    {
        "id": 1037,
        "name": "Eger",
        "country_name": "Hungary"
    },
    {
        "id": 1028,
        "name": "Érd",
        "country_name": "Hungary"
    },
    {
        "id": 1044,
        "name": "Fejér County",
        "country_name": "Hungary"
    },
    {
        "id": 1041,
        "name": "Győr",
        "country_name": "Hungary"
    },
    {
        "id": 1042,
        "name": "Győr-Moson-Sopron County",
        "country_name": "Hungary"
    },
    {
        "id": 1063,
        "name": "Hajdú-Bihar County",
        "country_name": "Hungary"
    },
    {
        "id": 1040,
        "name": "Heves County",
        "country_name": "Hungary"
    },
    {
        "id": 1027,
        "name": "Hódmezővásárhely",
        "country_name": "Hungary"
    },
    {
        "id": 1043,
        "name": "Jász-Nagykun-Szolnok County",
        "country_name": "Hungary"
    },
    {
        "id": 1067,
        "name": "Kaposvár",
        "country_name": "Hungary"
    },
    {
        "id": 1056,
        "name": "Kecskemét",
        "country_name": "Hungary"
    },
    {
        "id": 5085,
        "name": "Komárom-Esztergom",
        "country_name": "Hungary"
    },
    {
        "id": 1065,
        "name": "Miskolc",
        "country_name": "Hungary"
    },
    {
        "id": 1030,
        "name": "Nagykanizsa",
        "country_name": "Hungary"
    },
    {
        "id": 1051,
        "name": "Nógrád County",
        "country_name": "Hungary"
    },
    {
        "id": 1034,
        "name": "Nyíregyháza",
        "country_name": "Hungary"
    },
    {
        "id": 1053,
        "name": "Pécs",
        "country_name": "Hungary"
    },
    {
        "id": 1059,
        "name": "Pest County",
        "country_name": "Hungary"
    },
    {
        "id": 1068,
        "name": "Salgótarján",
        "country_name": "Hungary"
    },
    {
        "id": 1035,
        "name": "Somogy County",
        "country_name": "Hungary"
    },
    {
        "id": 1057,
        "name": "Sopron",
        "country_name": "Hungary"
    },
    {
        "id": 1045,
        "name": "Szabolcs-Szatmár-Bereg County",
        "country_name": "Hungary"
    },
    {
        "id": 1029,
        "name": "Szeged",
        "country_name": "Hungary"
    },
    {
        "id": 1033,
        "name": "Székesfehérvár",
        "country_name": "Hungary"
    },
    {
        "id": 1061,
        "name": "Szekszárd",
        "country_name": "Hungary"
    },
    {
        "id": 1047,
        "name": "Szolnok",
        "country_name": "Hungary"
    },
    {
        "id": 1052,
        "name": "Szombathely",
        "country_name": "Hungary"
    },
    {
        "id": 1066,
        "name": "Tatabánya",
        "country_name": "Hungary"
    },
    {
        "id": 1038,
        "name": "Tolna County",
        "country_name": "Hungary"
    },
    {
        "id": 1039,
        "name": "Vas County",
        "country_name": "Hungary"
    },
    {
        "id": 1062,
        "name": "Veszprém",
        "country_name": "Hungary"
    },
    {
        "id": 1054,
        "name": "Veszprém County",
        "country_name": "Hungary"
    },
    {
        "id": 1046,
        "name": "Zala County",
        "country_name": "Hungary"
    },
    {
        "id": 1050,
        "name": "Zalaegerszeg",
        "country_name": "Hungary"
    },
    {
        "id": 3431,
        "name": "Capital Region",
        "country_name": "Iceland"
    },
    {
        "id": 3433,
        "name": "Eastern Region",
        "country_name": "Iceland"
    },
    {
        "id": 3437,
        "name": "Northeastern Region",
        "country_name": "Iceland"
    },
    {
        "id": 3435,
        "name": "Northwestern Region",
        "country_name": "Iceland"
    },
    {
        "id": 3430,
        "name": "Southern Peninsula Region",
        "country_name": "Iceland"
    },
    {
        "id": 3434,
        "name": "Southern Region",
        "country_name": "Iceland"
    },
    {
        "id": 3436,
        "name": "Western Region",
        "country_name": "Iceland"
    },
    {
        "id": 3432,
        "name": "Westfjords",
        "country_name": "Iceland"
    },
    {
        "id": 4023,
        "name": "Andaman and Nicobar Islands",
        "country_name": "India"
    },
    {
        "id": 4017,
        "name": "Andhra Pradesh",
        "country_name": "India"
    },
    {
        "id": 4024,
        "name": "Arunachal Pradesh",
        "country_name": "India"
    },
    {
        "id": 4027,
        "name": "Assam",
        "country_name": "India"
    },
    {
        "id": 4037,
        "name": "Bihar",
        "country_name": "India"
    },
    {
        "id": 4031,
        "name": "Chandigarh",
        "country_name": "India"
    },
    {
        "id": 4040,
        "name": "Chhattisgarh",
        "country_name": "India"
    },
    {
        "id": 4033,
        "name": "Dadra and Nagar Haveli and Daman and Diu",
        "country_name": "India"
    },
    {
        "id": 4021,
        "name": "Delhi",
        "country_name": "India"
    },
    {
        "id": 4009,
        "name": "Goa",
        "country_name": "India"
    },
    {
        "id": 4030,
        "name": "Gujarat",
        "country_name": "India"
    },
    {
        "id": 4007,
        "name": "Haryana",
        "country_name": "India"
    },
    {
        "id": 4020,
        "name": "Himachal Pradesh",
        "country_name": "India"
    },
    {
        "id": 4029,
        "name": "Jammu and Kashmir",
        "country_name": "India"
    },
    {
        "id": 4025,
        "name": "Jharkhand",
        "country_name": "India"
    },
    {
        "id": 4026,
        "name": "Karnataka",
        "country_name": "India"
    },
    {
        "id": 4028,
        "name": "Kerala",
        "country_name": "India"
    },
    {
        "id": 4852,
        "name": "Ladakh",
        "country_name": "India"
    },
    {
        "id": 4019,
        "name": "Lakshadweep",
        "country_name": "India"
    },
    {
        "id": 4039,
        "name": "Madhya Pradesh",
        "country_name": "India"
    },
    {
        "id": 4008,
        "name": "Maharashtra",
        "country_name": "India"
    },
    {
        "id": 4010,
        "name": "Manipur",
        "country_name": "India"
    },
    {
        "id": 4006,
        "name": "Meghalaya",
        "country_name": "India"
    },
    {
        "id": 4036,
        "name": "Mizoram",
        "country_name": "India"
    },
    {
        "id": 4018,
        "name": "Nagaland",
        "country_name": "India"
    },
    {
        "id": 4013,
        "name": "Odisha",
        "country_name": "India"
    },
    {
        "id": 4011,
        "name": "Puducherry",
        "country_name": "India"
    },
    {
        "id": 4015,
        "name": "Punjab",
        "country_name": "India"
    },
    {
        "id": 4014,
        "name": "Rajasthan",
        "country_name": "India"
    },
    {
        "id": 4034,
        "name": "Sikkim",
        "country_name": "India"
    },
    {
        "id": 4035,
        "name": "Tamil Nadu",
        "country_name": "India"
    },
    {
        "id": 4012,
        "name": "Telangana",
        "country_name": "India"
    },
    {
        "id": 4038,
        "name": "Tripura",
        "country_name": "India"
    },
    {
        "id": 4022,
        "name": "Uttar Pradesh",
        "country_name": "India"
    },
    {
        "id": 4016,
        "name": "Uttarakhand",
        "country_name": "India"
    },
    {
        "id": 4853,
        "name": "West Bengal",
        "country_name": "India"
    },
    {
        "id": 1822,
        "name": "Aceh",
        "country_name": "Indonesia"
    },
    {
        "id": 1826,
        "name": "Bali",
        "country_name": "Indonesia"
    },
    {
        "id": 1810,
        "name": "Banten",
        "country_name": "Indonesia"
    },
    {
        "id": 1793,
        "name": "Bengkulu",
        "country_name": "Indonesia"
    },
    {
        "id": 1829,
        "name": "DI Yogyakarta",
        "country_name": "Indonesia"
    },
    {
        "id": 1805,
        "name": "DKI Jakarta",
        "country_name": "Indonesia"
    },
    {
        "id": 1812,
        "name": "Gorontalo",
        "country_name": "Indonesia"
    },
    {
        "id": 1815,
        "name": "Jambi",
        "country_name": "Indonesia"
    },
    {
        "id": 1825,
        "name": "Jawa Barat",
        "country_name": "Indonesia"
    },
    {
        "id": 1802,
        "name": "Jawa Tengah",
        "country_name": "Indonesia"
    },
    {
        "id": 1827,
        "name": "Jawa Timur",
        "country_name": "Indonesia"
    },
    {
        "id": 1806,
        "name": "Kalimantan Barat",
        "country_name": "Indonesia"
    },
    {
        "id": 1819,
        "name": "Kalimantan Selatan",
        "country_name": "Indonesia"
    },
    {
        "id": 1794,
        "name": "Kalimantan Tengah",
        "country_name": "Indonesia"
    },
    {
        "id": 1804,
        "name": "Kalimantan Timur",
        "country_name": "Indonesia"
    },
    {
        "id": 1824,
        "name": "Kalimantan Utara",
        "country_name": "Indonesia"
    },
    {
        "id": 1820,
        "name": "Kepulauan Bangka Belitung",
        "country_name": "Indonesia"
    },
    {
        "id": 1807,
        "name": "Kepulauan Riau",
        "country_name": "Indonesia"
    },
    {
        "id": 1811,
        "name": "Lampung",
        "country_name": "Indonesia"
    },
    {
        "id": 1800,
        "name": "Maluku",
        "country_name": "Indonesia"
    },
    {
        "id": 1801,
        "name": "Maluku Utara",
        "country_name": "Indonesia"
    },
    {
        "id": 1814,
        "name": "Nusa Tenggara Barat",
        "country_name": "Indonesia"
    },
    {
        "id": 1818,
        "name": "Nusa Tenggara Timur",
        "country_name": "Indonesia"
    },
    {
        "id": 1798,
        "name": "Papua",
        "country_name": "Indonesia"
    },
    {
        "id": 1799,
        "name": "Papua Barat",
        "country_name": "Indonesia"
    },
    {
        "id": 1809,
        "name": "Riau",
        "country_name": "Indonesia"
    },
    {
        "id": 1817,
        "name": "Sulawesi Barat",
        "country_name": "Indonesia"
    },
    {
        "id": 1795,
        "name": "Sulawesi Selatan",
        "country_name": "Indonesia"
    },
    {
        "id": 1813,
        "name": "Sulawesi Tengah",
        "country_name": "Indonesia"
    },
    {
        "id": 1796,
        "name": "Sulawesi Tenggara",
        "country_name": "Indonesia"
    },
    {
        "id": 1808,
        "name": "Sulawesi Utara",
        "country_name": "Indonesia"
    },
    {
        "id": 1828,
        "name": "Sumatera Barat",
        "country_name": "Indonesia"
    },
    {
        "id": 1816,
        "name": "Sumatera Selatan",
        "country_name": "Indonesia"
    },
    {
        "id": 1792,
        "name": "Sumatera Utara",
        "country_name": "Indonesia"
    },
    {
        "id": 3929,
        "name": "Alborz",
        "country_name": "Iran"
    },
    {
        "id": 3934,
        "name": "Ardabil",
        "country_name": "Iran"
    },
    {
        "id": 3932,
        "name": "Bushehr",
        "country_name": "Iran"
    },
    {
        "id": 3921,
        "name": "Chaharmahal and Bakhtiari",
        "country_name": "Iran"
    },
    {
        "id": 3944,
        "name": "East Azerbaijan",
        "country_name": "Iran"
    },
    {
        "id": 3939,
        "name": "Fars",
        "country_name": "Iran"
    },
    {
        "id": 3920,
        "name": "Gilan",
        "country_name": "Iran"
    },
    {
        "id": 3933,
        "name": "Golestan",
        "country_name": "Iran"
    },
    {
        "id": 4920,
        "name": "Hamadan",
        "country_name": "Iran"
    },
    {
        "id": 3937,
        "name": "Hormozgan",
        "country_name": "Iran"
    },
    {
        "id": 3918,
        "name": "Ilam",
        "country_name": "Iran"
    },
    {
        "id": 3923,
        "name": "Isfahan",
        "country_name": "Iran"
    },
    {
        "id": 3943,
        "name": "Kerman",
        "country_name": "Iran"
    },
    {
        "id": 3919,
        "name": "Kermanshah",
        "country_name": "Iran"
    },
    {
        "id": 3917,
        "name": "Khuzestan",
        "country_name": "Iran"
    },
    {
        "id": 3926,
        "name": "Kohgiluyeh and Boyer-Ahmad",
        "country_name": "Iran"
    },
    {
        "id": 3935,
        "name": "Kurdistan",
        "country_name": "Iran"
    },
    {
        "id": 3928,
        "name": "Lorestan",
        "country_name": "Iran"
    },
    {
        "id": 3916,
        "name": "Markazi",
        "country_name": "Iran"
    },
    {
        "id": 3938,
        "name": "Mazandaran",
        "country_name": "Iran"
    },
    {
        "id": 3942,
        "name": "North Khorasan",
        "country_name": "Iran"
    },
    {
        "id": 3941,
        "name": "Qazvin",
        "country_name": "Iran"
    },
    {
        "id": 3922,
        "name": "Qom",
        "country_name": "Iran"
    },
    {
        "id": 3927,
        "name": "Razavi Khorasan",
        "country_name": "Iran"
    },
    {
        "id": 3940,
        "name": "Semnan",
        "country_name": "Iran"
    },
    {
        "id": 3931,
        "name": "Sistan and Baluchestan",
        "country_name": "Iran"
    },
    {
        "id": 3930,
        "name": "South Khorasan",
        "country_name": "Iran"
    },
    {
        "id": 3945,
        "name": "Tehran",
        "country_name": "Iran"
    },
    {
        "id": 3924,
        "name": "West Azarbaijan",
        "country_name": "Iran"
    },
    {
        "id": 3936,
        "name": "Yazd",
        "country_name": "Iran"
    },
    {
        "id": 3925,
        "name": "Zanjan",
        "country_name": "Iran"
    },
    {
        "id": 3964,
        "name": "Al Anbar Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3958,
        "name": "Al Muthanna Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3956,
        "name": "Al-Qādisiyyah Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3955,
        "name": "Babylon Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3959,
        "name": "Baghdad Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3960,
        "name": "Basra Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3954,
        "name": "Dhi Qar Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3965,
        "name": "Diyala Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3967,
        "name": "Dohuk Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3968,
        "name": "Erbil Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3957,
        "name": "Karbala Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3971,
        "name": "Kirkuk Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3966,
        "name": "Maysan Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3962,
        "name": "Najaf Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3963,
        "name": "Nineveh Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3961,
        "name": "Saladin Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3969,
        "name": "Sulaymaniyah Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 3970,
        "name": "Wasit Governorate",
        "country_name": "Iraq"
    },
    {
        "id": 1095,
        "name": "Carlow",
        "country_name": "Ireland"
    },
    {
        "id": 1088,
        "name": "Cavan",
        "country_name": "Ireland"
    },
    {
        "id": 1091,
        "name": "Clare",
        "country_name": "Ireland"
    },
    {
        "id": 1087,
        "name": "Connacht",
        "country_name": "Ireland"
    },
    {
        "id": 1074,
        "name": "Cork",
        "country_name": "Ireland"
    },
    {
        "id": 1071,
        "name": "Donegal",
        "country_name": "Ireland"
    },
    {
        "id": 1072,
        "name": "Dublin",
        "country_name": "Ireland"
    },
    {
        "id": 1079,
        "name": "Galway",
        "country_name": "Ireland"
    },
    {
        "id": 1077,
        "name": "Kerry",
        "country_name": "Ireland"
    },
    {
        "id": 1082,
        "name": "Kildare",
        "country_name": "Ireland"
    },
    {
        "id": 1090,
        "name": "Kilkenny",
        "country_name": "Ireland"
    },
    {
        "id": 1096,
        "name": "Laois",
        "country_name": "Ireland"
    },
    {
        "id": 1073,
        "name": "Leinster",
        "country_name": "Ireland"
    },
    {
        "id": 1094,
        "name": "Limerick",
        "country_name": "Ireland"
    },
    {
        "id": 1076,
        "name": "Longford",
        "country_name": "Ireland"
    },
    {
        "id": 1083,
        "name": "Louth",
        "country_name": "Ireland"
    },
    {
        "id": 1084,
        "name": "Mayo",
        "country_name": "Ireland"
    },
    {
        "id": 1092,
        "name": "Meath",
        "country_name": "Ireland"
    },
    {
        "id": 1075,
        "name": "Monaghan",
        "country_name": "Ireland"
    },
    {
        "id": 1080,
        "name": "Munster",
        "country_name": "Ireland"
    },
    {
        "id": 1078,
        "name": "Offaly",
        "country_name": "Ireland"
    },
    {
        "id": 1081,
        "name": "Roscommon",
        "country_name": "Ireland"
    },
    {
        "id": 1070,
        "name": "Sligo",
        "country_name": "Ireland"
    },
    {
        "id": 1069,
        "name": "Tipperary",
        "country_name": "Ireland"
    },
    {
        "id": 1086,
        "name": "Ulster",
        "country_name": "Ireland"
    },
    {
        "id": 1089,
        "name": "Waterford",
        "country_name": "Ireland"
    },
    {
        "id": 1097,
        "name": "Westmeath",
        "country_name": "Ireland"
    },
    {
        "id": 1093,
        "name": "Wexford",
        "country_name": "Ireland"
    },
    {
        "id": 1085,
        "name": "Wicklow",
        "country_name": "Ireland"
    },
    {
        "id": 1367,
        "name": "Central District",
        "country_name": "Israel"
    },
    {
        "id": 1369,
        "name": "Haifa District",
        "country_name": "Israel"
    },
    {
        "id": 1370,
        "name": "Jerusalem District",
        "country_name": "Israel"
    },
    {
        "id": 1366,
        "name": "Northern District",
        "country_name": "Israel"
    },
    {
        "id": 1368,
        "name": "Southern District",
        "country_name": "Israel"
    },
    {
        "id": 1371,
        "name": "Tel Aviv District",
        "country_name": "Israel"
    },
    {
        "id": 1679,
        "name": "Abruzzo",
        "country_name": "Italy"
    },
    {
        "id": 1727,
        "name": "Agrigento",
        "country_name": "Italy"
    },
    {
        "id": 1783,
        "name": "Alessandria",
        "country_name": "Italy"
    },
    {
        "id": 1672,
        "name": "Ancona",
        "country_name": "Italy"
    },
    {
        "id": 1716,
        "name": "Aosta Valley",
        "country_name": "Italy"
    },
    {
        "id": 1688,
        "name": "Apulia",
        "country_name": "Italy"
    },
    {
        "id": 1681,
        "name": "Ascoli Piceno",
        "country_name": "Italy"
    },
    {
        "id": 1780,
        "name": "Asti",
        "country_name": "Italy"
    },
    {
        "id": 1692,
        "name": "Avellino",
        "country_name": "Italy"
    },
    {
        "id": 1772,
        "name": "Bari",
        "country_name": "Italy"
    },
    {
        "id": 1686,
        "name": "Barletta-Andria-Trani",
        "country_name": "Italy"
    },
    {
        "id": 1706,
        "name": "Basilicata",
        "country_name": "Italy"
    },
    {
        "id": 1689,
        "name": "Belluno",
        "country_name": "Italy"
    },
    {
        "id": 1701,
        "name": "Benevento",
        "country_name": "Italy"
    },
    {
        "id": 1704,
        "name": "Bergamo",
        "country_name": "Italy"
    },
    {
        "id": 1778,
        "name": "Biella",
        "country_name": "Italy"
    },
    {
        "id": 1684,
        "name": "Bologna",
        "country_name": "Italy"
    },
    {
        "id": 1717,
        "name": "Brescia",
        "country_name": "Italy"
    },
    {
        "id": 1714,
        "name": "Brindisi",
        "country_name": "Italy"
    },
    {
        "id": 1682,
        "name": "Cagliari",
        "country_name": "Italy"
    },
    {
        "id": 1703,
        "name": "Calabria",
        "country_name": "Italy"
    },
    {
        "id": 1718,
        "name": "Caltanissetta",
        "country_name": "Italy"
    },
    {
        "id": 1669,
        "name": "Campania",
        "country_name": "Italy"
    },
    {
        "id": 1721,
        "name": "Campobasso",
        "country_name": "Italy"
    },
    {
        "id": 1731,
        "name": "Caserta",
        "country_name": "Italy"
    },
    {
        "id": 1766,
        "name": "Catania",
        "country_name": "Italy"
    },
    {
        "id": 1728,
        "name": "Catanzaro",
        "country_name": "Italy"
    },
    {
        "id": 1739,
        "name": "Chieti",
        "country_name": "Italy"
    },
    {
        "id": 1740,
        "name": "Como",
        "country_name": "Italy"
    },
    {
        "id": 1742,
        "name": "Cosenza",
        "country_name": "Italy"
    },
    {
        "id": 1751,
        "name": "Cremona",
        "country_name": "Italy"
    },
    {
        "id": 1754,
        "name": "Crotone",
        "country_name": "Italy"
    },
    {
        "id": 1775,
        "name": "Cuneo",
        "country_name": "Italy"
    },
    {
        "id": 1773,
        "name": "Emilia-Romagna",
        "country_name": "Italy"
    },
    {
        "id": 1723,
        "name": "Enna",
        "country_name": "Italy"
    },
    {
        "id": 1744,
        "name": "Fermo",
        "country_name": "Italy"
    },
    {
        "id": 1746,
        "name": "Ferrara",
        "country_name": "Italy"
    },
    {
        "id": 1680,
        "name": "Florence",
        "country_name": "Italy"
    },
    {
        "id": 1771,
        "name": "Foggia",
        "country_name": "Italy"
    },
    {
        "id": 1779,
        "name": "Forlì-Cesena",
        "country_name": "Italy"
    },
    {
        "id": 1756,
        "name": "Friuli–Venezia Giulia",
        "country_name": "Italy"
    },
    {
        "id": 1776,
        "name": "Frosinone",
        "country_name": "Italy"
    },
    {
        "id": 1699,
        "name": "Genoa",
        "country_name": "Italy"
    },
    {
        "id": 1777,
        "name": "Gorizia",
        "country_name": "Italy"
    },
    {
        "id": 1787,
        "name": "Grosseto",
        "country_name": "Italy"
    },
    {
        "id": 1788,
        "name": "Imperia",
        "country_name": "Italy"
    },
    {
        "id": 1789,
        "name": "Isernia",
        "country_name": "Italy"
    },
    {
        "id": 1781,
        "name": "L'Aquila",
        "country_name": "Italy"
    },
    {
        "id": 1791,
        "name": "La Spezia",
        "country_name": "Italy"
    },
    {
        "id": 1674,
        "name": "Latina",
        "country_name": "Italy"
    },
    {
        "id": 1678,
        "name": "Lazio",
        "country_name": "Italy"
    },
    {
        "id": 1675,
        "name": "Lecce",
        "country_name": "Italy"
    },
    {
        "id": 1677,
        "name": "Lecco",
        "country_name": "Italy"
    },
    {
        "id": 1768,
        "name": "Liguria",
        "country_name": "Italy"
    },
    {
        "id": 1745,
        "name": "Livorno",
        "country_name": "Italy"
    },
    {
        "id": 1747,
        "name": "Lodi",
        "country_name": "Italy"
    },
    {
        "id": 1705,
        "name": "Lombardy",
        "country_name": "Italy"
    },
    {
        "id": 1749,
        "name": "Lucca",
        "country_name": "Italy"
    },
    {
        "id": 1750,
        "name": "Macerata",
        "country_name": "Italy"
    },
    {
        "id": 1758,
        "name": "Mantua",
        "country_name": "Italy"
    },
    {
        "id": 1670,
        "name": "Marche",
        "country_name": "Italy"
    },
    {
        "id": 1759,
        "name": "Massa and Carrara",
        "country_name": "Italy"
    },
    {
        "id": 1760,
        "name": "Matera",
        "country_name": "Italy"
    },
    {
        "id": 1761,
        "name": "Medio Campidano",
        "country_name": "Italy"
    },
    {
        "id": 1770,
        "name": "Messina",
        "country_name": "Italy"
    },
    {
        "id": 1698,
        "name": "Milan",
        "country_name": "Italy"
    },
    {
        "id": 1757,
        "name": "Modena",
        "country_name": "Italy"
    },
    {
        "id": 1695,
        "name": "Molise",
        "country_name": "Italy"
    },
    {
        "id": 1769,
        "name": "Monza and Brianza",
        "country_name": "Italy"
    },
    {
        "id": 1724,
        "name": "Naples",
        "country_name": "Italy"
    },
    {
        "id": 1774,
        "name": "Novara",
        "country_name": "Italy"
    },
    {
        "id": 1790,
        "name": "Nuoro",
        "country_name": "Italy"
    },
    {
        "id": 1786,
        "name": "Oristano",
        "country_name": "Italy"
    },
    {
        "id": 1665,
        "name": "Padua",
        "country_name": "Italy"
    },
    {
        "id": 1668,
        "name": "Palermo",
        "country_name": "Italy"
    },
    {
        "id": 1666,
        "name": "Parma",
        "country_name": "Italy"
    },
    {
        "id": 1676,
        "name": "Pavia",
        "country_name": "Italy"
    },
    {
        "id": 1691,
        "name": "Perugia",
        "country_name": "Italy"
    },
    {
        "id": 1693,
        "name": "Pesaro and Urbino",
        "country_name": "Italy"
    },
    {
        "id": 1694,
        "name": "Pescara",
        "country_name": "Italy"
    },
    {
        "id": 1696,
        "name": "Piacenza",
        "country_name": "Italy"
    },
    {
        "id": 1702,
        "name": "Piedmont",
        "country_name": "Italy"
    },
    {
        "id": 1685,
        "name": "Pisa",
        "country_name": "Italy"
    },
    {
        "id": 1687,
        "name": "Pistoia",
        "country_name": "Italy"
    },
    {
        "id": 1690,
        "name": "Pordenone",
        "country_name": "Italy"
    },
    {
        "id": 1697,
        "name": "Potenza",
        "country_name": "Italy"
    },
    {
        "id": 1700,
        "name": "Prato",
        "country_name": "Italy"
    },
    {
        "id": 1729,
        "name": "Ragusa",
        "country_name": "Italy"
    },
    {
        "id": 1707,
        "name": "Ravenna",
        "country_name": "Italy"
    },
    {
        "id": 1671,
        "name": "Reggio Calabria",
        "country_name": "Italy"
    },
    {
        "id": 1708,
        "name": "Reggio Emilia",
        "country_name": "Italy"
    },
    {
        "id": 1712,
        "name": "Rieti",
        "country_name": "Italy"
    },
    {
        "id": 1713,
        "name": "Rimini",
        "country_name": "Italy"
    },
    {
        "id": 1711,
        "name": "Rome",
        "country_name": "Italy"
    },
    {
        "id": 1719,
        "name": "Rovigo",
        "country_name": "Italy"
    },
    {
        "id": 1720,
        "name": "Salerno",
        "country_name": "Italy"
    },
    {
        "id": 1715,
        "name": "Sardinia",
        "country_name": "Italy"
    },
    {
        "id": 1722,
        "name": "Sassari",
        "country_name": "Italy"
    },
    {
        "id": 1732,
        "name": "Savona",
        "country_name": "Italy"
    },
    {
        "id": 1709,
        "name": "Sicily",
        "country_name": "Italy"
    },
    {
        "id": 1734,
        "name": "Siena",
        "country_name": "Italy"
    },
    {
        "id": 1667,
        "name": "Siracusa",
        "country_name": "Italy"
    },
    {
        "id": 1741,
        "name": "Sondrio",
        "country_name": "Italy"
    },
    {
        "id": 1730,
        "name": "South Sardinia",
        "country_name": "Italy"
    },
    {
        "id": 1767,
        "name": "South Tyrol",
        "country_name": "Italy"
    },
    {
        "id": 1743,
        "name": "Taranto",
        "country_name": "Italy"
    },
    {
        "id": 1752,
        "name": "Teramo",
        "country_name": "Italy"
    },
    {
        "id": 1755,
        "name": "Terni",
        "country_name": "Italy"
    },
    {
        "id": 1733,
        "name": "Trapani",
        "country_name": "Italy"
    },
    {
        "id": 1748,
        "name": "Trentino",
        "country_name": "Italy"
    },
    {
        "id": 1725,
        "name": "Trentino-South Tyrol",
        "country_name": "Italy"
    },
    {
        "id": 1762,
        "name": "Treviso",
        "country_name": "Italy"
    },
    {
        "id": 1763,
        "name": "Trieste",
        "country_name": "Italy"
    },
    {
        "id": 1710,
        "name": "Turin",
        "country_name": "Italy"
    },
    {
        "id": 1664,
        "name": "Tuscany",
        "country_name": "Italy"
    },
    {
        "id": 1764,
        "name": "Udine",
        "country_name": "Italy"
    },
    {
        "id": 1683,
        "name": "Umbria",
        "country_name": "Italy"
    },
    {
        "id": 1765,
        "name": "Varese",
        "country_name": "Italy"
    },
    {
        "id": 1753,
        "name": "Veneto",
        "country_name": "Italy"
    },
    {
        "id": 1673,
        "name": "Venice",
        "country_name": "Italy"
    },
    {
        "id": 1726,
        "name": "Verbano-Cusio-Ossola",
        "country_name": "Italy"
    },
    {
        "id": 1785,
        "name": "Vercelli",
        "country_name": "Italy"
    },
    {
        "id": 1736,
        "name": "Verona",
        "country_name": "Italy"
    },
    {
        "id": 1737,
        "name": "Vibo Valentia",
        "country_name": "Italy"
    },
    {
        "id": 1738,
        "name": "Vicenza",
        "country_name": "Italy"
    },
    {
        "id": 1735,
        "name": "Viterbo",
        "country_name": "Italy"
    },
    {
        "id": 3753,
        "name": "Clarendon Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3749,
        "name": "Hanover Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3748,
        "name": "Kingston Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3754,
        "name": "Manchester Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3752,
        "name": "Portland Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3751,
        "name": "Saint Andrew",
        "country_name": "Jamaica"
    },
    {
        "id": 3744,
        "name": "Saint Ann Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3746,
        "name": "Saint Catherine Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3743,
        "name": "Saint Elizabeth Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3745,
        "name": "Saint James Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3747,
        "name": "Saint Mary Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3750,
        "name": "Saint Thomas Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3755,
        "name": "Trelawny Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 3742,
        "name": "Westmoreland Parish",
        "country_name": "Jamaica"
    },
    {
        "id": 827,
        "name": "Aichi Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 829,
        "name": "Akita Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 839,
        "name": "Aomori Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 821,
        "name": "Chiba Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 865,
        "name": "Ehime Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 848,
        "name": "Fukui Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 861,
        "name": "Fukuoka Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 847,
        "name": "Fukushima Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 858,
        "name": "Gifu Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 862,
        "name": "Gunma Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 828,
        "name": "Hiroshima Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 832,
        "name": "Hokkaidō Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 831,
        "name": "Hyōgo Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 851,
        "name": "Ibaraki Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 830,
        "name": "Ishikawa Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 856,
        "name": "Iwate Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 864,
        "name": "Kagawa Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 840,
        "name": "Kagoshima Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 842,
        "name": "Kanagawa Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 4924,
        "name": "Kōchi Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 846,
        "name": "Kumamoto Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 834,
        "name": "Kyōto Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 833,
        "name": "Mie Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 857,
        "name": "Miyagi Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 855,
        "name": "Miyazaki Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 843,
        "name": "Nagano Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 849,
        "name": "Nagasaki Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 824,
        "name": "Nara Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 841,
        "name": "Niigata Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 822,
        "name": "Ōita Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 820,
        "name": "Okayama Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 853,
        "name": "Okinawa Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 859,
        "name": "Ōsaka Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 863,
        "name": "Saga Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 860,
        "name": "Saitama Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 845,
        "name": "Shiga Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 826,
        "name": "Shimane Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 825,
        "name": "Shizuoka Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 854,
        "name": "Tochigi Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 836,
        "name": "Tokushima Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 823,
        "name": "Tokyo",
        "country_name": "Japan"
    },
    {
        "id": 850,
        "name": "Tottori Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 838,
        "name": "Toyama Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 844,
        "name": "Wakayama Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 837,
        "name": "Yamagata Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 835,
        "name": "Yamaguchi Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 852,
        "name": "Yamanashi Prefecture",
        "country_name": "Japan"
    },
    {
        "id": 963,
        "name": "Ajloun Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 965,
        "name": "Amman Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 959,
        "name": "Aqaba Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 961,
        "name": "Balqa Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 960,
        "name": "Irbid Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 966,
        "name": "Jerash Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 956,
        "name": "Karak Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 964,
        "name": "Ma'an Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 958,
        "name": "Madaba Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 962,
        "name": "Mafraq Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 957,
        "name": "Tafilah Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 967,
        "name": "Zarqa Governorate",
        "country_name": "Jordan"
    },
    {
        "id": 145,
        "name": "Akmola Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 151,
        "name": "Aktobe Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 152,
        "name": "Almaty",
        "country_name": "Kazakhstan"
    },
    {
        "id": 143,
        "name": "Almaty Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 153,
        "name": "Atyrau Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 155,
        "name": "Baikonur",
        "country_name": "Kazakhstan"
    },
    {
        "id": 154,
        "name": "East Kazakhstan Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 147,
        "name": "Jambyl Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 150,
        "name": "Karaganda Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 157,
        "name": "Kostanay Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 142,
        "name": "Kyzylorda Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 141,
        "name": "Mangystau Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 144,
        "name": "North Kazakhstan Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 156,
        "name": "Nur-Sultan",
        "country_name": "Kazakhstan"
    },
    {
        "id": 146,
        "name": "Pavlodar Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 149,
        "name": "Turkestan Region",
        "country_name": "Kazakhstan"
    },
    {
        "id": 148,
        "name": "West Kazakhstan Province",
        "country_name": "Kazakhstan"
    },
    {
        "id": 181,
        "name": "Baringo",
        "country_name": "Kenya"
    },
    {
        "id": 210,
        "name": "Bomet",
        "country_name": "Kenya"
    },
    {
        "id": 168,
        "name": "Bungoma",
        "country_name": "Kenya"
    },
    {
        "id": 161,
        "name": "Busia",
        "country_name": "Kenya"
    },
    {
        "id": 201,
        "name": "Elgeyo-Marakwet",
        "country_name": "Kenya"
    },
    {
        "id": 163,
        "name": "Embu",
        "country_name": "Kenya"
    },
    {
        "id": 196,
        "name": "Garissa",
        "country_name": "Kenya"
    },
    {
        "id": 195,
        "name": "Homa Bay",
        "country_name": "Kenya"
    },
    {
        "id": 170,
        "name": "Isiolo",
        "country_name": "Kenya"
    },
    {
        "id": 197,
        "name": "Kajiado",
        "country_name": "Kenya"
    },
    {
        "id": 158,
        "name": "Kakamega",
        "country_name": "Kenya"
    },
    {
        "id": 193,
        "name": "Kericho",
        "country_name": "Kenya"
    },
    {
        "id": 199,
        "name": "Kiambu",
        "country_name": "Kenya"
    },
    {
        "id": 174,
        "name": "Kilifi",
        "country_name": "Kenya"
    },
    {
        "id": 167,
        "name": "Kirinyaga",
        "country_name": "Kenya"
    },
    {
        "id": 159,
        "name": "Kisii",
        "country_name": "Kenya"
    },
    {
        "id": 171,
        "name": "Kisumu",
        "country_name": "Kenya"
    },
    {
        "id": 211,
        "name": "Kitui",
        "country_name": "Kenya"
    },
    {
        "id": 173,
        "name": "Kwale",
        "country_name": "Kenya"
    },
    {
        "id": 164,
        "name": "Laikipia",
        "country_name": "Kenya"
    },
    {
        "id": 166,
        "name": "Lamu",
        "country_name": "Kenya"
    },
    {
        "id": 184,
        "name": "Machakos",
        "country_name": "Kenya"
    },
    {
        "id": 188,
        "name": "Makueni",
        "country_name": "Kenya"
    },
    {
        "id": 187,
        "name": "Mandera",
        "country_name": "Kenya"
    },
    {
        "id": 194,
        "name": "Marsabit",
        "country_name": "Kenya"
    },
    {
        "id": 198,
        "name": "Meru",
        "country_name": "Kenya"
    },
    {
        "id": 190,
        "name": "Migori",
        "country_name": "Kenya"
    },
    {
        "id": 200,
        "name": "Mombasa",
        "country_name": "Kenya"
    },
    {
        "id": 178,
        "name": "Murang'a",
        "country_name": "Kenya"
    },
    {
        "id": 191,
        "name": "Nairobi City",
        "country_name": "Kenya"
    },
    {
        "id": 203,
        "name": "Nakuru",
        "country_name": "Kenya"
    },
    {
        "id": 165,
        "name": "Nandi",
        "country_name": "Kenya"
    },
    {
        "id": 175,
        "name": "Narok",
        "country_name": "Kenya"
    },
    {
        "id": 209,
        "name": "Nyamira",
        "country_name": "Kenya"
    },
    {
        "id": 192,
        "name": "Nyandarua",
        "country_name": "Kenya"
    },
    {
        "id": 180,
        "name": "Nyeri",
        "country_name": "Kenya"
    },
    {
        "id": 207,
        "name": "Samburu",
        "country_name": "Kenya"
    },
    {
        "id": 186,
        "name": "Siaya",
        "country_name": "Kenya"
    },
    {
        "id": 176,
        "name": "Taita–Taveta",
        "country_name": "Kenya"
    },
    {
        "id": 205,
        "name": "Tana River",
        "country_name": "Kenya"
    },
    {
        "id": 185,
        "name": "Tharaka-Nithi",
        "country_name": "Kenya"
    },
    {
        "id": 183,
        "name": "Trans Nzoia",
        "country_name": "Kenya"
    },
    {
        "id": 206,
        "name": "Turkana",
        "country_name": "Kenya"
    },
    {
        "id": 169,
        "name": "Uasin Gishu",
        "country_name": "Kenya"
    },
    {
        "id": 202,
        "name": "Vihiga",
        "country_name": "Kenya"
    },
    {
        "id": 182,
        "name": "Wajir",
        "country_name": "Kenya"
    },
    {
        "id": 208,
        "name": "West Pokot",
        "country_name": "Kenya"
    },
    {
        "id": 1831,
        "name": "Gilbert Islands",
        "country_name": "Kiribati"
    },
    {
        "id": 1832,
        "name": "Line Islands",
        "country_name": "Kiribati"
    },
    {
        "id": 1830,
        "name": "Phoenix Islands",
        "country_name": "Kiribati"
    },
    {
        "id": 4876,
        "name": "Đakovica District (Gjakove)",
        "country_name": "Kosovo"
    },
    {
        "id": 4877,
        "name": "Gjilan District",
        "country_name": "Kosovo"
    },
    {
        "id": 4878,
        "name": "Kosovska Mitrovica District",
        "country_name": "Kosovo"
    },
    {
        "id": 3738,
        "name": "Peć District",
        "country_name": "Kosovo"
    },
    {
        "id": 4879,
        "name": "Pristina (Priştine)",
        "country_name": "Kosovo"
    },
    {
        "id": 3723,
        "name": "Prizren District",
        "country_name": "Kosovo"
    },
    {
        "id": 4874,
        "name": "Uroševac District (Ferizaj)",
        "country_name": "Kosovo"
    },
    {
        "id": 977,
        "name": "Al Ahmadi Governorate",
        "country_name": "Kuwait"
    },
    {
        "id": 975,
        "name": "Al Farwaniyah Governorate",
        "country_name": "Kuwait"
    },
    {
        "id": 972,
        "name": "Al Jahra Governorate",
        "country_name": "Kuwait"
    },
    {
        "id": 976,
        "name": "Capital Governorate",
        "country_name": "Kuwait"
    },
    {
        "id": 973,
        "name": "Hawalli Governorate",
        "country_name": "Kuwait"
    },
    {
        "id": 974,
        "name": "Mubarak Al-Kabeer Governorate",
        "country_name": "Kuwait"
    },
    {
        "id": 998,
        "name": "Batken Region",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 1001,
        "name": "Bishkek",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 1004,
        "name": "Chuy Region",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 1002,
        "name": "Issyk-Kul Region",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 1000,
        "name": "Jalal-Abad Region",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 999,
        "name": "Naryn Region",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 1003,
        "name": "Osh",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 1005,
        "name": "Osh Region",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 997,
        "name": "Talas Region",
        "country_name": "Kyrgyzstan"
    },
    {
        "id": 982,
        "name": "Attapeu Province",
        "country_name": "Laos"
    },
    {
        "id": 991,
        "name": "Bokeo Province",
        "country_name": "Laos"
    },
    {
        "id": 985,
        "name": "Bolikhamsai Province",
        "country_name": "Laos"
    },
    {
        "id": 996,
        "name": "Champasak Province",
        "country_name": "Laos"
    },
    {
        "id": 989,
        "name": "Houaphanh Province",
        "country_name": "Laos"
    },
    {
        "id": 986,
        "name": "Khammouane Province",
        "country_name": "Laos"
    },
    {
        "id": 992,
        "name": "Luang Namtha Province",
        "country_name": "Laos"
    },
    {
        "id": 978,
        "name": "Luang Prabang Province",
        "country_name": "Laos"
    },
    {
        "id": 988,
        "name": "Oudomxay Province",
        "country_name": "Laos"
    },
    {
        "id": 987,
        "name": "Phongsaly Province",
        "country_name": "Laos"
    },
    {
        "id": 993,
        "name": "Sainyabuli Province",
        "country_name": "Laos"
    },
    {
        "id": 981,
        "name": "Salavan Province",
        "country_name": "Laos"
    },
    {
        "id": 990,
        "name": "Savannakhet Province",
        "country_name": "Laos"
    },
    {
        "id": 984,
        "name": "Sekong Province",
        "country_name": "Laos"
    },
    {
        "id": 979,
        "name": "Vientiane Prefecture",
        "country_name": "Laos"
    },
    {
        "id": 980,
        "name": "Vientiane Province",
        "country_name": "Laos"
    },
    {
        "id": 994,
        "name": "Xaisomboun",
        "country_name": "Laos"
    },
    {
        "id": 983,
        "name": "Xaisomboun Province",
        "country_name": "Laos"
    },
    {
        "id": 995,
        "name": "Xiangkhouang Province",
        "country_name": "Laos"
    },
    {
        "id": 4445,
        "name": "Aglona Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4472,
        "name": "Aizkraukle Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4496,
        "name": "Aizpute Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4499,
        "name": "Aknīste Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4484,
        "name": "Aloja Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4485,
        "name": "Alsunga Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4487,
        "name": "Alūksne Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4497,
        "name": "Amata Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4457,
        "name": "Ape Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4481,
        "name": "Auce Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4427,
        "name": "Babīte Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4482,
        "name": "Baldone Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4498,
        "name": "Baltinava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4505,
        "name": "Balvi Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4465,
        "name": "Bauska Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4471,
        "name": "Beverīna Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4468,
        "name": "Brocēni Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4411,
        "name": "Burtnieki Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4454,
        "name": "Carnikava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4469,
        "name": "Cēsis Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4414,
        "name": "Cesvaine Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4410,
        "name": "Cibla Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4504,
        "name": "Dagda Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4463,
        "name": "Daugavpils",
        "country_name": "Latvia"
    },
    {
        "id": 4492,
        "name": "Daugavpils Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4437,
        "name": "Dobele Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4428,
        "name": "Dundaga Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4458,
        "name": "Durbe Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4448,
        "name": "Engure Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4444,
        "name": "Ērgļi Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4510,
        "name": "Garkalne Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4470,
        "name": "Grobiņa Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4400,
        "name": "Gulbene Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4441,
        "name": "Iecava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4511,
        "name": "Ikšķile Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4399,
        "name": "Ilūkste Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4449,
        "name": "Inčukalns Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4475,
        "name": "Jaunjelgava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4407,
        "name": "Jaunpiebalga Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4489,
        "name": "Jaunpils Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4464,
        "name": "Jēkabpils",
        "country_name": "Latvia"
    },
    {
        "id": 4438,
        "name": "Jēkabpils Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4500,
        "name": "Jelgava",
        "country_name": "Latvia"
    },
    {
        "id": 4424,
        "name": "Jelgava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4446,
        "name": "Jūrmala",
        "country_name": "Latvia"
    },
    {
        "id": 4420,
        "name": "Kandava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4453,
        "name": "Kārsava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4412,
        "name": "Ķegums Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4435,
        "name": "Ķekava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4495,
        "name": "Kocēni Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4452,
        "name": "Koknese Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4474,
        "name": "Krāslava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4422,
        "name": "Krimulda Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4413,
        "name": "Krustpils Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4490,
        "name": "Kuldīga Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4512,
        "name": "Lielvārde Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4460,
        "name": "Liepāja",
        "country_name": "Latvia"
    },
    {
        "id": 4488,
        "name": "Līgatne Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4418,
        "name": "Limbaži Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4401,
        "name": "Līvāni Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4419,
        "name": "Lubāna Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4501,
        "name": "Ludza Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4433,
        "name": "Madona Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4461,
        "name": "Mālpils Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4450,
        "name": "Mārupe Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4513,
        "name": "Mazsalaca Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4451,
        "name": "Mērsrags Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4398,
        "name": "Naukšēni Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4432,
        "name": "Nereta Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4436,
        "name": "Nīca Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4416,
        "name": "Ogre Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4417,
        "name": "Olaine Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4442,
        "name": "Ozolnieki Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4507,
        "name": "Pārgauja Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4467,
        "name": "Pāvilosta Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4405,
        "name": "Pļaviņas Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4483,
        "name": "Preiļi Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4429,
        "name": "Priekule Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4506,
        "name": "Priekuļi Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4479,
        "name": "Rauna Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4509,
        "name": "Rēzekne",
        "country_name": "Latvia"
    },
    {
        "id": 4455,
        "name": "Rēzekne Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4502,
        "name": "Riebiņi Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4491,
        "name": "Riga",
        "country_name": "Latvia"
    },
    {
        "id": 4440,
        "name": "Roja Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4493,
        "name": "Ropaži Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4503,
        "name": "Rucava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4423,
        "name": "Rugāji Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4426,
        "name": "Rūjiena Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4404,
        "name": "Rundāle Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4434,
        "name": "Sala Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4396,
        "name": "Salacgrīva Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4402,
        "name": "Salaspils Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4439,
        "name": "Saldus Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4443,
        "name": "Saulkrasti Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4408,
        "name": "Sēja Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4476,
        "name": "Sigulda Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4415,
        "name": "Skrīveri Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4447,
        "name": "Skrunda Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4462,
        "name": "Smiltene Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4478,
        "name": "Stopiņi Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4494,
        "name": "Strenči Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4459,
        "name": "Talsi Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4480,
        "name": "Tērvete Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4409,
        "name": "Tukums Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4508,
        "name": "Vaiņode Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4425,
        "name": "Valka Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4473,
        "name": "Valmiera",
        "country_name": "Latvia"
    },
    {
        "id": 4431,
        "name": "Varakļāni Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4406,
        "name": "Vārkava Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4466,
        "name": "Vecpiebalga Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4397,
        "name": "Vecumnieki Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4421,
        "name": "Ventspils",
        "country_name": "Latvia"
    },
    {
        "id": 4403,
        "name": "Ventspils Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4456,
        "name": "Viesīte Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4477,
        "name": "Viļaka Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4486,
        "name": "Viļāni Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 4430,
        "name": "Zilupe Municipality",
        "country_name": "Latvia"
    },
    {
        "id": 2285,
        "name": "Akkar Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 2283,
        "name": "Baalbek-Hermel Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 2286,
        "name": "Beirut Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 2287,
        "name": "Beqaa Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 2282,
        "name": "Mount Lebanon Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 2288,
        "name": "Nabatieh Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 2284,
        "name": "North Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 2281,
        "name": "South Governorate",
        "country_name": "Lebanon"
    },
    {
        "id": 3030,
        "name": "Berea District",
        "country_name": "Lesotho"
    },
    {
        "id": 3029,
        "name": "Butha-Buthe District",
        "country_name": "Lesotho"
    },
    {
        "id": 3026,
        "name": "Leribe District",
        "country_name": "Lesotho"
    },
    {
        "id": 3022,
        "name": "Mafeteng District",
        "country_name": "Lesotho"
    },
    {
        "id": 3028,
        "name": "Maseru District",
        "country_name": "Lesotho"
    },
    {
        "id": 3023,
        "name": "Mohale's Hoek District",
        "country_name": "Lesotho"
    },
    {
        "id": 3024,
        "name": "Mokhotlong District",
        "country_name": "Lesotho"
    },
    {
        "id": 3025,
        "name": "Qacha's Nek District",
        "country_name": "Lesotho"
    },
    {
        "id": 3027,
        "name": "Quthing District",
        "country_name": "Lesotho"
    },
    {
        "id": 3031,
        "name": "Thaba-Tseka District",
        "country_name": "Lesotho"
    },
    {
        "id": 3041,
        "name": "Bomi County",
        "country_name": "Liberia"
    },
    {
        "id": 3034,
        "name": "Bong County",
        "country_name": "Liberia"
    },
    {
        "id": 3044,
        "name": "Gbarpolu County",
        "country_name": "Liberia"
    },
    {
        "id": 3040,
        "name": "Grand Bassa County",
        "country_name": "Liberia"
    },
    {
        "id": 3036,
        "name": "Grand Cape Mount County",
        "country_name": "Liberia"
    },
    {
        "id": 3039,
        "name": "Grand Gedeh County",
        "country_name": "Liberia"
    },
    {
        "id": 3045,
        "name": "Grand Kru County",
        "country_name": "Liberia"
    },
    {
        "id": 3037,
        "name": "Lofa County",
        "country_name": "Liberia"
    },
    {
        "id": 3043,
        "name": "Margibi County",
        "country_name": "Liberia"
    },
    {
        "id": 3042,
        "name": "Maryland County",
        "country_name": "Liberia"
    },
    {
        "id": 3032,
        "name": "Montserrado County",
        "country_name": "Liberia"
    },
    {
        "id": 3046,
        "name": "Nimba",
        "country_name": "Liberia"
    },
    {
        "id": 3033,
        "name": "River Cess County",
        "country_name": "Liberia"
    },
    {
        "id": 3038,
        "name": "River Gee County",
        "country_name": "Liberia"
    },
    {
        "id": 3035,
        "name": "Sinoe County",
        "country_name": "Liberia"
    },
    {
        "id": 2964,
        "name": "Al Wahat District",
        "country_name": "Libya"
    },
    {
        "id": 2981,
        "name": "Benghazi",
        "country_name": "Libya"
    },
    {
        "id": 2966,
        "name": "Derna District",
        "country_name": "Libya"
    },
    {
        "id": 2969,
        "name": "Ghat District",
        "country_name": "Libya"
    },
    {
        "id": 2980,
        "name": "Jabal al Akhdar",
        "country_name": "Libya"
    },
    {
        "id": 2974,
        "name": "Jabal al Gharbi District",
        "country_name": "Libya"
    },
    {
        "id": 2979,
        "name": "Jafara",
        "country_name": "Libya"
    },
    {
        "id": 2970,
        "name": "Jufra",
        "country_name": "Libya"
    },
    {
        "id": 2972,
        "name": "Kufra District",
        "country_name": "Libya"
    },
    {
        "id": 2968,
        "name": "Marj District",
        "country_name": "Libya"
    },
    {
        "id": 2978,
        "name": "Misrata District",
        "country_name": "Libya"
    },
    {
        "id": 2961,
        "name": "Murqub",
        "country_name": "Libya"
    },
    {
        "id": 2967,
        "name": "Murzuq District",
        "country_name": "Libya"
    },
    {
        "id": 2976,
        "name": "Nalut District",
        "country_name": "Libya"
    },
    {
        "id": 2962,
        "name": "Nuqat al Khams",
        "country_name": "Libya"
    },
    {
        "id": 2965,
        "name": "Sabha District",
        "country_name": "Libya"
    },
    {
        "id": 2977,
        "name": "Sirte District",
        "country_name": "Libya"
    },
    {
        "id": 2971,
        "name": "Tripoli District",
        "country_name": "Libya"
    },
    {
        "id": 2973,
        "name": "Wadi al Hayaa District",
        "country_name": "Libya"
    },
    {
        "id": 2975,
        "name": "Wadi al Shatii District",
        "country_name": "Libya"
    },
    {
        "id": 2963,
        "name": "Zawiya District",
        "country_name": "Libya"
    },
    {
        "id": 458,
        "name": "Balzers",
        "country_name": "Liechtenstein"
    },
    {
        "id": 451,
        "name": "Eschen",
        "country_name": "Liechtenstein"
    },
    {
        "id": 457,
        "name": "Gamprin",
        "country_name": "Liechtenstein"
    },
    {
        "id": 455,
        "name": "Mauren",
        "country_name": "Liechtenstein"
    },
    {
        "id": 454,
        "name": "Planken",
        "country_name": "Liechtenstein"
    },
    {
        "id": 453,
        "name": "Ruggell",
        "country_name": "Liechtenstein"
    },
    {
        "id": 450,
        "name": "Schaan",
        "country_name": "Liechtenstein"
    },
    {
        "id": 449,
        "name": "Schellenberg",
        "country_name": "Liechtenstein"
    },
    {
        "id": 459,
        "name": "Triesen",
        "country_name": "Liechtenstein"
    },
    {
        "id": 456,
        "name": "Triesenberg",
        "country_name": "Liechtenstein"
    },
    {
        "id": 452,
        "name": "Vaduz",
        "country_name": "Liechtenstein"
    },
    {
        "id": 1561,
        "name": "Akmenė District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1605,
        "name": "Alytus City Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1574,
        "name": "Alytus County",
        "country_name": "Lithuania"
    },
    {
        "id": 1599,
        "name": "Alytus District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1603,
        "name": "Birštonas Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1566,
        "name": "Biržai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1579,
        "name": "Druskininkai municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1559,
        "name": "Elektrėnai municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1562,
        "name": "Ignalina District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1567,
        "name": "Jonava District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1581,
        "name": "Joniškis District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1555,
        "name": "Jurbarkas District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1583,
        "name": "Kaišiadorys District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1591,
        "name": "Kalvarija municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1580,
        "name": "Kaunas City Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1556,
        "name": "Kaunas County",
        "country_name": "Lithuania"
    },
    {
        "id": 1565,
        "name": "Kaunas District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1575,
        "name": "Kazlų Rūda municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1584,
        "name": "Kėdainiai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1618,
        "name": "Kelmė District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1597,
        "name": "Klaipeda City Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1600,
        "name": "Klaipėda County",
        "country_name": "Lithuania"
    },
    {
        "id": 1604,
        "name": "Klaipėda District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1571,
        "name": "Kretinga District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1585,
        "name": "Kupiškis District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1611,
        "name": "Lazdijai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1570,
        "name": "Marijampolė County",
        "country_name": "Lithuania"
    },
    {
        "id": 1610,
        "name": "Marijampolė Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1557,
        "name": "Mažeikiai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1582,
        "name": "Molėtai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1563,
        "name": "Neringa Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1612,
        "name": "Pagėgiai municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1595,
        "name": "Pakruojis District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1588,
        "name": "Palanga City Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1589,
        "name": "Panevėžys City Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1558,
        "name": "Panevėžys County",
        "country_name": "Lithuania"
    },
    {
        "id": 1614,
        "name": "Panevėžys District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1616,
        "name": "Pasvalys District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1553,
        "name": "Plungė District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1578,
        "name": "Prienai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1568,
        "name": "Radviliškis District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1587,
        "name": "Raseiniai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1590,
        "name": "Rietavas municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1615,
        "name": "Rokiškis District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1576,
        "name": "Šakiai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1577,
        "name": "Šalčininkai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1609,
        "name": "Šiauliai City Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1586,
        "name": "Šiauliai County",
        "country_name": "Lithuania"
    },
    {
        "id": 1554,
        "name": "Šiauliai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1613,
        "name": "Šilalė District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1607,
        "name": "Šilutė District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1594,
        "name": "Širvintos District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1617,
        "name": "Skuodas District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1560,
        "name": "Švenčionys District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1573,
        "name": "Tauragė County",
        "country_name": "Lithuania"
    },
    {
        "id": 1572,
        "name": "Tauragė District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1569,
        "name": "Telšiai County",
        "country_name": "Lithuania"
    },
    {
        "id": 1608,
        "name": "Telšiai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1593,
        "name": "Trakai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1596,
        "name": "Ukmergė District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1621,
        "name": "Utena County",
        "country_name": "Lithuania"
    },
    {
        "id": 1598,
        "name": "Utena District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1602,
        "name": "Varėna District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1620,
        "name": "Vilkaviškis District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1606,
        "name": "Vilnius City Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1601,
        "name": "Vilnius County",
        "country_name": "Lithuania"
    },
    {
        "id": 1592,
        "name": "Vilnius District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1564,
        "name": "Visaginas Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1619,
        "name": "Zarasai District Municipality",
        "country_name": "Lithuania"
    },
    {
        "id": 1518,
        "name": "Canton of Capellen",
        "country_name": "Luxembourg"
    },
    {
        "id": 1521,
        "name": "Canton of Clervaux",
        "country_name": "Luxembourg"
    },
    {
        "id": 1513,
        "name": "Canton of Diekirch",
        "country_name": "Luxembourg"
    },
    {
        "id": 1515,
        "name": "Canton of Echternach",
        "country_name": "Luxembourg"
    },
    {
        "id": 1517,
        "name": "Canton of Esch-sur-Alzette",
        "country_name": "Luxembourg"
    },
    {
        "id": 1525,
        "name": "Canton of Grevenmacher",
        "country_name": "Luxembourg"
    },
    {
        "id": 1527,
        "name": "Canton of Luxembourg",
        "country_name": "Luxembourg"
    },
    {
        "id": 1522,
        "name": "Canton of Mersch",
        "country_name": "Luxembourg"
    },
    {
        "id": 1516,
        "name": "Canton of Redange",
        "country_name": "Luxembourg"
    },
    {
        "id": 1519,
        "name": "Canton of Remich",
        "country_name": "Luxembourg"
    },
    {
        "id": 1523,
        "name": "Canton of Vianden",
        "country_name": "Luxembourg"
    },
    {
        "id": 1526,
        "name": "Canton of Wiltz",
        "country_name": "Luxembourg"
    },
    {
        "id": 1524,
        "name": "Diekirch District",
        "country_name": "Luxembourg"
    },
    {
        "id": 1520,
        "name": "Grevenmacher District",
        "country_name": "Luxembourg"
    },
    {
        "id": 1514,
        "name": "Luxembourg District",
        "country_name": "Luxembourg"
    },
    {
        "id": 703,
        "name": "Aerodrom Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 656,
        "name": "Aračinovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 716,
        "name": "Berovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 679,
        "name": "Bitola Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 649,
        "name": "Bogdanci Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 721,
        "name": "Bogovinje Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 652,
        "name": "Bosilovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 660,
        "name": "Brvenica Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 694,
        "name": "Butel Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 704,
        "name": "Čair Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 676,
        "name": "Čaška Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 702,
        "name": "Centar Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 720,
        "name": "Centar Župa Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 644,
        "name": "Češinovo-Obleševo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 715,
        "name": "Čučer-Sandevo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 645,
        "name": "Debarca Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 695,
        "name": "Delčevo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 687,
        "name": "Demir Hisar Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 655,
        "name": "Demir Kapija Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 697,
        "name": "Dojran Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 675,
        "name": "Dolneni Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 657,
        "name": "Drugovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 707,
        "name": "Gazi Baba Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 648,
        "name": "Gevgelija Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 722,
        "name": "Gjorče Petrov Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 693,
        "name": "Gostivar Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 708,
        "name": "Gradsko Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 684,
        "name": "Greater Skopje",
        "country_name": "Macedonia"
    },
    {
        "id": 690,
        "name": "Ilinden Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 678,
        "name": "Jegunovce Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 674,
        "name": "Karbinci",
        "country_name": "Macedonia"
    },
    {
        "id": 681,
        "name": "Karpoš Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 713,
        "name": "Kavadarci Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 688,
        "name": "Kičevo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 686,
        "name": "Kisela Voda Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 723,
        "name": "Kočani Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 665,
        "name": "Konče Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 641,
        "name": "Kratovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 677,
        "name": "Kriva Palanka Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 647,
        "name": "Krivogaštani Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 714,
        "name": "Kruševo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 683,
        "name": "Kumanovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 659,
        "name": "Lipkovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 705,
        "name": "Lozovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 701,
        "name": "Makedonska Kamenica Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 692,
        "name": "Makedonski Brod Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 669,
        "name": "Mavrovo and Rostuša Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 653,
        "name": "Mogila Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 664,
        "name": "Negotino Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 696,
        "name": "Novaci Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 718,
        "name": "Novo Selo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 699,
        "name": "Ohrid Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 682,
        "name": "Oslomej Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 685,
        "name": "Pehčevo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 698,
        "name": "Petrovec Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 670,
        "name": "Plasnica Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 666,
        "name": "Prilep Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 646,
        "name": "Probištip Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 709,
        "name": "Radoviš Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 717,
        "name": "Rankovce Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 712,
        "name": "Resen Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 691,
        "name": "Rosoman Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 667,
        "name": "Saraj Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 719,
        "name": "Sopište Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 643,
        "name": "Staro Nagoričane Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 661,
        "name": "Štip Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 700,
        "name": "Struga Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 710,
        "name": "Strumica Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 711,
        "name": "Studeničani Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 680,
        "name": "Šuto Orizari Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 640,
        "name": "Sveti Nikole Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 654,
        "name": "Tearce Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 663,
        "name": "Tetovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 671,
        "name": "Valandovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 658,
        "name": "Vasilevo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 651,
        "name": "Veles Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 662,
        "name": "Vevčani Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 672,
        "name": "Vinica Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 650,
        "name": "Vraneštica Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 689,
        "name": "Vrapčište Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 642,
        "name": "Zajas Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 706,
        "name": "Zelenikovo Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 668,
        "name": "Želino Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 673,
        "name": "Zrnovci Municipality",
        "country_name": "Macedonia"
    },
    {
        "id": 2951,
        "name": "Antananarivo Province",
        "country_name": "Madagascar"
    },
    {
        "id": 2950,
        "name": "Antsiranana Province",
        "country_name": "Madagascar"
    },
    {
        "id": 2948,
        "name": "Fianarantsoa Province",
        "country_name": "Madagascar"
    },
    {
        "id": 2953,
        "name": "Mahajanga Province",
        "country_name": "Madagascar"
    },
    {
        "id": 2952,
        "name": "Toamasina Province",
        "country_name": "Madagascar"
    },
    {
        "id": 2949,
        "name": "Toliara Province",
        "country_name": "Madagascar"
    },
    {
        "id": 3096,
        "name": "Balaka District",
        "country_name": "Malawi"
    },
    {
        "id": 3102,
        "name": "Blantyre District",
        "country_name": "Malawi"
    },
    {
        "id": 3092,
        "name": "Central Region",
        "country_name": "Malawi"
    },
    {
        "id": 3107,
        "name": "Chikwawa District",
        "country_name": "Malawi"
    },
    {
        "id": 3109,
        "name": "Chiradzulu District",
        "country_name": "Malawi"
    },
    {
        "id": 3087,
        "name": "Chitipa district",
        "country_name": "Malawi"
    },
    {
        "id": 3097,
        "name": "Dedza District",
        "country_name": "Malawi"
    },
    {
        "id": 3090,
        "name": "Dowa District",
        "country_name": "Malawi"
    },
    {
        "id": 3091,
        "name": "Karonga District",
        "country_name": "Malawi"
    },
    {
        "id": 3094,
        "name": "Kasungu District",
        "country_name": "Malawi"
    },
    {
        "id": 3093,
        "name": "Likoma District",
        "country_name": "Malawi"
    },
    {
        "id": 3101,
        "name": "Lilongwe District",
        "country_name": "Malawi"
    },
    {
        "id": 3082,
        "name": "Machinga District",
        "country_name": "Malawi"
    },
    {
        "id": 3110,
        "name": "Mangochi District",
        "country_name": "Malawi"
    },
    {
        "id": 3099,
        "name": "Mchinji District",
        "country_name": "Malawi"
    },
    {
        "id": 3103,
        "name": "Mulanje District",
        "country_name": "Malawi"
    },
    {
        "id": 3084,
        "name": "Mwanza District",
        "country_name": "Malawi"
    },
    {
        "id": 3104,
        "name": "Mzimba District",
        "country_name": "Malawi"
    },
    {
        "id": 3095,
        "name": "Nkhata Bay District",
        "country_name": "Malawi"
    },
    {
        "id": 3100,
        "name": "Nkhotakota District",
        "country_name": "Malawi"
    },
    {
        "id": 3105,
        "name": "Northern Region",
        "country_name": "Malawi"
    },
    {
        "id": 3085,
        "name": "Nsanje District",
        "country_name": "Malawi"
    },
    {
        "id": 3088,
        "name": "Ntcheu District",
        "country_name": "Malawi"
    },
    {
        "id": 3111,
        "name": "Ntchisi District",
        "country_name": "Malawi"
    },
    {
        "id": 3108,
        "name": "Phalombe District",
        "country_name": "Malawi"
    },
    {
        "id": 3089,
        "name": "Rumphi District",
        "country_name": "Malawi"
    },
    {
        "id": 3086,
        "name": "Salima District",
        "country_name": "Malawi"
    },
    {
        "id": 3106,
        "name": "Southern Region",
        "country_name": "Malawi"
    },
    {
        "id": 3098,
        "name": "Thyolo District",
        "country_name": "Malawi"
    },
    {
        "id": 3083,
        "name": "Zomba District",
        "country_name": "Malawi"
    },
    {
        "id": 1950,
        "name": "Johor",
        "country_name": "Malaysia"
    },
    {
        "id": 1947,
        "name": "Kedah",
        "country_name": "Malaysia"
    },
    {
        "id": 1946,
        "name": "Kelantan",
        "country_name": "Malaysia"
    },
    {
        "id": 1949,
        "name": "Kuala Lumpur",
        "country_name": "Malaysia"
    },
    {
        "id": 1935,
        "name": "Labuan",
        "country_name": "Malaysia"
    },
    {
        "id": 1941,
        "name": "Malacca",
        "country_name": "Malaysia"
    },
    {
        "id": 1948,
        "name": "Negeri Sembilan",
        "country_name": "Malaysia"
    },
    {
        "id": 1940,
        "name": "Pahang",
        "country_name": "Malaysia"
    },
    {
        "id": 1939,
        "name": "Penang",
        "country_name": "Malaysia"
    },
    {
        "id": 1943,
        "name": "Perak",
        "country_name": "Malaysia"
    },
    {
        "id": 1938,
        "name": "Perlis",
        "country_name": "Malaysia"
    },
    {
        "id": 1945,
        "name": "Putrajaya",
        "country_name": "Malaysia"
    },
    {
        "id": 1936,
        "name": "Sabah",
        "country_name": "Malaysia"
    },
    {
        "id": 1937,
        "name": "Sarawak",
        "country_name": "Malaysia"
    },
    {
        "id": 1944,
        "name": "Selangor",
        "country_name": "Malaysia"
    },
    {
        "id": 1942,
        "name": "Terengganu",
        "country_name": "Malaysia"
    },
    {
        "id": 2594,
        "name": "Addu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2587,
        "name": "Alif Alif Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2600,
        "name": "Alif Dhaal Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2604,
        "name": "Central Province",
        "country_name": "Maldives"
    },
    {
        "id": 2590,
        "name": "Dhaalu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2599,
        "name": "Faafu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2598,
        "name": "Gaafu Alif Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2603,
        "name": "Gaafu Dhaalu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2595,
        "name": "Gnaviyani Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2586,
        "name": "Haa Alif Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2597,
        "name": "Haa Dhaalu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2596,
        "name": "Kaafu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2601,
        "name": "Laamu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2607,
        "name": "Lhaviyani Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2609,
        "name": "Malé",
        "country_name": "Maldives"
    },
    {
        "id": 2608,
        "name": "Meemu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2592,
        "name": "Noonu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2589,
        "name": "North Central Province",
        "country_name": "Maldives"
    },
    {
        "id": 2588,
        "name": "North Province",
        "country_name": "Maldives"
    },
    {
        "id": 2602,
        "name": "Raa Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2585,
        "name": "Shaviyani Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2606,
        "name": "South Central Province",
        "country_name": "Maldives"
    },
    {
        "id": 2605,
        "name": "South Province",
        "country_name": "Maldives"
    },
    {
        "id": 2591,
        "name": "Thaa Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 2593,
        "name": "Upper South Province",
        "country_name": "Maldives"
    },
    {
        "id": 2584,
        "name": "Vaavu Atoll",
        "country_name": "Maldives"
    },
    {
        "id": 253,
        "name": "Bamako",
        "country_name": "Mali"
    },
    {
        "id": 258,
        "name": "Gao Region",
        "country_name": "Mali"
    },
    {
        "id": 252,
        "name": "Kayes Region",
        "country_name": "Mali"
    },
    {
        "id": 257,
        "name": "Kidal Region",
        "country_name": "Mali"
    },
    {
        "id": 250,
        "name": "Koulikoro Region",
        "country_name": "Mali"
    },
    {
        "id": 251,
        "name": "Ménaka Region",
        "country_name": "Mali"
    },
    {
        "id": 255,
        "name": "Mopti Region",
        "country_name": "Mali"
    },
    {
        "id": 249,
        "name": "Ségou Region",
        "country_name": "Mali"
    },
    {
        "id": 254,
        "name": "Sikasso Region",
        "country_name": "Mali"
    },
    {
        "id": 256,
        "name": "Taoudénit Region",
        "country_name": "Mali"
    },
    {
        "id": 248,
        "name": "Tombouctou Region",
        "country_name": "Mali"
    },
    {
        "id": 110,
        "name": "Attard",
        "country_name": "Malta"
    },
    {
        "id": 108,
        "name": "Balzan",
        "country_name": "Malta"
    },
    {
        "id": 107,
        "name": "Birgu",
        "country_name": "Malta"
    },
    {
        "id": 97,
        "name": "Birkirkara",
        "country_name": "Malta"
    },
    {
        "id": 88,
        "name": "Birżebbuġa",
        "country_name": "Malta"
    },
    {
        "id": 138,
        "name": "Cospicua",
        "country_name": "Malta"
    },
    {
        "id": 117,
        "name": "Dingli",
        "country_name": "Malta"
    },
    {
        "id": 129,
        "name": "Fgura",
        "country_name": "Malta"
    },
    {
        "id": 84,
        "name": "Floriana",
        "country_name": "Malta"
    },
    {
        "id": 134,
        "name": "Fontana",
        "country_name": "Malta"
    },
    {
        "id": 130,
        "name": "Għajnsielem",
        "country_name": "Malta"
    },
    {
        "id": 92,
        "name": "Għarb",
        "country_name": "Malta"
    },
    {
        "id": 120,
        "name": "Għargħur",
        "country_name": "Malta"
    },
    {
        "id": 106,
        "name": "Għasri",
        "country_name": "Malta"
    },
    {
        "id": 124,
        "name": "Għaxaq",
        "country_name": "Malta"
    },
    {
        "id": 118,
        "name": "Gudja",
        "country_name": "Malta"
    },
    {
        "id": 113,
        "name": "Gżira",
        "country_name": "Malta"
    },
    {
        "id": 105,
        "name": "Ħamrun",
        "country_name": "Malta"
    },
    {
        "id": 93,
        "name": "Iklin",
        "country_name": "Malta"
    },
    {
        "id": 99,
        "name": "Kalkara",
        "country_name": "Malta"
    },
    {
        "id": 91,
        "name": "Kerċem",
        "country_name": "Malta"
    },
    {
        "id": 82,
        "name": "Kirkop",
        "country_name": "Malta"
    },
    {
        "id": 126,
        "name": "Lija",
        "country_name": "Malta"
    },
    {
        "id": 77,
        "name": "Luqa",
        "country_name": "Malta"
    },
    {
        "id": 128,
        "name": "Marsa",
        "country_name": "Malta"
    },
    {
        "id": 137,
        "name": "Marsaskala",
        "country_name": "Malta"
    },
    {
        "id": 78,
        "name": "Marsaxlokk",
        "country_name": "Malta"
    },
    {
        "id": 89,
        "name": "Mdina",
        "country_name": "Malta"
    },
    {
        "id": 102,
        "name": "Mellieħa",
        "country_name": "Malta"
    },
    {
        "id": 109,
        "name": "Mġarr",
        "country_name": "Malta"
    },
    {
        "id": 140,
        "name": "Mosta",
        "country_name": "Malta"
    },
    {
        "id": 74,
        "name": "Mqabba",
        "country_name": "Malta"
    },
    {
        "id": 96,
        "name": "Msida",
        "country_name": "Malta"
    },
    {
        "id": 131,
        "name": "Mtarfa",
        "country_name": "Malta"
    },
    {
        "id": 132,
        "name": "Munxar",
        "country_name": "Malta"
    },
    {
        "id": 133,
        "name": "Nadur",
        "country_name": "Malta"
    },
    {
        "id": 112,
        "name": "Naxxar",
        "country_name": "Malta"
    },
    {
        "id": 115,
        "name": "Paola",
        "country_name": "Malta"
    },
    {
        "id": 125,
        "name": "Pembroke",
        "country_name": "Malta"
    },
    {
        "id": 127,
        "name": "Pietà",
        "country_name": "Malta"
    },
    {
        "id": 79,
        "name": "Qala",
        "country_name": "Malta"
    },
    {
        "id": 119,
        "name": "Qormi",
        "country_name": "Malta"
    },
    {
        "id": 111,
        "name": "Qrendi",
        "country_name": "Malta"
    },
    {
        "id": 83,
        "name": "Rabat",
        "country_name": "Malta"
    },
    {
        "id": 87,
        "name": "Saint Lawrence",
        "country_name": "Malta"
    },
    {
        "id": 75,
        "name": "San Ġwann",
        "country_name": "Malta"
    },
    {
        "id": 116,
        "name": "Sannat",
        "country_name": "Malta"
    },
    {
        "id": 94,
        "name": "Santa Luċija",
        "country_name": "Malta"
    },
    {
        "id": 90,
        "name": "Santa Venera",
        "country_name": "Malta"
    },
    {
        "id": 136,
        "name": "Senglea",
        "country_name": "Malta"
    },
    {
        "id": 98,
        "name": "Siġġiewi",
        "country_name": "Malta"
    },
    {
        "id": 104,
        "name": "Sliema",
        "country_name": "Malta"
    },
    {
        "id": 100,
        "name": "St. Julian's",
        "country_name": "Malta"
    },
    {
        "id": 139,
        "name": "St. Paul's Bay",
        "country_name": "Malta"
    },
    {
        "id": 86,
        "name": "Swieqi",
        "country_name": "Malta"
    },
    {
        "id": 122,
        "name": "Ta' Xbiex",
        "country_name": "Malta"
    },
    {
        "id": 103,
        "name": "Tarxien",
        "country_name": "Malta"
    },
    {
        "id": 95,
        "name": "Valletta",
        "country_name": "Malta"
    },
    {
        "id": 101,
        "name": "Victoria",
        "country_name": "Malta"
    },
    {
        "id": 114,
        "name": "Xagħra",
        "country_name": "Malta"
    },
    {
        "id": 121,
        "name": "Xewkija",
        "country_name": "Malta"
    },
    {
        "id": 81,
        "name": "Xgħajra",
        "country_name": "Malta"
    },
    {
        "id": 123,
        "name": "Żabbar",
        "country_name": "Malta"
    },
    {
        "id": 85,
        "name": "Żebbuġ Gozo",
        "country_name": "Malta"
    },
    {
        "id": 80,
        "name": "Żebbuġ Malta",
        "country_name": "Malta"
    },
    {
        "id": 135,
        "name": "Żejtun",
        "country_name": "Malta"
    },
    {
        "id": 76,
        "name": "Żurrieq",
        "country_name": "Malta"
    },
    {
        "id": 2574,
        "name": "Ralik Chain",
        "country_name": "Marshall Islands"
    },
    {
        "id": 2573,
        "name": "Ratak Chain",
        "country_name": "Marshall Islands"
    },
    {
        "id": 3344,
        "name": "Adrar",
        "country_name": "Mauritania"
    },
    {
        "id": 3349,
        "name": "Assaba",
        "country_name": "Mauritania"
    },
    {
        "id": 3339,
        "name": "Brakna",
        "country_name": "Mauritania"
    },
    {
        "id": 3346,
        "name": "Dakhlet Nouadhibou",
        "country_name": "Mauritania"
    },
    {
        "id": 3341,
        "name": "Gorgol",
        "country_name": "Mauritania"
    },
    {
        "id": 3350,
        "name": "Guidimaka",
        "country_name": "Mauritania"
    },
    {
        "id": 3338,
        "name": "Hodh Ech Chargui",
        "country_name": "Mauritania"
    },
    {
        "id": 3351,
        "name": "Hodh El Gharbi",
        "country_name": "Mauritania"
    },
    {
        "id": 3342,
        "name": "Inchiri",
        "country_name": "Mauritania"
    },
    {
        "id": 3343,
        "name": "Nouakchott-Nord",
        "country_name": "Mauritania"
    },
    {
        "id": 3352,
        "name": "Nouakchott-Ouest",
        "country_name": "Mauritania"
    },
    {
        "id": 3347,
        "name": "Nouakchott-Sud",
        "country_name": "Mauritania"
    },
    {
        "id": 3345,
        "name": "Tagant",
        "country_name": "Mauritania"
    },
    {
        "id": 3340,
        "name": "Tiris Zemmour",
        "country_name": "Mauritania"
    },
    {
        "id": 3348,
        "name": "Trarza",
        "country_name": "Mauritania"
    },
    {
        "id": 3248,
        "name": "Agaléga",
        "country_name": "Mauritius"
    },
    {
        "id": 3262,
        "name": "Beau Bassin-Rose Hill",
        "country_name": "Mauritius"
    },
    {
        "id": 3251,
        "name": "Cargados Carajos",
        "country_name": "Mauritius"
    },
    {
        "id": 3255,
        "name": "Curepipe",
        "country_name": "Mauritius"
    },
    {
        "id": 3254,
        "name": "Flacq District",
        "country_name": "Mauritius"
    },
    {
        "id": 3264,
        "name": "Grand Port District",
        "country_name": "Mauritius"
    },
    {
        "id": 3253,
        "name": "Moka District",
        "country_name": "Mauritius"
    },
    {
        "id": 3250,
        "name": "Pamplemousses District",
        "country_name": "Mauritius"
    },
    {
        "id": 3263,
        "name": "Plaines Wilhems District",
        "country_name": "Mauritius"
    },
    {
        "id": 3256,
        "name": "Port Louis",
        "country_name": "Mauritius"
    },
    {
        "id": 3260,
        "name": "Port Louis District",
        "country_name": "Mauritius"
    },
    {
        "id": 3258,
        "name": "Quatre Bornes",
        "country_name": "Mauritius"
    },
    {
        "id": 3261,
        "name": "Rivière du Rempart District",
        "country_name": "Mauritius"
    },
    {
        "id": 3259,
        "name": "Rivière Noire District",
        "country_name": "Mauritius"
    },
    {
        "id": 3249,
        "name": "Rodrigues",
        "country_name": "Mauritius"
    },
    {
        "id": 3257,
        "name": "Savanne District",
        "country_name": "Mauritius"
    },
    {
        "id": 3252,
        "name": "Vacoas-Phoenix",
        "country_name": "Mauritius"
    },
    {
        "id": 3456,
        "name": "Aguascalientes",
        "country_name": "Mexico"
    },
    {
        "id": 3457,
        "name": "Baja California",
        "country_name": "Mexico"
    },
    {
        "id": 3460,
        "name": "Baja California Sur",
        "country_name": "Mexico"
    },
    {
        "id": 3475,
        "name": "Campeche",
        "country_name": "Mexico"
    },
    {
        "id": 3451,
        "name": "Chiapas",
        "country_name": "Mexico"
    },
    {
        "id": 3447,
        "name": "Chihuahua",
        "country_name": "Mexico"
    },
    {
        "id": 3473,
        "name": "Ciudad de México",
        "country_name": "Mexico"
    },
    {
        "id": 3471,
        "name": "Coahuila de Zaragoza",
        "country_name": "Mexico"
    },
    {
        "id": 3472,
        "name": "Colima",
        "country_name": "Mexico"
    },
    {
        "id": 3453,
        "name": "Durango",
        "country_name": "Mexico"
    },
    {
        "id": 3450,
        "name": "Estado de México",
        "country_name": "Mexico"
    },
    {
        "id": 3469,
        "name": "Guanajuato",
        "country_name": "Mexico"
    },
    {
        "id": 3459,
        "name": "Guerrero",
        "country_name": "Mexico"
    },
    {
        "id": 3470,
        "name": "Hidalgo",
        "country_name": "Mexico"
    },
    {
        "id": 4857,
        "name": "Jalisco",
        "country_name": "Mexico"
    },
    {
        "id": 3474,
        "name": "Michoacán de Ocampo",
        "country_name": "Mexico"
    },
    {
        "id": 3465,
        "name": "Morelos",
        "country_name": "Mexico"
    },
    {
        "id": 3477,
        "name": "Nayarit",
        "country_name": "Mexico"
    },
    {
        "id": 3452,
        "name": "Nuevo León",
        "country_name": "Mexico"
    },
    {
        "id": 3448,
        "name": "Oaxaca",
        "country_name": "Mexico"
    },
    {
        "id": 3476,
        "name": "Puebla",
        "country_name": "Mexico"
    },
    {
        "id": 3455,
        "name": "Querétaro",
        "country_name": "Mexico"
    },
    {
        "id": 3467,
        "name": "Quintana Roo",
        "country_name": "Mexico"
    },
    {
        "id": 3461,
        "name": "San Luis Potosí",
        "country_name": "Mexico"
    },
    {
        "id": 3449,
        "name": "Sinaloa",
        "country_name": "Mexico"
    },
    {
        "id": 3468,
        "name": "Sonora",
        "country_name": "Mexico"
    },
    {
        "id": 3454,
        "name": "Tabasco",
        "country_name": "Mexico"
    },
    {
        "id": 3463,
        "name": "Tamaulipas",
        "country_name": "Mexico"
    },
    {
        "id": 3458,
        "name": "Tlaxcala",
        "country_name": "Mexico"
    },
    {
        "id": 3464,
        "name": "Veracruz de Ignacio de la Llave",
        "country_name": "Mexico"
    },
    {
        "id": 3466,
        "name": "Yucatán",
        "country_name": "Mexico"
    },
    {
        "id": 3462,
        "name": "Zacatecas",
        "country_name": "Mexico"
    },
    {
        "id": 2580,
        "name": "Chuuk State",
        "country_name": "Micronesia"
    },
    {
        "id": 2583,
        "name": "Kosrae State",
        "country_name": "Micronesia"
    },
    {
        "id": 2581,
        "name": "Pohnpei State",
        "country_name": "Micronesia"
    },
    {
        "id": 2582,
        "name": "Yap State",
        "country_name": "Micronesia"
    },
    {
        "id": 4368,
        "name": "Anenii Noi District",
        "country_name": "Moldova"
    },
    {
        "id": 4393,
        "name": "Bălți Municipality",
        "country_name": "Moldova"
    },
    {
        "id": 4379,
        "name": "Basarabeasca District",
        "country_name": "Moldova"
    },
    {
        "id": 4362,
        "name": "Bender Municipality",
        "country_name": "Moldova"
    },
    {
        "id": 4375,
        "name": "Briceni District",
        "country_name": "Moldova"
    },
    {
        "id": 4391,
        "name": "Cahul District",
        "country_name": "Moldova"
    },
    {
        "id": 4366,
        "name": "Călărași District",
        "country_name": "Moldova"
    },
    {
        "id": 4380,
        "name": "Cantemir District",
        "country_name": "Moldova"
    },
    {
        "id": 4365,
        "name": "Căușeni District",
        "country_name": "Moldova"
    },
    {
        "id": 4373,
        "name": "Chișinău Municipality",
        "country_name": "Moldova"
    },
    {
        "id": 4360,
        "name": "Cimișlia District",
        "country_name": "Moldova"
    },
    {
        "id": 4390,
        "name": "Criuleni District",
        "country_name": "Moldova"
    },
    {
        "id": 4384,
        "name": "Dondușeni District",
        "country_name": "Moldova"
    },
    {
        "id": 4392,
        "name": "Drochia District",
        "country_name": "Moldova"
    },
    {
        "id": 4383,
        "name": "Dubăsari District",
        "country_name": "Moldova"
    },
    {
        "id": 4387,
        "name": "Edineț District",
        "country_name": "Moldova"
    },
    {
        "id": 4381,
        "name": "Fălești District",
        "country_name": "Moldova"
    },
    {
        "id": 4370,
        "name": "Florești District",
        "country_name": "Moldova"
    },
    {
        "id": 4385,
        "name": "Gagauzia",
        "country_name": "Moldova"
    },
    {
        "id": 4367,
        "name": "Glodeni District",
        "country_name": "Moldova"
    },
    {
        "id": 4382,
        "name": "Hîncești District",
        "country_name": "Moldova"
    },
    {
        "id": 4369,
        "name": "Ialoveni District",
        "country_name": "Moldova"
    },
    {
        "id": 4363,
        "name": "Nisporeni District",
        "country_name": "Moldova"
    },
    {
        "id": 4389,
        "name": "Ocnița District",
        "country_name": "Moldova"
    },
    {
        "id": 4361,
        "name": "Orhei District",
        "country_name": "Moldova"
    },
    {
        "id": 4394,
        "name": "Rezina District",
        "country_name": "Moldova"
    },
    {
        "id": 4376,
        "name": "Rîșcani District",
        "country_name": "Moldova"
    },
    {
        "id": 4364,
        "name": "Sîngerei District",
        "country_name": "Moldova"
    },
    {
        "id": 4388,
        "name": "Șoldănești District",
        "country_name": "Moldova"
    },
    {
        "id": 4374,
        "name": "Soroca District",
        "country_name": "Moldova"
    },
    {
        "id": 4378,
        "name": "Ștefan Vodă District",
        "country_name": "Moldova"
    },
    {
        "id": 4377,
        "name": "Strășeni District",
        "country_name": "Moldova"
    },
    {
        "id": 4372,
        "name": "Taraclia District",
        "country_name": "Moldova"
    },
    {
        "id": 4371,
        "name": "Telenești District",
        "country_name": "Moldova"
    },
    {
        "id": 4395,
        "name": "Transnistria autonomous territorial unit",
        "country_name": "Moldova"
    },
    {
        "id": 4386,
        "name": "Ungheni District",
        "country_name": "Moldova"
    },
    {
        "id": 4917,
        "name": "La Colle",
        "country_name": "Monaco"
    },
    {
        "id": 4918,
        "name": "La Condamine",
        "country_name": "Monaco"
    },
    {
        "id": 4919,
        "name": "Moneghetti",
        "country_name": "Monaco"
    },
    {
        "id": 1973,
        "name": "Arkhangai Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1969,
        "name": "Bayan-Ölgii Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1976,
        "name": "Bayankhongor Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1961,
        "name": "Bulgan Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1962,
        "name": "Darkhan-Uul Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1963,
        "name": "Dornod Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1981,
        "name": "Dornogovi Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1970,
        "name": "Dundgovi Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1972,
        "name": "Govi-Altai Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1978,
        "name": "Govisümber Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1974,
        "name": "Khentii Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1964,
        "name": "Khovd Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1975,
        "name": "Khövsgöl Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1967,
        "name": "Ömnögovi Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1966,
        "name": "Orkhon Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1965,
        "name": "Övörkhangai Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1980,
        "name": "Selenge Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1977,
        "name": "Sükhbaatar Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1968,
        "name": "Töv Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1971,
        "name": "Uvs Province",
        "country_name": "Mongolia"
    },
    {
        "id": 1979,
        "name": "Zavkhan Province",
        "country_name": "Mongolia"
    },
    {
        "id": 23,
        "name": "Andrijevica Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 13,
        "name": "Bar Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 21,
        "name": "Berane Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 25,
        "name": "Bijelo Polje Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 30,
        "name": "Budva Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 14,
        "name": "Danilovgrad Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 24,
        "name": "Gusinje Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 31,
        "name": "Kolašin Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 26,
        "name": "Kotor Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 22,
        "name": "Mojkovac Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 17,
        "name": "Nikšić Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 28,
        "name": "Old Royal Capital Cetinje",
        "country_name": "Montenegro"
    },
    {
        "id": 12,
        "name": "Petnjica Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 19,
        "name": "Plav Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 20,
        "name": "Pljevlja Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 16,
        "name": "Plužine Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 27,
        "name": "Podgorica Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 15,
        "name": "Rožaje Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 18,
        "name": "Šavnik Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 29,
        "name": "Tivat Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 33,
        "name": "Ulcinj Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 32,
        "name": "Žabljak Municipality",
        "country_name": "Montenegro"
    },
    {
        "id": 4928,
        "name": "Agadir-Ida-Ou-Tanane",
        "country_name": "Morocco"
    },
    {
        "id": 3320,
        "name": "Al Haouz",
        "country_name": "Morocco"
    },
    {
        "id": 3267,
        "name": "Al Hoceïma",
        "country_name": "Morocco"
    },
    {
        "id": 3266,
        "name": "Aousserd (EH)",
        "country_name": "Morocco"
    },
    {
        "id": 3297,
        "name": "Assa-Zag (EH-partial)",
        "country_name": "Morocco"
    },
    {
        "id": 3321,
        "name": "Azilal",
        "country_name": "Morocco"
    },
    {
        "id": 3272,
        "name": "Béni Mellal",
        "country_name": "Morocco"
    },
    {
        "id": 3278,
        "name": "Béni Mellal-Khénifra",
        "country_name": "Morocco"
    },
    {
        "id": 3304,
        "name": "Benslimane",
        "country_name": "Morocco"
    },
    {
        "id": 3285,
        "name": "Berkane",
        "country_name": "Morocco"
    },
    {
        "id": 4929,
        "name": "Berrechid",
        "country_name": "Morocco"
    },
    {
        "id": 3275,
        "name": "Boujdour (EH)",
        "country_name": "Morocco"
    },
    {
        "id": 3270,
        "name": "Boulemane",
        "country_name": "Morocco"
    },
    {
        "id": 4930,
        "name": "Casablanca",
        "country_name": "Morocco"
    },
    {
        "id": 3303,
        "name": "Casablanca-Settat",
        "country_name": "Morocco"
    },
    {
        "id": 3310,
        "name": "Chefchaouen",
        "country_name": "Morocco"
    },
    {
        "id": 3274,
        "name": "Chichaoua",
        "country_name": "Morocco"
    },
    {
        "id": 3302,
        "name": "Chtouka-Ait Baha",
        "country_name": "Morocco"
    },
    {
        "id": 3306,
        "name": "Dakhla-Oued Ed-Dahab (EH)",
        "country_name": "Morocco"
    },
    {
        "id": 3290,
        "name": "Drâa-Tafilalet",
        "country_name": "Morocco"
    },
    {
        "id": 4931,
        "name": "Driouch",
        "country_name": "Morocco"
    },
    {
        "id": 3291,
        "name": "El Hajeb",
        "country_name": "Morocco"
    },
    {
        "id": 3280,
        "name": "El Jadida",
        "country_name": "Morocco"
    },
    {
        "id": 3309,
        "name": "El Kelâa des Sraghna",
        "country_name": "Morocco"
    },
    {
        "id": 3299,
        "name": "Errachidia",
        "country_name": "Morocco"
    },
    {
        "id": 3292,
        "name": "Es-Semara (EH-partial)",
        "country_name": "Morocco"
    },
    {
        "id": 3316,
        "name": "Essaouira",
        "country_name": "Morocco"
    },
    {
        "id": 3300,
        "name": "Fahs-Anjra",
        "country_name": "Morocco"
    },
    {
        "id": 4932,
        "name": "Fès",
        "country_name": "Morocco"
    },
    {
        "id": 3313,
        "name": "Fès-Meknès",
        "country_name": "Morocco"
    },
    {
        "id": 3301,
        "name": "Figuig",
        "country_name": "Morocco"
    },
    {
        "id": 4933,
        "name": "Fquih Ben Salah",
        "country_name": "Morocco"
    },
    {
        "id": 3265,
        "name": "Guelmim",
        "country_name": "Morocco"
    },
    {
        "id": 3305,
        "name": "Guelmim-Oued Noun (EH-partial)",
        "country_name": "Morocco"
    },
    {
        "id": 4934,
        "name": "Guercif",
        "country_name": "Morocco"
    },
    {
        "id": 3325,
        "name": "Ifrane",
        "country_name": "Morocco"
    },
    {
        "id": 3294,
        "name": "Inezgane-Ait Melloul",
        "country_name": "Morocco"
    },
    {
        "id": 3307,
        "name": "Jerada",
        "country_name": "Morocco"
    },
    {
        "id": 3308,
        "name": "Kénitra",
        "country_name": "Morocco"
    },
    {
        "id": 3276,
        "name": "Khémisset",
        "country_name": "Morocco"
    },
    {
        "id": 3317,
        "name": "Khénifra",
        "country_name": "Morocco"
    },
    {
        "id": 3326,
        "name": "Khouribga",
        "country_name": "Morocco"
    },
    {
        "id": 3271,
        "name": "L'Oriental",
        "country_name": "Morocco"
    },
    {
        "id": 3293,
        "name": "Laâyoune (EH)",
        "country_name": "Morocco"
    },
    {
        "id": 3298,
        "name": "Laâyoune-Sakia El Hamra (EH-partial)",
        "country_name": "Morocco"
    },
    {
        "id": 3268,
        "name": "Larache",
        "country_name": "Morocco"
    },
    {
        "id": 4936,
        "name": "M’diq-Fnideq",
        "country_name": "Morocco"
    },
    {
        "id": 4935,
        "name": "Marrakech",
        "country_name": "Morocco"
    },
    {
        "id": 3288,
        "name": "Marrakesh-Safi",
        "country_name": "Morocco"
    },
    {
        "id": 3284,
        "name": "Médiouna",
        "country_name": "Morocco"
    },
    {
        "id": 4937,
        "name": "Meknès",
        "country_name": "Morocco"
    },
    {
        "id": 4938,
        "name": "Midelt",
        "country_name": "Morocco"
    },
    {
        "id": 4939,
        "name": "Mohammadia",
        "country_name": "Morocco"
    },
    {
        "id": 3315,
        "name": "Moulay Yacoub",
        "country_name": "Morocco"
    },
    {
        "id": 3281,
        "name": "Nador",
        "country_name": "Morocco"
    },
    {
        "id": 3287,
        "name": "Nouaceur",
        "country_name": "Morocco"
    },
    {
        "id": 3269,
        "name": "Ouarzazate",
        "country_name": "Morocco"
    },
    {
        "id": 3319,
        "name": "Oued Ed-Dahab (EH)",
        "country_name": "Morocco"
    },
    {
        "id": 4941,
        "name": "Ouezzane",
        "country_name": "Morocco"
    },
    {
        "id": 4940,
        "name": "Oujda-Angad",
        "country_name": "Morocco"
    },
    {
        "id": 4942,
        "name": "Rabat",
        "country_name": "Morocco"
    },
    {
        "id": 4927,
        "name": "Rabat-Salé-Kénitra",
        "country_name": "Morocco"
    },
    {
        "id": 4943,
        "name": "Rehamna",
        "country_name": "Morocco"
    },
    {
        "id": 3311,
        "name": "Safi",
        "country_name": "Morocco"
    },
    {
        "id": 4944,
        "name": "Salé",
        "country_name": "Morocco"
    },
    {
        "id": 3289,
        "name": "Sefrou",
        "country_name": "Morocco"
    },
    {
        "id": 3282,
        "name": "Settat",
        "country_name": "Morocco"
    },
    {
        "id": 4945,
        "name": "Sidi Bennour",
        "country_name": "Morocco"
    },
    {
        "id": 4946,
        "name": "Sidi Ifni",
        "country_name": "Morocco"
    },
    {
        "id": 3279,
        "name": "Sidi Kacem",
        "country_name": "Morocco"
    },
    {
        "id": 4952,
        "name": "Sidi Slimane",
        "country_name": "Morocco"
    },
    {
        "id": 4947,
        "name": "Skhirate-Témara",
        "country_name": "Morocco"
    },
    {
        "id": 3295,
        "name": "Souss-Massa",
        "country_name": "Morocco"
    },
    {
        "id": 3286,
        "name": "Tan-Tan (EH-partial)",
        "country_name": "Morocco"
    },
    {
        "id": 4950,
        "name": "Tanger-Assilah",
        "country_name": "Morocco"
    },
    {
        "id": 3324,
        "name": "Tanger-Tétouan-Al Hoceïma",
        "country_name": "Morocco"
    },
    {
        "id": 3323,
        "name": "Taounate",
        "country_name": "Morocco"
    },
    {
        "id": 3322,
        "name": "Taourirt",
        "country_name": "Morocco"
    },
    {
        "id": 4948,
        "name": "Tarfaya (EH-partial)",
        "country_name": "Morocco"
    },
    {
        "id": 3314,
        "name": "Taroudannt",
        "country_name": "Morocco"
    },
    {
        "id": 3312,
        "name": "Tata",
        "country_name": "Morocco"
    },
    {
        "id": 3296,
        "name": "Taza",
        "country_name": "Morocco"
    },
    {
        "id": 3318,
        "name": "Tétouan",
        "country_name": "Morocco"
    },
    {
        "id": 4949,
        "name": "Tinghir",
        "country_name": "Morocco"
    },
    {
        "id": 3277,
        "name": "Tiznit",
        "country_name": "Morocco"
    },
    {
        "id": 4951,
        "name": "Youssoufia",
        "country_name": "Morocco"
    },
    {
        "id": 3283,
        "name": "Zagora",
        "country_name": "Morocco"
    },
    {
        "id": 3327,
        "name": "Cabo Delgado Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3329,
        "name": "Gaza Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3330,
        "name": "Inhambane Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3337,
        "name": "Manica Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3335,
        "name": "Maputo",
        "country_name": "Mozambique"
    },
    {
        "id": 3332,
        "name": "Maputo Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3336,
        "name": "Nampula Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3333,
        "name": "Niassa Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3331,
        "name": "Sofala Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3334,
        "name": "Tete Province",
        "country_name": "Mozambique"
    },
    {
        "id": 3328,
        "name": "Zambezia Province",
        "country_name": "Mozambique"
    },
    {
        "id": 2142,
        "name": "Ayeyarwady Region",
        "country_name": "Myanmar"
    },
    {
        "id": 2141,
        "name": "Bago",
        "country_name": "Myanmar"
    },
    {
        "id": 2137,
        "name": "Chin State",
        "country_name": "Myanmar"
    },
    {
        "id": 2143,
        "name": "Kachin State",
        "country_name": "Myanmar"
    },
    {
        "id": 2144,
        "name": "Kayah State",
        "country_name": "Myanmar"
    },
    {
        "id": 2133,
        "name": "Kayin State",
        "country_name": "Myanmar"
    },
    {
        "id": 2136,
        "name": "Magway Region",
        "country_name": "Myanmar"
    },
    {
        "id": 2134,
        "name": "Mandalay Region",
        "country_name": "Myanmar"
    },
    {
        "id": 2147,
        "name": "Mon State",
        "country_name": "Myanmar"
    },
    {
        "id": 2146,
        "name": "Naypyidaw Union Territory",
        "country_name": "Myanmar"
    },
    {
        "id": 2138,
        "name": "Rakhine State",
        "country_name": "Myanmar"
    },
    {
        "id": 2145,
        "name": "Sagaing Region",
        "country_name": "Myanmar"
    },
    {
        "id": 2139,
        "name": "Shan State",
        "country_name": "Myanmar"
    },
    {
        "id": 2140,
        "name": "Tanintharyi Region",
        "country_name": "Myanmar"
    },
    {
        "id": 2135,
        "name": "Yangon Region",
        "country_name": "Myanmar"
    },
    {
        "id": 43,
        "name": "Erongo Region",
        "country_name": "Namibia"
    },
    {
        "id": 38,
        "name": "Hardap Region",
        "country_name": "Namibia"
    },
    {
        "id": 45,
        "name": "Karas Region",
        "country_name": "Namibia"
    },
    {
        "id": 36,
        "name": "Kavango East Region",
        "country_name": "Namibia"
    },
    {
        "id": 35,
        "name": "Kavango West Region",
        "country_name": "Namibia"
    },
    {
        "id": 44,
        "name": "Khomas Region",
        "country_name": "Namibia"
    },
    {
        "id": 34,
        "name": "Kunene Region",
        "country_name": "Namibia"
    },
    {
        "id": 40,
        "name": "Ohangwena Region",
        "country_name": "Namibia"
    },
    {
        "id": 41,
        "name": "Omaheke Region",
        "country_name": "Namibia"
    },
    {
        "id": 39,
        "name": "Omusati Region",
        "country_name": "Namibia"
    },
    {
        "id": 37,
        "name": "Oshana Region",
        "country_name": "Namibia"
    },
    {
        "id": 42,
        "name": "Oshikoto Region",
        "country_name": "Namibia"
    },
    {
        "id": 46,
        "name": "Otjozondjupa Region",
        "country_name": "Namibia"
    },
    {
        "id": 47,
        "name": "Zambezi Region",
        "country_name": "Namibia"
    },
    {
        "id": 4656,
        "name": "Aiwo District",
        "country_name": "Nauru"
    },
    {
        "id": 4658,
        "name": "Anabar District",
        "country_name": "Nauru"
    },
    {
        "id": 4667,
        "name": "Anetan District",
        "country_name": "Nauru"
    },
    {
        "id": 4663,
        "name": "Anibare District",
        "country_name": "Nauru"
    },
    {
        "id": 4660,
        "name": "Baiti District",
        "country_name": "Nauru"
    },
    {
        "id": 4665,
        "name": "Boe District",
        "country_name": "Nauru"
    },
    {
        "id": 4662,
        "name": "Buada District",
        "country_name": "Nauru"
    },
    {
        "id": 4666,
        "name": "Denigomodu District",
        "country_name": "Nauru"
    },
    {
        "id": 4654,
        "name": "Ewa District",
        "country_name": "Nauru"
    },
    {
        "id": 4661,
        "name": "Ijuw District",
        "country_name": "Nauru"
    },
    {
        "id": 4657,
        "name": "Meneng District",
        "country_name": "Nauru"
    },
    {
        "id": 4659,
        "name": "Nibok District",
        "country_name": "Nauru"
    },
    {
        "id": 4655,
        "name": "Uaboe District",
        "country_name": "Nauru"
    },
    {
        "id": 4664,
        "name": "Yaren District",
        "country_name": "Nauru"
    },
    {
        "id": 2082,
        "name": "Bagmati Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2071,
        "name": "Bheri Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2073,
        "name": "Central Region",
        "country_name": "Nepal"
    },
    {
        "id": 2080,
        "name": "Dhaulagiri Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2069,
        "name": "Eastern Development Region",
        "country_name": "Nepal"
    },
    {
        "id": 2068,
        "name": "Far-Western Development Region",
        "country_name": "Nepal"
    },
    {
        "id": 2081,
        "name": "Gandaki Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2076,
        "name": "Janakpur Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2079,
        "name": "Karnali Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2072,
        "name": "Kosi Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2074,
        "name": "Lumbini Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2083,
        "name": "Mahakali Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2070,
        "name": "Mechi Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2066,
        "name": "Mid-Western Region",
        "country_name": "Nepal"
    },
    {
        "id": 2075,
        "name": "Narayani Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2077,
        "name": "Rapti Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2084,
        "name": "Sagarmatha Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2078,
        "name": "Seti Zone",
        "country_name": "Nepal"
    },
    {
        "id": 2067,
        "name": "Western Region",
        "country_name": "Nepal"
    },
    {
        "id": 2624,
        "name": "Bonaire",
        "country_name": "Netherlands"
    },
    {
        "id": 2613,
        "name": "Drenthe",
        "country_name": "Netherlands"
    },
    {
        "id": 2619,
        "name": "Flevoland",
        "country_name": "Netherlands"
    },
    {
        "id": 2622,
        "name": "Friesland",
        "country_name": "Netherlands"
    },
    {
        "id": 2611,
        "name": "Gelderland",
        "country_name": "Netherlands"
    },
    {
        "id": 2617,
        "name": "Groningen",
        "country_name": "Netherlands"
    },
    {
        "id": 2615,
        "name": "Limburg",
        "country_name": "Netherlands"
    },
    {
        "id": 2623,
        "name": "North Brabant",
        "country_name": "Netherlands"
    },
    {
        "id": 2612,
        "name": "North Holland",
        "country_name": "Netherlands"
    },
    {
        "id": 2618,
        "name": "Overijssel",
        "country_name": "Netherlands"
    },
    {
        "id": 2621,
        "name": "Saba",
        "country_name": "Netherlands"
    },
    {
        "id": 2616,
        "name": "Sint Eustatius",
        "country_name": "Netherlands"
    },
    {
        "id": 2614,
        "name": "South Holland",
        "country_name": "Netherlands"
    },
    {
        "id": 2610,
        "name": "Utrecht",
        "country_name": "Netherlands"
    },
    {
        "id": 2620,
        "name": "Zeeland",
        "country_name": "Netherlands"
    },
    {
        "id": 4072,
        "name": "Auckland Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4074,
        "name": "Bay of Plenty Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4066,
        "name": "Canterbury Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4067,
        "name": "Chatham Islands",
        "country_name": "New Zealand"
    },
    {
        "id": 4068,
        "name": "Gisborne District",
        "country_name": "New Zealand"
    },
    {
        "id": 4075,
        "name": "Hawke's Bay Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4060,
        "name": "Manawatu-Wanganui Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4063,
        "name": "Marlborough Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4070,
        "name": "Nelson Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4059,
        "name": "Northland Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4062,
        "name": "Otago Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4071,
        "name": "Southland Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4069,
        "name": "Taranaki Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4073,
        "name": "Tasman District",
        "country_name": "New Zealand"
    },
    {
        "id": 4061,
        "name": "Waikato Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4065,
        "name": "Wellington Region",
        "country_name": "New Zealand"
    },
    {
        "id": 4064,
        "name": "West Coast Region",
        "country_name": "New Zealand"
    },
    {
        "id": 946,
        "name": "Boaco",
        "country_name": "Nicaragua"
    },
    {
        "id": 950,
        "name": "Carazo",
        "country_name": "Nicaragua"
    },
    {
        "id": 954,
        "name": "Chinandega",
        "country_name": "Nicaragua"
    },
    {
        "id": 940,
        "name": "Chontales",
        "country_name": "Nicaragua"
    },
    {
        "id": 945,
        "name": "Estelí",
        "country_name": "Nicaragua"
    },
    {
        "id": 943,
        "name": "Granada",
        "country_name": "Nicaragua"
    },
    {
        "id": 955,
        "name": "Jinotega",
        "country_name": "Nicaragua"
    },
    {
        "id": 944,
        "name": "León",
        "country_name": "Nicaragua"
    },
    {
        "id": 948,
        "name": "Madriz",
        "country_name": "Nicaragua"
    },
    {
        "id": 941,
        "name": "Managua",
        "country_name": "Nicaragua"
    },
    {
        "id": 953,
        "name": "Masaya",
        "country_name": "Nicaragua"
    },
    {
        "id": 947,
        "name": "Matagalpa",
        "country_name": "Nicaragua"
    },
    {
        "id": 951,
        "name": "North Caribbean Coast",
        "country_name": "Nicaragua"
    },
    {
        "id": 4964,
        "name": "Nueva Segovia",
        "country_name": "Nicaragua"
    },
    {
        "id": 949,
        "name": "Río San Juan",
        "country_name": "Nicaragua"
    },
    {
        "id": 942,
        "name": "Rivas",
        "country_name": "Nicaragua"
    },
    {
        "id": 952,
        "name": "South Caribbean Coast",
        "country_name": "Nicaragua"
    },
    {
        "id": 71,
        "name": "Agadez Region",
        "country_name": "Niger"
    },
    {
        "id": 72,
        "name": "Diffa Region",
        "country_name": "Niger"
    },
    {
        "id": 68,
        "name": "Dosso Region",
        "country_name": "Niger"
    },
    {
        "id": 70,
        "name": "Maradi Region",
        "country_name": "Niger"
    },
    {
        "id": 73,
        "name": "Tahoua Region",
        "country_name": "Niger"
    },
    {
        "id": 67,
        "name": "Tillabéri Region",
        "country_name": "Niger"
    },
    {
        "id": 69,
        "name": "Zinder Region",
        "country_name": "Niger"
    },
    {
        "id": 303,
        "name": "Abia",
        "country_name": "Nigeria"
    },
    {
        "id": 293,
        "name": "Abuja Federal Capital Territory",
        "country_name": "Nigeria"
    },
    {
        "id": 320,
        "name": "Adamawa",
        "country_name": "Nigeria"
    },
    {
        "id": 304,
        "name": "Akwa Ibom",
        "country_name": "Nigeria"
    },
    {
        "id": 315,
        "name": "Anambra",
        "country_name": "Nigeria"
    },
    {
        "id": 312,
        "name": "Bauchi",
        "country_name": "Nigeria"
    },
    {
        "id": 305,
        "name": "Bayelsa",
        "country_name": "Nigeria"
    },
    {
        "id": 291,
        "name": "Benue",
        "country_name": "Nigeria"
    },
    {
        "id": 307,
        "name": "Borno",
        "country_name": "Nigeria"
    },
    {
        "id": 314,
        "name": "Cross River",
        "country_name": "Nigeria"
    },
    {
        "id": 316,
        "name": "Delta",
        "country_name": "Nigeria"
    },
    {
        "id": 311,
        "name": "Ebonyi",
        "country_name": "Nigeria"
    },
    {
        "id": 318,
        "name": "Edo",
        "country_name": "Nigeria"
    },
    {
        "id": 309,
        "name": "Ekiti",
        "country_name": "Nigeria"
    },
    {
        "id": 289,
        "name": "Enugu",
        "country_name": "Nigeria"
    },
    {
        "id": 310,
        "name": "Gombe",
        "country_name": "Nigeria"
    },
    {
        "id": 308,
        "name": "Imo",
        "country_name": "Nigeria"
    },
    {
        "id": 288,
        "name": "Jigawa",
        "country_name": "Nigeria"
    },
    {
        "id": 294,
        "name": "Kaduna",
        "country_name": "Nigeria"
    },
    {
        "id": 300,
        "name": "Kano",
        "country_name": "Nigeria"
    },
    {
        "id": 313,
        "name": "Katsina",
        "country_name": "Nigeria"
    },
    {
        "id": 290,
        "name": "Kebbi",
        "country_name": "Nigeria"
    },
    {
        "id": 298,
        "name": "Kogi",
        "country_name": "Nigeria"
    },
    {
        "id": 295,
        "name": "Kwara",
        "country_name": "Nigeria"
    },
    {
        "id": 306,
        "name": "Lagos",
        "country_name": "Nigeria"
    },
    {
        "id": 301,
        "name": "Nasarawa",
        "country_name": "Nigeria"
    },
    {
        "id": 317,
        "name": "Niger",
        "country_name": "Nigeria"
    },
    {
        "id": 323,
        "name": "Ogun",
        "country_name": "Nigeria"
    },
    {
        "id": 321,
        "name": "Ondo",
        "country_name": "Nigeria"
    },
    {
        "id": 322,
        "name": "Osun",
        "country_name": "Nigeria"
    },
    {
        "id": 296,
        "name": "Oyo",
        "country_name": "Nigeria"
    },
    {
        "id": 302,
        "name": "Plateau",
        "country_name": "Nigeria"
    },
    {
        "id": 4926,
        "name": "Rivers",
        "country_name": "Nigeria"
    },
    {
        "id": 292,
        "name": "Sokoto",
        "country_name": "Nigeria"
    },
    {
        "id": 319,
        "name": "Taraba",
        "country_name": "Nigeria"
    },
    {
        "id": 297,
        "name": "Yobe",
        "country_name": "Nigeria"
    },
    {
        "id": 299,
        "name": "Zamfara",
        "country_name": "Nigeria"
    },
    {
        "id": 3998,
        "name": "Chagang Province",
        "country_name": "North Korea"
    },
    {
        "id": 3999,
        "name": "Kangwon Province",
        "country_name": "North Korea"
    },
    {
        "id": 3995,
        "name": "North Hamgyong Province",
        "country_name": "North Korea"
    },
    {
        "id": 4004,
        "name": "North Hwanghae Province",
        "country_name": "North Korea"
    },
    {
        "id": 4002,
        "name": "North Pyongan Province",
        "country_name": "North Korea"
    },
    {
        "id": 4005,
        "name": "Pyongyang",
        "country_name": "North Korea"
    },
    {
        "id": 4001,
        "name": "Rason",
        "country_name": "North Korea"
    },
    {
        "id": 3996,
        "name": "Ryanggang Province",
        "country_name": "North Korea"
    },
    {
        "id": 4000,
        "name": "South Hamgyong Province",
        "country_name": "North Korea"
    },
    {
        "id": 4003,
        "name": "South Hwanghae Province",
        "country_name": "North Korea"
    },
    {
        "id": 3997,
        "name": "South Pyongan Province",
        "country_name": "North Korea"
    },
    {
        "id": 1017,
        "name": "Akershus",
        "country_name": "Norway"
    },
    {
        "id": 1011,
        "name": "Buskerud",
        "country_name": "Norway"
    },
    {
        "id": 1016,
        "name": "Finnmark",
        "country_name": "Norway"
    },
    {
        "id": 1019,
        "name": "Hedmark",
        "country_name": "Norway"
    },
    {
        "id": 1023,
        "name": "Hordaland",
        "country_name": "Norway"
    },
    {
        "id": 1026,
        "name": "Jan Mayen",
        "country_name": "Norway"
    },
    {
        "id": 1020,
        "name": "Møre og Romsdal",
        "country_name": "Norway"
    },
    {
        "id": 1012,
        "name": "Nord-Trøndelag",
        "country_name": "Norway"
    },
    {
        "id": 1025,
        "name": "Nordland",
        "country_name": "Norway"
    },
    {
        "id": 1009,
        "name": "Oppland",
        "country_name": "Norway"
    },
    {
        "id": 1007,
        "name": "Oslo",
        "country_name": "Norway"
    },
    {
        "id": 1022,
        "name": "Østfold",
        "country_name": "Norway"
    },
    {
        "id": 1021,
        "name": "Rogaland",
        "country_name": "Norway"
    },
    {
        "id": 1018,
        "name": "Sogn og Fjordane",
        "country_name": "Norway"
    },
    {
        "id": 1010,
        "name": "Sør-Trøndelag",
        "country_name": "Norway"
    },
    {
        "id": 1013,
        "name": "Svalbard",
        "country_name": "Norway"
    },
    {
        "id": 1024,
        "name": "Telemark",
        "country_name": "Norway"
    },
    {
        "id": 1015,
        "name": "Troms",
        "country_name": "Norway"
    },
    {
        "id": 1006,
        "name": "Trøndelag",
        "country_name": "Norway"
    },
    {
        "id": 1014,
        "name": "Vest-Agder",
        "country_name": "Norway"
    },
    {
        "id": 1008,
        "name": "Vestfold",
        "country_name": "Norway"
    },
    {
        "id": 3058,
        "name": "Ad Dakhiliyah Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3047,
        "name": "Ad Dhahirah Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3048,
        "name": "Al Batinah North Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3050,
        "name": "Al Batinah Region",
        "country_name": "Oman"
    },
    {
        "id": 3049,
        "name": "Al Batinah South Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3059,
        "name": "Al Buraimi Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3056,
        "name": "Al Wusta Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3053,
        "name": "Ash Sharqiyah North Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3051,
        "name": "Ash Sharqiyah Region",
        "country_name": "Oman"
    },
    {
        "id": 3054,
        "name": "Ash Sharqiyah South Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3057,
        "name": "Dhofar Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3052,
        "name": "Musandam Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3055,
        "name": "Muscat Governorate",
        "country_name": "Oman"
    },
    {
        "id": 3172,
        "name": "Azad Kashmir",
        "country_name": "Pakistan"
    },
    {
        "id": 3174,
        "name": "Balochistan",
        "country_name": "Pakistan"
    },
    {
        "id": 3173,
        "name": "Federally Administered Tribal Areas",
        "country_name": "Pakistan"
    },
    {
        "id": 3170,
        "name": "Gilgit-Baltistan",
        "country_name": "Pakistan"
    },
    {
        "id": 3169,
        "name": "Islamabad Capital Territory",
        "country_name": "Pakistan"
    },
    {
        "id": 3171,
        "name": "Khyber Pakhtunkhwa",
        "country_name": "Pakistan"
    },
    {
        "id": 3176,
        "name": "Punjab",
        "country_name": "Pakistan"
    },
    {
        "id": 3175,
        "name": "Sindh",
        "country_name": "Pakistan"
    },
    {
        "id": 4540,
        "name": "Aimeliik",
        "country_name": "Palau"
    },
    {
        "id": 4528,
        "name": "Airai",
        "country_name": "Palau"
    },
    {
        "id": 4538,
        "name": "Angaur",
        "country_name": "Palau"
    },
    {
        "id": 4529,
        "name": "Hatohobei",
        "country_name": "Palau"
    },
    {
        "id": 4539,
        "name": "Kayangel",
        "country_name": "Palau"
    },
    {
        "id": 4532,
        "name": "Koror",
        "country_name": "Palau"
    },
    {
        "id": 4530,
        "name": "Melekeok",
        "country_name": "Palau"
    },
    {
        "id": 4537,
        "name": "Ngaraard",
        "country_name": "Palau"
    },
    {
        "id": 4533,
        "name": "Ngarchelong",
        "country_name": "Palau"
    },
    {
        "id": 4527,
        "name": "Ngardmau",
        "country_name": "Palau"
    },
    {
        "id": 4531,
        "name": "Ngatpang",
        "country_name": "Palau"
    },
    {
        "id": 4536,
        "name": "Ngchesar",
        "country_name": "Palau"
    },
    {
        "id": 4541,
        "name": "Ngeremlengui",
        "country_name": "Palau"
    },
    {
        "id": 4534,
        "name": "Ngiwal",
        "country_name": "Palau"
    },
    {
        "id": 4526,
        "name": "Peleliu",
        "country_name": "Palau"
    },
    {
        "id": 4535,
        "name": "Sonsorol",
        "country_name": "Palau"
    },
    {
        "id": 1393,
        "name": "Bocas del Toro Province",
        "country_name": "Panama"
    },
    {
        "id": 1397,
        "name": "Chiriquí Province",
        "country_name": "Panama"
    },
    {
        "id": 1387,
        "name": "Coclé Province",
        "country_name": "Panama"
    },
    {
        "id": 1386,
        "name": "Colón Province",
        "country_name": "Panama"
    },
    {
        "id": 1385,
        "name": "Darién Province",
        "country_name": "Panama"
    },
    {
        "id": 1396,
        "name": "Emberá-Wounaan Comarca",
        "country_name": "Panama"
    },
    {
        "id": 1388,
        "name": "Guna Yala",
        "country_name": "Panama"
    },
    {
        "id": 1389,
        "name": "Herrera Province",
        "country_name": "Panama"
    },
    {
        "id": 1390,
        "name": "Los Santos Province",
        "country_name": "Panama"
    },
    {
        "id": 1391,
        "name": "Ngöbe-Buglé Comarca",
        "country_name": "Panama"
    },
    {
        "id": 1394,
        "name": "Panamá Oeste Province",
        "country_name": "Panama"
    },
    {
        "id": 1395,
        "name": "Panamá Province",
        "country_name": "Panama"
    },
    {
        "id": 1392,
        "name": "Veraguas Province",
        "country_name": "Panama"
    },
    {
        "id": 4831,
        "name": "Bougainville",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4847,
        "name": "Central Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4846,
        "name": "Chimbu Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4834,
        "name": "East New Britain",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4845,
        "name": "Eastern Highlands Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4848,
        "name": "Enga Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4839,
        "name": "Gulf",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4833,
        "name": "Hela",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4832,
        "name": "Jiwaka Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4843,
        "name": "Madang Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4842,
        "name": "Manus Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4849,
        "name": "Milne Bay Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4835,
        "name": "Morobe Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4841,
        "name": "New Ireland Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4838,
        "name": "Oro Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4837,
        "name": "Port Moresby",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4836,
        "name": "Sandaun Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4844,
        "name": "Southern Highlands Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4830,
        "name": "West New Britain Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4840,
        "name": "Western Highlands Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 4850,
        "name": "Western Province",
        "country_name": "Papua new Guinea"
    },
    {
        "id": 2785,
        "name": "Alto Paraguay Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2784,
        "name": "Alto Paraná Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2782,
        "name": "Amambay Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2780,
        "name": "Boquerón Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2773,
        "name": "Caaguazú",
        "country_name": "Paraguay"
    },
    {
        "id": 2775,
        "name": "Caazapá",
        "country_name": "Paraguay"
    },
    {
        "id": 2771,
        "name": "Canindeyú",
        "country_name": "Paraguay"
    },
    {
        "id": 2777,
        "name": "Central Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2779,
        "name": "Concepción Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2783,
        "name": "Cordillera Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2772,
        "name": "Guairá Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2778,
        "name": "Itapúa",
        "country_name": "Paraguay"
    },
    {
        "id": 2786,
        "name": "Misiones Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2781,
        "name": "Ñeembucú Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2774,
        "name": "Paraguarí Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2770,
        "name": "Presidente Hayes Department",
        "country_name": "Paraguay"
    },
    {
        "id": 2776,
        "name": "San Pedro Department",
        "country_name": "Paraguay"
    },
    {
        "id": 3685,
        "name": "Amazonas",
        "country_name": "Peru"
    },
    {
        "id": 3680,
        "name": "Áncash",
        "country_name": "Peru"
    },
    {
        "id": 3699,
        "name": "Apurímac",
        "country_name": "Peru"
    },
    {
        "id": 3681,
        "name": "Arequipa",
        "country_name": "Peru"
    },
    {
        "id": 3692,
        "name": "Ayacucho",
        "country_name": "Peru"
    },
    {
        "id": 3688,
        "name": "Cajamarca",
        "country_name": "Peru"
    },
    {
        "id": 3701,
        "name": "Callao",
        "country_name": "Peru"
    },
    {
        "id": 3691,
        "name": "Cusco",
        "country_name": "Peru"
    },
    {
        "id": 3679,
        "name": "Huancavelica",
        "country_name": "Peru"
    },
    {
        "id": 3687,
        "name": "Huanuco",
        "country_name": "Peru"
    },
    {
        "id": 3700,
        "name": "Ica",
        "country_name": "Peru"
    },
    {
        "id": 3693,
        "name": "Junín",
        "country_name": "Peru"
    },
    {
        "id": 3683,
        "name": "La Libertad",
        "country_name": "Peru"
    },
    {
        "id": 3702,
        "name": "Lambayeque",
        "country_name": "Peru"
    },
    {
        "id": 3695,
        "name": "Lima",
        "country_name": "Peru"
    },
    {
        "id": 4922,
        "name": "Loreto",
        "country_name": "Peru"
    },
    {
        "id": 3678,
        "name": "Madre de Dios",
        "country_name": "Peru"
    },
    {
        "id": 3698,
        "name": "Moquegua",
        "country_name": "Peru"
    },
    {
        "id": 3686,
        "name": "Pasco",
        "country_name": "Peru"
    },
    {
        "id": 3697,
        "name": "Piura",
        "country_name": "Peru"
    },
    {
        "id": 3682,
        "name": "Puno",
        "country_name": "Peru"
    },
    {
        "id": 3694,
        "name": "San Martín",
        "country_name": "Peru"
    },
    {
        "id": 3696,
        "name": "Tacna",
        "country_name": "Peru"
    },
    {
        "id": 3689,
        "name": "Tumbes",
        "country_name": "Peru"
    },
    {
        "id": 3684,
        "name": "Ucayali",
        "country_name": "Peru"
    },
    {
        "id": 1324,
        "name": "Abra",
        "country_name": "Philippines"
    },
    {
        "id": 1323,
        "name": "Agusan del Norte",
        "country_name": "Philippines"
    },
    {
        "id": 1326,
        "name": "Agusan del Sur",
        "country_name": "Philippines"
    },
    {
        "id": 1331,
        "name": "Aklan",
        "country_name": "Philippines"
    },
    {
        "id": 1337,
        "name": "Albay",
        "country_name": "Philippines"
    },
    {
        "id": 1336,
        "name": "Antique",
        "country_name": "Philippines"
    },
    {
        "id": 1334,
        "name": "Apayao",
        "country_name": "Philippines"
    },
    {
        "id": 1341,
        "name": "Aurora",
        "country_name": "Philippines"
    },
    {
        "id": 1316,
        "name": "Autonomous Region in Muslim Mindanao",
        "country_name": "Philippines"
    },
    {
        "id": 1346,
        "name": "Basilan",
        "country_name": "Philippines"
    },
    {
        "id": 1344,
        "name": "Bataan",
        "country_name": "Philippines"
    },
    {
        "id": 1352,
        "name": "Batanes",
        "country_name": "Philippines"
    },
    {
        "id": 1359,
        "name": "Batangas",
        "country_name": "Philippines"
    },
    {
        "id": 1363,
        "name": "Benguet",
        "country_name": "Philippines"
    },
    {
        "id": 1304,
        "name": "Bicol Region",
        "country_name": "Philippines"
    },
    {
        "id": 1274,
        "name": "Biliran",
        "country_name": "Philippines"
    },
    {
        "id": 1272,
        "name": "Bohol",
        "country_name": "Philippines"
    },
    {
        "id": 1270,
        "name": "Bukidnon",
        "country_name": "Philippines"
    },
    {
        "id": 1278,
        "name": "Bulacan",
        "country_name": "Philippines"
    },
    {
        "id": 1279,
        "name": "Cagayan",
        "country_name": "Philippines"
    },
    {
        "id": 1342,
        "name": "Cagayan Valley",
        "country_name": "Philippines"
    },
    {
        "id": 1294,
        "name": "Calabarzon",
        "country_name": "Philippines"
    },
    {
        "id": 1283,
        "name": "Camarines Norte",
        "country_name": "Philippines"
    },
    {
        "id": 1287,
        "name": "Camarines Sur",
        "country_name": "Philippines"
    },
    {
        "id": 1285,
        "name": "Camiguin",
        "country_name": "Philippines"
    },
    {
        "id": 1292,
        "name": "Capiz",
        "country_name": "Philippines"
    },
    {
        "id": 1314,
        "name": "Caraga",
        "country_name": "Philippines"
    },
    {
        "id": 1301,
        "name": "Catanduanes",
        "country_name": "Philippines"
    },
    {
        "id": 1307,
        "name": "Cavite",
        "country_name": "Philippines"
    },
    {
        "id": 1306,
        "name": "Cebu",
        "country_name": "Philippines"
    },
    {
        "id": 1345,
        "name": "Central Luzon",
        "country_name": "Philippines"
    },
    {
        "id": 1308,
        "name": "Central Visayas",
        "country_name": "Philippines"
    },
    {
        "id": 1311,
        "name": "Compostela Valley",
        "country_name": "Philippines"
    },
    {
        "id": 1335,
        "name": "Cordillera Administrative Region",
        "country_name": "Philippines"
    },
    {
        "id": 1320,
        "name": "Cotabato",
        "country_name": "Philippines"
    },
    {
        "id": 1319,
        "name": "Davao del Norte",
        "country_name": "Philippines"
    },
    {
        "id": 1318,
        "name": "Davao del Sur",
        "country_name": "Philippines"
    },
    {
        "id": 1309,
        "name": "Davao Occidental",
        "country_name": "Philippines"
    },
    {
        "id": 1289,
        "name": "Davao Oriental",
        "country_name": "Philippines"
    },
    {
        "id": 1340,
        "name": "Davao Region",
        "country_name": "Philippines"
    },
    {
        "id": 1291,
        "name": "Dinagat Islands",
        "country_name": "Philippines"
    },
    {
        "id": 1290,
        "name": "Eastern Samar",
        "country_name": "Philippines"
    },
    {
        "id": 1322,
        "name": "Eastern Visayas",
        "country_name": "Philippines"
    },
    {
        "id": 1303,
        "name": "Guimaras",
        "country_name": "Philippines"
    },
    {
        "id": 1300,
        "name": "Ifugao",
        "country_name": "Philippines"
    },
    {
        "id": 1298,
        "name": "Ilocos Norte",
        "country_name": "Philippines"
    },
    {
        "id": 1355,
        "name": "Ilocos Region",
        "country_name": "Philippines"
    },
    {
        "id": 1321,
        "name": "Ilocos Sur",
        "country_name": "Philippines"
    },
    {
        "id": 1315,
        "name": "Iloilo",
        "country_name": "Philippines"
    },
    {
        "id": 1313,
        "name": "Isabela",
        "country_name": "Philippines"
    },
    {
        "id": 1312,
        "name": "Kalinga",
        "country_name": "Philippines"
    },
    {
        "id": 1317,
        "name": "La Union",
        "country_name": "Philippines"
    },
    {
        "id": 1328,
        "name": "Laguna",
        "country_name": "Philippines"
    },
    {
        "id": 1327,
        "name": "Lanao del Norte",
        "country_name": "Philippines"
    },
    {
        "id": 1333,
        "name": "Lanao del Sur",
        "country_name": "Philippines"
    },
    {
        "id": 1332,
        "name": "Leyte",
        "country_name": "Philippines"
    },
    {
        "id": 1330,
        "name": "Maguindanao",
        "country_name": "Philippines"
    },
    {
        "id": 1329,
        "name": "Marinduque",
        "country_name": "Philippines"
    },
    {
        "id": 1338,
        "name": "Masbate",
        "country_name": "Philippines"
    },
    {
        "id": 1347,
        "name": "Metro Manila",
        "country_name": "Philippines"
    },
    {
        "id": 1299,
        "name": "Mimaropa",
        "country_name": "Philippines"
    },
    {
        "id": 1343,
        "name": "Misamis Occidental",
        "country_name": "Philippines"
    },
    {
        "id": 1348,
        "name": "Misamis Oriental",
        "country_name": "Philippines"
    },
    {
        "id": 1353,
        "name": "Mountain Province",
        "country_name": "Philippines"
    },
    {
        "id": 1351,
        "name": "Negros Occidental",
        "country_name": "Philippines"
    },
    {
        "id": 1350,
        "name": "Negros Oriental",
        "country_name": "Philippines"
    },
    {
        "id": 1339,
        "name": "Northern Mindanao",
        "country_name": "Philippines"
    },
    {
        "id": 1349,
        "name": "Northern Samar",
        "country_name": "Philippines"
    },
    {
        "id": 1360,
        "name": "Nueva Ecija",
        "country_name": "Philippines"
    },
    {
        "id": 1358,
        "name": "Nueva Vizcaya",
        "country_name": "Philippines"
    },
    {
        "id": 1356,
        "name": "Occidental Mindoro",
        "country_name": "Philippines"
    },
    {
        "id": 1354,
        "name": "Oriental Mindoro",
        "country_name": "Philippines"
    },
    {
        "id": 1361,
        "name": "Palawan",
        "country_name": "Philippines"
    },
    {
        "id": 1365,
        "name": "Pampanga",
        "country_name": "Philippines"
    },
    {
        "id": 1364,
        "name": "Pangasinan",
        "country_name": "Philippines"
    },
    {
        "id": 1275,
        "name": "Quezon",
        "country_name": "Philippines"
    },
    {
        "id": 1273,
        "name": "Quirino",
        "country_name": "Philippines"
    },
    {
        "id": 1271,
        "name": "Rizal",
        "country_name": "Philippines"
    },
    {
        "id": 1269,
        "name": "Romblon",
        "country_name": "Philippines"
    },
    {
        "id": 1277,
        "name": "Sarangani",
        "country_name": "Philippines"
    },
    {
        "id": 1276,
        "name": "Siquijor",
        "country_name": "Philippines"
    },
    {
        "id": 1310,
        "name": "Soccsksargen",
        "country_name": "Philippines"
    },
    {
        "id": 1281,
        "name": "Sorsogon",
        "country_name": "Philippines"
    },
    {
        "id": 1280,
        "name": "South Cotabato",
        "country_name": "Philippines"
    },
    {
        "id": 1284,
        "name": "Southern Leyte",
        "country_name": "Philippines"
    },
    {
        "id": 1282,
        "name": "Sultan Kudarat",
        "country_name": "Philippines"
    },
    {
        "id": 1288,
        "name": "Sulu",
        "country_name": "Philippines"
    },
    {
        "id": 1286,
        "name": "Surigao del Norte",
        "country_name": "Philippines"
    },
    {
        "id": 1296,
        "name": "Surigao del Sur",
        "country_name": "Philippines"
    },
    {
        "id": 1295,
        "name": "Tarlac",
        "country_name": "Philippines"
    },
    {
        "id": 1293,
        "name": "Tawi-Tawi",
        "country_name": "Philippines"
    },
    {
        "id": 1305,
        "name": "Western Visayas",
        "country_name": "Philippines"
    },
    {
        "id": 1297,
        "name": "Zambales",
        "country_name": "Philippines"
    },
    {
        "id": 1302,
        "name": "Zamboanga del Norte",
        "country_name": "Philippines"
    },
    {
        "id": 1357,
        "name": "Zamboanga del Sur",
        "country_name": "Philippines"
    },
    {
        "id": 1325,
        "name": "Zamboanga Peninsula",
        "country_name": "Philippines"
    },
    {
        "id": 1362,
        "name": "Zamboanga Sibugay",
        "country_name": "Philippines"
    },
    {
        "id": 1634,
        "name": "Greater Poland Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1625,
        "name": "Kuyavian-Pomeranian Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1635,
        "name": "Lesser Poland Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1629,
        "name": "Lower Silesian Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1638,
        "name": "Lublin Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1631,
        "name": "Lubusz Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1636,
        "name": "Łódź Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1637,
        "name": "Masovian Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1622,
        "name": "Opole Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1626,
        "name": "Podkarpackie Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1632,
        "name": "Podlaskie Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1624,
        "name": "Pomeranian Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1623,
        "name": "Silesian Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1630,
        "name": "Świętokrzyskie Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1628,
        "name": "Warmian-Masurian Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 1633,
        "name": "West Pomeranian Voivodeship",
        "country_name": "Poland"
    },
    {
        "id": 2233,
        "name": "Açores",
        "country_name": "Portugal"
    },
    {
        "id": 2235,
        "name": "Aveiro",
        "country_name": "Portugal"
    },
    {
        "id": 2230,
        "name": "Beja",
        "country_name": "Portugal"
    },
    {
        "id": 2244,
        "name": "Braga",
        "country_name": "Portugal"
    },
    {
        "id": 2229,
        "name": "Bragança",
        "country_name": "Portugal"
    },
    {
        "id": 2241,
        "name": "Castelo Branco",
        "country_name": "Portugal"
    },
    {
        "id": 2246,
        "name": "Coimbra",
        "country_name": "Portugal"
    },
    {
        "id": 2236,
        "name": "Évora",
        "country_name": "Portugal"
    },
    {
        "id": 2239,
        "name": "Faro",
        "country_name": "Portugal"
    },
    {
        "id": 4859,
        "name": "Guarda",
        "country_name": "Portugal"
    },
    {
        "id": 2240,
        "name": "Leiria",
        "country_name": "Portugal"
    },
    {
        "id": 2228,
        "name": "Lisbon",
        "country_name": "Portugal"
    },
    {
        "id": 2231,
        "name": "Madeira",
        "country_name": "Portugal"
    },
    {
        "id": 2232,
        "name": "Portalegre",
        "country_name": "Portugal"
    },
    {
        "id": 2243,
        "name": "Porto",
        "country_name": "Portugal"
    },
    {
        "id": 2238,
        "name": "Santarém",
        "country_name": "Portugal"
    },
    {
        "id": 2242,
        "name": "Setúbal",
        "country_name": "Portugal"
    },
    {
        "id": 2245,
        "name": "Viana do Castelo",
        "country_name": "Portugal"
    },
    {
        "id": 2234,
        "name": "Vila Real",
        "country_name": "Portugal"
    },
    {
        "id": 2237,
        "name": "Viseu",
        "country_name": "Portugal"
    },
    {
        "id": 5081,
        "name": "Arecibo",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5076,
        "name": "Bayamon",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5079,
        "name": "Caguas",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5077,
        "name": "Carolina",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5080,
        "name": "Guaynabo",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5083,
        "name": "Mayagüez",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5078,
        "name": "Ponce",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5075,
        "name": "San Juan",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5082,
        "name": "Toa Baja",
        "country_name": "Puerto Rico"
    },
    {
        "id": 5084,
        "name": "Trujillo Alto",
        "country_name": "Puerto Rico"
    },
    {
        "id": 3182,
        "name": "Al Daayen",
        "country_name": "Qatar"
    },
    {
        "id": 3183,
        "name": "Al Khor",
        "country_name": "Qatar"
    },
    {
        "id": 3177,
        "name": "Al Rayyan Municipality",
        "country_name": "Qatar"
    },
    {
        "id": 3179,
        "name": "Al Wakrah",
        "country_name": "Qatar"
    },
    {
        "id": 3178,
        "name": "Al-Shahaniya",
        "country_name": "Qatar"
    },
    {
        "id": 3181,
        "name": "Doha",
        "country_name": "Qatar"
    },
    {
        "id": 3180,
        "name": "Madinat ash Shamal",
        "country_name": "Qatar"
    },
    {
        "id": 3184,
        "name": "Umm Salal Municipality",
        "country_name": "Qatar"
    },
    {
        "id": 4724,
        "name": "Alba",
        "country_name": "Romania"
    },
    {
        "id": 4739,
        "name": "Arad County",
        "country_name": "Romania"
    },
    {
        "id": 4722,
        "name": "Arges",
        "country_name": "Romania"
    },
    {
        "id": 4744,
        "name": "Bacău County",
        "country_name": "Romania"
    },
    {
        "id": 4723,
        "name": "Bihor County",
        "country_name": "Romania"
    },
    {
        "id": 4733,
        "name": "Bistrița-Năsăud County",
        "country_name": "Romania"
    },
    {
        "id": 4740,
        "name": "Botoșani County",
        "country_name": "Romania"
    },
    {
        "id": 4736,
        "name": "Braila",
        "country_name": "Romania"
    },
    {
        "id": 4759,
        "name": "Brașov County",
        "country_name": "Romania"
    },
    {
        "id": 4730,
        "name": "Bucharest",
        "country_name": "Romania"
    },
    {
        "id": 4756,
        "name": "Buzău County",
        "country_name": "Romania"
    },
    {
        "id": 4732,
        "name": "Călărași County",
        "country_name": "Romania"
    },
    {
        "id": 4753,
        "name": "Caraș-Severin County",
        "country_name": "Romania"
    },
    {
        "id": 4734,
        "name": "Cluj County",
        "country_name": "Romania"
    },
    {
        "id": 4737,
        "name": "Constanța County",
        "country_name": "Romania"
    },
    {
        "id": 4754,
        "name": "Covasna County",
        "country_name": "Romania"
    },
    {
        "id": 4745,
        "name": "Dâmbovița County",
        "country_name": "Romania"
    },
    {
        "id": 4742,
        "name": "Dolj County",
        "country_name": "Romania"
    },
    {
        "id": 4747,
        "name": "Galați County",
        "country_name": "Romania"
    },
    {
        "id": 4726,
        "name": "Giurgiu County",
        "country_name": "Romania"
    },
    {
        "id": 4750,
        "name": "Gorj County",
        "country_name": "Romania"
    },
    {
        "id": 4749,
        "name": "Harghita County",
        "country_name": "Romania"
    },
    {
        "id": 4721,
        "name": "Hunedoara County",
        "country_name": "Romania"
    },
    {
        "id": 4743,
        "name": "Ialomița County",
        "country_name": "Romania"
    },
    {
        "id": 4735,
        "name": "Iași County",
        "country_name": "Romania"
    },
    {
        "id": 4725,
        "name": "Ilfov County",
        "country_name": "Romania"
    },
    {
        "id": 4760,
        "name": "Maramureș County",
        "country_name": "Romania"
    },
    {
        "id": 4751,
        "name": "Mehedinți County",
        "country_name": "Romania"
    },
    {
        "id": 4915,
        "name": "Mureș County",
        "country_name": "Romania"
    },
    {
        "id": 4731,
        "name": "Neamț County",
        "country_name": "Romania"
    },
    {
        "id": 4738,
        "name": "Olt County",
        "country_name": "Romania"
    },
    {
        "id": 4729,
        "name": "Prahova County",
        "country_name": "Romania"
    },
    {
        "id": 4741,
        "name": "Sălaj County",
        "country_name": "Romania"
    },
    {
        "id": 4746,
        "name": "Satu Mare County",
        "country_name": "Romania"
    },
    {
        "id": 4755,
        "name": "Sibiu County",
        "country_name": "Romania"
    },
    {
        "id": 4720,
        "name": "Suceava County",
        "country_name": "Romania"
    },
    {
        "id": 4728,
        "name": "Teleorman County",
        "country_name": "Romania"
    },
    {
        "id": 4748,
        "name": "Timiș County",
        "country_name": "Romania"
    },
    {
        "id": 4727,
        "name": "Tulcea County",
        "country_name": "Romania"
    },
    {
        "id": 4757,
        "name": "Vâlcea County",
        "country_name": "Romania"
    },
    {
        "id": 4752,
        "name": "Vaslui County",
        "country_name": "Romania"
    },
    {
        "id": 4758,
        "name": "Vrancea County",
        "country_name": "Romania"
    },
    {
        "id": 1911,
        "name": "Altai Krai",
        "country_name": "Russia"
    },
    {
        "id": 1876,
        "name": "Altai Republic",
        "country_name": "Russia"
    },
    {
        "id": 1858,
        "name": "Amur Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1849,
        "name": "Arkhangelsk",
        "country_name": "Russia"
    },
    {
        "id": 1866,
        "name": "Astrakhan Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1903,
        "name": "Belgorod Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1867,
        "name": "Bryansk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1893,
        "name": "Chechen Republic",
        "country_name": "Russia"
    },
    {
        "id": 1845,
        "name": "Chelyabinsk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1859,
        "name": "Chukotka Autonomous Okrug",
        "country_name": "Russia"
    },
    {
        "id": 1914,
        "name": "Chuvash Republic",
        "country_name": "Russia"
    },
    {
        "id": 1880,
        "name": "Irkutsk",
        "country_name": "Russia"
    },
    {
        "id": 1864,
        "name": "Ivanovo Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1835,
        "name": "Jewish Autonomous Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1892,
        "name": "Kabardino-Balkar Republic",
        "country_name": "Russia"
    },
    {
        "id": 1902,
        "name": "Kaliningrad",
        "country_name": "Russia"
    },
    {
        "id": 1844,
        "name": "Kaluga Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1865,
        "name": "Kamchatka Krai",
        "country_name": "Russia"
    },
    {
        "id": 1869,
        "name": "Karachay-Cherkess Republic",
        "country_name": "Russia"
    },
    {
        "id": 1897,
        "name": "Kemerovo Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1873,
        "name": "Khabarovsk Krai",
        "country_name": "Russia"
    },
    {
        "id": 1838,
        "name": "Khanty-Mansi Autonomous Okrug",
        "country_name": "Russia"
    },
    {
        "id": 1890,
        "name": "Kirov Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1899,
        "name": "Komi Republic",
        "country_name": "Russia"
    },
    {
        "id": 1910,
        "name": "Kostroma Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1891,
        "name": "Krasnodar Krai",
        "country_name": "Russia"
    },
    {
        "id": 1840,
        "name": "Krasnoyarsk Krai",
        "country_name": "Russia"
    },
    {
        "id": 1915,
        "name": "Kurgan Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1855,
        "name": "Kursk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1896,
        "name": "Leningrad Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1889,
        "name": "Lipetsk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1839,
        "name": "Magadan Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1870,
        "name": "Mari El Republic",
        "country_name": "Russia"
    },
    {
        "id": 1901,
        "name": "Moscow",
        "country_name": "Russia"
    },
    {
        "id": 1882,
        "name": "Moscow Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1843,
        "name": "Murmansk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1836,
        "name": "Nenets Autonomous Okrug",
        "country_name": "Russia"
    },
    {
        "id": 1857,
        "name": "Nizhny Novgorod Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1834,
        "name": "Novgorod Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1888,
        "name": "Novosibirsk",
        "country_name": "Russia"
    },
    {
        "id": 1846,
        "name": "Omsk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1886,
        "name": "Orenburg Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1908,
        "name": "Oryol Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1909,
        "name": "Penza Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1871,
        "name": "Perm Krai",
        "country_name": "Russia"
    },
    {
        "id": 1833,
        "name": "Primorsky Krai",
        "country_name": "Russia"
    },
    {
        "id": 1863,
        "name": "Pskov Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1852,
        "name": "Republic of Adygea",
        "country_name": "Russia"
    },
    {
        "id": 1854,
        "name": "Republic of Bashkortostan",
        "country_name": "Russia"
    },
    {
        "id": 1842,
        "name": "Republic of Buryatia",
        "country_name": "Russia"
    },
    {
        "id": 1850,
        "name": "Republic of Dagestan",
        "country_name": "Russia"
    },
    {
        "id": 1884,
        "name": "Republic of Ingushetia",
        "country_name": "Russia"
    },
    {
        "id": 1883,
        "name": "Republic of Kalmykia",
        "country_name": "Russia"
    },
    {
        "id": 1841,
        "name": "Republic of Karelia",
        "country_name": "Russia"
    },
    {
        "id": 1877,
        "name": "Republic of Khakassia",
        "country_name": "Russia"
    },
    {
        "id": 1898,
        "name": "Republic of Mordovia",
        "country_name": "Russia"
    },
    {
        "id": 1853,
        "name": "Republic of North Ossetia-Alania",
        "country_name": "Russia"
    },
    {
        "id": 1861,
        "name": "Republic of Tatarstan",
        "country_name": "Russia"
    },
    {
        "id": 1837,
        "name": "Rostov Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1905,
        "name": "Ryazan Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1879,
        "name": "Saint Petersburg",
        "country_name": "Russia"
    },
    {
        "id": 1848,
        "name": "Sakha Republic",
        "country_name": "Russia"
    },
    {
        "id": 1875,
        "name": "Sakhalin",
        "country_name": "Russia"
    },
    {
        "id": 1862,
        "name": "Samara Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1887,
        "name": "Saratov Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1912,
        "name": "Sevastopol",
        "country_name": "Russia"
    },
    {
        "id": 1885,
        "name": "Smolensk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1868,
        "name": "Stavropol Krai",
        "country_name": "Russia"
    },
    {
        "id": 1894,
        "name": "Sverdlovsk",
        "country_name": "Russia"
    },
    {
        "id": 1878,
        "name": "Tambov Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1872,
        "name": "Tomsk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1895,
        "name": "Tula Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1900,
        "name": "Tuva Republic",
        "country_name": "Russia"
    },
    {
        "id": 1860,
        "name": "Tver Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1907,
        "name": "Tyumen Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1913,
        "name": "Udmurt Republic",
        "country_name": "Russia"
    },
    {
        "id": 1856,
        "name": "Ulyanovsk Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1881,
        "name": "Vladimir Oblast",
        "country_name": "Russia"
    },
    {
        "id": 4916,
        "name": "Volgograd Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1874,
        "name": "Vologda Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1906,
        "name": "Voronezh Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1847,
        "name": "Yamalo-Nenets Autonomous Okrug",
        "country_name": "Russia"
    },
    {
        "id": 1851,
        "name": "Yaroslavl Oblast",
        "country_name": "Russia"
    },
    {
        "id": 1904,
        "name": "Zabaykalsky Krai",
        "country_name": "Russia"
    },
    {
        "id": 261,
        "name": "Eastern Province",
        "country_name": "Rwanda"
    },
    {
        "id": 262,
        "name": "Kigali district",
        "country_name": "Rwanda"
    },
    {
        "id": 263,
        "name": "Northern Province",
        "country_name": "Rwanda"
    },
    {
        "id": 259,
        "name": "Southern Province",
        "country_name": "Rwanda"
    },
    {
        "id": 260,
        "name": "Western Province",
        "country_name": "Rwanda"
    },
    {
        "id": 3833,
        "name": "Christ Church Nichola Town Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3832,
        "name": "Nevis",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3836,
        "name": "Saint Anne Sandy Point Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3837,
        "name": "Saint George Gingerland Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3835,
        "name": "Saint James Windward Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3845,
        "name": "Saint John Capisterre Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3840,
        "name": "Saint John Figtree Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3841,
        "name": "Saint Kitts",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3844,
        "name": "Saint Mary Cayon Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3834,
        "name": "Saint Paul Capisterre Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3838,
        "name": "Saint Paul Charlestown Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3831,
        "name": "Saint Peter Basseterre Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3839,
        "name": "Saint Thomas Lowland Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3842,
        "name": "Saint Thomas Middle Island Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3843,
        "name": "Trinity Palmetto Point Parish",
        "country_name": "Saint Kitts And Nevis"
    },
    {
        "id": 3757,
        "name": "Anse la Raye Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3761,
        "name": "Canaries",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3758,
        "name": "Castries Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3760,
        "name": "Choiseul Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3767,
        "name": "Dauphin Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3756,
        "name": "Dennery Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3766,
        "name": "Gros Islet Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3759,
        "name": "Laborie Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3762,
        "name": "Micoud Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3765,
        "name": "Praslin Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3764,
        "name": "Soufrière Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3763,
        "name": "Vieux Fort Quarter",
        "country_name": "Saint Lucia"
    },
    {
        "id": 3389,
        "name": "Charlotte Parish",
        "country_name": "Saint Vincent And The Grenadines"
    },
    {
        "id": 3388,
        "name": "Grenadines Parish",
        "country_name": "Saint Vincent And The Grenadines"
    },
    {
        "id": 3386,
        "name": "Saint Andrew Parish",
        "country_name": "Saint Vincent And The Grenadines"
    },
    {
        "id": 3387,
        "name": "Saint David Parish",
        "country_name": "Saint Vincent And The Grenadines"
    },
    {
        "id": 3384,
        "name": "Saint George Parish",
        "country_name": "Saint Vincent And The Grenadines"
    },
    {
        "id": 3385,
        "name": "Saint Patrick Parish",
        "country_name": "Saint Vincent And The Grenadines"
    },
    {
        "id": 4763,
        "name": "A'ana",
        "country_name": "Samoa"
    },
    {
        "id": 4761,
        "name": "Aiga-i-le-Tai",
        "country_name": "Samoa"
    },
    {
        "id": 4765,
        "name": "Atua",
        "country_name": "Samoa"
    },
    {
        "id": 4764,
        "name": "Fa'asaleleaga",
        "country_name": "Samoa"
    },
    {
        "id": 4769,
        "name": "Gaga'emauga",
        "country_name": "Samoa"
    },
    {
        "id": 4771,
        "name": "Gaga'ifomauga",
        "country_name": "Samoa"
    },
    {
        "id": 4767,
        "name": "Palauli",
        "country_name": "Samoa"
    },
    {
        "id": 4762,
        "name": "Satupa'itea",
        "country_name": "Samoa"
    },
    {
        "id": 4770,
        "name": "Tuamasaga",
        "country_name": "Samoa"
    },
    {
        "id": 4768,
        "name": "Va'a-o-Fonoti",
        "country_name": "Samoa"
    },
    {
        "id": 4766,
        "name": "Vaisigano",
        "country_name": "Samoa"
    },
    {
        "id": 59,
        "name": "Acquaviva",
        "country_name": "San Marino"
    },
    {
        "id": 61,
        "name": "Borgo Maggiore",
        "country_name": "San Marino"
    },
    {
        "id": 60,
        "name": "Chiesanuova",
        "country_name": "San Marino"
    },
    {
        "id": 64,
        "name": "Domagnano",
        "country_name": "San Marino"
    },
    {
        "id": 62,
        "name": "Faetano",
        "country_name": "San Marino"
    },
    {
        "id": 66,
        "name": "Fiorentino",
        "country_name": "San Marino"
    },
    {
        "id": 63,
        "name": "Montegiardino",
        "country_name": "San Marino"
    },
    {
        "id": 58,
        "name": "San Marino",
        "country_name": "San Marino"
    },
    {
        "id": 65,
        "name": "Serravalle",
        "country_name": "San Marino"
    },
    {
        "id": 270,
        "name": "Príncipe Province",
        "country_name": "Sao Tome and Principe"
    },
    {
        "id": 271,
        "name": "São Tomé Province",
        "country_name": "Sao Tome and Principe"
    },
    {
        "id": 2853,
        "name": "'Asir",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2859,
        "name": "Al Bahah",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2857,
        "name": "Al Jawf",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2851,
        "name": "Al Madinah",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2861,
        "name": "Al-Qassim",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2856,
        "name": "Eastern Province",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2855,
        "name": "Ha'il",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2858,
        "name": "Jizan",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2850,
        "name": "Makkah",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2860,
        "name": "Najran",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2854,
        "name": "Northern Borders",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2849,
        "name": "Riyadh",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 2852,
        "name": "Tabuk",
        "country_name": "Saudi Arabia"
    },
    {
        "id": 473,
        "name": "Dakar",
        "country_name": "Senegal"
    },
    {
        "id": 480,
        "name": "Diourbel Region",
        "country_name": "Senegal"
    },
    {
        "id": 479,
        "name": "Fatick",
        "country_name": "Senegal"
    },
    {
        "id": 475,
        "name": "Kaffrine",
        "country_name": "Senegal"
    },
    {
        "id": 483,
        "name": "Kaolack",
        "country_name": "Senegal"
    },
    {
        "id": 481,
        "name": "Kédougou",
        "country_name": "Senegal"
    },
    {
        "id": 474,
        "name": "Kolda",
        "country_name": "Senegal"
    },
    {
        "id": 485,
        "name": "Louga",
        "country_name": "Senegal"
    },
    {
        "id": 476,
        "name": "Matam",
        "country_name": "Senegal"
    },
    {
        "id": 477,
        "name": "Saint-Louis",
        "country_name": "Senegal"
    },
    {
        "id": 482,
        "name": "Sédhiou",
        "country_name": "Senegal"
    },
    {
        "id": 486,
        "name": "Tambacounda Region",
        "country_name": "Senegal"
    },
    {
        "id": 484,
        "name": "Thiès Region",
        "country_name": "Senegal"
    },
    {
        "id": 478,
        "name": "Ziguinchor",
        "country_name": "Senegal"
    },
    {
        "id": 3728,
        "name": "Belgrade",
        "country_name": "Serbia"
    },
    {
        "id": 3717,
        "name": "Bor District",
        "country_name": "Serbia"
    },
    {
        "id": 3732,
        "name": "Braničevo District",
        "country_name": "Serbia"
    },
    {
        "id": 3716,
        "name": "Central Banat District",
        "country_name": "Serbia"
    },
    {
        "id": 3715,
        "name": "Jablanica District",
        "country_name": "Serbia"
    },
    {
        "id": 3724,
        "name": "Kolubara District",
        "country_name": "Serbia"
    },
    {
        "id": 3719,
        "name": "Mačva District",
        "country_name": "Serbia"
    },
    {
        "id": 3727,
        "name": "Moravica District",
        "country_name": "Serbia"
    },
    {
        "id": 3722,
        "name": "Nišava District",
        "country_name": "Serbia"
    },
    {
        "id": 3714,
        "name": "North Bačka District",
        "country_name": "Serbia"
    },
    {
        "id": 3736,
        "name": "North Banat District",
        "country_name": "Serbia"
    },
    {
        "id": 3721,
        "name": "Pčinja District",
        "country_name": "Serbia"
    },
    {
        "id": 3712,
        "name": "Pirot District",
        "country_name": "Serbia"
    },
    {
        "id": 3741,
        "name": "Podunavlje District",
        "country_name": "Serbia"
    },
    {
        "id": 3737,
        "name": "Pomoravlje District",
        "country_name": "Serbia"
    },
    {
        "id": 3720,
        "name": "Rasina District",
        "country_name": "Serbia"
    },
    {
        "id": 3725,
        "name": "Raška District",
        "country_name": "Serbia"
    },
    {
        "id": 3711,
        "name": "South Bačka District",
        "country_name": "Serbia"
    },
    {
        "id": 3713,
        "name": "South Banat District",
        "country_name": "Serbia"
    },
    {
        "id": 3740,
        "name": "Srem District",
        "country_name": "Serbia"
    },
    {
        "id": 3734,
        "name": "Šumadija District",
        "country_name": "Serbia"
    },
    {
        "id": 3718,
        "name": "Toplica District",
        "country_name": "Serbia"
    },
    {
        "id": 3733,
        "name": "Vojvodina",
        "country_name": "Serbia"
    },
    {
        "id": 3726,
        "name": "West Bačka District",
        "country_name": "Serbia"
    },
    {
        "id": 3731,
        "name": "Zaječar District",
        "country_name": "Serbia"
    },
    {
        "id": 3729,
        "name": "Zlatibor District",
        "country_name": "Serbia"
    },
    {
        "id": 513,
        "name": "Anse Boileau",
        "country_name": "Seychelles"
    },
    {
        "id": 502,
        "name": "Anse Royale",
        "country_name": "Seychelles"
    },
    {
        "id": 506,
        "name": "Anse-aux-Pins",
        "country_name": "Seychelles"
    },
    {
        "id": 508,
        "name": "Au Cap",
        "country_name": "Seychelles"
    },
    {
        "id": 497,
        "name": "Baie Lazare",
        "country_name": "Seychelles"
    },
    {
        "id": 514,
        "name": "Baie Sainte Anne",
        "country_name": "Seychelles"
    },
    {
        "id": 512,
        "name": "Beau Vallon",
        "country_name": "Seychelles"
    },
    {
        "id": 515,
        "name": "Bel Air",
        "country_name": "Seychelles"
    },
    {
        "id": 505,
        "name": "Bel Ombre",
        "country_name": "Seychelles"
    },
    {
        "id": 517,
        "name": "Cascade",
        "country_name": "Seychelles"
    },
    {
        "id": 503,
        "name": "Glacis",
        "country_name": "Seychelles"
    },
    {
        "id": 500,
        "name": "Grand'Anse Mahé",
        "country_name": "Seychelles"
    },
    {
        "id": 504,
        "name": "Grand'Anse Praslin",
        "country_name": "Seychelles"
    },
    {
        "id": 495,
        "name": "La Digue",
        "country_name": "Seychelles"
    },
    {
        "id": 516,
        "name": "La Rivière Anglaise",
        "country_name": "Seychelles"
    },
    {
        "id": 499,
        "name": "Les Mamelles",
        "country_name": "Seychelles"
    },
    {
        "id": 494,
        "name": "Mont Buxton",
        "country_name": "Seychelles"
    },
    {
        "id": 498,
        "name": "Mont Fleuri",
        "country_name": "Seychelles"
    },
    {
        "id": 511,
        "name": "Plaisance",
        "country_name": "Seychelles"
    },
    {
        "id": 510,
        "name": "Pointe La Rue",
        "country_name": "Seychelles"
    },
    {
        "id": 507,
        "name": "Port Glaud",
        "country_name": "Seychelles"
    },
    {
        "id": 501,
        "name": "Roche Caiman",
        "country_name": "Seychelles"
    },
    {
        "id": 496,
        "name": "Saint Louis",
        "country_name": "Seychelles"
    },
    {
        "id": 509,
        "name": "Takamaka",
        "country_name": "Seychelles"
    },
    {
        "id": 914,
        "name": "Eastern Province",
        "country_name": "Sierra Leone"
    },
    {
        "id": 911,
        "name": "Northern Province",
        "country_name": "Sierra Leone"
    },
    {
        "id": 912,
        "name": "Southern Province",
        "country_name": "Sierra Leone"
    },
    {
        "id": 913,
        "name": "Western Area",
        "country_name": "Sierra Leone"
    },
    {
        "id": 4651,
        "name": "Central Singapore Community Development Council",
        "country_name": "Singapore"
    },
    {
        "id": 4649,
        "name": "North East Community Development Council",
        "country_name": "Singapore"
    },
    {
        "id": 4653,
        "name": "North West Community Development Council",
        "country_name": "Singapore"
    },
    {
        "id": 4650,
        "name": "South East Community Development Council",
        "country_name": "Singapore"
    },
    {
        "id": 4652,
        "name": "South West Community Development Council",
        "country_name": "Singapore"
    },
    {
        "id": 4352,
        "name": "Banská Bystrica Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4356,
        "name": "Bratislava Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4353,
        "name": "Košice Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4357,
        "name": "Nitra Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4354,
        "name": "Prešov Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4358,
        "name": "Trenčín Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4355,
        "name": "Trnava Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4359,
        "name": "Žilina Region",
        "country_name": "Slovakia"
    },
    {
        "id": 4183,
        "name": "Ajdovščina Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4326,
        "name": "Ankaran Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4301,
        "name": "Beltinci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4166,
        "name": "Benedikt Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4179,
        "name": "Bistrica ob Sotli Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4202,
        "name": "Bled Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4278,
        "name": "Bloke Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4282,
        "name": "Bohinj Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4200,
        "name": "Borovnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4181,
        "name": "Bovec Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4141,
        "name": "Braslovče Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4240,
        "name": "Brda Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4215,
        "name": "Brežice Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4165,
        "name": "Brezovica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4147,
        "name": "Cankova Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4310,
        "name": "Cerklje na Gorenjskem Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4162,
        "name": "Cerknica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4178,
        "name": "Cerkno Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4176,
        "name": "Cerkvenjak Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4191,
        "name": "City Municipality of Celje",
        "country_name": "Slovenia"
    },
    {
        "id": 4236,
        "name": "City Municipality of Novo Mesto",
        "country_name": "Slovenia"
    },
    {
        "id": 4151,
        "name": "Črenšovci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4232,
        "name": "Črna na Koroškem Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4291,
        "name": "Črnomelj Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4304,
        "name": "Destrnik Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4167,
        "name": "Divača Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4295,
        "name": "Dobje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4216,
        "name": "Dobrepolje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4252,
        "name": "Dobrna Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4308,
        "name": "Dobrova–Polhov Gradec Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4189,
        "name": "Dobrovnik Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4173,
        "name": "Dol pri Ljubljani Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4281,
        "name": "Dolenjske Toplice Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4159,
        "name": "Domžale Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4290,
        "name": "Dornava Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4345,
        "name": "Dravograd Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4213,
        "name": "Duplek Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4293,
        "name": "Gorenja Vas–Poljane Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4210,
        "name": "Gorišnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4284,
        "name": "Gorje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4343,
        "name": "Gornja Radgona Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4339,
        "name": "Gornji Grad Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4271,
        "name": "Gornji Petrovci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4217,
        "name": "Grad Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4336,
        "name": "Grosuplje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4145,
        "name": "Hajdina Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4175,
        "name": "Hoče–Slivnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4327,
        "name": "Hodoš Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4193,
        "name": "Horjul Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4341,
        "name": "Hrastnik Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4321,
        "name": "Hrpelje–Kozina Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4152,
        "name": "Idrija Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4286,
        "name": "Ig Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4305,
        "name": "Ivančna Gorica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4322,
        "name": "Izola Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4337,
        "name": "Jesenice Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4203,
        "name": "Jezersko Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4266,
        "name": "Juršinci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4180,
        "name": "Kamnik Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4227,
        "name": "Kanal ob Soči Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4150,
        "name": "Kidričevo Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4243,
        "name": "Kobarid Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4325,
        "name": "Kobilje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4335,
        "name": "Kočevje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4315,
        "name": "Komen Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4283,
        "name": "Komenda Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4319,
        "name": "Koper City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4254,
        "name": "Kostanjevica na Krki Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4331,
        "name": "Kostel Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4186,
        "name": "Kozje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4287,
        "name": "Kranj City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4340,
        "name": "Kranjska Gora Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4238,
        "name": "Križevci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4197,
        "name": "Kungota",
        "country_name": "Slovenia"
    },
    {
        "id": 4211,
        "name": "Kuzma Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4338,
        "name": "Laško Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4142,
        "name": "Lenart Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4225,
        "name": "Lendava Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4347,
        "name": "Litija Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4270,
        "name": "Ljubljana City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4294,
        "name": "Ljubno Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4351,
        "name": "Ljutomer Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4306,
        "name": "Log–Dragomer Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4350,
        "name": "Logatec Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4174,
        "name": "Loška Dolina Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4158,
        "name": "Loški Potok Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4156,
        "name": "Lovrenc na Pohorju Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4219,
        "name": "Luče Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4302,
        "name": "Lukovica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4157,
        "name": "Majšperk Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4224,
        "name": "Makole Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4242,
        "name": "Maribor City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4244,
        "name": "Markovci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4349,
        "name": "Medvode Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4348,
        "name": "Mengeš Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4323,
        "name": "Metlika Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4265,
        "name": "Mežica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4223,
        "name": "Miklavž na Dravskem Polju Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4220,
        "name": "Miren–Kostanjevica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4298,
        "name": "Mirna Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4237,
        "name": "Mirna Peč Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4212,
        "name": "Mislinja Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4297,
        "name": "Mokronog–Trebelno Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4168,
        "name": "Moravče Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4218,
        "name": "Moravske Toplice Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4190,
        "name": "Mozirje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4318,
        "name": "Municipality of Apače",
        "country_name": "Slovenia"
    },
    {
        "id": 4309,
        "name": "Municipality of Cirkulane",
        "country_name": "Slovenia"
    },
    {
        "id": 4344,
        "name": "Municipality of Ilirska Bistrica",
        "country_name": "Slovenia"
    },
    {
        "id": 4314,
        "name": "Municipality of Krško",
        "country_name": "Slovenia"
    },
    {
        "id": 4187,
        "name": "Municipality of Škofljica",
        "country_name": "Slovenia"
    },
    {
        "id": 4313,
        "name": "Murska Sobota City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4208,
        "name": "Muta Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4177,
        "name": "Naklo Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4329,
        "name": "Nazarje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4205,
        "name": "Nova Gorica City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4320,
        "name": "Odranci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4143,
        "name": "Oplotnica",
        "country_name": "Slovenia"
    },
    {
        "id": 4221,
        "name": "Ormož Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4199,
        "name": "Osilnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4172,
        "name": "Pesnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4201,
        "name": "Piran Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4184,
        "name": "Pivka Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4146,
        "name": "Podčetrtek Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4161,
        "name": "Podlehnik Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4234,
        "name": "Podvelka Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4239,
        "name": "Poljčane Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4272,
        "name": "Polzela Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4330,
        "name": "Postojna Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4188,
        "name": "Prebold Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4303,
        "name": "Preddvor Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4274,
        "name": "Prevalje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4228,
        "name": "Ptuj City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4288,
        "name": "Puconci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4204,
        "name": "Rače–Fram Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4195,
        "name": "Radeče Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4292,
        "name": "Radenci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4275,
        "name": "Radlje ob Dravi Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4231,
        "name": "Radovljica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4155,
        "name": "Ravne na Koroškem Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4206,
        "name": "Razkrižje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4160,
        "name": "Rečica ob Savinji Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4253,
        "name": "Renče–Vogrsko Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4235,
        "name": "Ribnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4207,
        "name": "Ribnica na Pohorju Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4233,
        "name": "Rogaška Slatina Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4264,
        "name": "Rogašovci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4209,
        "name": "Rogatec Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4280,
        "name": "Ruše Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4222,
        "name": "Šalovci Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4230,
        "name": "Selnica ob Dravi Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4346,
        "name": "Semič Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4317,
        "name": "Šempeter–Vrtojba Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4299,
        "name": "Šenčur Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4324,
        "name": "Šentilj Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4241,
        "name": "Šentjernej Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4171,
        "name": "Šentjur Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4311,
        "name": "Šentrupert Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4268,
        "name": "Sevnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4149,
        "name": "Sežana Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4170,
        "name": "Škocjan Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4316,
        "name": "Škofja Loka Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4169,
        "name": "Slovenj Gradec City Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4332,
        "name": "Slovenska Bistrica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4198,
        "name": "Slovenske Konjice Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4285,
        "name": "Šmarje pri Jelšah Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4289,
        "name": "Šmarješke Toplice Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4296,
        "name": "Šmartno ob Paki Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4279,
        "name": "Šmartno pri Litiji Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4277,
        "name": "Sodražica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4261,
        "name": "Solčava Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4248,
        "name": "Šoštanj Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4263,
        "name": "Središče ob Dravi",
        "country_name": "Slovenia"
    },
    {
        "id": 4259,
        "name": "Starše Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4185,
        "name": "Štore Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4333,
        "name": "Straža Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4164,
        "name": "Sveta Ana Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4260,
        "name": "Sveta Trojica v Slovenskih Goricah Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4229,
        "name": "Sveti Andraž v Slovenskih Goricah Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4255,
        "name": "Sveti Jurij ob Ščavnici Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4328,
        "name": "Sveti Jurij v Slovenskih Goricah Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4273,
        "name": "Sveti Tomaž Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4194,
        "name": "Tabor Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4312,
        "name": "Tišina Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4247,
        "name": "Tolmin Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4246,
        "name": "Trbovlje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4214,
        "name": "Trebnje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4153,
        "name": "Trnovska Vas Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4250,
        "name": "Tržič Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4334,
        "name": "Trzin Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4251,
        "name": "Turnišče Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4267,
        "name": "Velika Polana Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4144,
        "name": "Velike Lašče Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4257,
        "name": "Veržej Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4300,
        "name": "Videm Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4196,
        "name": "Vipava Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4148,
        "name": "Vitanje Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4154,
        "name": "Vodice Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4245,
        "name": "Vojnik Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4163,
        "name": "Vransko Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4262,
        "name": "Vrhnika Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4226,
        "name": "Vuzenica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4269,
        "name": "Zagorje ob Savi Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4258,
        "name": "Žalec Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4182,
        "name": "Zavrč Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4256,
        "name": "Železniki Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4249,
        "name": "Žetale Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4192,
        "name": "Žiri Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4276,
        "name": "Žirovnica Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4342,
        "name": "Zreče Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4307,
        "name": "Žužemberk Municipality",
        "country_name": "Slovenia"
    },
    {
        "id": 4784,
        "name": "Central Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4781,
        "name": "Choiseul Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4785,
        "name": "Guadalcanal Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4778,
        "name": "Honiara",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4780,
        "name": "Isabel Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4782,
        "name": "Makira-Ulawa Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4783,
        "name": "Malaita Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4787,
        "name": "Rennell and Bellona Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4779,
        "name": "Temotu Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 4786,
        "name": "Western Province",
        "country_name": "Solomon Islands"
    },
    {
        "id": 925,
        "name": "Awdal Region",
        "country_name": "Somalia"
    },
    {
        "id": 917,
        "name": "Bakool",
        "country_name": "Somalia"
    },
    {
        "id": 927,
        "name": "Banaadir",
        "country_name": "Somalia"
    },
    {
        "id": 930,
        "name": "Bari",
        "country_name": "Somalia"
    },
    {
        "id": 926,
        "name": "Bay",
        "country_name": "Somalia"
    },
    {
        "id": 918,
        "name": "Galguduud",
        "country_name": "Somalia"
    },
    {
        "id": 928,
        "name": "Gedo",
        "country_name": "Somalia"
    },
    {
        "id": 915,
        "name": "Hiran",
        "country_name": "Somalia"
    },
    {
        "id": 924,
        "name": "Lower Juba",
        "country_name": "Somalia"
    },
    {
        "id": 921,
        "name": "Lower Shebelle",
        "country_name": "Somalia"
    },
    {
        "id": 922,
        "name": "Middle Juba",
        "country_name": "Somalia"
    },
    {
        "id": 923,
        "name": "Middle Shebelle",
        "country_name": "Somalia"
    },
    {
        "id": 916,
        "name": "Mudug",
        "country_name": "Somalia"
    },
    {
        "id": 920,
        "name": "Nugal",
        "country_name": "Somalia"
    },
    {
        "id": 919,
        "name": "Sanaag Region",
        "country_name": "Somalia"
    },
    {
        "id": 929,
        "name": "Togdheer Region",
        "country_name": "Somalia"
    },
    {
        "id": 938,
        "name": "Eastern Cape",
        "country_name": "South Africa"
    },
    {
        "id": 932,
        "name": "Free State",
        "country_name": "South Africa"
    },
    {
        "id": 936,
        "name": "Gauteng",
        "country_name": "South Africa"
    },
    {
        "id": 935,
        "name": "KwaZulu-Natal",
        "country_name": "South Africa"
    },
    {
        "id": 933,
        "name": "Limpopo",
        "country_name": "South Africa"
    },
    {
        "id": 937,
        "name": "Mpumalanga",
        "country_name": "South Africa"
    },
    {
        "id": 934,
        "name": "North West",
        "country_name": "South Africa"
    },
    {
        "id": 931,
        "name": "Northern Cape",
        "country_name": "South Africa"
    },
    {
        "id": 939,
        "name": "Western Cape",
        "country_name": "South Africa"
    },
    {
        "id": 3860,
        "name": "Busan",
        "country_name": "South Korea"
    },
    {
        "id": 3846,
        "name": "Daegu",
        "country_name": "South Korea"
    },
    {
        "id": 3850,
        "name": "Daejeon",
        "country_name": "South Korea"
    },
    {
        "id": 3862,
        "name": "Gangwon Province",
        "country_name": "South Korea"
    },
    {
        "id": 3858,
        "name": "Gwangju",
        "country_name": "South Korea"
    },
    {
        "id": 3847,
        "name": "Gyeonggi Province",
        "country_name": "South Korea"
    },
    {
        "id": 3848,
        "name": "Incheon",
        "country_name": "South Korea"
    },
    {
        "id": 3853,
        "name": "Jeju",
        "country_name": "South Korea"
    },
    {
        "id": 3854,
        "name": "North Chungcheong Province",
        "country_name": "South Korea"
    },
    {
        "id": 3855,
        "name": "North Gyeongsang Province",
        "country_name": "South Korea"
    },
    {
        "id": 3851,
        "name": "North Jeolla Province",
        "country_name": "South Korea"
    },
    {
        "id": 3861,
        "name": "Sejong City",
        "country_name": "South Korea"
    },
    {
        "id": 3849,
        "name": "Seoul",
        "country_name": "South Korea"
    },
    {
        "id": 3859,
        "name": "South Chungcheong Province",
        "country_name": "South Korea"
    },
    {
        "id": 3857,
        "name": "South Gyeongsang Province",
        "country_name": "South Korea"
    },
    {
        "id": 3856,
        "name": "South Jeolla Province",
        "country_name": "South Korea"
    },
    {
        "id": 3852,
        "name": "Ulsan",
        "country_name": "South Korea"
    },
    {
        "id": 2092,
        "name": "Central Equatoria",
        "country_name": "South Sudan"
    },
    {
        "id": 2093,
        "name": "Eastern Equatoria",
        "country_name": "South Sudan"
    },
    {
        "id": 2094,
        "name": "Jonglei State",
        "country_name": "South Sudan"
    },
    {
        "id": 2090,
        "name": "Lakes",
        "country_name": "South Sudan"
    },
    {
        "id": 2088,
        "name": "Northern Bahr el Ghazal",
        "country_name": "South Sudan"
    },
    {
        "id": 2085,
        "name": "Unity",
        "country_name": "South Sudan"
    },
    {
        "id": 2086,
        "name": "Upper Nile",
        "country_name": "South Sudan"
    },
    {
        "id": 2087,
        "name": "Warrap",
        "country_name": "South Sudan"
    },
    {
        "id": 2091,
        "name": "Western Bahr el Ghazal",
        "country_name": "South Sudan"
    },
    {
        "id": 2089,
        "name": "Western Equatoria",
        "country_name": "South Sudan"
    },
    {
        "id": 1193,
        "name": "Andalusia",
        "country_name": "Spain"
    },
    {
        "id": 1177,
        "name": "Aragon",
        "country_name": "Spain"
    },
    {
        "id": 1160,
        "name": "Asturias",
        "country_name": "Spain"
    },
    {
        "id": 1189,
        "name": "Ávila",
        "country_name": "Spain"
    },
    {
        "id": 1174,
        "name": "Balearic Islands",
        "country_name": "Spain"
    },
    {
        "id": 1191,
        "name": "Basque Country",
        "country_name": "Spain"
    },
    {
        "id": 1146,
        "name": "Burgos Province",
        "country_name": "Spain"
    },
    {
        "id": 1185,
        "name": "Canary Islands",
        "country_name": "Spain"
    },
    {
        "id": 1170,
        "name": "Cantabria",
        "country_name": "Spain"
    },
    {
        "id": 1184,
        "name": "Castile and León",
        "country_name": "Spain"
    },
    {
        "id": 1205,
        "name": "Castilla La Mancha",
        "country_name": "Spain"
    },
    {
        "id": 1203,
        "name": "Catalonia",
        "country_name": "Spain"
    },
    {
        "id": 1206,
        "name": "Ceuta",
        "country_name": "Spain"
    },
    {
        "id": 1190,
        "name": "Extremadura",
        "country_name": "Spain"
    },
    {
        "id": 1167,
        "name": "Galicia",
        "country_name": "Spain"
    },
    {
        "id": 1171,
        "name": "La Rioja",
        "country_name": "Spain"
    },
    {
        "id": 1200,
        "name": "Léon",
        "country_name": "Spain"
    },
    {
        "id": 1158,
        "name": "Madrid",
        "country_name": "Spain"
    },
    {
        "id": 1159,
        "name": "Melilla",
        "country_name": "Spain"
    },
    {
        "id": 1176,
        "name": "Murcia",
        "country_name": "Spain"
    },
    {
        "id": 1204,
        "name": "Navarra",
        "country_name": "Spain"
    },
    {
        "id": 1157,
        "name": "Palencia Province",
        "country_name": "Spain"
    },
    {
        "id": 1147,
        "name": "Salamanca Province",
        "country_name": "Spain"
    },
    {
        "id": 1192,
        "name": "Segovia Province",
        "country_name": "Spain"
    },
    {
        "id": 1208,
        "name": "Soria Province",
        "country_name": "Spain"
    },
    {
        "id": 1175,
        "name": "Valencia",
        "country_name": "Spain"
    },
    {
        "id": 1183,
        "name": "Valladolid Province",
        "country_name": "Spain"
    },
    {
        "id": 1161,
        "name": "Zamora Province",
        "country_name": "Spain"
    },
    {
        "id": 2799,
        "name": "Ampara District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2816,
        "name": "Anuradhapura District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2790,
        "name": "Badulla District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2818,
        "name": "Batticaloa District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2798,
        "name": "Central Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2815,
        "name": "Colombo District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2808,
        "name": "Eastern Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2792,
        "name": "Galle District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2804,
        "name": "Gampaha District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2791,
        "name": "Hambantota District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2787,
        "name": "Jaffna District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2789,
        "name": "Kalutara District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2788,
        "name": "Kandy District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2797,
        "name": "Kegalle District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2793,
        "name": "Kilinochchi District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2805,
        "name": "Mannar District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2810,
        "name": "Matale District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2806,
        "name": "Matara District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2819,
        "name": "Monaragala District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2814,
        "name": "Mullaitivu District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2800,
        "name": "North Central Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2817,
        "name": "North Western Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2813,
        "name": "Northern Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2794,
        "name": "Nuwara Eliya District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2812,
        "name": "Polonnaruwa District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2796,
        "name": "Puttalam District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2807,
        "name": "Ratnapura district",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2803,
        "name": "Sabaragamuwa Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2801,
        "name": "Southern Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2795,
        "name": "Trincomalee District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2811,
        "name": "Uva Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2809,
        "name": "Vavuniya District",
        "country_name": "Sri Lanka"
    },
    {
        "id": 2802,
        "name": "Western Province",
        "country_name": "Sri Lanka"
    },
    {
        "id": 885,
        "name": "Al Jazirah",
        "country_name": "Sudan"
    },
    {
        "id": 886,
        "name": "Al Qadarif",
        "country_name": "Sudan"
    },
    {
        "id": 887,
        "name": "Blue Nile",
        "country_name": "Sudan"
    },
    {
        "id": 896,
        "name": "Central Darfur",
        "country_name": "Sudan"
    },
    {
        "id": 892,
        "name": "East Darfur",
        "country_name": "Sudan"
    },
    {
        "id": 884,
        "name": "Kassala",
        "country_name": "Sudan"
    },
    {
        "id": 881,
        "name": "Khartoum",
        "country_name": "Sudan"
    },
    {
        "id": 890,
        "name": "North Darfur",
        "country_name": "Sudan"
    },
    {
        "id": 893,
        "name": "North Kordofan",
        "country_name": "Sudan"
    },
    {
        "id": 895,
        "name": "Northern",
        "country_name": "Sudan"
    },
    {
        "id": 880,
        "name": "Red Sea",
        "country_name": "Sudan"
    },
    {
        "id": 891,
        "name": "River Nile",
        "country_name": "Sudan"
    },
    {
        "id": 882,
        "name": "Sennar",
        "country_name": "Sudan"
    },
    {
        "id": 894,
        "name": "South Darfur",
        "country_name": "Sudan"
    },
    {
        "id": 883,
        "name": "South Kordofan",
        "country_name": "Sudan"
    },
    {
        "id": 888,
        "name": "West Darfur",
        "country_name": "Sudan"
    },
    {
        "id": 889,
        "name": "West Kordofan",
        "country_name": "Sudan"
    },
    {
        "id": 879,
        "name": "White Nile",
        "country_name": "Sudan"
    },
    {
        "id": 2846,
        "name": "Brokopondo District",
        "country_name": "Suriname"
    },
    {
        "id": 2839,
        "name": "Commewijne District",
        "country_name": "Suriname"
    },
    {
        "id": 2842,
        "name": "Coronie District",
        "country_name": "Suriname"
    },
    {
        "id": 2845,
        "name": "Marowijne District",
        "country_name": "Suriname"
    },
    {
        "id": 2840,
        "name": "Nickerie District",
        "country_name": "Suriname"
    },
    {
        "id": 2841,
        "name": "Para District",
        "country_name": "Suriname"
    },
    {
        "id": 2843,
        "name": "Paramaribo District",
        "country_name": "Suriname"
    },
    {
        "id": 2848,
        "name": "Saramacca District",
        "country_name": "Suriname"
    },
    {
        "id": 2847,
        "name": "Sipaliwini District",
        "country_name": "Suriname"
    },
    {
        "id": 2844,
        "name": "Wanica District",
        "country_name": "Suriname"
    },
    {
        "id": 969,
        "name": "Hhohho District",
        "country_name": "Swaziland"
    },
    {
        "id": 970,
        "name": "Lubombo District",
        "country_name": "Swaziland"
    },
    {
        "id": 968,
        "name": "Manzini District",
        "country_name": "Swaziland"
    },
    {
        "id": 971,
        "name": "Shiselweni District",
        "country_name": "Swaziland"
    },
    {
        "id": 1537,
        "name": "Blekinge",
        "country_name": "Sweden"
    },
    {
        "id": 1534,
        "name": "Dalarna County",
        "country_name": "Sweden"
    },
    {
        "id": 1533,
        "name": "Gävleborg County",
        "country_name": "Sweden"
    },
    {
        "id": 1546,
        "name": "Gotland County",
        "country_name": "Sweden"
    },
    {
        "id": 1548,
        "name": "Halland County",
        "country_name": "Sweden"
    },
    {
        "id": 1550,
        "name": "Jönköping County",
        "country_name": "Sweden"
    },
    {
        "id": 1544,
        "name": "Kalmar County",
        "country_name": "Sweden"
    },
    {
        "id": 1542,
        "name": "Kronoberg County",
        "country_name": "Sweden"
    },
    {
        "id": 1538,
        "name": "Norrbotten County",
        "country_name": "Sweden"
    },
    {
        "id": 1539,
        "name": "Örebro County",
        "country_name": "Sweden"
    },
    {
        "id": 1536,
        "name": "Östergötland County",
        "country_name": "Sweden"
    },
    {
        "id": 1541,
        "name": "Skåne County",
        "country_name": "Sweden"
    },
    {
        "id": 1540,
        "name": "Södermanland County",
        "country_name": "Sweden"
    },
    {
        "id": 1551,
        "name": "Stockholm County",
        "country_name": "Sweden"
    },
    {
        "id": 1545,
        "name": "Uppsala County",
        "country_name": "Sweden"
    },
    {
        "id": 1535,
        "name": "Värmland County",
        "country_name": "Sweden"
    },
    {
        "id": 1543,
        "name": "Västerbotten County",
        "country_name": "Sweden"
    },
    {
        "id": 1552,
        "name": "Västernorrland County",
        "country_name": "Sweden"
    },
    {
        "id": 1549,
        "name": "Västmanland County",
        "country_name": "Sweden"
    },
    {
        "id": 1547,
        "name": "Västra Götaland County",
        "country_name": "Sweden"
    },
    {
        "id": 1639,
        "name": "Aargau",
        "country_name": "Switzerland"
    },
    {
        "id": 1655,
        "name": "Appenzell Ausserrhoden",
        "country_name": "Switzerland"
    },
    {
        "id": 1649,
        "name": "Appenzell Innerrhoden",
        "country_name": "Switzerland"
    },
    {
        "id": 1641,
        "name": "Basel-Land",
        "country_name": "Switzerland"
    },
    {
        "id": 4957,
        "name": "Basel-Stadt",
        "country_name": "Switzerland"
    },
    {
        "id": 1645,
        "name": "Bern",
        "country_name": "Switzerland"
    },
    {
        "id": 1640,
        "name": "Fribourg",
        "country_name": "Switzerland"
    },
    {
        "id": 1647,
        "name": "Geneva",
        "country_name": "Switzerland"
    },
    {
        "id": 1661,
        "name": "Glarus",
        "country_name": "Switzerland"
    },
    {
        "id": 1660,
        "name": "Graubünden",
        "country_name": "Switzerland"
    },
    {
        "id": 1658,
        "name": "Jura",
        "country_name": "Switzerland"
    },
    {
        "id": 1663,
        "name": "Lucerne",
        "country_name": "Switzerland"
    },
    {
        "id": 1659,
        "name": "Neuchâtel",
        "country_name": "Switzerland"
    },
    {
        "id": 1652,
        "name": "Nidwalden",
        "country_name": "Switzerland"
    },
    {
        "id": 1650,
        "name": "Obwalden",
        "country_name": "Switzerland"
    },
    {
        "id": 1654,
        "name": "Schaffhausen",
        "country_name": "Switzerland"
    },
    {
        "id": 1653,
        "name": "Schwyz",
        "country_name": "Switzerland"
    },
    {
        "id": 1662,
        "name": "Solothurn",
        "country_name": "Switzerland"
    },
    {
        "id": 1644,
        "name": "St. Gallen",
        "country_name": "Switzerland"
    },
    {
        "id": 1657,
        "name": "Thurgau",
        "country_name": "Switzerland"
    },
    {
        "id": 1643,
        "name": "Ticino",
        "country_name": "Switzerland"
    },
    {
        "id": 1642,
        "name": "Uri",
        "country_name": "Switzerland"
    },
    {
        "id": 1648,
        "name": "Valais",
        "country_name": "Switzerland"
    },
    {
        "id": 1651,
        "name": "Vaud",
        "country_name": "Switzerland"
    },
    {
        "id": 1646,
        "name": "Zug",
        "country_name": "Switzerland"
    },
    {
        "id": 1656,
        "name": "Zürich",
        "country_name": "Switzerland"
    },
    {
        "id": 2941,
        "name": "Al-Hasakah Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2944,
        "name": "Al-Raqqah Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2946,
        "name": "Aleppo Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2936,
        "name": "As-Suwayda Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2939,
        "name": "Damascus Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2945,
        "name": "Daraa Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2937,
        "name": "Deir ez-Zor Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2934,
        "name": "Hama Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2942,
        "name": "Homs Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2940,
        "name": "Idlib Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2938,
        "name": "Latakia Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2943,
        "name": "Quneitra Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2935,
        "name": "Rif Dimashq Governorate",
        "country_name": "Syria"
    },
    {
        "id": 2947,
        "name": "Tartus Governorate",
        "country_name": "Syria"
    },
    {
        "id": 3404,
        "name": "Changhua",
        "country_name": "Taiwan"
    },
    {
        "id": 3408,
        "name": "Chiayi",
        "country_name": "Taiwan"
    },
    {
        "id": 3418,
        "name": "Chiayi",
        "country_name": "Taiwan"
    },
    {
        "id": 3423,
        "name": "Hsinchu",
        "country_name": "Taiwan"
    },
    {
        "id": 3417,
        "name": "Hsinchu",
        "country_name": "Taiwan"
    },
    {
        "id": 3411,
        "name": "Hualien",
        "country_name": "Taiwan"
    },
    {
        "id": 3412,
        "name": "Kaohsiung",
        "country_name": "Taiwan"
    },
    {
        "id": 4965,
        "name": "Keelung",
        "country_name": "Taiwan"
    },
    {
        "id": 3415,
        "name": "Kinmen",
        "country_name": "Taiwan"
    },
    {
        "id": 3420,
        "name": "Lienchiang",
        "country_name": "Taiwan"
    },
    {
        "id": 3413,
        "name": "Miaoli",
        "country_name": "Taiwan"
    },
    {
        "id": 3407,
        "name": "Nantou",
        "country_name": "Taiwan"
    },
    {
        "id": 4966,
        "name": "New Taipei",
        "country_name": "Taiwan"
    },
    {
        "id": 3403,
        "name": "Penghu",
        "country_name": "Taiwan"
    },
    {
        "id": 3405,
        "name": "Pingtung",
        "country_name": "Taiwan"
    },
    {
        "id": 3406,
        "name": "Taichung",
        "country_name": "Taiwan"
    },
    {
        "id": 3421,
        "name": "Tainan",
        "country_name": "Taiwan"
    },
    {
        "id": 3422,
        "name": "Taipei",
        "country_name": "Taiwan"
    },
    {
        "id": 3410,
        "name": "Taitung",
        "country_name": "Taiwan"
    },
    {
        "id": 3419,
        "name": "Taoyuan",
        "country_name": "Taiwan"
    },
    {
        "id": 3402,
        "name": "Yilan",
        "country_name": "Taiwan"
    },
    {
        "id": 3416,
        "name": "Yunlin",
        "country_name": "Taiwan"
    },
    {
        "id": 3397,
        "name": "districts of Republican Subordination",
        "country_name": "Tajikistan"
    },
    {
        "id": 3399,
        "name": "Gorno-Badakhshan Autonomous Province",
        "country_name": "Tajikistan"
    },
    {
        "id": 3398,
        "name": "Khatlon Province",
        "country_name": "Tajikistan"
    },
    {
        "id": 3400,
        "name": "Sughd Province",
        "country_name": "Tajikistan"
    },
    {
        "id": 1491,
        "name": "Arusha",
        "country_name": "Tanzania"
    },
    {
        "id": 1490,
        "name": "Dar es Salaam",
        "country_name": "Tanzania"
    },
    {
        "id": 1466,
        "name": "Dodoma",
        "country_name": "Tanzania"
    },
    {
        "id": 1481,
        "name": "Geita",
        "country_name": "Tanzania"
    },
    {
        "id": 1489,
        "name": "Iringa",
        "country_name": "Tanzania"
    },
    {
        "id": 1465,
        "name": "Kagera",
        "country_name": "Tanzania"
    },
    {
        "id": 1482,
        "name": "Katavi",
        "country_name": "Tanzania"
    },
    {
        "id": 1478,
        "name": "Kigoma",
        "country_name": "Tanzania"
    },
    {
        "id": 1467,
        "name": "Kilimanjaro",
        "country_name": "Tanzania"
    },
    {
        "id": 1483,
        "name": "Lindi",
        "country_name": "Tanzania"
    },
    {
        "id": 1484,
        "name": "Manyara",
        "country_name": "Tanzania"
    },
    {
        "id": 1468,
        "name": "Mara",
        "country_name": "Tanzania"
    },
    {
        "id": 4955,
        "name": "Mbeya",
        "country_name": "Tanzania"
    },
    {
        "id": 1470,
        "name": "Morogoro",
        "country_name": "Tanzania"
    },
    {
        "id": 1476,
        "name": "Mtwara",
        "country_name": "Tanzania"
    },
    {
        "id": 1479,
        "name": "Mwanza",
        "country_name": "Tanzania"
    },
    {
        "id": 1480,
        "name": "Njombe",
        "country_name": "Tanzania"
    },
    {
        "id": 1488,
        "name": "Pemba North",
        "country_name": "Tanzania"
    },
    {
        "id": 1472,
        "name": "Pemba South",
        "country_name": "Tanzania"
    },
    {
        "id": 1485,
        "name": "Pwani",
        "country_name": "Tanzania"
    },
    {
        "id": 1477,
        "name": "Rukwa",
        "country_name": "Tanzania"
    },
    {
        "id": 1486,
        "name": "Ruvuma",
        "country_name": "Tanzania"
    },
    {
        "id": 1463,
        "name": "Shinyanga",
        "country_name": "Tanzania"
    },
    {
        "id": 1464,
        "name": "Simiyu",
        "country_name": "Tanzania"
    },
    {
        "id": 1474,
        "name": "Singida",
        "country_name": "Tanzania"
    },
    {
        "id": 4956,
        "name": "Songwe",
        "country_name": "Tanzania"
    },
    {
        "id": 1469,
        "name": "Tabora",
        "country_name": "Tanzania"
    },
    {
        "id": 1487,
        "name": "Tanga",
        "country_name": "Tanzania"
    },
    {
        "id": 1473,
        "name": "Zanzibar North",
        "country_name": "Tanzania"
    },
    {
        "id": 1471,
        "name": "Zanzibar South",
        "country_name": "Tanzania"
    },
    {
        "id": 1475,
        "name": "Zanzibar West",
        "country_name": "Tanzania"
    },
    {
        "id": 3523,
        "name": "Amnat Charoen",
        "country_name": "Thailand"
    },
    {
        "id": 3519,
        "name": "Ang Thong",
        "country_name": "Thailand"
    },
    {
        "id": 3554,
        "name": "Bangkok",
        "country_name": "Thailand"
    },
    {
        "id": 3533,
        "name": "Bueng Kan",
        "country_name": "Thailand"
    },
    {
        "id": 3534,
        "name": "Buri Ram",
        "country_name": "Thailand"
    },
    {
        "id": 3552,
        "name": "Chachoengsao",
        "country_name": "Thailand"
    },
    {
        "id": 3522,
        "name": "Chai Nat",
        "country_name": "Thailand"
    },
    {
        "id": 4954,
        "name": "Chaiyaphum",
        "country_name": "Thailand"
    },
    {
        "id": 3486,
        "name": "Chanthaburi",
        "country_name": "Thailand"
    },
    {
        "id": 3491,
        "name": "Chiang Mai",
        "country_name": "Thailand"
    },
    {
        "id": 3498,
        "name": "Chiang Rai",
        "country_name": "Thailand"
    },
    {
        "id": 3513,
        "name": "Chon Buri",
        "country_name": "Thailand"
    },
    {
        "id": 3526,
        "name": "Chumphon",
        "country_name": "Thailand"
    },
    {
        "id": 3550,
        "name": "Kalasin",
        "country_name": "Thailand"
    },
    {
        "id": 3516,
        "name": "Kamphaeng Phet",
        "country_name": "Thailand"
    },
    {
        "id": 3511,
        "name": "Kanchanaburi",
        "country_name": "Thailand"
    },
    {
        "id": 3485,
        "name": "Khon Kaen",
        "country_name": "Thailand"
    },
    {
        "id": 3478,
        "name": "Krabi",
        "country_name": "Thailand"
    },
    {
        "id": 3544,
        "name": "Lampang",
        "country_name": "Thailand"
    },
    {
        "id": 3483,
        "name": "Lamphun",
        "country_name": "Thailand"
    },
    {
        "id": 3509,
        "name": "Loei",
        "country_name": "Thailand"
    },
    {
        "id": 3543,
        "name": "Lop Buri",
        "country_name": "Thailand"
    },
    {
        "id": 3505,
        "name": "Mae Hong Son",
        "country_name": "Thailand"
    },
    {
        "id": 3517,
        "name": "Maha Sarakham",
        "country_name": "Thailand"
    },
    {
        "id": 3546,
        "name": "Mukdahan",
        "country_name": "Thailand"
    },
    {
        "id": 3535,
        "name": "Nakhon Nayok",
        "country_name": "Thailand"
    },
    {
        "id": 3503,
        "name": "Nakhon Pathom",
        "country_name": "Thailand"
    },
    {
        "id": 3548,
        "name": "Nakhon Phanom",
        "country_name": "Thailand"
    },
    {
        "id": 3497,
        "name": "Nakhon Ratchasima",
        "country_name": "Thailand"
    },
    {
        "id": 3492,
        "name": "Nakhon Sawan",
        "country_name": "Thailand"
    },
    {
        "id": 3520,
        "name": "Nakhon Si Thammarat",
        "country_name": "Thailand"
    },
    {
        "id": 3530,
        "name": "Nan",
        "country_name": "Thailand"
    },
    {
        "id": 3553,
        "name": "Narathiwat",
        "country_name": "Thailand"
    },
    {
        "id": 3480,
        "name": "Nong Bua Lam Phu",
        "country_name": "Thailand"
    },
    {
        "id": 3484,
        "name": "Nong Khai",
        "country_name": "Thailand"
    },
    {
        "id": 3495,
        "name": "Nonthaburi",
        "country_name": "Thailand"
    },
    {
        "id": 3500,
        "name": "Pathum Thani",
        "country_name": "Thailand"
    },
    {
        "id": 3540,
        "name": "Pattani",
        "country_name": "Thailand"
    },
    {
        "id": 3507,
        "name": "Pattaya",
        "country_name": "Thailand"
    },
    {
        "id": 3549,
        "name": "Phangnga",
        "country_name": "Thailand"
    },
    {
        "id": 3488,
        "name": "Phatthalung",
        "country_name": "Thailand"
    },
    {
        "id": 3538,
        "name": "Phayao",
        "country_name": "Thailand"
    },
    {
        "id": 3515,
        "name": "Phetchabun",
        "country_name": "Thailand"
    },
    {
        "id": 3532,
        "name": "Phetchaburi",
        "country_name": "Thailand"
    },
    {
        "id": 3514,
        "name": "Phichit",
        "country_name": "Thailand"
    },
    {
        "id": 3506,
        "name": "Phitsanulok",
        "country_name": "Thailand"
    },
    {
        "id": 3494,
        "name": "Phra Nakhon Si Ayutthaya",
        "country_name": "Thailand"
    },
    {
        "id": 3528,
        "name": "Phrae",
        "country_name": "Thailand"
    },
    {
        "id": 3536,
        "name": "Phuket",
        "country_name": "Thailand"
    },
    {
        "id": 3542,
        "name": "Prachin Buri",
        "country_name": "Thailand"
    },
    {
        "id": 3508,
        "name": "Prachuap Khiri Khan",
        "country_name": "Thailand"
    },
    {
        "id": 3479,
        "name": "Ranong",
        "country_name": "Thailand"
    },
    {
        "id": 3499,
        "name": "Ratchaburi",
        "country_name": "Thailand"
    },
    {
        "id": 3518,
        "name": "Rayong",
        "country_name": "Thailand"
    },
    {
        "id": 3510,
        "name": "Roi Et",
        "country_name": "Thailand"
    },
    {
        "id": 3529,
        "name": "Sa Kaeo",
        "country_name": "Thailand"
    },
    {
        "id": 3501,
        "name": "Sakon Nakhon",
        "country_name": "Thailand"
    },
    {
        "id": 3481,
        "name": "Samut Prakan",
        "country_name": "Thailand"
    },
    {
        "id": 3504,
        "name": "Samut Sakhon",
        "country_name": "Thailand"
    },
    {
        "id": 3502,
        "name": "Samut Songkhram",
        "country_name": "Thailand"
    },
    {
        "id": 3487,
        "name": "Saraburi",
        "country_name": "Thailand"
    },
    {
        "id": 3537,
        "name": "Satun",
        "country_name": "Thailand"
    },
    {
        "id": 3547,
        "name": "Si Sa Ket",
        "country_name": "Thailand"
    },
    {
        "id": 3490,
        "name": "Sing Buri",
        "country_name": "Thailand"
    },
    {
        "id": 3539,
        "name": "Songkhla",
        "country_name": "Thailand"
    },
    {
        "id": 3545,
        "name": "Sukhothai",
        "country_name": "Thailand"
    },
    {
        "id": 3524,
        "name": "Suphan Buri",
        "country_name": "Thailand"
    },
    {
        "id": 3482,
        "name": "Surat Thani",
        "country_name": "Thailand"
    },
    {
        "id": 3531,
        "name": "Surin",
        "country_name": "Thailand"
    },
    {
        "id": 3525,
        "name": "Tak",
        "country_name": "Thailand"
    },
    {
        "id": 3541,
        "name": "Trang",
        "country_name": "Thailand"
    },
    {
        "id": 3496,
        "name": "Trat",
        "country_name": "Thailand"
    },
    {
        "id": 3512,
        "name": "Ubon Ratchathani",
        "country_name": "Thailand"
    },
    {
        "id": 3527,
        "name": "Udon Thani",
        "country_name": "Thailand"
    },
    {
        "id": 3551,
        "name": "Uthai Thani",
        "country_name": "Thailand"
    },
    {
        "id": 3489,
        "name": "Uttaradit",
        "country_name": "Thailand"
    },
    {
        "id": 3493,
        "name": "Yala",
        "country_name": "Thailand"
    },
    {
        "id": 3521,
        "name": "Yasothon",
        "country_name": "Thailand"
    },
    {
        "id": 3601,
        "name": "Acklins",
        "country_name": "The Bahamas"
    },
    {
        "id": 3628,
        "name": "Acklins and Crooked Islands",
        "country_name": "The Bahamas"
    },
    {
        "id": 3593,
        "name": "Berry Islands",
        "country_name": "The Bahamas"
    },
    {
        "id": 3629,
        "name": "Bimini",
        "country_name": "The Bahamas"
    },
    {
        "id": 3605,
        "name": "Black Point",
        "country_name": "The Bahamas"
    },
    {
        "id": 3611,
        "name": "Cat Island",
        "country_name": "The Bahamas"
    },
    {
        "id": 3603,
        "name": "Central Abaco",
        "country_name": "The Bahamas"
    },
    {
        "id": 3631,
        "name": "Central Andros",
        "country_name": "The Bahamas"
    },
    {
        "id": 3596,
        "name": "Central Eleuthera",
        "country_name": "The Bahamas"
    },
    {
        "id": 3621,
        "name": "Crooked Island",
        "country_name": "The Bahamas"
    },
    {
        "id": 3614,
        "name": "East Grand Bahama",
        "country_name": "The Bahamas"
    },
    {
        "id": 3612,
        "name": "Exuma",
        "country_name": "The Bahamas"
    },
    {
        "id": 3626,
        "name": "Freeport",
        "country_name": "The Bahamas"
    },
    {
        "id": 3619,
        "name": "Fresh Creek",
        "country_name": "The Bahamas"
    },
    {
        "id": 3597,
        "name": "Governor's Harbour",
        "country_name": "The Bahamas"
    },
    {
        "id": 3632,
        "name": "Grand Cay",
        "country_name": "The Bahamas"
    },
    {
        "id": 3595,
        "name": "Green Turtle Cay",
        "country_name": "The Bahamas"
    },
    {
        "id": 3613,
        "name": "Harbour Island",
        "country_name": "The Bahamas"
    },
    {
        "id": 3598,
        "name": "High Rock",
        "country_name": "The Bahamas"
    },
    {
        "id": 3624,
        "name": "Hope Town",
        "country_name": "The Bahamas"
    },
    {
        "id": 3609,
        "name": "Inagua",
        "country_name": "The Bahamas"
    },
    {
        "id": 3618,
        "name": "Kemps Bay",
        "country_name": "The Bahamas"
    },
    {
        "id": 3610,
        "name": "Long Island",
        "country_name": "The Bahamas"
    },
    {
        "id": 3625,
        "name": "Mangrove Cay",
        "country_name": "The Bahamas"
    },
    {
        "id": 3604,
        "name": "Marsh Harbour",
        "country_name": "The Bahamas"
    },
    {
        "id": 3633,
        "name": "Mayaguana District",
        "country_name": "The Bahamas"
    },
    {
        "id": 4881,
        "name": "New Providence",
        "country_name": "The Bahamas"
    },
    {
        "id": 3594,
        "name": "Nichollstown and Berry Islands",
        "country_name": "The Bahamas"
    },
    {
        "id": 3616,
        "name": "North Abaco",
        "country_name": "The Bahamas"
    },
    {
        "id": 3617,
        "name": "North Andros",
        "country_name": "The Bahamas"
    },
    {
        "id": 3602,
        "name": "North Eleuthera",
        "country_name": "The Bahamas"
    },
    {
        "id": 3615,
        "name": "Ragged Island",
        "country_name": "The Bahamas"
    },
    {
        "id": 3623,
        "name": "Rock Sound",
        "country_name": "The Bahamas"
    },
    {
        "id": 3600,
        "name": "Rum Cay District",
        "country_name": "The Bahamas"
    },
    {
        "id": 3620,
        "name": "San Salvador and Rum Cay",
        "country_name": "The Bahamas"
    },
    {
        "id": 3627,
        "name": "San Salvador Island",
        "country_name": "The Bahamas"
    },
    {
        "id": 3606,
        "name": "Sandy Point",
        "country_name": "The Bahamas"
    },
    {
        "id": 3608,
        "name": "South Abaco",
        "country_name": "The Bahamas"
    },
    {
        "id": 3622,
        "name": "South Andros",
        "country_name": "The Bahamas"
    },
    {
        "id": 3607,
        "name": "South Eleuthera",
        "country_name": "The Bahamas"
    },
    {
        "id": 3630,
        "name": "Spanish Wells",
        "country_name": "The Bahamas"
    },
    {
        "id": 3599,
        "name": "West Grand Bahama",
        "country_name": "The Bahamas"
    },
    {
        "id": 2575,
        "name": "Centrale Region",
        "country_name": "Togo"
    },
    {
        "id": 2579,
        "name": "Kara Region",
        "country_name": "Togo"
    },
    {
        "id": 2576,
        "name": "Maritime",
        "country_name": "Togo"
    },
    {
        "id": 2577,
        "name": "Plateaux Region",
        "country_name": "Togo"
    },
    {
        "id": 2578,
        "name": "Savanes Region",
        "country_name": "Togo"
    },
    {
        "id": 3913,
        "name": "Haʻapai",
        "country_name": "Tonga"
    },
    {
        "id": 3915,
        "name": "ʻEua",
        "country_name": "Tonga"
    },
    {
        "id": 3914,
        "name": "Niuas",
        "country_name": "Tonga"
    },
    {
        "id": 3912,
        "name": "Tongatapu",
        "country_name": "Tonga"
    },
    {
        "id": 3911,
        "name": "Vavaʻu",
        "country_name": "Tonga"
    },
    {
        "id": 3362,
        "name": "Arima",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3366,
        "name": "Chaguanas",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3354,
        "name": "Couva-Tabaquite-Talparo Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3367,
        "name": "Diego Martin Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3355,
        "name": "Eastern Tobago",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3365,
        "name": "Penal-Debe Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3360,
        "name": "Point Fortin",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3363,
        "name": "Port of Spain",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3368,
        "name": "Princes Town Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3356,
        "name": "Rio Claro-Mayaro Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3359,
        "name": "San Fernando",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3357,
        "name": "San Juan-Laventille Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3361,
        "name": "Sangre Grande Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3364,
        "name": "Siparia Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3358,
        "name": "Tunapuna-Piarco Regional Corporation",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 3353,
        "name": "Western Tobago",
        "country_name": "Trinidad And Tobago"
    },
    {
        "id": 2550,
        "name": "Ariana Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2566,
        "name": "Ben Arous Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2551,
        "name": "Bizerte Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2558,
        "name": "Gabès Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2556,
        "name": "Gafsa Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2552,
        "name": "Jendouba Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2564,
        "name": "Kairouan Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2570,
        "name": "Kasserine Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2572,
        "name": "Kassrine",
        "country_name": "Tunisia"
    },
    {
        "id": 2562,
        "name": "Kebili Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2561,
        "name": "Kef Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2568,
        "name": "Mahdia Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2555,
        "name": "Manouba Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2560,
        "name": "Medenine Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2553,
        "name": "Monastir Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2557,
        "name": "Sfax Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2567,
        "name": "Sidi Bouzid Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2563,
        "name": "Siliana Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2571,
        "name": "Sousse Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2559,
        "name": "Tataouine Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2569,
        "name": "Tozeur Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2554,
        "name": "Tunis Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2565,
        "name": "Zaghouan Governorate",
        "country_name": "Tunisia"
    },
    {
        "id": 2212,
        "name": "Adana",
        "country_name": "Turkey"
    },
    {
        "id": 2155,
        "name": "Adıyaman",
        "country_name": "Turkey"
    },
    {
        "id": 2179,
        "name": "Afyonkarahisar",
        "country_name": "Turkey"
    },
    {
        "id": 2193,
        "name": "Ağrı",
        "country_name": "Turkey"
    },
    {
        "id": 2210,
        "name": "Aksaray",
        "country_name": "Turkey"
    },
    {
        "id": 2161,
        "name": "Amasya",
        "country_name": "Turkey"
    },
    {
        "id": 2217,
        "name": "Ankara",
        "country_name": "Turkey"
    },
    {
        "id": 2169,
        "name": "Antalya",
        "country_name": "Turkey"
    },
    {
        "id": 2185,
        "name": "Ardahan",
        "country_name": "Turkey"
    },
    {
        "id": 2191,
        "name": "Artvin",
        "country_name": "Turkey"
    },
    {
        "id": 2187,
        "name": "Aydın",
        "country_name": "Turkey"
    },
    {
        "id": 2175,
        "name": "Balıkesir",
        "country_name": "Turkey"
    },
    {
        "id": 2148,
        "name": "Bartın",
        "country_name": "Turkey"
    },
    {
        "id": 2194,
        "name": "Batman",
        "country_name": "Turkey"
    },
    {
        "id": 2177,
        "name": "Bayburt",
        "country_name": "Turkey"
    },
    {
        "id": 2221,
        "name": "Bilecik",
        "country_name": "Turkey"
    },
    {
        "id": 2153,
        "name": "Bingöl",
        "country_name": "Turkey"
    },
    {
        "id": 2215,
        "name": "Bitlis",
        "country_name": "Turkey"
    },
    {
        "id": 2172,
        "name": "Bolu",
        "country_name": "Turkey"
    },
    {
        "id": 2209,
        "name": "Burdur",
        "country_name": "Turkey"
    },
    {
        "id": 2163,
        "name": "Bursa",
        "country_name": "Turkey"
    },
    {
        "id": 2216,
        "name": "Çanakkale",
        "country_name": "Turkey"
    },
    {
        "id": 2168,
        "name": "Çankırı",
        "country_name": "Turkey"
    },
    {
        "id": 2173,
        "name": "Çorum",
        "country_name": "Turkey"
    },
    {
        "id": 2157,
        "name": "Denizli",
        "country_name": "Turkey"
    },
    {
        "id": 2226,
        "name": "Diyarbakır",
        "country_name": "Turkey"
    },
    {
        "id": 2202,
        "name": "Düzce",
        "country_name": "Turkey"
    },
    {
        "id": 2151,
        "name": "Edirne",
        "country_name": "Turkey"
    },
    {
        "id": 2159,
        "name": "Elazığ",
        "country_name": "Turkey"
    },
    {
        "id": 2160,
        "name": "Erzincan",
        "country_name": "Turkey"
    },
    {
        "id": 2165,
        "name": "Erzurum",
        "country_name": "Turkey"
    },
    {
        "id": 2164,
        "name": "Eskişehir",
        "country_name": "Turkey"
    },
    {
        "id": 2203,
        "name": "Gaziantep",
        "country_name": "Turkey"
    },
    {
        "id": 2186,
        "name": "Giresun",
        "country_name": "Turkey"
    },
    {
        "id": 2204,
        "name": "Gümüşhane",
        "country_name": "Turkey"
    },
    {
        "id": 2190,
        "name": "Hakkâri",
        "country_name": "Turkey"
    },
    {
        "id": 2211,
        "name": "Hatay",
        "country_name": "Turkey"
    },
    {
        "id": 2166,
        "name": "Iğdır",
        "country_name": "Turkey"
    },
    {
        "id": 2222,
        "name": "Isparta",
        "country_name": "Turkey"
    },
    {
        "id": 2170,
        "name": "Istanbul",
        "country_name": "Turkey"
    },
    {
        "id": 2205,
        "name": "İzmir",
        "country_name": "Turkey"
    },
    {
        "id": 2227,
        "name": "Kahramanmaraş",
        "country_name": "Turkey"
    },
    {
        "id": 2223,
        "name": "Karabük",
        "country_name": "Turkey"
    },
    {
        "id": 2184,
        "name": "Karaman",
        "country_name": "Turkey"
    },
    {
        "id": 2208,
        "name": "Kars",
        "country_name": "Turkey"
    },
    {
        "id": 2197,
        "name": "Kastamonu",
        "country_name": "Turkey"
    },
    {
        "id": 2200,
        "name": "Kayseri",
        "country_name": "Turkey"
    },
    {
        "id": 2154,
        "name": "Kilis",
        "country_name": "Turkey"
    },
    {
        "id": 2178,
        "name": "Kırıkkale",
        "country_name": "Turkey"
    },
    {
        "id": 2176,
        "name": "Kırklareli",
        "country_name": "Turkey"
    },
    {
        "id": 2180,
        "name": "Kırşehir",
        "country_name": "Turkey"
    },
    {
        "id": 2195,
        "name": "Kocaeli",
        "country_name": "Turkey"
    },
    {
        "id": 2171,
        "name": "Konya",
        "country_name": "Turkey"
    },
    {
        "id": 2149,
        "name": "Kütahya",
        "country_name": "Turkey"
    },
    {
        "id": 2158,
        "name": "Malatya",
        "country_name": "Turkey"
    },
    {
        "id": 2198,
        "name": "Manisa",
        "country_name": "Turkey"
    },
    {
        "id": 2224,
        "name": "Mardin",
        "country_name": "Turkey"
    },
    {
        "id": 2156,
        "name": "Mersin",
        "country_name": "Turkey"
    },
    {
        "id": 2182,
        "name": "Muğla",
        "country_name": "Turkey"
    },
    {
        "id": 2162,
        "name": "Muş",
        "country_name": "Turkey"
    },
    {
        "id": 2196,
        "name": "Nevşehir",
        "country_name": "Turkey"
    },
    {
        "id": 2189,
        "name": "Niğde",
        "country_name": "Turkey"
    },
    {
        "id": 2174,
        "name": "Ordu",
        "country_name": "Turkey"
    },
    {
        "id": 2214,
        "name": "Osmaniye",
        "country_name": "Turkey"
    },
    {
        "id": 2219,
        "name": "Rize",
        "country_name": "Turkey"
    },
    {
        "id": 2150,
        "name": "Sakarya",
        "country_name": "Turkey"
    },
    {
        "id": 2220,
        "name": "Samsun",
        "country_name": "Turkey"
    },
    {
        "id": 2183,
        "name": "Şanlıurfa",
        "country_name": "Turkey"
    },
    {
        "id": 2207,
        "name": "Siirt",
        "country_name": "Turkey"
    },
    {
        "id": 4854,
        "name": "Sinop",
        "country_name": "Turkey"
    },
    {
        "id": 2181,
        "name": "Sivas",
        "country_name": "Turkey"
    },
    {
        "id": 2225,
        "name": "Şırnak",
        "country_name": "Turkey"
    },
    {
        "id": 2167,
        "name": "Tekirdağ",
        "country_name": "Turkey"
    },
    {
        "id": 2199,
        "name": "Tokat",
        "country_name": "Turkey"
    },
    {
        "id": 2206,
        "name": "Trabzon",
        "country_name": "Turkey"
    },
    {
        "id": 2192,
        "name": "Tunceli",
        "country_name": "Turkey"
    },
    {
        "id": 2201,
        "name": "Uşak",
        "country_name": "Turkey"
    },
    {
        "id": 2152,
        "name": "Van",
        "country_name": "Turkey"
    },
    {
        "id": 2218,
        "name": "Yalova",
        "country_name": "Turkey"
    },
    {
        "id": 2188,
        "name": "Yozgat",
        "country_name": "Turkey"
    },
    {
        "id": 2213,
        "name": "Zonguldak",
        "country_name": "Turkey"
    },
    {
        "id": 3374,
        "name": "Ahal Region",
        "country_name": "Turkmenistan"
    },
    {
        "id": 3371,
        "name": "Ashgabat",
        "country_name": "Turkmenistan"
    },
    {
        "id": 3372,
        "name": "Balkan Region",
        "country_name": "Turkmenistan"
    },
    {
        "id": 3373,
        "name": "Daşoguz Region",
        "country_name": "Turkmenistan"
    },
    {
        "id": 3370,
        "name": "Lebap Region",
        "country_name": "Turkmenistan"
    },
    {
        "id": 3369,
        "name": "Mary Region",
        "country_name": "Turkmenistan"
    },
    {
        "id": 3951,
        "name": "Funafuti",
        "country_name": "Tuvalu"
    },
    {
        "id": 3947,
        "name": "Nanumanga",
        "country_name": "Tuvalu"
    },
    {
        "id": 3949,
        "name": "Nanumea",
        "country_name": "Tuvalu"
    },
    {
        "id": 3946,
        "name": "Niutao Island Council",
        "country_name": "Tuvalu"
    },
    {
        "id": 3948,
        "name": "Nui",
        "country_name": "Tuvalu"
    },
    {
        "id": 3952,
        "name": "Nukufetau",
        "country_name": "Tuvalu"
    },
    {
        "id": 3953,
        "name": "Nukulaelae",
        "country_name": "Tuvalu"
    },
    {
        "id": 3950,
        "name": "Vaitupu",
        "country_name": "Tuvalu"
    },
    {
        "id": 329,
        "name": "Abim District",
        "country_name": "Uganda"
    },
    {
        "id": 361,
        "name": "Adjumani District",
        "country_name": "Uganda"
    },
    {
        "id": 392,
        "name": "Agago District",
        "country_name": "Uganda"
    },
    {
        "id": 344,
        "name": "Alebtong District",
        "country_name": "Uganda"
    },
    {
        "id": 416,
        "name": "Amolatar District",
        "country_name": "Uganda"
    },
    {
        "id": 353,
        "name": "Amudat District",
        "country_name": "Uganda"
    },
    {
        "id": 352,
        "name": "Amuria District",
        "country_name": "Uganda"
    },
    {
        "id": 335,
        "name": "Amuru District",
        "country_name": "Uganda"
    },
    {
        "id": 328,
        "name": "Apac District",
        "country_name": "Uganda"
    },
    {
        "id": 447,
        "name": "Arua District",
        "country_name": "Uganda"
    },
    {
        "id": 441,
        "name": "Budaka District",
        "country_name": "Uganda"
    },
    {
        "id": 349,
        "name": "Bududa District",
        "country_name": "Uganda"
    },
    {
        "id": 387,
        "name": "Bugiri District",
        "country_name": "Uganda"
    },
    {
        "id": 391,
        "name": "Buhweju District",
        "country_name": "Uganda"
    },
    {
        "id": 377,
        "name": "Buikwe District",
        "country_name": "Uganda"
    },
    {
        "id": 343,
        "name": "Bukedea District",
        "country_name": "Uganda"
    },
    {
        "id": 375,
        "name": "Bukomansimbi District",
        "country_name": "Uganda"
    },
    {
        "id": 385,
        "name": "Bukwo District",
        "country_name": "Uganda"
    },
    {
        "id": 428,
        "name": "Bulambuli District",
        "country_name": "Uganda"
    },
    {
        "id": 389,
        "name": "Buliisa District",
        "country_name": "Uganda"
    },
    {
        "id": 419,
        "name": "Bundibugyo District",
        "country_name": "Uganda"
    },
    {
        "id": 381,
        "name": "Bunyangabu District",
        "country_name": "Uganda"
    },
    {
        "id": 386,
        "name": "Bushenyi District",
        "country_name": "Uganda"
    },
    {
        "id": 431,
        "name": "Busia District",
        "country_name": "Uganda"
    },
    {
        "id": 365,
        "name": "Butaleja District",
        "country_name": "Uganda"
    },
    {
        "id": 384,
        "name": "Butambala District",
        "country_name": "Uganda"
    },
    {
        "id": 388,
        "name": "Butebo District",
        "country_name": "Uganda"
    },
    {
        "id": 414,
        "name": "Buvuma District",
        "country_name": "Uganda"
    },
    {
        "id": 380,
        "name": "Buyende District",
        "country_name": "Uganda"
    },
    {
        "id": 396,
        "name": "Central Region",
        "country_name": "Uganda"
    },
    {
        "id": 341,
        "name": "Dokolo District",
        "country_name": "Uganda"
    },
    {
        "id": 372,
        "name": "Eastern Region",
        "country_name": "Uganda"
    },
    {
        "id": 366,
        "name": "Gomba District",
        "country_name": "Uganda"
    },
    {
        "id": 413,
        "name": "Gulu District",
        "country_name": "Uganda"
    },
    {
        "id": 339,
        "name": "Ibanda District",
        "country_name": "Uganda"
    },
    {
        "id": 340,
        "name": "Iganga District",
        "country_name": "Uganda"
    },
    {
        "id": 383,
        "name": "Isingiro District",
        "country_name": "Uganda"
    },
    {
        "id": 367,
        "name": "Jinja District",
        "country_name": "Uganda"
    },
    {
        "id": 434,
        "name": "Kaabong District",
        "country_name": "Uganda"
    },
    {
        "id": 426,
        "name": "Kabale District",
        "country_name": "Uganda"
    },
    {
        "id": 326,
        "name": "Kabarole District",
        "country_name": "Uganda"
    },
    {
        "id": 336,
        "name": "Kaberamaido District",
        "country_name": "Uganda"
    },
    {
        "id": 403,
        "name": "Kagadi District",
        "country_name": "Uganda"
    },
    {
        "id": 399,
        "name": "Kakumiro District",
        "country_name": "Uganda"
    },
    {
        "id": 405,
        "name": "Kalangala District",
        "country_name": "Uganda"
    },
    {
        "id": 398,
        "name": "Kaliro District",
        "country_name": "Uganda"
    },
    {
        "id": 394,
        "name": "Kalungu District",
        "country_name": "Uganda"
    },
    {
        "id": 382,
        "name": "Kampala District",
        "country_name": "Uganda"
    },
    {
        "id": 334,
        "name": "Kamuli District",
        "country_name": "Uganda"
    },
    {
        "id": 360,
        "name": "Kamwenge District",
        "country_name": "Uganda"
    },
    {
        "id": 373,
        "name": "Kanungu District",
        "country_name": "Uganda"
    },
    {
        "id": 432,
        "name": "Kapchorwa District",
        "country_name": "Uganda"
    },
    {
        "id": 440,
        "name": "Kasese District",
        "country_name": "Uganda"
    },
    {
        "id": 420,
        "name": "Katakwi District",
        "country_name": "Uganda"
    },
    {
        "id": 368,
        "name": "Kayunga District",
        "country_name": "Uganda"
    },
    {
        "id": 436,
        "name": "Kibaale District",
        "country_name": "Uganda"
    },
    {
        "id": 347,
        "name": "Kiboga District",
        "country_name": "Uganda"
    },
    {
        "id": 338,
        "name": "Kibuku District",
        "country_name": "Uganda"
    },
    {
        "id": 355,
        "name": "Kiruhura District",
        "country_name": "Uganda"
    },
    {
        "id": 346,
        "name": "Kiryandongo District",
        "country_name": "Uganda"
    },
    {
        "id": 409,
        "name": "Kisoro District",
        "country_name": "Uganda"
    },
    {
        "id": 348,
        "name": "Kitgum District",
        "country_name": "Uganda"
    },
    {
        "id": 345,
        "name": "Koboko District",
        "country_name": "Uganda"
    },
    {
        "id": 401,
        "name": "Kole District",
        "country_name": "Uganda"
    },
    {
        "id": 443,
        "name": "Kotido District",
        "country_name": "Uganda"
    },
    {
        "id": 425,
        "name": "Kumi District",
        "country_name": "Uganda"
    },
    {
        "id": 369,
        "name": "Kween District",
        "country_name": "Uganda"
    },
    {
        "id": 325,
        "name": "Kyankwanzi District",
        "country_name": "Uganda"
    },
    {
        "id": 437,
        "name": "Kyegegwa District",
        "country_name": "Uganda"
    },
    {
        "id": 402,
        "name": "Kyenjojo District",
        "country_name": "Uganda"
    },
    {
        "id": 448,
        "name": "Kyotera District",
        "country_name": "Uganda"
    },
    {
        "id": 411,
        "name": "Lamwo District",
        "country_name": "Uganda"
    },
    {
        "id": 342,
        "name": "Lira District",
        "country_name": "Uganda"
    },
    {
        "id": 445,
        "name": "Luuka District",
        "country_name": "Uganda"
    },
    {
        "id": 433,
        "name": "Luwero District",
        "country_name": "Uganda"
    },
    {
        "id": 417,
        "name": "Lwengo District",
        "country_name": "Uganda"
    },
    {
        "id": 376,
        "name": "Lyantonde District",
        "country_name": "Uganda"
    },
    {
        "id": 438,
        "name": "Manafwa District",
        "country_name": "Uganda"
    },
    {
        "id": 421,
        "name": "Maracha District",
        "country_name": "Uganda"
    },
    {
        "id": 356,
        "name": "Masaka District",
        "country_name": "Uganda"
    },
    {
        "id": 354,
        "name": "Masindi District",
        "country_name": "Uganda"
    },
    {
        "id": 418,
        "name": "Mayuge District",
        "country_name": "Uganda"
    },
    {
        "id": 350,
        "name": "Mbale District",
        "country_name": "Uganda"
    },
    {
        "id": 415,
        "name": "Mbarara District",
        "country_name": "Uganda"
    },
    {
        "id": 435,
        "name": "Mitooma District",
        "country_name": "Uganda"
    },
    {
        "id": 364,
        "name": "Mityana District",
        "country_name": "Uganda"
    },
    {
        "id": 395,
        "name": "Moroto District",
        "country_name": "Uganda"
    },
    {
        "id": 363,
        "name": "Moyo District",
        "country_name": "Uganda"
    },
    {
        "id": 327,
        "name": "Mpigi District",
        "country_name": "Uganda"
    },
    {
        "id": 371,
        "name": "Mubende District",
        "country_name": "Uganda"
    },
    {
        "id": 410,
        "name": "Mukono District",
        "country_name": "Uganda"
    },
    {
        "id": 393,
        "name": "Nakapiripirit District",
        "country_name": "Uganda"
    },
    {
        "id": 423,
        "name": "Nakaseke District",
        "country_name": "Uganda"
    },
    {
        "id": 406,
        "name": "Nakasongola District",
        "country_name": "Uganda"
    },
    {
        "id": 351,
        "name": "Namayingo District",
        "country_name": "Uganda"
    },
    {
        "id": 400,
        "name": "Namisindwa District",
        "country_name": "Uganda"
    },
    {
        "id": 337,
        "name": "Namutumba District",
        "country_name": "Uganda"
    },
    {
        "id": 430,
        "name": "Napak District",
        "country_name": "Uganda"
    },
    {
        "id": 446,
        "name": "Nebbi District",
        "country_name": "Uganda"
    },
    {
        "id": 424,
        "name": "Ngora District",
        "country_name": "Uganda"
    },
    {
        "id": 332,
        "name": "Northern Region",
        "country_name": "Uganda"
    },
    {
        "id": 422,
        "name": "Ntoroko District",
        "country_name": "Uganda"
    },
    {
        "id": 404,
        "name": "Ntungamo District",
        "country_name": "Uganda"
    },
    {
        "id": 378,
        "name": "Nwoya District",
        "country_name": "Uganda"
    },
    {
        "id": 374,
        "name": "Omoro District",
        "country_name": "Uganda"
    },
    {
        "id": 390,
        "name": "Otuke District",
        "country_name": "Uganda"
    },
    {
        "id": 397,
        "name": "Oyam District",
        "country_name": "Uganda"
    },
    {
        "id": 408,
        "name": "Pader District",
        "country_name": "Uganda"
    },
    {
        "id": 357,
        "name": "Pakwach District",
        "country_name": "Uganda"
    },
    {
        "id": 412,
        "name": "Pallisa District",
        "country_name": "Uganda"
    },
    {
        "id": 439,
        "name": "Rakai District",
        "country_name": "Uganda"
    },
    {
        "id": 358,
        "name": "Rubanda District",
        "country_name": "Uganda"
    },
    {
        "id": 442,
        "name": "Rubirizi District",
        "country_name": "Uganda"
    },
    {
        "id": 331,
        "name": "Rukiga District",
        "country_name": "Uganda"
    },
    {
        "id": 324,
        "name": "Rukungiri District",
        "country_name": "Uganda"
    },
    {
        "id": 427,
        "name": "Sembabule District",
        "country_name": "Uganda"
    },
    {
        "id": 333,
        "name": "Serere District",
        "country_name": "Uganda"
    },
    {
        "id": 407,
        "name": "Sheema District",
        "country_name": "Uganda"
    },
    {
        "id": 429,
        "name": "Sironko District",
        "country_name": "Uganda"
    },
    {
        "id": 444,
        "name": "Soroti District",
        "country_name": "Uganda"
    },
    {
        "id": 359,
        "name": "Tororo District",
        "country_name": "Uganda"
    },
    {
        "id": 362,
        "name": "Wakiso District",
        "country_name": "Uganda"
    },
    {
        "id": 370,
        "name": "Western Region",
        "country_name": "Uganda"
    },
    {
        "id": 330,
        "name": "Yumbe District",
        "country_name": "Uganda"
    },
    {
        "id": 379,
        "name": "Zombo District",
        "country_name": "Uganda"
    },
    {
        "id": 4689,
        "name": "Autonomous Republic of Crimea",
        "country_name": "Ukraine"
    },
    {
        "id": 4680,
        "name": "Cherkaska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4692,
        "name": "Chernihivska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4678,
        "name": "Chernivetska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4675,
        "name": "Dnipropetrovska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4691,
        "name": "Donetska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4682,
        "name": "Ivano-Frankivska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4686,
        "name": "Kharkivska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4684,
        "name": "Khersonska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4681,
        "name": "Khmelnytska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4677,
        "name": "Kirovohradska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4676,
        "name": "Kyiv",
        "country_name": "Ukraine"
    },
    {
        "id": 4671,
        "name": "Kyivska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4673,
        "name": "Luhanska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4672,
        "name": "Lvivska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4679,
        "name": "Mykolaivska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4688,
        "name": "Odeska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 5071,
        "name": "Poltavska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4683,
        "name": "Rivnenska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4685,
        "name": "Sumska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4674,
        "name": "Ternopilska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4669,
        "name": "Vinnytska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4690,
        "name": "Volynska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4670,
        "name": "Zakarpatska Oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4687,
        "name": "Zaporizka oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 4668,
        "name": "Zhytomyrska oblast",
        "country_name": "Ukraine"
    },
    {
        "id": 3396,
        "name": "Abu Dhabi Emirate",
        "country_name": "United Arab Emirates"
    },
    {
        "id": 3395,
        "name": "Ajman Emirate",
        "country_name": "United Arab Emirates"
    },
    {
        "id": 3391,
        "name": "Dubai",
        "country_name": "United Arab Emirates"
    },
    {
        "id": 3393,
        "name": "Fujairah",
        "country_name": "United Arab Emirates"
    },
    {
        "id": 3394,
        "name": "Ras al-Khaimah",
        "country_name": "United Arab Emirates"
    },
    {
        "id": 3390,
        "name": "Sharjah Emirate",
        "country_name": "United Arab Emirates"
    },
    {
        "id": 3392,
        "name": "Umm al-Quwain",
        "country_name": "United Arab Emirates"
    },
    {
        "id": 2463,
        "name": "Aberdeen",
        "country_name": "United Kingdom"
    },
    {
        "id": 2401,
        "name": "Aberdeenshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2387,
        "name": "Angus",
        "country_name": "United Kingdom"
    },
    {
        "id": 2533,
        "name": "Antrim",
        "country_name": "United Kingdom"
    },
    {
        "id": 2412,
        "name": "Antrim and Newtownabbey",
        "country_name": "United Kingdom"
    },
    {
        "id": 2498,
        "name": "Ards",
        "country_name": "United Kingdom"
    },
    {
        "id": 2523,
        "name": "Ards and North Down",
        "country_name": "United Kingdom"
    },
    {
        "id": 2392,
        "name": "Argyll and Bute",
        "country_name": "United Kingdom"
    },
    {
        "id": 2331,
        "name": "Armagh City and District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2324,
        "name": "Armagh, Banbridge and Craigavon",
        "country_name": "United Kingdom"
    },
    {
        "id": 2378,
        "name": "Ascension Island",
        "country_name": "United Kingdom"
    },
    {
        "id": 2363,
        "name": "Ballymena Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2361,
        "name": "Ballymoney",
        "country_name": "United Kingdom"
    },
    {
        "id": 2315,
        "name": "Banbridge",
        "country_name": "United Kingdom"
    },
    {
        "id": 2499,
        "name": "Barnsley",
        "country_name": "United Kingdom"
    },
    {
        "id": 2339,
        "name": "Bath and North East Somerset",
        "country_name": "United Kingdom"
    },
    {
        "id": 2507,
        "name": "Bedford",
        "country_name": "United Kingdom"
    },
    {
        "id": 2311,
        "name": "Belfast district",
        "country_name": "United Kingdom"
    },
    {
        "id": 2425,
        "name": "Birmingham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2329,
        "name": "Blackburn with Darwen",
        "country_name": "United Kingdom"
    },
    {
        "id": 2451,
        "name": "Blackpool",
        "country_name": "United Kingdom"
    },
    {
        "id": 2530,
        "name": "Blaenau Gwent County Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2504,
        "name": "Bolton",
        "country_name": "United Kingdom"
    },
    {
        "id": 2342,
        "name": "Bournemouth",
        "country_name": "United Kingdom"
    },
    {
        "id": 2470,
        "name": "Bracknell Forest",
        "country_name": "United Kingdom"
    },
    {
        "id": 2529,
        "name": "Bradford",
        "country_name": "United Kingdom"
    },
    {
        "id": 2452,
        "name": "Bridgend County Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2395,
        "name": "Brighton and Hove",
        "country_name": "United Kingdom"
    },
    {
        "id": 2405,
        "name": "Buckinghamshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2459,
        "name": "Bury",
        "country_name": "United Kingdom"
    },
    {
        "id": 2298,
        "name": "Caerphilly County Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2517,
        "name": "Calderdale",
        "country_name": "United Kingdom"
    },
    {
        "id": 2423,
        "name": "Cambridgeshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2484,
        "name": "Carmarthenshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2439,
        "name": "Carrickfergus Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2525,
        "name": "Castlereagh",
        "country_name": "United Kingdom"
    },
    {
        "id": 2316,
        "name": "Causeway Coast and Glens",
        "country_name": "United Kingdom"
    },
    {
        "id": 2303,
        "name": "Central Bedfordshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2509,
        "name": "Ceredigion",
        "country_name": "United Kingdom"
    },
    {
        "id": 2444,
        "name": "Cheshire East",
        "country_name": "United Kingdom"
    },
    {
        "id": 2442,
        "name": "Cheshire West and Chester",
        "country_name": "United Kingdom"
    },
    {
        "id": 2528,
        "name": "City and County of Cardiff",
        "country_name": "United Kingdom"
    },
    {
        "id": 2433,
        "name": "City and County of Swansea",
        "country_name": "United Kingdom"
    },
    {
        "id": 2413,
        "name": "City of Bristol",
        "country_name": "United Kingdom"
    },
    {
        "id": 2485,
        "name": "City of Derby",
        "country_name": "United Kingdom"
    },
    {
        "id": 2475,
        "name": "City of Kingston upon Hull",
        "country_name": "United Kingdom"
    },
    {
        "id": 2318,
        "name": "City of Leicester",
        "country_name": "United Kingdom"
    },
    {
        "id": 2424,
        "name": "City of London",
        "country_name": "United Kingdom"
    },
    {
        "id": 2359,
        "name": "City of Nottingham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2297,
        "name": "City of Peterborough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2514,
        "name": "City of Plymouth",
        "country_name": "United Kingdom"
    },
    {
        "id": 2305,
        "name": "City of Portsmouth",
        "country_name": "United Kingdom"
    },
    {
        "id": 2294,
        "name": "City of Southampton",
        "country_name": "United Kingdom"
    },
    {
        "id": 2506,
        "name": "City of Stoke-on-Trent",
        "country_name": "United Kingdom"
    },
    {
        "id": 2372,
        "name": "City of Sunderland",
        "country_name": "United Kingdom"
    },
    {
        "id": 2357,
        "name": "City of Westminster",
        "country_name": "United Kingdom"
    },
    {
        "id": 2489,
        "name": "City of Wolverhampton",
        "country_name": "United Kingdom"
    },
    {
        "id": 2426,
        "name": "City of York",
        "country_name": "United Kingdom"
    },
    {
        "id": 2450,
        "name": "Clackmannanshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2461,
        "name": "Coleraine Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2352,
        "name": "Conwy County Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2445,
        "name": "Cookstown District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2312,
        "name": "Cornwall",
        "country_name": "United Kingdom"
    },
    {
        "id": 2406,
        "name": "County Durham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2438,
        "name": "Coventry",
        "country_name": "United Kingdom"
    },
    {
        "id": 2449,
        "name": "Craigavon Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2334,
        "name": "Cumbria",
        "country_name": "United Kingdom"
    },
    {
        "id": 2389,
        "name": "Darlington",
        "country_name": "United Kingdom"
    },
    {
        "id": 2497,
        "name": "Denbighshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2403,
        "name": "Derbyshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2446,
        "name": "Derry City and Strabane",
        "country_name": "United Kingdom"
    },
    {
        "id": 2417,
        "name": "Derry City Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2491,
        "name": "Devon",
        "country_name": "United Kingdom"
    },
    {
        "id": 2364,
        "name": "Doncaster",
        "country_name": "United Kingdom"
    },
    {
        "id": 2345,
        "name": "Dorset",
        "country_name": "United Kingdom"
    },
    {
        "id": 2304,
        "name": "Down District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2457,
        "name": "Dudley",
        "country_name": "United Kingdom"
    },
    {
        "id": 2415,
        "name": "Dumfries and Galloway",
        "country_name": "United Kingdom"
    },
    {
        "id": 2511,
        "name": "Dundee",
        "country_name": "United Kingdom"
    },
    {
        "id": 2508,
        "name": "Dungannon and South Tyrone Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2374,
        "name": "East Ayrshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2454,
        "name": "East Dunbartonshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2462,
        "name": "East Lothian",
        "country_name": "United Kingdom"
    },
    {
        "id": 2333,
        "name": "East Renfrewshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2370,
        "name": "East Riding of Yorkshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2414,
        "name": "East Sussex",
        "country_name": "United Kingdom"
    },
    {
        "id": 2428,
        "name": "Edinburgh",
        "country_name": "United Kingdom"
    },
    {
        "id": 2336,
        "name": "England",
        "country_name": "United Kingdom"
    },
    {
        "id": 2410,
        "name": "Essex",
        "country_name": "United Kingdom"
    },
    {
        "id": 2344,
        "name": "Falkirk",
        "country_name": "United Kingdom"
    },
    {
        "id": 2366,
        "name": "Fermanagh and Omagh",
        "country_name": "United Kingdom"
    },
    {
        "id": 2531,
        "name": "Fermanagh District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2479,
        "name": "Fife",
        "country_name": "United Kingdom"
    },
    {
        "id": 2437,
        "name": "Flintshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2431,
        "name": "Gateshead",
        "country_name": "United Kingdom"
    },
    {
        "id": 2404,
        "name": "Glasgow",
        "country_name": "United Kingdom"
    },
    {
        "id": 2373,
        "name": "Gloucestershire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2379,
        "name": "Gwynedd",
        "country_name": "United Kingdom"
    },
    {
        "id": 2466,
        "name": "Halton",
        "country_name": "United Kingdom"
    },
    {
        "id": 2435,
        "name": "Hampshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2309,
        "name": "Hartlepool",
        "country_name": "United Kingdom"
    },
    {
        "id": 2500,
        "name": "Herefordshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2369,
        "name": "Hertfordshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2383,
        "name": "Highland",
        "country_name": "United Kingdom"
    },
    {
        "id": 2388,
        "name": "Inverclyde",
        "country_name": "United Kingdom"
    },
    {
        "id": 2289,
        "name": "Isle of Wight",
        "country_name": "United Kingdom"
    },
    {
        "id": 2343,
        "name": "Isles of Scilly",
        "country_name": "United Kingdom"
    },
    {
        "id": 2464,
        "name": "Kent",
        "country_name": "United Kingdom"
    },
    {
        "id": 2371,
        "name": "Kirklees",
        "country_name": "United Kingdom"
    },
    {
        "id": 2330,
        "name": "Knowsley",
        "country_name": "United Kingdom"
    },
    {
        "id": 2495,
        "name": "Lancashire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2515,
        "name": "Larne Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2503,
        "name": "Leeds",
        "country_name": "United Kingdom"
    },
    {
        "id": 2516,
        "name": "Leicestershire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2382,
        "name": "Limavady Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2355,
        "name": "Lincolnshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2460,
        "name": "Lisburn and Castlereagh",
        "country_name": "United Kingdom"
    },
    {
        "id": 2494,
        "name": "Lisburn City Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2340,
        "name": "Liverpool",
        "country_name": "United Kingdom"
    },
    {
        "id": 2356,
        "name": "London Borough of Barking and Dagenham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2520,
        "name": "London Borough of Barnet",
        "country_name": "United Kingdom"
    },
    {
        "id": 2307,
        "name": "London Borough of Bexley",
        "country_name": "United Kingdom"
    },
    {
        "id": 2291,
        "name": "London Borough of Brent",
        "country_name": "United Kingdom"
    },
    {
        "id": 2490,
        "name": "London Borough of Bromley",
        "country_name": "United Kingdom"
    },
    {
        "id": 2349,
        "name": "London Borough of Camden",
        "country_name": "United Kingdom"
    },
    {
        "id": 2512,
        "name": "London Borough of Croydon",
        "country_name": "United Kingdom"
    },
    {
        "id": 2532,
        "name": "London Borough of Ealing",
        "country_name": "United Kingdom"
    },
    {
        "id": 2476,
        "name": "London Borough of Enfield",
        "country_name": "United Kingdom"
    },
    {
        "id": 2411,
        "name": "London Borough of Hackney",
        "country_name": "United Kingdom"
    },
    {
        "id": 2448,
        "name": "London Borough of Hammersmith and Fulham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2306,
        "name": "London Borough of Haringey",
        "country_name": "United Kingdom"
    },
    {
        "id": 2385,
        "name": "London Borough of Harrow",
        "country_name": "United Kingdom"
    },
    {
        "id": 2347,
        "name": "London Borough of Havering",
        "country_name": "United Kingdom"
    },
    {
        "id": 2376,
        "name": "London Borough of Hillingdon",
        "country_name": "United Kingdom"
    },
    {
        "id": 2380,
        "name": "London Borough of Hounslow",
        "country_name": "United Kingdom"
    },
    {
        "id": 2319,
        "name": "London Borough of Islington",
        "country_name": "United Kingdom"
    },
    {
        "id": 2396,
        "name": "London Borough of Lambeth",
        "country_name": "United Kingdom"
    },
    {
        "id": 2358,
        "name": "London Borough of Lewisham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2483,
        "name": "London Borough of Merton",
        "country_name": "United Kingdom"
    },
    {
        "id": 2418,
        "name": "London Borough of Newham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2397,
        "name": "London Borough of Redbridge",
        "country_name": "United Kingdom"
    },
    {
        "id": 2501,
        "name": "London Borough of Richmond upon Thames",
        "country_name": "United Kingdom"
    },
    {
        "id": 2432,
        "name": "London Borough of Southwark",
        "country_name": "United Kingdom"
    },
    {
        "id": 2313,
        "name": "London Borough of Sutton",
        "country_name": "United Kingdom"
    },
    {
        "id": 2390,
        "name": "London Borough of Tower Hamlets",
        "country_name": "United Kingdom"
    },
    {
        "id": 2326,
        "name": "London Borough of Waltham Forest",
        "country_name": "United Kingdom"
    },
    {
        "id": 2434,
        "name": "London Borough of Wandsworth",
        "country_name": "United Kingdom"
    },
    {
        "id": 2322,
        "name": "Magherafelt District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2398,
        "name": "Manchester",
        "country_name": "United Kingdom"
    },
    {
        "id": 2381,
        "name": "Medway",
        "country_name": "United Kingdom"
    },
    {
        "id": 2328,
        "name": "Merthyr Tydfil County Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2320,
        "name": "Metropolitan Borough of Wigan",
        "country_name": "United Kingdom"
    },
    {
        "id": 2429,
        "name": "Mid and East Antrim",
        "country_name": "United Kingdom"
    },
    {
        "id": 2399,
        "name": "Mid Ulster",
        "country_name": "United Kingdom"
    },
    {
        "id": 2332,
        "name": "Middlesbrough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2519,
        "name": "Midlothian",
        "country_name": "United Kingdom"
    },
    {
        "id": 2416,
        "name": "Milton Keynes",
        "country_name": "United Kingdom"
    },
    {
        "id": 2402,
        "name": "Monmouthshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2360,
        "name": "Moray",
        "country_name": "United Kingdom"
    },
    {
        "id": 2348,
        "name": "Moyle District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2351,
        "name": "Neath Port Talbot County Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2458,
        "name": "Newcastle upon Tyne",
        "country_name": "United Kingdom"
    },
    {
        "id": 2524,
        "name": "Newport",
        "country_name": "United Kingdom"
    },
    {
        "id": 2350,
        "name": "Newry and Mourne District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2534,
        "name": "Newry, Mourne and Down",
        "country_name": "United Kingdom"
    },
    {
        "id": 2317,
        "name": "Newtownabbey Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2473,
        "name": "Norfolk",
        "country_name": "United Kingdom"
    },
    {
        "id": 2535,
        "name": "North Ayrshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2513,
        "name": "North Down Borough Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2384,
        "name": "North East Lincolnshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2487,
        "name": "North Lanarkshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2453,
        "name": "North Lincolnshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2430,
        "name": "North Somerset",
        "country_name": "United Kingdom"
    },
    {
        "id": 2521,
        "name": "North Tyneside",
        "country_name": "United Kingdom"
    },
    {
        "id": 2522,
        "name": "North Yorkshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2480,
        "name": "Northamptonshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2337,
        "name": "Northern Ireland",
        "country_name": "United Kingdom"
    },
    {
        "id": 2365,
        "name": "Northumberland",
        "country_name": "United Kingdom"
    },
    {
        "id": 2456,
        "name": "Nottinghamshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2477,
        "name": "Oldham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2314,
        "name": "Omagh District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2474,
        "name": "Orkney Islands",
        "country_name": "United Kingdom"
    },
    {
        "id": 2353,
        "name": "Outer Hebrides",
        "country_name": "United Kingdom"
    },
    {
        "id": 2321,
        "name": "Oxfordshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2486,
        "name": "Pembrokeshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2325,
        "name": "Perth and Kinross",
        "country_name": "United Kingdom"
    },
    {
        "id": 2302,
        "name": "Poole",
        "country_name": "United Kingdom"
    },
    {
        "id": 2441,
        "name": "Powys",
        "country_name": "United Kingdom"
    },
    {
        "id": 2455,
        "name": "Reading",
        "country_name": "United Kingdom"
    },
    {
        "id": 2527,
        "name": "Redcar and Cleveland",
        "country_name": "United Kingdom"
    },
    {
        "id": 2443,
        "name": "Renfrewshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2301,
        "name": "Rhondda Cynon Taf",
        "country_name": "United Kingdom"
    },
    {
        "id": 2327,
        "name": "Rochdale",
        "country_name": "United Kingdom"
    },
    {
        "id": 2308,
        "name": "Rotherham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2492,
        "name": "Royal Borough of Greenwich",
        "country_name": "United Kingdom"
    },
    {
        "id": 2368,
        "name": "Royal Borough of Kensington and Chelsea",
        "country_name": "United Kingdom"
    },
    {
        "id": 2481,
        "name": "Royal Borough of Kingston upon Thames",
        "country_name": "United Kingdom"
    },
    {
        "id": 2472,
        "name": "Rutland",
        "country_name": "United Kingdom"
    },
    {
        "id": 2502,
        "name": "Saint Helena",
        "country_name": "United Kingdom"
    },
    {
        "id": 2493,
        "name": "Salford",
        "country_name": "United Kingdom"
    },
    {
        "id": 2341,
        "name": "Sandwell",
        "country_name": "United Kingdom"
    },
    {
        "id": 2335,
        "name": "Scotland",
        "country_name": "United Kingdom"
    },
    {
        "id": 2346,
        "name": "Scottish Borders",
        "country_name": "United Kingdom"
    },
    {
        "id": 2518,
        "name": "Sefton",
        "country_name": "United Kingdom"
    },
    {
        "id": 2295,
        "name": "Sheffield",
        "country_name": "United Kingdom"
    },
    {
        "id": 2300,
        "name": "Shetland Islands",
        "country_name": "United Kingdom"
    },
    {
        "id": 2407,
        "name": "Shropshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2427,
        "name": "Slough",
        "country_name": "United Kingdom"
    },
    {
        "id": 2469,
        "name": "Solihull",
        "country_name": "United Kingdom"
    },
    {
        "id": 2386,
        "name": "Somerset",
        "country_name": "United Kingdom"
    },
    {
        "id": 2377,
        "name": "South Ayrshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2400,
        "name": "South Gloucestershire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2362,
        "name": "South Lanarkshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2409,
        "name": "South Tyneside",
        "country_name": "United Kingdom"
    },
    {
        "id": 2323,
        "name": "Southend-on-Sea",
        "country_name": "United Kingdom"
    },
    {
        "id": 2290,
        "name": "St Helens",
        "country_name": "United Kingdom"
    },
    {
        "id": 2447,
        "name": "Staffordshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2488,
        "name": "Stirling",
        "country_name": "United Kingdom"
    },
    {
        "id": 2394,
        "name": "Stockport",
        "country_name": "United Kingdom"
    },
    {
        "id": 2421,
        "name": "Stockton-on-Tees",
        "country_name": "United Kingdom"
    },
    {
        "id": 2393,
        "name": "Strabane District Council",
        "country_name": "United Kingdom"
    },
    {
        "id": 2467,
        "name": "Suffolk",
        "country_name": "United Kingdom"
    },
    {
        "id": 2526,
        "name": "Surrey",
        "country_name": "United Kingdom"
    },
    {
        "id": 2422,
        "name": "Swindon",
        "country_name": "United Kingdom"
    },
    {
        "id": 2367,
        "name": "Tameside",
        "country_name": "United Kingdom"
    },
    {
        "id": 2310,
        "name": "Telford and Wrekin",
        "country_name": "United Kingdom"
    },
    {
        "id": 2468,
        "name": "Thurrock",
        "country_name": "United Kingdom"
    },
    {
        "id": 2478,
        "name": "Torbay",
        "country_name": "United Kingdom"
    },
    {
        "id": 2496,
        "name": "Torfaen",
        "country_name": "United Kingdom"
    },
    {
        "id": 2293,
        "name": "Trafford",
        "country_name": "United Kingdom"
    },
    {
        "id": 2375,
        "name": "United Kingdom",
        "country_name": "United Kingdom"
    },
    {
        "id": 2299,
        "name": "Vale of Glamorgan",
        "country_name": "United Kingdom"
    },
    {
        "id": 2465,
        "name": "Wakefield",
        "country_name": "United Kingdom"
    },
    {
        "id": 2338,
        "name": "Wales",
        "country_name": "United Kingdom"
    },
    {
        "id": 2292,
        "name": "Walsall",
        "country_name": "United Kingdom"
    },
    {
        "id": 2420,
        "name": "Warrington",
        "country_name": "United Kingdom"
    },
    {
        "id": 2505,
        "name": "Warwickshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2471,
        "name": "West Berkshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2440,
        "name": "West Dunbartonshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2354,
        "name": "West Lothian",
        "country_name": "United Kingdom"
    },
    {
        "id": 2296,
        "name": "West Sussex",
        "country_name": "United Kingdom"
    },
    {
        "id": 2391,
        "name": "Wiltshire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2482,
        "name": "Windsor and Maidenhead",
        "country_name": "United Kingdom"
    },
    {
        "id": 2408,
        "name": "Wirral",
        "country_name": "United Kingdom"
    },
    {
        "id": 2419,
        "name": "Wokingham",
        "country_name": "United Kingdom"
    },
    {
        "id": 2510,
        "name": "Worcestershire",
        "country_name": "United Kingdom"
    },
    {
        "id": 2436,
        "name": "Wrexham County Borough",
        "country_name": "United Kingdom"
    },
    {
        "id": 1456,
        "name": "Alabama",
        "country_name": "United States"
    },
    {
        "id": 1400,
        "name": "Alaska",
        "country_name": "United States"
    },
    {
        "id": 1424,
        "name": "American Samoa",
        "country_name": "United States"
    },
    {
        "id": 1434,
        "name": "Arizona",
        "country_name": "United States"
    },
    {
        "id": 1444,
        "name": "Arkansas",
        "country_name": "United States"
    },
    {
        "id": 1402,
        "name": "Baker Island",
        "country_name": "United States"
    },
    {
        "id": 1416,
        "name": "California",
        "country_name": "United States"
    },
    {
        "id": 1450,
        "name": "Colorado",
        "country_name": "United States"
    },
    {
        "id": 1435,
        "name": "Connecticut",
        "country_name": "United States"
    },
    {
        "id": 1399,
        "name": "Delaware",
        "country_name": "United States"
    },
    {
        "id": 1437,
        "name": "District of Columbia",
        "country_name": "United States"
    },
    {
        "id": 1436,
        "name": "Florida",
        "country_name": "United States"
    },
    {
        "id": 1455,
        "name": "Georgia",
        "country_name": "United States"
    },
    {
        "id": 1412,
        "name": "Guam",
        "country_name": "United States"
    },
    {
        "id": 1411,
        "name": "Hawaii",
        "country_name": "United States"
    },
    {
        "id": 1398,
        "name": "Howland Island",
        "country_name": "United States"
    },
    {
        "id": 1460,
        "name": "Idaho",
        "country_name": "United States"
    },
    {
        "id": 1425,
        "name": "Illinois",
        "country_name": "United States"
    },
    {
        "id": 1440,
        "name": "Indiana",
        "country_name": "United States"
    },
    {
        "id": 1459,
        "name": "Iowa",
        "country_name": "United States"
    },
    {
        "id": 1410,
        "name": "Jarvis Island",
        "country_name": "United States"
    },
    {
        "id": 1428,
        "name": "Johnston Atoll",
        "country_name": "United States"
    },
    {
        "id": 1406,
        "name": "Kansas",
        "country_name": "United States"
    },
    {
        "id": 1419,
        "name": "Kentucky",
        "country_name": "United States"
    },
    {
        "id": 1403,
        "name": "Kingman Reef",
        "country_name": "United States"
    },
    {
        "id": 1457,
        "name": "Louisiana",
        "country_name": "United States"
    },
    {
        "id": 1453,
        "name": "Maine",
        "country_name": "United States"
    },
    {
        "id": 1401,
        "name": "Maryland",
        "country_name": "United States"
    },
    {
        "id": 1433,
        "name": "Massachusetts",
        "country_name": "United States"
    },
    {
        "id": 1426,
        "name": "Michigan",
        "country_name": "United States"
    },
    {
        "id": 1438,
        "name": "Midway Atoll",
        "country_name": "United States"
    },
    {
        "id": 1420,
        "name": "Minnesota",
        "country_name": "United States"
    },
    {
        "id": 1430,
        "name": "Mississippi",
        "country_name": "United States"
    },
    {
        "id": 1451,
        "name": "Missouri",
        "country_name": "United States"
    },
    {
        "id": 1446,
        "name": "Montana",
        "country_name": "United States"
    },
    {
        "id": 1439,
        "name": "Navassa Island",
        "country_name": "United States"
    },
    {
        "id": 1408,
        "name": "Nebraska",
        "country_name": "United States"
    },
    {
        "id": 1458,
        "name": "Nevada",
        "country_name": "United States"
    },
    {
        "id": 1404,
        "name": "New Hampshire",
        "country_name": "United States"
    },
    {
        "id": 1417,
        "name": "New Jersey",
        "country_name": "United States"
    },
    {
        "id": 1423,
        "name": "New Mexico",
        "country_name": "United States"
    },
    {
        "id": 1452,
        "name": "New York",
        "country_name": "United States"
    },
    {
        "id": 1447,
        "name": "North Carolina",
        "country_name": "United States"
    },
    {
        "id": 1418,
        "name": "North Dakota",
        "country_name": "United States"
    },
    {
        "id": 1431,
        "name": "Northern Mariana Islands",
        "country_name": "United States"
    },
    {
        "id": 4851,
        "name": "Ohio",
        "country_name": "United States"
    },
    {
        "id": 1421,
        "name": "Oklahoma",
        "country_name": "United States"
    },
    {
        "id": 1415,
        "name": "Oregon",
        "country_name": "United States"
    },
    {
        "id": 1448,
        "name": "Palmyra Atoll",
        "country_name": "United States"
    },
    {
        "id": 1422,
        "name": "Pennsylvania",
        "country_name": "United States"
    },
    {
        "id": 1449,
        "name": "Puerto Rico",
        "country_name": "United States"
    },
    {
        "id": 1461,
        "name": "Rhode Island",
        "country_name": "United States"
    },
    {
        "id": 1443,
        "name": "South Carolina",
        "country_name": "United States"
    },
    {
        "id": 1445,
        "name": "South Dakota",
        "country_name": "United States"
    },
    {
        "id": 1454,
        "name": "Tennessee",
        "country_name": "United States"
    },
    {
        "id": 1407,
        "name": "Texas",
        "country_name": "United States"
    },
    {
        "id": 1432,
        "name": "United States Minor Outlying Islands",
        "country_name": "United States"
    },
    {
        "id": 1413,
        "name": "United States Virgin Islands",
        "country_name": "United States"
    },
    {
        "id": 1414,
        "name": "Utah",
        "country_name": "United States"
    },
    {
        "id": 1409,
        "name": "Vermont",
        "country_name": "United States"
    },
    {
        "id": 1427,
        "name": "Virginia",
        "country_name": "United States"
    },
    {
        "id": 1405,
        "name": "Wake Island",
        "country_name": "United States"
    },
    {
        "id": 1462,
        "name": "Washington",
        "country_name": "United States"
    },
    {
        "id": 1429,
        "name": "West Virginia",
        "country_name": "United States"
    },
    {
        "id": 1441,
        "name": "Wisconsin",
        "country_name": "United States"
    },
    {
        "id": 1442,
        "name": "Wyoming",
        "country_name": "United States"
    },
    {
        "id": 3205,
        "name": "Artigas Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3213,
        "name": "Canelones Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3211,
        "name": "Cerro Largo Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3208,
        "name": "Colonia Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3209,
        "name": "Durazno Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3203,
        "name": "Flores Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3217,
        "name": "Florida Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3215,
        "name": "Lavalleja Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3206,
        "name": "Maldonado Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3218,
        "name": "Montevideo Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3212,
        "name": "Paysandú Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3210,
        "name": "Río Negro Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3207,
        "name": "Rivera Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3216,
        "name": "Rocha Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3220,
        "name": "Salto Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3204,
        "name": "San José Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3219,
        "name": "Soriano Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3221,
        "name": "Tacuarembó Department",
        "country_name": "Uruguay"
    },
    {
        "id": 3214,
        "name": "Treinta y Tres Department",
        "country_name": "Uruguay"
    },
    {
        "id": 2540,
        "name": "Andijan Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2541,
        "name": "Bukhara Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2538,
        "name": "Fergana Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2545,
        "name": "Jizzakh Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2548,
        "name": "Karakalpakstan",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2537,
        "name": "Namangan Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2542,
        "name": "Navoiy Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2543,
        "name": "Qashqadaryo Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2544,
        "name": "Samarqand Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2547,
        "name": "Sirdaryo Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2546,
        "name": "Surxondaryo Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2536,
        "name": "Tashkent",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2549,
        "name": "Tashkent Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 2539,
        "name": "Xorazm Region",
        "country_name": "Uzbekistan"
    },
    {
        "id": 4775,
        "name": "Malampa",
        "country_name": "Vanuatu"
    },
    {
        "id": 4773,
        "name": "Penama",
        "country_name": "Vanuatu"
    },
    {
        "id": 4776,
        "name": "Sanma",
        "country_name": "Vanuatu"
    },
    {
        "id": 4774,
        "name": "Shefa",
        "country_name": "Vanuatu"
    },
    {
        "id": 4777,
        "name": "Tafea",
        "country_name": "Vanuatu"
    },
    {
        "id": 4772,
        "name": "Torba",
        "country_name": "Vanuatu"
    },
    {
        "id": 2044,
        "name": "Amazonas",
        "country_name": "Venezuela"
    },
    {
        "id": 2050,
        "name": "Anzoátegui",
        "country_name": "Venezuela"
    },
    {
        "id": 4856,
        "name": "Apure",
        "country_name": "Venezuela"
    },
    {
        "id": 2047,
        "name": "Aragua",
        "country_name": "Venezuela"
    },
    {
        "id": 2049,
        "name": "Barinas",
        "country_name": "Venezuela"
    },
    {
        "id": 2039,
        "name": "Bolívar",
        "country_name": "Venezuela"
    },
    {
        "id": 2040,
        "name": "Carabobo",
        "country_name": "Venezuela"
    },
    {
        "id": 2034,
        "name": "Cojedes",
        "country_name": "Venezuela"
    },
    {
        "id": 2051,
        "name": "Delta Amacuro",
        "country_name": "Venezuela"
    },
    {
        "id": 4855,
        "name": "Distrito Capital",
        "country_name": "Venezuela"
    },
    {
        "id": 2035,
        "name": "Falcón",
        "country_name": "Venezuela"
    },
    {
        "id": 2046,
        "name": "Federal Dependencies of Venezuela",
        "country_name": "Venezuela"
    },
    {
        "id": 2045,
        "name": "Guárico",
        "country_name": "Venezuela"
    },
    {
        "id": 2055,
        "name": "La Guaira",
        "country_name": "Venezuela"
    },
    {
        "id": 2038,
        "name": "Lara",
        "country_name": "Venezuela"
    },
    {
        "id": 2053,
        "name": "Mérida",
        "country_name": "Venezuela"
    },
    {
        "id": 2037,
        "name": "Miranda",
        "country_name": "Venezuela"
    },
    {
        "id": 2054,
        "name": "Monagas",
        "country_name": "Venezuela"
    },
    {
        "id": 2052,
        "name": "Nueva Esparta",
        "country_name": "Venezuela"
    },
    {
        "id": 2036,
        "name": "Portuguesa",
        "country_name": "Venezuela"
    },
    {
        "id": 2056,
        "name": "Sucre",
        "country_name": "Venezuela"
    },
    {
        "id": 2048,
        "name": "Táchira",
        "country_name": "Venezuela"
    },
    {
        "id": 2043,
        "name": "Trujillo",
        "country_name": "Venezuela"
    },
    {
        "id": 2041,
        "name": "Yaracuy",
        "country_name": "Venezuela"
    },
    {
        "id": 2042,
        "name": "Zulia",
        "country_name": "Venezuela"
    },
    {
        "id": 3794,
        "name": "An Giang",
        "country_name": "Vietnam"
    },
    {
        "id": 3770,
        "name": "Bà Rịa-Vũng Tàu",
        "country_name": "Vietnam"
    },
    {
        "id": 3815,
        "name": "Bắc Giang",
        "country_name": "Vietnam"
    },
    {
        "id": 3822,
        "name": "Bắc Kạn",
        "country_name": "Vietnam"
    },
    {
        "id": 3804,
        "name": "Bạc Liêu",
        "country_name": "Vietnam"
    },
    {
        "id": 3791,
        "name": "Bắc Ninh",
        "country_name": "Vietnam"
    },
    {
        "id": 3796,
        "name": "Bến Tre",
        "country_name": "Vietnam"
    },
    {
        "id": 3785,
        "name": "Bình Dương",
        "country_name": "Vietnam"
    },
    {
        "id": 3830,
        "name": "Bình Định",
        "country_name": "Vietnam"
    },
    {
        "id": 3797,
        "name": "Bình Phước",
        "country_name": "Vietnam"
    },
    {
        "id": 3787,
        "name": "Bình Thuận",
        "country_name": "Vietnam"
    },
    {
        "id": 3778,
        "name": "Cà Mau",
        "country_name": "Vietnam"
    },
    {
        "id": 4925,
        "name": "Cần Thơ",
        "country_name": "Vietnam"
    },
    {
        "id": 3782,
        "name": "Cao Bằng",
        "country_name": "Vietnam"
    },
    {
        "id": 3806,
        "name": "Đà Nẵng",
        "country_name": "Vietnam"
    },
    {
        "id": 3829,
        "name": "Đắk Lắk",
        "country_name": "Vietnam"
    },
    {
        "id": 3823,
        "name": "Đắk Nông",
        "country_name": "Vietnam"
    },
    {
        "id": 3773,
        "name": "Điện Biên",
        "country_name": "Vietnam"
    },
    {
        "id": 3821,
        "name": "Đồng Nai",
        "country_name": "Vietnam"
    },
    {
        "id": 3769,
        "name": "Đồng Tháp",
        "country_name": "Vietnam"
    },
    {
        "id": 3813,
        "name": "Gia Lai",
        "country_name": "Vietnam"
    },
    {
        "id": 3779,
        "name": "Hà Giang",
        "country_name": "Vietnam"
    },
    {
        "id": 3802,
        "name": "Hà Nam",
        "country_name": "Vietnam"
    },
    {
        "id": 3810,
        "name": "Hà Nội",
        "country_name": "Vietnam"
    },
    {
        "id": 3816,
        "name": "Hà Tĩnh",
        "country_name": "Vietnam"
    },
    {
        "id": 3827,
        "name": "Hải Dương",
        "country_name": "Vietnam"
    },
    {
        "id": 3783,
        "name": "Hải Phòng",
        "country_name": "Vietnam"
    },
    {
        "id": 3777,
        "name": "Hậu Giang",
        "country_name": "Vietnam"
    },
    {
        "id": 3811,
        "name": "Hồ Chí Minh",
        "country_name": "Vietnam"
    },
    {
        "id": 3799,
        "name": "Hòa Bình",
        "country_name": "Vietnam"
    },
    {
        "id": 3768,
        "name": "Hưng Yên",
        "country_name": "Vietnam"
    },
    {
        "id": 3793,
        "name": "Khánh Hòa",
        "country_name": "Vietnam"
    },
    {
        "id": 3800,
        "name": "Kiên Giang",
        "country_name": "Vietnam"
    },
    {
        "id": 3772,
        "name": "Kon Tum",
        "country_name": "Vietnam"
    },
    {
        "id": 3825,
        "name": "Lai Châu",
        "country_name": "Vietnam"
    },
    {
        "id": 3818,
        "name": "Lâm Đồng",
        "country_name": "Vietnam"
    },
    {
        "id": 3792,
        "name": "Lạng Sơn",
        "country_name": "Vietnam"
    },
    {
        "id": 3817,
        "name": "Lào Cai",
        "country_name": "Vietnam"
    },
    {
        "id": 3808,
        "name": "Long An",
        "country_name": "Vietnam"
    },
    {
        "id": 3789,
        "name": "Nam Định",
        "country_name": "Vietnam"
    },
    {
        "id": 3780,
        "name": "Nghệ An",
        "country_name": "Vietnam"
    },
    {
        "id": 3786,
        "name": "Ninh Bình",
        "country_name": "Vietnam"
    },
    {
        "id": 3788,
        "name": "Ninh Thuận",
        "country_name": "Vietnam"
    },
    {
        "id": 3801,
        "name": "Phú Thọ",
        "country_name": "Vietnam"
    },
    {
        "id": 3824,
        "name": "Phú Yên",
        "country_name": "Vietnam"
    },
    {
        "id": 3809,
        "name": "Quảng Bình",
        "country_name": "Vietnam"
    },
    {
        "id": 3776,
        "name": "Quảng Nam",
        "country_name": "Vietnam"
    },
    {
        "id": 3828,
        "name": "Quảng Ngãi",
        "country_name": "Vietnam"
    },
    {
        "id": 3814,
        "name": "Quảng Ninh",
        "country_name": "Vietnam"
    },
    {
        "id": 3803,
        "name": "Quảng Trị",
        "country_name": "Vietnam"
    },
    {
        "id": 3819,
        "name": "Sóc Trăng",
        "country_name": "Vietnam"
    },
    {
        "id": 3812,
        "name": "Sơn La",
        "country_name": "Vietnam"
    },
    {
        "id": 3826,
        "name": "Tây Ninh",
        "country_name": "Vietnam"
    },
    {
        "id": 3775,
        "name": "Thái Bình",
        "country_name": "Vietnam"
    },
    {
        "id": 3807,
        "name": "Thái Nguyên",
        "country_name": "Vietnam"
    },
    {
        "id": 3771,
        "name": "Thanh Hóa",
        "country_name": "Vietnam"
    },
    {
        "id": 3798,
        "name": "Thừa Thiên-Huế",
        "country_name": "Vietnam"
    },
    {
        "id": 3781,
        "name": "Tiền Giang",
        "country_name": "Vietnam"
    },
    {
        "id": 3805,
        "name": "Trà Vinh",
        "country_name": "Vietnam"
    },
    {
        "id": 3795,
        "name": "Tuyên Quang",
        "country_name": "Vietnam"
    },
    {
        "id": 3790,
        "name": "Vĩnh Long",
        "country_name": "Vietnam"
    },
    {
        "id": 3774,
        "name": "Vĩnh Phúc",
        "country_name": "Vietnam"
    },
    {
        "id": 3784,
        "name": "Yên Bái",
        "country_name": "Vietnam"
    },
    {
        "id": 5074,
        "name": "Saint Croix",
        "country_name": "Virgin Islands (US)"
    },
    {
        "id": 5073,
        "name": "Saint John",
        "country_name": "Virgin Islands (US)"
    },
    {
        "id": 5072,
        "name": "Saint Thomas",
        "country_name": "Virgin Islands (US)"
    },
    {
        "id": 1242,
        "name": "'Adan Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1250,
        "name": "'Amran Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1237,
        "name": "Abyan Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1240,
        "name": "Al Bayda' Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1241,
        "name": "Al Hudaydah Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1243,
        "name": "Al Jawf Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1251,
        "name": "Al Mahrah Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1235,
        "name": "Al Mahwit Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1246,
        "name": "Dhamar Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1238,
        "name": "Hadhramaut Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1244,
        "name": "Hajjah Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1233,
        "name": "Ibb Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1245,
        "name": "Lahij Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1234,
        "name": "Ma'rib Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1248,
        "name": "Raymah Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1249,
        "name": "Saada Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1232,
        "name": "Sana'a",
        "country_name": "Yemen"
    },
    {
        "id": 1236,
        "name": "Sana'a Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1247,
        "name": "Shabwah Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1239,
        "name": "Socotra Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1231,
        "name": "Ta'izz Governorate",
        "country_name": "Yemen"
    },
    {
        "id": 1986,
        "name": "Central Province",
        "country_name": "Zambia"
    },
    {
        "id": 1984,
        "name": "Copperbelt Province",
        "country_name": "Zambia"
    },
    {
        "id": 1991,
        "name": "Eastern Province",
        "country_name": "Zambia"
    },
    {
        "id": 1987,
        "name": "Luapula Province",
        "country_name": "Zambia"
    },
    {
        "id": 1988,
        "name": "Lusaka Province",
        "country_name": "Zambia"
    },
    {
        "id": 1989,
        "name": "Muchinga Province",
        "country_name": "Zambia"
    },
    {
        "id": 1982,
        "name": "Northern Province",
        "country_name": "Zambia"
    },
    {
        "id": 1985,
        "name": "Northwestern Province",
        "country_name": "Zambia"
    },
    {
        "id": 1990,
        "name": "Southern Province",
        "country_name": "Zambia"
    },
    {
        "id": 1983,
        "name": "Western Province",
        "country_name": "Zambia"
    },
    {
        "id": 1956,
        "name": "Bulawayo Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1958,
        "name": "Harare Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1959,
        "name": "Manicaland",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1955,
        "name": "Mashonaland Central Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1951,
        "name": "Mashonaland East Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1953,
        "name": "Mashonaland West Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1960,
        "name": "Masvingo Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1954,
        "name": "Matabeleland North Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1952,
        "name": "Matabeleland South Province",
        "country_name": "Zimbabwe"
    },
    {
        "id": 1957,
        "name": "Midlands Province",
        "country_name": "Zimbabwe"
    }
]
export default states;
