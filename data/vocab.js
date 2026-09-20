const VOCAB_DATA = [
  {
    "section": 1,
    "title": "Cocina",
    "cards": [
      {
        "id": "v01_001",
        "front": "A ___ / ___ (AmE) is used to fry food on the hob.",
        "back": "frying pan / skillet\n\nSartén"
      },
      {
        "id": "v01_002",
        "front": "A ___ has a coating that prevents food from sticking.",
        "back": "non-stick pan\n\nSartén antiadherente"
      },
      {
        "id": "v01_003",
        "front": "A ___ is very heavy and holds heat evenly.",
        "back": "cast iron pan\n\nSartén de hierro fundido"
      },
      {
        "id": "v01_004",
        "front": "A ___ is a deep round pan used in Asian cooking.",
        "back": "wok\n\nWok"
      },
      {
        "id": "v01_005",
        "front": "A ___ / ___ leaves char marks on meat or vegetables.",
        "back": "grill pan / griddle\n\nPlancha / parrilla"
      },
      {
        "id": "v01_006",
        "front": "A ___ is a deep pan with a long handle used for boiling.",
        "back": "saucepan\n\nCazo / cazuela"
      },
      {
        "id": "v01_007",
        "front": "A ___ is a very large pot used for soups and broths.",
        "back": "stockpot\n\nOlla grande para caldos"
      },
      {
        "id": "v01_008",
        "front": "A ___ cooks food fast using trapped steam.",
        "back": "pressure cooker\n\nOlla a presión"
      },
      {
        "id": "v01_009",
        "front": "A ___ goes in the oven and is used for stews.",
        "back": "casserole dish\n\nCazuela de horno"
      },
      {
        "id": "v01_010",
        "front": "A ___ is a large flat oven dish used for roasting meat.",
        "back": "roasting tin\n\nBandeja para asar"
      },
      {
        "id": "v01_011",
        "front": "A ___ / ___ is flat and used for biscuits or bread.",
        "back": "baking tray / sheet pan\n\nBandeja de horno"
      },
      {
        "id": "v01_012",
        "front": "A ___ / ___ is a mould used to bake cakes.",
        "back": "baking tin / cake tin\n\nMolde para tartas"
      },
      {
        "id": "v01_013",
        "front": "A ___ has individual round holes for baking muffins.",
        "back": "muffin tin\n\nMolde para magdalenas"
      },
      {
        "id": "v01_014",
        "front": "A ___ is rectangular and used to bake bread.",
        "back": "loaf tin\n\nMolde para pan de molde"
      },
      {
        "id": "v01_015",
        "front": "A ___ is a bowl with holes used to drain pasta or vegetables.",
        "back": "colander\n\nEscurridor / colador"
      },
      {
        "id": "v01_016",
        "front": "A ___ / ___ filters liquids or sifts flour.",
        "back": "strainer / sieve\n\nColador fino / tamiz"
      },
      {
        "id": "v01_017",
        "front": "A ___ is used to beat eggs, cream or batter.",
        "back": "whisk\n\nBatidor de varillas"
      },
      {
        "id": "v01_018",
        "front": "A ___ is flat and used to flip or spread food.",
        "back": "spatula\n\nEspátula"
      },
      {
        "id": "v01_019",
        "front": "A ___ is a spatula used to flip food in the pan.",
        "back": "turner\n\nEspátula volteadora"
      },
      {
        "id": "v01_020",
        "front": "A ___ is a large deep spoon used to serve soup or stew.",
        "back": "ladle\n\nCucharón"
      },
      {
        "id": "v01_021",
        "front": "A ___ has holes that let liquid drain through.",
        "back": "slotted spoon\n\nEspumadera"
      },
      {
        "id": "v01_022",
        "front": "A ___ is used for stirring sauces and mixtures.",
        "back": "wooden spoon\n\nCuchara de madera"
      },
      {
        "id": "v01_023",
        "front": "A ___ are used to grip and turn food without piercing it.",
        "back": "tongs\n\nPinzas de cocina"
      },
      {
        "id": "v01_024",
        "front": "A ___ removes the skin from vegetables and fruit.",
        "back": "peeler\n\nPelador"
      },
      {
        "id": "v01_025",
        "front": "A ___ / ___ is a flat surface for cutting food.",
        "back": "chopping board / cutting board\n\nTabla de cortar"
      },
      {
        "id": "v01_026",
        "front": "A ___ shreds cheese, vegetables or citrus zest.",
        "back": "grater\n\nRallador"
      },
      {
        "id": "v01_027",
        "front": "A ___ removes the outer layer of citrus peel.",
        "back": "zester\n\nRallador de cítricos"
      },
      {
        "id": "v01_028",
        "front": "A ___ / ___ (BrE) opens metal tins.",
        "back": "can opener / tin opener\n\nAbrelatas"
      },
      {
        "id": "v01_029",
        "front": "A ___ removes caps from bottles.",
        "back": "bottle opener\n\nAbrebotellas"
      },
      {
        "id": "v01_030",
        "front": "A ___ opens wine bottles.",
        "back": "corkscrew\n\nSacacorchos"
      },
      {
        "id": "v01_031",
        "front": "A ___ is used to grind spices or garlic.",
        "back": "pestle and mortar\n\nMortero"
      },
      {
        "id": "v01_032",
        "front": "A ___ is used to flatten dough.",
        "back": "rolling pin\n\nRodillo de cocina"
      },
      {
        "id": "v01_033",
        "front": "A ___ applies butter or egg wash to pastry.",
        "back": "pastry brush\n\nPincel de cocina"
      },
      {
        "id": "v01_034",
        "front": "A ___ / ___ measures ingredients by weight.",
        "back": "kitchen scale / food scale\n\nBáscula de cocina"
      },
      {
        "id": "v01_035",
        "front": "A ___ measures liquid volumes.",
        "back": "measuring jug\n\nJarra medidora"
      },
      {
        "id": "v01_036",
        "front": "A ___ set measures small amounts of ingredients.",
        "back": "measuring spoons\n\nCucharas medidoras"
      },
      {
        "id": "v01_037",
        "front": "A ___ is a large bowl used to combine ingredients.",
        "back": "mixing bowl\n\nBol / cuenco grande"
      },
      {
        "id": "v01_038",
        "front": "A ___ removes water from washed lettuce.",
        "back": "salad spinner\n\nCentrifugadora de ensalada"
      },
      {
        "id": "v01_039",
        "front": "A ___ slices vegetables very thinly and evenly.",
        "back": "mandoline\n\nMandolina (cortadora)"
      },
      {
        "id": "v01_040",
        "front": "A ___ checks the internal temperature of meat.",
        "back": "meat thermometer\n\nTermómetro de cocina"
      },
      {
        "id": "v01_041",
        "front": "A ___ tracks cooking time.",
        "back": "timer\n\nTemporizador"
      },
      {
        "id": "v01_042",
        "front": "A ___ / ___ protects your hand from heat.",
        "back": "oven mitt / oven glove\n\nManopla de horno"
      },
      {
        "id": "v01_043",
        "front": "A ___ protects your clothes while cooking.",
        "back": "apron\n\nDelantal"
      },
      {
        "id": "v01_044",
        "front": "A ___ / ___ holds dishes while they dry.",
        "back": "dish rack / drying rack\n\nEscurreplatos"
      },
      {
        "id": "v01_045",
        "front": "A ___ / ___ is used to dry hands or surfaces.",
        "back": "kitchen roll / paper towel\n\nPapel de cocina"
      },
      {
        "id": "v01_046",
        "front": "___ / ___ (AmE) covers food to keep it fresh.",
        "back": "Cling film / plastic wrap\n\nFilm transparente"
      },
      {
        "id": "v01_047",
        "front": "___ / ___ is used to wrap food for the oven.",
        "back": "Aluminium foil / tin foil\n\nPapel de aluminio"
      },
      {
        "id": "v01_048",
        "front": "A ___ chops, slices and blends ingredients.",
        "back": "food processor\n\nRobot de cocina"
      },
      {
        "id": "v01_049",
        "front": "A ___ / ___ (BrE) blends liquids and soft foods.",
        "back": "blender / liquidiser\n\nBatidora de vaso"
      },
      {
        "id": "v01_050",
        "front": "A ___ / ___ blends food directly in the pot.",
        "back": "hand blender / immersion blender\n\nBatidora de mano / túrmix"
      },
      {
        "id": "v01_051",
        "front": "A ___ is an electric mixer on a base, used for dough and cream.",
        "back": "stand mixer\n\nAmasadora / batidora de pie"
      },
      {
        "id": "v01_052",
        "front": "A ___ toasts slices of bread.",
        "back": "toaster\n\nTostadora"
      },
      {
        "id": "v01_053",
        "front": "A ___ / ___ is a small countertop oven.",
        "back": "toaster oven / mini oven\n\nHorno de sobremesa"
      },
      {
        "id": "v01_054",
        "front": "A ___ heats food using electromagnetic waves.",
        "back": "microwave\n\nMicroondas"
      },
      {
        "id": "v01_055",
        "front": "A ___ boils water quickly.",
        "back": "kettle\n\nHervidor / tetera eléctrica"
      },
      {
        "id": "v01_056",
        "front": "A ___ / ___ brews coffee automatically.",
        "back": "coffee maker / coffee machine\n\nCafetera"
      },
      {
        "id": "v01_057",
        "front": "A ___ / ___ (BrE) makes coffee by pressing grounds down.",
        "back": "French press / cafetière\n\nCafetera de émbolo"
      },
      {
        "id": "v01_058",
        "front": "A ___ steams rice automatically.",
        "back": "rice cooker\n\nArrocera"
      },
      {
        "id": "v01_059",
        "front": "A ___ / ___ cooks food at low heat for hours.",
        "back": "slow cooker / crockpot\n\nOlla de cocción lenta"
      },
      {
        "id": "v01_060",
        "front": "An ___ cooks food with hot air, using little oil.",
        "back": "air fryer\n\nFreidora de aire"
      },
      {
        "id": "v01_061",
        "front": "A ___ cooks food submerged in hot oil.",
        "back": "deep fryer\n\nFreidora tradicional"
      },
      {
        "id": "v01_062",
        "front": "A ___ / ___ (AmE) is the cooking surface on top of the cooker.",
        "back": "hob / stovetop\n\nPlaca / fogones"
      },
      {
        "id": "v01_063",
        "front": "An ___ uses magnetic fields to heat pans directly.",
        "back": "induction hob\n\nPlaca de inducción"
      },
      {
        "id": "v01_064",
        "front": "A ___ uses open flames to cook.",
        "back": "gas hob\n\nCocina de gas"
      },
      {
        "id": "v01_065",
        "front": "A ___ / ___ (AmE) is the full oven and hob unit.",
        "back": "cooker / range\n\nCocina (electrodoméstico completo)"
      },
      {
        "id": "v01_066",
        "front": "The ___ (BrE) is the top heating element inside the oven.",
        "back": "grill\n\nGratinador (dentro del horno)"
      },
      {
        "id": "v01_067",
        "front": "The ___ / ___ keeps food cold.",
        "back": "fridge / refrigerator\n\nNevera / frigorífico"
      },
      {
        "id": "v01_068",
        "front": "The ___ keeps food frozen.",
        "back": "freezer\n\nCongelador"
      },
      {
        "id": "v01_069",
        "front": "The ___ combines both in one unit.",
        "back": "fridge-freezer\n\nFrigorífico combi"
      },
      {
        "id": "v01_070",
        "front": "The ___ washes dishes automatically.",
        "back": "dishwasher\n\nLavavajillas"
      },
      {
        "id": "v01_071",
        "front": "The ___ / ___ removes cooking smells and steam.",
        "back": "extractor fan / cooker hood\n\nCampana extractora"
      },
      {
        "id": "v01_072",
        "front": "The ___ / ___ (AmE) is the flat surface you work on.",
        "back": "worktop / countertop\n\nEncimera"
      },
      {
        "id": "v01_073",
        "front": "The ___ is where you wash dishes and vegetables.",
        "back": "kitchen sink\n\nFregadero"
      },
      {
        "id": "v01_074",
        "front": "The ___ (BrE) / ___ (AmE) controls the water flow.",
        "back": "tap / faucet\n\nGrifo"
      },
      {
        "id": "v01_075",
        "front": "A ___ / ___ stores food and equipment.",
        "back": "kitchen cabinet / cupboard\n\nArmario de cocina"
      },
      {
        "id": "v01_076",
        "front": "A ___ stores cutlery and small tools.",
        "back": "kitchen drawer\n\nCajón de cocina"
      },
      {
        "id": "v01_077",
        "front": "The ___ / ___ is a cupboard or room for storing food.",
        "back": "pantry / larder\n\nDespensa"
      },
      {
        "id": "v01_078",
        "front": "___ refers to knives, forks and spoons collectively.",
        "back": "Cutlery\n\nCubiertos"
      },
      {
        "id": "v01_079",
        "front": "A ___ is the main large knife used for most cutting.",
        "back": "chef's knife\n\nCuchillo de chef"
      },
      {
        "id": "v01_080",
        "front": "A ___ has a serrated edge for slicing bread.",
        "back": "bread knife\n\nCuchillo de pan"
      },
      {
        "id": "v01_081",
        "front": "A ___ is small and used for peeling and precise cuts.",
        "back": "paring knife\n\nCuchillo mondador"
      },
      {
        "id": "v01_082",
        "front": "A ___ is a sharp knife used at the table for meat.",
        "back": "steak knife\n\nCuchillo de carne"
      },
      {
        "id": "v01_083",
        "front": "A ___ is flexible and used to fillet fish.",
        "back": "filleting knife\n\nCuchillo de filetear"
      },
      {
        "id": "v01_084",
        "front": "A ___ is a heavy rectangular knife used to chop through bone.",
        "back": "cleaver\n\nCuchilla / hacha de cocina"
      },
      {
        "id": "v01_085",
        "front": "A ___ keeps blades sharp.",
        "back": "knife sharpener\n\nAfilador de cuchillos"
      },
      {
        "id": "v01_086",
        "front": "A ___ is used to spear and lift food.",
        "back": "fork\n\nTenedor"
      },
      {
        "id": "v01_087",
        "front": "A ___ is smaller than a tablespoon.",
        "back": "dessert spoon\n\nCuchara de postre"
      },
      {
        "id": "v01_088",
        "front": "A ___ is the smallest common spoon.",
        "back": "teaspoon\n\nCucharita de café / té"
      },
      {
        "id": "v01_089",
        "front": "A ___ is a large spoon used for serving.",
        "back": "tablespoon\n\nCuchara sopera"
      },
      {
        "id": "v01_090",
        "front": "A ___ serves soups and stews.",
        "back": "ladle\n\nCucharón sopero"
      },
      {
        "id": "v01_091",
        "front": "To ___ food means to cook it in water at 100°C.",
        "back": "boil\n\nHervir"
      },
      {
        "id": "v01_092",
        "front": "To ___ means to cook just below boiling point.",
        "back": "simmer\n\nCocer a fuego lento"
      },
      {
        "id": "v01_093",
        "front": "To ___ means to cook in hot oil.",
        "back": "fry\n\nFreír"
      },
      {
        "id": "v01_094",
        "front": "To ___ means to submerge food in hot oil.",
        "back": "deep fry\n\nFreír en abundante aceite"
      },
      {
        "id": "v01_095",
        "front": "To ___ means to cook quickly in a wok with little oil.",
        "back": "stir-fry\n\nSaltear (estilo asiático)"
      },
      {
        "id": "v01_096",
        "front": "To ___ means to fry quickly in a little butter or oil.",
        "back": "sauté\n\nSaltear (estilo francés)"
      },
      {
        "id": "v01_097",
        "front": "To ___ means to cook in the oven with dry heat.",
        "back": "roast\n\nAsar al horno"
      },
      {
        "id": "v01_098",
        "front": "To ___ means to cook in the oven, usually pastry or bread.",
        "back": "bake\n\nHornear"
      },
      {
        "id": "v01_099",
        "front": "To ___ means to cook under or over direct heat.",
        "back": "grill\n\nAsar a la parrilla / gratinar"
      },
      {
        "id": "v01_100",
        "front": "To ___ means to cook food over boiling water.",
        "back": "steam\n\nCocer al vapor"
      },
      {
        "id": "v01_101",
        "front": "To ___ means to cook gently in simmering liquid.",
        "back": "poach\n\nEscalfar / pochar"
      },
      {
        "id": "v01_102",
        "front": "To ___ means to brown then slow-cook in liquid.",
        "back": "braise\n\nEstofar / brasear"
      },
      {
        "id": "v01_103",
        "front": "To ___ means to soak food in a seasoned liquid before cooking.",
        "back": "marinate\n\nMarinar / macerar"
      },
      {
        "id": "v01_104",
        "front": "To ___ food means to add salt, pepper or spices.",
        "back": "season\n\nSazonar / condimentar"
      },
      {
        "id": "v01_105",
        "front": "To ___ means to beat rapidly to add air.",
        "back": "whisk\n\nBatir con varillas"
      },
      {
        "id": "v01_106",
        "front": "To ___ means to gently mix without losing air.",
        "back": "fold\n\nEnvolver / mezclar con suavidad"
      },
      {
        "id": "v01_107",
        "front": "To ___ dough means to work it with your hands until elastic.",
        "back": "knead\n\nAmasar"
      },
      {
        "id": "v01_108",
        "front": "To ___ means to cut into small cubes.",
        "back": "dice\n\nCortar en dados"
      },
      {
        "id": "v01_109",
        "front": "To ___ means to cut into rough pieces.",
        "back": "chop\n\nPicar / trocear"
      },
      {
        "id": "v01_110",
        "front": "To ___ means to cut into very tiny pieces.",
        "back": "mince\n\nPicar muy fino"
      },
      {
        "id": "v01_111",
        "front": "To ___ means to cut into thin flat pieces.",
        "back": "slice\n\nCortar en lonchas / rodajas"
      },
      {
        "id": "v01_112",
        "front": "To ___ means to cut into thin matchstick strips.",
        "back": "julienne\n\nCortar en juliana"
      },
      {
        "id": "v01_113",
        "front": "To ___ means to shred food on a grater.",
        "back": "grate\n\nRallar"
      },
      {
        "id": "v01_114",
        "front": "To ___ means to remove the outer skin.",
        "back": "peel\n\nPelar"
      },
      {
        "id": "v01_115",
        "front": "To ___ means to remove the centre of a fruit.",
        "back": "core\n\nDescorazonar"
      },
      {
        "id": "v01_116",
        "front": "To ___ a pan means to add liquid to lift the browned bits off the bottom.",
        "back": "deglaze\n\nDesgrasar / desglasar"
      },
      {
        "id": "v01_117",
        "front": "To ___ a sauce means to simmer it until it thickens.",
        "back": "reduce\n\nReducir"
      },
      {
        "id": "v01_118",
        "front": "To ___ means to remove excess liquid.",
        "back": "drain\n\nEscurrir"
      },
      {
        "id": "v01_119",
        "front": "To ___ means to filter solids from liquid.",
        "back": "strain\n\nColar"
      },
      {
        "id": "v01_120",
        "front": "To ___ cream means to beat it until thick and fluffy.",
        "back": "whip\n\nMontar la nata"
      },
      {
        "id": "v01_121",
        "front": "To ___ means to cook sugar until it turns golden.",
        "back": "caramelise\n\nCaramelizar"
      },
      {
        "id": "v01_122",
        "front": "To ___ means to briefly boil then plunge into cold water.",
        "back": "blanch\n\nEscaldar"
      },
      {
        "id": "v01_123",
        "front": "To ___ / ___ means to let frozen food return to room temperature.",
        "back": "defrost / thaw\n\nDescongelar"
      },
      {
        "id": "v01_124",
        "front": "___ steak is pink in the middle with a warm red centre.",
        "back": "Medium-rare\n\nPoco hecho / vuelta y vuelta"
      },
      {
        "id": "v01_125",
        "front": "___ steak is pink throughout but not red.",
        "back": "Medium\n\nAl punto"
      },
      {
        "id": "v01_126",
        "front": "___ steak is fully cooked with no pink.",
        "back": "Well done\n\nMuy hecho"
      },
      {
        "id": "v01_127",
        "front": "___ steak is mostly red inside.",
        "back": "Rare\n\nMuy poco hecho"
      },
      {
        "id": "v01_128",
        "front": "___ pasta is cooked but still slightly firm when bitten.",
        "back": "Al dente\n\nAl dente"
      }
    ]
  },
  {
    "section": 2,
    "title": "Casa",
    "cards": [
      {
        "id": "v02_001",
        "front": "The ___ / ___ (BrE) is the main room for relaxing.",
        "back": "living room / lounge\n\nSalón"
      },
      {
        "id": "v02_002",
        "front": "The ___ is where the family eats together.",
        "back": "dining room\n\nComedor"
      },
      {
        "id": "v02_003",
        "front": "The ___ is where food is prepared and cooked.",
        "back": "kitchen\n\nCocina"
      },
      {
        "id": "v02_004",
        "front": "The ___ is where you sleep.",
        "back": "bedroom\n\nDormitorio"
      },
      {
        "id": "v02_005",
        "front": "The ___ is the largest bedroom, usually with an en suite.",
        "back": "master bedroom\n\nDormitorio principal"
      },
      {
        "id": "v02_006",
        "front": "The ___ has a toilet, sink and bath or shower.",
        "back": "bathroom\n\nBaño completo"
      },
      {
        "id": "v02_007",
        "front": "A ___ / ___ (BrE) has only a toilet and sink, no shower.",
        "back": "half bath / toilet\n\nAseo"
      },
      {
        "id": "v02_008",
        "front": "The ___ / ___ connects rooms and leads to the front door.",
        "back": "hallway / entrance hall\n\nPasillo / recibidor"
      },
      {
        "id": "v02_009",
        "front": "The ___ is the hallway at the top of the stairs.",
        "back": "landing\n\nRellano (arriba de las escaleras)"
      },
      {
        "id": "v02_010",
        "front": "The ___ / ___ is a room used for working or reading.",
        "back": "study / home office\n\nDespacho / estudio"
      },
      {
        "id": "v02_011",
        "front": "The ___ is used for washing machines and storage.",
        "back": "utility room\n\nCuarto de lavadero / trastero"
      },
      {
        "id": "v02_012",
        "front": "The ___ / ___ is the storage space under the roof.",
        "back": "loft / attic\n\nÁtico / desván / buhardilla"
      },
      {
        "id": "v02_013",
        "front": "The ___ / ___ is a room below ground level.",
        "back": "basement / cellar\n\nSótano (basement = habitable / cellar = bodega)"
      },
      {
        "id": "v02_014",
        "front": "The ___ is where cars are kept.",
        "back": "garage\n\nGaraje"
      },
      {
        "id": "v02_015",
        "front": "The ___ is a covered entrance at the front of the house.",
        "back": "porch\n\nPorche"
      },
      {
        "id": "v02_016",
        "front": "The ___ is a paved outdoor area at the back of the house.",
        "back": "patio\n\nPatio / terraza pavimentada"
      },
      {
        "id": "v02_017",
        "front": "The ___ / ___ (AmE) is the outdoor grass area.",
        "back": "garden / yard\n\nJardín"
      },
      {
        "id": "v02_018",
        "front": "The ___ is the private road leading to the garage.",
        "back": "driveway\n\nCamino de entrada / acceso"
      },
      {
        "id": "v02_019",
        "front": "The ___ separates the garden from neighbouring properties.",
        "back": "fence\n\nValla / cerca"
      },
      {
        "id": "v02_020",
        "front": "The ___ is the moveable part of the fence you open to enter.",
        "back": "gate\n\nPuerta del jardín / cancela"
      },
      {
        "id": "v02_021",
        "front": "The ___ is the main entrance to the house.",
        "back": "front door\n\nPuerta principal"
      },
      {
        "id": "v02_022",
        "front": "A ___ is pressed to announce your arrival.",
        "back": "doorbell\n\nTimbre"
      },
      {
        "id": "v02_023",
        "front": "A ___ is the step just outside the front door.",
        "back": "doorstep\n\nEscalón de la entrada"
      },
      {
        "id": "v02_024",
        "front": "A ___ is placed at the entrance for wiping shoes.",
        "back": "doormat\n\nFelpudo"
      },
      {
        "id": "v02_025",
        "front": "The ___ is the covering on top of the building.",
        "back": "roof\n\nTejado"
      },
      {
        "id": "v02_026",
        "front": "The ___ allows smoke to escape from the fireplace.",
        "back": "chimney\n\nChimenea (exterior)"
      },
      {
        "id": "v02_027",
        "front": "The ___ / ___ is the indoor structure where a fire burns.",
        "back": "fireplace / hearth\n\nChimenea interior / hogar"
      },
      {
        "id": "v02_028",
        "front": "A ___ heats a room using hot water from the boiler.",
        "back": "radiator\n\nRadiador"
      },
      {
        "id": "v02_029",
        "front": "The ___ heats water for radiators and taps.",
        "back": "boiler\n\nCaldera"
      },
      {
        "id": "v02_030",
        "front": "The ___ system keeps the whole house warm.",
        "back": "central heating\n\nCalefacción central"
      },
      {
        "id": "v02_031",
        "front": "The ___ controls the temperature of the heating.",
        "back": "thermostat\n\nTermostato"
      },
      {
        "id": "v02_032",
        "front": "A ___ is the upper surface of a room.",
        "back": "ceiling\n\nTecho"
      },
      {
        "id": "v02_033",
        "front": "A ___ is the lower surface of a room.",
        "back": "floor\n\nSuelo"
      },
      {
        "id": "v02_034",
        "front": "A ___ is the vertical surface around a room.",
        "back": "wall\n\nPared"
      },
      {
        "id": "v02_035",
        "front": "A ___ / ___ connects floors of a building.",
        "back": "staircase / stairs\n\nEscalera"
      },
      {
        "id": "v02_036",
        "front": "A ___ / ___ is the rail you hold when using the stairs.",
        "back": "banister / handrail\n\nBarandilla"
      },
      {
        "id": "v02_037",
        "front": "A ___ is a single level of a staircase.",
        "back": "step\n\nEscalón"
      },
      {
        "id": "v02_038",
        "front": "A ___ lets light and air into a room.",
        "back": "window\n\nVentana"
      },
      {
        "id": "v02_039",
        "front": "A ___ is the ledge at the bottom of a window.",
        "back": "windowsill\n\nAlféizar"
      },
      {
        "id": "v02_040",
        "front": "A ___ is the structure that holds the glass.",
        "back": "window frame\n\nMarco de ventana"
      },
      {
        "id": "v02_041",
        "front": "A ___ is an internal window covering you pull down or across.",
        "back": "blind\n\nPersiana / estor"
      },
      {
        "id": "v02_042",
        "front": "A ___ rolls up into a tube at the top.",
        "back": "roller blind\n\nEstor enrollable"
      },
      {
        "id": "v02_043",
        "front": "A ___ has horizontal slats you can tilt.",
        "back": "venetian blind\n\nPersiana veneciana"
      },
      {
        "id": "v02_044",
        "front": "A ___ is a fabric window covering hung from a rail.",
        "back": "curtain\n\nCortina"
      },
      {
        "id": "v02_045",
        "front": "A ___ / ___ holds curtains up.",
        "back": "curtain rail / curtain rod\n\nBarra de cortinas"
      },
      {
        "id": "v02_046",
        "front": "A ___ is an exterior solid panel that closes over the window.",
        "back": "shutter\n\nContraventana / persiana exterior"
      },
      {
        "id": "v02_047",
        "front": "A ___ separates rooms or provides access.",
        "back": "door\n\nPuerta interior"
      },
      {
        "id": "v02_048",
        "front": "A ___ / ___ opens the door.",
        "back": "door handle / door knob\n\nManilla / pomo"
      },
      {
        "id": "v02_049",
        "front": "A ___ is the structure surrounding a door.",
        "back": "door frame\n\nMarco de puerta"
      },
      {
        "id": "v02_050",
        "front": "A ___ connects the door to the frame and allows it to swing.",
        "back": "hinge\n\nBisagra"
      },
      {
        "id": "v02_051",
        "front": "A ___ secures the door when closed.",
        "back": "lock\n\nCerradura"
      },
      {
        "id": "v02_052",
        "front": "A ___ opens a lock.",
        "back": "key\n\nLlave"
      },
      {
        "id": "v02_053",
        "front": "A ___ turns lights on or off.",
        "back": "light switch\n\nInterruptor"
      },
      {
        "id": "v02_054",
        "front": "A ___ / ___ is where you plug in appliances.",
        "back": "socket / power outlet\n\nEnchufe"
      },
      {
        "id": "v02_055",
        "front": "A ___ / ___ is fixed to the ceiling.",
        "back": "ceiling light / overhead light\n\nLuz de techo"
      },
      {
        "id": "v02_056",
        "front": "A ___ is a portable light source.",
        "back": "lamp\n\nLámpara de pie o mesa"
      },
      {
        "id": "v02_057",
        "front": "A ___ produces light inside a lamp or fitting.",
        "back": "light bulb\n\nBombilla"
      },
      {
        "id": "v02_058",
        "front": "A ___ / ___ is a small directional ceiling light.",
        "back": "spotlight / downlight\n\nFoco / downlight"
      },
      {
        "id": "v02_059",
        "front": "A ___ / ___ is a large upholstered seat for multiple people.",
        "back": "sofa / couch\n\nSofá"
      },
      {
        "id": "v02_060",
        "front": "An ___ is an upholstered chair with armrests for one person.",
        "back": "armchair\n\nSillón"
      },
      {
        "id": "v02_061",
        "front": "A ___ is a low table placed in front of the sofa.",
        "back": "coffee table\n\nMesa de centro"
      },
      {
        "id": "v02_062",
        "front": "A ___ / ___ is a small table beside the sofa or bed.",
        "back": "side table / end table\n\nMesita auxiliar"
      },
      {
        "id": "v02_063",
        "front": "A ___ / ___ stores books and objects.",
        "back": "bookshelf / bookcase\n\nEstantería"
      },
      {
        "id": "v02_064",
        "front": "A ___ is a set of shelves for storage.",
        "back": "shelving unit\n\nMódulo de estantes"
      },
      {
        "id": "v02_065",
        "front": "A ___ is a piece of furniture with doors for storage.",
        "back": "cabinet\n\nVitrina / mueble con puertas"
      },
      {
        "id": "v02_066",
        "front": "A ___ / ___ holds the television and related devices.",
        "back": "TV unit / media unit\n\nMueble de televisión"
      },
      {
        "id": "v02_067",
        "front": "A ___ is a soft floor covering that doesn't cover the whole floor.",
        "back": "rug\n\nAlfombra (no moqueta)"
      },
      {
        "id": "v02_068",
        "front": "A ___ is a soft floor covering fitted to the entire room.",
        "back": "carpet\n\nMoqueta"
      },
      {
        "id": "v02_069",
        "front": "A ___ is made from solid wood planks.",
        "back": "hardwood floor\n\nParquet / suelo de madera"
      },
      {
        "id": "v02_070",
        "front": "A ___ looks like wood but is made of compressed fibre.",
        "back": "laminate floor\n\nSuelo laminado"
      },
      {
        "id": "v02_071",
        "front": "___ are flat ceramic or stone pieces used on floors or walls.",
        "back": "Tiles\n\nBaldosas / azulejos"
      },
      {
        "id": "v02_072",
        "front": "A ___ keeps a door open.",
        "back": "doorstop\n\nCuña / tope de puerta"
      },
      {
        "id": "v02_073",
        "front": "A ___ holds and displays a photo or artwork.",
        "back": "picture frame\n\nMarco de foto / cuadro"
      },
      {
        "id": "v02_074",
        "front": "A ___ reflects your image.",
        "back": "mirror\n\nEspejo"
      },
      {
        "id": "v02_075",
        "front": "A ___ shows the time.",
        "back": "clock\n\nReloj de pared"
      },
      {
        "id": "v02_076",
        "front": "A ___ holds a plant indoors.",
        "back": "plant pot\n\nMaceta"
      },
      {
        "id": "v02_077",
        "front": "A ___ holds cut flowers.",
        "back": "vase\n\nJarrón"
      },
      {
        "id": "v02_078",
        "front": "A ___ is a soft pad used on sofas or chairs.",
        "back": "cushion\n\nCojín"
      },
      {
        "id": "v02_079",
        "front": "A ___ / ___ is a decorative fabric draped over furniture.",
        "back": "throw / blanket\n\nManta decorativa / plaid"
      },
      {
        "id": "v02_080",
        "front": "A ___ is the main piece of furniture in a bedroom.",
        "back": "bed\n\nCama"
      },
      {
        "id": "v02_081",
        "front": "A ___ fits one person.",
        "back": "single bed\n\nCama individual"
      },
      {
        "id": "v02_082",
        "front": "A ___ is wider than a single.",
        "back": "double bed\n\nCama de matrimonio"
      },
      {
        "id": "v02_083",
        "front": "A ___ is the largest standard bed.",
        "back": "king-size bed\n\nCama king size"
      },
      {
        "id": "v02_084",
        "front": "A ___ has two beds stacked vertically.",
        "back": "bunk bed\n\nLitera"
      },
      {
        "id": "v02_085",
        "front": "A ___ / ___ converts into a sleeping surface.",
        "back": "sofa bed / sofa-bed\n\nSofá cama"
      },
      {
        "id": "v02_086",
        "front": "A ___ is the padded layer you sleep on.",
        "back": "mattress\n\nColchón"
      },
      {
        "id": "v02_087",
        "front": "A ___ supports your head while sleeping.",
        "back": "pillow\n\nAlmohada"
      },
      {
        "id": "v02_088",
        "front": "A ___ covers the pillow.",
        "back": "pillowcase\n\nFunda de almohada"
      },
      {
        "id": "v02_089",
        "front": "A ___ / ___ is the main thick bed cover.",
        "back": "duvet / quilt\n\nEdredón"
      },
      {
        "id": "v02_090",
        "front": "A ___ is the washable cover for the duvet.",
        "back": "duvet cover\n\nFunda nórdica"
      },
      {
        "id": "v02_091",
        "front": "A ___ is the flat fabric layer between you and the duvet.",
        "back": "bed sheet\n\nSábana"
      },
      {
        "id": "v02_092",
        "front": "A ___ has elastic edges that grip the mattress.",
        "back": "fitted sheet\n\nSábana bajera ajustable"
      },
      {
        "id": "v02_093",
        "front": "A ___ / ___ is a decorative cover over the made bed.",
        "back": "bedspread / coverlet\n\nColcha decorativa"
      },
      {
        "id": "v02_094",
        "front": "A ___ is a warm layer used instead of or with a duvet.",
        "back": "blanket\n\nManta"
      },
      {
        "id": "v02_095",
        "front": "A ___ / ___ (AmE) is next to the bed.",
        "back": "bedside table / nightstand\n\nMesita de noche"
      },
      {
        "id": "v02_096",
        "front": "A ___ is a freestanding cupboard for storing clothes.",
        "back": "wardrobe\n\nArmario independiente"
      },
      {
        "id": "v02_097",
        "front": "A ___ / ___ (AmE) is fitted into the wall.",
        "back": "built-in wardrobe / closet\n\nArmario empotrado"
      },
      {
        "id": "v02_098",
        "front": "A ___ / ___ (AmE) has multiple drawers for folded clothes.",
        "back": "chest of drawers / dresser\n\nCómoda"
      },
      {
        "id": "v02_099",
        "front": "A ___ has a mirror and is used for applying makeup.",
        "back": "dressing table\n\nTocador"
      },
      {
        "id": "v02_100",
        "front": "A ___ / ___ holds a garment in the wardrobe.",
        "back": "coat hanger / clothes hanger\n\nPercha"
      },
      {
        "id": "v02_101",
        "front": "A ___ is a bar from which hangers are hung.",
        "back": "clothes rail\n\nBarra del armario"
      },
      {
        "id": "v02_102",
        "front": "A ___ / ___ is filled with water for bathing.",
        "back": "bathtub / bath\n\nBañera"
      },
      {
        "id": "v02_103",
        "front": "A ___ sprays water for washing.",
        "back": "shower\n\nDucha"
      },
      {
        "id": "v02_104",
        "front": "A ___ is the base of a walk-in shower.",
        "back": "shower tray\n\nPlato de ducha"
      },
      {
        "id": "v02_105",
        "front": "A ___ keeps water inside the shower area.",
        "back": "shower curtain\n\nCortina de ducha"
      },
      {
        "id": "v02_106",
        "front": "A ___ is a glass panel around the shower.",
        "back": "shower screen\n\nMampara de ducha"
      },
      {
        "id": "v02_107",
        "front": "A ___ is used for human waste.",
        "back": "toilet\n\nInodoro / váter"
      },
      {
        "id": "v02_108",
        "front": "A ___ is the hinged seat on top of the toilet.",
        "back": "toilet seat\n\nTapa del váter"
      },
      {
        "id": "v02_109",
        "front": "A ___ holds the water used to flush.",
        "back": "toilet cistern\n\nCisterna"
      },
      {
        "id": "v02_110",
        "front": "A ___ releases water to clean the toilet bowl.",
        "back": "flush\n\nDescarga / cadena"
      },
      {
        "id": "v02_111",
        "front": "A ___ is used to wash the genital area.",
        "back": "bidet\n\nBidet"
      },
      {
        "id": "v02_112",
        "front": "A ___ / ___ is where you wash your hands and face.",
        "back": "sink / washbasin\n\nLavabo"
      },
      {
        "id": "v02_113",
        "front": "A ___ (BrE) / ___ (AmE) controls the water flow.",
        "back": "tap / faucet\n\nGrifo"
      },
      {
        "id": "v02_114",
        "front": "A ___ above the sink reflects your face.",
        "back": "mirror\n\nEspejo del baño"
      },
      {
        "id": "v02_115",
        "front": "A ___ is a mirrored cabinet above the sink for toiletries.",
        "back": "medicine cabinet\n\nBotiquín / armario del baño"
      },
      {
        "id": "v02_116",
        "front": "A ___ / ___ holds towels in the bathroom.",
        "back": "towel rail / towel rack\n\nToallero"
      },
      {
        "id": "v02_117",
        "front": "A ___ is a warm metal rack that dries towels.",
        "back": "heated towel rail\n\nToallero calefactado"
      },
      {
        "id": "v02_118",
        "front": "A ___ is placed on the floor to stand on after showering.",
        "back": "bath mat\n\nAlfombrilla de baño"
      },
      {
        "id": "v02_119",
        "front": "A ___ cleans the inside of the toilet.",
        "back": "toilet brush\n\nEscobilla del váter"
      },
      {
        "id": "v02_120",
        "front": "A ___ unblocks drains.",
        "back": "plunger\n\nDesatascador"
      },
      {
        "id": "v02_121",
        "front": "A ___ lets water out of the bath, shower or sink.",
        "back": "drain\n\nDesagüe"
      },
      {
        "id": "v02_122",
        "front": "A ___ is the material between tiles.",
        "back": "tile grout\n\nLechada / rejuntado"
      },
      {
        "id": "v02_123",
        "front": "___ seals the gap between the bath and the wall.",
        "back": "Caulk\n\nSellador / silicona"
      },
      {
        "id": "v02_124",
        "front": "A ___ removes steam and smells from the bathroom.",
        "back": "extractor fan\n\nVentilador extractor"
      },
      {
        "id": "v02_125",
        "front": "A ___ holds a bar of soap.",
        "back": "soap dish\n\nJabonera"
      },
      {
        "id": "v02_126",
        "front": "A ___ holds liquid soap.",
        "back": "soap dispenser\n\nDispensador de jabón"
      },
      {
        "id": "v02_127",
        "front": "A ___ holds toothbrushes upright.",
        "back": "toothbrush holder\n\nPortacepillos"
      },
      {
        "id": "v02_128",
        "front": "A ___ holds the toilet paper.",
        "back": "toilet roll holder\n\nPortarrollos"
      },
      {
        "id": "v02_129",
        "front": "A ___ is used to turn screws.",
        "back": "screwdriver\n\nDestornillador"
      },
      {
        "id": "v02_130",
        "front": "A ___ is used to hit nails into surfaces.",
        "back": "hammer\n\nMartillo"
      },
      {
        "id": "v02_131",
        "front": "A ___ (AmE) / ___ (BrE) tightens or loosens bolts and nuts.",
        "back": "wrench / spanner\n\nLlave inglesa"
      },
      {
        "id": "v02_132",
        "front": "A ___ makes holes in walls, wood or metal.",
        "back": "drill\n\nTaladro"
      },
      {
        "id": "v02_133",
        "front": "A ___ is the replaceable cutting tip of a drill.",
        "back": "drill bit\n\nBroca"
      },
      {
        "id": "v02_134",
        "front": "A ___ checks if a surface is perfectly horizontal.",
        "back": "spirit level\n\nNivel de burbuja"
      },
      {
        "id": "v02_135",
        "front": "A ___ is a flexible ruler for measuring distances.",
        "back": "tape measure\n\nCinta métrica"
      },
      {
        "id": "v02_136",
        "front": "A ___ marks the spot before drilling or cutting.",
        "back": "pencil\n\nLápiz (para marcar)"
      },
      {
        "id": "v02_137",
        "front": "A ___ cuts through wood or metal.",
        "back": "saw\n\nSierra"
      },
      {
        "id": "v02_138",
        "front": "A ___ smooths rough surfaces.",
        "back": "sandpaper\n\nPapel de lija"
      },
      {
        "id": "v02_139",
        "front": "A ___ applies paint to walls or surfaces.",
        "back": "paintbrush\n\nBrocha / pincel"
      },
      {
        "id": "v02_140",
        "front": "A ___ applies paint quickly over large areas.",
        "back": "paint roller\n\nRodillo de pintura"
      },
      {
        "id": "v02_141",
        "front": "A ___ holds paint for the roller.",
        "back": "paint tray\n\nBandeja de pintura"
      },
      {
        "id": "v02_142",
        "front": "___ protects edges when painting.",
        "back": "Masking tape\n\nCinta de carrocero"
      },
      {
        "id": "v02_143",
        "front": "A ___ is used to reach high places.",
        "back": "ladder\n\nEscalera (de mano)"
      },
      {
        "id": "v02_144",
        "front": "A ___ stores tools.",
        "back": "toolbox\n\nCaja de herramientas"
      },
      {
        "id": "v02_145",
        "front": "A ___ is a threaded metal fastener turned to fix things.",
        "back": "screw\n\nTornillo"
      },
      {
        "id": "v02_146",
        "front": "A ___ is a threaded metal rod tightened with a nut.",
        "back": "bolt\n\nPerno"
      },
      {
        "id": "v02_147",
        "front": "A ___ is a metal ring that threads onto a bolt.",
        "back": "nut\n\nTuerca"
      },
      {
        "id": "v02_148",
        "front": "A ___ is a thin metal spike hammered in to fix things.",
        "back": "nail\n\nClavo"
      },
      {
        "id": "v02_149",
        "front": "A ___ / ___ is inserted in a drilled hole before a screw.",
        "back": "rawlplug / wall plug\n\nTaco de pared"
      },
      {
        "id": "v02_150",
        "front": "A ___ is a flat ring placed under a nut to distribute pressure.",
        "back": "washer\n\nArandela"
      },
      {
        "id": "v02_151",
        "front": "___ is graded by grit — lower number = coarser.",
        "back": "Sandpaper\n\nPapel de lija (grano)"
      },
      {
        "id": "v02_152",
        "front": "A ___ / ___ removes old paint or fills cracks.",
        "back": "putty knife / scraper\n\nEspátula / rascador"
      }
    ]
  },
  {
    "section": 3,
    "title": "Ropa",
    "cards": [
      {
        "id": "v03_001",
        "front": "A ___ is a basic short-sleeved top with no collar.",
        "back": "T-shirt\n\nCamiseta"
      },
      {
        "id": "v03_002",
        "front": "A ___ has a collar, buttons down the front and long or short sleeves.",
        "back": "shirt\n\nCamisa"
      },
      {
        "id": "v03_003",
        "front": "A ___ is a loose-fitting shirt worn by women.",
        "back": "blouse\n\nBlusa"
      },
      {
        "id": "v03_004",
        "front": "A ___ has a collar and two or three buttons at the neck.",
        "back": "polo shirt\n\nPolo"
      },
      {
        "id": "v03_005",
        "front": "A ___ (BrE) / ___ (AmE) is a sleeveless top.",
        "back": "vest / tank top\n\nCamiseta sin mangas / tirantes"
      },
      {
        "id": "v03_006",
        "front": "A ___ (BrE) / ___ (AmE) is a warm knitted top pulled over the head.",
        "back": "jumper / sweater\n\nJersey / suéter"
      },
      {
        "id": "v03_007",
        "front": "A ___ is a sweatshirt with a hood.",
        "back": "hoodie\n\nSudadera con capucha"
      },
      {
        "id": "v03_008",
        "front": "A ___ is a warm casual top without a hood.",
        "back": "sweatshirt\n\nSudadera sin capucha"
      },
      {
        "id": "v03_009",
        "front": "A ___ is a knitted top that opens at the front with buttons.",
        "back": "cardigan\n\nCárdigan"
      },
      {
        "id": "v03_010",
        "front": "A ___ is a top or jacket that fastens with a zip.",
        "back": "zip-up\n\nCremallera / cierre (prenda)"
      },
      {
        "id": "v03_011",
        "front": "A ___ is an outer layer worn over other clothes.",
        "back": "jacket\n\nChaqueta"
      },
      {
        "id": "v03_012",
        "front": "A ___ is a smart structured jacket worn for work or formal occasions.",
        "back": "blazer\n\nAmericana / blazer"
      },
      {
        "id": "v03_013",
        "front": "A ___ / ___ is the top half of a suit.",
        "back": "suit jacket / suit coat\n\nAmericana de traje"
      },
      {
        "id": "v03_014",
        "front": "A ___ is a long warm outer garment.",
        "back": "coat\n\nAbrigo"
      },
      {
        "id": "v03_015",
        "front": "A ___ is a long formal coat.",
        "back": "overcoat\n\nSobretodo / gabardina larga"
      },
      {
        "id": "v03_016",
        "front": "A ___ is a belted coat with wide lapels.",
        "back": "trench coat\n\nGabardina / trinchera"
      },
      {
        "id": "v03_017",
        "front": "A ___ / ___ (BrE) is a waterproof coat.",
        "back": "raincoat / mac\n\nImpermeable / chubasquero"
      },
      {
        "id": "v03_018",
        "front": "A ___ / ___ is filled with down or synthetic insulation.",
        "back": "puffer jacket / padded jacket\n\nPlumífero / anorak acolchado"
      },
      {
        "id": "v03_019",
        "front": "A ___ / ___ is a light waterproof jacket.",
        "back": "anorak / windbreaker\n\nAnorak / cortavientos"
      },
      {
        "id": "v03_020",
        "front": "A ___ / ___ is a sleeveless padded jacket.",
        "back": "gilet / bodywarmer\n\nChaleco acolchado"
      },
      {
        "id": "v03_021",
        "front": "A ___ (BrE) / ___ (AmE) is a sleeveless formal jacket worn under a suit jacket.",
        "back": "waistcoat / vest\n\nChaleco de traje"
      },
      {
        "id": "v03_022",
        "front": "A ___ consists of matching trousers and jacket.",
        "back": "suit\n\nTraje"
      },
      {
        "id": "v03_023",
        "front": "A ___ / ___ (BrE) is a formal black suit for events.",
        "back": "tuxedo / dinner jacket\n\nEsmoquin"
      },
      {
        "id": "v03_024",
        "front": "A ___ is a one-piece garment for women covering the torso and legs.",
        "back": "dress\n\nVestido"
      },
      {
        "id": "v03_025",
        "front": "A ___ covers the waist and legs but not the torso.",
        "back": "skirt\n\nFalda"
      },
      {
        "id": "v03_026",
        "front": "A ___ ends well above the knee.",
        "back": "mini skirt\n\nMinifalda"
      },
      {
        "id": "v03_027",
        "front": "A ___ ends at mid-calf.",
        "back": "midi skirt\n\nFalda midi"
      },
      {
        "id": "v03_028",
        "front": "A ___ reaches the ankles.",
        "back": "maxi skirt\n\nFalda larga / maxi"
      },
      {
        "id": "v03_029",
        "front": "A ___ wraps around the body and ties at the side.",
        "back": "wrap skirt\n\nFalda cruzada"
      },
      {
        "id": "v03_030",
        "front": "A ___ has folded fabric creating volume.",
        "back": "pleated skirt\n\nFalda plisada"
      },
      {
        "id": "v03_031",
        "front": "A ___ is tight and straight.",
        "back": "pencil skirt\n\nFalda lápiz / tubo"
      },
      {
        "id": "v03_032",
        "front": "___ (BrE) / ___ (AmE) cover the waist and both legs separately.",
        "back": "Trousers / pants\n\nPantalones"
      },
      {
        "id": "v03_033",
        "front": "___ are trousers made of denim fabric.",
        "back": "Jeans\n\nVaqueros"
      },
      {
        "id": "v03_034",
        "front": "___ are tight stretchy trousers.",
        "back": "Leggings\n\nMallas / leggings"
      },
      {
        "id": "v03_035",
        "front": "___ / ___ are loose comfortable trousers for sport or casual wear.",
        "back": "Joggers / sweatpants\n\nPantalón de chándal"
      },
      {
        "id": "v03_036",
        "front": "___ are smart casual cotton trousers.",
        "back": "Chinos\n\nPantalones chinos"
      },
      {
        "id": "v03_037",
        "front": "___ / ___ have multiple pockets on the sides.",
        "back": "Cargo trousers / cargo pants\n\nPantalones cargo"
      },
      {
        "id": "v03_038",
        "front": "___ are short trousers ending above the knee.",
        "back": "Shorts\n\nPantalones cortos"
      },
      {
        "id": "v03_039",
        "front": "___ (BrE) / ___ (AmE) have a bib and straps over the shoulders.",
        "back": "Dungarees / overalls\n\nPeto / mono con tirantes"
      },
      {
        "id": "v03_040",
        "front": "A ___ is a one-piece garment covering the torso and legs.",
        "back": "jumpsuit\n\nMono (prenda)"
      },
      {
        "id": "v03_041",
        "front": "A ___ is a short jumpsuit.",
        "back": "romper\n\nMono corto"
      },
      {
        "id": "v03_042",
        "front": "___ / ___ are worn under outer clothes.",
        "back": "Underwear / underpants\n\nRopa interior"
      },
      {
        "id": "v03_043",
        "front": "___ / ___ are loose men's underwear.",
        "back": "Boxer shorts / boxers\n\nBóxers"
      },
      {
        "id": "v03_044",
        "front": "___ are tight-fitting underwear.",
        "back": "Briefs\n\nCalzoncillos ajustados / braguitas"
      },
      {
        "id": "v03_045",
        "front": "A ___ is a woman's undergarment that supports the breasts.",
        "back": "bra\n\nSujetador"
      },
      {
        "id": "v03_046",
        "front": "A ___ / ___ is minimal underwear.",
        "back": "thong / G-string\n\nTanga"
      },
      {
        "id": "v03_047",
        "front": "___ (BrE) / ___ (AmE) are sheer leg coverings worn by women.",
        "back": "Tights / pantyhose\n\nMedias / pantis"
      },
      {
        "id": "v03_048",
        "front": "___ are leg coverings held up by a suspender belt.",
        "back": "Stockings\n\nMedias (sin cintura)"
      },
      {
        "id": "v03_049",
        "front": "___ cover the foot and lower leg.",
        "back": "Socks\n\nCalcetines"
      },
      {
        "id": "v03_050",
        "front": "___ end just above the ankle.",
        "back": "Ankle socks\n\nCalcetines tobilleros"
      },
      {
        "id": "v03_051",
        "front": "___ reach the knee.",
        "back": "Knee-high socks\n\nCalcetines hasta la rodilla"
      },
      {
        "id": "v03_052",
        "front": "A ___ / ___ is a loose garment worn in bed by women.",
        "back": "nightgown / nightdress\n\nCamisón"
      },
      {
        "id": "v03_053",
        "front": "___ / ___ are a set of loose top and trousers worn in bed.",
        "back": "Pyjamas / PJs\n\nPijama"
      },
      {
        "id": "v03_054",
        "front": "A ___ / ___ is worn after bathing or over pyjamas.",
        "back": "dressing gown / bathrobe\n\nBata / albornoz"
      },
      {
        "id": "v03_055",
        "front": "A ___ / ___ is a one-piece garment for swimming.",
        "back": "swimsuit / swimming costume\n\nBañador (mujer, una pieza)"
      },
      {
        "id": "v03_056",
        "front": "A ___ is a two-piece swimsuit.",
        "back": "bikini\n\nBikini"
      },
      {
        "id": "v03_057",
        "front": "___ / ___ are men's swimwear.",
        "back": "Swimming trunks / board shorts\n\nBañador (hombre)"
      },
      {
        "id": "v03_058",
        "front": "A ___ is a tight rubber suit for water sports.",
        "back": "wetsuit\n\nTraje de neopreno"
      },
      {
        "id": "v03_059",
        "front": "Trainers (BrE) / ___ (AmE) are casual sports shoes.",
        "back": "sneakers\n\nZapatillas deportivas"
      },
      {
        "id": "v03_060",
        "front": "___ are designed for running.",
        "back": "Running shoes\n\nZapatillas de correr"
      },
      {
        "id": "v03_061",
        "front": "___ / ___ are flat or low-heeled women's shoes.",
        "back": "Court shoes / pumps\n\nZapatos de salón"
      },
      {
        "id": "v03_062",
        "front": "___ / ___ are shoes with a tall thin heel.",
        "back": "High heels / stilettos\n\nTacones altos"
      },
      {
        "id": "v03_063",
        "front": "___ have a solid raised heel.",
        "back": "Wedges\n\nCuñas"
      },
      {
        "id": "v03_064",
        "front": "___ have no heel.",
        "back": "Flat shoes\n\nZapatos planos"
      },
      {
        "id": "v03_065",
        "front": "___ are open shoes fastened with straps.",
        "back": "Sandals\n\nSandalias"
      },
      {
        "id": "v03_066",
        "front": "___ (BrE) / ___ (AusE) are simple open sandals with a toe strap.",
        "back": "Flip-flops / thongs\n\nChanclas"
      },
      {
        "id": "v03_067",
        "front": "___ cover the ankle and part of the leg.",
        "back": "Boots\n\nBotas"
      },
      {
        "id": "v03_068",
        "front": "___ end just above the ankle.",
        "back": "Ankle boots\n\nBotines"
      },
      {
        "id": "v03_069",
        "front": "___ reach the knee.",
        "back": "Knee-high boots\n\nBotas hasta la rodilla"
      },
      {
        "id": "v03_070",
        "front": "___ / ___ are rubber waterproof boots.",
        "back": "Wellington boots / wellies\n\nBotas de agua / katiuskas"
      },
      {
        "id": "v03_071",
        "front": "___ are slip-on leather shoes with no laces.",
        "back": "Loafers\n\nMocasines"
      },
      {
        "id": "v03_072",
        "front": "___ are formal laced leather shoes.",
        "back": "Oxford shoes\n\nZapatos Oxford (de cordones)"
      },
      {
        "id": "v03_073",
        "front": "___ are similar to Oxfords but with open lacing.",
        "back": "Derby shoes\n\nZapatos Derby"
      },
      {
        "id": "v03_074",
        "front": "___ are leather shoes with decorative perforations.",
        "back": "Brogues\n\nBrogas"
      },
      {
        "id": "v03_075",
        "front": "___ are soft leather shoes or slippers.",
        "back": "Moccasins\n\nMocasines / zapatillas de cuero"
      },
      {
        "id": "v03_076",
        "front": "___ are soft indoor shoes.",
        "back": "Slippers\n\nZapatillas de casa"
      },
      {
        "id": "v03_077",
        "front": "___ have a rope sole and canvas upper.",
        "back": "Espadrilles\n\nAlpargatas"
      },
      {
        "id": "v03_078",
        "front": "A ___ is worn around the neck for warmth or decoration.",
        "back": "scarf\n\nBufanda / pañuelo"
      },
      {
        "id": "v03_079",
        "front": "A ___ covers the head.",
        "back": "hat\n\nSombrero / gorro"
      },
      {
        "id": "v03_080",
        "front": "A ___ is a close-fitting knitted hat.",
        "back": "beanie\n\nGorro de lana"
      },
      {
        "id": "v03_081",
        "front": "A ___ / ___ has a brim at the front.",
        "back": "cap / baseball cap\n\nGorra"
      },
      {
        "id": "v03_082",
        "front": "A ___ is a flat round soft hat.",
        "back": "beret\n\nBoina"
      },
      {
        "id": "v03_083",
        "front": "A ___ / ___ protects from the sun.",
        "back": "sun hat / wide-brimmed hat\n\nSombrero de ala ancha"
      },
      {
        "id": "v03_084",
        "front": "___ cover the hands and fingers.",
        "back": "Gloves\n\nGuantes"
      },
      {
        "id": "v03_085",
        "front": "___ cover the hand but keep fingers together.",
        "back": "Mittens\n\nManoplas"
      },
      {
        "id": "v03_086",
        "front": "A ___ is worn around the waist to hold trousers up.",
        "back": "belt\n\nCinturón"
      },
      {
        "id": "v03_087",
        "front": "___ (BrE) / ___ (AmE) are straps over shoulders to hold trousers up.",
        "back": "Braces / suspenders\n\nTirantes"
      },
      {
        "id": "v03_088",
        "front": "A ___ is worn around the neck under a shirt collar.",
        "back": "tie\n\nCorbata"
      },
      {
        "id": "v03_089",
        "front": "A ___ is a tied ribbon worn at the collar.",
        "back": "bow tie\n\nPajarita"
      },
      {
        "id": "v03_090",
        "front": "A ___ is a folded cloth in a jacket's breast pocket.",
        "back": "pocket square\n\nPañuelo de bolsillo"
      },
      {
        "id": "v03_091",
        "front": "___ fasten shirt cuffs.",
        "back": "Cufflinks\n\nGemelos (de camisa)"
      },
      {
        "id": "v03_092",
        "front": "A ___ is worn on the wrist to tell time.",
        "back": "watch\n\nReloj de pulsera"
      },
      {
        "id": "v03_093",
        "front": "A ___ is a decorative band worn on the wrist.",
        "back": "bracelet\n\nPulsera"
      },
      {
        "id": "v03_094",
        "front": "A ___ is worn around the neck.",
        "back": "necklace\n\nCollar"
      },
      {
        "id": "v03_095",
        "front": "A ___ hangs from a necklace.",
        "back": "pendant\n\nColgante"
      },
      {
        "id": "v03_096",
        "front": "___ are worn on the ears.",
        "back": "Earrings\n\nPendientes / aretes"
      },
      {
        "id": "v03_097",
        "front": "A ___ is worn on a finger.",
        "back": "ring\n\nAnillo"
      },
      {
        "id": "v03_098",
        "front": "A ___ is a decorative pin fastened to clothing.",
        "back": "brooch\n\nBroche / alfiler decorativo"
      },
      {
        "id": "v03_099",
        "front": "___ protect eyes from the sun.",
        "back": "Sunglasses\n\nGafas de sol"
      },
      {
        "id": "v03_100",
        "front": "A ___ / ___ (AmE) is a bag carried by hand or over the shoulder.",
        "back": "handbag / purse\n\nBolso"
      },
      {
        "id": "v03_101",
        "front": "A ___ is a large open bag with two handles.",
        "back": "tote bag\n\nBolsa tote"
      },
      {
        "id": "v03_102",
        "front": "A ___ is a small handbag with no strap.",
        "back": "clutch\n\nClutch / sobre"
      },
      {
        "id": "v03_103",
        "front": "A ___ / ___ (BrE) is carried on the back.",
        "back": "backpack / rucksack\n\nMochila"
      },
      {
        "id": "v03_104",
        "front": "A ___ hangs from one shoulder.",
        "back": "shoulder bag\n\nBolso de bandolera"
      },
      {
        "id": "v03_105",
        "front": "A ___ has a long strap worn diagonally.",
        "back": "cross-body bag\n\nBolso cruzado"
      },
      {
        "id": "v03_106",
        "front": "A ___ holds cards and cash and fits in a pocket.",
        "back": "wallet\n\nCartera / billetera"
      },
      {
        "id": "v03_107",
        "front": "A ___ is the part around the neck of a shirt or jacket.",
        "back": "collar\n\nCuello (de prenda)"
      },
      {
        "id": "v03_108",
        "front": "A ___ is the folded flap on a jacket's collar.",
        "back": "lapel\n\nSolapa"
      },
      {
        "id": "v03_109",
        "front": "A ___ is the part of a garment that covers the arm.",
        "back": "sleeve\n\nManga"
      },
      {
        "id": "v03_110",
        "front": "A ___ is the end of a sleeve, usually around the wrist.",
        "back": "cuff\n\nPuño (de manga)"
      },
      {
        "id": "v03_111",
        "front": "A ___ is the bottom folded edge of a garment.",
        "back": "hem\n\nBajo / dobladillo"
      },
      {
        "id": "v03_112",
        "front": "A ___ is the line where two pieces of fabric are sewn together.",
        "back": "seam\n\nCostura"
      },
      {
        "id": "v03_113",
        "front": "A ___ is a small bag sewn into a garment.",
        "back": "pocket\n\nBolsillo"
      },
      {
        "id": "v03_114",
        "front": "A ___ is the inner fabric layer of a garment.",
        "back": "lining\n\nForro"
      },
      {
        "id": "v03_115",
        "front": "A ___ (BrE) / ___ (AmE) is a metal or plastic fastener with teeth.",
        "back": "zip / zipper\n\nCremallera"
      },
      {
        "id": "v03_116",
        "front": "A ___ fastens clothing when pushed through a buttonhole.",
        "back": "button\n\nBotón"
      },
      {
        "id": "v03_117",
        "front": "A ___ is the slit a button passes through.",
        "back": "buttonhole\n\nOjal"
      },
      {
        "id": "v03_118",
        "front": "___ is a fabric fastener with hooks and loops.",
        "back": "Velcro\n\nVelcro"
      },
      {
        "id": "v03_119",
        "front": "A ___ fastens a belt or strap.",
        "back": "buckle\n\nHebilla"
      },
      {
        "id": "v03_120",
        "front": "A ___ / ___ (BrE) is a small metal fastener that clicks shut.",
        "back": "snap / press stud\n\nCorchete / broche de presión"
      },
      {
        "id": "v03_121",
        "front": "A ___ is an attached head covering on a jacket or top.",
        "back": "hood\n\nCapucha"
      },
      {
        "id": "v03_122",
        "front": "A ___ is the band at the top of trousers or a skirt.",
        "back": "waistband\n\nCinturilla / pretina"
      },
      {
        "id": "v03_123",
        "front": "___ is a natural breathable fabric from the cotton plant.",
        "back": "Cotton\n\nAlgodón"
      },
      {
        "id": "v03_124",
        "front": "___ is a natural fabric made from flax — cool and breathable.",
        "back": "Linen\n\nLino"
      },
      {
        "id": "v03_125",
        "front": "___ is a natural fabric from sheep — warm and insulating.",
        "back": "Wool\n\nLana"
      },
      {
        "id": "v03_126",
        "front": "___ is a smooth luxurious natural fabric from silkworms.",
        "back": "Silk\n\nSeda"
      },
      {
        "id": "v03_127",
        "front": "___ is a heavy cotton fabric used for jeans.",
        "back": "Denim\n\nDenim / tela vaquera"
      },
      {
        "id": "v03_128",
        "front": "___ is made from animal skin.",
        "back": "Leather\n\nCuero / piel"
      },
      {
        "id": "v03_129",
        "front": "___ is soft leather with a napped finish.",
        "back": "Suede\n\nAnte / gamuza"
      },
      {
        "id": "v03_130",
        "front": "___ is a synthetic fabric that dries quickly.",
        "back": "Polyester\n\nPoliéster"
      },
      {
        "id": "v03_131",
        "front": "___ is a synthetic fabric used in tights and sportswear.",
        "back": "Nylon\n\nNylon"
      },
      {
        "id": "v03_132",
        "front": "___ is a soft synthetic fabric used in casual jackets.",
        "back": "Fleece\n\nForro polar"
      },
      {
        "id": "v03_133",
        "front": "___ is a very soft luxury wool from goats.",
        "back": "Cashmere\n\nCachemira"
      },
      {
        "id": "v03_134",
        "front": "___ has a soft short pile surface.",
        "back": "Velvet\n\nTerciopelo"
      },
      {
        "id": "v03_135",
        "front": "___ is woven cotton fabric, usually indigo-dyed.",
        "back": "Denim\n\nDenim / vaquero"
      },
      {
        "id": "v03_136",
        "front": "___ / ___ fabric has a pattern of squares.",
        "back": "Check / checked\n\nA cuadros"
      },
      {
        "id": "v03_137",
        "front": "___ fabric has parallel lines.",
        "back": "Striped\n\nA rayas"
      },
      {
        "id": "v03_138",
        "front": "___ fabric has a flower pattern.",
        "back": "Floral\n\nCon flores / floral"
      },
      {
        "id": "v03_139",
        "front": "___ fabric has no pattern — just a single colour.",
        "back": "Plain\n\nLiso / sin estampado"
      },
      {
        "id": "v03_140",
        "front": "___ fabric has small round dots.",
        "back": "Polka dot\n\nDe lunares"
      },
      {
        "id": "v03_141",
        "front": "___ has a curved teardrop pattern.",
        "back": "Paisley\n\nDe cachemir / paisley"
      }
    ]
  },
  {
    "section": 4,
    "title": "Supermercado",
    "cards": [
      {
        "id": "v04_001",
        "front": "The ___ section sells fresh fruit and vegetables.",
        "back": "produce\n\nSección de frutas y verduras"
      },
      {
        "id": "v04_002",
        "front": "The ___ section sells bread, pastries and cakes.",
        "back": "bakery\n\nPanadería / pastelería"
      },
      {
        "id": "v04_003",
        "front": "The ___ / ___ sells cold meats, cheeses and prepared foods.",
        "back": "deli / delicatessen\n\nCharcutería / delicatessen"
      },
      {
        "id": "v04_004",
        "front": "The ___ / ___ sells fresh meat.",
        "back": "butcher's / meat counter\n\nCarnicería"
      },
      {
        "id": "v04_005",
        "front": "The ___ / ___ sells fresh fish and seafood.",
        "back": "fishmonger's / fish counter\n\nPescadería"
      },
      {
        "id": "v04_006",
        "front": "The ___ section sells milk, butter, cheese and eggs.",
        "back": "dairy\n\nSección de lácteos"
      },
      {
        "id": "v04_007",
        "front": "The ___ section sells items kept below 0°C.",
        "back": "frozen food\n\nCongelados"
      },
      {
        "id": "v04_008",
        "front": "The ___ / ___ (BrE) aisle has preserved food in tins.",
        "back": "canned goods / tinned goods\n\nConservas en lata"
      },
      {
        "id": "v04_009",
        "front": "The ___ / ___ has cereals, oats and granola.",
        "back": "cereals / breakfast aisle\n\nCereales / desayuno"
      },
      {
        "id": "v04_010",
        "front": "The ___ aisle has sauces, ketchup, mustard and mayonnaise.",
        "back": "condiments\n\nCondimentos / salsas"
      },
      {
        "id": "v04_011",
        "front": "The ___ is where you pay for your shopping.",
        "back": "checkout\n\nCaja (de pago)"
      },
      {
        "id": "v04_012",
        "front": "A ___ lets you scan and pay without a cashier.",
        "back": "self-checkout\n\nCaja de autopago"
      },
      {
        "id": "v04_013",
        "front": "A ___ (BrE) / ___ (AmE) is the wheeled basket for shopping.",
        "back": "trolley / cart\n\nCarrito de la compra"
      },
      {
        "id": "v04_014",
        "front": "A ___ is a handheld container for fewer items.",
        "back": "basket\n\nCesta de la compra"
      },
      {
        "id": "v04_015",
        "front": "A ___ gives you points or discounts.",
        "back": "loyalty card\n\nTarjeta de fidelización"
      },
      {
        "id": "v04_016",
        "front": "A ___ is the printed proof of purchase.",
        "back": "receipt\n\nTicket / recibo"
      },
      {
        "id": "v04_017",
        "front": "___ / ___ are reduced-price promotions.",
        "back": "Special offers / deals\n\nOfertas especiales"
      },
      {
        "id": "v04_018",
        "front": "___ (___) means you get two for the price of one.",
        "back": "Buy one get one free / BOGOF\n\n2x1"
      },
      {
        "id": "v04_019",
        "front": "___ is the date until which quality is guaranteed.",
        "back": "Best before\n\nFecha de consumo preferente"
      },
      {
        "id": "v04_020",
        "front": "___ is the date after which the product is unsafe to eat.",
        "back": "Use by\n\nFecha de caducidad"
      },
      {
        "id": "v04_021",
        "front": "An ___ is a common round fruit, red or green.",
        "back": "apple\n\nManzana"
      },
      {
        "id": "v04_022",
        "front": "A ___ is a green or yellow fruit narrower at the top.",
        "back": "pear\n\nPera"
      },
      {
        "id": "v04_023",
        "front": "A ___ is a soft fruit with a fuzzy skin and a stone inside.",
        "back": "peach\n\nMelocotón"
      },
      {
        "id": "v04_024",
        "front": "A ___ is a small purple or red fruit with a stone.",
        "back": "plum\n\nCiruela"
      },
      {
        "id": "v04_025",
        "front": "A ___ is a small round red or black fruit.",
        "back": "cherry\n\nCereza"
      },
      {
        "id": "v04_026",
        "front": "A ___ is a small round fruit that grows in clusters.",
        "back": "grape\n\nUva"
      },
      {
        "id": "v04_027",
        "front": "A ___ is a large green fruit with red flesh.",
        "back": "watermelon\n\nSandía"
      },
      {
        "id": "v04_028",
        "front": "A ___ is a sweet fruit with orange or green flesh.",
        "back": "melon\n\nMelón"
      },
      {
        "id": "v04_029",
        "front": "A ___ is a red fruit with seeds on the outside.",
        "back": "strawberry\n\nFresa / fresón"
      },
      {
        "id": "v04_030",
        "front": "A ___ is a small red berry.",
        "back": "raspberry\n\nFrambuesa"
      },
      {
        "id": "v04_031",
        "front": "A ___ is a small blue-purple berry.",
        "back": "blueberry\n\nArándano azul"
      },
      {
        "id": "v04_032",
        "front": "A ___ is a dark purple berry.",
        "back": "blackberry\n\nMora"
      },
      {
        "id": "v04_033",
        "front": "A ___ is a soft sweet fruit with many small seeds inside.",
        "back": "fig\n\nHigo"
      },
      {
        "id": "v04_034",
        "front": "A ___ has many small red seeds inside.",
        "back": "pomegranate\n\nGranada"
      },
      {
        "id": "v04_035",
        "front": "A ___ is a tropical fruit with orange flesh.",
        "back": "mango\n\nMango"
      },
      {
        "id": "v04_036",
        "front": "A ___ has a spiky exterior and sweet yellow flesh.",
        "back": "pineapple\n\nPiña"
      },
      {
        "id": "v04_037",
        "front": "A ___ is a long yellow fruit.",
        "back": "banana\n\nPlátano"
      },
      {
        "id": "v04_038",
        "front": "A ___ is a yellow citrus fruit.",
        "back": "lemon\n\nLimón"
      },
      {
        "id": "v04_039",
        "front": "A ___ is a small green citrus fruit.",
        "back": "lime\n\nLima"
      },
      {
        "id": "v04_040",
        "front": "An ___ is a round orange citrus fruit.",
        "back": "orange\n\nNaranja"
      },
      {
        "id": "v04_041",
        "front": "A ___ is a large tart citrus fruit.",
        "back": "grapefruit\n\nPomelo"
      },
      {
        "id": "v04_042",
        "front": "A ___ has green flesh and black seeds.",
        "back": "kiwi\n\nKiwi"
      },
      {
        "id": "v04_043",
        "front": "A ___ is a pear-shaped fruit with creamy green flesh.",
        "back": "avocado\n\nAguacate"
      },
      {
        "id": "v04_044",
        "front": "A ___ has a hard shell and white flesh.",
        "back": "coconut\n\nCoco"
      },
      {
        "id": "v04_045",
        "front": "A ___ is a leafy green used in salads.",
        "back": "lettuce\n\nLechuga"
      },
      {
        "id": "v04_046",
        "front": "A ___ is a dark leafy green vegetable.",
        "back": "spinach\n\nEspinacas"
      },
      {
        "id": "v04_047",
        "front": "A ___ is a round leafy vegetable, green or purple.",
        "back": "cabbage\n\nCol / repollo"
      },
      {
        "id": "v04_048",
        "front": "A ___ is a dark leafy vegetable rich in nutrients.",
        "back": "kale\n\nCol rizada / kale"
      },
      {
        "id": "v04_049",
        "front": "A ___ is an orange root vegetable.",
        "back": "carrot\n\nZanahoria"
      },
      {
        "id": "v04_050",
        "front": "A ___ is a starchy underground vegetable.",
        "back": "potato\n\nPatata"
      },
      {
        "id": "v04_051",
        "front": "A ___ has orange flesh and a sweeter taste.",
        "back": "sweet potato\n\nBoniato / batata"
      },
      {
        "id": "v04_052",
        "front": "A ___ has layers and a strong smell when cut.",
        "back": "onion\n\nCebolla"
      },
      {
        "id": "v04_053",
        "front": "A ___ / ___ is a young thin onion eaten raw.",
        "back": "spring onion / scallion\n\nCebolleta"
      },
      {
        "id": "v04_054",
        "front": "A ___ looks like a large spring onion.",
        "back": "leek\n\nPuerro"
      },
      {
        "id": "v04_055",
        "front": "A ___ bulb is made of individual cloves.",
        "back": "garlic\n\nAjo"
      },
      {
        "id": "v04_056",
        "front": "A ___ is technically a fruit but used as a vegetable.",
        "back": "tomato\n\nTomate"
      },
      {
        "id": "v04_057",
        "front": "A ___ is a long green vegetable with mild flavour.",
        "back": "cucumber\n\nPepino"
      },
      {
        "id": "v04_058",
        "front": "A ___ (BrE) / ___ (AmE) is a green summer squash.",
        "back": "courgette / zucchini\n\nCalabacín"
      },
      {
        "id": "v04_059",
        "front": "A ___ (BrE) / ___ (AmE) is a purple vegetable.",
        "back": "aubergine / eggplant\n\nBerenjena"
      },
      {
        "id": "v04_060",
        "front": "A ___ / ___ comes in red, green or yellow.",
        "back": "pepper / bell pepper\n\nPimiento"
      },
      {
        "id": "v04_061",
        "front": "A ___ / ___ is a hot spicy pepper.",
        "back": "chilli / chili pepper\n\nChile / guindilla"
      },
      {
        "id": "v04_062",
        "front": "A ___ has a green tree-like head of florets.",
        "back": "broccoli\n\nBrócoli"
      },
      {
        "id": "v04_063",
        "front": "A ___ has a white compact head of florets.",
        "back": "cauliflower\n\nColiflor"
      },
      {
        "id": "v04_064",
        "front": "___ are small green cabbage-like vegetables.",
        "back": "Brussels sprouts\n\nColes de Bruselas"
      },
      {
        "id": "v04_065",
        "front": "A ___ is a small round green vegetable in a pod.",
        "back": "pea\n\nGuisante"
      },
      {
        "id": "v04_066",
        "front": "A ___ is a large flat bean.",
        "back": "broad bean\n\nHaba"
      },
      {
        "id": "v04_067",
        "front": "A ___ / ___ is a long thin pod eaten whole.",
        "back": "green bean / French bean\n\nJudía verde / vaina"
      },
      {
        "id": "v04_068",
        "front": "A ___ / ___ is yellow grain eaten on the cob or loose.",
        "back": "corn / sweetcorn\n\nMaíz / maíz dulce"
      },
      {
        "id": "v04_069",
        "front": "A ___ is a fungus used as a vegetable in cooking.",
        "back": "mushroom\n\nChampiñón / seta"
      },
      {
        "id": "v04_070",
        "front": "An ___ spear is a thin green shoot.",
        "back": "asparagus\n\nEspárrago"
      },
      {
        "id": "v04_071",
        "front": "An ___ has thick edible leaves and a heart.",
        "back": "artichoke\n\nAlcachofa"
      },
      {
        "id": "v04_072",
        "front": "A ___ is a small red root vegetable with a peppery taste.",
        "back": "radish\n\nRábano"
      },
      {
        "id": "v04_073",
        "front": "___ has long pale green crunchy stalks.",
        "back": "Celery\n\nApio"
      },
      {
        "id": "v04_074",
        "front": "___ is an orange winter squash.",
        "back": "Butternut squash\n\nCalabaza (tipo mantequilla)"
      },
      {
        "id": "v04_075",
        "front": "___ is a large orange squash used for soups and pies.",
        "back": "Pumpkin\n\nCalabaza de Halloween / calabaza grande"
      },
      {
        "id": "v04_076",
        "front": "___ is meat from cattle.",
        "back": "Beef\n\nTernera / buey"
      },
      {
        "id": "v04_077",
        "front": "___ is meat from pigs.",
        "back": "Pork\n\nCerdo"
      },
      {
        "id": "v04_078",
        "front": "___ is meat from young sheep.",
        "back": "Lamb\n\nCordero"
      },
      {
        "id": "v04_079",
        "front": "___ is meat from older sheep.",
        "back": "Mutton\n\nCarnero / oveja adulta"
      },
      {
        "id": "v04_080",
        "front": "___ is the most common poultry meat.",
        "back": "Chicken\n\nPollo"
      },
      {
        "id": "v04_081",
        "front": "___ is a large bird eaten especially at Christmas.",
        "back": "Turkey\n\nPavo"
      },
      {
        "id": "v04_082",
        "front": "___ is a fatty poultry with dark meat.",
        "back": "Duck\n\nPato"
      },
      {
        "id": "v04_083",
        "front": "___ is meat from a young calf.",
        "back": "Veal\n\nTernera (joven)"
      },
      {
        "id": "v04_084",
        "front": "___ is meat from deer.",
        "back": "Venison\n\nVenado / ciervo"
      },
      {
        "id": "v04_085",
        "front": "___ is small game meat.",
        "back": "Rabbit\n\nConejo"
      },
      {
        "id": "v04_086",
        "front": "A ___ is a boneless cut of meat or fish.",
        "back": "fillet\n\nFilete / lomo sin hueso"
      },
      {
        "id": "v04_087",
        "front": "A ___ is a thick slice of beef.",
        "back": "steak\n\nFilete de ternera / bistec"
      },
      {
        "id": "v04_088",
        "front": "A ___ is a cut including a rib bone — lamb or pork.",
        "back": "chop\n\nChuleta (con hueso)"
      },
      {
        "id": "v04_089",
        "front": "A ___ cut comes from the rib section of the animal.",
        "back": "rib\n\nCostilla"
      },
      {
        "id": "v04_090",
        "front": "___ / ___ (AmE) is meat finely chopped.",
        "back": "Mince / ground meat\n\nCarne picada"
      },
      {
        "id": "v04_091",
        "front": "A ___ is a large joint of meat cooked in the oven.",
        "back": "roast\n\nAsado (pieza grande)"
      },
      {
        "id": "v04_092",
        "front": "___ is cured sliced pork belly or back.",
        "back": "Bacon\n\nBeicon / tocino"
      },
      {
        "id": "v04_093",
        "front": "___ is cured or cooked pork leg.",
        "back": "Ham\n\nJamón (cocido o curado)"
      },
      {
        "id": "v04_094",
        "front": "___ is minced meat in a casing.",
        "back": "Sausage\n\nSalchicha / embutido"
      },
      {
        "id": "v04_095",
        "front": "___ is a dry cured sausage.",
        "back": "Salami\n\nSalami"
      },
      {
        "id": "v04_096",
        "front": "___ is a spiced cured sausage.",
        "back": "Chorizo\n\nChorizo"
      },
      {
        "id": "v04_097",
        "front": "___ is the liquid dairy product.",
        "back": "Milk\n\nLeche"
      },
      {
        "id": "v04_098",
        "front": "___ has full fat content.",
        "back": "Whole milk\n\nLeche entera"
      },
      {
        "id": "v04_099",
        "front": "___ has reduced fat.",
        "back": "Semi-skimmed milk\n\nLeche semidesnatada"
      },
      {
        "id": "v04_100",
        "front": "___ has very little fat.",
        "back": "Skimmed milk\n\nLeche desnatada"
      },
      {
        "id": "v04_101",
        "front": "___ is a plant-based milk alternative.",
        "back": "Oat milk\n\nLeche de avena"
      },
      {
        "id": "v04_102",
        "front": "___ is made from churned cream.",
        "back": "Butter\n\nMantequilla"
      },
      {
        "id": "v04_103",
        "front": "___ is a plant-based butter substitute.",
        "back": "Margarine\n\nMargarina"
      },
      {
        "id": "v04_104",
        "front": "___ is the fat-rich layer from milk.",
        "back": "Cream\n\nNata"
      },
      {
        "id": "v04_105",
        "front": "___ (BrE) has very high fat content.",
        "back": "Double cream\n\nNata para montar (alta en grasa)"
      },
      {
        "id": "v04_106",
        "front": "___ (BrE) has lower fat content and doesn't whip.",
        "back": "Single cream\n\nNata líquida (baja en grasa)"
      },
      {
        "id": "v04_107",
        "front": "___ has been fermented to give a tangy flavour.",
        "back": "Sour cream\n\nNata agria / crème fraîche"
      },
      {
        "id": "v04_108",
        "front": "___ is fermented milk with a thick texture.",
        "back": "Yoghurt\n\nYogur"
      },
      {
        "id": "v04_109",
        "front": "___ is made from pressed curds of milk.",
        "back": "Cheese\n\nQueso"
      },
      {
        "id": "v04_110",
        "front": "___ is a hard English cheese.",
        "back": "Cheddar\n\nQueso cheddar"
      },
      {
        "id": "v04_111",
        "front": "___ is a soft French cheese with a white rind.",
        "back": "Brie\n\nBrie"
      },
      {
        "id": "v04_112",
        "front": "___ is a soft Italian cheese used on pizza.",
        "back": "Mozzarella\n\nMozzarella"
      },
      {
        "id": "v04_113",
        "front": "___ is a hard Italian cheese grated over pasta.",
        "back": "Parmesan\n\nParmesano"
      },
      {
        "id": "v04_114",
        "front": "___ is a soft lumpy fresh cheese.",
        "back": "Cottage cheese\n\nQueso cottage"
      },
      {
        "id": "v04_115",
        "front": "___ is a soft spreadable cheese.",
        "back": "Cream cheese\n\nQueso crema"
      },
      {
        "id": "v04_116",
        "front": "An ___ is laid by hens and used widely in cooking.",
        "back": "egg\n\nHuevo"
      },
      {
        "id": "v04_117",
        "front": "A ___ comes from a hen that can roam outdoors.",
        "back": "free-range egg\n\nHuevo de gallina campera"
      },
      {
        "id": "v04_118",
        "front": "An ___ comes from organically fed hens.",
        "back": "organic egg\n\nHuevo ecológico"
      },
      {
        "id": "v04_119",
        "front": "___ is baked from flour, water and yeast.",
        "back": "Bread\n\nPan"
      },
      {
        "id": "v04_120",
        "front": "A ___ is a whole baked piece of bread.",
        "back": "loaf\n\nBarra / hogaza de pan"
      },
      {
        "id": "v04_121",
        "front": "A ___ is a long thin French loaf.",
        "back": "baguette\n\nBaguette / barra"
      },
      {
        "id": "v04_122",
        "front": "A ___ / ___ is a small individual portion of bread.",
        "back": "roll / bread roll\n\nPanecillo / bollo"
      },
      {
        "id": "v04_123",
        "front": "A ___ is a soft small round bread, often slightly sweet.",
        "back": "bun\n\nBollo suave"
      },
      {
        "id": "v04_124",
        "front": "A ___ is a flaky crescent-shaped pastry.",
        "back": "croissant\n\nCruasán"
      },
      {
        "id": "v04_125",
        "front": "A ___ is a small round sweet cake baked in a tin.",
        "back": "muffin\n\nMagdalena / muffin"
      },
      {
        "id": "v04_126",
        "front": "A ___ is a ring-shaped bread boiled before baking.",
        "back": "bagel\n\nBagel"
      },
      {
        "id": "v04_127",
        "front": "___ bread is made with fermented dough — slightly sour.",
        "back": "Sourdough\n\nPan de masa madre"
      },
      {
        "id": "v04_128",
        "front": "___ / ___ uses the whole grain.",
        "back": "Wholemeal bread / whole wheat bread\n\nPan integral"
      },
      {
        "id": "v04_129",
        "front": "___ uses refined white flour.",
        "back": "White bread\n\nPan blanco"
      },
      {
        "id": "v04_130",
        "front": "___ comes pre-cut.",
        "back": "Sliced bread\n\nPan de molde"
      },
      {
        "id": "v04_131",
        "front": "___ is a staple grain eaten across the world.",
        "back": "Rice\n\nArroz"
      },
      {
        "id": "v04_132",
        "front": "___ is made from wheat flour and water, shaped in various forms.",
        "back": "Pasta\n\nPasta"
      },
      {
        "id": "v04_133",
        "front": "___ is long thin rod-shaped pasta.",
        "back": "Spaghetti\n\nEspaguetis"
      },
      {
        "id": "v04_134",
        "front": "___ is short tube-shaped pasta.",
        "back": "Penne\n\nPenne / macarrones"
      },
      {
        "id": "v04_135",
        "front": "___ is spiral-shaped pasta.",
        "back": "Fusilli\n\nFusilli / espirales"
      },
      {
        "id": "v04_136",
        "front": "___ is flat ribbon-shaped pasta.",
        "back": "Tagliatelle\n\nTallarines"
      },
      {
        "id": "v04_137",
        "front": "___ uses wide flat sheets of pasta.",
        "back": "Lasagne\n\nLasaña"
      },
      {
        "id": "v04_138",
        "front": "___ is tiny granules of wheat, common in North African cuisine.",
        "back": "Couscous\n\nCuscús"
      },
      {
        "id": "v04_139",
        "front": "___ is a protein-rich seed used like a grain.",
        "back": "Quinoa\n\nQuinoa"
      },
      {
        "id": "v04_140",
        "front": "___ are small flat legumes — red, green or brown.",
        "back": "Lentils\n\nLentejas"
      },
      {
        "id": "v04_141",
        "front": "___ are round legumes used in hummus and stews.",
        "back": "Chickpeas\n\nGarbanzos"
      },
      {
        "id": "v04_142",
        "front": "___ are small dark legumes.",
        "back": "Black beans\n\nAlubias negras"
      },
      {
        "id": "v04_143",
        "front": "___ are large red curved beans.",
        "back": "Kidney beans\n\nJudías rojas / alubias"
      },
      {
        "id": "v04_144",
        "front": "___ is pressed from olives.",
        "back": "Olive oil\n\nAceite de oliva"
      },
      {
        "id": "v04_145",
        "front": "___ is extracted from sunflower seeds.",
        "back": "Sunflower oil\n\nAceite de girasol"
      },
      {
        "id": "v04_146",
        "front": "___ is a sour liquid used in dressings and pickling.",
        "back": "Vinegar\n\nVinagre"
      },
      {
        "id": "v04_147",
        "front": "___ is a thick sweet dark Italian vinegar.",
        "back": "Balsamic vinegar\n\nVinagre balsámico"
      },
      {
        "id": "v04_148",
        "front": "___ is a salty fermented Asian condiment.",
        "back": "Soy sauce\n\nSalsa de soja"
      },
      {
        "id": "v04_149",
        "front": "___ is a tomato-based sweet condiment.",
        "back": "Ketchup\n\nKetchup"
      },
      {
        "id": "v04_150",
        "front": "___ is made from mustard seeds — hot or mild.",
        "back": "Mustard\n\nMostaza"
      },
      {
        "id": "v04_151",
        "front": "___ is a thick creamy sauce made from eggs and oil.",
        "back": "Mayonnaise\n\nMayonesa"
      },
      {
        "id": "v04_152",
        "front": "___ is a sweet liquid produced by bees.",
        "back": "Honey\n\nMiel"
      },
      {
        "id": "v04_153",
        "front": "___ / ___ (AmE) is a fruit preserve spread on bread.",
        "back": "Jam / jelly\n\nMermelada"
      },
      {
        "id": "v04_154",
        "front": "___ is a spread made from ground peanuts.",
        "back": "Peanut butter\n\nMantequilla de cacahuete"
      },
      {
        "id": "v04_155",
        "front": "___ is used to sweeten food and drinks.",
        "back": "Sugar\n\nAzúcar"
      },
      {
        "id": "v04_156",
        "front": "___ has a slight molasses flavour.",
        "back": "Brown sugar\n\nAzúcar moreno"
      },
      {
        "id": "v04_157",
        "front": "___ / ___ (AmE) is very finely ground.",
        "back": "Icing sugar / powdered sugar\n\nAzúcar glas"
      },
      {
        "id": "v04_158",
        "front": "___ is finely ground grain used in baking.",
        "back": "Flour\n\nHarina"
      },
      {
        "id": "v04_159",
        "front": "___ (BrE) / ___ (AmE) has no raising agent.",
        "back": "Plain flour / all-purpose flour\n\nHarina normal / de todo uso"
      },
      {
        "id": "v04_160",
        "front": "___ (BrE) has baking powder already added.",
        "back": "Self-raising flour\n\nHarina con levadura"
      },
      {
        "id": "v04_161",
        "front": "___ makes cakes rise.",
        "back": "Baking powder\n\nLevadura química (en polvo)"
      },
      {
        "id": "v04_162",
        "front": "___ / ___ is used in baking as a leavener.",
        "back": "Bicarbonate of soda / baking soda\n\nBicarbonato de sodio"
      },
      {
        "id": "v04_163",
        "front": "___ is used to make bread rise.",
        "back": "Yeast\n\nLevadura (fresca o seca)"
      },
      {
        "id": "v04_164",
        "front": "___ enhances flavour in cooking.",
        "back": "Salt\n\nSal"
      },
      {
        "id": "v04_165",
        "front": "___ is a common spice — black, white or red.",
        "back": "Pepper\n\nPimienta"
      },
      {
        "id": "v04_166",
        "front": "___ is a red powder made from dried peppers.",
        "back": "Paprika\n\nPimentón / paprika"
      },
      {
        "id": "v04_167",
        "front": "___ is a warm earthy spice common in Middle Eastern cooking.",
        "back": "Cumin\n\nComino"
      },
      {
        "id": "v04_168",
        "front": "___ is a yellow spice used in curries.",
        "back": "Turmeric\n\nCúrcuma"
      },
      {
        "id": "v04_169",
        "front": "___ is a sweet warm spice.",
        "back": "Cinnamon\n\nCanela"
      },
      {
        "id": "v04_170",
        "front": "___ is a herb common in Italian and Mediterranean cooking.",
        "back": "Oregano\n\nOrégano"
      },
      {
        "id": "v04_171",
        "front": "___ is a fragrant herb used in Italian cooking.",
        "back": "Basil\n\nAlbahaca"
      },
      {
        "id": "v04_172",
        "front": "___ is a woody herb with needle-like leaves.",
        "back": "Rosemary\n\nRomero"
      },
      {
        "id": "v04_173",
        "front": "___ is a small-leafed herb with a subtle flavour.",
        "back": "Thyme\n\nTomillo"
      },
      {
        "id": "v04_174",
        "front": "___ are dried leaves used to flavour stews.",
        "back": "Bay leaves\n\nHojas de laurel"
      },
      {
        "id": "v04_175",
        "front": "___ is a bright green herb used as garnish.",
        "back": "Parsley\n\nPerejil"
      },
      {
        "id": "v04_176",
        "front": "___ (BrE) / ___ (AmE) is a fragrant herb used in Asian and Mexican food.",
        "back": "Coriander / cilantro\n\nCilantro"
      },
      {
        "id": "v04_177",
        "front": "___ is a spicy root used fresh or dried.",
        "back": "Ginger\n\nJengibre"
      }
    ]
  },
  {
    "section": 5,
    "title": "Cuerpo y Salud",
    "cards": [
      {
        "id": "v05_001",
        "front": "The ___ is the bony structure that protects the brain.",
        "back": "skull\n\nCráneo"
      },
      {
        "id": "v05_002",
        "front": "The ___ controls the entire body and thought.",
        "back": "brain\n\nCerebro"
      },
      {
        "id": "v05_003",
        "front": "The ___ is the flat area above the eyebrows.",
        "back": "forehead\n\nFrente"
      },
      {
        "id": "v05_004",
        "front": "The ___ is the flat area on the side of the head by the eye.",
        "back": "temple\n\nSien"
      },
      {
        "id": "v05_005",
        "front": "The ___ / ___ is the rounded part of the face below the eye.",
        "back": "cheekbone / cheek\n\nPómulo / mejilla"
      },
      {
        "id": "v05_006",
        "front": "The ___ is the lower bony part of the face.",
        "back": "jaw\n\nMandíbula"
      },
      {
        "id": "v05_007",
        "front": "The ___ is the front of the jaw at the bottom of the face.",
        "back": "chin\n\nBarbilla / mentón"
      },
      {
        "id": "v05_008",
        "front": "The ___ is the soft lower part of the ear.",
        "back": "earlobe\n\nLóbulo de la oreja"
      },
      {
        "id": "v05_009",
        "front": "The ___ is one of the two openings of the nose.",
        "back": "nostril\n\nFosa nasal"
      },
      {
        "id": "v05_010",
        "front": "The ___ is the edge of the mouth.",
        "back": "lip\n\nLabio"
      },
      {
        "id": "v05_011",
        "front": "The ___ is the soft tissue around the base of the teeth.",
        "back": "gum\n\nEncía"
      },
      {
        "id": "v05_012",
        "front": "The ___ is the muscle inside the mouth used for taste and speech.",
        "back": "tongue\n\nLengua"
      },
      {
        "id": "v05_013",
        "front": "The ___ is the passage from the mouth to the stomach.",
        "back": "throat\n\nGarganta"
      },
      {
        "id": "v05_014",
        "front": "The ___ connects the head to the torso.",
        "back": "neck\n\nCuello"
      },
      {
        "id": "v05_015",
        "front": "The ___ is the joint connecting the arm to the torso.",
        "back": "shoulder\n\nHombro"
      },
      {
        "id": "v05_016",
        "front": "The ___ is the hollow under the shoulder joint.",
        "back": "armpit\n\nAxila / sobaco"
      },
      {
        "id": "v05_017",
        "front": "The ___ is the joint in the middle of the arm.",
        "back": "elbow\n\nCodo"
      },
      {
        "id": "v05_018",
        "front": "The ___ is the lower part of the arm between elbow and wrist.",
        "back": "forearm\n\nAntebrazo"
      },
      {
        "id": "v05_019",
        "front": "The ___ is the joint between the hand and forearm.",
        "back": "wrist\n\nMuñeca"
      },
      {
        "id": "v05_020",
        "front": "The ___ is a joint of a finger.",
        "back": "knuckle\n\nNudillo"
      },
      {
        "id": "v05_021",
        "front": "The ___ is the short thick finger.",
        "back": "thumb\n\nPulgar"
      },
      {
        "id": "v05_022",
        "front": "The ___ / ___ is next to the thumb.",
        "back": "index finger / forefinger\n\nDedo índice"
      },
      {
        "id": "v05_023",
        "front": "The ___ is the longest finger.",
        "back": "middle finger\n\nDedo corazón / medio"
      },
      {
        "id": "v05_024",
        "front": "The ___ is traditionally where a wedding ring is worn.",
        "back": "ring finger\n\nDedo anular"
      },
      {
        "id": "v05_025",
        "front": "The ___ / ___ is the smallest finger.",
        "back": "little finger / pinky\n\nDedo meñique"
      },
      {
        "id": "v05_026",
        "front": "A ___ is the hard covering at the tip of a finger.",
        "back": "fingernail\n\nUña"
      },
      {
        "id": "v05_027",
        "front": "The ___ is the inner flat surface of the hand.",
        "back": "palm\n\nPalma de la mano"
      },
      {
        "id": "v05_028",
        "front": "The ___ is the front of the torso.",
        "back": "chest\n\nPecho"
      },
      {
        "id": "v05_029",
        "front": "The ___ is the chest area, or specifically the mammary gland.",
        "back": "breast\n\nPecho / seno"
      },
      {
        "id": "v05_030",
        "front": "The ___ is one of the curved bones protecting the chest.",
        "back": "rib\n\nCostilla"
      },
      {
        "id": "v05_031",
        "front": "The ___ / ___ is the column of vertebrae down the back.",
        "back": "spine / backbone\n\nColumna vertebral"
      },
      {
        "id": "v05_032",
        "front": "The ___ (pl. vertebrae) is a single bone of the spine.",
        "back": "vertebra\n\nVértebra"
      },
      {
        "id": "v05_033",
        "front": "The ___ / ___ region is the bottom part of the back.",
        "back": "lower back / lumbar\n\nZona lumbar"
      },
      {
        "id": "v05_034",
        "front": "The ___ / ___ is the flat bone at the back of the shoulder.",
        "back": "shoulder blade / scapula\n\nOmóplato"
      },
      {
        "id": "v05_035",
        "front": "The ___ is the narrow part of the torso.",
        "back": "waist\n\nCintura"
      },
      {
        "id": "v05_036",
        "front": "The ___ is the wide bony area below the waist.",
        "back": "hip\n\nCadera"
      },
      {
        "id": "v05_037",
        "front": "The ___ / ___ is the small scar at the centre of the abdomen.",
        "back": "belly button / navel\n\nOmbligo"
      },
      {
        "id": "v05_038",
        "front": "The ___ / ___ (informal) is the area between the chest and hips.",
        "back": "abdomen / stomach\n\nAbdomen / barriga"
      },
      {
        "id": "v05_039",
        "front": "The ___ is the area where the torso meets the top of the leg.",
        "back": "groin\n\nIngle"
      },
      {
        "id": "v05_040",
        "front": "The ___ is the upper part of the leg.",
        "back": "thigh\n\nMuslo"
      },
      {
        "id": "v05_041",
        "front": "The ___ is the joint in the middle of the leg.",
        "back": "knee\n\nRodilla"
      },
      {
        "id": "v05_042",
        "front": "The ___ / ___ is the small bone at the front of the knee.",
        "back": "kneecap / patella\n\nRótula"
      },
      {
        "id": "v05_043",
        "front": "The ___ is the front of the lower leg.",
        "back": "shin\n\nEspinilla / tibia"
      },
      {
        "id": "v05_044",
        "front": "The ___ is the muscular back of the lower leg.",
        "back": "calf\n\nGemelo / pantorrilla"
      },
      {
        "id": "v05_045",
        "front": "The ___ is the joint between the leg and foot.",
        "back": "ankle\n\nTobillo"
      },
      {
        "id": "v05_046",
        "front": "The ___ is the back bottom of the foot.",
        "back": "heel\n\nTalón"
      },
      {
        "id": "v05_047",
        "front": "The ___ is the bottom flat surface of the foot.",
        "back": "sole\n\nPlanta del pie"
      },
      {
        "id": "v05_048",
        "front": "The ___ of the foot is the curved inner area.",
        "back": "arch\n\nArco del pie"
      },
      {
        "id": "v05_049",
        "front": "The ___ is one of the five digits of the foot.",
        "back": "toe\n\nDedo del pie"
      },
      {
        "id": "v05_050",
        "front": "The ___ is the largest toe.",
        "back": "big toe\n\nDedo gordo del pie"
      },
      {
        "id": "v05_051",
        "front": "The ___ is the hard covering at the tip of a toe.",
        "back": "toenail\n\nUña del pie"
      },
      {
        "id": "v05_052",
        "front": "The ___ pumps blood around the body.",
        "back": "heart\n\nCorazón"
      },
      {
        "id": "v05_053",
        "front": "The ___ (pl. lungs) is the organ used for breathing.",
        "back": "lung\n\nPulmón"
      },
      {
        "id": "v05_054",
        "front": "The ___ filters blood and processes nutrients.",
        "back": "liver\n\nHígado"
      },
      {
        "id": "v05_055",
        "front": "The ___ (pl. kidneys) filters waste from the blood.",
        "back": "kidney\n\nRiñón"
      },
      {
        "id": "v05_056",
        "front": "The ___ digests food.",
        "back": "stomach\n\nEstómago"
      },
      {
        "id": "v05_057",
        "front": "The ___ absorbs nutrients — small and large.",
        "back": "intestine\n\nIntestino"
      },
      {
        "id": "v05_058",
        "front": "The ___ regulates blood sugar with insulin.",
        "back": "pancreas\n\nPáncreas"
      },
      {
        "id": "v05_059",
        "front": "The ___ stores urine.",
        "back": "bladder\n\nVejiga"
      },
      {
        "id": "v05_060",
        "front": "The ___ is a small organ with no known function.",
        "back": "appendix\n\nApéndice"
      },
      {
        "id": "v05_061",
        "front": "The ___ contracts to create movement.",
        "back": "muscle\n\nMúsculo"
      },
      {
        "id": "v05_062",
        "front": "A ___ connects muscle to bone.",
        "back": "tendon\n\nTendón"
      },
      {
        "id": "v05_063",
        "front": "A ___ connects bone to bone.",
        "back": "ligament\n\nLigamento"
      },
      {
        "id": "v05_064",
        "front": "A ___ is where two bones meet.",
        "back": "joint\n\nArticulación"
      },
      {
        "id": "v05_065",
        "front": "___ is flexible tissue covering joint surfaces.",
        "back": "Cartilage\n\nCartílago"
      },
      {
        "id": "v05_066",
        "front": "___ carries oxygen and nutrients around the body.",
        "back": "Blood\n\nSangre"
      },
      {
        "id": "v05_067",
        "front": "A ___ carries blood back to the heart.",
        "back": "vein\n\nVena"
      },
      {
        "id": "v05_068",
        "front": "An ___ carries oxygenated blood away from the heart.",
        "back": "artery\n\nArteria"
      },
      {
        "id": "v05_069",
        "front": "A ___ is a tiny blood vessel.",
        "back": "capillary\n\nCapilar"
      },
      {
        "id": "v05_070",
        "front": "A ___ is a pain in the head.",
        "back": "headache\n\nDolor de cabeza"
      },
      {
        "id": "v05_071",
        "front": "A ___ is a severe headache often with nausea and light sensitivity.",
        "back": "migraine\n\nMigraña"
      },
      {
        "id": "v05_072",
        "front": "A ___ is pain or irritation in the throat.",
        "back": "sore throat\n\nDolor de garganta"
      },
      {
        "id": "v05_073",
        "front": "A ___ / ___ is a body temperature above normal.",
        "back": "fever / temperature\n\nFiebre"
      },
      {
        "id": "v05_074",
        "front": "A ___ is a sudden expulsion of air from the lungs.",
        "back": "cough\n\nTos"
      },
      {
        "id": "v05_075",
        "front": "A ___ / ___ is a viral infection causing a runny nose.",
        "back": "cold / common cold\n\nResfriado"
      },
      {
        "id": "v05_076",
        "front": "The ___ / ___ is a more severe viral infection than a cold.",
        "back": "flu / influenza\n\nGripe"
      },
      {
        "id": "v05_077",
        "front": "A ___ produces excess mucus.",
        "back": "runny nose\n\nMoqueo / nariz que moquea"
      },
      {
        "id": "v05_078",
        "front": "A ___ / ___ is congested.",
        "back": "blocked nose / stuffy nose\n\nNariz taponada"
      },
      {
        "id": "v05_079",
        "front": "___ is a sudden expulsion of air through the nose.",
        "back": "Sneezing\n\nEstornudar / estornudo"
      },
      {
        "id": "v05_080",
        "front": "A ___ is red irritated skin.",
        "back": "rash\n\nSarpullido / erupción cutánea"
      },
      {
        "id": "v05_081",
        "front": "An ___ is an irritating sensation that makes you want to scratch.",
        "back": "itch\n\nPicor"
      },
      {
        "id": "v05_082",
        "front": "A ___ is a dark mark on skin caused by a blow.",
        "back": "bruise\n\nMoratón / cardenal"
      },
      {
        "id": "v05_083",
        "front": "A ___ is a bubble of fluid under the skin caused by friction.",
        "back": "blister\n\nAmpolla"
      },
      {
        "id": "v05_084",
        "front": "A ___ is a stretched or torn ligament.",
        "back": "sprain\n\nEsguince"
      },
      {
        "id": "v05_085",
        "front": "A ___ is a broken bone.",
        "back": "fracture\n\nFractura"
      },
      {
        "id": "v05_086",
        "front": "A ___ is damage to skin from heat.",
        "back": "burn\n\nQuemadura"
      },
      {
        "id": "v05_087",
        "front": "A ___ / ___ is a break in the skin.",
        "back": "cut / wound\n\nCorte / herida"
      },
      {
        "id": "v05_088",
        "front": "A ___ is the mark left after a wound heals.",
        "back": "scar\n\nCicatriz"
      },
      {
        "id": "v05_089",
        "front": "A ___ is bleeding from the inside of the nose.",
        "back": "nosebleed\n\nHemorragia nasal / sangrado de nariz"
      },
      {
        "id": "v05_090",
        "front": "___ is the feeling of wanting to vomit.",
        "back": "Nausea\n\nNáuseas"
      },
      {
        "id": "v05_091",
        "front": "___ / ___ is expelling stomach contents through the mouth.",
        "back": "Vomiting / being sick\n\nVomitar"
      },
      {
        "id": "v05_092",
        "front": "___ (BrE) / ___ (AmE) is loose watery stools.",
        "back": "Diarrhoea / diarrhea\n\nDiarrea"
      },
      {
        "id": "v05_093",
        "front": "___ is difficulty passing stools.",
        "back": "Constipation\n\nEstreñimiento"
      },
      {
        "id": "v05_094",
        "front": "___ / ___ is a burning sensation in the chest from stomach acid.",
        "back": "Heartburn / acid reflux\n\nAcidez / ardor de estómago"
      },
      {
        "id": "v05_095",
        "front": "___ is swelling of the abdomen due to gas.",
        "back": "Bloating\n\nHinchazón abdominal"
      },
      {
        "id": "v05_096",
        "front": "A ___ is a sudden involuntary muscle contraction.",
        "back": "cramp\n\nCalambre"
      },
      {
        "id": "v05_097",
        "front": "___ is a feeling of being unsteady or spinning.",
        "back": "Dizziness\n\nMareo"
      },
      {
        "id": "v05_098",
        "front": "___ is extreme tiredness.",
        "back": "Fatigue\n\nFatiga / cansancio extremo"
      },
      {
        "id": "v05_099",
        "front": "___ is difficulty sleeping.",
        "back": "Insomnia\n\nInsomnio"
      },
      {
        "id": "v05_100",
        "front": "An ___ is an immune reaction to a normally harmless substance.",
        "back": "allergy\n\nAlergia"
      },
      {
        "id": "v05_101",
        "front": "___ causes difficulty breathing due to narrow airways.",
        "back": "Asthma\n\nAsma"
      },
      {
        "id": "v05_102",
        "front": "___ affects how the body regulates blood sugar.",
        "back": "Diabetes\n\nDiabetes"
      },
      {
        "id": "v05_103",
        "front": "___ is high blood pressure.",
        "back": "Hypertension\n\nHipertensión"
      },
      {
        "id": "v05_104",
        "front": "A ___ / ___ is your general practitioner — first point of contact.",
        "back": "GP / doctor\n\nMédico de cabecera"
      },
      {
        "id": "v05_105",
        "front": "A ___ is a doctor focused on one area.",
        "back": "specialist\n\nEspecialista"
      },
      {
        "id": "v05_106",
        "front": "A ___ performs operations.",
        "back": "surgeon\n\nCirujano"
      },
      {
        "id": "v05_107",
        "front": "A ___ provides day-to-day medical care.",
        "back": "nurse\n\nEnfermero/a"
      },
      {
        "id": "v05_108",
        "front": "A ___ dispenses medication.",
        "back": "pharmacist\n\nFarmacéutico"
      },
      {
        "id": "v05_109",
        "front": "A ___ treats teeth and gums.",
        "back": "dentist\n\nDentista"
      },
      {
        "id": "v05_110",
        "front": "An ___ (BrE) / ___ (AmE) is the emergency department.",
        "back": "A&E / ER\n\nUrgencias"
      },
      {
        "id": "v05_111",
        "front": "A ___ is a written order for medication.",
        "back": "prescription\n\nReceta médica"
      },
      {
        "id": "v05_112",
        "front": "A ___ / ___ relieves pain.",
        "back": "painkiller / analgesic\n\nAnalgésico / pastilla para el dolor"
      },
      {
        "id": "v05_113",
        "front": "An ___ kills bacterial infections.",
        "back": "antibiotic\n\nAntibiótico"
      },
      {
        "id": "v05_114",
        "front": "An ___ reduces allergic reactions.",
        "back": "antihistamine\n\nAntihistamínico"
      },
      {
        "id": "v05_115",
        "front": "___ is a common anti-inflammatory painkiller.",
        "back": "Ibuprofen\n\nIbuprofeno"
      },
      {
        "id": "v05_116",
        "front": "___ (BrE) / ___ (AmE) relieves pain and fever.",
        "back": "Paracetamol / acetaminophen\n\nParacetamol"
      },
      {
        "id": "v05_117",
        "front": "A ___ / ___ is a solid dose of medication.",
        "back": "tablet / pill\n\nPastilla / comprimido"
      },
      {
        "id": "v05_118",
        "front": "A ___ is a gel-coated pill.",
        "back": "capsule\n\nCápsula"
      },
      {
        "id": "v05_119",
        "front": "___ are liquid medication administered in small amounts.",
        "back": "Drops\n\nGotas"
      },
      {
        "id": "v05_120",
        "front": "An ___ / ___ delivers medication through a needle.",
        "back": "injection / shot\n\nInyección / vacuna"
      },
      {
        "id": "v05_121",
        "front": "A ___ prevents specific diseases.",
        "back": "vaccine\n\nVacuna"
      },
      {
        "id": "v05_122",
        "front": "A ___ (BrE) / ___ (AmE) covers a small wound.",
        "back": "plaster / band-aid\n\nTirita"
      },
      {
        "id": "v05_123",
        "front": "___ is a soft material used to dress wounds.",
        "back": "Gauze\n\nGasa"
      },
      {
        "id": "v05_124",
        "front": "A ___ wraps around a wound or injury.",
        "back": "bandage\n\nVenda"
      },
      {
        "id": "v05_125",
        "front": "A ___ supports an injured arm.",
        "back": "sling\n\nCabestrillo"
      },
      {
        "id": "v05_126",
        "front": "A ___ / ___ immobilises a broken bone.",
        "back": "cast / plaster cast\n\nEscayola"
      },
      {
        "id": "v05_127",
        "front": "___ support walking when a leg is injured.",
        "back": "Crutches\n\nMuletas"
      },
      {
        "id": "v05_128",
        "front": "A ___ is used by people who cannot walk.",
        "back": "wheelchair\n\nSilla de ruedas"
      },
      {
        "id": "v05_129",
        "front": "A ___ analyses a sample of blood.",
        "back": "blood test\n\nAnálisis de sangre"
      },
      {
        "id": "v05_130",
        "front": "An ___ produces images of bones.",
        "back": "X-ray\n\nRadiografía"
      },
      {
        "id": "v05_131",
        "front": "An ___ scan uses magnetic fields to image soft tissue.",
        "back": "MRI\n\nResonancia magnética"
      },
      {
        "id": "v05_132",
        "front": "An ___ uses sound waves to image internal organs.",
        "back": "ultrasound\n\nEcografía / ultrasonido"
      },
      {
        "id": "v05_133",
        "front": "___ / ___ is a medical procedure performed by a surgeon.",
        "back": "Surgery / an operation\n\nCirugía / operación"
      },
      {
        "id": "v05_134",
        "front": "___ puts the patient to sleep during surgery.",
        "back": "General anaesthesia\n\nAnestesia general"
      },
      {
        "id": "v05_135",
        "front": "___ numbs only the area being treated.",
        "back": "Local anaesthesia\n\nAnestesia local"
      },
      {
        "id": "v05_136",
        "front": "A ___ / ___ closes a wound.",
        "back": "stitch / suture\n\nPunto (de sutura)"
      },
      {
        "id": "v05_137",
        "front": "___ is the process of returning to health after illness or surgery.",
        "back": "Recovery\n\nRecuperación"
      }
    ]
  },
  {
    "section": 6,
    "title": "Transporte y Ciudad",
    "cards": [
      {
        "id": "v06_001",
        "front": "The ___ is what the driver turns to control direction.",
        "back": "steering wheel\n\nVolante"
      },
      {
        "id": "v06_002",
        "front": "The ___ is the panel in front of the driver with instruments.",
        "back": "dashboard\n\nSalpicadero"
      },
      {
        "id": "v06_003",
        "front": "The ___ shows how fast the vehicle is going.",
        "back": "speedometer\n\nVelocímetro"
      },
      {
        "id": "v06_004",
        "front": "The ___ shows how much petrol is left.",
        "back": "fuel gauge\n\nIndicador de combustible"
      },
      {
        "id": "v06_005",
        "front": "The ___ (BrE) / ___ (AmE) is used to change gears.",
        "back": "gear stick / gear shift\n\nPalanca de cambios"
      },
      {
        "id": "v06_006",
        "front": "The ___ (BrE) / ___ (AmE) keeps the car stationary when parked.",
        "back": "handbrake / parking brake\n\nFreno de mano"
      },
      {
        "id": "v06_007",
        "front": "The ___ is the pedal that disengages the gears (manual cars).",
        "back": "clutch\n\nEmbrague (pedal)"
      },
      {
        "id": "v06_008",
        "front": "The ___ / ___ makes the car go faster.",
        "back": "accelerator / gas pedal\n\nAcelerador"
      },
      {
        "id": "v06_009",
        "front": "The ___ slows or stops the car.",
        "back": "brake pedal\n\nPedal de freno"
      },
      {
        "id": "v06_010",
        "front": "The ___ (BrE) / ___ (AmE) is the cover over the engine.",
        "back": "bonnet / hood\n\nCapó"
      },
      {
        "id": "v06_011",
        "front": "The ___ (BrE) / ___ (AmE) is the storage space at the rear.",
        "back": "boot / trunk\n\nMaletero"
      },
      {
        "id": "v06_012",
        "front": "The ___ (BrE) / ___ (AmE) is the front glass panel.",
        "back": "windscreen / windshield\n\nParabrisas"
      },
      {
        "id": "v06_013",
        "front": "The ___ clear rain from the windscreen.",
        "back": "windscreen wipers\n\nLimpiaparabrisas"
      },
      {
        "id": "v06_014",
        "front": "The ___ / ___ is the glass at the back.",
        "back": "rear window / back windscreen\n\nLuneta trasera"
      },
      {
        "id": "v06_015",
        "front": "A ___ / ___ is the mirror on each side of the car.",
        "back": "wing mirror / side mirror\n\nRetrovisor exterior"
      },
      {
        "id": "v06_016",
        "front": "The ___ is the mirror inside the car facing the driver.",
        "back": "rear-view mirror\n\nRetrovisor interior"
      },
      {
        "id": "v06_017",
        "front": "The ___ illuminate the road ahead.",
        "back": "headlights\n\nFaros delanteros"
      },
      {
        "id": "v06_018",
        "front": "The ___ are the red lights at the back.",
        "back": "tail lights\n\nPilotos traseros"
      },
      {
        "id": "v06_019",
        "front": "The ___ / ___ (AmE) show which direction you're turning.",
        "back": "indicators / turn signals\n\nIntermitentes"
      },
      {
        "id": "v06_020",
        "front": "The ___ flash all four indicators as a warning.",
        "back": "hazard lights\n\nLuces de emergencia / avisos"
      },
      {
        "id": "v06_021",
        "front": "The ___ is pressed to make a loud warning sound.",
        "back": "horn\n\nBocina / claxon"
      },
      {
        "id": "v06_022",
        "front": "The ___ (BrE) / ___ (AmE) is the rubber covering of the wheel.",
        "back": "tyre / tire\n\nNeumático / rueda"
      },
      {
        "id": "v06_023",
        "front": "A ___ has lost all its air pressure.",
        "back": "flat tyre\n\nPinchazo / rueda pinchada"
      },
      {
        "id": "v06_024",
        "front": "The ___ is a replacement tyre kept in the boot.",
        "back": "spare tyre\n\nRueda de repuesto"
      },
      {
        "id": "v06_025",
        "front": "The ___ releases gases from the engine.",
        "back": "exhaust pipe\n\nTubo de escape"
      },
      {
        "id": "v06_026",
        "front": "The ___ converts fuel to power.",
        "back": "engine\n\nMotor"
      },
      {
        "id": "v06_027",
        "front": "The ___ stores electrical power for the car.",
        "back": "battery\n\nBatería del coche"
      },
      {
        "id": "v06_028",
        "front": "The ___ cools the engine.",
        "back": "radiator\n\nRadiador del coche"
      },
      {
        "id": "v06_029",
        "front": "The ___ covers the petrol tank opening.",
        "back": "fuel cap\n\nTapón del depósito"
      },
      {
        "id": "v06_030",
        "front": "The ___ keeps the passenger safe in a crash.",
        "back": "seat belt\n\nCinturón de seguridad"
      },
      {
        "id": "v06_031",
        "front": "The ___ inflates on impact to protect passengers.",
        "back": "airbag\n\nAirbag"
      },
      {
        "id": "v06_032",
        "front": "A ___ (BrE) / ___ / ___ (AmE) is a high-speed multi-lane road.",
        "back": "motorway / highway / freeway\n\nAutopista"
      },
      {
        "id": "v06_033",
        "front": "A ___ is a road with two lanes in each direction separated by a barrier.",
        "back": "dual carriageway\n\nAutovía / carretera de doble calzada"
      },
      {
        "id": "v06_034",
        "front": "A ___ is a circular junction where traffic flows in one direction.",
        "back": "roundabout\n\nRotonda / glorieta"
      },
      {
        "id": "v06_035",
        "front": "A ___ / ___ is where two or more roads meet.",
        "back": "junction / intersection\n\nCruce / intersección"
      },
      {
        "id": "v06_036",
        "front": "A ___ is a junction where two roads cross at right angles.",
        "back": "crossroads\n\nCruce en cruz"
      },
      {
        "id": "v06_037",
        "front": "A ___ / ___ is a marked place for people to cross.",
        "back": "pedestrian crossing / zebra crossing\n\nPaso de cebra / paso de peatones"
      },
      {
        "id": "v06_038",
        "front": "Traffic ___ control the flow of traffic at junctions.",
        "back": "lights\n\nSemáforo"
      },
      {
        "id": "v06_039",
        "front": "A ___ / ___ slows traffic in residential areas.",
        "back": "speed bump / sleeping policeman\n\nBadén / resalto"
      },
      {
        "id": "v06_040",
        "front": "A ___ detects vehicles exceeding the speed limit.",
        "back": "speed camera\n\nRadar de velocidad"
      },
      {
        "id": "v06_041",
        "front": "A ___ is a single strip of road for traffic.",
        "back": "lane\n\nCarril"
      },
      {
        "id": "v06_042",
        "front": "The ___ is the emergency stopping lane on a motorway.",
        "back": "hard shoulder\n\nArcén de emergencia"
      },
      {
        "id": "v06_043",
        "front": "A ___ is a short road connecting to a motorway.",
        "back": "slip road\n\nCarril de incorporación / salida"
      },
      {
        "id": "v06_044",
        "front": "A ___ is a charge paid to use a road or bridge.",
        "back": "toll\n\nPeaje"
      },
      {
        "id": "v06_045",
        "front": "A ___ (BrE) / ___ (AmE) is an area for leaving vehicles.",
        "back": "car park / parking lot\n\nAparcamiento"
      },
      {
        "id": "v06_046",
        "front": "A ___ controls how long you can park.",
        "back": "parking meter\n\nParquímetro"
      },
      {
        "id": "v06_047",
        "front": "A ___ is a long queue of slow-moving vehicles.",
        "back": "traffic jam\n\nAtasco / embotellamiento"
      },
      {
        "id": "v06_048",
        "front": "___ are repairs being carried out on the road.",
        "back": "Road works\n\nObras en la carretera"
      },
      {
        "id": "v06_049",
        "front": "A ___ / ___ (AmE) is an alternative route around an obstacle.",
        "back": "diversion / detour\n\nDesvío"
      },
      {
        "id": "v06_050",
        "front": "A ___ sign means you cannot drive in that direction.",
        "back": "no entry\n\nDirección prohibida"
      },
      {
        "id": "v06_051",
        "front": "A ___ (BrE) / ___ (AmE) sign means let other traffic pass first.",
        "back": "give way / yield\n\nCeda el paso"
      },
      {
        "id": "v06_052",
        "front": "A ___ only allows traffic in one direction.",
        "back": "one-way street\n\nCalle de sentido único"
      },
      {
        "id": "v06_053",
        "front": "A ___ (BrE) / ___ (AmE) is the path beside a road for pedestrians.",
        "back": "pavement / sidewalk\n\nAcera"
      },
      {
        "id": "v06_054",
        "front": "A ___ (BrE) / ___ (AmE) is the edge of the pavement.",
        "back": "kerb / curb\n\nBordillo"
      },
      {
        "id": "v06_055",
        "front": "A ___ is where buses pick up and drop off passengers.",
        "back": "bus stop\n\nParada de autobús"
      },
      {
        "id": "v06_056",
        "front": "A ___ is reserved for buses only.",
        "back": "bus lane\n\nCarril bus"
      },
      {
        "id": "v06_057",
        "front": "A ___ / ___ shows when services run.",
        "back": "timetable / schedule\n\nHorario"
      },
      {
        "id": "v06_058",
        "front": "A ___ / ___ gives unlimited travel for a period.",
        "back": "season ticket / travel card\n\nAbono de transporte"
      },
      {
        "id": "v06_059",
        "front": "A ___ is where you board a train.",
        "back": "platform\n\nAndén"
      },
      {
        "id": "v06_060",
        "front": "A ___ is the rail line the train runs on.",
        "back": "track\n\nVía"
      },
      {
        "id": "v06_061",
        "front": "The ___ / ___ is where you buy tickets.",
        "back": "ticket office / ticket booth\n\nTaquilla"
      },
      {
        "id": "v06_062",
        "front": "A ___ (BrE) / ___ (AmE) goes both ways.",
        "back": "return ticket / round trip\n\nBillete de ida y vuelta"
      },
      {
        "id": "v06_063",
        "front": "A ___ (BrE) / ___ (AmE) goes one way only.",
        "back": "single ticket / one-way ticket\n\nBillete de ida"
      },
      {
        "id": "v06_064",
        "front": "The ___ shows when trains or flights leave.",
        "back": "departure board\n\nPanel de salidas"
      },
      {
        "id": "v06_065",
        "front": "The ___ shows when transport arrives.",
        "back": "arrivals board\n\nPanel de llegadas"
      },
      {
        "id": "v06_066",
        "front": "A ___ means the service is running late.",
        "back": "delay\n\nRetraso"
      },
      {
        "id": "v06_067",
        "front": "A ___ means the service will not run.",
        "back": "cancellation\n\nCancelación"
      },
      {
        "id": "v06_068",
        "front": "The ___ is the main building of an airport.",
        "back": "terminal\n\nTerminal (de aeropuerto)"
      },
      {
        "id": "v06_069",
        "front": "___ is the process of registering for your flight.",
        "back": "Check-in\n\nFacturación (aeropuerto)"
      },
      {
        "id": "v06_070",
        "front": "___ is where you leave checked luggage.",
        "back": "Baggage drop\n\nEntrega de equipaje facturado"
      },
      {
        "id": "v06_071",
        "front": "___ / ___ is the bag you take on the plane.",
        "back": "Hand luggage / carry-on\n\nEquipaje de mano"
      },
      {
        "id": "v06_072",
        "front": "___ goes in the hold of the plane.",
        "back": "Checked luggage\n\nEquipaje facturado"
      },
      {
        "id": "v06_073",
        "front": "The ___ is where you wait to board the plane.",
        "back": "boarding gate\n\nPuerta de embarque"
      },
      {
        "id": "v06_074",
        "front": "___ is the process of getting on the plane.",
        "back": "Boarding\n\nEmbarque"
      },
      {
        "id": "v06_075",
        "front": "A ___ / ___ is required to board.",
        "back": "boarding pass / boarding card\n\nTarjeta de embarque"
      },
      {
        "id": "v06_076",
        "front": "___ checks travellers' documents.",
        "back": "Passport control\n\nControl de pasaportes"
      },
      {
        "id": "v06_077",
        "front": "___ is where goods brought into the country are checked.",
        "back": "Customs\n\nAduana"
      },
      {
        "id": "v06_078",
        "front": "The ___ is the long strip where planes take off and land.",
        "back": "runway\n\nPista de aterrizaje / despegue"
      },
      {
        "id": "v06_079",
        "front": "The ___ is where the pilot sits.",
        "back": "cockpit\n\nCabina de mandos"
      },
      {
        "id": "v06_080",
        "front": "The ___ is the passenger area of the plane.",
        "back": "cabin\n\nCabina de pasajeros"
      },
      {
        "id": "v06_081",
        "front": "___ is unstable air causing a bumpy flight.",
        "back": "Turbulence\n\nTurbulencias"
      },
      {
        "id": "v06_082",
        "front": "The ___ stores hand luggage above the seat.",
        "back": "overhead locker\n\nCompartimento superior"
      },
      {
        "id": "v06_083",
        "front": "A ___ is kept under the seat for emergencies.",
        "back": "life jacket\n\nChaleco salvavidas"
      },
      {
        "id": "v06_084",
        "front": "The ___ is used if the plane needs to be evacuated.",
        "back": "emergency exit\n\nSalida de emergencia"
      },
      {
        "id": "v06_085",
        "front": "A ___ (BrE) / ___ (AmE) is the raised path for pedestrians.",
        "back": "pavement / sidewalk\n\nAcera"
      },
      {
        "id": "v06_086",
        "front": "A ___ is an open public space in a town.",
        "back": "square\n\nPlaza"
      },
      {
        "id": "v06_087",
        "front": "A ___ (BrE) is the main shopping street in a town.",
        "back": "high street\n\nCalle principal / calle mayor"
      },
      {
        "id": "v06_088",
        "front": "A ___ is a residential area outside the city centre.",
        "back": "suburb\n\nBarrio residencial en las afueras"
      },
      {
        "id": "v06_089",
        "front": "The ___ are the outer edges of a city.",
        "back": "outskirts\n\nAfueras"
      },
      {
        "id": "v06_090",
        "front": "The ___ / ___ (AmE) is the central commercial area.",
        "back": "city centre / downtown\n\nCentro de la ciudad"
      },
      {
        "id": "v06_091",
        "front": "A ___ / ___ is a local district within a city.",
        "back": "neighbourhood / area\n\nBarrio / zona"
      },
      {
        "id": "v06_092",
        "front": "A ___ is a section of buildings between streets.",
        "back": "block\n\nManzana (de edificios)"
      },
      {
        "id": "v06_093",
        "front": "A ___ (BrE) / ___ (AmE) is a self-contained home in a larger building.",
        "back": "flat / apartment\n\nPiso / apartamento"
      },
      {
        "id": "v06_094",
        "front": "A ___ stands alone, not connected to other houses.",
        "back": "detached house\n\nCasa independiente / chalet"
      },
      {
        "id": "v06_095",
        "front": "A ___ shares one wall with a neighbour.",
        "back": "semi-detached house\n\nCasa adosada (mitad)"
      },
      {
        "id": "v06_096",
        "front": "A ___ is in a row of identical houses sharing walls.",
        "back": "terraced house\n\nCasa adosada (en hilera)"
      },
      {
        "id": "v06_097",
        "front": "A ___ is a single-storey house.",
        "back": "bungalow\n\nBungalow / casa de una planta"
      },
      {
        "id": "v06_098",
        "front": "A ___ / ___ contains multiple flats.",
        "back": "block of flats / apartment building\n\nBloque de pisos"
      },
      {
        "id": "v06_099",
        "front": "A ___ is the local government building.",
        "back": "town hall\n\nAyuntamiento"
      },
      {
        "id": "v06_100",
        "front": "A ___ is a public building with books to borrow.",
        "back": "library\n\nBiblioteca"
      },
      {
        "id": "v06_101",
        "front": "A ___ handles mail and some financial services.",
        "back": "post office\n\nCorreos / oficina de correos"
      },
      {
        "id": "v06_102",
        "front": "A ___ is the local base for police officers.",
        "back": "police station\n\nComisaría"
      },
      {
        "id": "v06_103",
        "front": "A ___ is where firefighters and engines are based.",
        "back": "fire station\n\nParque de bomberos"
      },
      {
        "id": "v06_104",
        "front": "A ___ provides medical treatment.",
        "back": "hospital\n\nHospital"
      },
      {
        "id": "v06_105",
        "front": "A ___ / ___ is a local medical practice.",
        "back": "GP surgery / doctor's surgery\n\nConsultorio médico / centro de salud"
      },
      {
        "id": "v06_106",
        "front": "A ___ (BrE) / ___ is where medication is dispensed.",
        "back": "chemist's / pharmacy\n\nFarmacia"
      },
      {
        "id": "v06_107",
        "front": "A ___ is a large self-service food shop.",
        "back": "supermarket\n\nSupermercado"
      },
      {
        "id": "v06_108",
        "front": "A ___ / ___ is a small local shop.",
        "back": "corner shop / convenience store\n\nTienda de barrio / colmado"
      },
      {
        "id": "v06_109",
        "front": "A ___ sells newspapers, magazines and snacks.",
        "back": "newsagent's\n\nQuiosco / estanco"
      },
      {
        "id": "v06_110",
        "front": "A ___ (BrE) / ___ (AmE) sells fuel.",
        "back": "petrol station / gas station\n\nGasolinera"
      },
      {
        "id": "v06_111",
        "front": "A ___ cleans the exterior of vehicles.",
        "back": "car wash\n\nLavado de coches"
      },
      {
        "id": "v06_112",
        "front": "A ___ / ___ (BrE informal) is where rubbish is taken.",
        "back": "recycling centre / tip\n\nPunto limpio / vertedero"
      }
    ]
  },
  {
    "section": 7,
    "title": "Trabajo y Oficina",
    "cards": [
      {
        "id": "v07_001",
        "front": "A ___ (BrE) / ___ (AmE) lists your work experience and qualifications.",
        "back": "CV / résumé\n\nCurrículum vitae"
      },
      {
        "id": "v07_002",
        "front": "A ___ is a letter sent with a CV explaining why you want the job.",
        "back": "cover letter\n\nCarta de presentación"
      },
      {
        "id": "v07_003",
        "front": "A ___ is a meeting to assess if you are suitable for a role.",
        "back": "job interview\n\nEntrevista de trabajo"
      },
      {
        "id": "v07_004",
        "front": "A ___ is a formal proposal of employment.",
        "back": "job offer\n\nOferta de trabajo"
      },
      {
        "id": "v07_005",
        "front": "A ___ is a legally binding agreement between employer and employee.",
        "back": "contract\n\nContrato"
      },
      {
        "id": "v07_006",
        "front": "A ___ has no fixed end date.",
        "back": "permanent contract\n\nContrato indefinido"
      },
      {
        "id": "v07_007",
        "front": "A ___ ends on a specific date.",
        "back": "fixed-term contract\n\nContrato temporal"
      },
      {
        "id": "v07_008",
        "front": "A ___ job involves fewer hours than a full working week.",
        "back": "part-time\n\nA tiempo parcial"
      },
      {
        "id": "v07_009",
        "front": "A ___ job involves the standard number of working hours.",
        "back": "full-time\n\nA tiempo completo"
      },
      {
        "id": "v07_010",
        "front": "___ work means working independently for multiple clients.",
        "back": "Freelance\n\nTrabajo autónomo / freelance"
      },
      {
        "id": "v07_011",
        "front": "A ___ / ___ is a trial period at the start of a job.",
        "back": "probationary period / probation\n\nPeríodo de prueba"
      },
      {
        "id": "v07_012",
        "front": "A ___ is a fixed regular payment, usually monthly.",
        "back": "salary\n\nSalario / sueldo"
      },
      {
        "id": "v07_013",
        "front": "___ are payments calculated by hours worked.",
        "back": "Wages\n\nSalario por horas"
      },
      {
        "id": "v07_014",
        "front": "A ___ / ___ (AmE) is an increase in salary.",
        "back": "pay rise / raise\n\nAumento de sueldo"
      },
      {
        "id": "v07_015",
        "front": "A ___ is an extra payment on top of regular salary.",
        "back": "bonus\n\nPrima / bonus"
      },
      {
        "id": "v07_016",
        "front": "___ is a percentage of sales earned on top of base salary.",
        "back": "Commission\n\nComisión"
      },
      {
        "id": "v07_017",
        "front": "A ___ shows earnings and deductions for a pay period.",
        "back": "payslip\n\nNómina"
      },
      {
        "id": "v07_018",
        "front": "___ is money paid to the government from income.",
        "back": "Tax\n\nImpuesto / IRPF"
      },
      {
        "id": "v07_019",
        "front": "___ (BrE) is a contribution to state benefits and pension.",
        "back": "National Insurance\n\nSeguridad Social (cuota trabajador)"
      },
      {
        "id": "v07_020",
        "front": "A ___ is income received after retirement.",
        "back": "pension\n\nPensión / jubilación"
      },
      {
        "id": "v07_021",
        "front": "___ / ___ (BrE) is paid time off work.",
        "back": "Annual leave / holiday\n\nVacaciones pagadas"
      },
      {
        "id": "v07_022",
        "front": "___ is time off due to illness.",
        "back": "Sick leave\n\nBaja por enfermedad"
      },
      {
        "id": "v07_023",
        "front": "___ is time off for a new mother.",
        "back": "Maternity leave\n\nBaja por maternidad"
      },
      {
        "id": "v07_024",
        "front": "___ is time off for a new father.",
        "back": "Paternity leave\n\nBaja por paternidad"
      },
      {
        "id": "v07_025",
        "front": "___ is when a job no longer exists and the employee is let go.",
        "back": "Redundancy\n\nDespido por causas objetivas / ERE"
      },
      {
        "id": "v07_026",
        "front": "To be ___ means to lose your job because the role is cut.",
        "back": "made redundant\n\nSer despedido por reducción"
      },
      {
        "id": "v07_027",
        "front": "To be ___ / ___ means to lose your job due to performance or conduct.",
        "back": "fired / dismissed\n\nSer despedido (por causa disciplinaria)"
      },
      {
        "id": "v07_028",
        "front": "To ___ / ___ means to voluntarily leave a job.",
        "back": "resign / hand in your notice\n\nDimitir / renunciar"
      },
      {
        "id": "v07_029",
        "front": "___ is the time you must work before leaving after resigning.",
        "back": "Notice period\n\nPeríodo de preaviso"
      },
      {
        "id": "v07_030",
        "front": "___ / ___ means working outside the office.",
        "back": "Remote working / working from home\n\nTeletrabajo"
      },
      {
        "id": "v07_031",
        "front": "A ___ arrangement combines office and remote working.",
        "back": "hybrid\n\nTrabajo híbrido"
      },
      {
        "id": "v07_032",
        "front": "___ allows employees to choose their hours.",
        "back": "Flexible working\n\nHorario flexible"
      },
      {
        "id": "v07_033",
        "front": "A ___ is a gathering to discuss work matters.",
        "back": "meeting\n\nReunión"
      },
      {
        "id": "v07_034",
        "front": "A ___ is a telephone meeting with multiple participants.",
        "back": "conference call\n\nLlamada de conferencia"
      },
      {
        "id": "v07_035",
        "front": "A ___ / ___ uses cameras and internet.",
        "back": "video call / video conference\n\nVideollamada"
      },
      {
        "id": "v07_036",
        "front": "An ___ is a list of topics to cover in a meeting.",
        "back": "agenda\n\nOrden del día"
      },
      {
        "id": "v07_037",
        "front": "___ are a written record of what was discussed in a meeting.",
        "back": "Minutes\n\nActa de reunión"
      },
      {
        "id": "v07_038",
        "front": "A ___ is the date by which a task must be completed.",
        "back": "deadline\n\nPlazo / fecha límite"
      },
      {
        "id": "v07_039",
        "front": "A ___ is a goal to be achieved.",
        "back": "target\n\nObjetivo / meta"
      },
      {
        "id": "v07_040",
        "front": "A ___ (Key Performance Indicator) measures progress towards a target.",
        "back": "KPI\n\nIndicador clave de rendimiento"
      },
      {
        "id": "v07_041",
        "front": "A ___ is a formal talk to an audience, often with slides.",
        "back": "presentation\n\nPresentación"
      },
      {
        "id": "v07_042",
        "front": "A ___ is a formal written document on a specific subject.",
        "back": "report\n\nInforme"
      },
      {
        "id": "v07_043",
        "front": "A ___ is a document organised in rows and columns for data.",
        "back": "spreadsheet\n\nHoja de cálculo"
      },
      {
        "id": "v07_044",
        "front": "A ___ stores and organises large amounts of data.",
        "back": "database\n\nBase de datos"
      },
      {
        "id": "v07_045",
        "front": "A ___ stores paper documents in drawers.",
        "back": "filing cabinet\n\nArchivador de documentos"
      },
      {
        "id": "v07_046",
        "front": "A ___ organises documents — physical or digital.",
        "back": "folder\n\nCarpeta"
      },
      {
        "id": "v07_047",
        "front": "A ___ joins paper together with metal staples.",
        "back": "stapler\n\nGrapadora"
      },
      {
        "id": "v07_048",
        "front": "A ___ is the small metal clip a stapler inserts.",
        "back": "staple\n\nGrapa"
      },
      {
        "id": "v07_049",
        "front": "A ___ holds papers together without piercing them.",
        "back": "paper clip\n\nClip / sujetapapeles"
      },
      {
        "id": "v07_050",
        "front": "A ___ is a pen used to mark important text.",
        "back": "highlighter\n\nRotulador fluorescente / marcador"
      },
      {
        "id": "v07_051",
        "front": "A ___ / ___ is a small adhesive paper for reminders.",
        "back": "sticky note / Post-it\n\nNota adhesiva / Post-it"
      },
      {
        "id": "v07_052",
        "front": "A ___ produces paper copies of digital documents.",
        "back": "printer\n\nImpresora"
      },
      {
        "id": "v07_053",
        "front": "A ___ converts physical documents to digital files.",
        "back": "scanner\n\nEscáner"
      },
      {
        "id": "v07_054",
        "front": "A ___ makes copies of paper documents.",
        "back": "photocopier\n\nFotocopiadora"
      },
      {
        "id": "v07_055",
        "front": "A ___ destroys paper documents for security.",
        "back": "shredder\n\nDestructora de documentos"
      },
      {
        "id": "v07_056",
        "front": "A ___ is a reusable writing surface for meetings.",
        "back": "whiteboard\n\nPizarra blanca"
      },
      {
        "id": "v07_057",
        "front": "A ___ displays images on a screen or wall.",
        "back": "projector\n\nProyector"
      },
      {
        "id": "v07_058",
        "front": "A ___ is the handheld device for navigating a computer.",
        "back": "mouse\n\nRatón (de ordenador)"
      },
      {
        "id": "v07_059",
        "front": "A ___ is used to type input into a computer.",
        "back": "keyboard\n\nTeclado"
      },
      {
        "id": "v07_060",
        "front": "A ___ / ___ displays the computer output.",
        "back": "monitor / screen\n\nMonitor / pantalla"
      },
      {
        "id": "v07_061",
        "front": "A ___ is a portable personal computer.",
        "back": "laptop\n\nPortátil"
      },
      {
        "id": "v07_062",
        "front": "A ___ stays on the desk and is not portable.",
        "back": "desktop computer\n\nOrdenador de sobremesa"
      },
      {
        "id": "v07_063",
        "front": "A ___ connects a laptop to monitors and peripherals.",
        "back": "docking station\n\nEstación de acoplamiento"
      },
      {
        "id": "v07_064",
        "front": "A ___ is a headphone and microphone combination for calls.",
        "back": "headset\n\nAuriculares con micrófono"
      },
      {
        "id": "v07_065",
        "front": "A ___ captures video for video calls.",
        "back": "webcam\n\nCámara web / webcam"
      },
      {
        "id": "v07_066",
        "front": "A ___ supplies power to electronic devices.",
        "back": "charger\n\nCargador"
      },
      {
        "id": "v07_067",
        "front": "___ is wireless internet connection.",
        "back": "Wi-Fi\n\nWiFi"
      },
      {
        "id": "v07_068",
        "front": "A ___ (Virtual Private Network) encrypts internet traffic for security.",
        "back": "VPN\n\nVPN / red privada virtual"
      },
      {
        "id": "v07_069",
        "front": "The ___ (Chief Executive Officer) leads the company.",
        "back": "CEO\n\nDirector ejecutivo / CEO"
      },
      {
        "id": "v07_070",
        "front": "The ___ (Chief Financial Officer) manages company finances.",
        "back": "CFO\n\nDirector financiero / CFO"
      },
      {
        "id": "v07_071",
        "front": "The ___ handles employee matters.",
        "back": "HR department\n\nRecursos Humanos (RRHH)"
      },
      {
        "id": "v07_072",
        "front": "The ___ manages technology and systems.",
        "back": "IT department\n\nDepartamento de informática / IT"
      },
      {
        "id": "v07_073",
        "front": "The ___ promotes the company and its products.",
        "back": "marketing department\n\nDepartamento de marketing"
      },
      {
        "id": "v07_074",
        "front": "The ___ generates revenue through selling.",
        "back": "sales department\n\nDepartamento de ventas"
      },
      {
        "id": "v07_075",
        "front": "The ___ / ___ manages money.",
        "back": "accounts department / finance team\n\nContabilidad / finanzas"
      },
      {
        "id": "v07_076",
        "front": "A ___ directly supervises an employee.",
        "back": "line manager\n\nResponsable directo / jefe inmediato"
      },
      {
        "id": "v07_077",
        "front": "A ___ is a person you work with.",
        "back": "colleague\n\nCompañero de trabajo"
      },
      {
        "id": "v07_078",
        "front": "An ___ is someone doing work experience, often unpaid.",
        "back": "intern\n\nBecario"
      },
      {
        "id": "v07_079",
        "front": "A ___ / ___ works for a short period.",
        "back": "temp / temporary worker\n\nTrabajador temporal"
      },
      {
        "id": "v07_080",
        "front": "A ___ works independently on a specific project.",
        "back": "contractor\n\nContratista / autónomo"
      },
      {
        "id": "v07_081",
        "front": "To ___ a job means to submit your CV and cover letter.",
        "back": "apply for\n\nSolicitar un empleo"
      },
      {
        "id": "v07_082",
        "front": "To be ___ means to be selected for the next stage.",
        "back": "shortlisted\n\nQuedar en la lista corta (preseleccionado)"
      },
      {
        "id": "v07_083",
        "front": "To ___ means to meet and build professional relationships.",
        "back": "network\n\nHacer networking / hacer contactos"
      },
      {
        "id": "v07_084",
        "front": "To ___ means to assign tasks to others.",
        "back": "delegate\n\nDelegar"
      },
      {
        "id": "v07_085",
        "front": "To ___ means to pay an external company to do work.",
        "back": "outsource\n\nExternalizar / subcontratar"
      },
      {
        "id": "v07_086",
        "front": "To ___ means to work on several things at once.",
        "back": "multitask\n\nMultitarea"
      },
      {
        "id": "v07_087",
        "front": "To ___ means to finish work on time.",
        "back": "meet a deadline\n\nCumplir un plazo"
      },
      {
        "id": "v07_088",
        "front": "To ___ means to fail to finish on time.",
        "back": "miss a deadline\n\nNo cumplir un plazo"
      },
      {
        "id": "v07_089",
        "front": "To go ___ means to take time off due to illness.",
        "back": "on sick leave\n\nEstar de baja por enfermedad"
      },
      {
        "id": "v07_090",
        "front": "To ___ / ___ means to record your start and end time.",
        "back": "clock in / clock out\n\nFichar (entrada / salida)"
      },
      {
        "id": "v07_091",
        "front": "To ___ a project means to accept responsibility for it.",
        "back": "take on\n\nAsumir un proyecto"
      },
      {
        "id": "v07_092",
        "front": "To ___ work means to pass it to someone else.",
        "back": "hand over\n\nTraspasar / hacer el traspaso"
      },
      {
        "id": "v07_093",
        "front": "To ___ means to check on progress after an initial action.",
        "back": "follow up\n\nHacer seguimiento"
      },
      {
        "id": "v07_094",
        "front": "To ___ someone on an email means to send them a copy.",
        "back": "cc\n\nPoner en copia (CC)"
      },
      {
        "id": "v07_095",
        "front": "To ___ sends your email response to everyone in the thread.",
        "back": "reply all\n\nResponder a todos"
      },
      {
        "id": "v07_096",
        "front": "To ___ a file means to include it with an email.",
        "back": "attach\n\nAdjuntar un archivo"
      }
    ]
  },
  {
    "section": 8,
    "title": "Naturaleza y Tiempo",
    "cards": [
      {
        "id": "v08_001",
        "front": "___ is bright light from the sun.",
        "back": "Sunshine\n\nLuz solar / soleado"
      },
      {
        "id": "v08_002",
        "front": "A ___ is a visible mass of water droplets in the sky.",
        "back": "cloud\n\nNube"
      },
      {
        "id": "v08_003",
        "front": "A ___ cloud is a white puffy cloud with a flat base.",
        "back": "cumulus\n\nNube cúmulo (blanca esponjosa)"
      },
      {
        "id": "v08_004",
        "front": "A ___ cloud forms a grey layer covering the sky.",
        "back": "stratus\n\nNube estrato (capa gris)"
      },
      {
        "id": "v08_005",
        "front": "A ___ cloud is high and wispy.",
        "back": "cirrus\n\nNube cirro (alta y tenue)"
      },
      {
        "id": "v08_006",
        "front": "A ___ is a large storm cloud.",
        "back": "cumulonimbus\n\nNube cumulonimbo (tormenta)"
      },
      {
        "id": "v08_007",
        "front": "___ is water falling from clouds.",
        "back": "Rain\n\nLluvia"
      },
      {
        "id": "v08_008",
        "front": "___ is very light rain.",
        "back": "Drizzle\n\nLlovizna"
      },
      {
        "id": "v08_009",
        "front": "A ___ is a brief period of rain.",
        "back": "shower\n\nChubasco / aguacero corto"
      },
      {
        "id": "v08_010",
        "front": "A ___ is a heavy sudden rain.",
        "back": "downpour\n\nChaparrón / aguacero fuerte"
      },
      {
        "id": "v08_011",
        "front": "A ___ has thunder, lightning and heavy rain.",
        "back": "thunderstorm\n\nTormenta eléctrica"
      },
      {
        "id": "v08_012",
        "front": "___ is the loud sound that follows lightning.",
        "back": "Thunder\n\nTrueno"
      },
      {
        "id": "v08_013",
        "front": "___ is the electrical flash in a storm.",
        "back": "Lightning\n\nRelámpago / rayo"
      },
      {
        "id": "v08_014",
        "front": "___ is frozen rain that falls as small ice balls.",
        "back": "Hail\n\nGranizo"
      },
      {
        "id": "v08_015",
        "front": "___ is a mix of rain and snow.",
        "back": "Sleet\n\nAguanieve"
      },
      {
        "id": "v08_016",
        "front": "___ is frozen precipitation that falls as white flakes.",
        "back": "Snow\n\nNieve"
      },
      {
        "id": "v08_017",
        "front": "A ___ is a severe snowstorm with strong winds.",
        "back": "blizzard\n\nNevada intensa / ventisca"
      },
      {
        "id": "v08_018",
        "front": "___ forms when water freezes.",
        "back": "Ice\n\nHielo"
      },
      {
        "id": "v08_019",
        "front": "___ is a thin layer of ice on surfaces.",
        "back": "Frost\n\nEscarcha / helada"
      },
      {
        "id": "v08_020",
        "front": "___ is thick water vapour close to the ground.",
        "back": "Fog\n\nNiebla espesa"
      },
      {
        "id": "v08_021",
        "front": "___ is thin low-lying fog.",
        "back": "Mist\n\nBruma / neblina"
      },
      {
        "id": "v08_022",
        "front": "A ___ is a prolonged period of very hot weather.",
        "back": "heatwave\n\nOla de calor"
      },
      {
        "id": "v08_023",
        "front": "A ___ is a long period with no rain.",
        "back": "drought\n\nSequía"
      },
      {
        "id": "v08_024",
        "front": "A ___ happens when water overflows onto land.",
        "back": "flood\n\nInundación"
      },
      {
        "id": "v08_025",
        "front": "A ___ is a very strong wind.",
        "back": "gale\n\nVentarrón / viento fuerte"
      },
      {
        "id": "v08_026",
        "front": "A ___ is a gentle wind.",
        "back": "breeze\n\nBrisa"
      },
      {
        "id": "v08_027",
        "front": "A ___ is a tropical storm with very strong rotating winds.",
        "back": "hurricane\n\nHuracán"
      },
      {
        "id": "v08_028",
        "front": "A ___ / ___ is a violent rotating column of air.",
        "back": "tornado / twister\n\nTornado"
      },
      {
        "id": "v08_029",
        "front": "A ___ is a large ocean wave caused by an earthquake.",
        "back": "tsunami\n\nTsunami"
      },
      {
        "id": "v08_030",
        "front": "An ___ is a sudden shaking of the ground.",
        "back": "earthquake\n\nTerremoto"
      },
      {
        "id": "v08_031",
        "front": "A ___ releases lava and ash.",
        "back": "volcanic eruption\n\nErupción volcánica"
      },
      {
        "id": "v08_032",
        "front": "A ___ is an arc of colour caused by light through rain.",
        "back": "rainbow\n\nArco iris"
      },
      {
        "id": "v08_033",
        "front": "A ___ is when the sun goes below the horizon in the evening.",
        "back": "sunset\n\nPuesta de sol / atardecer"
      },
      {
        "id": "v08_034",
        "front": "A ___ is when the sun appears above the horizon in the morning.",
        "back": "sunrise\n\nAmanecer / salida del sol"
      },
      {
        "id": "v08_035",
        "front": "The ___ is the line where sky and earth appear to meet.",
        "back": "horizon\n\nHorizonte"
      },
      {
        "id": "v08_036",
        "front": "A ___ is a large natural elevation of earth.",
        "back": "mountain\n\nMontaña"
      },
      {
        "id": "v08_037",
        "front": "A ___ is a smaller raised area of land.",
        "back": "hill\n\nColina"
      },
      {
        "id": "v08_038",
        "front": "A ___ is low land between hills or mountains.",
        "back": "valley\n\nValle"
      },
      {
        "id": "v08_039",
        "front": "A ___ is a steep rock face at the edge of the sea or land.",
        "back": "cliff\n\nAcantilado"
      },
      {
        "id": "v08_040",
        "front": "A ___ is a hollow space underground or in a cliff.",
        "back": "cave\n\nCueva"
      },
      {
        "id": "v08_041",
        "front": "A ___ is water falling from a height.",
        "back": "waterfall\n\nCascada / catarata"
      },
      {
        "id": "v08_042",
        "front": "A ___ is a large natural flow of water.",
        "back": "river\n\nRío"
      },
      {
        "id": "v08_043",
        "front": "A ___ is a small narrow river.",
        "back": "stream\n\nArroyo / riachuelo"
      },
      {
        "id": "v08_044",
        "front": "A ___ is a large body of still water.",
        "back": "lake\n\nLago"
      },
      {
        "id": "v08_045",
        "front": "A ___ is a small body of still water.",
        "back": "pond\n\nEstanque / charca"
      },
      {
        "id": "v08_046",
        "front": "A ___ / ___ is wet low-lying land.",
        "back": "swamp / marsh\n\nPantano / marisma"
      },
      {
        "id": "v08_047",
        "front": "A ___ is a sandy or pebbly shore by the sea.",
        "back": "beach\n\nPlaya"
      },
      {
        "id": "v08_048",
        "front": "A ___ / ___ is the land along the edge of the sea.",
        "back": "coast / coastline\n\nCosta / litoral"
      },
      {
        "id": "v08_049",
        "front": "A ___ is a curved indentation of the coastline.",
        "back": "bay\n\nBahía"
      },
      {
        "id": "v08_050",
        "front": "A ___ is land surrounded by water on three sides.",
        "back": "peninsula\n\nPenínsula"
      },
      {
        "id": "v08_051",
        "front": "An ___ is land surrounded by water on all sides.",
        "back": "island\n\nIsla"
      },
      {
        "id": "v08_052",
        "front": "A ___ is a dry barren area with little vegetation.",
        "back": "desert\n\nDesierto"
      },
      {
        "id": "v08_053",
        "front": "A ___ is a large area densely covered with trees.",
        "back": "forest\n\nBosque / selva"
      },
      {
        "id": "v08_054",
        "front": "A ___ is a dense tropical forest.",
        "back": "jungle\n\nSelva tropical"
      },
      {
        "id": "v08_055",
        "front": "A ___ is an open grassy field.",
        "back": "meadow\n\nPrado / pradera"
      },
      {
        "id": "v08_056",
        "front": "A ___ is an area of open land.",
        "back": "field\n\nCampo"
      },
      {
        "id": "v08_057",
        "front": "A ___ is a large flat area of land.",
        "back": "plain\n\nLlanura"
      },
      {
        "id": "v08_058",
        "front": "A ___ is a slow-moving mass of ice.",
        "back": "glacier\n\nGlaciar"
      },
      {
        "id": "v08_059",
        "front": "An ___ is a large floating mass of ice in the sea.",
        "back": "iceberg\n\nIceberg"
      },
      {
        "id": "v08_060",
        "front": "A ___ is a mountain with an opening through which lava erupts.",
        "back": "volcano\n\nVolcán"
      },
      {
        "id": "v08_061",
        "front": "A ___ / ___ is a narrow deep valley with steep sides.",
        "back": "gorge / canyon\n\nGarganta / cañón"
      },
      {
        "id": "v08_062",
        "front": "A ___ is a hill of sand formed by wind.",
        "back": "dune\n\nDuna"
      },
      {
        "id": "v08_063",
        "front": "A ___ is a ridge of rock or coral below the water surface.",
        "back": "reef\n\nArrecife"
      },
      {
        "id": "v08_064",
        "front": "A ___ is a shallow body of water separated from the sea by a reef.",
        "back": "lagoon\n\nLaguna"
      },
      {
        "id": "v08_065",
        "front": "An ___ is a large deciduous tree producing acorns.",
        "back": "oak\n\nRoble"
      },
      {
        "id": "v08_066",
        "front": "A ___ is an evergreen tree with needle-like leaves and cones.",
        "back": "pine\n\nPino"
      },
      {
        "id": "v08_067",
        "front": "A ___ is a slender tree with white papery bark.",
        "back": "birch\n\nAbedul"
      },
      {
        "id": "v08_068",
        "front": "A ___ is a tree with long drooping branches near water.",
        "back": "willow\n\nSauce llorón"
      },
      {
        "id": "v08_069",
        "front": "A ___ grows in tropical areas and has a tall trunk with fan-like leaves.",
        "back": "palm tree\n\nPalmera"
      },
      {
        "id": "v08_070",
        "front": "A ___ is a leafy plant that grows in damp conditions.",
        "back": "fern\n\nHelecho"
      },
      {
        "id": "v08_071",
        "front": "___ is a soft green plant growing on damp surfaces.",
        "back": "Moss\n\nMusgo"
      },
      {
        "id": "v08_072",
        "front": "A ___ stores water in its thick stems and has spines.",
        "back": "cactus\n\nCactus"
      },
      {
        "id": "v08_073",
        "front": "___ is a climbing or trailing plant.",
        "back": "Ivy\n\nHiedra"
      },
      {
        "id": "v08_074",
        "front": "A ___ is a common weed with yellow flowers and white seed heads.",
        "back": "dandelion\n\nDiente de león"
      },
      {
        "id": "v08_075",
        "front": "A ___ is a small flower with white petals and a yellow centre.",
        "back": "daisy\n\nMargarita"
      },
      {
        "id": "v08_076",
        "front": "A ___ is a thorny flowering plant.",
        "back": "rose\n\nRosa"
      },
      {
        "id": "v08_077",
        "front": "A ___ is a tall plant with a large yellow flower head.",
        "back": "sunflower\n\nGirasol"
      },
      {
        "id": "v08_078",
        "front": "A ___ is a cup-shaped spring flower.",
        "back": "tulip\n\nTulipán"
      },
      {
        "id": "v08_079",
        "front": "___ is a purple aromatic plant.",
        "back": "Lavender\n\nLavanda"
      },
      {
        "id": "v08_080",
        "front": "A ___ is a small red mammal related to dogs.",
        "back": "fox\n\nZorro"
      },
      {
        "id": "v08_081",
        "front": "A ___ is a large mammal with antlers (males).",
        "back": "deer\n\nCiervo / venado"
      },
      {
        "id": "v08_082",
        "front": "A ___ is a nocturnal black-and-white burrowing animal.",
        "back": "badger\n\nTejón"
      },
      {
        "id": "v08_083",
        "front": "A ___ is a small mammal covered in spines.",
        "back": "hedgehog\n\nErizo"
      },
      {
        "id": "v08_084",
        "front": "A ___ is a small mammal with long ears.",
        "back": "rabbit\n\nConejo"
      },
      {
        "id": "v08_085",
        "front": "A ___ is a small mammal that climbs trees and stores nuts.",
        "back": "squirrel\n\nArdilla"
      },
      {
        "id": "v08_086",
        "front": "A ___ is the only mammal capable of sustained flight.",
        "back": "bat\n\nMurciélago"
      },
      {
        "id": "v08_087",
        "front": "A ___ is a semiaquatic mammal that swims and eats fish.",
        "back": "otter\n\nNutria"
      },
      {
        "id": "v08_088",
        "front": "A ___ is a marine mammal with flippers.",
        "back": "seal\n\nFoca"
      },
      {
        "id": "v08_089",
        "front": "A ___ is an intelligent marine mammal.",
        "back": "dolphin\n\nDelfín"
      },
      {
        "id": "v08_090",
        "front": "A ___ is the largest animal on Earth.",
        "back": "whale\n\nBallena"
      },
      {
        "id": "v08_091",
        "front": "A ___ is a large predatory fish.",
        "back": "shark\n\nTiburón"
      },
      {
        "id": "v08_092",
        "front": "An ___ is a large bird of prey.",
        "back": "eagle\n\nÁguila"
      },
      {
        "id": "v08_093",
        "front": "An ___ is a nocturnal bird of prey.",
        "back": "owl\n\nBúho / lechuza"
      },
      {
        "id": "v08_094",
        "front": "A ___ is a large black intelligent bird.",
        "back": "crow\n\nCuervo / corneja"
      },
      {
        "id": "v08_095",
        "front": "A ___ is a small common brown bird.",
        "back": "sparrow\n\nGorrión"
      },
      {
        "id": "v08_096",
        "front": "A ___ is a small bird with a red breast.",
        "back": "robin\n\nPetirrojo"
      },
      {
        "id": "v08_097",
        "front": "A ___ is a large white water bird with a long neck.",
        "back": "swan\n\nCisne"
      },
      {
        "id": "v08_098",
        "front": "A ___ is a tall wading bird that fishes in shallow water.",
        "back": "heron\n\nGarza"
      },
      {
        "id": "v08_099",
        "front": "A ___ is a colourful bird that can mimic speech.",
        "back": "parrot\n\nLoro / papagayo"
      },
      {
        "id": "v08_100",
        "front": "A ___ is a flightless bird that swims.",
        "back": "penguin\n\nPingüino"
      },
      {
        "id": "v08_101",
        "front": "A ___ is a legless reptile.",
        "back": "snake\n\nSerpiente"
      },
      {
        "id": "v08_102",
        "front": "A ___ is a small four-legged reptile.",
        "back": "lizard\n\nLagarto"
      },
      {
        "id": "v08_103",
        "front": "A ___ is an amphibian that can live on land and in water.",
        "back": "frog\n\nRana"
      },
      {
        "id": "v08_104",
        "front": "A ___ is a frog-like amphibian with drier skin.",
        "back": "toad\n\nSapo"
      },
      {
        "id": "v08_105",
        "front": "A ___ produces honey and pollinates flowers.",
        "back": "bee\n\nAbeja"
      },
      {
        "id": "v08_106",
        "front": "A ___ is similar to a bee but more aggressive.",
        "back": "wasp\n\nAvispa"
      },
      {
        "id": "v08_107",
        "front": "A ___ has large colourful wings.",
        "back": "butterfly\n\nMariposa"
      },
      {
        "id": "v08_108",
        "front": "A ___ is similar to a butterfly but usually nocturnal.",
        "back": "moth\n\nPolilla / mariposa nocturna"
      },
      {
        "id": "v08_109",
        "front": "A ___ has a long body and two pairs of wings.",
        "back": "dragonfly\n\nLibélula"
      },
      {
        "id": "v08_110",
        "front": "An ___ is a small social insect that lives in colonies.",
        "back": "ant\n\nHormiga"
      },
      {
        "id": "v08_111",
        "front": "A ___ has eight legs and spins webs.",
        "back": "spider\n\nAraña"
      },
      {
        "id": "v08_112",
        "front": "A ___ bites and can transmit disease.",
        "back": "mosquito\n\nMosquito"
      },
      {
        "id": "v08_113",
        "front": "A ___ is a common flying insect.",
        "back": "fly\n\nMosca"
      },
      {
        "id": "v08_114",
        "front": "A ___ is a flat brown insect often found in warm areas.",
        "back": "cockroach\n\nCucaracha"
      },
      {
        "id": "v08_115",
        "front": "A ___ is a soft legless creature that lives in soil.",
        "back": "worm\n\nGusano / lombriz"
      }
    ]
  },
  {
    "section": 9,
    "title": "Phrasal Verbs",
    "cards": [
      {
        "id": "v09_001",
        "front": "I need to ___ early — my alarm is set for 6.",
        "back": "wake up\n\nDespertar (dejar de dormir)"
      },
      {
        "id": "v09_002",
        "front": "I ___ at 7 but don't ___ until 7:30.",
        "back": "wake up / get up\n\nwake up ≠ get up (levantarse físicamente)"
      },
      {
        "id": "v09_003",
        "front": "She ___ smoking five years ago.",
        "back": "gave up\n\ngive up = dejar de hacer algo / rendirse"
      },
      {
        "id": "v09_004",
        "front": "Don't ___ — you're almost there.",
        "back": "give up\n\ngive up = rendirse"
      },
      {
        "id": "v09_005",
        "front": "They ___ a new company last year.",
        "back": "set up\n\nset up = establecer / fundar"
      },
      {
        "id": "v09_006",
        "front": "We need to ___ the meeting room before they arrive.",
        "back": "set up\n\nset up = preparar / montar"
      },
      {
        "id": "v09_007",
        "front": "She ___ a story to explain her absence.",
        "back": "made up\n\nmake up = inventar"
      },
      {
        "id": "v09_008",
        "front": "They ___ after the argument.",
        "back": "made up\n\nmake up = reconciliarse"
      },
      {
        "id": "v09_009",
        "front": "What time did you ___ getting home?",
        "back": "end up\n\nend up = acabar / terminar (resultado)"
      },
      {
        "id": "v09_010",
        "front": "We ___ staying the whole night.",
        "back": "ended up\n\nend up doing = acabar haciendo"
      },
      {
        "id": "v09_011",
        "front": "I can't keep ___ this task — I need to do it now.",
        "back": "putting off\n\nput off = posponer / aplazar"
      },
      {
        "id": "v09_012",
        "front": "The match was ___ due to rain.",
        "back": "called off\n\ncall off = cancelar"
      },
      {
        "id": "v09_013",
        "front": "Turn ___ the lights before you leave.",
        "back": "off\n\nturn off = apagar"
      },
      {
        "id": "v09_014",
        "front": "Turn ___ the TV — the game is starting.",
        "back": "on\n\nturn on = encender"
      },
      {
        "id": "v09_015",
        "front": "I need to ___ my shoes at the door.",
        "back": "take off\n\ntake off = quitarse (ropa)"
      },
      {
        "id": "v09_016",
        "front": "The plane ___ at 9am.",
        "back": "took off\n\ntake off = despegar (avión)"
      },
      {
        "id": "v09_017",
        "front": "She ___ without saying goodbye.",
        "back": "took off\n\ntake off = irse rápidamente"
      },
      {
        "id": "v09_018",
        "front": "He ___ his coat and left.",
        "back": "put on\n\nput on = ponerse (ropa)"
      },
      {
        "id": "v09_019",
        "front": "She ___ a lot of weight during lockdown.",
        "back": "put on\n\nput on = engordar / ganar peso"
      },
      {
        "id": "v09_020",
        "front": "Can you ___ the meeting until Thursday?",
        "back": "put off\n\nput off = posponer"
      },
      {
        "id": "v09_021",
        "front": "I need to ___ with my work.",
        "back": "get on\n\nget on with = continuar con / seguir adelante"
      },
      {
        "id": "v09_022",
        "front": "How are you ___?",
        "back": "getting on\n\nget on = ir / desenvolverse (¿cómo te va?)"
      },
      {
        "id": "v09_023",
        "front": "They don't ___ at all — they argue constantly.",
        "back": "get on\n\nget on = llevarse bien"
      },
      {
        "id": "v09_024",
        "front": "We ___ the bus just before it left.",
        "back": "got on\n\nget on = subir a (transporte)"
      },
      {
        "id": "v09_025",
        "front": "She ___ at the wrong stop.",
        "back": "got off\n\nget off = bajarse de (transporte)"
      },
      {
        "id": "v09_026",
        "front": "He ___ with a warning.",
        "back": "got off\n\nget off = librarse (de un castigo)"
      },
      {
        "id": "v09_027",
        "front": "I can't ___ how expensive it was.",
        "back": "get over\n\nget over = superar / no poder creer algo"
      },
      {
        "id": "v09_028",
        "front": "It took her months to ___ the breakup.",
        "back": "get over\n\nget over = recuperarse / superar"
      },
      {
        "id": "v09_029",
        "front": "___ it — it wasn't that bad.",
        "back": "Get over\n\nget over it = superarlo"
      },
      {
        "id": "v09_030",
        "front": "I need to ___ this report today.",
        "back": "get through\n\nget through = terminar / acabar con"
      },
      {
        "id": "v09_031",
        "front": "She ___ the interview without any problems.",
        "back": "got through\n\nget through = pasar / superar"
      },
      {
        "id": "v09_032",
        "front": "I couldn't ___ to him on the phone.",
        "back": "get through\n\nget through = conseguir contactar"
      },
      {
        "id": "v09_033",
        "front": "He ___ doing the dishes again.",
        "back": "got out of\n\nget out of = librarse de hacer algo"
      },
      {
        "id": "v09_034",
        "front": "Let's ___ here.",
        "back": "get out of\n\nget out of = salir de un lugar"
      },
      {
        "id": "v09_035",
        "front": "I need to ___ what happened.",
        "back": "figure out\n\nfigure out = averiguar / descubrir"
      },
      {
        "id": "v09_036",
        "front": "I can't ___ how to use this machine.",
        "back": "figure out\n\nfigure out = entender cómo funciona"
      },
      {
        "id": "v09_037",
        "front": "She ___ he'd been lying.",
        "back": "found out\n\nfind out = descubrir / enterarse"
      },
      {
        "id": "v09_038",
        "front": "How did you ___?",
        "back": "find out\n\nfind out = enterarse"
      },
      {
        "id": "v09_039",
        "front": "We need to ___ a full investigation.",
        "back": "carry out\n\ncarry out = llevar a cabo / realizar"
      },
      {
        "id": "v09_040",
        "front": "They ___ the repairs overnight.",
        "back": "carried out\n\ncarry out = ejecutar / realizar"
      },
      {
        "id": "v09_041",
        "front": "She ___ a mistake in the report.",
        "back": "pointed out\n\npoint out = señalar / indicar"
      },
      {
        "id": "v09_042",
        "front": "I need to ___ this mess.",
        "back": "sort out\n\nsort out = resolver / ordenar"
      },
      {
        "id": "v09_043",
        "front": "Can you ___ the invoices?",
        "back": "sort out\n\nsort out = organizar / gestionar"
      },
      {
        "id": "v09_044",
        "front": "Let's ___ the details later.",
        "back": "work out\n\nwork out = resolver / calcular"
      },
      {
        "id": "v09_045",
        "front": "I ___ three times a week.",
        "back": "work out\n\nwork out = hacer ejercicio"
      },
      {
        "id": "v09_046",
        "front": "It all ___ in the end.",
        "back": "worked out\n\nwork out = salir bien / funcionar"
      },
      {
        "id": "v09_047",
        "front": "Let's ___ the plan one more time.",
        "back": "go over\n\ngo over = repasar / revisar"
      },
      {
        "id": "v09_048",
        "front": "I need to ___ this contract.",
        "back": "look over\n\nlook over = revisar / echar un vistazo"
      },
      {
        "id": "v09_049",
        "front": "He ___ the complaint.",
        "back": "looked into\n\nlook into = investigar"
      },
      {
        "id": "v09_050",
        "front": "Can you ___ my cat while I'm away?",
        "back": "look after\n\nlook after = cuidar de"
      },
      {
        "id": "v09_051",
        "front": "I'm ___ the holiday.",
        "back": "looking forward to\n\nlook forward to = tener ganas de"
      },
      {
        "id": "v09_052",
        "front": "Can you ___ this word?",
        "back": "look up\n\nlook up = buscar (en diccionario / online)"
      },
      {
        "id": "v09_053",
        "front": "She ___ when she heard her name.",
        "back": "looked up\n\nlook up = levantar la vista"
      },
      {
        "id": "v09_054",
        "front": "Things are ___.",
        "back": "looking up\n\nlook up = mejorar (situación)"
      },
      {
        "id": "v09_055",
        "front": "I ___ an interesting article.",
        "back": "came across\n\ncome across = encontrar por casualidad"
      },
      {
        "id": "v09_056",
        "front": "She ___ as very confident.",
        "back": "comes across\n\ncome across = dar la impresión de"
      },
      {
        "id": "v09_057",
        "front": "He ___ a brilliant idea.",
        "back": "came up with\n\ncome up with = idear / proponer"
      },
      {
        "id": "v09_058",
        "front": "Something has ___ — I can't make it tonight.",
        "back": "come up\n\ncome up = surgir algo inesperado"
      },
      {
        "id": "v09_059",
        "front": "The topic ___ in conversation.",
        "back": "came up\n\ncome up = salir (un tema)"
      },
      {
        "id": "v09_060",
        "front": "I ___ an old friend yesterday.",
        "back": "ran into\n\nrun into = encontrarse por casualidad"
      },
      {
        "id": "v09_061",
        "front": "We're ___ time.",
        "back": "running out of\n\nrun out of = quedarse sin"
      },
      {
        "id": "v09_062",
        "front": "The car ___ petrol on the motorway.",
        "back": "ran out of\n\nrun out of = agotarse"
      },
      {
        "id": "v09_063",
        "front": "She ___ from home at 16.",
        "back": "ran away\n\nrun away = huir / escaparse"
      },
      {
        "id": "v09_064",
        "front": "Don't ___ from your problems.",
        "back": "run away\n\nrun away = evitar enfrentarse"
      },
      {
        "id": "v09_065",
        "front": "The thief ___.",
        "back": "got away\n\nget away = escaparse"
      },
      {
        "id": "v09_066",
        "front": "We ___ for the weekend.",
        "back": "got away\n\nget away = escaparse / irse de viaje"
      },
      {
        "id": "v09_067",
        "front": "She ___ in tears.",
        "back": "broke down\n\nbreak down = derrumbarse emocionalmente"
      },
      {
        "id": "v09_068",
        "front": "The car ___ on the way to the airport.",
        "back": "broke down\n\nbreak down = averiarse"
      },
      {
        "id": "v09_069",
        "front": "Talks between the two sides ___.",
        "back": "broke down\n\nbreak down = fracasar / colapsar"
      },
      {
        "id": "v09_070",
        "front": "He ___ with his girlfriend.",
        "back": "broke up\n\nbreak up = romper (pareja)"
      },
      {
        "id": "v09_071",
        "front": "The police ___ the fight.",
        "back": "broke up\n\nbreak up = separar / disolver"
      },
      {
        "id": "v09_072",
        "front": "I can't hear you — you're ___.",
        "back": "breaking up\n\nbreak up = cortarse (llamada)"
      },
      {
        "id": "v09_073",
        "front": "She ___ a car.",
        "back": "broke into\n\nbreak into = entrar a la fuerza"
      },
      {
        "id": "v09_074",
        "front": "They ___ a smile.",
        "back": "broke into\n\nbreak into = irrumpir en (expresión)"
      },
      {
        "id": "v09_075",
        "front": "The children ___ over a toy.",
        "back": "fell out\n\nfall out = pelearse / enfadarse"
      },
      {
        "id": "v09_076",
        "front": "She ___ him immediately.",
        "back": "fell for\n\nfall for = enamorarse de"
      },
      {
        "id": "v09_077",
        "front": "Don't ___ that trick.",
        "back": "fall for\n\nfall for = caer en (un engaño)"
      },
      {
        "id": "v09_078",
        "front": "The plan ___.",
        "back": "fell through\n\nfall through = fracasar / no llegar a realizarse"
      },
      {
        "id": "v09_079",
        "front": "He ___ with his payments.",
        "back": "fell behind\n\nfall behind = atrasarse / quedarse atrás"
      },
      {
        "id": "v09_080",
        "front": "I ___ Spanish during my year abroad.",
        "back": "picked up\n\npick up = aprender (de forma natural)"
      },
      {
        "id": "v09_081",
        "front": "Can you ___ some milk on the way home?",
        "back": "pick up\n\npick up = comprar / recoger de paso"
      },
      {
        "id": "v09_082",
        "front": "I'll ___ you ___ at 8.",
        "back": "pick / up\n\npick up = recoger a alguien"
      },
      {
        "id": "v09_083",
        "front": "She ___ where she left off.",
        "back": "picked up\n\npick up = retomar donde se dejó"
      },
      {
        "id": "v09_084",
        "front": "She ___ three children on her own.",
        "back": "brought up\n\nbring up = criar"
      },
      {
        "id": "v09_085",
        "front": "Don't ___ that topic — it's sensitive.",
        "back": "bring up\n\nbring up = sacar un tema"
      },
      {
        "id": "v09_086",
        "front": "He was ___ in Madrid.",
        "back": "brought up\n\nbe brought up = criarse"
      },
      {
        "id": "v09_087",
        "front": "She ___ a lot before leaving.",
        "back": "put up with\n\nput up with = aguantar / tolerar"
      },
      {
        "id": "v09_088",
        "front": "Can you ___ for the night?",
        "back": "put me up\n\nput up = alojar / dar alojamiento"
      },
      {
        "id": "v09_089",
        "front": "They ___ posters around the city.",
        "back": "put up\n\nput up = pegar / colocar"
      },
      {
        "id": "v09_090",
        "front": "Prices have ___ again.",
        "back": "gone up\n\ngo up = subir (precio/nivel)"
      },
      {
        "id": "v09_091",
        "front": "The building ___ quickly.",
        "back": "went up\n\ngo up = construirse"
      },
      {
        "id": "v09_092",
        "front": "She ___ a difficult period.",
        "back": "went through\n\ngo through = pasar por / experimentar"
      },
      {
        "id": "v09_093",
        "front": "Let's ___ the agenda point by point.",
        "back": "go through\n\ngo through = repasar / revisar en detalle"
      },
      {
        "id": "v09_094",
        "front": "The deal ___.",
        "back": "went through\n\ngo through = completarse / aprobarse"
      },
      {
        "id": "v09_095",
        "front": "He ___ the job offer.",
        "back": "turned down\n\nturn down = rechazar"
      },
      {
        "id": "v09_096",
        "front": "Can you ___ the music?",
        "back": "turn down\n\nturn down = bajar (volumen)"
      },
      {
        "id": "v09_097",
        "front": "She ___ an hour late.",
        "back": "turned up\n\nturn up = aparecer / llegar"
      },
      {
        "id": "v09_098",
        "front": "___ the volume — I can't hear.",
        "back": "Turn up\n\nturn up = subir (volumen)"
      },
      {
        "id": "v09_099",
        "front": "Something might ___.",
        "back": "turn up\n\nturn up = aparecer / surgir"
      },
      {
        "id": "v09_100",
        "front": "This ___ to be wrong.",
        "back": "turned out\n\nturn out = resultar ser"
      },
      {
        "id": "v09_101",
        "front": "It ___ that he knew her.",
        "back": "turned out\n\nturn out = resultar / salir a la luz"
      },
      {
        "id": "v09_102",
        "front": "They ___ in large numbers.",
        "back": "turned out\n\nturn out = acudir en masa"
      },
      {
        "id": "v09_103",
        "front": "I need to ___ more staff.",
        "back": "take on\n\ntake on = contratar / asumir"
      },
      {
        "id": "v09_104",
        "front": "She ___ too much work.",
        "back": "took on\n\ntake on = asumir demasiado"
      },
      {
        "id": "v09_105",
        "front": "He ___ the company.",
        "back": "took over\n\ntake over = hacerse cargo / tomar el control"
      },
      {
        "id": "v09_106",
        "front": "Can you ___ while I'm gone?",
        "back": "take over\n\ntake over = sustituir temporalmente"
      },
      {
        "id": "v09_107",
        "front": "I ___ what I said.",
        "back": "take back\n\ntake back = retirar lo dicho / devolver"
      },
      {
        "id": "v09_108",
        "front": "The shop wouldn't ___ the item.",
        "back": "take back\n\ntake back = aceptar una devolución"
      },
      {
        "id": "v09_109",
        "front": "I need to ___ on my emails.",
        "back": "catch up\n\ncatch up = ponerse al día"
      },
      {
        "id": "v09_110",
        "front": "Let's ___ soon.",
        "back": "catch up\n\ncatch up = ponerse al día (con alguien)"
      },
      {
        "id": "v09_111",
        "front": "She ___ the group after a slow start.",
        "back": "caught up with\n\ncatch up with = alcanzar a"
      },
      {
        "id": "v09_112",
        "front": "Don't ___ — say what you think.",
        "back": "hold back\n\nhold back = contenerse / reprimirse"
      },
      {
        "id": "v09_113",
        "front": "He was ___ by his lack of experience.",
        "back": "held back\n\nhold back = frenar / impedir"
      },
      {
        "id": "v09_114",
        "front": "The flood was ___ by the barrier.",
        "back": "held back\n\nhold back = contener"
      },
      {
        "id": "v09_115",
        "front": "___ — let me check.",
        "back": "Hold on\n\nhold on = esperar / aguanta"
      },
      {
        "id": "v09_116",
        "front": "She ___ to her bag tightly.",
        "back": "held on\n\nhold on = aferrarse a"
      },
      {
        "id": "v09_117",
        "front": "I'll ___ a second.",
        "back": "hang on\n\nhang on = esperar (informal)"
      },
      {
        "id": "v09_118",
        "front": "She ___ the phone.",
        "back": "hung up\n\nhang up = colgar el teléfono"
      },
      {
        "id": "v09_119",
        "front": "He ___ waiting for ages.",
        "back": "hung around\n\nhang around = quedarse sin hacer nada / esperar"
      },
      {
        "id": "v09_120",
        "front": "They ___ together every weekend.",
        "back": "hang out\n\nhang out = pasar el tiempo / quedar (informalmente)"
      },
      {
        "id": "v09_121",
        "front": "He ___ late as usual.",
        "back": "showed up\n\nshow up = aparecer / presentarse"
      },
      {
        "id": "v09_122",
        "front": "She ___ all the other candidates.",
        "back": "showed up\n\nshow up = hacer quedar mal / superar"
      },
      {
        "id": "v09_123",
        "front": "He ___ his new car.",
        "back": "showed off\n\nshow off = presumir / lucirse"
      },
      {
        "id": "v09_124",
        "front": "The painting ___.",
        "back": "stands out\n\nstand out = destacar"
      },
      {
        "id": "v09_125",
        "front": "She ___ from the rest.",
        "back": "stands out\n\nstand out = diferenciarse"
      },
      {
        "id": "v09_126",
        "front": "I won't ___ this behaviour.",
        "back": "stand for\n\nstand for = tolerar / aceptar"
      },
      {
        "id": "v09_127",
        "front": "What does NATO ___?",
        "back": "stand for\n\nstand for = significar / ser las siglas de"
      },
      {
        "id": "v09_128",
        "front": "I ___ my training before the race.",
        "back": "stepped up\n\nstep up = intensificar / aumentar"
      },
      {
        "id": "v09_129",
        "front": "She ___ when no one else would help.",
        "back": "stepped in\n\nstep in = intervenir / dar un paso al frente"
      },
      {
        "id": "v09_130",
        "front": "He ___ as chairman.",
        "back": "stepped down\n\nstep down = dimitir / renunciar al cargo"
      },
      {
        "id": "v09_131",
        "front": "The car ___ outside the house.",
        "back": "pulled up\n\npull up = detenerse (vehículo)"
      },
      {
        "id": "v09_132",
        "front": "He ___ an amazing performance.",
        "back": "pulled off\n\npull off = lograr algo difícil"
      },
      {
        "id": "v09_133",
        "front": "She ___ of the deal at the last minute.",
        "back": "pulled out\n\npull out = retirarse de"
      },
      {
        "id": "v09_134",
        "front": "They ___ to get the job done.",
        "back": "pulled together\n\npull together = unirse / cooperar"
      },
      {
        "id": "v09_135",
        "front": "He ___ after the operation.",
        "back": "pulled through\n\npull through = recuperarse / sobrevivir"
      },
      {
        "id": "v09_136",
        "front": "I need to ___ on sugar.",
        "back": "cut back\n\ncut back on = reducir el consumo de"
      },
      {
        "id": "v09_137",
        "front": "The company had to ___.",
        "back": "cut back\n\ncut back = recortar gastos"
      },
      {
        "id": "v09_138",
        "front": "She ___ the conversation.",
        "back": "cut off\n\ncut off = interrumpir / cortar"
      },
      {
        "id": "v09_139",
        "front": "We were ___ mid-call.",
        "back": "cut off\n\ncut off = cortarse (comunicación)"
      },
      {
        "id": "v09_140",
        "front": "He ___ the middle man.",
        "back": "cut out\n\ncut out = eliminar"
      },
      {
        "id": "v09_141",
        "front": "___! That's enough.",
        "back": "Cut it out\n\ncut it out = ¡para ya! / basta"
      },
      {
        "id": "v09_142",
        "front": "She ___ regardless.",
        "back": "carries on\n\ncarry on = continuar / seguir"
      },
      {
        "id": "v09_143",
        "front": "___ — don't let me interrupt.",
        "back": "Carry on\n\ncarry on = sigue / continúa"
      },
      {
        "id": "v09_144",
        "front": "He ___ the whole team.",
        "back": "let down\n\nlet down = decepcionar / fallar"
      },
      {
        "id": "v09_145",
        "front": "Don't ___.",
        "back": "let me down\n\nlet down = decepcionar"
      },
      {
        "id": "v09_146",
        "front": "She ___ a scream.",
        "back": "let out\n\nlet out = soltar / dejar escapar"
      },
      {
        "id": "v09_147",
        "front": "They're ___ a flat.",
        "back": "letting out\n\nlet out = alquilar (BrE)"
      },
      {
        "id": "v09_148",
        "front": "I ___ that we were moving.",
        "back": "let it slip\n\nlet slip = dejar escapar (información)"
      },
      {
        "id": "v09_149",
        "front": "She ___ three pairs of shoes.",
        "back": "wore out\n\nwear out = desgastar / gastar"
      },
      {
        "id": "v09_150",
        "front": "I'm completely ___.",
        "back": "worn out\n\nworn out = agotado / rendido"
      },
      {
        "id": "v09_151",
        "front": "Stop ___ with your questions.",
        "back": "wearing me out\n\nwear out = agotar a alguien"
      },
      {
        "id": "v09_152",
        "front": "He ___ without saying goodbye.",
        "back": "went off\n\ngo off = irse / marcharse sin avisar"
      },
      {
        "id": "v09_153",
        "front": "The alarm ___ at 6am.",
        "back": "went off\n\ngo off = sonar (alarma) / dispararse"
      },
      {
        "id": "v09_154",
        "front": "The milk has ___.",
        "back": "gone off\n\ngo off = estropearse / caducarse"
      },
      {
        "id": "v09_155",
        "front": "I've ___ coffee lately.",
        "back": "gone off\n\ngo off = perder el gusto por algo"
      },
      {
        "id": "v09_156",
        "front": "He ___ making the same mistake.",
        "back": "keeps on\n\nkeep on = seguir haciendo (insistentemente)"
      },
      {
        "id": "v09_157",
        "front": "___ the good work.",
        "back": "Keep up\n\nkeep up = mantener / continuar"
      },
      {
        "id": "v09_158",
        "front": "I can't ___ with the pace.",
        "back": "keep up\n\nkeep up with = seguir el ritmo de"
      },
      {
        "id": "v09_159",
        "front": "She ___ her Spanish after moving back.",
        "back": "kept up\n\nkeep up = mantener (habilidad)"
      }
    ]
  },
  {
    "section": 10,
    "title": "Emociones y Relaciones",
    "cards": [
      {
        "id": "v10_001",
        "front": "___ is a feeling of great happiness.",
        "back": "Joy\n\nAlegría / júbilo"
      },
      {
        "id": "v10_002",
        "front": "___ is a general state of wellbeing and contentment.",
        "back": "Happiness\n\nFelicidad"
      },
      {
        "id": "v10_003",
        "front": "___ is a feeling of enthusiasm and eagerness.",
        "back": "Excitement\n\nEmoción / entusiasmo"
      },
      {
        "id": "v10_004",
        "front": "___ is intense interest and eagerness.",
        "back": "Enthusiasm\n\nEntusiasmo"
      },
      {
        "id": "v10_005",
        "front": "___ is satisfaction from your own or someone else's achievement.",
        "back": "Pride\n\nOrgullo"
      },
      {
        "id": "v10_006",
        "front": "___ is the feeling of being thankful.",
        "back": "Gratitude\n\nGratitud / agradecimiento"
      },
      {
        "id": "v10_007",
        "front": "___ is the feeling when a worry or pain ends.",
        "back": "Relief\n\nAlivio"
      },
      {
        "id": "v10_008",
        "front": "___ is a desire for something good to happen.",
        "back": "Hope\n\nEsperanza"
      },
      {
        "id": "v10_009",
        "front": "___ is a deep feeling of affection.",
        "back": "Love\n\nAmor"
      },
      {
        "id": "v10_010",
        "front": "___ is a gentle feeling of fondness.",
        "back": "Affection\n\nCariño / afecto"
      },
      {
        "id": "v10_011",
        "front": "___ is gentle kindness towards someone.",
        "back": "Tenderness\n\nTernura"
      },
      {
        "id": "v10_012",
        "front": "___ is a strong desire for something or someone absent.",
        "back": "Longing\n\nAñoranza / anhelo"
      },
      {
        "id": "v10_013",
        "front": "___ is a sentimental feeling about the past.",
        "back": "Nostalgia\n\nNostalgia"
      },
      {
        "id": "v10_014",
        "front": "___ is a quiet sense of satisfaction.",
        "back": "Contentment\n\nSatisfacción / conformidad"
      },
      {
        "id": "v10_015",
        "front": "___ is the feeling caused by something unexpected.",
        "back": "Surprise\n\nSorpresa"
      },
      {
        "id": "v10_016",
        "front": "___ is a feeling of wonder mixed with respect.",
        "back": "Awe\n\nAsombro / admiración reverencial"
      },
      {
        "id": "v10_017",
        "front": "___ is a desire to know or learn.",
        "back": "Curiosity\n\nCuriosidad"
      },
      {
        "id": "v10_018",
        "front": "___ is the feeling of having nothing interesting to do.",
        "back": "Boredom\n\nAburrimiento"
      },
      {
        "id": "v10_019",
        "front": "___ is a feeling of unhappiness.",
        "back": "Sadness\n\nTristeza"
      },
      {
        "id": "v10_020",
        "front": "___ is deep sorrow, especially after a loss.",
        "back": "Grief\n\nDuelo / pena profunda"
      },
      {
        "id": "v10_021",
        "front": "___ is a complete loss of hope.",
        "back": "Despair\n\nDesesperación"
      },
      {
        "id": "v10_022",
        "front": "___ is the feeling of being alone and isolated.",
        "back": "Loneliness\n\nSoledad"
      },
      {
        "id": "v10_023",
        "front": "___ is a deep persistent sadness.",
        "back": "Melancholy\n\nMelancolía"
      },
      {
        "id": "v10_024",
        "front": "___ is sorrow for something done or not done.",
        "back": "Regret\n\nArrepentimiento"
      },
      {
        "id": "v10_025",
        "front": "___ is the feeling of having done something wrong.",
        "back": "Guilt\n\nCulpa / culpabilidad"
      },
      {
        "id": "v10_026",
        "front": "___ is a painful feeling of humiliation or distress.",
        "back": "Shame\n\nVergüenza"
      },
      {
        "id": "v10_027",
        "front": "___ is discomfort caused by a social mistake.",
        "back": "Embarrassment\n\nVergüenza ajena / bochorno"
      },
      {
        "id": "v10_028",
        "front": "___ is a strong feeling of displeasure.",
        "back": "Anger\n\nEnfado / ira"
      },
      {
        "id": "v10_029",
        "front": "___ is extreme uncontrolled anger.",
        "back": "Rage\n\nRabia / furia"
      },
      {
        "id": "v10_030",
        "front": "___ is the feeling when something blocks your goals.",
        "back": "Frustration\n\nFrustración"
      },
      {
        "id": "v10_031",
        "front": "___ is mild annoyance.",
        "back": "Irritation\n\nIrritación / fastidio"
      },
      {
        "id": "v10_032",
        "front": "___ is bitterness from feeling unfairly treated.",
        "back": "Resentment\n\nResentimiento"
      },
      {
        "id": "v10_033",
        "front": "___ is unhappiness caused by someone else having what you want.",
        "back": "Jealousy\n\nCelos"
      },
      {
        "id": "v10_034",
        "front": "___ is the desire to have what someone else has.",
        "back": "Envy\n\nEnvidia"
      },
      {
        "id": "v10_035",
        "front": "___ is an unpleasant feeling caused by danger or threat.",
        "back": "Fear\n\nMiedo"
      },
      {
        "id": "v10_036",
        "front": "___ is worry about future events.",
        "back": "Anxiety\n\nAnsiedad"
      },
      {
        "id": "v10_037",
        "front": "___ is sudden overwhelming fear.",
        "back": "Panic\n\nPánico"
      },
      {
        "id": "v10_038",
        "front": "___ is great fear about something in the future.",
        "back": "Dread\n\nTemor / pavor"
      },
      {
        "id": "v10_039",
        "front": "___ is a strong feeling of revulsion.",
        "back": "Disgust\n\nAsco / repugnancia"
      },
      {
        "id": "v10_040",
        "front": "___ is a feeling that someone is beneath you.",
        "back": "Contempt\n\nDesprecio"
      },
      {
        "id": "v10_041",
        "front": "___ is an intense dislike.",
        "back": "Hatred\n\nOdio"
      },
      {
        "id": "v10_042",
        "front": "___ is a lack of interest or concern.",
        "back": "Indifference\n\nIndiferencia"
      },
      {
        "id": "v10_043",
        "front": "___ is the state of not understanding.",
        "back": "Confusion\n\nConfusión"
      },
      {
        "id": "v10_044",
        "front": "___ is the feeling of having too much to cope with.",
        "back": "Overwhelm\n\nAgobio / saturación"
      },
      {
        "id": "v10_045",
        "front": "___ is mental or emotional strain.",
        "back": "Stress\n\nEstrés"
      },
      {
        "id": "v10_046",
        "front": "___ is extreme tiredness.",
        "back": "Exhaustion\n\nAgotamiento"
      },
      {
        "id": "v10_047",
        "front": "___ is a lack of interest, enthusiasm or concern.",
        "back": "Apathy\n\nApatía"
      },
      {
        "id": "v10_048",
        "front": "To feel ___ is to feel very happy and proud.",
        "back": "elated\n\nEufórico / exaltado"
      },
      {
        "id": "v10_049",
        "front": "To feel ___ is to feel deeply shocked and upset.",
        "back": "devastated\n\nDestrozado / desolado"
      },
      {
        "id": "v10_050",
        "front": "To feel ___ is to feel buried under too much at once.",
        "back": "overwhelmed\n\nAgobiado / abrumado"
      },
      {
        "id": "v10_051",
        "front": "To feel ___ is to feel nothing — emotionally blank.",
        "back": "numb\n\nEntumecido / sin sentir nada"
      },
      {
        "id": "v10_052",
        "front": "To feel ___ is to be pulled in two directions emotionally.",
        "back": "torn\n\nDividido / con sentimientos encontrados"
      },
      {
        "id": "v10_053",
        "front": "To feel ___ is to feel relaxed and comfortable.",
        "back": "at ease\n\nA gusto / tranquilo"
      },
      {
        "id": "v10_054",
        "front": "To feel ___ is to feel nervous and tense.",
        "back": "on edge\n\nNervioso / en tensión"
      },
      {
        "id": "v10_055",
        "front": "To feel ___ is to feel mildly sad or depressed.",
        "back": "down\n\nBajón / desanimado"
      },
      {
        "id": "v10_056",
        "front": "To feel ___ is informal for feeling sad.",
        "back": "blue\n\nTriste / melancólico (informal)"
      },
      {
        "id": "v10_057",
        "front": "To feel ___ is to miss your home or family.",
        "back": "homesick\n\nEchar de menos el hogar / morriña"
      },
      {
        "id": "v10_058",
        "front": "To feel ___ is to feel excluded from a group.",
        "back": "left out\n\nSentirse excluido"
      },
      {
        "id": "v10_059",
        "front": "To feel ___ is to feel disappointed by someone.",
        "back": "let down\n\nSentirse decepcionado"
      },
      {
        "id": "v10_060",
        "front": "To feel ___ is to feel exploited by someone.",
        "back": "used\n\nSentirse utilizado"
      },
      {
        "id": "v10_061",
        "front": "To feel ___ is to feel that your efforts are recognised.",
        "back": "appreciated\n\nSentirse valorado"
      },
      {
        "id": "v10_062",
        "front": "To feel ___ is to feel that others don't understand you.",
        "back": "misunderstood\n\nSentirse incomprendido"
      },
      {
        "id": "v10_063",
        "front": "A ___ is the person you are in a romantic relationship with.",
        "back": "partner\n\nPareja (romántica)"
      },
      {
        "id": "v10_064",
        "front": "A ___ is a husband or wife.",
        "back": "spouse\n\nCónyuge"
      },
      {
        "id": "v10_065",
        "front": "A ___ (m) / ___ (f) is someone engaged to be married.",
        "back": "fiancé / fiancée\n\nPrometido/a"
      },
      {
        "id": "v10_066",
        "front": "An ___ is a former partner.",
        "back": "ex\n\nEx (pareja anterior)"
      },
      {
        "id": "v10_067",
        "front": "A ___ is someone you have romantic feelings for.",
        "back": "crush\n\nFlechazo / el/la que te gusta"
      },
      {
        "id": "v10_068",
        "front": "A ___ is a romantic meeting.",
        "back": "date\n\nCita romántica"
      },
      {
        "id": "v10_069",
        "front": "To ___ means to invite them on a date.",
        "back": "ask someone out\n\nInvitar a salir / pedir una cita"
      },
      {
        "id": "v10_070",
        "front": "To ___ someone means to be in a relationship.",
        "back": "go out with\n\nSalir con alguien"
      },
      {
        "id": "v10_071",
        "front": "To ___ someone means to develop romantic feelings.",
        "back": "fall for\n\nEnamorarse de"
      },
      {
        "id": "v10_072",
        "front": "To ___ means to begin to love someone.",
        "back": "fall in love\n\nEnamorarse"
      },
      {
        "id": "v10_073",
        "front": "To ___ means to have deep romantic feelings.",
        "back": "be in love\n\nEstar enamorado"
      },
      {
        "id": "v10_074",
        "front": "To ___ means to end a relationship.",
        "back": "break up\n\nRomper (una relación)"
      },
      {
        "id": "v10_075",
        "front": "To ___ means to resume a relationship after breaking up.",
        "back": "get back together\n\nVolver (con alguien)"
      },
      {
        "id": "v10_076",
        "front": "To ___ someone means to be unfaithful.",
        "back": "cheat on\n\nEngañar / poner los cuernos"
      },
      {
        "id": "v10_077",
        "front": "To ___ after an argument means to reconcile.",
        "back": "make up\n\nReconciliarse / hacer las paces"
      },
      {
        "id": "v10_078",
        "front": "To ___ means to gradually lose closeness.",
        "back": "drift apart\n\nDistanciarse / alejarse"
      },
      {
        "id": "v10_079",
        "front": "To ___ means to change in ways that make you less compatible.",
        "back": "grow apart\n\nDistanciarse con el tiempo"
      },
      {
        "id": "v10_080",
        "front": "To ___ means to agree to marry.",
        "back": "get engaged\n\nPrometerse / comprometerse"
      },
      {
        "id": "v10_081",
        "front": "To ___ means to become husband and wife legally.",
        "back": "get married\n\nCasarse"
      },
      {
        "id": "v10_082",
        "front": "To ___ means to legally end a marriage.",
        "back": "get divorced\n\nDivorciarse"
      },
      {
        "id": "v10_083",
        "front": "To ___ means to separate — used for couples.",
        "back": "split up\n\nSepararse"
      },
      {
        "id": "v10_084",
        "front": "___ means love with no conditions attached.",
        "back": "Unconditional love\n\nAmor incondicional"
      },
      {
        "id": "v10_085",
        "front": "A ___ is a connection between two people.",
        "back": "relationship\n\nRelación"
      },
      {
        "id": "v10_086",
        "front": "A ___ is a close relationship between friends.",
        "back": "friendship\n\nAmistad"
      },
      {
        "id": "v10_087",
        "front": "A ___ is a deep connection between people.",
        "back": "bond\n\nVínculo"
      },
      {
        "id": "v10_088",
        "front": "___ is firm belief in someone's reliability.",
        "back": "Trust\n\nConfianza"
      },
      {
        "id": "v10_089",
        "front": "___ is consistent support for someone.",
        "back": "Loyalty\n\nLealtad"
      },
      {
        "id": "v10_090",
        "front": "___ is dedication to a relationship or goal.",
        "back": "Commitment\n\nCompromiso"
      },
      {
        "id": "v10_091",
        "front": "___ is treating someone with consideration.",
        "back": "Respect\n\nRespeto"
      },
      {
        "id": "v10_092",
        "front": "___ in a relationship is fear of losing your partner to someone else.",
        "back": "Jealousy\n\nCelos (en pareja)"
      },
      {
        "id": "v10_093",
        "front": "___ is excessive control over a partner.",
        "back": "Possessiveness\n\nPosesividad"
      },
      {
        "id": "v10_094",
        "front": "A ___ is harmful to one or both people.",
        "back": "toxic relationship\n\nRelación tóxica"
      },
      {
        "id": "v10_095",
        "front": "___ is excessive emotional reliance on a partner.",
        "back": "Codependency\n\nCodependencia"
      },
      {
        "id": "v10_096",
        "front": "___ are limits you set about what you will accept.",
        "back": "Boundaries\n\nLímites (en una relación)"
      },
      {
        "id": "v10_097",
        "front": "To ___ someone means to help them emotionally.",
        "back": "support\n\nApoyar a alguien"
      },
      {
        "id": "v10_098",
        "front": "To ___ someone means to ease their distress.",
        "back": "comfort\n\nConsolar a alguien"
      },
      {
        "id": "v10_099",
        "front": "To ___ someone means to share secrets or feelings.",
        "back": "confide in\n\nConfiar en alguien (contarle algo)"
      },
      {
        "id": "v10_100",
        "front": "To ___ means to share your feelings honestly.",
        "back": "open up\n\nAbrirse / sincerarse"
      },
      {
        "id": "v10_101",
        "front": "To ___ someone means to suddenly stop all contact.",
        "back": "ghost\n\nGhostear / desaparecer sin dar explicaciones"
      },
      {
        "id": "v10_102",
        "front": "To ___ means to not show up for a date.",
        "back": "stand someone up\n\nDejar a alguien plantado"
      },
      {
        "id": "v10_103",
        "front": "To ___ means to repair a relationship after conflict.",
        "back": "patch things up\n\nArreglar las cosas"
      },
      {
        "id": "v10_104",
        "front": "A ___ is your closest friend.",
        "back": "best friend\n\nMejor amigo/a"
      },
      {
        "id": "v10_105",
        "front": "An ___ is someone you know but not closely.",
        "back": "acquaintance\n\nConocido/a"
      },
      {
        "id": "v10_106",
        "front": "A ___ (BrE) / ___ (AmE) is someone you share a home with.",
        "back": "flatmate / roommate\n\nCompañero/a de piso"
      },
      {
        "id": "v10_107",
        "front": "A ___ is someone you work with.",
        "back": "colleague\n\nCompañero de trabajo"
      },
      {
        "id": "v10_108",
        "front": "A ___ is someone who guides and advises you.",
        "back": "mentor\n\nMentor/a"
      },
      {
        "id": "v10_109",
        "front": "A ___ is someone you compete with.",
        "back": "rival\n\nRival"
      },
      {
        "id": "v10_110",
        "front": "An ___ is someone hostile towards you.",
        "back": "enemy\n\nEnemigo/a"
      },
      {
        "id": "v10_111",
        "front": "A ___ is a brother or sister.",
        "back": "sibling\n\nHermano/a (genérico)"
      },
      {
        "id": "v10_112",
        "front": "A ___ is one of two children born at the same birth.",
        "back": "twin\n\nGemelo/a"
      },
      {
        "id": "v10_113",
        "front": "An ___ has no siblings.",
        "back": "only child\n\nHijo único"
      },
      {
        "id": "v10_114",
        "front": "A ___ is a parent who married your biological parent.",
        "back": "stepparent\n\nPadrastro / madrastra"
      },
      {
        "id": "v10_115",
        "front": "A ___ is the child of your stepparent.",
        "back": "stepsibling\n\nHermanastro/a"
      },
      {
        "id": "v10_116",
        "front": "A ___ shares one biological parent with you.",
        "back": "half-sibling\n\nMedio hermano/a"
      },
      {
        "id": "v10_117",
        "front": "A ___ is a person who sponsors a child at baptism.",
        "back": "godparent\n\nPadrino / madrina"
      },
      {
        "id": "v10_118",
        "front": "An ___ is a relative by marriage.",
        "back": "in-law\n\nFamiliar político (suegro, cuñado...)"
      },
      {
        "id": "v10_119",
        "front": "A ___ is your spouse's mother.",
        "back": "mother-in-law\n\nSuegra"
      },
      {
        "id": "v10_120",
        "front": "A ___ is your spouse's father.",
        "back": "father-in-law\n\nSuegro"
      },
      {
        "id": "v10_121",
        "front": "A ___ is your spouse's sister or your sibling's wife.",
        "back": "sister-in-law\n\nCuñada"
      },
      {
        "id": "v10_122",
        "front": "A ___ is your spouse's brother or your sibling's husband.",
        "back": "brother-in-law\n\nCuñado"
      }
    ]
  },
  {
    "section": 11,
    "title": "Tecnología y Redes",
    "cards": [
      {
        "id": "v11_001",
        "front": "A ___ is a mobile phone with internet and app capabilities.",
        "back": "smartphone\n\nTeléfono inteligente / móvil"
      },
      {
        "id": "v11_002",
        "front": "A ___ is a portable touchscreen device larger than a phone.",
        "back": "tablet\n\nTableta"
      },
      {
        "id": "v11_003",
        "front": "A ___ is a wearable device on the wrist with smart features.",
        "back": "smartwatch\n\nReloj inteligente"
      },
      {
        "id": "v11_004",
        "front": "___ / ___ are small wireless in-ear headphones.",
        "back": "Wireless earbuds / AirPods\n\nAuriculares inalámbricos"
      },
      {
        "id": "v11_005",
        "front": "A ___ supplies power to electronic devices.",
        "back": "charger\n\nCargador"
      },
      {
        "id": "v11_006",
        "front": "A ___ is a portable battery for charging devices on the go.",
        "back": "power bank\n\nBatería portátil / powerbank"
      },
      {
        "id": "v11_007",
        "front": "A ___ connects devices and transfers data or power.",
        "back": "USB cable\n\nCable USB"
      },
      {
        "id": "v11_008",
        "front": "A ___ stores mobile network data and your phone number.",
        "back": "SIM card\n\nTarjeta SIM"
      },
      {
        "id": "v11_009",
        "front": "___ is internet access through the phone network.",
        "back": "Mobile data\n\nDatos móviles"
      },
      {
        "id": "v11_010",
        "front": "___ is wireless internet access.",
        "back": "Wi-Fi\n\nWiFi"
      },
      {
        "id": "v11_011",
        "front": "___ is short-range wireless communication between devices.",
        "back": "Bluetooth\n\nBluetooth"
      },
      {
        "id": "v11_012",
        "front": "___ disables all wireless communication.",
        "back": "Aeroplane mode\n\nModo avión"
      },
      {
        "id": "v11_013",
        "front": "The ___ is the main screen of a phone or tablet.",
        "back": "home screen\n\nPantalla de inicio"
      },
      {
        "id": "v11_014",
        "front": "A ___ is an alert from an app.",
        "back": "notification\n\nNotificación"
      },
      {
        "id": "v11_015",
        "front": "___ mode silences notifications.",
        "back": "Do not disturb\n\nNo molestar (modo silencio)"
      },
      {
        "id": "v11_016",
        "front": "To ___ means to move your finger across the screen.",
        "back": "swipe\n\nDeslizar / pasar (pantalla táctil)"
      },
      {
        "id": "v11_017",
        "front": "To ___ means to touch the screen briefly.",
        "back": "tap\n\nTocar / pulsar (pantalla)"
      },
      {
        "id": "v11_018",
        "front": "To ___ means to zoom in or out using two fingers.",
        "back": "pinch\n\nPellizcar (zoom)"
      },
      {
        "id": "v11_019",
        "front": "To ___ means to move up or down through content.",
        "back": "scroll\n\nDesplazarse (arriba/abajo)"
      },
      {
        "id": "v11_020",
        "front": "To ___ means to capture an image of your screen.",
        "back": "screenshot\n\nCaptura de pantalla"
      },
      {
        "id": "v11_021",
        "front": "A ___ is a photo taken of yourself, usually with the front camera.",
        "back": "selfie\n\nSelfie / autofoto"
      },
      {
        "id": "v11_022",
        "front": "___ unlocks a phone using facial recognition.",
        "back": "Face ID\n\nReconocimiento facial"
      },
      {
        "id": "v11_023",
        "front": "A ___ unlocks a device using your fingerprint.",
        "back": "fingerprint scanner\n\nLector de huellas"
      },
      {
        "id": "v11_024",
        "front": "___ is the space available on a device for files.",
        "back": "Storage\n\nAlmacenamiento"
      },
      {
        "id": "v11_025",
        "front": "___ (Random Access Memory) is the memory used to run apps.",
        "back": "RAM\n\nMemoria RAM"
      },
      {
        "id": "v11_026",
        "front": "The ___ / ___ is the brain of the device.",
        "back": "processor / chip\n\nProcesador"
      },
      {
        "id": "v11_027",
        "front": "The ___ is how long a device runs before needing charging.",
        "back": "battery life\n\nDuración de la batería"
      },
      {
        "id": "v11_028",
        "front": "A ___ improves or fixes the device's operating system.",
        "back": "software update\n\nActualización de software"
      },
      {
        "id": "v11_029",
        "front": "An ___ (application) is a programme installed on a device.",
        "back": "app\n\nAplicación / app"
      },
      {
        "id": "v11_030",
        "front": "To ___ means to transfer data from the internet to your device.",
        "back": "download\n\nDescargar"
      },
      {
        "id": "v11_031",
        "front": "To ___ means to send data from your device to the internet.",
        "back": "upload\n\nSubir / cargar (datos)"
      },
      {
        "id": "v11_032",
        "front": "To ___ an app means to add it to your device.",
        "back": "install\n\nInstalar"
      },
      {
        "id": "v11_033",
        "front": "To ___ / ___ an app means to remove it.",
        "back": "uninstall / delete\n\nDesinstalar / borrar"
      },
      {
        "id": "v11_034",
        "front": "To ___ means to enter credentials to access an account.",
        "back": "log in\n\nIniciar sesión"
      },
      {
        "id": "v11_035",
        "front": "To ___ means to exit an account.",
        "back": "log out\n\nCerrar sesión"
      },
      {
        "id": "v11_036",
        "front": "A ___ is the name used to identify you on a platform.",
        "back": "username\n\nNombre de usuario"
      },
      {
        "id": "v11_037",
        "front": "A ___ is a secret code used to access an account.",
        "back": "password\n\nContraseña"
      },
      {
        "id": "v11_038",
        "front": "___ (2FA) adds a second verification step.",
        "back": "Two-factor authentication\n\nDoble factor de autenticación"
      },
      {
        "id": "v11_039",
        "front": "A ___ is a test to verify you are human.",
        "back": "captcha\n\nCaptcha (verificación humano)"
      },
      {
        "id": "v11_040",
        "front": "A ___ is a small file stored by a website on your device.",
        "back": "cookie\n\nCookie"
      },
      {
        "id": "v11_041",
        "front": "___ is a record of websites you've visited.",
        "back": "Browsing history\n\nHistorial de navegación"
      },
      {
        "id": "v11_042",
        "front": "To ___ means to delete temporary stored data.",
        "back": "clear the cache\n\nBorrar el caché"
      },
      {
        "id": "v11_043",
        "front": "A ___ is software used to access websites.",
        "back": "browser\n\nNavegador web"
      },
      {
        "id": "v11_044",
        "front": "A ___ finds websites based on your query.",
        "back": "search engine\n\nMotor de búsqueda"
      },
      {
        "id": "v11_045",
        "front": "A ___ is the web address of a page.",
        "back": "URL\n\nURL / dirección web"
      },
      {
        "id": "v11_046",
        "front": "A ___ / ___ connects to another page or resource.",
        "back": "hyperlink / link\n\nEnlace / hipervínculo"
      },
      {
        "id": "v11_047",
        "front": "A ___ saves a website for easy access later.",
        "back": "bookmark\n\nMarcador / favorito"
      },
      {
        "id": "v11_048",
        "front": "___ / ___ doesn't save history or cookies.",
        "back": "Incognito mode / private browsing\n\nModo incógnito / navegación privada"
      },
      {
        "id": "v11_049",
        "front": "A ___ is a window that appears over the current page.",
        "back": "pop-up\n\nVentana emergente / pop-up"
      },
      {
        "id": "v11_050",
        "front": "A ___ protects a network from unauthorised access.",
        "back": "firewall\n\nCortafuegos"
      },
      {
        "id": "v11_051",
        "front": "___ is malicious software designed to harm devices.",
        "back": "Malware\n\nMalware / software malicioso"
      },
      {
        "id": "v11_052",
        "front": "A ___ is malware that spreads by attaching to files.",
        "back": "virus\n\nVirus informático"
      },
      {
        "id": "v11_053",
        "front": "___ is a scam that tricks users into revealing credentials.",
        "back": "Phishing\n\nPhishing"
      },
      {
        "id": "v11_054",
        "front": "___ is unsolicited bulk email or messages.",
        "back": "Spam\n\nSpam / correo basura"
      },
      {
        "id": "v11_055",
        "front": "A ___ is an unauthorised access to a system.",
        "back": "hack\n\nHackeo / ataque informático"
      },
      {
        "id": "v11_056",
        "front": "___ converts data into a code to prevent access.",
        "back": "Encryption\n\nCifrado / encriptación"
      },
      {
        "id": "v11_057",
        "front": "A ___ hides your IP address and encrypts your traffic.",
        "back": "VPN\n\nVPN / red privada virtual"
      },
      {
        "id": "v11_058",
        "front": "___ keeps files on remote servers accessed via internet.",
        "back": "Cloud storage\n\nAlmacenamiento en la nube"
      },
      {
        "id": "v11_059",
        "front": "To ___ data means to copy it to a safe location.",
        "back": "back up\n\nHacer una copia de seguridad"
      },
      {
        "id": "v11_060",
        "front": "A ___ is a piece of content shared on social media.",
        "back": "post\n\nPublicación / post"
      },
      {
        "id": "v11_061",
        "front": "A ___ is the stream of posts on a social media platform.",
        "back": "feed\n\nMuro / feed"
      },
      {
        "id": "v11_062",
        "front": "A ___ is a temporary post visible for 24 hours.",
        "back": "story\n\nHistoria (Instagram, WhatsApp...)"
      },
      {
        "id": "v11_063",
        "front": "A ___ is a short vertical video.",
        "back": "reel\n\nReel / vídeo corto"
      },
      {
        "id": "v11_064",
        "front": "A ___ is a series of connected posts or messages.",
        "back": "thread\n\nHilo"
      },
      {
        "id": "v11_065",
        "front": "A ___ groups content by topic using the # symbol.",
        "back": "hashtag\n\nHashtag / etiqueta"
      },
      {
        "id": "v11_066",
        "front": "A ___ tags another user using @.",
        "back": "mention\n\nMención (@usuario)"
      },
      {
        "id": "v11_067",
        "front": "A ___ is an approval reaction to a post.",
        "back": "like\n\nMe gusta"
      },
      {
        "id": "v11_068",
        "front": "A ___ spreads someone else's content to your followers.",
        "back": "share\n\nCompartir"
      },
      {
        "id": "v11_069",
        "front": "A ___ is a text response to a post.",
        "back": "comment\n\nComentario"
      },
      {
        "id": "v11_070",
        "front": "A ___ is a response to a comment or message.",
        "back": "reply\n\nRespuesta / contestar"
      },
      {
        "id": "v11_071",
        "front": "A ___ (direct message) is a private message between users.",
        "back": "DM\n\nMensaje directo / DM"
      },
      {
        "id": "v11_072",
        "front": "A ___ is someone who subscribes to your content.",
        "back": "follower\n\nSeguidor"
      },
      {
        "id": "v11_073",
        "front": "To ___ someone means to subscribe to their content.",
        "back": "follow\n\nSeguir (en redes)"
      },
      {
        "id": "v11_074",
        "front": "To ___ means to stop following someone.",
        "back": "unfollow\n\nDejar de seguir"
      },
      {
        "id": "v11_075",
        "front": "To ___ someone prevents them from seeing or contacting you.",
        "back": "block\n\nBloquear"
      },
      {
        "id": "v11_076",
        "front": "To ___ someone hides their content without unfollowing.",
        "back": "mute\n\nSilenciar"
      },
      {
        "id": "v11_077",
        "front": "___ measures how much people interact with content.",
        "back": "Engagement\n\nInteracción / engagement"
      },
      {
        "id": "v11_078",
        "front": "___ is the number of people who saw a piece of content.",
        "back": "Reach\n\nAlcance"
      },
      {
        "id": "v11_079",
        "front": "___ count how many times content was displayed.",
        "back": "Impressions\n\nImpresiones"
      },
      {
        "id": "v11_080",
        "front": "___ content spreads rapidly across the internet.",
        "back": "Viral\n\nViral"
      },
      {
        "id": "v11_081",
        "front": "A ___ is a topic or style that is currently popular.",
        "back": "trend\n\nTendencia"
      },
      {
        "id": "v11_082",
        "front": "An ___ is someone who has significant online reach.",
        "back": "influencer\n\nInfluencer"
      },
      {
        "id": "v11_083",
        "front": "A ___ produces videos, posts or articles online.",
        "back": "content creator\n\nCreador de contenido"
      },
      {
        "id": "v11_084",
        "front": "A ___ is a video blog documenting daily life or travel.",
        "back": "vlog\n\nVlog (videoblog)"
      },
      {
        "id": "v11_085",
        "front": "A ___ is an audio show available on demand.",
        "back": "podcast\n\nPodcast"
      },
      {
        "id": "v11_086",
        "front": "A ___ is a real-time video broadcast.",
        "back": "livestream\n\nDirecto / emisión en vivo"
      },
      {
        "id": "v11_087",
        "front": "___ means watching or listening to content in real time over the internet.",
        "back": "Streaming\n\nStreaming"
      },
      {
        "id": "v11_088",
        "front": "To ___ means to watch many episodes in one sitting.",
        "back": "binge-watch\n\nMaratonear series / ver de un tirón"
      },
      {
        "id": "v11_089",
        "front": "A ___ gives access to a service for a recurring fee.",
        "back": "subscription\n\nSuscripción"
      },
      {
        "id": "v11_090",
        "front": "A ___ restricts content to paying subscribers.",
        "back": "paywall\n\nMuro de pago"
      },
      {
        "id": "v11_091",
        "front": "___ is misleading content designed to get clicks.",
        "back": "Clickbait\n\nClickbait / contenido anzuelo"
      },
      {
        "id": "v11_092",
        "front": "A ___ is someone who posts inflammatory content to provoke.",
        "back": "troll\n\nTroll"
      },
      {
        "id": "v11_093",
        "front": "___ is online harassment or intimidation.",
        "back": "Cyberbullying\n\nCiberacoso"
      },
      {
        "id": "v11_094",
        "front": "A ___ is a synthetic manipulated video or image.",
        "back": "deepfake\n\nDeepfake"
      },
      {
        "id": "v11_095",
        "front": "___ is false or inaccurate information shared unintentionally.",
        "back": "Misinformation\n\nDesinformación (sin mala intención)"
      },
      {
        "id": "v11_096",
        "front": "___ is false information spread deliberately.",
        "back": "Disinformation\n\nDesinformación (intencionada)"
      },
      {
        "id": "v11_097",
        "front": "An ___ determines what content you see on a platform.",
        "back": "algorithm\n\nAlgoritmo"
      },
      {
        "id": "v11_098",
        "front": "___ refers to control over how your personal data is used.",
        "back": "Data privacy\n\nPrivacidad de datos"
      },
      {
        "id": "v11_099",
        "front": "___ is the amount of time spent on devices.",
        "back": "Screen time\n\nTiempo de pantalla"
      },
      {
        "id": "v11_100",
        "front": "___ is deliberately avoiding devices for a period.",
        "back": "Digital detox\n\nDesconexión digital"
      }
    ]
  },
  {
    "section": 12,
    "title": "Deporte",
    "cards": [
      {
        "id": "v12_001",
        "front": "A ___ is the playing area for football, rugby or cricket.",
        "back": "pitch\n\nCampo de fútbol / rugby"
      },
      {
        "id": "v12_002",
        "front": "A ___ is the playing area for tennis, basketball or squash.",
        "back": "court\n\nPista (tenis, baloncesto)"
      },
      {
        "id": "v12_003",
        "front": "A ___ is a circular running surface or a race course.",
        "back": "track\n\nPista de atletismo"
      },
      {
        "id": "v12_004",
        "front": "A ___ is a body of water used for swimming.",
        "back": "pool\n\nPiscina"
      },
      {
        "id": "v12_005",
        "front": "A ___ / ___ is a place with equipment for exercise.",
        "back": "gym / fitness centre\n\nGimnasio"
      },
      {
        "id": "v12_006",
        "front": "A ___ is a large venue for sports events.",
        "back": "stadium\n\nEstadio"
      },
      {
        "id": "v12_007",
        "front": "A ___ / ___ (AmE) is where athletes change clothes.",
        "back": "changing room / locker room\n\nVestuario"
      },
      {
        "id": "v12_008",
        "front": "A ___ enforces the rules in most sports.",
        "back": "referee\n\nÁrbitro (fútbol, baloncesto...)"
      },
      {
        "id": "v12_009",
        "front": "An ___ enforces rules in tennis, cricket or baseball.",
        "back": "umpire\n\nÁrbitro (tenis, cricket, béisbol)"
      },
      {
        "id": "v12_010",
        "front": "A ___ / ___ judges out-of-bounds or offside.",
        "back": "linesman / assistant referee\n\nJuez de línea"
      },
      {
        "id": "v12_011",
        "front": "A ___ trains and guides athletes.",
        "back": "coach\n\nEntrenador"
      },
      {
        "id": "v12_012",
        "front": "A ___ is in charge of a football team overall.",
        "back": "manager\n\nDirector técnico / mánager"
      },
      {
        "id": "v12_013",
        "front": "A ___ leads the team on the field.",
        "back": "captain\n\nCapitán"
      },
      {
        "id": "v12_014",
        "front": "A ___ / ___ replaces another player during a match.",
        "back": "substitute / sub\n\nSuplente"
      },
      {
        "id": "v12_015",
        "front": "A ___ / ___ watches a sport.",
        "back": "spectator / fan\n\nEspectador / aficionado"
      },
      {
        "id": "v12_016",
        "front": "A ___ is the period during which a sport's competitions take place.",
        "back": "season\n\nTemporada"
      },
      {
        "id": "v12_017",
        "front": "A ___ is a group of teams competing against each other.",
        "back": "league\n\nLiga"
      },
      {
        "id": "v12_018",
        "front": "A ___ is a competition with multiple rounds.",
        "back": "tournament\n\nTorneo"
      },
      {
        "id": "v12_019",
        "front": "A ___ is a scheduled match.",
        "back": "fixture\n\nPartido programado / fixture"
      },
      {
        "id": "v12_020",
        "front": "A ___ is a match between two local rival teams.",
        "back": "derby\n\nDerby / clásico local"
      },
      {
        "id": "v12_021",
        "front": "A ___ competition eliminates losers after each round.",
        "back": "knockout\n\nEliminatoria / copa"
      },
      {
        "id": "v12_022",
        "front": "___ is additional playing time when a match is tied.",
        "back": "Extra time\n\nPrórroga"
      },
      {
        "id": "v12_023",
        "front": "A ___ resolves a tied match with penalty kicks.",
        "back": "penalty shootout\n\nTanda de penaltis"
      },
      {
        "id": "v12_024",
        "front": "___ is a rule violation in football when a player is past the last defender.",
        "back": "Offside\n\nFuera de juego"
      },
      {
        "id": "v12_025",
        "front": "A ___ is an illegal action against another player.",
        "back": "foul\n\nFalta"
      },
      {
        "id": "v12_026",
        "front": "A ___ is awarded after a foul.",
        "back": "free kick\n\nTiro libre / falta"
      },
      {
        "id": "v12_027",
        "front": "A ___ is a direct shot at goal awarded for a foul in the area.",
        "back": "penalty\n\nPenalti"
      },
      {
        "id": "v12_028",
        "front": "A ___ is a kick from the corner of the pitch after the ball goes behind.",
        "back": "corner\n\nCórner"
      },
      {
        "id": "v12_029",
        "front": "A ___ is when a player hits the ball with their head.",
        "back": "header\n\nCabezazo / remate de cabeza"
      },
      {
        "id": "v12_030",
        "front": "A ___ is an attempt to take the ball from an opponent.",
        "back": "tackle\n\nEntrada / tackle"
      },
      {
        "id": "v12_031",
        "front": "A ___ is moving with the ball past defenders.",
        "back": "dribble\n\nRegate / dribbling"
      },
      {
        "id": "v12_032",
        "front": "A ___ is sending the ball to a teammate.",
        "back": "pass\n\nPase"
      },
      {
        "id": "v12_033",
        "front": "A ___ is a pass from the side into the penalty area.",
        "back": "cross\n\nCentro / cruce"
      },
      {
        "id": "v12_034",
        "front": "A ___ is an attempt to score.",
        "back": "shot\n\nDisparo / tiro"
      },
      {
        "id": "v12_035",
        "front": "A ___ is scored when the ball crosses the line.",
        "back": "goal\n\nGol"
      },
      {
        "id": "v12_036",
        "front": "A ___ is when the goalkeeper stops a shot.",
        "back": "save\n\nParada (del portero)"
      },
      {
        "id": "v12_037",
        "front": "A ___ means the goalkeeper didn't concede any goals.",
        "back": "clean sheet\n\nPortería a cero"
      },
      {
        "id": "v12_038",
        "front": "A ___ is three goals scored by one player in one match.",
        "back": "hat-trick\n\nHat-trick / triplete"
      },
      {
        "id": "v12_039",
        "front": "The ___ is the start of a match.",
        "back": "kick-off\n\nSaque inicial / kick-off"
      },
      {
        "id": "v12_040",
        "front": "___ is the break between the two halves.",
        "back": "Half-time\n\nDescanso / medio tiempo"
      },
      {
        "id": "v12_041",
        "front": "The ___ signals the end of the match.",
        "back": "final whistle\n\nPitido final"
      },
      {
        "id": "v12_042",
        "front": "A ___ is a warning for a foul or misconduct.",
        "back": "yellow card\n\nTarjeta amarilla"
      },
      {
        "id": "v12_043",
        "front": "A ___ results in the player being sent off.",
        "back": "red card\n\nTarjeta roja"
      },
      {
        "id": "v12_044",
        "front": "To be ___ means to be expelled from the match.",
        "back": "sent off\n\nSer expulsado"
      },
      {
        "id": "v12_045",
        "front": "___ (Video Assistant Referee) reviews controversial decisions.",
        "back": "VAR\n\nVAR (videoarbitraje)"
      },
      {
        "id": "v12_046",
        "front": "The ___ is the period when players can move clubs.",
        "back": "transfer window\n\nMercado de fichajes / ventana de traspasos"
      },
      {
        "id": "v12_047",
        "front": "A ___ is the amount paid to move a player between clubs.",
        "back": "transfer fee\n\nCláusula / precio de traspaso"
      },
      {
        "id": "v12_048",
        "front": "A ___ specifies a player's terms with a club.",
        "back": "contract\n\nContrato (deportivo)"
      },
      {
        "id": "v12_049",
        "front": "___ exercises prepare the body for physical activity.",
        "back": "Warm up\n\nCalentamiento"
      },
      {
        "id": "v12_050",
        "front": "A ___ is a short burst of maximum speed running.",
        "back": "sprint\n\nEsprint"
      },
      {
        "id": "v12_051",
        "front": "A ___ is one full circuit of a track.",
        "back": "lap\n\nVuelta (a la pista)"
      },
      {
        "id": "v12_052",
        "front": "A ___ (PB) is your best ever performance in an event.",
        "back": "personal best\n\nRécord personal / mejor marca personal"
      },
      {
        "id": "v12_053",
        "front": "A ___ is the best performance ever recorded worldwide.",
        "back": "world record\n\nRécord mundial"
      },
      {
        "id": "v12_054",
        "front": "___ / ___ is the ability to sustain effort over time.",
        "back": "Stamina / endurance\n\nResistencia / aguante"
      },
      {
        "id": "v12_055",
        "front": "___ is the ability to exert force.",
        "back": "Strength\n\nFuerza"
      },
      {
        "id": "v12_056",
        "front": "___ is the ability to move quickly and change direction.",
        "back": "Agility\n\nAgilidad"
      },
      {
        "id": "v12_057",
        "front": "___ is the range of motion in joints and muscles.",
        "back": "Flexibility\n\nFlexibilidad"
      },
      {
        "id": "v12_058",
        "front": "___ is the ability to control body movements smoothly.",
        "back": "Coordination\n\nCoordinación"
      },
      {
        "id": "v12_059",
        "front": "A ___ is a stretched or torn ligament.",
        "back": "sprain\n\nEsguince"
      },
      {
        "id": "v12_060",
        "front": "A ___ is a stretched or torn muscle.",
        "back": "strain\n\nDistensión muscular"
      },
      {
        "id": "v12_061",
        "front": "A ___ is a sudden involuntary muscle contraction.",
        "back": "cramp\n\nCalambre"
      },
      {
        "id": "v12_062",
        "front": "A ___ is a friction bubble on the skin from running or sport.",
        "back": "blister\n\nAmpolla"
      },
      {
        "id": "v12_063",
        "front": "___ (Delayed Onset Muscle Soreness) is muscle pain 24-48h after exercise.",
        "back": "DOMS\n\nAgujetas"
      },
      {
        "id": "v12_064",
        "front": "To ___ means to lengthen muscles before or after exercise.",
        "back": "stretch\n\nEstirar"
      },
      {
        "id": "v12_065",
        "front": "To ___ means to practise a sport regularly to improve.",
        "back": "train\n\nEntrenar"
      },
      {
        "id": "v12_066",
        "front": "To ___ means to take part in a match or competition.",
        "back": "compete\n\nCompetir"
      },
      {
        "id": "v12_067",
        "front": "To ___ means to come first or beat an opponent.",
        "back": "win\n\nGanar"
      },
      {
        "id": "v12_068",
        "front": "To ___ means to be beaten.",
        "back": "lose\n\nPerder"
      },
      {
        "id": "v12_069",
        "front": "To ___ / ___ means to finish with equal scores.",
        "back": "draw / tie\n\nEmpatar"
      },
      {
        "id": "v12_070",
        "front": "To ___ means to earn the right to compete in a further stage.",
        "back": "qualify\n\nClasificarse"
      },
      {
        "id": "v12_071",
        "front": "To ___ someone means to defeat them.",
        "back": "beat\n\nVencer / superar"
      },
      {
        "id": "v12_072",
        "front": "To ___ means to pass someone in a race.",
        "back": "overtake\n\nAdelantar / superar"
      },
      {
        "id": "v12_073",
        "front": "To ___ means to withdraw from a competition.",
        "back": "drop out\n\nAbandonar / retirarse"
      },
      {
        "id": "v12_074",
        "front": "To ___ from sport means to stop competing permanently.",
        "back": "retire\n\nRetirarse del deporte"
      },
      {
        "id": "v12_075",
        "front": "___ involves lifting heavy weights as a competitive sport.",
        "back": "Weightlifting\n\nHalterofilia / levantamiento de pesas"
      },
      {
        "id": "v12_076",
        "front": "___ is riding a bicycle for sport or fitness.",
        "back": "Cycling\n\nCiclismo"
      },
      {
        "id": "v12_077",
        "front": "___ is propelling yourself through water.",
        "back": "Swimming\n\nNatación"
      },
      {
        "id": "v12_078",
        "front": "___ covers track and field events — running, jumping, throwing.",
        "back": "Athletics\n\nAtletismo"
      },
      {
        "id": "v12_079",
        "front": "___ involves body control, flexibility and acrobatics.",
        "back": "Gymnastics\n\nGimnasia"
      },
      {
        "id": "v12_080",
        "front": "___ include disciplines like karate, judo and taekwondo.",
        "back": "Martial arts\n\nArtes marciales"
      },
      {
        "id": "v12_081",
        "front": "___ involves two competitors fighting with padded gloves.",
        "back": "Boxing\n\nBoxeo"
      },
      {
        "id": "v12_082",
        "front": "___ involves grappling and trying to pin the opponent.",
        "back": "Wrestling\n\nLucha libre"
      },
      {
        "id": "v12_083",
        "front": "___ is a contact sport where teams carry or kick an oval ball.",
        "back": "Rugby\n\nRugby"
      },
      {
        "id": "v12_084",
        "front": "___ is a bat-and-ball sport played between two teams of eleven.",
        "back": "Cricket\n\nCríquet"
      },
      {
        "id": "v12_085",
        "front": "___ involves hitting a ball with a bat and running bases.",
        "back": "Baseball\n\nBéisbol"
      },
      {
        "id": "v12_086",
        "front": "___ uses an oval ball and heavy protective gear.",
        "back": "American football\n\nFútbol americano"
      },
      {
        "id": "v12_087",
        "front": "___ is played on ice with sticks and a puck.",
        "back": "Ice hockey\n\nHockey sobre hielo"
      },
      {
        "id": "v12_088",
        "front": "___ involves sliding down snowy slopes on skis.",
        "back": "Skiing\n\nEsquí"
      },
      {
        "id": "v12_089",
        "front": "___ uses a single board on snow.",
        "back": "Snowboarding\n\nSnowboard"
      },
      {
        "id": "v12_090",
        "front": "___ involves riding ocean waves on a board.",
        "back": "Surfing\n\nSurf"
      },
      {
        "id": "v12_091",
        "front": "___ involves ascending rock faces or indoor walls.",
        "back": "Climbing\n\nEscalada"
      },
      {
        "id": "v12_092",
        "front": "___ combines postures, breathing and meditation.",
        "back": "Yoga\n\nYoga"
      },
      {
        "id": "v12_093",
        "front": "___ focuses on core strength and controlled movement.",
        "back": "Pilates\n\nPilates"
      },
      {
        "id": "v12_094",
        "front": "___ is a high-intensity training programme combining many disciplines.",
        "back": "CrossFit\n\nCrossFit"
      },
      {
        "id": "v12_095",
        "front": "___ involves propelling a boat with oars.",
        "back": "Rowing\n\nRemo"
      },
      {
        "id": "v12_096",
        "front": "___ uses wind to propel a boat.",
        "back": "Sailing\n\nVela / navegación"
      },
      {
        "id": "v12_097",
        "front": "___ involves hitting a ball into holes with the fewest strokes.",
        "back": "Golf\n\nGolf"
      },
      {
        "id": "v12_098",
        "front": "___ involves throwing small pointed missiles at a circular board.",
        "back": "Darts\n\nDardos"
      },
      {
        "id": "v12_099",
        "front": "___ is a cue sport played on a large table with coloured balls.",
        "back": "Snooker\n\nSnooker / billar inglés"
      }
    ]
  },
  {
    "section": 13,
    "title": "Viajes y Hotel",
    "cards": [
      {
        "id": "v13_001",
        "front": "A ___ is an official document for international travel.",
        "back": "passport\n\nPasaporte"
      },
      {
        "id": "v13_002",
        "front": "A ___ is permission granted by a country to enter.",
        "back": "visa\n\nVisado / visa"
      },
      {
        "id": "v13_003",
        "front": "A ___ is required to board a plane.",
        "back": "boarding pass\n\nTarjeta de embarque"
      },
      {
        "id": "v13_004",
        "front": "___ at an airport is the process of registering for your flight.",
        "back": "Check-in\n\nFacturación (aeropuerto)"
      },
      {
        "id": "v13_005",
        "front": "___ is the time by which you must leave a hotel room.",
        "back": "Check-out time\n\nHora de salida (hotel)"
      },
      {
        "id": "v13_006",
        "front": "___ is the weight of luggage permitted on a flight.",
        "back": "Baggage allowance\n\nFranquicia de equipaje"
      },
      {
        "id": "v13_007",
        "front": "___ is luggage over the permitted weight — you pay extra.",
        "back": "Excess baggage\n\nExceso de equipaje"
      },
      {
        "id": "v13_008",
        "front": "___ / ___ is the small bag taken onto the plane.",
        "back": "Hand luggage / carry-on\n\nEquipaje de mano"
      },
      {
        "id": "v13_009",
        "front": "___ goes in the hold and is collected at the destination.",
        "back": "Checked luggage\n\nEquipaje facturado"
      },
      {
        "id": "v13_010",
        "front": "A ___ is a rigid or soft bag with a handle and wheels for travel.",
        "back": "suitcase\n\nMaleta"
      },
      {
        "id": "v13_011",
        "front": "A ___ / ___ is worn on the back.",
        "back": "backpack / rucksack\n\nMochila"
      },
      {
        "id": "v13_012",
        "front": "A ___ is a wheeled bag pulled through airports.",
        "back": "trolley bag\n\nTrolley / maleta con ruedas"
      },
      {
        "id": "v13_013",
        "front": "A ___ shop sells goods without local tax.",
        "back": "duty-free\n\nTienda libre de impuestos"
      },
      {
        "id": "v13_014",
        "front": "___ is where documents are checked.",
        "back": "Passport control\n\nControl de pasaportes"
      },
      {
        "id": "v13_015",
        "front": "___ is where goods brought into the country are inspected.",
        "back": "Customs\n\nAduana"
      },
      {
        "id": "v13_016",
        "front": "The ___ is where passengers emerge after landing.",
        "back": "arrivals hall\n\nSala de llegadas"
      },
      {
        "id": "v13_017",
        "front": "The ___ is where you wait before boarding.",
        "back": "departures lounge\n\nSala de espera de salidas"
      },
      {
        "id": "v13_018",
        "front": "A ___ is a second flight taken to reach your final destination.",
        "back": "connecting flight\n\nVuelo de conexión / escala"
      },
      {
        "id": "v13_019",
        "front": "A ___ / ___ is time spent at an airport between flights.",
        "back": "layover / stopover\n\nEscala"
      },
      {
        "id": "v13_020",
        "front": "A ___ goes from A to B with no stops.",
        "back": "direct flight\n\nVuelo directo"
      },
      {
        "id": "v13_021",
        "front": "A ___ (BrE) / ___ (AmE) includes both outward and return journeys.",
        "back": "return flight / round trip\n\nVuelo de ida y vuelta"
      },
      {
        "id": "v13_022",
        "front": "___ is unstable air causing bumpy flight conditions.",
        "back": "Turbulence\n\nTurbulencias"
      },
      {
        "id": "v13_023",
        "front": "The ___ / ___ serve passengers on board.",
        "back": "cabin crew / flight attendants\n\nTripulación de cabina / azafatas"
      },
      {
        "id": "v13_024",
        "front": "The ___ stores hand luggage above the seat.",
        "back": "overhead locker\n\nCompartimento superior"
      },
      {
        "id": "v13_025",
        "front": "An ___ is next to the walkway.",
        "back": "aisle seat\n\nAsiento de pasillo"
      },
      {
        "id": "v13_026",
        "front": "A ___ is next to the window.",
        "back": "window seat\n\nAsiento de ventanilla"
      },
      {
        "id": "v13_027",
        "front": "A ___ is between two other passengers.",
        "back": "middle seat\n\nAsiento central"
      },
      {
        "id": "v13_028",
        "front": "___ is the standard cheapest cabin.",
        "back": "Economy class\n\nClase turista / económica"
      },
      {
        "id": "v13_029",
        "front": "___ offers wider seats and more services.",
        "back": "Business class\n\nClase business"
      },
      {
        "id": "v13_030",
        "front": "___ is the most luxurious and expensive.",
        "back": "First class\n\nPrimera clase"
      },
      {
        "id": "v13_031",
        "front": "___ is tiredness and disorientation from crossing time zones.",
        "back": "Jet lag\n\nJet lag / desfase horario"
      },
      {
        "id": "v13_032",
        "front": "To ___ means for a plane to arrive on the ground.",
        "back": "land\n\nAterrizar"
      },
      {
        "id": "v13_033",
        "front": "To ___ means for a plane to leave the ground.",
        "back": "take off\n\nDespegar"
      },
      {
        "id": "v13_034",
        "front": "To ___ means to get on a plane, train or bus.",
        "back": "board\n\nEmbarcar / subir"
      },
      {
        "id": "v13_035",
        "front": "To ___ means to get off a plane or ship.",
        "back": "disembark\n\nDesembarcar"
      },
      {
        "id": "v13_036",
        "front": "A ___ has one bed for one person.",
        "back": "single room\n\nHabitación individual"
      },
      {
        "id": "v13_037",
        "front": "A ___ has one large bed for two people.",
        "back": "double room\n\nHabitación doble (cama de matrimonio)"
      },
      {
        "id": "v13_038",
        "front": "A ___ has two single beds.",
        "back": "twin room\n\nHabitación twin (dos camas)"
      },
      {
        "id": "v13_039",
        "front": "A ___ is a luxurious set of rooms in a hotel.",
        "back": "suite\n\nSuite"
      },
      {
        "id": "v13_040",
        "front": "___ means the bathroom is private and inside the room.",
        "back": "En suite\n\nCon baño en suite / baño privado"
      },
      {
        "id": "v13_041",
        "front": "___ includes breakfast and one other meal.",
        "back": "Half board\n\nMedia pensión"
      },
      {
        "id": "v13_042",
        "front": "___ includes all three meals.",
        "back": "Full board\n\nPensión completa"
      },
      {
        "id": "v13_043",
        "front": "___ (B&B) includes a room and morning meal.",
        "back": "Bed and breakfast\n\nCama y desayuno"
      },
      {
        "id": "v13_044",
        "front": "___ accommodation has cooking facilities.",
        "back": "Self-catering\n\nApartamento / alojamiento con cocina"
      },
      {
        "id": "v13_045",
        "front": "The ___ / ___ is where you check in at a hotel.",
        "back": "reception / front desk\n\nRecepción"
      },
      {
        "id": "v13_046",
        "front": "A ___ arranges services for hotel guests.",
        "back": "concierge\n\nConserje"
      },
      {
        "id": "v13_047",
        "front": "___ delivers food and drinks to your room.",
        "back": "Room service\n\nServicio de habitaciones"
      },
      {
        "id": "v13_048",
        "front": "A ___ is a phone call to wake you at a set time.",
        "back": "wake-up call\n\nServicio de despertador"
      },
      {
        "id": "v13_049",
        "front": "The ___ is a small fridge in the room stocked with drinks and snacks.",
        "back": "minibar\n\nMinibar"
      },
      {
        "id": "v13_050",
        "front": "A ___ stores valuables securely in the room.",
        "back": "safe\n\nCaja fuerte (habitación)"
      },
      {
        "id": "v13_051",
        "front": "___ cleans and maintains hotel rooms.",
        "back": "Housekeeping\n\nServicio de limpieza"
      },
      {
        "id": "v13_052",
        "front": "A ___ sign tells staff not to enter the room.",
        "back": "do not disturb\n\nNo molestar (cartel)"
      },
      {
        "id": "v13_053",
        "front": "To ___ at a hotel means to arrive and register.",
        "back": "check in\n\nRegistrarse en el hotel"
      },
      {
        "id": "v13_054",
        "front": "To ___ means to leave and pay the bill.",
        "back": "check out\n\nHacer el check-out / marcharse del hotel"
      },
      {
        "id": "v13_055",
        "front": "To ___ / ___ means to arrange accommodation or transport in advance.",
        "back": "book / reserve\n\nReservar"
      },
      {
        "id": "v13_056",
        "front": "To ___ a booking means to withdraw the reservation.",
        "back": "cancel\n\nCancelar una reserva"
      },
      {
        "id": "v13_057",
        "front": "A ___ is charged when a booking is cancelled late.",
        "back": "cancellation fee\n\nPenalización por cancelación"
      },
      {
        "id": "v13_058",
        "front": "A ___ is money returned after a cancellation.",
        "back": "refund\n\nReembolso"
      },
      {
        "id": "v13_059",
        "front": "___ refers to whether rooms or seats are free.",
        "back": "Availability\n\nDisponibilidad"
      },
      {
        "id": "v13_060",
        "front": "___ is when demand and prices are highest.",
        "back": "Peak season\n\nTemporada alta"
      },
      {
        "id": "v13_061",
        "front": "___ / ___ is when demand is lower.",
        "back": "Low season / off-peak\n\nTemporada baja / fuera de temporada"
      },
      {
        "id": "v13_062",
        "front": "A ___ includes flights, hotel and sometimes meals.",
        "back": "package holiday\n\nViaje organizado / paquete vacacional"
      },
      {
        "id": "v13_063",
        "front": "A ___ is led by a guide.",
        "back": "guided tour\n\nVisita guiada"
      },
      {
        "id": "v13_064",
        "front": "A ___ is done independently.",
        "back": "self-guided tour\n\nVisita autoguiada"
      },
      {
        "id": "v13_065",
        "front": "A ___ is a short excursion returning the same day.",
        "back": "day trip\n\nExcursión de un día"
      },
      {
        "id": "v13_066",
        "front": "A ___ is a long journey by car.",
        "back": "road trip\n\nViaje por carretera"
      },
      {
        "id": "v13_067",
        "front": "A ___ is a holiday on a large ship.",
        "back": "cruise\n\nCrucero"
      },
      {
        "id": "v13_068",
        "front": "A ___ trip involves low-cost independent travel.",
        "back": "backpacking\n\nViaje mochilero"
      },
      {
        "id": "v13_069",
        "front": "An ___ is a planned schedule for a trip.",
        "back": "itinerary\n\nItinerario"
      },
      {
        "id": "v13_070",
        "front": "A ___ shows geographical information of an area.",
        "back": "map\n\nMapa"
      },
      {
        "id": "v13_071",
        "front": "A ___ contains information for tourists.",
        "back": "guidebook\n\nGuía turística (libro)"
      },
      {
        "id": "v13_072",
        "front": "A ___ is a recognisable building or feature.",
        "back": "landmark\n\nMonumento / punto de referencia"
      },
      {
        "id": "v13_073",
        "front": "A ___ is a place of interest to visitors.",
        "back": "tourist attraction\n\nAtracción turística"
      },
      {
        "id": "v13_074",
        "front": "A ___ is an object bought as a reminder of a place.",
        "back": "souvenir\n\nRecuerdo / souvenir"
      },
      {
        "id": "v13_075",
        "front": "An ___ is the value of one currency against another.",
        "back": "exchange rate\n\nTipo de cambio"
      },
      {
        "id": "v13_076",
        "front": "To ___ currency means to convert money.",
        "back": "exchange\n\nCambiar divisas"
      },
      {
        "id": "v13_077",
        "front": "A ___ policy covers losses during travel.",
        "back": "travel insurance\n\nSeguro de viaje"
      },
      {
        "id": "v13_078",
        "front": "A ___ converts plug shapes for different countries.",
        "back": "travel adapter\n\nAdaptador de enchufe"
      },
      {
        "id": "v13_079",
        "front": "___ is the time at your destination.",
        "back": "Local time\n\nHora local"
      },
      {
        "id": "v13_080",
        "front": "A ___ is a region with a uniform standard time.",
        "back": "time zone\n\nZona horaria"
      },
      {
        "id": "v13_081",
        "front": "To be ___ means to miss home while travelling.",
        "back": "homesick\n\nTener morriña / echar de menos el hogar"
      },
      {
        "id": "v13_082",
        "front": "Culture ___ is disorientation when experiencing an unfamiliar culture.",
        "back": "shock\n\nChoque cultural"
      },
      {
        "id": "v13_083",
        "front": "To ___ means to lose your way.",
        "back": "get lost\n\nPerderse"
      },
      {
        "id": "v13_084",
        "front": "To ___ means to request help finding a place.",
        "back": "ask for directions\n\nPedir indicaciones / preguntar el camino"
      }
    ]
  },
  {
    "section": 14,
    "title": "Dinero y Banca",
    "cards": [
      {
        "id": "v14_001",
        "front": "A ___ is where you keep money with a bank.",
        "back": "bank account\n\nCuenta bancaria"
      },
      {
        "id": "v14_002",
        "front": "A ___ (BrE) / ___ (AmE) is used for daily transactions.",
        "back": "current account / checking account\n\nCuenta corriente"
      },
      {
        "id": "v14_003",
        "front": "A ___ earns interest on money stored.",
        "back": "savings account\n\nCuenta de ahorros"
      },
      {
        "id": "v14_004",
        "front": "A ___ is shared between two or more people.",
        "back": "joint account\n\nCuenta conjunta / compartida"
      },
      {
        "id": "v14_005",
        "front": "A ___ is the amount of money in an account.",
        "back": "balance\n\nSaldo"
      },
      {
        "id": "v14_006",
        "front": "An ___ is when you spend more than you have in your account.",
        "back": "overdraft\n\nDescubierto bancario"
      },
      {
        "id": "v14_007",
        "front": "An ___ is the percentage charged or paid on money.",
        "back": "interest rate\n\nTipo de interés"
      },
      {
        "id": "v14_008",
        "front": "A ___ is money borrowed that must be repaid with interest.",
        "back": "loan\n\nPréstamo"
      },
      {
        "id": "v14_009",
        "front": "A ___ is a loan used to buy property.",
        "back": "mortgage\n\nHipoteca"
      },
      {
        "id": "v14_010",
        "front": "A ___ allows you to spend money on credit and repay later.",
        "back": "credit card\n\nTarjeta de crédito"
      },
      {
        "id": "v14_011",
        "front": "A ___ deducts money directly from your account.",
        "back": "debit card\n\nTarjeta de débito"
      },
      {
        "id": "v14_012",
        "front": "A ___ is made by tapping the card or phone.",
        "back": "contactless payment\n\nPago sin contacto / contactless"
      },
      {
        "id": "v14_013",
        "front": "A ___ (Personal Identification Number) is a secret code for card payments.",
        "back": "PIN\n\nPIN / número secreto"
      },
      {
        "id": "v14_014",
        "front": "A ___ moves money between accounts.",
        "back": "bank transfer\n\nTransferencia bancaria"
      },
      {
        "id": "v14_015",
        "front": "A ___ is an automatic regular payment of a fixed amount.",
        "back": "standing order\n\nDomiciliación fija / orden permanente"
      },
      {
        "id": "v14_016",
        "front": "A ___ is an automatic payment authorised by the account holder.",
        "back": "direct debit\n\nDomiciliación bancaria / débito directo"
      },
      {
        "id": "v14_017",
        "front": "A ___ shows all transactions in a period.",
        "back": "statement\n\nExtracto bancario"
      },
      {
        "id": "v14_018",
        "front": "A ___ is proof of a transaction.",
        "back": "receipt\n\nRecibo / justificante de pago"
      },
      {
        "id": "v14_019",
        "front": "___ is physical money — coins and notes.",
        "back": "Cash\n\nEfectivo / dinero en metálico"
      },
      {
        "id": "v14_020",
        "front": "A ___ is a small metal piece of currency.",
        "back": "coin\n\nMoneda"
      },
      {
        "id": "v14_021",
        "front": "A ___ (BrE) / ___ (AmE) is a paper piece of currency.",
        "back": "note / bill\n\nBillete"
      },
      {
        "id": "v14_022",
        "front": "An ___ / ___ dispenses cash.",
        "back": "ATM / cash machine\n\nCajero automático"
      },
      {
        "id": "v14_023",
        "front": "To ___ money means to take it out of an account.",
        "back": "withdraw\n\nRetirar / sacar dinero"
      },
      {
        "id": "v14_024",
        "front": "To ___ money means to put it into an account.",
        "back": "deposit\n\nIngresar / depositar dinero"
      },
      {
        "id": "v14_025",
        "front": "To ___ money means to move it between accounts.",
        "back": "transfer\n\nTransferir dinero"
      },
      {
        "id": "v14_026",
        "front": "To ___ means to use a debit or credit card.",
        "back": "pay by card\n\nPagar con tarjeta"
      },
      {
        "id": "v14_027",
        "front": "To ___ means to split the bill equally.",
        "back": "go Dutch\n\nPagar a medias / dividir la cuenta"
      },
      {
        "id": "v14_028",
        "front": "To ___ means to divide payment between people.",
        "back": "split the bill\n\nDividir la cuenta"
      },
      {
        "id": "v14_029",
        "front": "___ is money owed to someone.",
        "back": "Debt\n\nDeuda"
      },
      {
        "id": "v14_030",
        "front": "To be ___ means to owe money.",
        "back": "in debt\n\nEstar endeudado"
      },
      {
        "id": "v14_031",
        "front": "To be ___ means to have a negative bank balance.",
        "back": "in the red\n\nEstar en números rojos"
      },
      {
        "id": "v14_032",
        "front": "To be ___ means to have a positive bank balance.",
        "back": "in the black\n\nEstar en positivo"
      },
      {
        "id": "v14_033",
        "front": "___ are money set aside for the future.",
        "back": "Savings\n\nAhorros"
      },
      {
        "id": "v14_034",
        "front": "To ___ means to accumulate money over time for something.",
        "back": "save up\n\nAhorrar (para algo)"
      },
      {
        "id": "v14_035",
        "front": "A ___ is a plan for spending and saving money.",
        "back": "budget\n\nPresupuesto"
      },
      {
        "id": "v14_036",
        "front": "To ___ means to plan and manage your money carefully.",
        "back": "budget\n\nPresupuestar / gestionar el dinero"
      },
      {
        "id": "v14_037",
        "front": "___ / ___ is money spent.",
        "back": "Expenditure / expenses\n\nGastos / desembolsos"
      },
      {
        "id": "v14_038",
        "front": "___ is money received.",
        "back": "Income\n\nIngresos"
      },
      {
        "id": "v14_039",
        "front": "___ is earnings after tax and deductions.",
        "back": "Net income\n\nIngresos netos / sueldo neto"
      },
      {
        "id": "v14_040",
        "front": "___ is earnings before tax.",
        "back": "Gross income\n\nIngresos brutos / sueldo bruto"
      },
      {
        "id": "v14_041",
        "front": "___ is money paid to the government.",
        "back": "Tax\n\nImpuesto"
      },
      {
        "id": "v14_042",
        "front": "___ (Value Added Tax) is a consumption tax added to prices.",
        "back": "VAT\n\nIVA"
      },
      {
        "id": "v14_043",
        "front": "A ___ is a form declaring your income and tax owed.",
        "back": "tax return\n\nDeclaración de la renta"
      },
      {
        "id": "v14_044",
        "front": "A ___ is a financial penalty for breaking a rule.",
        "back": "fine\n\nMulta"
      },
      {
        "id": "v14_045",
        "front": "A ___ is money returned after a purchase.",
        "back": "refund\n\nReembolso / devolución"
      },
      {
        "id": "v14_046",
        "front": "A ___ is a reduction in price.",
        "back": "discount\n\nDescuento"
      },
      {
        "id": "v14_047",
        "front": "A ___ / ___ is a document giving a discount or free item.",
        "back": "voucher / coupon\n\nVale / cupón descuento"
      },
      {
        "id": "v14_048",
        "front": "A ___ is a partial refund of money paid.",
        "back": "rebate\n\nReembolso parcial / devolución"
      },
      {
        "id": "v14_049",
        "front": "___ is the general rise in prices over time.",
        "back": "Inflation\n\nInflación"
      },
      {
        "id": "v14_050",
        "front": "___ is a general fall in prices.",
        "back": "Deflation\n\nDeflación"
      },
      {
        "id": "v14_051",
        "front": "The ___ is the amount of money needed for basic needs.",
        "back": "cost of living\n\nCoste de vida"
      },
      {
        "id": "v14_052",
        "front": "___ means priced within reach for most people.",
        "back": "Affordable\n\nAsequible"
      },
      {
        "id": "v14_053",
        "front": "___ means costing a lot.",
        "back": "Expensive\n\nCaro"
      },
      {
        "id": "v14_054",
        "front": "___ / ___ means low in cost.",
        "back": "Cheap / inexpensive\n\nBarato"
      },
      {
        "id": "v14_055",
        "front": "___ means costing more than it is worth.",
        "back": "Overpriced\n\nCaro / con precio abusivo"
      },
      {
        "id": "v14_056",
        "front": "___ means good quality relative to price.",
        "back": "Value for money\n\nBuena relación calidad-precio"
      },
      {
        "id": "v14_057",
        "front": "To ___ something means to have enough money for it.",
        "back": "afford\n\nPermitirse algo / poder pagarlo"
      },
      {
        "id": "v14_058",
        "front": "To ___ means to spend more than planned.",
        "back": "overspend\n\nGastar de más"
      },
      {
        "id": "v14_059",
        "front": "To ___ means to spend less than planned.",
        "back": "underspend\n\nGastar de menos / gastar menos de lo previsto"
      },
      {
        "id": "v14_060",
        "front": "To ___ means to put money into something expecting a return.",
        "back": "invest\n\nInvertir"
      },
      {
        "id": "v14_061",
        "front": "An ___ is money put into something to generate profit.",
        "back": "investment\n\nInversión"
      },
      {
        "id": "v14_062",
        "front": "___ (ROI) is the profit made relative to the cost.",
        "back": "Return on investment\n\nRetorno de la inversión"
      },
      {
        "id": "v14_063",
        "front": "___ / ___ are ownership units in a company.",
        "back": "Shares / stocks\n\nAcciones (bolsa)"
      },
      {
        "id": "v14_064",
        "front": "A ___ is a payment made to shareholders from company profits.",
        "back": "dividend\n\nDividendo"
      },
      {
        "id": "v14_065",
        "front": "The ___ is where shares are bought and sold.",
        "back": "stock market\n\nBolsa de valores"
      },
      {
        "id": "v14_066",
        "front": "A ___ is a loan made to a company or government that pays interest.",
        "back": "bond\n\nBono (financiero)"
      },
      {
        "id": "v14_067",
        "front": "A ___ is a fund providing income in retirement.",
        "back": "pension\n\nPensión / plan de jubilación"
      },
      {
        "id": "v14_068",
        "front": "___ protects against financial loss.",
        "back": "Insurance\n\nSeguro"
      },
      {
        "id": "v14_069",
        "front": "A ___ is the regular payment made for insurance.",
        "back": "premium\n\nPrima (de seguro)"
      },
      {
        "id": "v14_070",
        "front": "A ___ is a request for payment from an insurance policy.",
        "back": "claim\n\nReclamación / siniestro"
      },
      {
        "id": "v14_071",
        "front": "A ___ is the contract of insurance.",
        "back": "policy\n\nPóliza de seguro"
      },
      {
        "id": "v14_072",
        "front": "___ is the legal state of being unable to repay debts.",
        "back": "Bankruptcy\n\nQuiebra / bancarrota"
      },
      {
        "id": "v14_073",
        "front": "To go ___ means to be declared legally unable to pay debts.",
        "back": "bankrupt\n\nDeclararse en quiebra"
      },
      {
        "id": "v14_074",
        "front": "A ___ is financial help given to a failing company or bank.",
        "back": "bailout\n\nRescate financiero"
      },
      {
        "id": "v14_075",
        "front": "___ refers to government spending cuts to reduce debt.",
        "back": "Austerity\n\nAusteridad"
      },
      {
        "id": "v14_076",
        "front": "A ___ is a period of negative economic growth.",
        "back": "recession\n\nRecesión"
      },
      {
        "id": "v14_077",
        "front": "___ (Gross Domestic Product) measures the economic output of a country.",
        "back": "GDP\n\nPIB (Producto Interior Bruto)"
      }
    ]
  },
  {
    "section": 15,
    "title": "Personalidad",
    "cards": [
      {
        "id": "v15_001",
        "front": "Someone ___ has strong desire to succeed.",
        "back": "ambitious\n\nAmbicioso"
      },
      {
        "id": "v15_002",
        "front": "Someone ___ is highly motivated to achieve goals.",
        "back": "driven\n\nCon mucha determinación / motivado"
      },
      {
        "id": "v15_003",
        "front": "Someone ___ refuses to give up.",
        "back": "determined\n\nDecidido / determinado"
      },
      {
        "id": "v15_004",
        "front": "Someone ___ keeps going despite obstacles.",
        "back": "persistent\n\nPersistente / tenaz"
      },
      {
        "id": "v15_005",
        "front": "Someone ___ recovers quickly from difficulties.",
        "back": "resilient\n\nResiliente"
      },
      {
        "id": "v15_006",
        "front": "Someone ___ adjusts well to new situations.",
        "back": "adaptable\n\nAdaptable"
      },
      {
        "id": "v15_007",
        "front": "Someone ___ finds clever solutions with what they have.",
        "back": "resourceful\n\nIngenioso / con recursos"
      },
      {
        "id": "v15_008",
        "front": "Someone ___ generates original ideas.",
        "back": "creative\n\nCreativo"
      },
      {
        "id": "v15_009",
        "front": "Someone ___ has a rich and active imagination.",
        "back": "imaginative\n\nImaginativo"
      },
      {
        "id": "v15_010",
        "front": "Someone ___ introduces new ideas or methods.",
        "back": "innovative\n\nInnovador"
      },
      {
        "id": "v15_011",
        "front": "Someone ___ breaks problems into parts to understand them.",
        "back": "analytical\n\nAnalítico"
      },
      {
        "id": "v15_012",
        "front": "Someone ___ reasons clearly and systematically.",
        "back": "logical\n\nLógico / racional"
      },
      {
        "id": "v15_013",
        "front": "Someone ___ works in a systematic and organised way.",
        "back": "methodical\n\nMetódico / ordenado"
      },
      {
        "id": "v15_014",
        "front": "Someone ___ pays close attention to small things.",
        "back": "detail-oriented\n\nDetallista / minucioso"
      },
      {
        "id": "v15_015",
        "front": "Someone ___ keeps things structured and in order.",
        "back": "organised\n\nOrganizado"
      },
      {
        "id": "v15_016",
        "front": "Someone ___ can be trusted to do what they say.",
        "back": "reliable\n\nFiable / de confianza"
      },
      {
        "id": "v15_017",
        "front": "Someone ___ can be trusted with important tasks.",
        "back": "responsible\n\nResponsable"
      },
      {
        "id": "v15_018",
        "front": "Someone ___ controls their behaviour and impulses.",
        "back": "disciplined\n\nDisciplinado"
      },
      {
        "id": "v15_019",
        "front": "Someone ___ waits calmly without complaining.",
        "back": "patient\n\nPaciente"
      },
      {
        "id": "v15_020",
        "front": "Someone ___ finds it hard to wait or tolerate delays.",
        "back": "impatient\n\nImpaciente"
      },
      {
        "id": "v15_021",
        "front": "Someone ___ arrives on time.",
        "back": "punctual\n\nPuntual"
      },
      {
        "id": "v15_022",
        "front": "Someone ___ / ___ puts in consistent effort.",
        "back": "hardworking / diligent\n\nTrabajador / diligente"
      },
      {
        "id": "v15_023",
        "front": "Someone ___ avoids work or effort.",
        "back": "lazy\n\nVago / perezoso"
      },
      {
        "id": "v15_024",
        "front": "Someone ___ acts in advance rather than reacting.",
        "back": "proactive\n\nProactivo"
      },
      {
        "id": "v15_025",
        "front": "Someone ___ pushes themselves without external encouragement.",
        "back": "self-motivated\n\nAutomotivado"
      },
      {
        "id": "v15_026",
        "front": "Someone ___ believes in their own ability.",
        "back": "confident\n\nSeguro de sí mismo / confiado"
      },
      {
        "id": "v15_027",
        "front": "Someone ___ thinks too highly of themselves.",
        "back": "arrogant\n\nArrogante / engreído"
      },
      {
        "id": "v15_028",
        "front": "Someone ___ doesn't boast about their achievements.",
        "back": "humble\n\nHumilde"
      },
      {
        "id": "v15_029",
        "front": "Someone ___ downplays their own abilities.",
        "back": "modest\n\nModesto"
      },
      {
        "id": "v15_030",
        "front": "Someone ___ expresses opinions clearly and confidently.",
        "back": "assertive\n\nAsertivo"
      },
      {
        "id": "v15_031",
        "front": "Someone ___ avoids conflict and rarely asserts themselves.",
        "back": "passive\n\nPasivo / que no se impone"
      },
      {
        "id": "v15_032",
        "front": "Someone ___ behaves in a forceful or hostile way.",
        "back": "aggressive\n\nAgresivo"
      },
      {
        "id": "v15_033",
        "front": "Someone ___ tends to control situations or people.",
        "back": "dominant\n\nDominante"
      },
      {
        "id": "v15_034",
        "front": "Someone ___ always wants to win.",
        "back": "competitive\n\nCompetitivo"
      },
      {
        "id": "v15_035",
        "front": "Someone ___ works well with others.",
        "back": "cooperative\n\nCooperativo / colaborador"
      },
      {
        "id": "v15_036",
        "front": "Someone ___ enjoys being with people.",
        "back": "sociable\n\nSociable"
      },
      {
        "id": "v15_037",
        "front": "Someone ___ is confident and comfortable meeting new people.",
        "back": "outgoing\n\nExtrovertido / sociable"
      },
      {
        "id": "v15_038",
        "front": "Someone ___ gains energy from being around others.",
        "back": "extroverted\n\nExtrovertido"
      },
      {
        "id": "v15_039",
        "front": "Someone ___ prefers solitude and finds crowds draining.",
        "back": "introverted\n\nIntrovertido"
      },
      {
        "id": "v15_040",
        "front": "Someone ___ feels nervous or uncomfortable around others.",
        "back": "shy\n\nTímido"
      },
      {
        "id": "v15_041",
        "front": "Someone ___ keeps feelings to themselves.",
        "back": "reserved\n\nReservado / discreto"
      },
      {
        "id": "v15_042",
        "front": "Someone ___ talks a lot.",
        "back": "chatty\n\nHablador / charlatán"
      },
      {
        "id": "v15_043",
        "front": "Someone ___ loves to talk.",
        "back": "talkative\n\nMuy hablador"
      },
      {
        "id": "v15_044",
        "front": "Someone ___ says little and prefers silence.",
        "back": "quiet\n\nCallado / tranquilo"
      },
      {
        "id": "v15_045",
        "front": "Someone ___ is warm and easy to get on with.",
        "back": "friendly\n\nAmable / simpático"
      },
      {
        "id": "v15_046",
        "front": "Someone ___ is kind and emotionally welcoming.",
        "back": "warm\n\nCálido / cercano"
      },
      {
        "id": "v15_047",
        "front": "Someone ___ is emotionally distant.",
        "back": "cold\n\nFrío / distante"
      },
      {
        "id": "v15_048",
        "front": "Someone ___ makes others feel at home.",
        "back": "welcoming\n\nAcogedor"
      },
      {
        "id": "v15_049",
        "front": "Someone ___ is easy to talk to.",
        "back": "approachable\n\nAccesible / de trato fácil"
      },
      {
        "id": "v15_050",
        "front": "Someone ___ understands and shares the feelings of others.",
        "back": "empathetic\n\nEmpático"
      },
      {
        "id": "v15_051",
        "front": "Someone ___ shows concern for the suffering of others.",
        "back": "compassionate\n\nCompasivo"
      },
      {
        "id": "v15_052",
        "front": "Someone ___ shows concern for others' wellbeing.",
        "back": "caring\n\nAtento / que se preocupa por los demás"
      },
      {
        "id": "v15_053",
        "front": "Someone ___ thinks mainly of themselves.",
        "back": "selfish\n\nEgoísta"
      },
      {
        "id": "v15_054",
        "front": "Someone ___ gives freely without expecting much in return.",
        "back": "generous\n\nGeneroso"
      },
      {
        "id": "v15_055",
        "front": "Someone ___ / ___ is unwilling to spend or give.",
        "back": "stingy / mean\n\nTacaño / avariento"
      },
      {
        "id": "v15_056",
        "front": "Someone ___ considers others' feelings and needs.",
        "back": "thoughtful\n\nConsiderado / atento"
      },
      {
        "id": "v15_057",
        "front": "Someone ___ doesn't think about how their actions affect others.",
        "back": "inconsiderate\n\nDesconsiderado"
      },
      {
        "id": "v15_058",
        "front": "Someone ___ tells the truth.",
        "back": "honest\n\nHonesto"
      },
      {
        "id": "v15_059",
        "front": "Someone ___ is not truthful.",
        "back": "dishonest\n\nDeshonesto"
      },
      {
        "id": "v15_060",
        "front": "Someone ___ can be trusted.",
        "back": "trustworthy\n\nDe confianza / fiable"
      },
      {
        "id": "v15_061",
        "front": "Someone ___ is dishonest and misleading.",
        "back": "deceitful\n\nEngañoso / mentiroso"
      },
      {
        "id": "v15_062",
        "front": "Someone ___ is direct and honest.",
        "back": "straightforward\n\nDirecto / sin rodeos"
      },
      {
        "id": "v15_063",
        "front": "Someone ___ avoids saying things that might offend.",
        "back": "tactful\n\nDiplomático / con tacto"
      },
      {
        "id": "v15_064",
        "front": "Someone ___ says exactly what they think, possibly rudely.",
        "back": "blunt\n\nDirecto al punto / brusco"
      },
      {
        "id": "v15_065",
        "front": "Someone ___ handles sensitive situations with skill.",
        "back": "diplomatic\n\nDiplomático"
      },
      {
        "id": "v15_066",
        "front": "Someone ___ is impolite or offensive.",
        "back": "rude\n\nMaleducado / grosero"
      },
      {
        "id": "v15_067",
        "front": "Someone ___ uses good manners.",
        "back": "polite\n\nEducado / cortés"
      },
      {
        "id": "v15_068",
        "front": "Someone ___ has an attractive and pleasing manner.",
        "back": "charming\n\nEncantador"
      },
      {
        "id": "v15_069",
        "front": "Someone ___ has a natural ability to attract and inspire.",
        "back": "charismatic\n\nCarismático"
      },
      {
        "id": "v15_070",
        "front": "Someone ___ is clever and funny.",
        "back": "witty\n\nIngenioso / agudo"
      },
      {
        "id": "v15_071",
        "front": "Someone ___ uses irony to mock or criticise.",
        "back": "sarcastic\n\nSarcástico"
      },
      {
        "id": "v15_072",
        "front": "Someone ___ believes people are motivated by self-interest.",
        "back": "cynical\n\nCínico"
      },
      {
        "id": "v15_073",
        "front": "Someone ___ expects good outcomes.",
        "back": "optimistic\n\nOptimista"
      },
      {
        "id": "v15_074",
        "front": "Someone ___ expects bad outcomes.",
        "back": "pessimistic\n\nPesimista"
      },
      {
        "id": "v15_075",
        "front": "Someone ___ sees things as they are.",
        "back": "realistic\n\nRealista"
      },
      {
        "id": "v15_076",
        "front": "Someone ___ believes in the possibility of perfection.",
        "back": "idealistic\n\nIdealista"
      },
      {
        "id": "v15_077",
        "front": "Someone ___ behaves in an adult, sensible way.",
        "back": "mature\n\nMaduro"
      },
      {
        "id": "v15_078",
        "front": "Someone ___ behaves in a childish way.",
        "back": "immature\n\nInmaduro"
      },
      {
        "id": "v15_079",
        "front": "Someone ___ makes good, practical decisions.",
        "back": "sensible\n\nSensato / con sentido común"
      },
      {
        "id": "v15_080",
        "front": "Someone ___ is easily affected by others' emotions or criticism.",
        "back": "sensitive\n\nSensible / susceptible"
      },
      {
        "id": "v15_081",
        "front": "Someone ___ shows feelings openly and strongly.",
        "back": "emotional\n\nEmocional"
      },
      {
        "id": "v15_082",
        "front": "Someone ___ uses reason rather than emotion.",
        "back": "rational\n\nRacional"
      },
      {
        "id": "v15_083",
        "front": "Someone ___ acts without thinking first.",
        "back": "impulsive\n\nImpulsivo"
      },
      {
        "id": "v15_084",
        "front": "Someone ___ avoids taking risks.",
        "back": "cautious\n\nCauteloso / prudente"
      },
      {
        "id": "v15_085",
        "front": "Someone ___ takes unnecessary risks.",
        "back": "reckless\n\nImprudente / temerario"
      },
      {
        "id": "v15_086",
        "front": "Someone ___ / ___ faces danger or difficulty without fear.",
        "back": "brave / courageous\n\nValiente"
      },
      {
        "id": "v15_087",
        "front": "Someone ___ lacks courage.",
        "back": "cowardly\n\nCobarde"
      },
      {
        "id": "v15_088",
        "front": "Someone ___ doesn't rely on others.",
        "back": "independent\n\nIndependiente"
      },
      {
        "id": "v15_089",
        "front": "Someone ___ relies heavily on others.",
        "back": "dependent\n\nDependiente"
      },
      {
        "id": "v15_090",
        "front": "Someone ___ accepts new ideas willingly.",
        "back": "open-minded\n\nDe mente abierta / sin prejuicios"
      },
      {
        "id": "v15_091",
        "front": "Someone ___ is unwilling to consider new ideas.",
        "back": "narrow-minded\n\nCerrado de mente / con prejuicios"
      },
      {
        "id": "v15_092",
        "front": "Someone ___ adapts easily to change.",
        "back": "flexible\n\nFlexible"
      },
      {
        "id": "v15_093",
        "front": "Someone ___ / ___ refuses to change their mind.",
        "back": "stubborn / pig-headed\n\nTerco / cabezota"
      },
      {
        "id": "v15_094",
        "front": "Someone ___ struggles to make decisions.",
        "back": "indecisive\n\nIndeciso"
      },
      {
        "id": "v15_095",
        "front": "Someone ___ makes quick clear decisions.",
        "back": "decisive\n\nDecidido / que toma decisiones con firmeza"
      },
      {
        "id": "v15_096",
        "front": "Someone ___ acts on impulse without planning.",
        "back": "spontaneous\n\nEspontáneo"
      },
      {
        "id": "v15_097",
        "front": "Someone ___ always acts in expected ways.",
        "back": "predictable\n\nPredecible"
      },
      {
        "id": "v15_098",
        "front": "Someone ___ is relaxed and not easily worried.",
        "back": "laid-back\n\nTranquilo / relajado"
      },
      {
        "id": "v15_099",
        "front": "Someone ___ is tense and easily upset.",
        "back": "uptight\n\nTenso / estrecho de miras"
      },
      {
        "id": "v15_100",
        "front": "Someone ___ is relaxed and tolerant.",
        "back": "easy-going\n\nTranquilo / que se lo toma con calma"
      },
      {
        "id": "v15_101",
        "front": "Someone ___ / ___ is nervous and tense.",
        "back": "high-strung / highly strung\n\nNervioso / tenso por naturaleza"
      },
      {
        "id": "v15_102",
        "front": "Someone ___ / ___ is too curious about others' business.",
        "back": "nosy / nosey\n\nEntrometido / cotilla"
      },
      {
        "id": "v15_103",
        "front": "Someone ___ loves to talk about other people's private lives.",
        "back": "gossipy\n\nChismoso"
      },
      {
        "id": "v15_104",
        "front": "Someone ___ keeps personal matters to themselves.",
        "back": "private\n\nReservado / que guarda para sí"
      },
      {
        "id": "v15_105",
        "front": "Someone ___ wants to be the centre of attention.",
        "back": "attention-seeking\n\nQue busca atención"
      },
      {
        "id": "v15_106",
        "front": "Someone ___ is practical and unpretentious.",
        "back": "down-to-earth\n\nCon los pies en la tierra"
      },
      {
        "id": "v15_107",
        "front": "Someone ___ tries to appear more important than they are.",
        "back": "pretentious\n\nPretencioso / afectado"
      },
      {
        "id": "v15_108",
        "front": "Someone ___ is authentic and sincere.",
        "back": "genuine\n\nGenuino / auténtico"
      },
      {
        "id": "v15_109",
        "front": "Someone ___ says one thing but does another.",
        "back": "two-faced\n\nFalso / con doble cara"
      },
      {
        "id": "v15_110",
        "front": "Someone ___ controls others for their own benefit.",
        "back": "manipulative\n\nManipulador"
      },
      {
        "id": "v15_111",
        "front": "Someone ___ expresses hostility indirectly.",
        "back": "passive-aggressive\n\nPasivo-agresivo"
      },
      {
        "id": "v15_112",
        "front": "Someone ___ understands their own emotions and behaviour.",
        "back": "self-aware\n\nCon autoconocimiento / autocrítico"
      },
      {
        "id": "v15_113",
        "front": "Someone ___ has an excessive need for admiration.",
        "back": "narcissistic\n\nNarcisista"
      }
    ]
  },
  {
    "section": 16,
    "title": "Restaurante",
    "cards": [
      {
        "id": "v16_001",
        "front": "A ___ lists the food and drinks available.",
        "back": "menu\n\nMenú / carta"
      },
      {
        "id": "v16_002",
        "front": "A ___ / ___ is a fixed selection at a set price.",
        "back": "set menu / prix fixe\n\nMenú del día / menú fijo"
      },
      {
        "id": "v16_003",
        "front": "The ___ (BrE) / ___ (AmE) is the first course.",
        "back": "starter / appetizer\n\nEntrante / primer plato"
      },
      {
        "id": "v16_004",
        "front": "The ___ / ___ (AmE) is the central dish.",
        "back": "main course / entrée\n\nPlato principal / segundo"
      },
      {
        "id": "v16_005",
        "front": "The ___ is the sweet final course.",
        "back": "dessert\n\nPostre"
      },
      {
        "id": "v16_006",
        "front": "The ___ accompanies the main course.",
        "back": "side dish\n\nGuarnición / acompañamiento"
      },
      {
        "id": "v16_007",
        "front": "A ___ is a dish only available that day.",
        "back": "daily special\n\nPlato del día"
      },
      {
        "id": "v16_008",
        "front": "The ___ (BrE) / ___ (AmE) is the total amount to pay.",
        "back": "bill / check\n\nCuenta"
      },
      {
        "id": "v16_009",
        "front": "A ___ is extra money given to the waiter for good service.",
        "back": "tip\n\nPropina"
      },
      {
        "id": "v16_010",
        "front": "___ is a mandatory amount added to the bill.",
        "back": "Service charge\n\nCargo por servicio"
      },
      {
        "id": "v16_011",
        "front": "A ___ / ___ secures a table in advance.",
        "back": "reservation / booking\n\nReserva"
      },
      {
        "id": "v16_012",
        "front": "A ___ / ___ takes orders and serves food.",
        "back": "waiter / server\n\nCamarero"
      },
      {
        "id": "v16_013",
        "front": "A ___ / ___ manages the dining room and seating.",
        "back": "host / maitre d'\n\nMaître"
      },
      {
        "id": "v16_014",
        "front": "The ___ is where food is prepared.",
        "back": "kitchen\n\nCocina"
      },
      {
        "id": "v16_015",
        "front": "A ___ is the person who cooks professionally.",
        "back": "chef\n\nChef / cocinero"
      },
      {
        "id": "v16_016",
        "front": "A ___ advises on wine.",
        "back": "sommelier\n\nSumiller"
      },
      {
        "id": "v16_017",
        "front": "A ___ is a reservation for two people.",
        "back": "table for two\n\nMesa para dos"
      },
      {
        "id": "v16_018",
        "front": "A ___ is a raised seat for young children.",
        "back": "high chair\n\nTrona"
      },
      {
        "id": "v16_019",
        "front": "A ___ is a seat with fixed benches on both sides.",
        "back": "booth\n\nReservado / booth"
      },
      {
        "id": "v16_020",
        "front": "A ___ / ___ is outside.",
        "back": "terrace / outdoor seating\n\nTerraza / exterior"
      },
      {
        "id": "v16_021",
        "front": "To ___ means to tell the waiter what you want.",
        "back": "order\n\nPedir / hacer un pedido"
      },
      {
        "id": "v16_022",
        "front": "To ___ means to suggest a dish.",
        "back": "recommend\n\nRecomendar"
      },
      {
        "id": "v16_023",
        "front": "To ___ means to tell staff you are unhappy with something.",
        "back": "complain\n\nQuejarse / reclamar"
      },
      {
        "id": "v16_024",
        "front": "To ___ a dish means to return it because something is wrong.",
        "back": "send back\n\nDevolver un plato"
      },
      {
        "id": "v16_025",
        "front": "To ___ means to divide the total between diners.",
        "back": "split the bill\n\nDividir la cuenta"
      },
      {
        "id": "v16_026",
        "front": "To ___ means to pay for their meal.",
        "back": "treat someone\n\nInvitar a alguien (pagar tú)"
      },
      {
        "id": "v16_027",
        "front": "___ food contains no gluten — safe for coeliacs.",
        "back": "Gluten-free\n\nSin gluten"
      },
      {
        "id": "v16_028",
        "front": "___ food contains no milk products.",
        "back": "Dairy-free\n\nSin lácteos"
      },
      {
        "id": "v16_029",
        "front": "___ food contains no animal products.",
        "back": "Vegan\n\nVegano"
      },
      {
        "id": "v16_030",
        "front": "___ food contains no meat or fish.",
        "back": "Vegetarian\n\nVegetariano"
      },
      {
        "id": "v16_031",
        "front": "___ food is prepared according to Islamic law.",
        "back": "Halal\n\nHalal"
      },
      {
        "id": "v16_032",
        "front": "___ food is prepared according to Jewish law.",
        "back": "Kosher\n\nKosher"
      },
      {
        "id": "v16_033",
        "front": "A ___ is an immune reaction to a specific ingredient.",
        "back": "food allergy\n\nAlergia alimentaria"
      },
      {
        "id": "v16_034",
        "front": "A ___ causes digestive discomfort from a food.",
        "back": "food intolerance\n\nIntolerancia alimentaria"
      },
      {
        "id": "v16_035",
        "front": "___ food has a hot burning flavour from chillies or spices.",
        "back": "Spicy\n\nPicante"
      },
      {
        "id": "v16_036",
        "front": "___ food has little heat or strong flavour.",
        "back": "Mild\n\nSuave / sin picante"
      },
      {
        "id": "v16_037",
        "front": "___ food has a salt or umami flavour (not sweet).",
        "back": "Savoury\n\nSalado / sabroso (no dulce)"
      },
      {
        "id": "v16_038",
        "front": "___ food lacks flavour.",
        "back": "Bland\n\nSoso / sin sabor"
      },
      {
        "id": "v16_039",
        "front": "___ food has an intense heavy flavour.",
        "back": "Rich\n\nRico / intenso (con mucho sabor)"
      },
      {
        "id": "v16_040",
        "front": "___ / ___ food has too much oil or fat.",
        "back": "Greasy / oily\n\nGrasiento / aceitoso"
      },
      {
        "id": "v16_041",
        "front": "___ food makes a sound when bitten.",
        "back": "Crunchy\n\nCrujiente"
      },
      {
        "id": "v16_042",
        "front": "___ food has a thin dry outer layer.",
        "back": "Crispy\n\nCrujiente (fino y seco)"
      },
      {
        "id": "v16_043",
        "front": "___ meat is easy to chew.",
        "back": "Tender\n\nTierno (carne)"
      },
      {
        "id": "v16_044",
        "front": "___ meat is hard to chew.",
        "back": "Tough\n\nDuro / correoso (carne)"
      },
      {
        "id": "v16_045",
        "front": "___ meat or fruit has lots of flavour-rich liquid.",
        "back": "Juicy\n\nJugoso"
      },
      {
        "id": "v16_046",
        "front": "___ food lacks moisture.",
        "back": "Dry\n\nSeco / sin jugo"
      },
      {
        "id": "v16_047",
        "front": "___ food has a smooth thick rich texture.",
        "back": "Creamy\n\nCremoso"
      },
      {
        "id": "v16_048",
        "front": "___ food has no lumps.",
        "back": "Smooth\n\nLiso / suave (textura)"
      },
      {
        "id": "v16_049",
        "front": "___ food has uneven pieces.",
        "back": "Lumpy\n\nCon grumos"
      },
      {
        "id": "v16_050",
        "front": "___ food is heavy and filling — hard to digest.",
        "back": "Stodgy\n\nPesado / denso (comida)"
      },
      {
        "id": "v16_051",
        "front": "___ food or drink is light and revitalising.",
        "back": "Refreshing\n\nRefrescante"
      },
      {
        "id": "v16_052",
        "front": "___ taste is sharp and often unpleasant.",
        "back": "Bitter\n\nAmargo"
      },
      {
        "id": "v16_053",
        "front": "___ taste is acidic like lemon or vinegar.",
        "back": "Sour\n\nÁcido / agrio"
      },
      {
        "id": "v16_054",
        "front": "___ taste comes from sugar.",
        "back": "Sweet\n\nDulce"
      },
      {
        "id": "v16_055",
        "front": "___ taste comes from salt.",
        "back": "Salty\n\nSalado"
      },
      {
        "id": "v16_056",
        "front": "___ is a savoury fifth taste found in meat, cheese and soy.",
        "back": "Umami\n\nUmami (quinto sabor)"
      },
      {
        "id": "v16_057",
        "front": "A ___ is a thick cut of beef.",
        "back": "steak\n\nFilete / bistec"
      },
      {
        "id": "v16_058",
        "front": "A ___ / ___ is minced meat in a bun.",
        "back": "burger / hamburger\n\nHamburguesa"
      },
      {
        "id": "v16_059",
        "front": "A ___ has three layers of bread.",
        "back": "club sandwich\n\nClub sándwich (triple)"
      },
      {
        "id": "v16_060",
        "front": "A ___ is a flatbread rolled around a filling.",
        "back": "wrap\n\nWrap / tortilla enrollada"
      },
      {
        "id": "v16_061",
        "front": "A ___ is a flat bread base with toppings.",
        "back": "pizza\n\nPizza"
      },
      {
        "id": "v16_062",
        "front": "A ___ is based on cooked pasta.",
        "back": "pasta dish\n\nPlato de pasta"
      },
      {
        "id": "v16_063",
        "front": "A ___ is a spiced sauce-based dish common in South Asian cuisine.",
        "back": "curry\n\nCurry"
      },
      {
        "id": "v16_064",
        "front": "A ___ is slow-cooked meat and vegetables in liquid.",
        "back": "stew\n\nEstofado / cocido"
      },
      {
        "id": "v16_065",
        "front": "A ___ is a liquid dish with ingredients cooked in broth.",
        "back": "soup\n\nSopa / caldo"
      },
      {
        "id": "v16_066",
        "front": "A ___ is a cold dish of raw or cooked vegetables.",
        "back": "salad\n\nEnsalada"
      },
      {
        "id": "v16_067",
        "front": "A ___ is a creamy Italian rice dish.",
        "back": "risotto\n\nRisotto"
      },
      {
        "id": "v16_068",
        "front": "A ___ is quickly cooked vegetables and protein in a wok.",
        "back": "stir-fry\n\nSalteado (estilo asiático)"
      },
      {
        "id": "v16_069",
        "front": "A ___ spread is a selection of small Spanish dishes.",
        "back": "tapas\n\nTapas"
      },
      {
        "id": "v16_070",
        "front": "A ___ is a large shared selection of food.",
        "back": "platter\n\nTabla / fuente compartida"
      },
      {
        "id": "v16_071",
        "front": "A ___ is the amount of food served.",
        "back": "portion\n\nRación / porción"
      },
      {
        "id": "v16_072",
        "front": "An ___ restaurant offers unlimited food for a fixed price.",
        "back": "all-you-can-eat\n\nBufé libre"
      },
      {
        "id": "v16_073",
        "front": "A ___ (BrE) / ___ (AmE) is food prepared to eat elsewhere.",
        "back": "takeaway / takeout\n\nPara llevar"
      },
      {
        "id": "v16_074",
        "front": "A ___ brings food to your home.",
        "back": "delivery\n\nEntrega a domicilio / delivery"
      },
      {
        "id": "v16_075",
        "front": "A ___ meal is eaten at the restaurant.",
        "back": "dine-in\n\nComer en el local"
      },
      {
        "id": "v16_076",
        "front": "___ are food remaining after a meal.",
        "back": "Leftovers\n\nSobras / restos"
      },
      {
        "id": "v16_077",
        "front": "A ___ holds leftovers to take home.",
        "back": "doggy bag\n\nBolsa para llevar las sobras"
      },
      {
        "id": "v16_078",
        "front": "A ___ is charged when you bring your own wine.",
        "back": "corkage fee\n\nCargo por descorche"
      },
      {
        "id": "v16_079",
        "front": "___ is the restaurant's own-label wine.",
        "back": "House wine\n\nVino de la casa"
      },
      {
        "id": "v16_080",
        "front": "A ___ is a glass jug for water or wine.",
        "back": "carafe\n\nJarra / garrafa"
      },
      {
        "id": "v16_081",
        "front": "___ has no bubbles.",
        "back": "Still water\n\nAgua sin gas"
      },
      {
        "id": "v16_082",
        "front": "___ has carbonation.",
        "back": "Sparkling water\n\nAgua con gas"
      },
      {
        "id": "v16_083",
        "front": "A ___ is a non-alcoholic carbonated drink.",
        "back": "soft drink\n\nRefresco"
      },
      {
        "id": "v16_084",
        "front": "A ___ is a non-alcoholic cocktail.",
        "back": "mocktail\n\nCóctel sin alcohol / mocktail"
      },
      {
        "id": "v16_085",
        "front": "An ___ is an alcoholic drink taken before a meal.",
        "back": "aperitif\n\nAperitivo (bebida)"
      },
      {
        "id": "v16_086",
        "front": "A ___ is an alcoholic drink taken after a meal.",
        "back": "digestif\n\nDigestivo (copa)"
      }
    ]
  },
  {
    "section": 17,
    "title": "Educación",
    "cards": [
      {
        "id": "v17_001",
        "front": "A ___ / ___ is for children aged 3-4.",
        "back": "nursery / preschool\n\nGuardería / preescolar"
      },
      {
        "id": "v17_002",
        "front": "___ (BrE) / ___ (AmE) is for ages 5-11.",
        "back": "Primary school / elementary school\n\nColegio / primaria"
      },
      {
        "id": "v17_003",
        "front": "___ / ___ (AmE) is for ages 11-18.",
        "back": "Secondary school / high school\n\nInstituto / secundaria"
      },
      {
        "id": "v17_004",
        "front": "A ___ (BrE) is the final two years of secondary school.",
        "back": "sixth form\n\nBachillerato / cursos post-16"
      },
      {
        "id": "v17_005",
        "front": "A ___ / ___ (AmE) is a higher education institution.",
        "back": "university / college\n\nUniversidad"
      },
      {
        "id": "v17_006",
        "front": "A ___ (BrE) offers vocational or further education.",
        "back": "college\n\nCentro de formación profesional"
      },
      {
        "id": "v17_007",
        "front": "A ___ is a school where students live on site.",
        "back": "boarding school\n\nInternado"
      },
      {
        "id": "v17_008",
        "front": "A ___ / ___ charges fees.",
        "back": "private school / independent school\n\nColegio privado / concertado"
      },
      {
        "id": "v17_009",
        "front": "A ___ (BrE) / ___ (AmE) is government-funded.",
        "back": "state school / public school\n\nColegio público"
      },
      {
        "id": "v17_010",
        "front": "A ___ is a private teacher for one-to-one instruction.",
        "back": "tutor\n\nTutor / profesor particular"
      },
      {
        "id": "v17_011",
        "front": "A ___ / ___ leads the school.",
        "back": "headteacher / principal\n\nDirector/a del colegio"
      },
      {
        "id": "v17_012",
        "front": "A ___ / ___ is a person who studies.",
        "back": "pupil / student\n\nAlumno / estudiante"
      },
      {
        "id": "v17_013",
        "front": "A ___ is someone in the same class.",
        "back": "classmate\n\nCompañero de clase"
      },
      {
        "id": "v17_014",
        "front": "A ___ (BrE) is a first-year university student.",
        "back": "fresher\n\nEstudiante de primer año (universidad)"
      },
      {
        "id": "v17_015",
        "front": "A ___ has completed their degree.",
        "back": "graduate\n\nGraduado / licenciado"
      },
      {
        "id": "v17_016",
        "front": "A ___ studies after completing a first degree.",
        "back": "postgraduate\n\nPosgraduado"
      },
      {
        "id": "v17_017",
        "front": "A ___ left school or university without finishing.",
        "back": "dropout\n\nAbandono escolar / que dejó los estudios"
      },
      {
        "id": "v17_018",
        "front": "A ___ is an area of academic study.",
        "back": "subject\n\nAsignatura / materia"
      },
      {
        "id": "v17_019",
        "front": "A ___ is the full programme of study.",
        "back": "curriculum\n\nPlan de estudios / currículo"
      },
      {
        "id": "v17_020",
        "front": "A ___ is the outline of content covered in one subject.",
        "back": "syllabus\n\nTemario / programa de la asignatura"
      },
      {
        "id": "v17_021",
        "front": "A ___ / ___ shows when each class takes place.",
        "back": "timetable / schedule\n\nHorario de clases"
      },
      {
        "id": "v17_022",
        "front": "A ___ is a division of the academic year.",
        "back": "term\n\nTrimestre / período lectivo"
      },
      {
        "id": "v17_023",
        "front": "A ___ is half the academic year — mainly in universities.",
        "back": "semester\n\nSemestre"
      },
      {
        "id": "v17_024",
        "front": "A ___ / ___ is a period of teaching.",
        "back": "lesson / class\n\nClase / lección"
      },
      {
        "id": "v17_025",
        "front": "A ___ is a formal presentation to a large group in university.",
        "back": "lecture\n\nConferencia / clase magistral"
      },
      {
        "id": "v17_026",
        "front": "A ___ is a small discussion-based university class.",
        "back": "seminar\n\nSeminario"
      },
      {
        "id": "v17_027",
        "front": "A ___ is a small group or one-to-one teaching session.",
        "back": "tutorial\n\nTutoría"
      },
      {
        "id": "v17_028",
        "front": "A ___ is a practical hands-on session.",
        "back": "workshop\n\nTaller"
      },
      {
        "id": "v17_029",
        "front": "A ___ is a supervised educational visit outside school.",
        "back": "field trip\n\nExcursión escolar"
      },
      {
        "id": "v17_030",
        "front": "___ is work set to be done outside class.",
        "back": "Homework\n\nDeberes"
      },
      {
        "id": "v17_031",
        "front": "An ___ is a piece of extended writing on a topic.",
        "back": "essay\n\nRedacción / ensayo"
      },
      {
        "id": "v17_032",
        "front": "A ___ / ___ is a long piece of original research.",
        "back": "dissertation / thesis\n\nTesis / trabajo de fin de grado o máster"
      },
      {
        "id": "v17_033",
        "front": "A ___ is assessed work done during the course, not in an exam.",
        "back": "coursework\n\nTrabajos de curso (evaluación continua)"
      },
      {
        "id": "v17_034",
        "front": "An ___ is a task set by a teacher or lecturer.",
        "back": "assignment\n\nTarea / trabajo"
      },
      {
        "id": "v17_035",
        "front": "A ___ is an extended piece of work on a specific topic.",
        "back": "project\n\nProyecto"
      },
      {
        "id": "v17_036",
        "front": "A ___ is an oral report to the class or group.",
        "back": "presentation\n\nPresentación oral"
      },
      {
        "id": "v17_037",
        "front": "An ___ / ___ is a formal test of knowledge.",
        "back": "exam / examination\n\nExamen"
      },
      {
        "id": "v17_038",
        "front": "A ___ is a practice exam before the real one.",
        "back": "mock exam\n\nSimulacro de examen"
      },
      {
        "id": "v17_039",
        "front": "A ___ is an informal short test.",
        "back": "quiz\n\nTest / cuestionario corto"
      },
      {
        "id": "v17_040",
        "front": "A ___ question offers several possible answers.",
        "back": "multiple choice\n\nPregunta de opción múltiple"
      },
      {
        "id": "v17_041",
        "front": "A ___ question requires a brief written response.",
        "back": "short answer\n\nPregunta de respuesta corta"
      },
      {
        "id": "v17_042",
        "front": "An ___ allows you to consult notes or books.",
        "back": "open-book exam\n\nExamen con apuntes permitidos"
      },
      {
        "id": "v17_043",
        "front": "A ___ (BrE) / ___ (AmE) is a second attempt at an exam.",
        "back": "resit / retake\n\nRecuperación / segunda convocatoria"
      },
      {
        "id": "v17_044",
        "front": "A ___ / ___ is the score or level awarded for work.",
        "back": "grade / mark\n\nNota / calificación"
      },
      {
        "id": "v17_045",
        "front": "To ___ an exam means to achieve the required grade.",
        "back": "pass\n\nAprobar un examen"
      },
      {
        "id": "v17_046",
        "front": "To ___ an exam means to not reach the required grade.",
        "back": "fail\n\nSuspender un examen"
      },
      {
        "id": "v17_047",
        "front": "To ___ / ___ an exam means to take it again.",
        "back": "retake / resit\n\nRepetir / recuperar un examen"
      },
      {
        "id": "v17_048",
        "front": "To ___ (BrE) / ___ (AmE) means to study again before an exam.",
        "back": "revise / review\n\nRepasar / estudiar para el examen"
      },
      {
        "id": "v17_049",
        "front": "To ___ means to write down key points during a class.",
        "back": "take notes\n\nTomar apuntes"
      },
      {
        "id": "v17_050",
        "front": "To ___ means to copy someone else's work without credit.",
        "back": "plagiarise\n\nPlagiar"
      },
      {
        "id": "v17_051",
        "front": "To ___ a source means to acknowledge where information came from.",
        "back": "cite\n\nCitar una fuente"
      },
      {
        "id": "v17_052",
        "front": "A ___ lists all sources used in a piece of work.",
        "back": "bibliography\n\nBibliografía"
      },
      {
        "id": "v17_053",
        "front": "A ___ is the date by which work must be submitted.",
        "back": "deadline\n\nPlazo de entrega"
      },
      {
        "id": "v17_054",
        "front": "To ___ work means to hand it in.",
        "back": "submit\n\nEntregar un trabajo"
      },
      {
        "id": "v17_055",
        "front": "A ___ is an academic qualification from a university.",
        "back": "degree\n\nTítulo universitario / licenciatura"
      },
      {
        "id": "v17_056",
        "front": "A ___ is the standard first university qualification.",
        "back": "bachelor's degree\n\nGrado / licenciatura"
      },
      {
        "id": "v17_057",
        "front": "A ___ is a postgraduate qualification above a bachelor's.",
        "back": "master's degree\n\nMáster"
      },
      {
        "id": "v17_058",
        "front": "A ___ / ___ is the highest academic degree.",
        "back": "PhD / doctorate\n\nDoctorado"
      },
      {
        "id": "v17_059",
        "front": "A ___ is a qualification below degree level.",
        "back": "diploma\n\nDiploma / título"
      },
      {
        "id": "v17_060",
        "front": "A ___ is a document proving a qualification or completion.",
        "back": "certificate\n\nCertificado / acreditación"
      },
      {
        "id": "v17_061",
        "front": "A ___ is financial support for a student based on merit.",
        "back": "scholarship\n\nBeca por méritos"
      },
      {
        "id": "v17_062",
        "front": "A ___ is financial support not requiring repayment.",
        "back": "grant\n\nSubvención / beca"
      },
      {
        "id": "v17_063",
        "front": "A ___ is borrowed money repaid after graduation.",
        "back": "student loan\n\nPréstamo estudiantil"
      },
      {
        "id": "v17_064",
        "front": "___ are the cost of a course.",
        "back": "Tuition fees\n\nTasas de matrícula / precio de la carrera"
      },
      {
        "id": "v17_065",
        "front": "A ___ is a year off between school and university.",
        "back": "gap year\n\nAño sabático (entre etapas)"
      },
      {
        "id": "v17_066",
        "front": "An ___ allows students to study abroad.",
        "back": "exchange programme\n\nPrograma de intercambio"
      },
      {
        "id": "v17_067",
        "front": "___ is the EU student exchange programme.",
        "back": "Erasmus\n\nErasmus"
      },
      {
        "id": "v17_068",
        "front": "A ___ is the grounds and buildings of a university.",
        "back": "campus\n\nCampus universitario"
      },
      {
        "id": "v17_069",
        "front": "A ___ is where books and study resources are available.",
        "back": "library\n\nBiblioteca"
      },
      {
        "id": "v17_070",
        "front": "A ___ / ___ is where food is served in a school.",
        "back": "canteen / cafeteria\n\nComedor escolar / cantina"
      },
      {
        "id": "v17_071",
        "front": "A ___ / ___ is a room for scientific experiments.",
        "back": "laboratory / lab\n\nLaboratorio"
      },
      {
        "id": "v17_072",
        "front": "A ___ / ___ is used for physical education.",
        "back": "gym / sports hall\n\nGimnasio / pabellón deportivo"
      },
      {
        "id": "v17_073",
        "front": "A ___ is an outdoor area for children to play.",
        "back": "playground\n\nPatio de recreo"
      },
      {
        "id": "v17_074",
        "front": "A ___ stores personal belongings.",
        "back": "locker\n\nTaquilla"
      },
      {
        "id": "v17_075",
        "front": "A ___ is the main book used for a subject.",
        "back": "textbook\n\nLibro de texto"
      },
      {
        "id": "v17_076",
        "front": "A ___ is a notebook for writing in.",
        "back": "exercise book\n\nCuaderno"
      },
      {
        "id": "v17_077",
        "front": "A ___ marks key text.",
        "back": "highlighter\n\nRotulador fluorescente"
      },
      {
        "id": "v17_078",
        "front": "A ___ measures length.",
        "back": "ruler\n\nRegla"
      },
      {
        "id": "v17_079",
        "front": "A ___ draws circles.",
        "back": "compass\n\nCompás (de dibujo)"
      },
      {
        "id": "v17_080",
        "front": "A ___ measures angles.",
        "back": "protractor\n\nTransportador de ángulos"
      },
      {
        "id": "v17_081",
        "front": "A ___ performs mathematical operations.",
        "back": "calculator\n\nCalculadora"
      },
      {
        "id": "v17_082",
        "front": "A ___ is a reusable writing surface for the teacher.",
        "back": "whiteboard\n\nPizarra blanca"
      },
      {
        "id": "v17_083",
        "front": "A ___ is a dark surface written on with chalk.",
        "back": "blackboard\n\nPizarra negra / encerado"
      }
    ]
  },
  {
    "section": 18,
    "title": "Arte y Música",
    "cards": [
      {
        "id": "v18_001",
        "front": "A ___ is an image created with paint.",
        "back": "painting\n\nPintura / cuadro"
      },
      {
        "id": "v18_002",
        "front": "A ___ is made with pencil, pen or charcoal.",
        "back": "drawing\n\nDibujo"
      },
      {
        "id": "v18_003",
        "front": "A ___ is a quick rough drawing.",
        "back": "sketch\n\nBoceto / esbozo"
      },
      {
        "id": "v18_004",
        "front": "A ___ is a three-dimensional artwork.",
        "back": "sculpture\n\nEscultura"
      },
      {
        "id": "v18_005",
        "front": "A ___ is an image of a person.",
        "back": "portrait\n\nRetrato"
      },
      {
        "id": "v18_006",
        "front": "A ___ is an image of natural scenery.",
        "back": "landscape\n\nPaisaje"
      },
      {
        "id": "v18_007",
        "front": "A ___ depicts inanimate objects.",
        "back": "still life\n\nNaturaleza muerta / bodegón"
      },
      {
        "id": "v18_008",
        "front": "An ___ painting represents ideas, not realistic images.",
        "back": "abstract\n\nArte abstracto"
      },
      {
        "id": "v18_009",
        "front": "A ___ is a large painting on a wall.",
        "back": "mural\n\nMural"
      },
      {
        "id": "v18_010",
        "front": "A ___ is a painting done on wet plaster.",
        "back": "fresco\n\nFresco"
      },
      {
        "id": "v18_011",
        "front": "A ___ is a reproduced copy of an artwork.",
        "back": "print\n\nGrabado / impresión artística"
      },
      {
        "id": "v18_012",
        "front": "A ___ is the fabric surface used for oil painting.",
        "back": "canvas\n\nLienzo"
      },
      {
        "id": "v18_013",
        "front": "___ uses water-based transparent paint.",
        "back": "Watercolour\n\nAcuarela"
      },
      {
        "id": "v18_014",
        "front": "___ is mixed with oil and dries slowly.",
        "back": "Oil paint\n\nPintura al óleo"
      },
      {
        "id": "v18_015",
        "front": "___ is water-based but dries to a hard finish.",
        "back": "Acrylic paint\n\nPintura acrílica"
      },
      {
        "id": "v18_016",
        "front": "A ___ applies paint to a surface.",
        "back": "brush\n\nPincel / brocha"
      },
      {
        "id": "v18_017",
        "front": "A ___ holds and mixes paint colours.",
        "back": "palette\n\nPaleta (de colores)"
      },
      {
        "id": "v18_018",
        "front": "A ___ is a place where art is displayed.",
        "back": "gallery\n\nGalería de arte"
      },
      {
        "id": "v18_019",
        "front": "A ___ is a place where cultural or historical objects are kept.",
        "back": "museum\n\nMuseo"
      },
      {
        "id": "v18_020",
        "front": "An ___ / ___ (AmE) is a public display of art or objects.",
        "back": "exhibition / exhibit\n\nExposición"
      },
      {
        "id": "v18_021",
        "front": "A ___ manages and organises a museum or gallery.",
        "back": "curator\n\nComisario / conservador de museo"
      },
      {
        "id": "v18_022",
        "front": "An ___ is a sale where items go to the highest bidder.",
        "back": "auction\n\nSubasta"
      },
      {
        "id": "v18_023",
        "front": "A ___ is an artist's greatest or most celebrated work.",
        "back": "masterpiece\n\nObra maestra"
      },
      {
        "id": "v18_024",
        "front": "A ___ is an exact copy of an artwork.",
        "back": "replica\n\nRéplica"
      },
      {
        "id": "v18_025",
        "front": "A ___ is a fake artwork passed off as genuine.",
        "back": "forgery\n\nFalsificación"
      },
      {
        "id": "v18_026",
        "front": "A ___ is a category of artistic style or subject.",
        "back": "genre\n\nGénero"
      },
      {
        "id": "v18_027",
        "front": "___ is a style capturing light and movement through loose brushstrokes.",
        "back": "Impressionism\n\nImpresionismo"
      },
      {
        "id": "v18_028",
        "front": "___ depicts dreamlike or subconscious imagery.",
        "back": "Surrealism\n\nSurrealismo"
      },
      {
        "id": "v18_029",
        "front": "___ breaks objects into geometric shapes.",
        "back": "Cubism\n\nCubismo"
      },
      {
        "id": "v18_030",
        "front": "___ is a dramatic, ornate European style of the 17th century.",
        "back": "Baroque\n\nBarroco"
      },
      {
        "id": "v18_031",
        "front": "A ___ is a long work of fiction.",
        "back": "novel\n\nNovela"
      },
      {
        "id": "v18_032",
        "front": "A ___ is a brief piece of fiction.",
        "back": "short story\n\nCuento / relato corto"
      },
      {
        "id": "v18_033",
        "front": "A ___ is a piece of writing using rhythm and imagery.",
        "back": "poem\n\nPoema"
      },
      {
        "id": "v18_034",
        "front": "___ is literary art using verse form.",
        "back": "Poetry\n\nPoesía"
      },
      {
        "id": "v18_035",
        "front": "A ___ is a dramatic work written to be performed.",
        "back": "play\n\nObra de teatro"
      },
      {
        "id": "v18_036",
        "front": "A ___ is the script of a film.",
        "back": "screenplay\n\nGuión cinematográfico"
      },
      {
        "id": "v18_037",
        "front": "An ___ is a person's account of their own life.",
        "back": "autobiography\n\nAutobiografía"
      },
      {
        "id": "v18_038",
        "front": "A ___ is an account of someone's life written by another.",
        "back": "biography\n\nBiografía"
      },
      {
        "id": "v18_039",
        "front": "A ___ is a personal account of a specific period or experience.",
        "back": "memoir\n\nMemorias"
      },
      {
        "id": "v18_040",
        "front": "___ is writing about real events and people.",
        "back": "Non-fiction\n\nNo ficción"
      },
      {
        "id": "v18_041",
        "front": "___ is invented stories.",
        "back": "Fiction\n\nFicción"
      },
      {
        "id": "v18_042",
        "front": "A ___ in literature includes romance, thriller, sci-fi, fantasy.",
        "back": "genre\n\nGénero literario"
      },
      {
        "id": "v18_043",
        "front": "A ___ is the sequence of events in a story.",
        "back": "plot\n\nTrama / argumento"
      },
      {
        "id": "v18_044",
        "front": "A ___ is a person in a story.",
        "back": "character\n\nPersonaje"
      },
      {
        "id": "v18_045",
        "front": "A ___ is the main character.",
        "back": "protagonist\n\nProtagonista"
      },
      {
        "id": "v18_046",
        "front": "An ___ is the character opposing the protagonist.",
        "back": "antagonist\n\nAntagonista"
      },
      {
        "id": "v18_047",
        "front": "A ___ tells the story.",
        "back": "narrator\n\nNarrador"
      },
      {
        "id": "v18_048",
        "front": "A ___ is the time and place of a story.",
        "back": "setting\n\nAmbientación / escenario"
      },
      {
        "id": "v18_049",
        "front": "A ___ is the central idea of a work.",
        "back": "theme\n\nTema central"
      },
      {
        "id": "v18_050",
        "front": "A ___ describes something as if it were something else.",
        "back": "metaphor\n\nMetáfora"
      },
      {
        "id": "v18_051",
        "front": "A ___ compares using \"like\" or \"as\".",
        "back": "simile\n\nSímil / comparación"
      },
      {
        "id": "v18_052",
        "front": "___ is when words mean the opposite of what is said.",
        "back": "Irony\n\nIronía"
      },
      {
        "id": "v18_053",
        "front": "___ is irony used to mock.",
        "back": "Sarcasm\n\nSarcasmo"
      },
      {
        "id": "v18_054",
        "front": "A ___ leaves the story unresolved at an exciting moment.",
        "back": "cliffhanger\n\nClímax / final en suspenso"
      },
      {
        "id": "v18_055",
        "front": "A ___ is an unexpected turn in the story.",
        "back": "plot twist\n\nGiro argumental"
      },
      {
        "id": "v18_056",
        "front": "A ___ is a group of musicians playing together.",
        "back": "band\n\nGrupo / banda musical"
      },
      {
        "id": "v18_057",
        "front": "A ___ performs alone.",
        "back": "solo artist\n\nArtista en solitario"
      },
      {
        "id": "v18_058",
        "front": "An ___ is a collection of songs released together.",
        "back": "album\n\nÁlbum"
      },
      {
        "id": "v18_059",
        "front": "A ___ is one song released separately.",
        "back": "single\n\nSencillo / single"
      },
      {
        "id": "v18_060",
        "front": "A ___ is one song on an album.",
        "back": "track\n\nPista / canción"
      },
      {
        "id": "v18_061",
        "front": "___ are the words of a song.",
        "back": "Lyrics\n\nLetra (de una canción)"
      },
      {
        "id": "v18_062",
        "front": "A ___ is the main tune of a piece.",
        "back": "melody\n\nMelodía"
      },
      {
        "id": "v18_063",
        "front": "___ is when notes or voices combine pleasingly.",
        "back": "Harmony\n\nArmonía"
      },
      {
        "id": "v18_064",
        "front": "A ___ is the regular pattern of beats.",
        "back": "rhythm\n\nRitmo"
      },
      {
        "id": "v18_065",
        "front": "A ___ is three or more notes played together.",
        "back": "chord\n\nAcorde"
      },
      {
        "id": "v18_066",
        "front": "A ___ is the speed of music.",
        "back": "tempo\n\nTempo / velocidad de la música"
      },
      {
        "id": "v18_067",
        "front": "___ is how high or low a note is.",
        "back": "Pitch\n\nTono / altura musical"
      },
      {
        "id": "v18_068",
        "front": "A ___ is a unit of musical time.",
        "back": "beat\n\nTiempo / beat"
      },
      {
        "id": "v18_069",
        "front": "___ is performed in real time to an audience.",
        "back": "Live music\n\nMúsica en directo"
      },
      {
        "id": "v18_070",
        "front": "A ___ / ___ is a live music performance.",
        "back": "concert / gig\n\nConcierto / actuación"
      },
      {
        "id": "v18_071",
        "front": "A ___ is the place where an event is held.",
        "back": "venue\n\nLocal / recinto"
      },
      {
        "id": "v18_072",
        "front": "A ___ is the list of songs a band will perform.",
        "back": "setlist\n\nSetlist / lista de canciones"
      },
      {
        "id": "v18_073",
        "front": "A ___ is a series of concerts in different locations.",
        "back": "tour\n\nGira musical"
      },
      {
        "id": "v18_074",
        "front": "___ is the area behind the stage not seen by the audience.",
        "back": "Backstage\n\nEntre bastidores / backstage"
      },
      {
        "id": "v18_075",
        "front": "A ___ is a short film made for a song.",
        "back": "music video\n\nVideoclip"
      },
      {
        "id": "v18_076",
        "front": "A ___ is a new recording of someone else's song.",
        "back": "cover\n\nVersión de una canción"
      },
      {
        "id": "v18_077",
        "front": "A ___ is a reworked version of an original track.",
        "back": "remix\n\nRemix / remezcla"
      },
      {
        "id": "v18_078",
        "front": "A ___ uses a piece of an existing recording in a new track.",
        "back": "sample\n\nSample / muestra musical"
      },
      {
        "id": "v18_079",
        "front": "___ follows formal compositional tradition.",
        "back": "Classical music\n\nMúsica clásica"
      },
      {
        "id": "v18_080",
        "front": "___ originated in African American communities and features improvisation.",
        "back": "Jazz\n\nJazz"
      },
      {
        "id": "v18_081",
        "front": "___ is an expressive style rooted in African American folk music.",
        "back": "Blues\n\nBlues"
      },
      {
        "id": "v18_082",
        "front": "___ uses electric guitars, drums and bass.",
        "back": "Rock\n\nRock"
      },
      {
        "id": "v18_083",
        "front": "___ is commercial accessible music with broad appeal.",
        "back": "Pop\n\nPop"
      },
      {
        "id": "v18_084",
        "front": "___ features rap, beats and sampling.",
        "back": "Hip-hop\n\nHip-hop"
      },
      {
        "id": "v18_085",
        "front": "___ music is created using synthesisers and computers.",
        "back": "Electronic\n\nMúsica electrónica"
      },
      {
        "id": "v18_086",
        "front": "___ is traditional music of a community.",
        "back": "Folk music\n\nMúsica folk / popular"
      },
      {
        "id": "v18_087",
        "front": "___ is a dramatic performance combining singing and orchestra.",
        "back": "Opera\n\nÓpera"
      },
      {
        "id": "v18_088",
        "front": "A ___ is a long orchestral work in multiple movements.",
        "back": "symphony\n\nSinfonía"
      },
      {
        "id": "v18_089",
        "front": "A ___ leads an orchestra or choir.",
        "back": "conductor\n\nDirector de orquesta"
      },
      {
        "id": "v18_090",
        "front": "An ___ is a large ensemble of instruments.",
        "back": "orchestra\n\nOrquesta"
      },
      {
        "id": "v18_091",
        "front": "A ___ is a group of singers.",
        "back": "choir\n\nCoro"
      },
      {
        "id": "v18_092",
        "front": "A ___ is a practice session before a performance.",
        "back": "rehearsal\n\nEnsayo"
      },
      {
        "id": "v18_093",
        "front": "A ___ is the first public performance or showing.",
        "back": "premiere\n\nEstreno / première"
      },
      {
        "id": "v18_094",
        "front": "A ___ is when the audience stands to applaud.",
        "back": "standing ovation\n\nOvación de pie"
      },
      {
        "id": "v18_095",
        "front": "A ___ sells tickets for performances.",
        "back": "box office\n\nTaquilla (teatro / cine)"
      },
      {
        "id": "v18_096",
        "front": "A ___ evaluates and reviews artistic works.",
        "back": "critic\n\nCrítico (de arte, música, cine)"
      },
      {
        "id": "v18_097",
        "front": "A ___ is a published critical assessment of a work.",
        "back": "review\n\nReseña / crítica"
      },
      {
        "id": "v18_098",
        "front": "A ___ is a very successful and popular film.",
        "back": "blockbuster\n\nTaquillazo / superproducción"
      },
      {
        "id": "v18_099",
        "front": "A ___ is a film recording real events.",
        "back": "documentary\n\nDocumental"
      },
      {
        "id": "v18_100",
        "front": "A ___ controls the creative vision of a film.",
        "back": "director\n\nDirector (de cine)"
      },
      {
        "id": "v18_101",
        "front": "A ___ manages the financial and logistical aspects.",
        "back": "producer\n\nProductor"
      },
      {
        "id": "v18_102",
        "front": "A ___ is the group of actors in a film or play.",
        "back": "cast\n\nReparto"
      },
      {
        "id": "v18_103",
        "front": "___ (SFX) create visuals not filmed in reality.",
        "back": "Special effects\n\nEfectos especiales"
      },
      {
        "id": "v18_104",
        "front": "___ are text translations of dialogue shown on screen.",
        "back": "Subtitles\n\nSubtítulos"
      },
      {
        "id": "v18_105",
        "front": "A ___ is a short promotional clip for a film.",
        "back": "trailer\n\nTráiler"
      }
    ]
  },
  {
    "section": 19,
    "title": "Collocations e Idioms",
    "cards": [
      {
        "id": "v19_001",
        "front": "You ___ a decision, not \"do\" a decision.",
        "back": "make\n\nmake a decision = tomar una decisión"
      },
      {
        "id": "v19_002",
        "front": "You ___ a mistake, not \"do\" a mistake.",
        "back": "make\n\nmake a mistake = cometer un error"
      },
      {
        "id": "v19_003",
        "front": "You ___ a phone call, not \"do\" a phone call.",
        "back": "make\n\nmake a phone call = hacer una llamada"
      },
      {
        "id": "v19_004",
        "front": "You ___ progress, not \"do\" progress.",
        "back": "make\n\nmake progress = progresar / avanzar"
      },
      {
        "id": "v19_005",
        "front": "You ___ an effort, not \"do\" an effort.",
        "back": "make\n\nmake an effort = hacer un esfuerzo"
      },
      {
        "id": "v19_006",
        "front": "You ___ money, not \"win\" money (unless gambling).",
        "back": "make\n\nmake money = ganar dinero"
      },
      {
        "id": "v19_007",
        "front": "You ___ a suggestion, not \"do\" a suggestion.",
        "back": "make\n\nmake a suggestion = hacer una sugerencia"
      },
      {
        "id": "v19_008",
        "front": "You ___ a complaint, not \"do\" a complaint.",
        "back": "make\n\nmake a complaint = presentar una queja"
      },
      {
        "id": "v19_009",
        "front": "You ___ an appointment, not \"do\" an appointment.",
        "back": "make\n\nmake an appointment = pedir cita"
      },
      {
        "id": "v19_010",
        "front": "You ___ a reservation, not \"do\" a reservation.",
        "back": "make\n\nmake a reservation = hacer una reserva"
      },
      {
        "id": "v19_011",
        "front": "You ___ the washing up, not \"make\" the washing up.",
        "back": "do\n\ndo the washing up = fregar los platos"
      },
      {
        "id": "v19_012",
        "front": "You ___ the housework, not \"make\" the housework.",
        "back": "do\n\ndo the housework = hacer las tareas del hogar"
      },
      {
        "id": "v19_013",
        "front": "You ___ your homework, not \"make\" your homework.",
        "back": "do\n\ndo your homework = hacer los deberes"
      },
      {
        "id": "v19_014",
        "front": "You ___ exercise, not \"make\" exercise.",
        "back": "do\n\ndo exercise = hacer ejercicio"
      },
      {
        "id": "v19_015",
        "front": "You ___ business with someone, not \"make\" business.",
        "back": "do\n\ndo business = hacer negocios"
      },
      {
        "id": "v19_016",
        "front": "You ___ someone a favour, not \"make\" a favour.",
        "back": "do\n\ndo someone a favour = hacerle un favor"
      },
      {
        "id": "v19_017",
        "front": "You ___ damage, not \"make\" damage.",
        "back": "do\n\ndo damage = causar daño"
      },
      {
        "id": "v19_018",
        "front": "You ___ well / badly, not \"make\" well / badly.",
        "back": "do\n\ndo well = hacerlo bien"
      },
      {
        "id": "v19_019",
        "front": "You ___ a photo, not \"make\" a photo.",
        "back": "take\n\ntake a photo = hacer / sacar una foto"
      },
      {
        "id": "v19_020",
        "front": "You ___ a break, not \"do\" or \"make\" a break.",
        "back": "take\n\ntake a break = tomarse un descanso"
      },
      {
        "id": "v19_021",
        "front": "You ___ an exam, not \"do\" or \"pass\" an exam (when meaning \"sit it\").",
        "back": "take\n\ntake an exam = presentarse a un examen"
      },
      {
        "id": "v19_022",
        "front": "You ___ a taxi, not \"catch\" a taxi usually.",
        "back": "take\n\ntake a taxi = coger un taxi"
      },
      {
        "id": "v19_023",
        "front": "You ___ medicine, not \"drink\" medicine.",
        "back": "take\n\ntake medicine = tomar medicación"
      },
      {
        "id": "v19_024",
        "front": "You ___ notes, not \"write\" notes usually.",
        "back": "take\n\ntake notes = tomar apuntes"
      },
      {
        "id": "v19_025",
        "front": "You ___ responsibility, not \"make\" responsibility.",
        "back": "take\n\ntake responsibility = asumir la responsabilidad"
      },
      {
        "id": "v19_026",
        "front": "You ___ a risk, not \"make\" a risk.",
        "back": "take\n\ntake a risk = arriesgarse"
      },
      {
        "id": "v19_027",
        "front": "You ___ part in something, not \"make\" part.",
        "back": "take\n\ntake part in = participar en"
      },
      {
        "id": "v19_028",
        "front": "You ___ your time, not \"make\" your time.",
        "back": "take\n\ntake your time = tomarte tu tiempo"
      },
      {
        "id": "v19_029",
        "front": "You ___ a shower, not \"take\" a shower (BrE preferred).",
        "back": "have\n\nhave a shower = ducharse (BrE)"
      },
      {
        "id": "v19_030",
        "front": "You ___ a meeting, not \"do\" or \"make\" a meeting.",
        "back": "have\n\nhave a meeting = tener una reunión"
      },
      {
        "id": "v19_031",
        "front": "You ___ fun, not \"make\" fun (make fun = burlarse).",
        "back": "have\n\nhave fun = divertirse"
      },
      {
        "id": "v19_032",
        "front": "You ___ a go, not \"make\" a go.",
        "back": "have\n\nhave a go = intentarlo / probar"
      },
      {
        "id": "v19_033",
        "front": "You ___ a look, not \"make\" a look.",
        "back": "have\n\nhave a look = echar un vistazo"
      },
      {
        "id": "v19_034",
        "front": "You ___ a chat, not \"make\" a chat.",
        "back": "have\n\nhave a chat = charlar / tener una conversación"
      },
      {
        "id": "v19_035",
        "front": "You ___ a word with someone = speak briefly to them.",
        "back": "have\n\nhave a word = hablar brevemente con alguien"
      },
      {
        "id": "v19_036",
        "front": "You ___ a good time, not \"make\" a good time.",
        "back": "have\n\nhave a good time = pasarlo bien"
      },
      {
        "id": "v19_037",
        "front": "You ___ a nightmare, not \"make\" a nightmare.",
        "back": "have\n\nhave a nightmare = tener una pesadilla / ser un infierno"
      },
      {
        "id": "v19_038",
        "front": "It's ___, not \"raining strongly\".",
        "back": "raining heavily\n\nheavy rain = lluvia intensa"
      },
      {
        "id": "v19_039",
        "front": "The music is ___, not \"strong\".",
        "back": "loud\n\nloud music = música alta / ruidosa"
      },
      {
        "id": "v19_040",
        "front": "She gave a ___, not \"said a speech\".",
        "back": "speech\n\ngive a speech = pronunciar un discurso"
      },
      {
        "id": "v19_041",
        "front": "He ___ a joke, not \"said\" a joke.",
        "back": "told\n\ntell a joke = contar un chiste"
      },
      {
        "id": "v19_042",
        "front": "She ___ a story, not \"said\" a story.",
        "back": "told\n\ntell a story = contar una historia"
      },
      {
        "id": "v19_043",
        "front": "He ___ a question, not \"made\" a question.",
        "back": "raised\n\nraise a question = plantear una pregunta"
      },
      {
        "id": "v19_044",
        "front": "They ___ an agreement, not \"arrived at\" an agreement (though both work).",
        "back": "reached\n\nreach an agreement = llegar a un acuerdo"
      },
      {
        "id": "v19_045",
        "front": "We need to ___ a deadline, not \"respect\" a deadline.",
        "back": "meet\n\nmeet a deadline = cumplir un plazo"
      },
      {
        "id": "v19_046",
        "front": "She ___ a promise, not \"respected\" a promise.",
        "back": "kept\n\nkeep a promise = cumplir una promesa"
      },
      {
        "id": "v19_047",
        "front": "He ___ a promise, not \"didn't respect\" a promise.",
        "back": "broke\n\nbreak a promise = romper una promesa"
      },
      {
        "id": "v19_048",
        "front": "They ___ the match, not \"gained\" the match.",
        "back": "won\n\nwin a match = ganar un partido"
      },
      {
        "id": "v19_049",
        "front": "She ___ her opponent, not \"won\" her opponent.",
        "back": "beat\n\nbeat someone = vencer a alguien"
      },
      {
        "id": "v19_050",
        "front": "He ___ the match, not \"was defeated the match\".",
        "back": "lost\n\nlose a match = perder un partido"
      },
      {
        "id": "v19_051",
        "front": "It was ___ with rain, not \"it was raining cats and dogs\" (formal).",
        "back": "pouring\n\nit's pouring = está diluviando"
      },
      {
        "id": "v19_052",
        "front": "___ pregnant, not \"very\" pregnant.",
        "back": "Heavily\n\nheavily pregnant = muy embarazada"
      },
      {
        "id": "v19_053",
        "front": "___ sorry, not \"very\" sorry (formal).",
        "back": "Deeply\n\ndeeply sorry = profundamente arrepentido"
      },
      {
        "id": "v19_054",
        "front": "___ unlikely, not \"very\" unlikely (formal).",
        "back": "Highly\n\nhighly unlikely = muy poco probable"
      },
      {
        "id": "v19_055",
        "front": "___ recommend, not \"very\" recommend.",
        "back": "Strongly\n\nstrongly recommend = recomendar encarecidamente"
      },
      {
        "id": "v19_056",
        "front": "___ cold, not \"very\" cold (for extremes).",
        "back": "Bitterly\n\nbitterly cold = un frío que pela"
      },
      {
        "id": "v19_057",
        "front": "___ expensive = informal emphasis.",
        "back": "Ridiculously\n\nridiculously expensive = ridículamente caro"
      },
      {
        "id": "v19_058",
        "front": "___ exhausted, not \"very\" exhausted.",
        "back": "Absolutely\n\nabsolutely exhausted = totalmente agotado"
      },
      {
        "id": "v19_059",
        "front": "___ confused, not \"very\" confused.",
        "back": "Utterly\n\nutterly confused = completamente confundido"
      },
      {
        "id": "v19_060",
        "front": "___ happy = at the highest level of happiness.",
        "back": "Blissfully\n\nblissfully happy = sumamente feliz"
      },
      {
        "id": "v19_061",
        "front": "___ obvious = so obvious it's embarrassing.",
        "back": "Painfully\n\npainfully obvious = dolorosamente obvio"
      },
      {
        "id": "v19_062",
        "front": "___ means to do something to relieve tension when meeting.",
        "back": "Break the ice\n\nRomper el hielo"
      },
      {
        "id": "v19_063",
        "front": "___ means to avoid saying something directly.",
        "back": "Beat around the bush\n\nAndarse por las ramas"
      },
      {
        "id": "v19_064",
        "front": "___ means to endure a painful situation bravely.",
        "back": "Bite the bullet\n\nMorder la bala / aguantar el tipo"
      },
      {
        "id": "v19_065",
        "front": "___ means to take on too much.",
        "back": "Bite off more than you can chew\n\nAbarcar más de lo que puedes"
      },
      {
        "id": "v19_066",
        "front": "___ means to permanently damage a relationship.",
        "back": "Burn bridges\n\nQuemar los puentes"
      },
      {
        "id": "v19_067",
        "front": "___ means to do something poorly to save time or money.",
        "back": "Cut corners\n\nHacer las cosas a medias / atajar"
      },
      {
        "id": "v19_068",
        "front": "___ means to be exactly correct.",
        "back": "Hit the nail on the head\n\nDar en el clavo"
      },
      {
        "id": "v19_069",
        "front": "___ means to miss an opportunity.",
        "back": "Miss the boat\n\nPerder el tren / perder la oportunidad"
      },
      {
        "id": "v19_070",
        "front": "___ means very rarely.",
        "back": "Once in a blue moon\n\nDe vez en cuando / de Pascuas a Ramos"
      },
      {
        "id": "v19_071",
        "front": "___ means undecided between two options.",
        "back": "On the fence\n\nSin decidirse / a medias"
      },
      {
        "id": "v19_072",
        "front": "___ means to agree with someone.",
        "back": "See eye to eye\n\nVer las cosas igual / estar de acuerdo"
      },
      {
        "id": "v19_073",
        "front": "___ means to reveal a secret.",
        "back": "Spill the beans\n\nIrse de la lengua / revelar un secreto"
      },
      {
        "id": "v19_074",
        "front": "___ means it's your turn to decide.",
        "back": "The ball is in your court\n\nLa pelota está en tu tejado"
      },
      {
        "id": "v19_075",
        "front": "___ means feeling slightly ill.",
        "back": "Under the weather\n\nNo estar muy bien / encontrarse pachucho"
      },
      {
        "id": "v19_076",
        "front": "___ means uncertain or not yet decided.",
        "back": "Up in the air\n\nEn el aire / sin decidir"
      },
      {
        "id": "v19_077",
        "front": "___ something means to understand it.",
        "back": "Wrap your head around\n\nAsimilar / comprender algo complejo"
      },
      {
        "id": "v19_078",
        "front": "___ means to follow a trend.",
        "back": "Jump on the bandwagon\n\nSubirse al carro"
      },
      {
        "id": "v19_079",
        "front": "___ (informal) means to die.",
        "back": "Kick the bucket\n\nEstirar la pata / palmarla"
      },
      {
        "id": "v19_080",
        "front": "___ means to accidentally reveal a secret.",
        "back": "Let the cat out of the bag\n\nIrse de la lengua sin querer"
      },
      {
        "id": "v19_081",
        "front": "___ means to joke or tease.",
        "back": "Pull someone's leg\n\nTomar el pelo a alguien"
      },
      {
        "id": "v19_082",
        "front": "___ means a small visible part of a bigger problem.",
        "back": "The tip of the iceberg\n\nLa punta del iceberg"
      },
      {
        "id": "v19_083",
        "front": "___ means to fail or be defeated.",
        "back": "Bite the dust\n\nMorder el polvo"
      },
      {
        "id": "v19_084",
        "front": "___ means to be very expensive.",
        "back": "Cost an arm and a leg\n\nCostar un ojo de la cara"
      },
      {
        "id": "v19_085",
        "front": "___ / ___ means to go to bed.",
        "back": "Hit the sack / hit the hay\n\nIrse a dormir / irse al sobre"
      },
      {
        "id": "v19_086",
        "front": "___ means in the same difficult situation.",
        "back": "In the same boat\n\nEn la misma situación / en el mismo barco"
      },
      {
        "id": "v19_087",
        "front": "___ means to stop a bad habit.",
        "back": "Kick the habit\n\nDejar un vicio / quitarse un hábito"
      },
      {
        "id": "v19_088",
        "front": "___ means to try everything possible.",
        "back": "Leave no stone unturned\n\nNo dejar piedra sin remover"
      },
      {
        "id": "v19_089",
        "front": "___ means to avoid bringing up old problems.",
        "back": "Let sleeping dogs lie\n\nDejar las cosas como están / no remover el pasado"
      },
      {
        "id": "v19_090",
        "front": "___ means to refuse to take a side.",
        "back": "Sit on the fence\n\nNo mojarse / permanecer neutral"
      },
      {
        "id": "v19_091",
        "front": "___ means to take attention away from someone.",
        "back": "Steal someone's thunder\n\nEclipsar a alguien / robarle el protagonismo"
      },
      {
        "id": "v19_092",
        "front": "___ is the final problem that causes someone to lose patience.",
        "back": "The last straw\n\nEl colmo / la gota que colma el vaso"
      },
      {
        "id": "v19_093",
        "front": "___ means to give up.",
        "back": "Throw in the towel\n\nTirar la toalla"
      },
      {
        "id": "v19_094",
        "front": "___ means to ignore something deliberately.",
        "back": "Turn a blind eye\n\nHacer la vista gorda"
      },
      {
        "id": "v19_095",
        "front": "___ means to keep changing your mind.",
        "back": "Blow hot and cold\n\nEstar en un vaivén / no saber lo que quieres"
      },
      {
        "id": "v19_096",
        "front": "___ means to accept the consequences of your actions.",
        "back": "Face the music\n\nAfrontar las consecuencias"
      },
      {
        "id": "v19_097",
        "front": "___ means to become uncontrollable.",
        "back": "Get out of hand\n\nDescontrolarse / irse de las manos"
      },
      {
        "id": "v19_098",
        "front": "___ means to start again from the beginning.",
        "back": "Go back to square one\n\nVolver a empezar desde cero"
      },
      {
        "id": "v19_099",
        "front": "___ means to start something with maximum energy.",
        "back": "Hit the ground running\n\nEmpezar con fuerza / ponerse manos a la obra desde el minuto uno"
      },
      {
        "id": "v19_100",
        "front": "___ means to avoid attracting attention.",
        "back": "Keep a low profile\n\nMantenerse en un segundo plano"
      },
      {
        "id": "v19_101",
        "front": "___ means to do something perfectly.",
        "back": "Nail it\n\nClavarlo / hacerlo perfectamente"
      },
      {
        "id": "v19_102",
        "front": "___ means almost remembered but not quite.",
        "back": "On the tip of my tongue\n\nEn la punta de la lengua"
      },
      {
        "id": "v19_103",
        "front": "___ means to improvise without a plan.",
        "back": "Play it by ear\n\nImprovisar / ir sobre la marcha"
      },
      {
        "id": "v19_104",
        "front": "___ means to be sceptical about something.",
        "back": "Take it with a pinch of salt\n\nTomárselo con cautela / no creérselo del todo"
      }
    ]
  },
  {
    "section": 20,
    "title": "Política y Sociedad",
    "cards": [
      {
        "id": "v20_001",
        "front": "A ___ is the group of people who run a country.",
        "back": "government\n\nGobierno"
      },
      {
        "id": "v20_002",
        "front": "A ___ is the legislative body that makes laws.",
        "back": "parliament\n\nParlamento"
      },
      {
        "id": "v20_003",
        "front": "A ___ is the legislative body in the US.",
        "back": "congress\n\nCongreso (EEUU)"
      },
      {
        "id": "v20_004",
        "front": "A ___ is the upper house of a legislature.",
        "back": "senate\n\nSenado"
      },
      {
        "id": "v20_005",
        "front": "A ___ leads the government in parliamentary systems.",
        "back": "prime minister\n\nPrimer ministro"
      },
      {
        "id": "v20_006",
        "front": "A ___ is the head of state in a republic.",
        "back": "president\n\nPresidente"
      },
      {
        "id": "v20_007",
        "front": "A ___ is a king or queen.",
        "back": "monarch\n\nMonarca"
      },
      {
        "id": "v20_008",
        "front": "A ___ is the head of government in Germany and Austria.",
        "back": "chancellor\n\nCanciller"
      },
      {
        "id": "v20_009",
        "front": "A ___ is a senior member of government responsible for a department.",
        "back": "minister\n\nMinistro"
      },
      {
        "id": "v20_010",
        "front": "A ___ is a senior minister — in the US, manages foreign policy.",
        "back": "secretary of state\n\nSecretario de Estado"
      },
      {
        "id": "v20_011",
        "front": "A ___ (Member of Parliament) represents a constituency in the UK.",
        "back": "MP\n\nDiputado / parlamentario (RU)"
      },
      {
        "id": "v20_012",
        "front": "A ___ is an elected member of a senate.",
        "back": "senator\n\nSenador"
      },
      {
        "id": "v20_013",
        "front": "A ___ / ___ is a member of the US Congress.",
        "back": "congressman / congresswoman\n\nCongresista (EEUU)"
      },
      {
        "id": "v20_014",
        "front": "A ___ is the area an elected politician represents.",
        "back": "constituency\n\nCircunscripción / distrito electoral"
      },
      {
        "id": "v20_015",
        "front": "A ___ is an organised group with shared political beliefs.",
        "back": "political party\n\nPartido político"
      },
      {
        "id": "v20_016",
        "front": "A ___ is a government formed by two or more parties.",
        "back": "coalition\n\nCoalición"
      },
      {
        "id": "v20_017",
        "front": "An ___ is the party or parties not in government.",
        "back": "opposition\n\nOposición"
      },
      {
        "id": "v20_018",
        "front": "A ___ is a system where citizens vote for their leaders.",
        "back": "democracy\n\nDemocracia"
      },
      {
        "id": "v20_019",
        "front": "A ___ is a system controlled by one leader with absolute power.",
        "back": "dictatorship\n\nDictadura"
      },
      {
        "id": "v20_020",
        "front": "A ___ is a system headed by a king or queen.",
        "back": "monarchy\n\nMonarquía"
      },
      {
        "id": "v20_021",
        "front": "A ___ is a state without a monarch — usually with an elected president.",
        "back": "republic\n\nRepública"
      },
      {
        "id": "v20_022",
        "front": "A ___ is the set of fundamental laws of a country.",
        "back": "constitution\n\nConstitución"
      },
      {
        "id": "v20_023",
        "front": "___ is the process of making laws, or the laws themselves.",
        "back": "Legislation\n\nLegislación"
      },
      {
        "id": "v20_024",
        "front": "A ___ is a proposed law before it is passed.",
        "back": "bill\n\nProyecto de ley"
      },
      {
        "id": "v20_025",
        "front": "An ___ is a law that has been passed by parliament.",
        "back": "act\n\nLey / acta (aprobada)"
      },
      {
        "id": "v20_026",
        "front": "A ___ is a public vote on a specific question.",
        "back": "referendum\n\nReferéndum"
      },
      {
        "id": "v20_027",
        "front": "An ___ is a formal vote to choose leaders.",
        "back": "election\n\nElecciones"
      },
      {
        "id": "v20_028",
        "front": "A ___ determines the whole government.",
        "back": "general election\n\nElecciones generales"
      },
      {
        "id": "v20_029",
        "front": "A ___ fills a single vacant seat.",
        "back": "by-election\n\nElección parcial"
      },
      {
        "id": "v20_030",
        "front": "A ___ is the process or paper used for voting.",
        "back": "ballot\n\nVoto / papeleta electoral"
      },
      {
        "id": "v20_031",
        "front": "A ___ is where people go to vote.",
        "back": "polling station\n\nColegio / centro electoral"
      },
      {
        "id": "v20_032",
        "front": "A ___ is organised activity to win votes or support.",
        "back": "campaign\n\nCampaña (electoral)"
      },
      {
        "id": "v20_033",
        "front": "A ___ is a party's published plan of policies.",
        "back": "manifesto\n\nManifiesto / programa electoral"
      },
      {
        "id": "v20_034",
        "front": "A ___ is a plan of action adopted by a government or party.",
        "back": "policy\n\nPolítica / medida"
      },
      {
        "id": "v20_035",
        "front": "A ___ is a formal argument between opposing sides.",
        "back": "debate\n\nDebate"
      },
      {
        "id": "v20_036",
        "front": "A ___ is a parliamentary motion to remove the government.",
        "back": "vote of no confidence\n\nMoción de censura"
      },
      {
        "id": "v20_037",
        "front": "___ politics favours equality and social change.",
        "back": "Left-wing\n\nDe izquierdas"
      },
      {
        "id": "v20_038",
        "front": "___ politics favours tradition and free markets.",
        "back": "Right-wing\n\nDe derechas"
      },
      {
        "id": "v20_039",
        "front": "___ politics takes a moderate position between left and right.",
        "back": "Centre\n\nDe centro"
      },
      {
        "id": "v20_040",
        "front": "___ politics values individual freedom and social progress.",
        "back": "Liberal\n\nLiberal"
      },
      {
        "id": "v20_041",
        "front": "___ politics values tradition and limited change.",
        "back": "Conservative\n\nConservador"
      },
      {
        "id": "v20_042",
        "front": "___ politics advocates collective ownership and equality.",
        "back": "Socialist\n\nSocialista"
      },
      {
        "id": "v20_043",
        "front": "___ politics claims to represent ordinary people against elites.",
        "back": "Populist\n\nPopulista"
      },
      {
        "id": "v20_044",
        "front": "___ politics promotes the interests of a specific nation.",
        "back": "Nationalist\n\nNacionalista"
      },
      {
        "id": "v20_045",
        "front": "___ politics concentrates power and limits freedoms.",
        "back": "Authoritarian\n\nAutoritario"
      },
      {
        "id": "v20_046",
        "front": "A ___ / ___ tries to influence government decisions.",
        "back": "lobby group / pressure group\n\nGrupo de presión / lobby"
      },
      {
        "id": "v20_047",
        "front": "A ___ is an organisation that produces policy research.",
        "back": "think tank\n\nThink tank / laboratorio de ideas"
      },
      {
        "id": "v20_048",
        "front": "___ is dishonest conduct by those in power.",
        "back": "Corruption\n\nCorrupción"
      },
      {
        "id": "v20_049",
        "front": "A ___ is a damaging revelation about a public figure.",
        "back": "scandal\n\nEscándalo"
      },
      {
        "id": "v20_050",
        "front": "A ___ is the unauthorised release of confidential information.",
        "back": "leak\n\nFiltración"
      },
      {
        "id": "v20_051",
        "front": "A ___ reveals wrongdoing within an organisation.",
        "back": "whistleblower\n\nDenunciante / informante"
      },
      {
        "id": "v20_052",
        "front": "___ is the management of relations between countries.",
        "back": "Diplomacy\n\nDiplomacia"
      },
      {
        "id": "v20_053",
        "front": "A ___ is a formal agreement between countries.",
        "back": "treaty\n\nTratado"
      },
      {
        "id": "v20_054",
        "front": "___ are penalties applied to a country to change its behaviour.",
        "back": "Sanctions\n\nSanciones"
      },
      {
        "id": "v20_055",
        "front": "An ___ is the official residence and offices of an ambassador.",
        "back": "embassy\n\nEmbajada"
      },
      {
        "id": "v20_056",
        "front": "An ___ represents their country in a foreign state.",
        "back": "ambassador\n\nEmbajador"
      },
      {
        "id": "v20_057",
        "front": "___ is a government's approach to international relations.",
        "back": "Foreign policy\n\nPolítica exterior"
      },
      {
        "id": "v20_058",
        "front": "___ covers matters within the country.",
        "back": "Domestic policy\n\nPolítica interior"
      },
      {
        "id": "v20_059",
        "front": "A ___ is a meeting between heads of state.",
        "back": "summit\n\nCumbre (reunión de líderes)"
      },
      {
        "id": "v20_060",
        "front": "___ is a military alliance between Western countries.",
        "back": "NATO\n\nOTAN"
      },
      {
        "id": "v20_061",
        "front": "The ___ (United Nations) promotes international peace and cooperation.",
        "back": "UN\n\nONU (Organización de las Naciones Unidas)"
      },
      {
        "id": "v20_062",
        "front": "The ___ (European Union) is a political and economic union of European states.",
        "back": "EU\n\nUE (Unión Europea)"
      },
      {
        "id": "v20_063",
        "front": "___ was the UK's withdrawal from the EU.",
        "back": "Brexit\n\nBrexit"
      },
      {
        "id": "v20_064",
        "front": "A ___ has fled their country due to war or persecution.",
        "back": "refugee\n\nRefugiado"
      },
      {
        "id": "v20_065",
        "front": "An ___ requests protection from another country.",
        "back": "asylum seeker\n\nSolicitante de asilo"
      },
      {
        "id": "v20_066",
        "front": "___ is the movement of people into a new country.",
        "back": "Immigration\n\nInmigración"
      },
      {
        "id": "v20_067",
        "front": "___ is the movement of people out of their country.",
        "back": "Emigration\n\nEmigración"
      },
      {
        "id": "v20_068",
        "front": "___ is the process of joining a new society.",
        "back": "Integration\n\nIntegración"
      },
      {
        "id": "v20_069",
        "front": "___ is unfair differences in wealth or opportunity.",
        "back": "Inequality\n\nDesigualdad"
      },
      {
        "id": "v20_070",
        "front": "___ is the state of lacking basic resources.",
        "back": "Poverty\n\nPobreza"
      },
      {
        "id": "v20_071",
        "front": "___ is government support for citizens in need.",
        "back": "Welfare\n\nBienestar social / prestaciones"
      },
      {
        "id": "v20_072",
        "front": "A ___ provides social security to its citizens.",
        "back": "welfare state\n\nEstado de bienestar"
      },
      {
        "id": "v20_073",
        "front": "___ (UBI) is a regular payment to all citizens.",
        "back": "Universal Basic Income\n\nRenta básica universal"
      },
      {
        "id": "v20_074",
        "front": "___ measures reduce public spending to cut debt.",
        "back": "Austerity\n\nMedidas de austeridad"
      },
      {
        "id": "v20_075",
        "front": "___ is money the government spends on services.",
        "back": "Public spending\n\nGasto público"
      },
      {
        "id": "v20_076",
        "front": "___ is the system of collecting money from citizens.",
        "back": "Taxation\n\nSistema tributario / fiscalidad"
      },
      {
        "id": "v20_077",
        "front": "___ of wealth moves resources from rich to poor.",
        "back": "Redistribution\n\nRedistribución de la riqueza"
      },
      {
        "id": "v20_078",
        "front": "___ is unfair treatment based on a characteristic.",
        "back": "Discrimination\n\nDiscriminación"
      },
      {
        "id": "v20_079",
        "front": "___ is discrimination based on race or ethnicity.",
        "back": "Racism\n\nRacismo"
      },
      {
        "id": "v20_080",
        "front": "___ is discrimination based on gender.",
        "back": "Sexism\n\nSexismo"
      },
      {
        "id": "v20_081",
        "front": "___ is discrimination based on age.",
        "back": "Ageism\n\nEdadismo"
      },
      {
        "id": "v20_082",
        "front": "___ is discrimination against LGBTQ+ people.",
        "back": "Homophobia\n\nHomofobia"
      },
      {
        "id": "v20_083",
        "front": "___ means everyone has the same rights and opportunities.",
        "back": "Equality\n\nIgualdad"
      },
      {
        "id": "v20_084",
        "front": "___ means everyone gets what they need to be equal.",
        "back": "Equity\n\nEquidad"
      },
      {
        "id": "v20_085",
        "front": "___ refers to the presence of many different backgrounds.",
        "back": "Diversity\n\nDiversidad"
      },
      {
        "id": "v20_086",
        "front": "___ means everyone is welcomed and valued.",
        "back": "Inclusion\n\nInclusión"
      },
      {
        "id": "v20_087",
        "front": "___ is an unearned advantage based on background.",
        "back": "Privilege\n\nPrivilegio"
      },
      {
        "id": "v20_088",
        "front": "___ is campaigning for social or political change.",
        "back": "Activism\n\nActivismo"
      },
      {
        "id": "v20_089",
        "front": "A ___ is a public demonstration of opposition.",
        "back": "protest\n\nProtesta / manifestación"
      },
      {
        "id": "v20_090",
        "front": "A ___ is when workers stop work to demand better conditions.",
        "back": "strike\n\nHuelga"
      },
      {
        "id": "v20_091",
        "front": "A ___ is refusing to buy or use something as a protest.",
        "back": "boycott\n\nBoicot"
      },
      {
        "id": "v20_092",
        "front": "Civil ___ is non-violent resistance to authority.",
        "back": "disobedience\n\nDesobediencia civil"
      },
      {
        "id": "v20_093",
        "front": "___ is the right to express opinions without censorship.",
        "back": "Freedom of speech\n\nLibertad de expresión"
      },
      {
        "id": "v20_094",
        "front": "___ is suppression of information or expression.",
        "back": "Censorship\n\nCensura"
      },
      {
        "id": "v20_095",
        "front": "___ is biased information used to promote a cause.",
        "back": "Propaganda\n\nPropaganda"
      },
      {
        "id": "v20_096",
        "front": "___ is deliberately false information presented as news.",
        "back": "Fake news\n\nNoticias falsas / fake news"
      },
      {
        "id": "v20_097",
        "front": "___ is when reporting favours one side.",
        "back": "Media bias\n\nSesgo mediático"
      }
    ]
  },
  {
    "section": 21,
    "title": "Medioambiente",
    "cards": [
      {
        "id": "v21_001",
        "front": "___ refers to long-term shifts in global temperatures and weather.",
        "back": "Climate change\n\nCambio climático"
      },
      {
        "id": "v21_002",
        "front": "___ is the rise in Earth's average temperature.",
        "back": "Global warming\n\nCalentamiento global"
      },
      {
        "id": "v21_003",
        "front": "The ___ traps heat in the atmosphere.",
        "back": "greenhouse effect\n\nEfecto invernadero"
      },
      {
        "id": "v21_004",
        "front": "___ include CO₂, methane and nitrous oxide.",
        "back": "Greenhouse gases\n\nGases de efecto invernadero"
      },
      {
        "id": "v21_005",
        "front": "___ (CO₂) is the main greenhouse gas from burning fossil fuels.",
        "back": "Carbon dioxide\n\nDióxido de carbono / CO₂"
      },
      {
        "id": "v21_006",
        "front": "___ is the total greenhouse gas emissions caused by an individual.",
        "back": "Carbon footprint\n\nHuella de carbono"
      },
      {
        "id": "v21_007",
        "front": "___ means net zero greenhouse gas emissions.",
        "back": "Carbon neutral\n\nCarbono neutro / neutro en carbono"
      },
      {
        "id": "v21_008",
        "front": "___ means balancing emissions produced with emissions removed.",
        "back": "Net zero\n\nCero neto / neutralidad climática"
      },
      {
        "id": "v21_009",
        "front": "___ include coal, oil and natural gas — formed from ancient organisms.",
        "back": "Fossil fuels\n\nCombustibles fósiles"
      },
      {
        "id": "v21_010",
        "front": "___ is a black rock burned for energy — the most polluting fossil fuel.",
        "back": "Coal\n\nCarbón"
      },
      {
        "id": "v21_011",
        "front": "___ / ___ is a liquid fossil fuel refined into petrol, diesel etc.",
        "back": "Oil / petroleum\n\nPetróleo"
      },
      {
        "id": "v21_012",
        "front": "___ is a fossil fuel used for heating and electricity.",
        "back": "Natural gas\n\nGas natural"
      },
      {
        "id": "v21_013",
        "front": "___ comes from sources that are naturally replenished.",
        "back": "Renewable energy\n\nEnergía renovable"
      },
      {
        "id": "v21_014",
        "front": "___ converts sunlight into electricity.",
        "back": "Solar power\n\nEnergía solar"
      },
      {
        "id": "v21_015",
        "front": "___ uses turbines to generate electricity from wind.",
        "back": "Wind power\n\nEnergía eólica"
      },
      {
        "id": "v21_016",
        "front": "___ generates electricity from flowing water.",
        "back": "Hydropower\n\nEnergía hidroeléctrica"
      },
      {
        "id": "v21_017",
        "front": "___ uses heat from within the Earth.",
        "back": "Geothermal energy\n\nEnergía geotérmica"
      },
      {
        "id": "v21_018",
        "front": "___ is generated by splitting atoms.",
        "back": "Nuclear energy\n\nEnergía nuclear"
      },
      {
        "id": "v21_019",
        "front": "A ___ captures sunlight and converts it to electricity.",
        "back": "solar panel\n\nPanel solar"
      },
      {
        "id": "v21_020",
        "front": "A ___ generates electricity from wind rotation.",
        "back": "wind turbine\n\nAerogenerador / turbina eólica"
      },
      {
        "id": "v21_021",
        "front": "An ___ (EV) runs on electricity rather than petrol.",
        "back": "electric vehicle\n\nVehículo eléctrico"
      },
      {
        "id": "v21_022",
        "front": "___ are gases released into the atmosphere.",
        "back": "Emissions\n\nEmisiones"
      },
      {
        "id": "v21_023",
        "front": "___ is contamination of the atmosphere.",
        "back": "Air pollution\n\nContaminación atmosférica"
      },
      {
        "id": "v21_024",
        "front": "___ is contamination of rivers, lakes or oceans.",
        "back": "Water pollution\n\nContaminación del agua"
      },
      {
        "id": "v21_025",
        "front": "___ is contamination of the ground.",
        "back": "Soil pollution\n\nContaminación del suelo"
      },
      {
        "id": "v21_026",
        "front": "___ is excessive disruptive sound in the environment.",
        "back": "Noise pollution\n\nContaminación acústica"
      },
      {
        "id": "v21_027",
        "front": "___ is excessive artificial light affecting the night sky.",
        "back": "Light pollution\n\nContaminación lumínica"
      },
      {
        "id": "v21_028",
        "front": "A ___ is a substance that contaminates the environment.",
        "back": "pollutant\n\nContaminante"
      },
      {
        "id": "v21_029",
        "front": "___ is a mixture of smoke and fog caused by pollution.",
        "back": "Smog\n\nSmog / niebla tóxica"
      },
      {
        "id": "v21_030",
        "front": "The ___ protects Earth from UV radiation.",
        "back": "ozone layer\n\nCapa de ozono"
      },
      {
        "id": "v21_031",
        "front": "The ___ is the thinning of the ozone layer over Antarctica.",
        "back": "ozone hole\n\nAgujero de ozono"
      },
      {
        "id": "v21_032",
        "front": "___ is the large-scale removal of forests.",
        "back": "Deforestation\n\nDeforestación"
      },
      {
        "id": "v21_033",
        "front": "___ is planting trees to restore forests.",
        "back": "Reforestation\n\nReforestación"
      },
      {
        "id": "v21_034",
        "front": "___ is the variety of life in an ecosystem.",
        "back": "Biodiversity\n\nBiodiversidad"
      },
      {
        "id": "v21_035",
        "front": "An ___ is a community of living organisms and their environment.",
        "back": "ecosystem\n\nEcosistema"
      },
      {
        "id": "v21_036",
        "front": "A ___ is the natural environment of a species.",
        "back": "habitat\n\nHábitat"
      },
      {
        "id": "v21_037",
        "front": "An ___ is at risk of extinction.",
        "back": "endangered species\n\nEspecie en peligro de extinción"
      },
      {
        "id": "v21_038",
        "front": "___ is the permanent disappearance of a species.",
        "back": "Extinction\n\nExtinción"
      },
      {
        "id": "v21_039",
        "front": "___ refers to wild animals and plants in their natural environment.",
        "back": "Wildlife\n\nFauna y flora silvestres"
      },
      {
        "id": "v21_040",
        "front": "A ___ is a protected area for wildlife.",
        "back": "nature reserve\n\nReserva natural"
      },
      {
        "id": "v21_041",
        "front": "A ___ is a protected area of natural or scenic land.",
        "back": "national park\n\nParque nacional"
      },
      {
        "id": "v21_042",
        "front": "___ depletes fish populations beyond sustainable levels.",
        "back": "Overfishing\n\nSobrepesca"
      },
      {
        "id": "v21_043",
        "front": "___ is the illegal hunting or capture of animals.",
        "back": "Poaching\n\nCaza furtiva"
      },
      {
        "id": "v21_044",
        "front": "___ is the accumulation of plastic waste in the environment.",
        "back": "Plastic pollution\n\nContaminación por plásticos"
      },
      {
        "id": "v21_045",
        "front": "___ are tiny plastic particles in water, food and air.",
        "back": "Microplastics\n\nMicroplásticos"
      },
      {
        "id": "v21_046",
        "front": "A ___ is a site where waste is buried underground.",
        "back": "landfill\n\nVertedero"
      },
      {
        "id": "v21_047",
        "front": "___ converts waste into reusable material.",
        "back": "Recycling\n\nReciclaje"
      },
      {
        "id": "v21_048",
        "front": "___ converts organic waste into fertiliser.",
        "back": "Composting\n\nCompostaje"
      },
      {
        "id": "v21_049",
        "front": "___ is the collection, treatment and disposal of waste.",
        "back": "Waste management\n\nGestión de residuos"
      },
      {
        "id": "v21_050",
        "front": "To ___ means to use less of something.",
        "back": "reduce\n\nReducir (consumo)"
      },
      {
        "id": "v21_051",
        "front": "To ___ means to use something again rather than throw it away.",
        "back": "reuse\n\nReutilizar"
      },
      {
        "id": "v21_052",
        "front": "To ___ means to process waste into new materials.",
        "back": "recycle\n\nReciclar"
      },
      {
        "id": "v21_053",
        "front": "___ is designed to be used once then discarded.",
        "back": "Single-use plastic\n\nPlástico de un solo uso"
      },
      {
        "id": "v21_054",
        "front": "___ development meets present needs without harming the future.",
        "back": "Sustainable\n\nSostenible"
      },
      {
        "id": "v21_055",
        "front": "___ is the ability to be maintained without depleting resources.",
        "back": "Sustainability\n\nSostenibilidad"
      },
      {
        "id": "v21_056",
        "front": "___ / ___ means not harmful to the environment.",
        "back": "Eco-friendly / green\n\nEcológico / respetuoso con el medioambiente"
      },
      {
        "id": "v21_057",
        "front": "___ farming avoids synthetic chemicals and pesticides.",
        "back": "Organic\n\nEcológico / orgánico (agricultura)"
      },
      {
        "id": "v21_058",
        "front": "___ ensures producers receive fair payment.",
        "back": "Fair trade\n\nComercio justo"
      },
      {
        "id": "v21_059",
        "front": "A ___ compensates for emissions by funding green projects.",
        "back": "carbon offset\n\nCompensación de carbono"
      },
      {
        "id": "v21_060",
        "front": "___ is making misleading claims about environmental credentials.",
        "back": "Greenwashing\n\nGreenwashing / ecoblanqueo"
      },
      {
        "id": "v21_061",
        "front": "The ___ is an international treaty on climate change.",
        "back": "Paris Agreement\n\nAcuerdo de París"
      },
      {
        "id": "v21_062",
        "front": "The ___ (Conference of the Parties) is the annual UN climate summit.",
        "back": "COP\n\nCOP (cumbre climática de la ONU)"
      },
      {
        "id": "v21_063",
        "front": "___ is caused by melting ice and warming oceans.",
        "back": "Sea level rise\n\nSubida del nivel del mar"
      },
      {
        "id": "v21_064",
        "front": "___ occurs when warming waters cause coral to expel algae.",
        "back": "Coral bleaching\n\nBlanqueamiento del coral"
      },
      {
        "id": "v21_065",
        "front": "An ___ is the release of petroleum into the environment.",
        "back": "oil spill\n\nDerrame de petróleo"
      },
      {
        "id": "v21_066",
        "front": "___ is caused by air pollution dissolving in rainwater.",
        "back": "Acid rain\n\nLluvia ácida"
      },
      {
        "id": "v21_067",
        "front": "___ is the process by which land becomes desert.",
        "back": "Desertification\n\nDesertificación"
      },
      {
        "id": "v21_068",
        "front": "A ___ / ___ is an uncontrolled fire in a natural area.",
        "back": "wildfire / forest fire\n\nIncendio forestal"
      },
      {
        "id": "v21_069",
        "front": "A ___ is a prolonged period of abnormally low rainfall.",
        "back": "drought\n\nSequía"
      },
      {
        "id": "v21_070",
        "front": "A ___ is an overflow of water onto normally dry land.",
        "back": "flood\n\nInundación"
      },
      {
        "id": "v21_071",
        "front": "A ___ is an extended period of extreme heat.",
        "back": "heatwave\n\nOla de calor"
      },
      {
        "id": "v21_072",
        "front": "___ is ground that remains frozen all year.",
        "back": "Permafrost\n\nPermafrost / suelo permanentemente helado"
      },
      {
        "id": "v21_073",
        "front": "___ is a potent greenhouse gas released by livestock and landfills.",
        "back": "Methane\n\nMetano"
      },
      {
        "id": "v21_074",
        "front": "___ extracts gas by injecting high-pressure liquid into rock.",
        "back": "Fracking\n\nFracking / fracturación hidráulica"
      },
      {
        "id": "v21_075",
        "front": "A ___ charges businesses for their emissions.",
        "back": "carbon tax\n\nImpuesto al carbono"
      },
      {
        "id": "v21_076",
        "front": "___ limits total emissions and allows trading of allowances.",
        "back": "Cap and trade\n\nMercado de emisiones / cap and trade"
      },
      {
        "id": "v21_077",
        "front": "___ is concern for and action to protect the environment.",
        "back": "Environmentalism\n\nEcologismo / ambientalismo"
      },
      {
        "id": "v21_078",
        "front": "An ___ / ___ works to protect the environment.",
        "back": "environmentalist / conservationist\n\nEcologista / conservacionista"
      },
      {
        "id": "v21_079",
        "front": "___ is a prominent climate activist.",
        "back": "Greta Thunberg\n\nGreta Thunberg (activista climática)"
      },
      {
        "id": "v21_080",
        "front": "___ is an international environmental campaigning organisation.",
        "back": "Greenpeace\n\nGreenpeace"
      }
    ]
  },
  {
    "section": 22,
    "title": "Derecho y Justicia",
    "cards": [
      {
        "id": "v22_001",
        "front": "A ___ is a rule enforced by a government.",
        "back": "law\n\nLey"
      },
      {
        "id": "v22_002",
        "front": "___ is the body of laws in a country.",
        "back": "Legislation\n\nLegislación"
      },
      {
        "id": "v22_003",
        "front": "A ___ is the set of laws and institutions for enforcing them.",
        "back": "legal system\n\nSistema legal / jurídico"
      },
      {
        "id": "v22_004",
        "front": "___ deals with disputes between individuals.",
        "back": "Civil law\n\nDerecho civil"
      },
      {
        "id": "v22_005",
        "front": "___ deals with offences against the state or society.",
        "back": "Criminal law\n\nDerecho penal"
      },
      {
        "id": "v22_006",
        "front": "___ is based on precedent from court decisions.",
        "back": "Common law\n\nDerecho consuetudinario / common law"
      },
      {
        "id": "v22_007",
        "front": "___ relates to the fundamental laws of a state.",
        "back": "Constitutional law\n\nDerecho constitucional"
      },
      {
        "id": "v22_008",
        "front": "A ___ is something you are legally or morally entitled to.",
        "back": "right\n\nDerecho (fundamental)"
      },
      {
        "id": "v22_009",
        "front": "___ are fundamental rights belonging to all people.",
        "back": "Human rights\n\nDerechos humanos"
      },
      {
        "id": "v22_010",
        "front": "A ___ presides over a court and makes legal decisions.",
        "back": "judge\n\nJuez"
      },
      {
        "id": "v22_011",
        "front": "A ___ handles minor criminal cases in lower courts.",
        "back": "magistrate\n\nMagistrado / juez de paz"
      },
      {
        "id": "v22_012",
        "front": "A ___ (BrE) represents clients in higher courts.",
        "back": "barrister\n\nAbogado de sala (RU)"
      },
      {
        "id": "v22_013",
        "front": "A ___ (BrE) provides legal advice and handles documentation.",
        "back": "solicitor\n\nAbogado / asesor jurídico (RU)"
      },
      {
        "id": "v22_014",
        "front": "A ___ / ___ (AmE) is a general term for a legal professional.",
        "back": "lawyer / attorney\n\nAbogado"
      },
      {
        "id": "v22_015",
        "front": "A ___ argues the case against the accused.",
        "back": "prosecutor\n\nFiscal / acusación pública"
      },
      {
        "id": "v22_016",
        "front": "A ___ represents the accused.",
        "back": "defence lawyer\n\nAbogado defensor"
      },
      {
        "id": "v22_017",
        "front": "A ___ is a group of citizens who decide the verdict in a trial.",
        "back": "jury\n\nJurado"
      },
      {
        "id": "v22_018",
        "front": "A ___ testifies in court about what they know.",
        "back": "witness\n\nTestigo"
      },
      {
        "id": "v22_019",
        "front": "An ___ provides specialist knowledge.",
        "back": "expert witness\n\nPerito / testigo experto"
      },
      {
        "id": "v22_020",
        "front": "A ___ / ___ brings a civil case.",
        "back": "plaintiff / claimant\n\nDemandante"
      },
      {
        "id": "v22_021",
        "front": "A ___ is the person accused in a case.",
        "back": "defendant\n\nDemandado / acusado"
      },
      {
        "id": "v22_022",
        "front": "A ___ is someone believed to have committed a crime.",
        "back": "suspect\n\nSospechoso"
      },
      {
        "id": "v22_023",
        "front": "A ___ is someone who has committed a crime.",
        "back": "criminal\n\nCriminal / delincuente"
      },
      {
        "id": "v22_024",
        "front": "An ___ is someone who has broken the law.",
        "back": "offender\n\nInfractor / delincuente"
      },
      {
        "id": "v22_025",
        "front": "A ___ is someone harmed by a crime.",
        "back": "victim\n\nVíctima"
      },
      {
        "id": "v22_026",
        "front": "A ___ is an act that breaks the law.",
        "back": "crime\n\nDelito / crimen"
      },
      {
        "id": "v22_027",
        "front": "A ___ (AmE) is a serious crime.",
        "back": "felony\n\nDelito grave (EEUU)"
      },
      {
        "id": "v22_028",
        "front": "A ___ is a minor offence.",
        "back": "misdemeanour\n\nDelito menor / falta"
      },
      {
        "id": "v22_029",
        "front": "An ___ is any act that breaks the law.",
        "back": "offence\n\nInfracción / delito"
      },
      {
        "id": "v22_030",
        "front": "___ is the unlawful intentional killing of a person.",
        "back": "Murder\n\nAsesinato"
      },
      {
        "id": "v22_031",
        "front": "___ is killing without intent.",
        "back": "Manslaughter\n\nHomicidio involuntario"
      },
      {
        "id": "v22_032",
        "front": "___ is a physical attack or threat of one.",
        "back": "Assault\n\nAgresión / asalto"
      },
      {
        "id": "v22_033",
        "front": "___ is taking someone's property without permission.",
        "back": "Theft\n\nRobo / hurto"
      },
      {
        "id": "v22_034",
        "front": "___ is theft using force or threats.",
        "back": "Robbery\n\nRobo con violencia"
      },
      {
        "id": "v22_035",
        "front": "___ is entering a building to commit a crime.",
        "back": "Burglary\n\nRobo con allanamiento"
      },
      {
        "id": "v22_036",
        "front": "___ is deception for financial gain.",
        "back": "Fraud\n\nFraude"
      },
      {
        "id": "v22_037",
        "front": "___ is creating fake documents or signatures.",
        "back": "Forgery\n\nFalsificación (documentos)"
      },
      {
        "id": "v22_038",
        "front": "___ is demanding money under threat of exposure.",
        "back": "Blackmail\n\nChantaje"
      },
      {
        "id": "v22_039",
        "front": "___ is offering money to influence someone's actions.",
        "back": "Bribery\n\nSoborno"
      },
      {
        "id": "v22_040",
        "front": "___ is taking someone illegally against their will.",
        "back": "Kidnapping\n\nSecuestro"
      },
      {
        "id": "v22_041",
        "front": "___ is using violence for political or ideological aims.",
        "back": "Terrorism\n\nTerrorismo"
      },
      {
        "id": "v22_042",
        "front": "___ is criminal activity carried out online.",
        "back": "Cybercrime\n\nCibercrimen / delito informático"
      },
      {
        "id": "v22_043",
        "front": "___ is the illegal trade of controlled substances.",
        "back": "Drug trafficking\n\nTráfico de drogas"
      },
      {
        "id": "v22_044",
        "front": "___ hides the origins of illegally obtained money.",
        "back": "Money laundering\n\nBlanqueo de capitales / lavado de dinero"
      },
      {
        "id": "v22_045",
        "front": "___ is deliberate damage to property.",
        "back": "Vandalism\n\nVandalismo"
      },
      {
        "id": "v22_046",
        "front": "___ is entering someone's property without permission.",
        "back": "Trespassing\n\nAllanamiento de morada (sin robo)"
      },
      {
        "id": "v22_047",
        "front": "A ___ is where legal cases are heard.",
        "back": "court\n\nTribunal / juzgado"
      },
      {
        "id": "v22_048",
        "front": "A ___ is the room where a trial takes place.",
        "back": "courtroom\n\nSala del tribunal"
      },
      {
        "id": "v22_049",
        "front": "A ___ is the legal process to determine guilt.",
        "back": "trial\n\nJuicio"
      },
      {
        "id": "v22_050",
        "front": "A ___ is a preliminary court session.",
        "back": "hearing\n\nVista / audiencia"
      },
      {
        "id": "v22_051",
        "front": "A ___ is the jury's or judge's decision.",
        "back": "verdict\n\nVeredicto"
      },
      {
        "id": "v22_052",
        "front": "A ___ verdict means the accused committed the crime.",
        "back": "guilty\n\nCulpable"
      },
      {
        "id": "v22_053",
        "front": "A ___ verdict means the accused did not commit the crime.",
        "back": "not guilty\n\nNo culpable / inocente"
      },
      {
        "id": "v22_054",
        "front": "To be ___ means to be found not guilty.",
        "back": "acquitted\n\nSer absuelto"
      },
      {
        "id": "v22_055",
        "front": "To be ___ means to be found guilty.",
        "back": "convicted\n\nSer condenado / declarado culpable"
      },
      {
        "id": "v22_056",
        "front": "A ___ is the punishment given after conviction.",
        "back": "sentence\n\nSentencia / condena"
      },
      {
        "id": "v22_057",
        "front": "A ___ is a financial penalty.",
        "back": "fine\n\nMulta"
      },
      {
        "id": "v22_058",
        "front": "___ is unpaid work done as a punishment.",
        "back": "Community service\n\nTrabajos comunitarios / en beneficio de la comunidad"
      },
      {
        "id": "v22_059",
        "front": "A ___ is a conviction where prison is delayed conditionally.",
        "back": "suspended sentence\n\nCondena en suspenso"
      },
      {
        "id": "v22_060",
        "front": "___ is a supervised period instead of prison.",
        "back": "Probation\n\nLibertad condicional (vigilada)"
      },
      {
        "id": "v22_061",
        "front": "___ / ___ means serving time in jail.",
        "back": "Imprisonment / a prison sentence\n\nPena de prisión"
      },
      {
        "id": "v22_062",
        "front": "A ___ means imprisonment for the rest of one's life.",
        "back": "life sentence\n\nCadena perpetua"
      },
      {
        "id": "v22_063",
        "front": "___ is early release from prison under conditions.",
        "back": "Parole\n\nLibertad condicional (por buena conducta)"
      },
      {
        "id": "v22_064",
        "front": "An ___ challenges a court's decision in a higher court.",
        "back": "appeal\n\nRecurso / apelación"
      },
      {
        "id": "v22_065",
        "front": "___ is information used to prove or disprove facts.",
        "back": "Evidence\n\nPrueba / evidencia"
      },
      {
        "id": "v22_066",
        "front": "___ is conclusive evidence establishing a fact.",
        "back": "Proof\n\nPrueba concluyente / demostración"
      },
      {
        "id": "v22_067",
        "front": "An ___ is evidence that a suspect was elsewhere at the time.",
        "back": "alibi\n\nCoartada"
      },
      {
        "id": "v22_068",
        "front": "A ___ is a legal document authorising an action by police.",
        "back": "warrant\n\nOrden judicial"
      },
      {
        "id": "v22_069",
        "front": "An ___ is the act of taking someone into custody.",
        "back": "arrest\n\nDetención / arresto"
      },
      {
        "id": "v22_070",
        "front": "To be ___ a crime means to be formally accused.",
        "back": "charged with\n\nSer acusado formalmente de un delito"
      },
      {
        "id": "v22_071",
        "front": "To ___ means to formally admit the offence.",
        "back": "plead guilty\n\nDeclararse culpable"
      },
      {
        "id": "v22_072",
        "front": "To ___ means to formally deny the offence.",
        "back": "plead not guilty\n\nDeclararse inocente"
      },
      {
        "id": "v22_073",
        "front": "___ is money paid to allow a suspect to remain free before trial.",
        "back": "Bail\n\nFianza"
      },
      {
        "id": "v22_074",
        "front": "___ is being held in custody before trial.",
        "back": "Remand\n\nPrisión preventiva"
      },
      {
        "id": "v22_075",
        "front": "___ ensures fair legal procedures.",
        "back": "Due process\n\nDebido proceso / garantías procesales"
      },
      {
        "id": "v22_076",
        "front": "___ means accused are innocent until proven guilty.",
        "back": "Presumption of innocence\n\nPresunción de inocencia"
      },
      {
        "id": "v22_077",
        "front": "The ___ lies with the party making the accusation.",
        "back": "burden of proof\n\nCarga de la prueba"
      },
      {
        "id": "v22_078",
        "front": "___ is the standard of proof in criminal cases.",
        "back": "Beyond reasonable doubt\n\nMás allá de toda duda razonable"
      },
      {
        "id": "v22_079",
        "front": "___ is free legal assistance for those who can't afford it.",
        "back": "Legal aid\n\nAsistencia jurídica gratuita / turno de oficio"
      },
      {
        "id": "v22_080",
        "front": "A ___ is a legally binding agreement.",
        "back": "contract\n\nContrato (derecho civil)"
      },
      {
        "id": "v22_081",
        "front": "___ is legal responsibility for something.",
        "back": "Liability\n\nResponsabilidad legal"
      },
      {
        "id": "v22_082",
        "front": "___ is failure to take proper care resulting in harm.",
        "back": "Negligence\n\nNegligencia"
      },
      {
        "id": "v22_083",
        "front": "___ is money paid to a victim for loss or injury.",
        "back": "Compensation\n\nIndemnización / compensación"
      },
      {
        "id": "v22_084",
        "front": "___ is money awarded to a claimant in a civil case.",
        "back": "Damages\n\nDaños y perjuicios"
      },
      {
        "id": "v22_085",
        "front": "___ (IP) protects creations of the mind.",
        "back": "Intellectual property\n\nPropiedad intelectual"
      },
      {
        "id": "v22_086",
        "front": "A ___ protects an invention for a set period.",
        "back": "patent\n\nPatente"
      },
      {
        "id": "v22_087",
        "front": "A ___ protects a brand name or logo.",
        "back": "trademark\n\nMarca registrada"
      },
      {
        "id": "v22_088",
        "front": "___ protects original creative works.",
        "back": "Copyright\n\nDerechos de autor"
      },
      {
        "id": "v22_089",
        "front": "A ___ protects personal information.",
        "back": "privacy law\n\nLey de privacidad / protección de datos"
      },
      {
        "id": "v22_090",
        "front": "___ is European data protection legislation.",
        "back": "GDPR\n\nRGPD / Reglamento General de Protección de Datos"
      }
    ]
  },
  {
    "section": 23,
    "title": "Ciencia y Tecnología",
    "cards": [
      {
        "id": "v23_001",
        "front": "A ___ is an educated guess tested by experiment.",
        "back": "hypothesis\n\nHipótesis"
      },
      {
        "id": "v23_002",
        "front": "A ___ is a well-tested explanation supported by evidence.",
        "back": "theory\n\nTeoría científica"
      },
      {
        "id": "v23_003",
        "front": "An ___ tests a hypothesis under controlled conditions.",
        "back": "experiment\n\nExperimento"
      },
      {
        "id": "v23_004",
        "front": "A ___ is a factor that can change in an experiment.",
        "back": "variable\n\nVariable"
      },
      {
        "id": "v23_005",
        "front": "A ___ is unchanged to compare against the experimental group.",
        "back": "control group\n\nGrupo de control"
      },
      {
        "id": "v23_006",
        "front": "___ is evaluation of research by other experts.",
        "back": "Peer review\n\nRevisión por pares"
      },
      {
        "id": "v23_007",
        "front": "A ___ / ___ presents scientific findings.",
        "back": "study / research paper\n\nEstudio / artículo científico"
      },
      {
        "id": "v23_008",
        "front": "___ is information collected for analysis.",
        "back": "Data\n\nDatos"
      },
      {
        "id": "v23_009",
        "front": "___ is the analysis and interpretation of data.",
        "back": "Statistics\n\nEstadística"
      },
      {
        "id": "v23_010",
        "front": "A ___ is a subset of a population used in research.",
        "back": "sample\n\nMuestra (de investigación)"
      },
      {
        "id": "v23_011",
        "front": "___ means two variables are related but not necessarily causally.",
        "back": "Correlation\n\nCorrelación"
      },
      {
        "id": "v23_012",
        "front": "___ means one variable directly causes another.",
        "back": "Causation\n\nCausalidad"
      },
      {
        "id": "v23_013",
        "front": "A ___ is an inactive substance given to a control group.",
        "back": "placebo\n\nPlacebo"
      },
      {
        "id": "v23_014",
        "front": "A ___ means neither participants nor researchers know who gets the treatment.",
        "back": "double-blind study\n\nEstudio doble ciego"
      },
      {
        "id": "v23_015",
        "front": "___ means repeating a study to verify results.",
        "back": "Replication\n\nReplicación (científica)"
      },
      {
        "id": "v23_016",
        "front": "An ___ is the basic unit of matter.",
        "back": "atom\n\nÁtomo"
      },
      {
        "id": "v23_017",
        "front": "A ___ is two or more atoms bonded together.",
        "back": "molecule\n\nMolécula"
      },
      {
        "id": "v23_018",
        "front": "An ___ is a substance made of one type of atom.",
        "back": "element\n\nElemento (químico)"
      },
      {
        "id": "v23_019",
        "front": "A ___ is a substance of two or more elements chemically bonded.",
        "back": "compound\n\nCompuesto químico"
      },
      {
        "id": "v23_020",
        "front": "A ___ is substances combined but not chemically bonded.",
        "back": "mixture\n\nMezcla"
      },
      {
        "id": "v23_021",
        "front": "___ is anything that has mass and takes up space.",
        "back": "Matter\n\nMateria"
      },
      {
        "id": "v23_022",
        "front": "A ___ has fixed shape and volume.",
        "back": "solid\n\nSólido"
      },
      {
        "id": "v23_023",
        "front": "A ___ has fixed volume but takes the shape of its container.",
        "back": "liquid\n\nLíquido"
      },
      {
        "id": "v23_024",
        "front": "A ___ has no fixed shape or volume.",
        "back": "gas\n\nGas"
      },
      {
        "id": "v23_025",
        "front": "___ is a high-energy ionised gas — the fourth state of matter.",
        "back": "Plasma\n\nPlasma (cuarto estado de la materia)"
      },
      {
        "id": "v23_026",
        "front": "A ___ changes substances into new ones.",
        "back": "chemical reaction\n\nReacción química"
      },
      {
        "id": "v23_027",
        "front": "___ is a chemical reaction involving oxygen — e.g. rusting.",
        "back": "Oxidation\n\nOxidación"
      },
      {
        "id": "v23_028",
        "front": "___ measures acidity — 0 is most acid, 14 most alkaline.",
        "back": "pH\n\npH (medida de acidez)"
      },
      {
        "id": "v23_029",
        "front": "An ___ has pH below 7.",
        "back": "acid\n\nÁcido"
      },
      {
        "id": "v23_030",
        "front": "An ___ / ___ has pH above 7.",
        "back": "alkali / base\n\nBase / álcali"
      },
      {
        "id": "v23_031",
        "front": "___ is rapid burning releasing heat and light.",
        "back": "Combustion\n\nCombustión"
      },
      {
        "id": "v23_032",
        "front": "___ is liquid turning to gas below boiling point.",
        "back": "Evaporation\n\nEvaporación"
      },
      {
        "id": "v23_033",
        "front": "___ is gas turning to liquid when cooled.",
        "back": "Condensation\n\nCondensación"
      },
      {
        "id": "v23_034",
        "front": "___ is solid turning to liquid when heated.",
        "back": "Melting\n\nFusión / derretimiento"
      },
      {
        "id": "v23_035",
        "front": "___ is liquid turning to solid when cooled.",
        "back": "Freezing\n\nCongelación / solidificación"
      },
      {
        "id": "v23_036",
        "front": "A ___ is the basic structural unit of living organisms.",
        "back": "cell\n\nCélula"
      },
      {
        "id": "v23_037",
        "front": "___ (deoxyribonucleic acid) carries genetic information.",
        "back": "DNA\n\nADN"
      },
      {
        "id": "v23_038",
        "front": "A ___ is a segment of DNA that codes for a trait.",
        "back": "gene\n\nGen"
      },
      {
        "id": "v23_039",
        "front": "___ is the study of heredity and genes.",
        "back": "Genetics\n\nGenética"
      },
      {
        "id": "v23_040",
        "front": "___ is the gradual change in species over generations.",
        "back": "Evolution\n\nEvolución"
      },
      {
        "id": "v23_041",
        "front": "___ favours traits that improve survival and reproduction.",
        "back": "Natural selection\n\nSelección natural"
      },
      {
        "id": "v23_042",
        "front": "A ___ is a structure containing genes.",
        "back": "chromosome\n\nCromosoma"
      },
      {
        "id": "v23_043",
        "front": "___ converts sunlight and CO₂ into sugar in plants.",
        "back": "Photosynthesis\n\nFotosíntesis"
      },
      {
        "id": "v23_044",
        "front": "___ releases energy from glucose in cells.",
        "back": "Respiration\n\nRespiración celular"
      },
      {
        "id": "v23_045",
        "front": "A ___ is a non-living particle that replicates inside host cells.",
        "back": "virus\n\nVirus"
      },
      {
        "id": "v23_046",
        "front": "A ___ (pl. bacteria) is a single-celled living organism.",
        "back": "bacterium\n\nBacteria"
      },
      {
        "id": "v23_047",
        "front": "An ___ kills or inhibits bacteria.",
        "back": "antibiotic\n\nAntibiótico"
      },
      {
        "id": "v23_048",
        "front": "___ stimulates immunity against disease.",
        "back": "Vaccination\n\nVacunación"
      },
      {
        "id": "v23_049",
        "front": "The ___ defends the body against pathogens.",
        "back": "immune system\n\nSistema inmunológico"
      },
      {
        "id": "v23_050",
        "front": "___ is the force that attracts objects with mass.",
        "back": "Gravity\n\nGravedad"
      },
      {
        "id": "v23_051",
        "front": "___ is the amount of matter in an object.",
        "back": "Mass\n\nMasa"
      },
      {
        "id": "v23_052",
        "front": "___ is the force of gravity on mass.",
        "back": "Weight\n\nPeso"
      },
      {
        "id": "v23_053",
        "front": "___ is speed in a given direction.",
        "back": "Velocity\n\nVelocidad (con dirección)"
      },
      {
        "id": "v23_054",
        "front": "___ is the rate of change of velocity.",
        "back": "Acceleration\n\nAceleración"
      },
      {
        "id": "v23_055",
        "front": "___ is a push or pull on an object.",
        "back": "Force\n\nFuerza"
      },
      {
        "id": "v23_056",
        "front": "___ is a force opposing motion between surfaces.",
        "back": "Friction\n\nFricción / rozamiento"
      },
      {
        "id": "v23_057",
        "front": "___ is the capacity to do work.",
        "back": "Energy\n\nEnergía"
      },
      {
        "id": "v23_058",
        "front": "___ is the energy of motion.",
        "back": "Kinetic energy\n\nEnergía cinética"
      },
      {
        "id": "v23_059",
        "front": "___ is stored energy.",
        "back": "Potential energy\n\nEnergía potencial"
      },
      {
        "id": "v23_060",
        "front": "___ is thermal energy transferred between systems.",
        "back": "Heat\n\nCalor"
      },
      {
        "id": "v23_061",
        "front": "___ is electromagnetic radiation visible to the human eye.",
        "back": "Light\n\nLuz"
      },
      {
        "id": "v23_062",
        "front": "A ___ is a disturbance that transfers energy.",
        "back": "wave\n\nOnda"
      },
      {
        "id": "v23_063",
        "front": "___ is the number of waves per second.",
        "back": "Frequency\n\nFrecuencia"
      },
      {
        "id": "v23_064",
        "front": "___ is the distance between wave peaks.",
        "back": "Wavelength\n\nLongitud de onda"
      },
      {
        "id": "v23_065",
        "front": "___ is the flow of electric charge.",
        "back": "Electricity\n\nElectricidad"
      },
      {
        "id": "v23_066",
        "front": "A ___ allows electricity to flow through it.",
        "back": "conductor\n\nConductor eléctrico"
      },
      {
        "id": "v23_067",
        "front": "An ___ resists the flow of electricity.",
        "back": "insulator\n\nAislante eléctrico"
      },
      {
        "id": "v23_068",
        "front": "A ___ is a closed path through which electricity flows.",
        "back": "circuit\n\nCircuito eléctrico"
      },
      {
        "id": "v23_069",
        "front": "___ is the electrical pressure that drives current.",
        "back": "Voltage\n\nVoltaje / tensión"
      },
      {
        "id": "v23_070",
        "front": "___ is the flow of electrical charge.",
        "back": "Current\n\nCorriente eléctrica"
      },
      {
        "id": "v23_071",
        "front": "___ opposes the flow of electrical current.",
        "back": "Resistance\n\nResistencia eléctrica"
      },
      {
        "id": "v23_072",
        "front": "A ___ attracts iron and some other metals.",
        "back": "magnet\n\nImán"
      },
      {
        "id": "v23_073",
        "front": "___ is the force between electric charges and magnets.",
        "back": "Electromagnetism\n\nElectromagnetismo"
      },
      {
        "id": "v23_074",
        "front": "___ is energy emitted from unstable atomic nuclei.",
        "back": "Radioactivity\n\nRadioactividad"
      },
      {
        "id": "v23_075",
        "front": "___ splits a large atom releasing energy.",
        "back": "Nuclear fission\n\nFisión nuclear"
      },
      {
        "id": "v23_076",
        "front": "___ combines small atoms releasing massive energy.",
        "back": "Nuclear fusion\n\nFusión nuclear"
      },
      {
        "id": "v23_077",
        "front": "___ (AI) is machine simulation of human intelligence.",
        "back": "Artificial intelligence\n\nInteligencia artificial (IA)"
      },
      {
        "id": "v23_078",
        "front": "___ is AI learning from data without explicit programming.",
        "back": "Machine learning\n\nAprendizaje automático"
      },
      {
        "id": "v23_079",
        "front": "A ___ is an AI system modelled on the brain.",
        "back": "neural network\n\nRed neuronal"
      },
      {
        "id": "v23_080",
        "front": "___ uses multi-layered neural networks.",
        "back": "Deep learning\n\nAprendizaje profundo"
      },
      {
        "id": "v23_081",
        "front": "A ___ (LLM) is an AI trained on massive text data.",
        "back": "large language model\n\nModelo de lenguaje grande (LLM)"
      },
      {
        "id": "v23_082",
        "front": "___ is the design and use of robots.",
        "back": "Robotics\n\nRobótica"
      },
      {
        "id": "v23_083",
        "front": "___ replaces human tasks with machines.",
        "back": "Automation\n\nAutomatización"
      },
      {
        "id": "v23_084",
        "front": "___ uses living systems to develop products.",
        "back": "Biotechnology\n\nBiotecnología"
      },
      {
        "id": "v23_085",
        "front": "___ is a gene-editing technology.",
        "back": "CRISPR\n\nCRISPR (edición genética)"
      },
      {
        "id": "v23_086",
        "front": "___ works at the scale of atoms and molecules.",
        "back": "Nanotechnology\n\nNanotecnología"
      },
      {
        "id": "v23_087",
        "front": "___ uses quantum states to process information.",
        "back": "Quantum computing\n\nComputación cuántica"
      },
      {
        "id": "v23_088",
        "front": "___ is a distributed record-keeping technology.",
        "back": "Blockchain\n\nCadena de bloques / blockchain"
      },
      {
        "id": "v23_089",
        "front": "___ is digital currency using cryptography.",
        "back": "Cryptocurrency\n\nCriptomoneda"
      },
      {
        "id": "v23_090",
        "front": "___ (AR) overlays digital content on the real world.",
        "back": "Augmented reality\n\nRealidad aumentada (RA)"
      },
      {
        "id": "v23_091",
        "front": "___ (VR) creates an immersive digital environment.",
        "back": "Virtual reality\n\nRealidad virtual (RV)"
      },
      {
        "id": "v23_092",
        "front": "The ___ (IoT) connects everyday devices to the internet.",
        "back": "Internet of Things\n\nInternet de las cosas (IoT)"
      },
      {
        "id": "v23_093",
        "front": "A ___ stores and processes data for other devices.",
        "back": "server\n\nServidor"
      },
      {
        "id": "v23_094",
        "front": "The ___ stores data on remote servers accessed via internet.",
        "back": "cloud\n\nLa nube (informática)"
      },
      {
        "id": "v23_095",
        "front": "___ software is freely available and modifiable.",
        "back": "Open source\n\nCódigo abierto / open source"
      },
      {
        "id": "v23_096",
        "front": "An ___ is a set of instructions for solving a problem.",
        "back": "algorithm\n\nAlgoritmo"
      },
      {
        "id": "v23_097",
        "front": "___ / ___ is writing instructions for computers.",
        "back": "Coding / programming\n\nProgramación / código"
      },
      {
        "id": "v23_098",
        "front": "A ___ is an error in software code.",
        "back": "bug\n\nBug / error de código"
      },
      {
        "id": "v23_099",
        "front": "___ is finding and fixing errors in code.",
        "back": "Debugging\n\nDepuración / debugging"
      },
      {
        "id": "v23_100",
        "front": "An ___ (Application Programming Interface) allows software to communicate.",
        "back": "API\n\nAPI (interfaz de programación)"
      }
    ]
  },
  {
    "section": 24,
    "title": "Jardín / Exterior / Mascotas",
    "cards": [
      {
        "id": "v24_001",
        "front": "A ___ is an outdoor area for growing plants.",
        "back": "garden\n\nJardín"
      },
      {
        "id": "v24_002",
        "front": "A ___ is a flat area of cut grass.",
        "back": "lawn\n\nCésped / pradera"
      },
      {
        "id": "v24_003",
        "front": "A ___ is a section of ground where flowers are planted.",
        "back": "flowerbed\n\nMacizo de flores / arriate"
      },
      {
        "id": "v24_004",
        "front": "A ___ / ___ is an area for growing vegetables.",
        "back": "vegetable patch / allotment\n\nHuerto"
      },
      {
        "id": "v24_005",
        "front": "A ___ is a glass structure for growing plants in controlled conditions.",
        "back": "greenhouse\n\nInvernadero"
      },
      {
        "id": "v24_006",
        "front": "A ___ is a small outdoor structure for storing tools.",
        "back": "shed\n\nCobertizo / caseta de jardín"
      },
      {
        "id": "v24_007",
        "front": "A ___ collects organic waste to make fertiliser.",
        "back": "compost bin\n\nCubo de compost"
      },
      {
        "id": "v24_008",
        "front": "A ___ collects rainwater for garden use.",
        "back": "water butt\n\nBarril recolector de agua de lluvia"
      },
      {
        "id": "v24_009",
        "front": "A ___ / ___ delivers water around the garden.",
        "back": "hose pipe / garden hose\n\nManguera de jardín"
      },
      {
        "id": "v24_010",
        "front": "A ___ automatically waters the lawn or garden.",
        "back": "sprinkler\n\nAspersor / rociador"
      },
      {
        "id": "v24_011",
        "front": "A ___ is a container with a spout for watering plants.",
        "back": "watering can\n\nRegadera"
      },
      {
        "id": "v24_012",
        "front": "A ___ cuts grass to an even height.",
        "back": "lawnmower\n\nCortacésped"
      },
      {
        "id": "v24_013",
        "front": "A ___ / ___ cuts grass in awkward edges.",
        "back": "strimmer / trimmer\n\nDesbrozadora / bordeadora"
      },
      {
        "id": "v24_014",
        "front": "A ___ cuts and shapes hedges.",
        "back": "hedge trimmer\n\nTijeras / cortasetos eléctrico"
      },
      {
        "id": "v24_015",
        "front": "A ___ is a tool for digging with a flat blade.",
        "back": "spade\n\nPala (de jardín)"
      },
      {
        "id": "v24_016",
        "front": "A ___ is a garden tool with prongs for loosening soil.",
        "back": "fork\n\nHorca / bieldo"
      },
      {
        "id": "v24_017",
        "front": "A ___ is a small hand tool for digging and planting.",
        "back": "trowel\n\nPaleta de jardinería"
      },
      {
        "id": "v24_018",
        "front": "A ___ gathers leaves and loosens soil.",
        "back": "rake\n\nRastrillo"
      },
      {
        "id": "v24_019",
        "front": "A ___ is used to break up soil and remove weeds.",
        "back": "hoe\n\nAzada"
      },
      {
        "id": "v24_020",
        "front": "___ (BrE) / ___ cut plant stems and branches.",
        "back": "Secateurs / pruning shears\n\nTijeras de podar"
      },
      {
        "id": "v24_021",
        "front": "A ___ transports soil, plants or tools around the garden.",
        "back": "wheelbarrow\n\nCarretilla"
      },
      {
        "id": "v24_022",
        "front": "A ___ / ___ holds soil and a plant.",
        "back": "plant pot / flower pot\n\nMaceta"
      },
      {
        "id": "v24_023",
        "front": "A ___ displays flowering plants hanging from a bracket.",
        "back": "hanging basket\n\nCesta colgante"
      },
      {
        "id": "v24_024",
        "front": "A ___ is a wooden or metal frame for climbing plants.",
        "back": "trellis\n\nEnrejado / espaldera"
      },
      {
        "id": "v24_025",
        "front": "A ___ is a garden structure with a roof of beams.",
        "back": "pergola\n\nPérgola"
      },
      {
        "id": "v24_026",
        "front": "A ___ is a flat outdoor wooden platform.",
        "back": "decking\n\nTarima / entarimado exterior"
      },
      {
        "id": "v24_027",
        "front": "A ___ is a paved outdoor area.",
        "back": "patio\n\nPatio / terraza pavimentada"
      },
      {
        "id": "v24_028",
        "front": "A ___ is a narrow walkway in the garden.",
        "back": "path\n\nCamino / sendero"
      },
      {
        "id": "v24_029",
        "front": "A ___ marks the boundary of a garden.",
        "back": "fence\n\nValla / cercado"
      },
      {
        "id": "v24_030",
        "front": "A ___ is a dense row of bushes forming a boundary.",
        "back": "hedge\n\nSeto vivo"
      },
      {
        "id": "v24_031",
        "front": "A ___ is a moveable section of fence.",
        "back": "gate\n\nPuerta / cancela"
      },
      {
        "id": "v24_032",
        "front": "A ___ is a small body of water in a garden.",
        "back": "pond\n\nEstanque"
      },
      {
        "id": "v24_033",
        "front": "A ___ is a shallow basin of water for birds to drink and bathe in.",
        "back": "bird bath\n\nBebedero / baño para pájaros"
      },
      {
        "id": "v24_034",
        "front": "A ___ holds food for wild birds.",
        "back": "bird feeder\n\nComedero para pájaros"
      },
      {
        "id": "v24_035",
        "front": "A ___ is an unwanted wild plant.",
        "back": "weed\n\nMala hierba"
      },
      {
        "id": "v24_036",
        "front": "To ___ means to remove unwanted plants.",
        "back": "weed\n\nDesherbar / quitar malas hierbas"
      },
      {
        "id": "v24_037",
        "front": "To ___ plants means to give them water.",
        "back": "water\n\nRegar (plantas)"
      },
      {
        "id": "v24_038",
        "front": "To ___ means to cut back plants to encourage growth.",
        "back": "prune\n\nPodar"
      },
      {
        "id": "v24_039",
        "front": "To ___ the lawn means to cut the grass.",
        "back": "mow\n\nCortar el césped"
      },
      {
        "id": "v24_040",
        "front": "To ___ means to break up and turn over soil.",
        "back": "dig\n\nCavar"
      },
      {
        "id": "v24_041",
        "front": "To ___ seeds means to plant them in soil.",
        "back": "sow\n\nSembrar"
      },
      {
        "id": "v24_042",
        "front": "To ___ means to put a seedling or bulb into the ground.",
        "back": "plant\n\nPlantar"
      },
      {
        "id": "v24_043",
        "front": "To ___ means to gather mature crops.",
        "back": "harvest\n\nCosechar / recolectar"
      },
      {
        "id": "v24_044",
        "front": "___ is decomposed organic matter used as fertiliser.",
        "back": "Compost\n\nCompost / abono orgánico"
      },
      {
        "id": "v24_045",
        "front": "___ is material spread on soil to retain moisture and suppress weeds.",
        "back": "Mulch\n\nMantillo / acolchado"
      },
      {
        "id": "v24_046",
        "front": "___ adds nutrients to the soil.",
        "back": "Fertiliser\n\nFertilizante / abono"
      },
      {
        "id": "v24_047",
        "front": "A ___ is a young plant grown from seed.",
        "back": "seedling\n\nPlántula / semillero"
      },
      {
        "id": "v24_048",
        "front": "A ___ is an underground storage organ that grows into a plant.",
        "back": "bulb\n\nBulbo"
      },
      {
        "id": "v24_049",
        "front": "A ___ is a piece of plant used to grow a new one.",
        "back": "cutting\n\nEsqueje"
      },
      {
        "id": "v24_050",
        "front": "A ___ grows back every year.",
        "back": "perennial\n\nPlanta perenne"
      },
      {
        "id": "v24_051",
        "front": "An ___ completes its life cycle in one year.",
        "back": "annual\n\nPlanta anual"
      },
      {
        "id": "v24_052",
        "front": "A ___ is a woody plant smaller than a tree with multiple stems.",
        "back": "shrub\n\nArbusto"
      },
      {
        "id": "v24_053",
        "front": "A ___ uses walls or supports to grow upward.",
        "back": "climbing plant\n\nPlanta trepadora"
      },
      {
        "id": "v24_054",
        "front": "___ is a common climbing plant.",
        "back": "Ivy\n\nHiedra"
      },
      {
        "id": "v24_055",
        "front": "___ is a climbing plant with purple hanging flowers.",
        "back": "Wisteria\n\nGlicinia"
      },
      {
        "id": "v24_056",
        "front": "A ___ is the most common domestic pet.",
        "back": "dog\n\nPerro"
      },
      {
        "id": "v24_057",
        "front": "A ___ is a common domestic pet known for independence.",
        "back": "cat\n\nGato"
      },
      {
        "id": "v24_058",
        "front": "A ___ is a small furry pet kept in a hutch.",
        "back": "rabbit\n\nConejo (mascota)"
      },
      {
        "id": "v24_059",
        "front": "A ___ is a small rodent kept in a cage.",
        "back": "hamster\n\nHámster"
      },
      {
        "id": "v24_060",
        "front": "A ___ is a small rodent popular as a pet.",
        "back": "guinea pig\n\nCobaya / conejillo de indias"
      },
      {
        "id": "v24_061",
        "front": "A ___ is a common pet fish.",
        "back": "goldfish\n\nPez de colores"
      },
      {
        "id": "v24_062",
        "front": "A ___ is a colourful pet bird that can mimic speech.",
        "back": "parrot\n\nLoro (mascota)"
      },
      {
        "id": "v24_063",
        "front": "A ___ is a slow-moving reptile kept as a long-lived pet.",
        "back": "tortoise\n\nTortuga terrestre"
      },
      {
        "id": "v24_064",
        "front": "A ___ / ___ provides medical care for animals.",
        "back": "vet / veterinarian\n\nVeterinario"
      },
      {
        "id": "v24_065",
        "front": "A ___ is a shelter for a dog, or a place where dogs are kept.",
        "back": "kennel\n\nCaseta para perro / residencia canina"
      },
      {
        "id": "v24_066",
        "front": "A ___ is a place where cats are looked after while owners are away.",
        "back": "cattery\n\nResidencia felina / pensión para gatos"
      },
      {
        "id": "v24_067",
        "front": "A ___ is a cage for rabbits or guinea pigs.",
        "back": "hutch\n\nConejera / jaula para conejos"
      },
      {
        "id": "v24_068",
        "front": "A ___ (BrE) / ___ (AmE) is attached to a dog's collar for walks.",
        "back": "lead / leash\n\nCorrea (de perro)"
      },
      {
        "id": "v24_069",
        "front": "A ___ is worn around a pet's neck.",
        "back": "collar\n\nCollar (de mascota)"
      },
      {
        "id": "v24_070",
        "front": "A ___ is implanted in pets to identify them if lost.",
        "back": "microchip\n\nMicrochip (mascota)"
      },
      {
        "id": "v24_071",
        "front": "A ___ is the surgical removal of reproductive organs.",
        "back": "neutering\n\nCastración / esterilización"
      },
      {
        "id": "v24_072",
        "front": "To ___ a pet protects it from disease.",
        "back": "vaccinate\n\nVacunar (mascota)"
      },
      {
        "id": "v24_073",
        "front": "A ___ is a small jumping insect that lives on animals.",
        "back": "flea\n\nPulga"
      },
      {
        "id": "v24_074",
        "front": "A ___ is a blood-sucking parasite that attaches to skin.",
        "back": "tick\n\nGarrapata"
      },
      {
        "id": "v24_075",
        "front": "___ is the thick hair covering a mammal's body.",
        "back": "Fur\n\nPelo / pelaje (animal)"
      },
      {
        "id": "v24_076",
        "front": "A ___ is the foot of a dog, cat or bear.",
        "back": "paw\n\nPata / zarpa"
      },
      {
        "id": "v24_077",
        "front": "A ___ is the sharp curved nail of an animal.",
        "back": "claw\n\nGarra / uña (animal)"
      },
      {
        "id": "v24_078",
        "front": "A ___ is a long stiff hair on a cat or dog's muzzle.",
        "back": "whisker\n\nBigote (de animal)"
      },
      {
        "id": "v24_079",
        "front": "A ___ is the rear appendage of an animal.",
        "back": "tail\n\nCola / rabo"
      },
      {
        "id": "v24_080",
        "front": "A ___ is the nose and mouth area of an animal, or a device preventing biting.",
        "back": "muzzle\n\nHocico / bozal"
      },
      {
        "id": "v24_081",
        "front": "A ___ is a specific variety of a domesticated animal.",
        "back": "breed\n\nRaza (de animal)"
      },
      {
        "id": "v24_082",
        "front": "A ___ animal is of documented purebred ancestry.",
        "back": "pedigree\n\nAnimal de raza pura / con pedigrí"
      },
      {
        "id": "v24_083",
        "front": "To ___ a pet means to clean and maintain its coat.",
        "back": "groom\n\nAcicalar / asear (mascota)"
      },
      {
        "id": "v24_084",
        "front": "A ___ is a professional who grooms pets.",
        "back": "groomer\n\nPeluquero canino / felino"
      },
      {
        "id": "v24_085",
        "front": "___ is specially formulated food for animals.",
        "back": "Pet food\n\nComida para mascotas"
      },
      {
        "id": "v24_086",
        "front": "___ / ___ is crunchy pellet-based pet food.",
        "back": "Dry food / kibble\n\nPienso / comida seca"
      },
      {
        "id": "v24_087",
        "front": "___ comes in tins or pouches.",
        "back": "Wet food\n\nComida húmeda (lata / sobre)"
      },
      {
        "id": "v24_088",
        "front": "A ___ is a box or bag for transporting animals.",
        "back": "pet carrier\n\nTransportín"
      },
      {
        "id": "v24_089",
        "front": "A ___ is a pad for cats to sharpen claws.",
        "back": "scratching post\n\nRascador (gatos)"
      },
      {
        "id": "v24_090",
        "front": "A ___ / ___ is where cats go to the toilet indoors.",
        "back": "litter tray / litter box\n\nBandeja sanitaria / arenero (gatos)"
      },
      {
        "id": "v24_091",
        "front": "___ is the material placed in the litter tray.",
        "back": "Cat litter\n\nArena para gatos"
      },
      {
        "id": "v24_092",
        "front": "A ___ / ___ is a small door allowing pets to enter and exit.",
        "back": "dog flap / cat flap\n\nGatera / trampilla para mascotas"
      }
    ]
  },
  {
    "section": 25,
    "title": "Bebés y Crianza",
    "cards": [
      {
        "id": "v25_001",
        "front": "A ___ is the period of carrying a baby before birth.",
        "back": "pregnancy\n\nEmbarazo"
      },
      {
        "id": "v25_002",
        "front": "A ___ is one of the three three-month stages of pregnancy.",
        "back": "trimester\n\nTrimestre (embarazo)"
      },
      {
        "id": "v25_003",
        "front": "A ___ assists in pregnancy, birth and postnatal care.",
        "back": "midwife\n\nMatrona / comadrona"
      },
      {
        "id": "v25_004",
        "front": "An ___ is a doctor specialising in pregnancy and childbirth.",
        "back": "obstetrician\n\nTocólogo / obstetra"
      },
      {
        "id": "v25_005",
        "front": "A ___ / ___ monitors the baby's development.",
        "back": "scan / ultrasound\n\nEcografía"
      },
      {
        "id": "v25_006",
        "front": "A ___ is the expected date of birth.",
        "back": "due date\n\nFecha prevista de parto"
      },
      {
        "id": "v25_007",
        "front": "___ is the process of giving birth.",
        "back": "Labour\n\nParto / trabajo de parto"
      },
      {
        "id": "v25_008",
        "front": "A ___ is the tightening of the uterus during labour.",
        "back": "contraction\n\nContracción (de parto)"
      },
      {
        "id": "v25_009",
        "front": "A ___ / ___ is a surgical birth through the abdomen.",
        "back": "C-section / caesarean\n\nCesárea"
      },
      {
        "id": "v25_010",
        "front": "___ means born before 37 weeks of pregnancy.",
        "back": "Premature\n\nPrematuro"
      },
      {
        "id": "v25_011",
        "front": "A ___ is a baby in its first weeks of life.",
        "back": "newborn\n\nRecién nacido"
      },
      {
        "id": "v25_012",
        "front": "An ___ is a baby in the first year of life.",
        "back": "infant\n\nBebé / lactante"
      },
      {
        "id": "v25_013",
        "front": "A ___ is a child aged roughly 1-3 who has just learned to walk.",
        "back": "toddler\n\nNiño pequeño (que empieza a andar)"
      },
      {
        "id": "v25_014",
        "front": "___ is feeding a baby milk directly from the breast.",
        "back": "Breastfeeding\n\nLactancia materna"
      },
      {
        "id": "v25_015",
        "front": "___ / ___ is artificial milk for babies.",
        "back": "Formula / formula milk\n\nLeche de fórmula / artificial"
      },
      {
        "id": "v25_016",
        "front": "A ___ holds milk for feeding a baby.",
        "back": "bottle\n\nBiberón"
      },
      {
        "id": "v25_017",
        "front": "A ___ (BrE) / ___ (AmE) is the rubber part the baby sucks on.",
        "back": "teat / nipple\n\nTetina / chupete (del biberón)"
      },
      {
        "id": "v25_018",
        "front": "A ___ (BrE) / ___ / ___ (AmE) calms a baby by sucking.",
        "back": "dummy / pacifier / soother\n\nChupete"
      },
      {
        "id": "v25_019",
        "front": "A ___ (BrE) / ___ (AmE) absorbs a baby's waste.",
        "back": "nappy / diaper\n\nPañal"
      },
      {
        "id": "v25_020",
        "front": "To ___ a nappy means to replace a dirty one.",
        "back": "change\n\nCambiar el pañal"
      },
      {
        "id": "v25_021",
        "front": "A ___ (BrE) / ___ (AmE) is a baby's enclosed bed.",
        "back": "cot / crib\n\nCuna"
      },
      {
        "id": "v25_022",
        "front": "A ___ is a portable wicker baby bed.",
        "back": "Moses basket\n\nMoisés / cesto de mimbre para bebé"
      },
      {
        "id": "v25_023",
        "front": "A ___ (BrE) is a four-wheeled carriage for lying babies.",
        "back": "pram\n\nCochecito (para bebés tumbados)"
      },
      {
        "id": "v25_024",
        "front": "A ___ / ___ (BrE) / ___ (AmE) is an upright baby chair on wheels.",
        "back": "buggy / pushchair / stroller\n\nSilla de paseo / carrito (sentado)"
      },
      {
        "id": "v25_025",
        "front": "A ___ straps a baby to your front or back.",
        "back": "baby carrier\n\nPortabebés / mochila portabebés"
      },
      {
        "id": "v25_026",
        "front": "A ___ is a tall chair for babies to sit at the table.",
        "back": "high chair\n\nTrona"
      },
      {
        "id": "v25_027",
        "front": "A ___ is a seat that gently bounces a baby.",
        "back": "baby bouncer\n\nHamaca / mecedora para bebé"
      },
      {
        "id": "v25_028",
        "front": "A ___ allows parents to hear or see a sleeping baby remotely.",
        "back": "baby monitor\n\nVigilabebés / monitor de bebé"
      },
      {
        "id": "v25_029",
        "front": "A ___ blocks stairs or doorways for safety.",
        "back": "baby gate\n\nBarrera de seguridad (escaleras)"
      },
      {
        "id": "v25_030",
        "front": "A ___ is an enclosed area where babies play safely.",
        "back": "playpen\n\nParque (para bebés)"
      },
      {
        "id": "v25_031",
        "front": "A ___ soothes a baby's gums when teeth are coming through.",
        "back": "teething ring\n\nMordedor de dentición"
      },
      {
        "id": "v25_032",
        "front": "___ is the process of baby teeth emerging.",
        "back": "Teething\n\nDentición"
      },
      {
        "id": "v25_033",
        "front": "A ___ protects a baby's clothes from food and dribble.",
        "back": "bib\n\nBabero"
      },
      {
        "id": "v25_034",
        "front": "A ___ is a toy that makes a sound when shaken.",
        "back": "rattle\n\nSonajero"
      },
      {
        "id": "v25_035",
        "front": "A ___ / ___ is a cuddly fabric toy.",
        "back": "soft toy / stuffed animal\n\nPeluche"
      },
      {
        "id": "v25_036",
        "front": "A ___ is pureed or soft food for weaning babies.",
        "back": "baby food\n\nPapilla / comida para bebés"
      },
      {
        "id": "v25_037",
        "front": "___ is the process of introducing solid food to a baby.",
        "back": "Weaning\n\nDestete / introducción de sólidos"
      },
      {
        "id": "v25_038",
        "front": "___ lets babies feed themselves with soft finger foods.",
        "back": "Baby-led weaning\n\nAlimentación complementaria a demanda (BLW)"
      },
      {
        "id": "v25_039",
        "front": "A ___ is a rocking baby bed.",
        "back": "cradle\n\nCuna mecedora"
      },
      {
        "id": "v25_040",
        "front": "A ___ is a padded mat for nappy changes.",
        "back": "changing mat\n\nCambiador"
      },
      {
        "id": "v25_041",
        "front": "A ___ is a small tub for bathing infants.",
        "back": "baby bath\n\nBañera de bebé"
      },
      {
        "id": "v25_042",
        "front": "___ clean a baby's skin during nappy changes.",
        "back": "Baby wipes\n\nToallitas para bebé"
      },
      {
        "id": "v25_043",
        "front": "___ is skin irritation in the nappy area.",
        "back": "Nappy rash\n\nEritema del pañal"
      },
      {
        "id": "v25_044",
        "front": "___ is unexplained crying in healthy babies.",
        "back": "Colic\n\nCólico del lactante"
      },
      {
        "id": "v25_045",
        "front": "___ is when stomach contents come back up.",
        "back": "Reflux\n\nReflujo (bebé)"
      },
      {
        "id": "v25_046",
        "front": "To ___ a baby means to wrap it tightly in a blanket.",
        "back": "swaddle\n\nEnvolver al bebé / fajar"
      },
      {
        "id": "v25_047",
        "front": "To ___ a baby means to pat its back to release trapped wind.",
        "back": "burp\n\nHacer eructar al bebé"
      },
      {
        "id": "v25_048",
        "front": "To ___ means to transition from milk to solid food.",
        "back": "wean\n\nDestetar"
      },
      {
        "id": "v25_049",
        "front": "To ___ means to hold a baby gently in your arms.",
        "back": "cradle\n\nAcunar / mecer en brazos"
      },
      {
        "id": "v25_050",
        "front": "To ___ a baby means to move it gently to help it sleep.",
        "back": "rock\n\nMecer (para dormir)"
      },
      {
        "id": "v25_051",
        "front": "To ___ means for a baby to attach correctly to the breast.",
        "back": "latch\n\nEnganche (lactancia materna)"
      },
      {
        "id": "v25_052",
        "front": "A ___ is a skill a baby should reach by a certain age.",
        "back": "developmental milestone\n\nHito del desarrollo"
      },
      {
        "id": "v25_053",
        "front": "___ is moving on hands and knees.",
        "back": "Crawling\n\nGatear"
      },
      {
        "id": "v25_054",
        "front": "___ begins around 12 months on average.",
        "back": "Walking\n\nCaminar / dar los primeros pasos"
      },
      {
        "id": "v25_055",
        "front": "___ is the early vocalisation before speech.",
        "back": "Babbling\n\nBalbuceo"
      },
      {
        "id": "v25_056",
        "front": "A ___ is usually said around 12 months.",
        "back": "first word\n\nPrimera palabra"
      },
      {
        "id": "v25_057",
        "front": "A ___ is a rapid increase in height or weight.",
        "back": "growth spurt\n\nEstirón / acelerón de crecimiento"
      },
      {
        "id": "v25_058",
        "front": "___ is when a baby that slept well starts waking again.",
        "back": "Sleep regression\n\nRegresión del sueño"
      },
      {
        "id": "v25_059",
        "front": "A ___ is a short daytime sleep.",
        "back": "nap\n\nSiesta (bebé)"
      },
      {
        "id": "v25_060",
        "front": "A ___ is a consistent sequence of activities before sleep.",
        "back": "bedtime routine\n\nRutina de sueño / antes de dormir"
      },
      {
        "id": "v25_061",
        "front": "___ is distress when a baby is apart from its caregiver.",
        "back": "Separation anxiety\n\nAnsiedad de separación"
      },
      {
        "id": "v25_062",
        "front": "A ___ (BrE) is a registered carer who looks after children at home.",
        "back": "childminder\n\nCuidador/a de niños en su casa / canguro profesional"
      },
      {
        "id": "v25_063",
        "front": "A ___ is a group care setting for young children.",
        "back": "nursery\n\nGuardería"
      },
      {
        "id": "v25_064",
        "front": "A ___ is a private in-home carer for children.",
        "back": "nanny\n\nNiñera (en casa)"
      },
      {
        "id": "v25_065",
        "front": "A ___ looks after children while parents are out.",
        "back": "babysitter\n\nCanguro"
      },
      {
        "id": "v25_066",
        "front": "___ is time off work for a new parent.",
        "back": "Parental leave\n\nPermiso parental (baja por paternidad/maternidad)"
      },
      {
        "id": "v25_067",
        "front": "A ___ sponsors a child at baptism and supports them.",
        "back": "godparent\n\nPadrino / madrina"
      },
      {
        "id": "v25_068",
        "front": "A ___ raises children without a partner.",
        "back": "single parent\n\nPadre/madre soltero/a"
      },
      {
        "id": "v25_069",
        "front": "A ___ temporarily cares for a child not their own.",
        "back": "foster parent\n\nPadre/madre de acogida"
      },
      {
        "id": "v25_070",
        "front": "___ is legally becoming the permanent parent of another's child.",
        "back": "Adoption\n\nAdopción"
      }
    ]
  },
  {
    "section": 26,
    "title": "Construcción y Arquitectura",
    "cards": [
      {
        "id": "v26_001",
        "front": "A ___ is a detailed architectural plan.",
        "back": "blueprint\n\nPlano / blueprint"
      },
      {
        "id": "v26_002",
        "front": "An ___ designs buildings.",
        "back": "architect\n\nArquitecto"
      },
      {
        "id": "v26_003",
        "front": "A ___ ensures buildings are safe and stable.",
        "back": "structural engineer\n\nIngeniero estructural"
      },
      {
        "id": "v26_004",
        "front": "A ___ assesses properties and land.",
        "back": "surveyor\n\nAparejador / tasador"
      },
      {
        "id": "v26_005",
        "front": "A ___ oversees work on a building site.",
        "back": "site manager\n\nJefe de obra"
      },
      {
        "id": "v26_006",
        "front": "A ___ carries out construction work.",
        "back": "contractor\n\nContratista"
      },
      {
        "id": "v26_007",
        "front": "A ___ is hired by the main contractor for specialist work.",
        "back": "subcontractor\n\nSubcontratista"
      },
      {
        "id": "v26_008",
        "front": "A ___ builds walls with bricks and mortar.",
        "back": "bricklayer\n\nAlbañil (ladrillero)"
      },
      {
        "id": "v26_009",
        "front": "A ___ applies plaster to walls and ceilings.",
        "back": "plasterer\n\nYesero / enlucidor"
      },
      {
        "id": "v26_010",
        "front": "A ___ installs and repairs water and gas pipes.",
        "back": "plumber\n\nFontanero / plomero"
      },
      {
        "id": "v26_011",
        "front": "An ___ installs and repairs electrical systems.",
        "back": "electrician\n\nElectricista"
      },
      {
        "id": "v26_012",
        "front": "A ___ works with wood.",
        "back": "carpenter\n\nCarpintero"
      },
      {
        "id": "v26_013",
        "front": "A ___ makes wooden furniture and fittings.",
        "back": "joiner\n\nEbanista / carpintero de taller"
      },
      {
        "id": "v26_014",
        "front": "A ___ repairs and installs roofs.",
        "back": "roofer\n\nTechador / tejador"
      },
      {
        "id": "v26_015",
        "front": "A ___ finishes interior and exterior surfaces.",
        "back": "painter and decorator\n\nPintor / decorador"
      },
      {
        "id": "v26_016",
        "front": "A ___ works with glass.",
        "back": "glazier\n\nCristalero / vidriero"
      },
      {
        "id": "v26_017",
        "front": "A ___ erects scaffolding.",
        "back": "scaffolder\n\nMontador de andamios"
      },
      {
        "id": "v26_018",
        "front": "A ___ does general unskilled work on a building site.",
        "back": "labourer\n\nPeón de obra"
      },
      {
        "id": "v26_019",
        "front": "___ is a temporary metal framework for workers to access heights.",
        "back": "Scaffolding\n\nAndamio"
      },
      {
        "id": "v26_020",
        "front": "A ___ lifts heavy materials on a construction site.",
        "back": "crane\n\nGrúa (de obra)"
      },
      {
        "id": "v26_021",
        "front": "A ___ / ___ / ___ digs trenches and moves earth.",
        "back": "JCB / digger / excavator\n\nExcavadora"
      },
      {
        "id": "v26_022",
        "front": "A ___ combines cement, sand and water.",
        "back": "concrete mixer\n\nHormigonera / mezcladora de cemento"
      },
      {
        "id": "v26_023",
        "front": "A ___ (BrE) is a large open container for construction waste.",
        "back": "skip\n\nContenedor de escombros"
      },
      {
        "id": "v26_024",
        "front": "___ are the underground base that supports a building.",
        "back": "Foundations\n\nCimientos"
      },
      {
        "id": "v26_025",
        "front": "A ___ is a flat concrete base.",
        "back": "slab\n\nLosa"
      },
      {
        "id": "v26_026",
        "front": "A ___ is a horizontal structural element supporting weight.",
        "back": "beam\n\nViga"
      },
      {
        "id": "v26_027",
        "front": "A ___ / ___ is a vertical structural element.",
        "back": "column / pillar\n\nColumna / pilar"
      },
      {
        "id": "v26_028",
        "front": "A ___ is a horizontal beam supporting a floor or ceiling.",
        "back": "joist\n\nVigueta"
      },
      {
        "id": "v26_029",
        "front": "A ___ is an angled beam supporting the roof.",
        "back": "rafter\n\nCabrio / viga del tejado"
      },
      {
        "id": "v26_030",
        "front": "A ___ is a structural framework of beams.",
        "back": "truss\n\nCercha / armadura estructural"
      },
      {
        "id": "v26_031",
        "front": "___ is the pattern of laid bricks.",
        "back": "Brickwork\n\nObra de fábrica / mampostería de ladrillo"
      },
      {
        "id": "v26_032",
        "front": "___ is the cement mix that binds bricks together.",
        "back": "Mortar\n\nMortero"
      },
      {
        "id": "v26_033",
        "front": "___ is a mixture of cement, water and aggregate.",
        "back": "Concrete\n\nHormigón / concreto"
      },
      {
        "id": "v26_034",
        "front": "___ has steel bars inside for added strength.",
        "back": "Reinforced concrete\n\nHormigón armado"
      },
      {
        "id": "v26_035",
        "front": "___ is a strong metal alloy used in structural frameworks.",
        "back": "Steel\n\nAcero"
      },
      {
        "id": "v26_036",
        "front": "___ is wood used in construction.",
        "back": "Timber\n\nMadera de construcción"
      },
      {
        "id": "v26_037",
        "front": "___ reduces heat loss through walls, floors and roofs.",
        "back": "Insulation\n\nAislamiento (térmico)"
      },
      {
        "id": "v26_038",
        "front": "___ fills the gap between inner and outer walls.",
        "back": "Cavity wall insulation\n\nAislamiento de cámara de aire"
      },
      {
        "id": "v26_039",
        "front": "___ uses two panes of glass for better insulation.",
        "back": "Double glazing\n\nDoble acristalamiento"
      },
      {
        "id": "v26_040",
        "front": "___ prevents moisture penetrating walls.",
        "back": "Damp proofing\n\nImpermeabilización / barrera antihumedad"
      },
      {
        "id": "v26_041",
        "front": "___ is a smooth coating applied to exterior walls.",
        "back": "Render\n\nEnfoscado / revestimiento exterior"
      },
      {
        "id": "v26_042",
        "front": "___ is a board used to line interior walls.",
        "back": "Plasterboard\n\nPlaca de yeso / pladur"
      },
      {
        "id": "v26_043",
        "front": "___ is the decorative moulding at the top of a wall.",
        "back": "Cornice\n\nCornisa / moldura"
      },
      {
        "id": "v26_044",
        "front": "___ (BrE) / ___ (AmE) runs along the base of walls.",
        "back": "Skirting board / baseboard\n\nZócalo / rodapié"
      },
      {
        "id": "v26_045",
        "front": "___ is the curved moulding between wall and ceiling.",
        "back": "Coving\n\nMoldura de escayola (techo-pared)"
      },
      {
        "id": "v26_046",
        "front": "A ___ is the structure surrounding a door opening.",
        "back": "door frame\n\nMarco de puerta"
      },
      {
        "id": "v26_047",
        "front": "A ___ is the structure holding the window glass.",
        "back": "window frame\n\nMarco de ventana"
      },
      {
        "id": "v26_048",
        "front": "A ___ is a horizontal beam above a door or window.",
        "back": "lintel\n\nDintel"
      },
      {
        "id": "v26_049",
        "front": "A ___ is the strip at the bottom of a doorway.",
        "back": "threshold\n\nUmbral"
      },
      {
        "id": "v26_050",
        "front": "A ___ is horizontal with no pitch.",
        "back": "flat roof\n\nAzotea / tejado plano"
      },
      {
        "id": "v26_051",
        "front": "A ___ has angled slopes.",
        "back": "pitched roof\n\nTejado a dos aguas"
      },
      {
        "id": "v26_052",
        "front": "A ___ is the triangular section of wall at the end of a pitched roof.",
        "back": "gable\n\nHastial / frontón (tejado)"
      },
      {
        "id": "v26_053",
        "front": "___ on a roof are overlapping ceramic or slate pieces.",
        "back": "Tiles\n\nTejas"
      },
      {
        "id": "v26_054",
        "front": "___ collects and channels rainwater from the roof.",
        "back": "Guttering\n\nCanalón / canal de desagüe"
      },
      {
        "id": "v26_055",
        "front": "A ___ carries water from guttering to the drain.",
        "back": "downpipe\n\nBajante"
      },
      {
        "id": "v26_056",
        "front": "A ___ gives access to underground pipes and cables.",
        "back": "manhole\n\nArqueta / registro de alcantarilla"
      },
      {
        "id": "v26_057",
        "front": "A ___ removes waste water.",
        "back": "drain\n\nDesagüe"
      },
      {
        "id": "v26_058",
        "front": "A ___ is an underground pit that absorbs surface water.",
        "back": "soakaway\n\nPozo absorbente / drenaje subterráneo"
      },
      {
        "id": "v26_059",
        "front": "___ is official approval to build or alter a structure.",
        "back": "Planning permission\n\nLicencia de obras / permiso de construcción"
      },
      {
        "id": "v26_060",
        "front": "___ set standards for construction.",
        "back": "Building regulations\n\nNormativa de construcción"
      },
      {
        "id": "v26_061",
        "front": "A ___ is protected due to historical or architectural importance.",
        "back": "listed building\n\nEdificio catalogado / con protección histórica"
      },
      {
        "id": "v26_062",
        "front": "A ___ restricts changes to preserve character.",
        "back": "conservation area\n\nZona protegida / de conservación"
      },
      {
        "id": "v26_063",
        "front": "___ is restoring or updating an existing building.",
        "back": "Renovation\n\nReforma / renovación"
      },
      {
        "id": "v26_064",
        "front": "___ is improving a building without major structural changes.",
        "back": "Refurbishment\n\nRehabilitación / acondicionamiento"
      },
      {
        "id": "v26_065",
        "front": "___ is the tearing down of a structure.",
        "back": "Demolition\n\nDerribo / demolición"
      },
      {
        "id": "v26_066",
        "front": "A ___ divides internal space but is not structural.",
        "back": "partition wall\n\nTabique"
      },
      {
        "id": "v26_067",
        "front": "A ___ supports the weight of the structure above.",
        "back": "load-bearing wall\n\nPared de carga"
      },
      {
        "id": "v26_068",
        "front": "An ___ layout has few or no internal walls.",
        "back": "open-plan\n\nPlanta abierta / diáfana"
      },
      {
        "id": "v26_069",
        "front": "A ___ turns an attic into a usable room.",
        "back": "loft conversion\n\nConversión de buhardilla / ático habitable"
      },
      {
        "id": "v26_070",
        "front": "A ___ creates a usable room underground.",
        "back": "basement conversion\n\nConversión de sótano"
      },
      {
        "id": "v26_071",
        "front": "An ___ adds new space to an existing building.",
        "back": "extension\n\nAmpliación / extensión"
      },
      {
        "id": "v26_072",
        "front": "A ___ is a glass-roofed extension.",
        "back": "conservatory\n\nJardín de invierno / galería acristalada"
      },
      {
        "id": "v26_073",
        "front": "A ___ projects from a sloping roof.",
        "back": "dormer window\n\nBuhardilla / ventana en el tejado"
      },
      {
        "id": "v26_074",
        "front": "A ___ projects outward from the main wall.",
        "back": "bay window\n\nVentana en saliente / mirador"
      },
      {
        "id": "v26_075",
        "front": "A ___ / ___ is a window in the roof.",
        "back": "skylight / roof light\n\nClaraboya / tragaluz"
      },
      {
        "id": "v26_076",
        "front": "A ___ projects from an upper floor.",
        "back": "balcony\n\nBalcón"
      },
      {
        "id": "v26_077",
        "front": "A ___ is a flat outdoor area at ground or upper level.",
        "back": "terrace\n\nTerraza"
      },
      {
        "id": "v26_078",
        "front": "A ___ is the exterior front face of a building.",
        "back": "facade\n\nFachada"
      },
      {
        "id": "v26_079",
        "front": "A ___ is an architectural drawing showing a face of a building.",
        "back": "elevation\n\nAlzado (plano arquitectónico)"
      },
      {
        "id": "v26_080",
        "front": "A ___ is a top-down diagram of a building's layout.",
        "back": "floor plan\n\nPlanta (distribución de una vivienda)"
      },
      {
        "id": "v26_081",
        "front": "A ___ shows a building cut through to reveal the interior.",
        "back": "cross-section\n\nSección transversal"
      }
    ]
  },
  {
    "section": 27,
    "title": "Phrasal Verbs Avanzados",
    "cards": [
      {
        "id": "v27_001",
        "front": "She ___ a large inheritance when her aunt died.",
        "back": "came into\n\ncome into = heredar / recibir (dinero)"
      },
      {
        "id": "v27_002",
        "front": "His true personality ___ under pressure.",
        "back": "came through\n\ncome through = manifestarse / salir a la luz"
      },
      {
        "id": "v27_003",
        "front": "She ___ to my way of thinking eventually.",
        "back": "came round\n\ncome round = cambiar de opinión / convencerse"
      },
      {
        "id": "v27_004",
        "front": "He ___ as arrogant in the interview.",
        "back": "came across\n\ncome across as = dar la impresión de ser"
      },
      {
        "id": "v27_005",
        "front": "The deal ___ at the last minute.",
        "back": "fell apart\n\nfall apart = desmoronarse / venirse abajo"
      },
      {
        "id": "v27_006",
        "front": "She ___ after the breakup.",
        "back": "fell apart\n\nfall apart = derrumbarse emocionalmente"
      },
      {
        "id": "v27_007",
        "front": "I can't ___ his strange behaviour.",
        "back": "account for\n\naccount for = explicar / dar cuenta de"
      },
      {
        "id": "v27_008",
        "front": "The manager had to ___ the missing funds.",
        "back": "account for\n\naccount for = justificar / rendir cuentas de"
      },
      {
        "id": "v27_009",
        "front": "We need to ___ delays in the schedule.",
        "back": "allow for\n\nallow for = tener en cuenta / dejar margen para"
      },
      {
        "id": "v27_010",
        "front": "The price doesn't ___ extras.",
        "back": "allow for\n\nallow for = incluir / contemplar"
      },
      {
        "id": "v27_011",
        "front": "She ___ a successful business from nothing.",
        "back": "built up\n\nbuild up = construir / desarrollar gradualmente"
      },
      {
        "id": "v27_012",
        "front": "He has ___ a lot of resentment over the years.",
        "back": "built up\n\nbuild up = acumular (sentimientos)"
      },
      {
        "id": "v27_013",
        "front": "Don't let your debts ___.",
        "back": "build up\n\nbuild up = acumularse"
      },
      {
        "id": "v27_014",
        "front": "She ___ her experience to solve the problem.",
        "back": "called on\n\ncall on = recurrir a / hacer uso de"
      },
      {
        "id": "v27_015",
        "front": "The president ___ citizens to remain calm.",
        "back": "called on\n\ncall on = apelar a / pedir a"
      },
      {
        "id": "v27_016",
        "front": "They ___ a complete review of the policy.",
        "back": "called for\n\ncall for = exigir / pedir (con insistencia)"
      },
      {
        "id": "v27_017",
        "front": "This situation ___ immediate action.",
        "back": "calls for\n\ncall for = requerir / exigir"
      },
      {
        "id": "v27_018",
        "front": "She ___ her personal experience for the book.",
        "back": "drew on\n\ndraw on = recurrir a / basarse en"
      },
      {
        "id": "v27_019",
        "front": "He ___ a contract.",
        "back": "drew up\n\ndraw up = redactar / elaborar (documento)"
      },
      {
        "id": "v27_020",
        "front": "They ___ plans for the new building.",
        "back": "drew up\n\ndraw up = elaborar / preparar (planes)"
      },
      {
        "id": "v27_021",
        "front": "The project ___ for months.",
        "back": "dragged on\n\ndrag on = prolongarse / alargarse más de lo debido"
      },
      {
        "id": "v27_022",
        "front": "She ___ from her school friends.",
        "back": "drifted apart\n\ndrift apart = distanciarse (gradualmente)"
      },
      {
        "id": "v27_023",
        "front": "He ___ his rival for the top position.",
        "back": "edged out\n\nedge out = adelantar por poco / desplazar ligeramente"
      },
      {
        "id": "v27_024",
        "front": "The company ___ the new market gradually.",
        "back": "eased into\n\nease into = adentrarse gradualmente en"
      },
      {
        "id": "v27_025",
        "front": "She ___ on the pressure after the deadline passed.",
        "back": "eased off\n\nease off = aliviar / reducir (presión)"
      },
      {
        "id": "v27_026",
        "front": "The rain ___ in the afternoon.",
        "back": "eased off\n\nease off = amainar / disminuir"
      },
      {
        "id": "v27_027",
        "front": "He ___ his idea with more detail.",
        "back": "fleshed out\n\nflesh out = desarrollar / dar cuerpo a (una idea)"
      },
      {
        "id": "v27_028",
        "front": "She ___ the awkward details.",
        "back": "glossed over\n\ngloss over = pasar por alto / minimizar"
      },
      {
        "id": "v27_029",
        "front": "He ___ a deal after hours of negotiation.",
        "back": "hammered out\n\nhammer out = acordar / llegar a acuerdo a base de negociar"
      },
      {
        "id": "v27_030",
        "front": "They ___ a potential crisis.",
        "back": "headed off\n\nhead off = anticipar / evitar (un problema)"
      },
      {
        "id": "v27_031",
        "front": "She ___ the key issue immediately.",
        "back": "homed in on\n\nhome in on = centrarse en / ir directo a"
      },
      {
        "id": "v27_032",
        "front": "He ___ the remaining problems.",
        "back": "ironed out\n\niron out = resolver / allanar (problemas menores)"
      },
      {
        "id": "v27_033",
        "front": "The committee ___ the meeting with a review.",
        "back": "kicked off\n\nkick off = empezar / dar comienzo a"
      },
      {
        "id": "v27_034",
        "front": "She ___ and finished the report.",
        "back": "knuckled down\n\nknuckle down = ponerse a trabajar en serio"
      },
      {
        "id": "v27_035",
        "front": "He ___ strict rules from the start.",
        "back": "laid down\n\nlay down = establecer / imponer (normas)"
      },
      {
        "id": "v27_036",
        "front": "She ___ the plan clearly.",
        "back": "laid out\n\nlay out = exponer / presentar con claridad"
      },
      {
        "id": "v27_037",
        "front": "The company ___ 200 workers.",
        "back": "laid off\n\nlay off = despedir (por reducción)"
      },
      {
        "id": "v27_038",
        "front": "He ___ after a period of rapid growth.",
        "back": "levelled off\n\nlevel off = estabilizarse / nivelarse"
      },
      {
        "id": "v27_039",
        "front": "Sales have ___.",
        "back": "levelled out\n\nlevel out = estabilizarse"
      },
      {
        "id": "v27_040",
        "front": "She ___ her career plan.",
        "back": "mapped out\n\nmap out = planificar / trazar (un plan)"
      },
      {
        "id": "v27_041",
        "front": "He ___ the price by 30%.",
        "back": "marked up\n\nmark up = incrementar el precio"
      },
      {
        "id": "v27_042",
        "front": "The price was ___ for the sale.",
        "back": "marked down\n\nmark down = reducir el precio / rebajar"
      },
      {
        "id": "v27_043",
        "front": "She ___ to help with the preparation.",
        "back": "mucked in\n\nmuck in = arremangarse / ayudar (BrE informal)"
      },
      {
        "id": "v27_044",
        "front": "He ___ the candidates to three.",
        "back": "narrowed down\n\nnarrow down = reducir / acotar (opciones)"
      },
      {
        "id": "v27_045",
        "front": "She ___ about her struggles.",
        "back": "opened up\n\nopen up = abrirse / sincerarse"
      },
      {
        "id": "v27_046",
        "front": "The market ___ new opportunities.",
        "back": "opened up\n\nopen up = abrir / generar (oportunidades)"
      },
      {
        "id": "v27_047",
        "front": "He ___ the changes gradually.",
        "back": "phased in\n\nphase in = introducir gradualmente"
      },
      {
        "id": "v27_048",
        "front": "They ___ the old system.",
        "back": "phased out\n\nphase out = eliminar gradualmente / retirar"
      },
      {
        "id": "v27_049",
        "front": "She ___ the seriousness of the problem.",
        "back": "played down\n\nplay down = quitar importancia / minimizar"
      },
      {
        "id": "v27_050",
        "front": "He ___ his experience on his CV.",
        "back": "played up\n\nplay up = exagerar / realzar"
      },
      {
        "id": "v27_051",
        "front": "The children ___ when the teacher left.",
        "back": "played up\n\nplay up = portarse mal / dar problemas (BrE)"
      },
      {
        "id": "v27_052",
        "front": "She ___ despite the setbacks.",
        "back": "pressed ahead\n\npress ahead / press on = seguir adelante a pesar de todo"
      },
      {
        "id": "v27_053",
        "front": "They ___ the possibility of a merger.",
        "back": "ruled out\n\nrule out = descartar / excluir"
      },
      {
        "id": "v27_054",
        "front": "She ___ her ambitions after the failure.",
        "back": "scaled back\n\nscale back = reducir / recortar"
      },
      {
        "id": "v27_055",
        "front": "The company ___ production.",
        "back": "scaled up\n\nscale up = ampliar / escalar"
      },
      {
        "id": "v27_056",
        "front": "He ___ time each day for reading.",
        "back": "set aside\n\nset aside = reservar / apartar (tiempo/dinero)"
      },
      {
        "id": "v27_057",
        "front": "She ___ to prove them wrong.",
        "back": "set out\n\nset out = proponerse / partir con el objetivo de"
      },
      {
        "id": "v27_058",
        "front": "He ___ his argument clearly.",
        "back": "set forth\n\nset forth = exponer / presentar (formal)"
      },
      {
        "id": "v27_059",
        "front": "The fire ___ the neighbouring buildings.",
        "back": "spread to\n\nspread to = extenderse a / propagarse"
      },
      {
        "id": "v27_060",
        "front": "She ___ to the challenge.",
        "back": "squared up\n\nsquare up to = hacer frente a / enfrentarse a"
      },
      {
        "id": "v27_061",
        "front": "He ___ a key piece of evidence.",
        "back": "stumbled across\n\nstumble across = dar con / encontrar por casualidad"
      },
      {
        "id": "v27_062",
        "front": "She ___ the meeting in two sentences.",
        "back": "summed up\n\nsum up = resumir / recapitular"
      },
      {
        "id": "v27_063",
        "front": "He ___ quitting.",
        "back": "talked her out of\n\ntalk someone out of = disuadir de / convencer de no hacer"
      },
      {
        "id": "v27_064",
        "front": "She ___ applying.",
        "back": "talked him into\n\ntalk someone into = convencer de hacer algo"
      },
      {
        "id": "v27_065",
        "front": "They ___ the topic briefly.",
        "back": "touched on\n\ntouch on = mencionar de pasada / tocar (un tema)"
      },
      {
        "id": "v27_066",
        "front": "She ___ the paintwork.",
        "back": "touched up\n\ntouch up = retocar / dar los últimos toques"
      },
      {
        "id": "v27_067",
        "front": "He ___ the original source.",
        "back": "tracked down\n\ntrack down = localizar / encontrar (tras buscar)"
      },
      {
        "id": "v27_068",
        "front": "The company ___ its finances.",
        "back": "turned around\n\nturn around = dar la vuelta a / revertir"
      },
      {
        "id": "v27_069",
        "front": "She ___ all her savings.",
        "back": "used up\n\nuse up = agotar / gastar todo"
      },
      {
        "id": "v27_070",
        "front": "He ___ the original plan.",
        "back": "veered away from\n\nveer away from = alejarse de / desviarse"
      },
      {
        "id": "v27_071",
        "front": "She ___ the pros and cons.",
        "back": "weighed up\n\nweigh up = sopesar / evaluar"
      },
      {
        "id": "v27_072",
        "front": "The argument ___ after a while.",
        "back": "wore thin\n\nwear thin = perder credibilidad / agotar la paciencia"
      },
      {
        "id": "v27_073",
        "front": "He ___ his responsibilities.",
        "back": "wriggled out of\n\nwriggle out of = escaquearse de / librarse (con mañas)"
      },
      {
        "id": "v27_074",
        "front": "She ___ the most profitable sector.",
        "back": "zeroed in on\n\nzero in on = centrarse en / apuntar a (objetivo concreto)"
      },
      {
        "id": "v27_075",
        "front": "They ___ the cost of transport.",
        "back": "factored in\n\nfactor in = tener en cuenta / incluir en el cálculo"
      },
      {
        "id": "v27_076",
        "front": "She ___ from her original position.",
        "back": "backed down\n\nback down = echarse atrás / ceder"
      },
      {
        "id": "v27_077",
        "front": "He ___ of the deal at the last minute.",
        "back": "backed out\n\nback out = retractarse / echarse atrás"
      },
      {
        "id": "v27_078",
        "front": "She ___ her claim with evidence.",
        "back": "backed up\n\nback up = respaldar / apoyar con pruebas"
      },
      {
        "id": "v27_079",
        "front": "The traffic ___ for miles.",
        "back": "backed up\n\nback up = colapsar / hacer cola (tráfico)"
      },
      {
        "id": "v27_080",
        "front": "He ___ at her for being late.",
        "back": "blew up\n\nblow up = explotar de ira / perder los estribos"
      },
      {
        "id": "v27_081",
        "front": "The story ___ on social media.",
        "back": "blew up\n\nblow up = hacerse viral / estallar (noticia)"
      },
      {
        "id": "v27_082",
        "front": "She ___ her feelings for too long.",
        "back": "bottled up\n\nbottle up = reprimir / guardar para sí (emociones)"
      },
      {
        "id": "v27_083",
        "front": "He ___ gracefully after 20 years.",
        "back": "bowed out\n\nbow out = retirarse con elegancia"
      },
      {
        "id": "v27_084",
        "front": "She ___ into a new business area.",
        "back": "branched out\n\nbranch out = expandirse / diversificarse"
      },
      {
        "id": "v27_085",
        "front": "The crisis ___ major changes.",
        "back": "brought about\n\nbring about = provocar / causar"
      },
      {
        "id": "v27_086",
        "front": "She ___ the meeting by a day.",
        "back": "brought forward\n\nbring forward = adelantar (una fecha)"
      },
      {
        "id": "v27_087",
        "front": "He ___ with a useful suggestion.",
        "back": "chipped in\n\nchip in = contribuir / intervenir (con algo útil)"
      },
      {
        "id": "v27_088",
        "front": "She ___ when asked about her past.",
        "back": "clammed up\n\nclam up = cerrarse en banda / negarse a hablar"
      },
      {
        "id": "v27_089",
        "front": "He ___ unauthorised absences.",
        "back": "cracked down on\n\ncrack down on = tomar medidas severas contra"
      },
      {
        "id": "v27_090",
        "front": "She ___ to pressure.",
        "back": "caved in\n\ncave in = ceder / rendirse ante la presión"
      },
      {
        "id": "v27_091",
        "front": "The project ___ schedule.",
        "back": "fell behind\n\nfall behind = atrasarse respecto al plan"
      },
      {
        "id": "v27_092",
        "front": "He ___ with the plan.",
        "back": "forged ahead\n\nforge ahead = avanzar con determinación"
      },
      {
        "id": "v27_093",
        "front": "She ___ criticism skilfully.",
        "back": "fended off\n\nfend off = rechazar / defenderse de (críticas/ataques)"
      }
    ]
  },
  {
    "section": 28,
    "title": "Salud Mental y Bienestar",
    "cards": [
      {
        "id": "v28_001",
        "front": "___ refers to emotional, psychological and social wellbeing.",
        "back": "Mental health\n\nSalud mental"
      },
      {
        "id": "v28_002",
        "front": "___ is a state of comfort, health and happiness.",
        "back": "Wellbeing\n\nBienestar"
      },
      {
        "id": "v28_003",
        "front": "___ is mental or emotional strain from demanding circumstances.",
        "back": "Stress\n\nEstrés"
      },
      {
        "id": "v28_004",
        "front": "___ is exhaustion from chronic workplace stress.",
        "back": "Burnout\n\nBurnout / agotamiento profesional"
      },
      {
        "id": "v28_005",
        "front": "___ is persistent worry about future events.",
        "back": "Anxiety\n\nAnsiedad"
      },
      {
        "id": "v28_006",
        "front": "A ___ is a sudden surge of intense fear with physical symptoms.",
        "back": "panic attack\n\nAtaque de pánico"
      },
      {
        "id": "v28_007",
        "front": "___ is a persistent low mood affecting daily life.",
        "back": "Depression\n\nDepresión"
      },
      {
        "id": "v28_008",
        "front": "___ (SAD) is depression linked to lack of light.",
        "back": "Seasonal affective disorder\n\nTrastorno afectivo estacional"
      },
      {
        "id": "v28_009",
        "front": "___ involves alternating episodes of mania and depression.",
        "back": "Bipolar disorder\n\nTrastorno bipolar"
      },
      {
        "id": "v28_010",
        "front": "___ (Obsessive-Compulsive Disorder) involves intrusive thoughts and compulsive behaviour.",
        "back": "OCD\n\nTOC (trastorno obsesivo-compulsivo)"
      },
      {
        "id": "v28_011",
        "front": "___ (Post-Traumatic Stress Disorder) follows a traumatic experience.",
        "back": "PTSD\n\nTEPT / PTSD (estrés postraumático)"
      },
      {
        "id": "v28_012",
        "front": "___ (Attention Deficit Hyperactivity Disorder) affects focus and impulse control.",
        "back": "ADHD\n\nTDAH"
      },
      {
        "id": "v28_013",
        "front": "___ / ___ affects social communication and behaviour.",
        "back": "Autism / ASD\n\nAutismo / TEA"
      },
      {
        "id": "v28_014",
        "front": "___ includes anorexia, bulimia and binge eating disorder.",
        "back": "Eating disorder\n\nTrastorno de la conducta alimentaria"
      },
      {
        "id": "v28_015",
        "front": "___ involves severely restricting food intake.",
        "back": "Anorexia\n\nAnorexia"
      },
      {
        "id": "v28_016",
        "front": "___ involves eating then purging.",
        "back": "Bulimia\n\nBulimia"
      },
      {
        "id": "v28_017",
        "front": "___ is an intense irrational fear of something specific.",
        "back": "Phobia\n\nFobia"
      },
      {
        "id": "v28_018",
        "front": "___ is fear of social situations and judgement.",
        "back": "Social anxiety\n\nAnsiedad social"
      },
      {
        "id": "v28_019",
        "front": "___ is fear of open or crowded spaces.",
        "back": "Agoraphobia\n\nAgorafobia"
      },
      {
        "id": "v28_020",
        "front": "___ is fear of enclosed spaces.",
        "back": "Claustrophobia\n\nClaustrofobia"
      },
      {
        "id": "v28_021",
        "front": "A ___ provides psychological treatment.",
        "back": "therapist\n\nTerapeuta"
      },
      {
        "id": "v28_022",
        "front": "A ___ studies and treats mental health non-medically.",
        "back": "psychologist\n\nPsicólogo"
      },
      {
        "id": "v28_023",
        "front": "A ___ is a doctor who treats mental illness medically.",
        "back": "psychiatrist\n\nPsiquiatra"
      },
      {
        "id": "v28_024",
        "front": "A ___ offers support and talking therapy.",
        "back": "counsellor\n\nConsejero / orientador psicológico"
      },
      {
        "id": "v28_025",
        "front": "___ (Cognitive Behavioural Therapy) identifies and changes negative thought patterns.",
        "back": "CBT\n\nTCC (terapia cognitivo-conductual)"
      },
      {
        "id": "v28_026",
        "front": "___ is focusing attention on the present moment without judgement.",
        "back": "Mindfulness\n\nMindfulness / atención plena"
      },
      {
        "id": "v28_027",
        "front": "___ is a practice to calm the mind.",
        "back": "Meditation\n\nMeditación"
      },
      {
        "id": "v28_028",
        "front": "___ / ___ is talking treatment for mental health.",
        "back": "Therapy / counselling\n\nTerapia / psicoterapia"
      },
      {
        "id": "v28_029",
        "front": "___ is deliberate action to maintain your wellbeing.",
        "back": "Self-care\n\nAutocuidado"
      },
      {
        "id": "v28_030",
        "front": "___ is your overall sense of your own worth.",
        "back": "Self-esteem\n\nAutoestima"
      },
      {
        "id": "v28_031",
        "front": "___ is belief in your own abilities.",
        "back": "Self-confidence\n\nAutoconfianza / seguridad en uno mismo"
      },
      {
        "id": "v28_032",
        "front": "___ is treating yourself with the same kindness as others.",
        "back": "Self-compassion\n\nAutocompasión"
      },
      {
        "id": "v28_033",
        "front": "___ is the ability to recover from adversity.",
        "back": "Resilience\n\nResiliencia"
      },
      {
        "id": "v28_034",
        "front": "___ are strategies used to deal with stress.",
        "back": "Coping mechanisms\n\nMecanismos de afrontamiento"
      },
      {
        "id": "v28_035",
        "front": "___ is something that causes an emotional reaction.",
        "back": "Trigger\n\nDetonante / desencadenante"
      },
      {
        "id": "v28_036",
        "front": "___ is a technique to bring attention back to the present.",
        "back": "Grounding\n\nTécnica de anclaje / de conexión con el presente"
      },
      {
        "id": "v28_037",
        "front": "___ is writing thoughts and feelings regularly.",
        "back": "Journalling\n\nEscribir un diario / journaling"
      },
      {
        "id": "v28_038",
        "front": "___ involves regularly noting things you are thankful for.",
        "back": "Gratitude practice\n\nPráctica de la gratitud"
      },
      {
        "id": "v28_039",
        "front": "A ___ is people sharing similar experiences who help each other.",
        "back": "support group\n\nGrupo de apoyo"
      },
      {
        "id": "v28_040",
        "front": "___ is negative social attitudes around mental illness.",
        "back": "Stigma\n\nEstigma (social)"
      },
      {
        "id": "v28_041",
        "front": "To ___ means to talk honestly about your feelings.",
        "back": "open up\n\nAbrirse / sincerarse"
      },
      {
        "id": "v28_042",
        "front": "To ___ means to contact someone for help or support.",
        "back": "reach out\n\nPedir ayuda / tender la mano"
      },
      {
        "id": "v28_043",
        "front": "To ___ means to manage a difficult situation.",
        "back": "cope with\n\nHacer frente a / sobrellevar"
      },
      {
        "id": "v28_044",
        "front": "To ___ means to find something very difficult.",
        "back": "struggle with\n\nLuchar con / tener dificultades con"
      },
      {
        "id": "v28_045",
        "front": "To ___ means to affect someone so strongly they cannot cope.",
        "back": "overwhelm\n\nAbrumar / agobiar"
      },
      {
        "id": "v28_046",
        "front": "To ___ means for a situation or emotion to worsen rapidly.",
        "back": "spiral\n\nEntrar en espiral / empeorar progresivamente"
      },
      {
        "id": "v28_047",
        "front": "To ___ means to reach the lowest possible point.",
        "back": "hit rock bottom\n\nTocar fondo"
      },
      {
        "id": "v28_048",
        "front": "To be ___ means to be recovering.",
        "back": "on the mend\n\nEstar mejorando / recuperándose"
      },
      {
        "id": "v28_049",
        "front": "To ___ means to recover quickly.",
        "back": "bounce back\n\nRecuperarse / rebotar"
      },
      {
        "id": "v28_050",
        "front": "To ___ means to actively look for professional support.",
        "back": "seek help\n\nBuscar ayuda / pedir ayuda profesional"
      },
      {
        "id": "v28_051",
        "front": "___ are medication to treat depression.",
        "back": "Antidepressants\n\nAntidepresivos"
      },
      {
        "id": "v28_052",
        "front": "___ are medication to reduce anxiety.",
        "back": "Anxiolytics\n\nAnsiolíticos"
      },
      {
        "id": "v28_053",
        "front": "___ is difficulty falling or staying asleep.",
        "back": "Insomnia\n\nInsomnio"
      },
      {
        "id": "v28_054",
        "front": "___ is sleeping excessively.",
        "back": "Hypersomnia\n\nHipersomnia"
      },
      {
        "id": "v28_055",
        "front": "___ refers to habits that promote good sleep.",
        "back": "Sleep hygiene\n\nHigiene del sueño"
      },
      {
        "id": "v28_056",
        "front": "A ___ is the recurring pattern of sleep stages.",
        "back": "sleep cycle\n\nCiclo del sueño"
      },
      {
        "id": "v28_057",
        "front": "___ is the stage associated with dreaming.",
        "back": "REM sleep\n\nSueño REM"
      },
      {
        "id": "v28_058",
        "front": "___ / ___ is the most restorative stage.",
        "back": "Deep sleep / slow-wave sleep\n\nSueño profundo"
      },
      {
        "id": "v28_059",
        "front": "___ is a hormone regulating the sleep-wake cycle.",
        "back": "Melatonin\n\nMelatonina"
      },
      {
        "id": "v28_060",
        "front": "A ___ provides structure that supports mental wellbeing.",
        "back": "routine\n\nRutina (importancia para la salud mental)"
      },
      {
        "id": "v28_061",
        "front": "___ improves mood by releasing endorphins.",
        "back": "Exercise\n\nEjercicio (beneficio mental)"
      },
      {
        "id": "v28_062",
        "front": "___ are feel-good chemicals released during exercise.",
        "back": "Endorphins\n\nEndorfinas"
      },
      {
        "id": "v28_063",
        "front": "___ is a neurotransmitter linked to happiness.",
        "back": "Serotonin\n\nSerotonina"
      },
      {
        "id": "v28_064",
        "front": "___ is a neurotransmitter linked to reward and motivation.",
        "back": "Dopamine\n\nDopamina"
      },
      {
        "id": "v28_065",
        "front": "___ is the stress hormone released by the adrenal glands.",
        "back": "Cortisol\n\nCortisol (hormona del estrés)"
      },
      {
        "id": "v28_066",
        "front": "A ___ is an environment where someone feels secure to express themselves.",
        "back": "safe space\n\nEspacio seguro"
      },
      {
        "id": "v28_067",
        "front": "___ is understanding and sharing someone else's feelings.",
        "back": "Empathy\n\nEmpatía"
      },
      {
        "id": "v28_068",
        "front": "___ means fully concentrating on what someone is saying.",
        "back": "Active listening\n\nEscucha activa"
      },
      {
        "id": "v28_069",
        "front": "___ is acknowledging that someone's feelings are legitimate.",
        "back": "Validation\n\nValidación (emocional)"
      },
      {
        "id": "v28_070",
        "front": "___ is manipulation that makes someone question their own reality.",
        "back": "Gaslighting\n\nGaslighting / manipulación psicológica"
      },
      {
        "id": "v28_071",
        "front": "___ dismisses genuine negative emotions with forced optimism.",
        "back": "Toxic positivity\n\nPositividad tóxica"
      },
      {
        "id": "v28_072",
        "front": "___ (EQ) is the ability to understand and manage emotions.",
        "back": "Emotional intelligence\n\nInteligencia emocional (IE)"
      },
      {
        "id": "v28_073",
        "front": "___ is the belief that abilities can be developed with effort.",
        "back": "Growth mindset\n\nMentalidad de crecimiento"
      },
      {
        "id": "v28_074",
        "front": "___ is the belief that abilities are innate and unchangeable.",
        "back": "Fixed mindset\n\nMentalidad fija"
      },
      {
        "id": "v28_075",
        "front": "___ are limits you set to protect your emotional wellbeing.",
        "back": "Boundaries\n\nLímites (salud mental)"
      },
      {
        "id": "v28_076",
        "front": "To ___ means to define what you will and won't accept.",
        "back": "set boundaries\n\nPoner límites"
      },
      {
        "id": "v28_077",
        "front": "___ signs include exhaustion, cynicism and reduced effectiveness.",
        "back": "Burnout\n\nSeñales de burnout"
      },
      {
        "id": "v28_078",
        "front": "A ___ is a day off work to rest and recover emotionally.",
        "back": "mental health day\n\nDía de salud mental (baja informal)"
      }
    ]
  },
  {
    "section": 29,
    "title": "anki_29_moda_belleza_avanzada.csv",
    "cards": [
      {
        "id": "v29_001",
        "front": "A ___ makes or alters clothing to fit a specific person.",
        "back": "tailor\n\nSastre"
      },
      {
        "id": "v29_002",
        "front": "___ clothing is custom-made to a client's exact measurements.",
        "back": "Bespoke\n\nHecho a medida / bespoke"
      },
      {
        "id": "v29_003",
        "front": "___ / ___ clothing is mass-produced in standard sizes.",
        "back": "Off-the-rack / ready-to-wear\n\nRopa de percha / prêt-à-porter"
      },
      {
        "id": "v29_004",
        "front": "A ___ sews and repairs clothes professionally.",
        "back": "seamstress\n\nCosturera"
      },
      {
        "id": "v29_005",
        "front": "___ refers to high-end custom-fitted fashion.",
        "back": "Haute couture\n\nAlta costura"
      },
      {
        "id": "v29_006",
        "front": "A ___ is a company that creates designer clothing.",
        "back": "fashion house\n\nCasa de moda"
      },
      {
        "id": "v29_007",
        "front": "A ___ / ___ is the platform models walk on during a fashion show.",
        "back": "runway / catwalk\n\nPasarela"
      },
      {
        "id": "v29_008",
        "front": "A ___ is a designer's set of clothes for a season.",
        "back": "collection\n\nColección"
      },
      {
        "id": "v29_009",
        "front": "___ is designer clothing made in standard sizes.",
        "back": "Prêt-à-porter\n\nPrêt-à-porter / listo para llevar"
      },
      {
        "id": "v29_010",
        "front": "A ___ is a catalogue showing a brand's seasonal collection.",
        "back": "lookbook\n\nLookbook / catálogo de moda"
      },
      {
        "id": "v29_011",
        "front": "___ refers to cheap, rapidly produced clothing that follows trends.",
        "back": "Fast fashion\n\nModa rápida / fast fashion"
      },
      {
        "id": "v29_012",
        "front": "___ uses ethical and eco-friendly production methods.",
        "back": "Sustainable fashion\n\nModa sostenible"
      },
      {
        "id": "v29_013",
        "front": "___ means transforming old clothing into new garments.",
        "back": "Upcycling\n\nUpcycling / reutilización creativa"
      },
      {
        "id": "v29_014",
        "front": "A ___ item is second-hand clothing from a previous era.",
        "back": "vintage\n\nVintage / de época"
      },
      {
        "id": "v29_015",
        "front": "___ fabric is unused material left over from original production.",
        "back": "Deadstock\n\nTela sobrante sin usar"
      },
      {
        "id": "v29_016",
        "front": "A ___ is a small collection of versatile, timeless pieces.",
        "back": "capsule wardrobe\n\nGuardarropa cápsula"
      },
      {
        "id": "v29_017",
        "front": "___ is clothing designed for both exercise and casual wear.",
        "back": "Athleisure\n\nAthleisure (ropa deportiva informal)"
      },
      {
        "id": "v29_018",
        "front": "___ is casual urban fashion influenced by skate and hip-hop culture.",
        "back": "Streetwear\n\nStreetwear / moda urbana"
      },
      {
        "id": "v29_019",
        "front": "A ___ is a bold item that stands out in an outfit.",
        "back": "statement piece\n\nPieza llamativa / protagonista del look"
      },
      {
        "id": "v29_020",
        "front": "___ dressing means wearing one colour head to toe.",
        "back": "Monochrome\n\nMonocromático / un solo color"
      },
      {
        "id": "v29_021",
        "front": "___ combines bold blocks of contrasting colours in an outfit.",
        "back": "Colour blocking\n\nCombinación de bloques de color"
      },
      {
        "id": "v29_022",
        "front": "A ___ is a repeated pattern on fabric (floral, geometric, etc.).",
        "back": "print\n\nEstampado"
      },
      {
        "id": "v29_023",
        "front": "___ is a classic black-and-white checked pattern.",
        "back": "Houndstooth\n\nPata de gallo (estampado)"
      },
      {
        "id": "v29_024",
        "front": "___ / ___ is a criss-crossed horizontal and vertical bands pattern.",
        "back": "Plaid / tartan\n\nTartán / cuadros escoceses"
      },
      {
        "id": "v29_025",
        "front": "A ___ is a very thin stripe on fabric, common in suits.",
        "back": "pinstripe\n\nRaya diplomática / rayas finas"
      },
      {
        "id": "v29_026",
        "front": "___ is a rough woollen fabric associated with countryside style.",
        "back": "Tweed\n\nTweed (tela)"
      },
      {
        "id": "v29_027",
        "front": "___ is a luxury soft wool from cashmere goats.",
        "back": "Cashmere\n\nCachemira"
      },
      {
        "id": "v29_028",
        "front": "___ is a lightweight breathable fabric made from flax.",
        "back": "Linen\n\nLino"
      },
      {
        "id": "v29_029",
        "front": "___ is a soft, rich fabric with a short dense pile.",
        "back": "Velvet\n\nTerciopelo"
      },
      {
        "id": "v29_030",
        "front": "___ is a sheer, lightweight fabric often used in eveningwear.",
        "back": "Chiffon\n\nGasa / chifón"
      },
      {
        "id": "v29_031",
        "front": "___ is the sturdy cotton fabric used for jeans.",
        "back": "Denim\n\nTela vaquera / denim"
      },
      {
        "id": "v29_032",
        "front": "___ is a smooth, glossy fabric with a luxurious sheen.",
        "back": "Satin\n\nSatén"
      },
      {
        "id": "v29_033",
        "front": "___ is a thin, stiff, sheer fabric used in formal wear.",
        "back": "Organza\n\nOrganza"
      },
      {
        "id": "v29_034",
        "front": "___ is a synthetic rubber fabric used in sports and fashion.",
        "back": "Neoprene\n\nNeopreno"
      },
      {
        "id": "v29_035",
        "front": "A ___ is the finished bottom edge of a garment.",
        "back": "hem\n\nDobladillo"
      },
      {
        "id": "v29_036",
        "front": "A ___ is the folded flap of a jacket or coat.",
        "back": "lapel\n\nSolapa"
      },
      {
        "id": "v29_037",
        "front": "A ___ is the band at the end of a sleeve.",
        "back": "cuff\n\nPuño (de manga)"
      },
      {
        "id": "v29_038",
        "front": "A ___ is the inner layer of a garment.",
        "back": "lining\n\nForro"
      },
      {
        "id": "v29_039",
        "front": "A ___ is a fold of fabric sewn into place for fullness.",
        "back": "pleat\n\nPliegue / tabla"
      },
      {
        "id": "v29_040",
        "front": "A ___ is a tapered fold sewn into fabric to shape it to the body.",
        "back": "dart\n\nPinza (costura)"
      },
      {
        "id": "v29_041",
        "front": "___ is decorative stitching on fabric.",
        "back": "Embroidery\n\nBordado"
      },
      {
        "id": "v29_042",
        "front": "___ are small shiny discs sewn onto fabric for decoration.",
        "back": "Sequins\n\nLentejuelas"
      },
      {
        "id": "v29_043",
        "front": "___ is the decoration of fabric with small beads.",
        "back": "Beading\n\nAbalorios / decoración con cuentas"
      },
      {
        "id": "v29_044",
        "front": "A ___ is a decorative pin worn on clothing.",
        "back": "brooch\n\nBroche / alfiler decorativo"
      },
      {
        "id": "v29_045",
        "front": "___ is inexpensive decorative jewellery, not precious metals.",
        "back": "Costume jewellery\n\nBisutería"
      },
      {
        "id": "v29_046",
        "front": "A ___ is a small handbag without a strap held in the hand.",
        "back": "clutch\n\nBolso de mano / clutch"
      },
      {
        "id": "v29_047",
        "front": "A ___ is a large open-top bag carried by handles.",
        "back": "tote bag\n\nBolsa tote / bolsa de asas"
      },
      {
        "id": "v29_048",
        "front": "A ___ is a bag worn across the body on a long strap.",
        "back": "crossbody bag\n\nBolso bandolera"
      },
      {
        "id": "v29_049",
        "front": "___ are high-heeled shoes with a very thin heel.",
        "back": "Stilettos\n\nStilettos / tacones de aguja"
      },
      {
        "id": "v29_050",
        "front": "___ are flat slip-on leather shoes.",
        "back": "Loafers\n\nMocasines"
      },
      {
        "id": "v29_051",
        "front": "___ are flat shoes with a canvas upper and rope sole.",
        "back": "Espadrilles\n\nAlpargatas"
      },
      {
        "id": "v29_052",
        "front": "___ are ankle boots with elastic side panels.",
        "back": "Chelsea boots\n\nBotas Chelsea"
      },
      {
        "id": "v29_053",
        "front": "A ___ is a belted waterproof coat originally worn in the military.",
        "back": "trench coat\n\nGabardina / trench coat"
      },
      {
        "id": "v29_054",
        "front": "A ___ is a padded, quilted jacket filled with down or synthetic material.",
        "back": "puffer jacket\n\nPlumífero / anorak acolchado"
      },
      {
        "id": "v29_055",
        "front": "A ___ is a semi-formal jacket, often worn without a matching trouser.",
        "back": "blazer\n\nBlazer / americana"
      },
      {
        "id": "v29_056",
        "front": "A ___ (BrE) / ___ (AmE) is a sleeveless garment worn over a shirt.",
        "back": "waistcoat / vest\n\nChaleco"
      },
      {
        "id": "v29_057",
        "front": "A ___ is a high close-fitting collar that covers the neck.",
        "back": "turtleneck\n\nJersey de cuello alto / cuello tortuga"
      },
      {
        "id": "v29_058",
        "front": "A ___ is a dress with a front closure formed by wrapping one side over the other.",
        "back": "wrap dress\n\nVestido cruzado"
      },
      {
        "id": "v29_059",
        "front": "A ___ falls to mid-calf length.",
        "back": "midi skirt\n\nFalda midi"
      },
      {
        "id": "v29_060",
        "front": "A ___ reaches the ankles or floor.",
        "back": "maxi dress\n\nVestido maxi"
      },
      {
        "id": "v29_061",
        "front": "___ have a very wide cut from hip to hem.",
        "back": "Wide-leg trousers\n\nPantalones de pierna ancha"
      },
      {
        "id": "v29_062",
        "front": "___ are very tight-fitting denim trousers.",
        "back": "Skinny jeans\n\nVaqueros pitillo"
      },
      {
        "id": "v29_063",
        "front": "___ are loose, casual trousers with an elasticated waist.",
        "back": "Joggers\n\nJoggers / pantalón chándal"
      },
      {
        "id": "v29_064",
        "front": "A ___ is a tight one-piece garment covering the torso.",
        "back": "bodysuit\n\nBody"
      },
      {
        "id": "v29_065",
        "front": "A ___ is a matching top and bottom sold as a set.",
        "back": "co-ord set\n\nConjunto coordinado"
      },
      {
        "id": "v29_066",
        "front": "___ is comfortable, casual clothing worn at home.",
        "back": "Loungewear\n\nRopa de estar en casa / loungewear"
      },
      {
        "id": "v29_067",
        "front": "A ___ helps clients choose clothes and accessories.",
        "back": "personal shopper\n\nPersonal shopper"
      },
      {
        "id": "v29_068",
        "front": "A ___ selects and coordinates clothing for clients or photo shoots.",
        "back": "stylist\n\nEstilista"
      },
      {
        "id": "v29_069",
        "front": "A ___ selects and presents fashion content for magazines.",
        "back": "fashion editor\n\nEditora de moda"
      },
      {
        "id": "v29_070",
        "front": "___ is the visual style and values that define a fashion label.",
        "back": "Brand identity\n\nIdentidad de marca"
      },
      {
        "id": "v29_071",
        "front": "___ are the dominant styles for a specific fashion season.",
        "back": "Seasonal trends\n\nTendencias de temporada"
      },
      {
        "id": "v29_072",
        "front": "A ___ is a collage of images used to communicate a design concept.",
        "back": "mood board\n\nTablero de inspiración / mood board"
      },
      {
        "id": "v29_073",
        "front": "___ designs clothes without masculine or feminine distinction.",
        "back": "Gender-neutral fashion\n\nModa sin género / unisex"
      },
      {
        "id": "v29_074",
        "front": "___ in fashion promotes the inclusion of all body types.",
        "back": "Body positivity\n\nPositividad corporal en moda"
      },
      {
        "id": "v29_075",
        "front": "___ is when brands falsely claim to be environmentally sustainable.",
        "back": "Greenwashing\n\nGreenwashing / ecoblanqueo"
      },
      {
        "id": "v29_076",
        "front": "A ___ is a series of runway shows held twice a year in major cities.",
        "back": "fashion week\n\nSemana de la moda"
      },
      {
        "id": "v29_077",
        "front": "___ refers to practices and products that maintain skin health.",
        "back": "Skincare\n\nCuidado de la piel"
      },
      {
        "id": "v29_078",
        "front": "A ___ is a cream or lotion that hydrates the skin.",
        "back": "moisturiser\n\nHidratante"
      },
      {
        "id": "v29_079",
        "front": "___ (Sun Protection Factor) measures how well a product blocks UV rays.",
        "back": "SPF\n\nFPS / factor de protección solar"
      },
      {
        "id": "v29_080",
        "front": "A ___ is a liquid applied after cleansing to balance the skin.",
        "back": "toner\n\nTónico facial"
      },
      {
        "id": "v29_081",
        "front": "A ___ is a concentrated skincare product targeting specific concerns.",
        "back": "serum\n\nSérum"
      },
      {
        "id": "v29_082",
        "front": "___ is a vitamin A derivative used in anti-ageing skincare.",
        "back": "Retinol\n\nRetinol"
      },
      {
        "id": "v29_083",
        "front": "___ attracts and retains moisture in the skin.",
        "back": "Hyaluronic acid\n\nÁcido hialurónico"
      },
      {
        "id": "v29_084",
        "front": "___ removes dead skin cells to reveal fresher skin beneath.",
        "back": "Exfoliation\n\nExfoliación"
      },
      {
        "id": "v29_085",
        "front": "A ___ is a product applied to the face and left on before removing.",
        "back": "face mask\n\nMascarilla facial"
      },
      {
        "id": "v29_086",
        "front": "___ is a base applied before foundation to smooth the skin.",
        "back": "Primer\n\nBase de maquillaje / primer"
      },
      {
        "id": "v29_087",
        "front": "___ evens out skin tone and provides coverage.",
        "back": "Foundation\n\nBase de maquillaje (cobertura)"
      },
      {
        "id": "v29_088",
        "front": "___ covers blemishes, dark circles or imperfections.",
        "back": "Concealer\n\nCorrector"
      },
      {
        "id": "v29_089",
        "front": "___ products create the illusion of shadow to define facial features.",
        "back": "Contour\n\nContorno / contouring"
      },
      {
        "id": "v29_090",
        "front": "___ adds a shimmery glow to the high points of the face.",
        "back": "Highlighter\n\nIluminador"
      },
      {
        "id": "v29_091",
        "front": "___ adds colour to the cheeks.",
        "back": "Blush\n\nColorete / rubor"
      },
      {
        "id": "v29_092",
        "front": "A ___ darkens and thickens the eyelashes.",
        "back": "mascara\n\nMáscara de pestañas"
      },
      {
        "id": "v29_093",
        "front": "___ is used to define the eyes along the lash line.",
        "back": "Eyeliner\n\nDelineador de ojos"
      },
      {
        "id": "v29_094",
        "front": "___ is a pigmented powder or cream applied to the eyelids.",
        "back": "Eyeshadow\n\nSombra de ojos"
      },
      {
        "id": "v29_095",
        "front": "A ___ defines the outline of the lips before lipstick.",
        "back": "lip liner\n\nPerfilador de labios"
      },
      {
        "id": "v29_096",
        "front": "___ adds shine to the lips.",
        "back": "Lip gloss\n\nBrillo de labios"
      },
      {
        "id": "v29_097",
        "front": "___ is applied over makeup to make it last longer.",
        "back": "Setting spray\n\nSpray fijador"
      },
      {
        "id": "v29_098",
        "front": "___ is a gentle no-rinse cleanser that removes makeup.",
        "back": "Micellar water\n\nAgua micelar"
      },
      {
        "id": "v29_099",
        "front": "A ___ is a sponge applicator for blending foundation.",
        "back": "beauty blender\n\nEsponja de maquillaje / beauty blender"
      }
    ]
  },
  {
    "section": 30,
    "title": "anki_30_cocteles_bebidas.csv",
    "cards": [
      {
        "id": "v30_001",
        "front": "A ___ / ___ prepares and serves cocktails.",
        "back": "bartender / mixologist\n\nBarman / coctelero"
      },
      {
        "id": "v30_002",
        "front": "A ___ is a mixed drink made with spirits, mixers and garnishes.",
        "back": "cocktail\n\nCóctel"
      },
      {
        "id": "v30_003",
        "front": "A ___ is a non-alcoholic cocktail.",
        "back": "mocktail\n\nCóctel sin alcohol / mocktail"
      },
      {
        "id": "v30_004",
        "front": "A ___ is the container used to mix cocktail ingredients by shaking.",
        "back": "shaker\n\nCoctelera"
      },
      {
        "id": "v30_005",
        "front": "A ___ removes ice and solids when pouring a cocktail.",
        "back": "strainer\n\nColador de coctelería"
      },
      {
        "id": "v30_006",
        "front": "A ___ is a small measuring tool for spirits.",
        "back": "jigger\n\nMedidor / jigger"
      },
      {
        "id": "v30_007",
        "front": "A ___ is used to crush ingredients like mint or citrus in a glass.",
        "back": "muddler\n\nMazo de coctelería / muddler"
      },
      {
        "id": "v30_008",
        "front": "___ means served over ice.",
        "back": "On the rocks\n\nCon hielo (en vaso)"
      },
      {
        "id": "v30_009",
        "front": "___ means chilled then served without ice.",
        "back": "Straight up\n\nSin hielo (agitado y colado)"
      },
      {
        "id": "v30_010",
        "front": "___ means served at room temperature with no ice or mixer.",
        "back": "Neat\n\nSolo / sin hielo ni mezcla"
      },
      {
        "id": "v30_011",
        "front": "A ___ is a spirit mixed with a larger amount of a non-alcoholic drink.",
        "back": "highball\n\nHighball (combinado largo)"
      },
      {
        "id": "v30_012",
        "front": "A ___ is a small measure of spirit (approx. 25–50 ml).",
        "back": "shot\n\nChupito / shot"
      },
      {
        "id": "v30_013",
        "front": "A ___ is two measures of spirit in one drink.",
        "back": "double\n\nDoble"
      },
      {
        "id": "v30_014",
        "front": "A ___ is a non-alcoholic drink added to a spirit (tonic, soda, juice).",
        "back": "mixer\n\nMezclador / refresco"
      },
      {
        "id": "v30_015",
        "front": "___ is a carbonated drink with quinine, used in gin and tonic.",
        "back": "Tonic water\n\nAgua tónica"
      },
      {
        "id": "v30_016",
        "front": "___ is plain carbonated water used as a mixer.",
        "back": "Soda water\n\nAgua con gas / soda"
      },
      {
        "id": "v30_017",
        "front": "A ___ is a decorative and flavourful addition to a cocktail (lemon twist, mint, etc.).",
        "back": "garnish\n\nGuarnición / decoración"
      },
      {
        "id": "v30_018",
        "front": "A ___ is a strip of citrus peel used as a garnish.",
        "back": "twist\n\nTwist / piel de cítrico"
      },
      {
        "id": "v30_019",
        "front": "A ___ is the edge of a glass, often salted or sugared for certain cocktails.",
        "back": "rim\n\nBorde del vaso (con sal o azúcar)"
      },
      {
        "id": "v30_020",
        "front": "___ creates a smoky effect in cocktails.",
        "back": "Dry ice\n\nHielo seco"
      },
      {
        "id": "v30_021",
        "front": "A ___ is made with tequila, triple sec and lime juice.",
        "back": "Margarita\n\nMargarita"
      },
      {
        "id": "v30_022",
        "front": "A ___ is made with rum, mint, lime, sugar and soda water.",
        "back": "Mojito\n\nMojito"
      },
      {
        "id": "v30_023",
        "front": "A ___ is made with gin, Campari and sweet vermouth.",
        "back": "Negroni\n\nNegroni"
      },
      {
        "id": "v30_024",
        "front": "An ___ is made with bourbon, bitters, sugar and orange peel.",
        "back": "Old Fashioned\n\nOld Fashioned"
      },
      {
        "id": "v30_025",
        "front": "A ___ is made with vodka, triple sec, cranberry and lime juice.",
        "back": "Cosmopolitan\n\nCosmopolitan"
      },
      {
        "id": "v30_026",
        "front": "A ___ is made with whiskey, lemon juice and sugar syrup.",
        "back": "Whiskey Sour\n\nWhiskey Sour"
      },
      {
        "id": "v30_027",
        "front": "A ___ is made with rum, lime juice and sugar.",
        "back": "Daiquiri\n\nDaiquiri"
      },
      {
        "id": "v30_028",
        "front": "A ___ is made with vodka, tomato juice and spices.",
        "back": "Bloody Mary\n\nBloody Mary"
      },
      {
        "id": "v30_029",
        "front": "A ___ is gin mixed with tonic water over ice.",
        "back": "Gin and Tonic\n\nGin tonic"
      },
      {
        "id": "v30_030",
        "front": "A ___ is typically Prosecco, Aperol and soda water.",
        "back": "Spritz\n\nSpritz"
      },
      {
        "id": "v30_031",
        "front": "A ___ is a cocktail made with gin (or vodka) and dry vermouth.",
        "back": "Martini\n\nMartini"
      },
      {
        "id": "v30_032",
        "front": "A ___ is made with pisco, lemon juice, sugar and egg white.",
        "back": "Pisco Sour\n\nPisco Sour"
      },
      {
        "id": "v30_033",
        "front": "___ (BrE) / ___ (AmE/Irish) is a distilled grain spirit aged in barrels.",
        "back": "Whisky / whiskey\n\nWhisky / whiskey"
      },
      {
        "id": "v30_034",
        "front": "___ is an American whiskey made primarily from corn.",
        "back": "Bourbon\n\nBourbon"
      },
      {
        "id": "v30_035",
        "front": "___ is whisky made in Scotland, often with a smoky flavour.",
        "back": "Scotch\n\nScotch (whisky escocés)"
      },
      {
        "id": "v30_036",
        "front": "___ is made primarily from rye grain, common in cocktails.",
        "back": "Rye whiskey\n\nWhiskey de centeno"
      },
      {
        "id": "v30_037",
        "front": "___ whisky comes from a single distillery and one type of grain.",
        "back": "Single malt\n\nSingle malt"
      },
      {
        "id": "v30_038",
        "front": "___ mixes malt and grain whiskies from multiple distilleries.",
        "back": "Blended whisky\n\nWhisky blended"
      },
      {
        "id": "v30_039",
        "front": "___ is a neutral spirit distilled from grains or potatoes.",
        "back": "Vodka\n\nVodka"
      },
      {
        "id": "v30_040",
        "front": "___ is a spirit flavoured with juniper berries and botanicals.",
        "back": "Gin\n\nGinebra"
      },
      {
        "id": "v30_041",
        "front": "___ is distilled from sugarcane or molasses.",
        "back": "Rum\n\nRon"
      },
      {
        "id": "v30_042",
        "front": "___ is a Mexican spirit distilled from blue agave.",
        "back": "Tequila\n\nTequila"
      },
      {
        "id": "v30_043",
        "front": "___ is a smoky Mexican spirit made from various agave plants.",
        "back": "Mezcal\n\nMezcal"
      },
      {
        "id": "v30_044",
        "front": "___ is a spirit distilled from fermented fruit juice, usually grapes.",
        "back": "Brandy\n\nBrandy / coñac"
      },
      {
        "id": "v30_045",
        "front": "___ is a type of brandy from the Cognac region of France.",
        "back": "Cognac\n\nCoñac"
      },
      {
        "id": "v30_046",
        "front": "___ is a sparkling wine from the Champagne region of France.",
        "back": "Champagne\n\nChampán / champagne"
      },
      {
        "id": "v30_047",
        "front": "___ is an Italian sparkling wine.",
        "back": "Prosecco\n\nProsecco"
      },
      {
        "id": "v30_048",
        "front": "___ is a Spanish sparkling wine made by traditional method.",
        "back": "Cava\n\nCava"
      },
      {
        "id": "v30_049",
        "front": "___ is a pink wine made from red grapes with limited skin contact.",
        "back": "Rosé\n\nVino rosado"
      },
      {
        "id": "v30_050",
        "front": "A ___ has little residual sugar.",
        "back": "dry wine\n\nVino seco"
      },
      {
        "id": "v30_051",
        "front": "A ___ has a high residual sugar content.",
        "back": "sweet wine\n\nVino dulce"
      },
      {
        "id": "v30_052",
        "front": "___ describes a wine with a rich, complex flavour.",
        "back": "Full-bodied\n\nVino con cuerpo"
      },
      {
        "id": "v30_053",
        "front": "___ are natural compounds in red wine that create a dry sensation.",
        "back": "Tannins\n\nTaninos"
      },
      {
        "id": "v30_054",
        "front": "___ is produced by small independent breweries with an emphasis on quality.",
        "back": "Craft beer\n\nCerveza artesanal"
      },
      {
        "id": "v30_055",
        "front": "An ___ (India Pale Ale) is a hoppy, bitter style of beer.",
        "back": "IPA\n\nIPA (cerveza pale ale amarga)"
      },
      {
        "id": "v30_056",
        "front": "A ___ is a dark, rich beer made with roasted malt.",
        "back": "stout\n\nStout (cerveza negra)"
      },
      {
        "id": "v30_057",
        "front": "A ___ is a light, crisp beer fermented at low temperatures.",
        "back": "lager\n\nLager / cerveza rubia"
      },
      {
        "id": "v30_058",
        "front": "A ___ is brewed with a significant proportion of wheat.",
        "back": "wheat beer\n\nCerveza de trigo"
      },
      {
        "id": "v30_059",
        "front": "___ is served from a keg or cask via a tap.",
        "back": "Draught beer\n\nCerveza de barril / de grifo"
      },
      {
        "id": "v30_060",
        "front": "___ is a high-alcohol anise-flavoured spirit.",
        "back": "Absinthe\n\nAbsenta"
      },
      {
        "id": "v30_061",
        "front": "___ is a sweet Italian almond-flavoured liqueur.",
        "back": "Amaretto\n\nAmaretto"
      },
      {
        "id": "v30_062",
        "front": "___ is an orange-flavoured liqueur used in many cocktails.",
        "back": "Triple sec\n\nTriple sec (licor de naranja)"
      },
      {
        "id": "v30_063",
        "front": "___ is a fortified wine flavoured with herbs, used in cocktails.",
        "back": "Vermouth\n\nVermut"
      },
      {
        "id": "v30_064",
        "front": "___ are concentrated alcoholic flavourings added in small amounts to cocktails.",
        "back": "Bitters\n\nBitters / amargos"
      },
      {
        "id": "v30_065",
        "front": "___ is sugar dissolved in water, used to sweeten cocktails.",
        "back": "Simple syrup\n\nAlmíbar simple / sirope"
      },
      {
        "id": "v30_066",
        "front": "___ is a sweet pomegranate-flavoured syrup used in cocktails.",
        "back": "Grenadine\n\nGranadina"
      },
      {
        "id": "v30_067",
        "front": "___ spirits have had flavours added through soaking ingredients.",
        "back": "Infused\n\nMacerado / infusionado"
      },
      {
        "id": "v30_068",
        "front": "___ cocktails or spirits have been matured in wooden casks.",
        "back": "Barrel-aged\n\nEnvejecido en barrica"
      },
      {
        "id": "v30_069",
        "front": "A ___ is a cool underground space for storing wine.",
        "back": "cellar\n\nBodega / sótano de vinos"
      },
      {
        "id": "v30_070",
        "front": "A ___ is a trained wine expert who advises on wine pairings.",
        "back": "sommelier\n\nSumiller"
      },
      {
        "id": "v30_071",
        "front": "___ means pouring wine from the bottle into a decanter to aerate it.",
        "back": "Decanting\n\nDecantación"
      },
      {
        "id": "v30_072",
        "front": "A ___ is a selection of drinks (usually wine or beer) served for tasting.",
        "back": "flight\n\nCata / degustación"
      },
      {
        "id": "v30_073",
        "front": "___ is a period of reduced drink prices, usually in the early evening.",
        "back": "Happy hour\n\nHora feliz / happy hour"
      },
      {
        "id": "v30_074",
        "front": "___ is the person in a group who agrees not to drink alcohol.",
        "back": "Designated driver\n\nConductor designado"
      },
      {
        "id": "v30_075",
        "front": "___ is the unpleasant after-effects of drinking too much alcohol.",
        "back": "Hangover\n\nResaca"
      },
      {
        "id": "v30_076",
        "front": "To ___ means to drink slowly to avoid getting too drunk.",
        "back": "pace yourself\n\nBeber con moderación / controlarse"
      }
    ]
  },
  {
    "section": 31,
    "title": "anki_31_religion_filosofia.csv",
    "cards": [
      {
        "id": "v31_001",
        "front": "___ is an organised system of beliefs, practices and worship.",
        "back": "Religion\n\nReligión"
      },
      {
        "id": "v31_002",
        "front": "___ is strong belief in a religion or doctrine, often without proof.",
        "back": "Faith\n\nFe"
      },
      {
        "id": "v31_003",
        "front": "___ is the study of religious beliefs and the nature of God.",
        "back": "Theology\n\nTeología"
      },
      {
        "id": "v31_004",
        "front": "___ is the belief in one God.",
        "back": "Monotheism\n\nMonoteísmo"
      },
      {
        "id": "v31_005",
        "front": "___ is the belief in multiple gods.",
        "back": "Polytheism\n\nPoliteísmo"
      },
      {
        "id": "v31_006",
        "front": "___ is the rejection of belief in the existence of gods.",
        "back": "Atheism\n\nAteísmo"
      },
      {
        "id": "v31_007",
        "front": "___ holds that the existence of God is unknown or unknowable.",
        "back": "Agnosticism\n\nAgnosticismo"
      },
      {
        "id": "v31_008",
        "front": "___ is the principle of separating religion from public life.",
        "back": "Secularism\n\nSecularismo / laicismo"
      },
      {
        "id": "v31_009",
        "front": "___ is the religion based on the teachings of Jesus Christ.",
        "back": "Christianity\n\nCristianismo"
      },
      {
        "id": "v31_010",
        "front": "___ is the religion based on the Quran and the teachings of Muhammad.",
        "back": "Islam\n\nIslam"
      },
      {
        "id": "v31_011",
        "front": "___ is the monotheistic religion of the Jewish people.",
        "back": "Judaism\n\nJudaísmo"
      },
      {
        "id": "v31_012",
        "front": "___ is the ancient Indian religion with many deities and texts.",
        "back": "Hinduism\n\nHinduismo"
      },
      {
        "id": "v31_013",
        "front": "___ follows the teachings of Siddhartha Gautama on the path to enlightenment.",
        "back": "Buddhism\n\nBudismo"
      },
      {
        "id": "v31_014",
        "front": "___ is a monotheistic religion originating in the Punjab region of India.",
        "back": "Sikhism\n\nSijismo"
      },
      {
        "id": "v31_015",
        "front": "A ___ is a god or goddess.",
        "back": "deity\n\nDeidad / dios"
      },
      {
        "id": "v31_016",
        "front": "___ is reverence and devotion shown to a deity.",
        "back": "Worship\n\nAdoración / culto"
      },
      {
        "id": "v31_017",
        "front": "___ is communication with God or a deity through words or thought.",
        "back": "Prayer\n\nOración / rezo"
      },
      {
        "id": "v31_018",
        "front": "A ___ is a religious ceremony or act performed regularly.",
        "back": "ritual\n\nRitual"
      },
      {
        "id": "v31_019",
        "front": "A ___ is a journey to a sacred place for religious reasons.",
        "back": "pilgrimage\n\nPeregrinación"
      },
      {
        "id": "v31_020",
        "front": "A ___ place or object is considered holy and deserving of reverence.",
        "back": "sacred\n\nSagrado"
      },
      {
        "id": "v31_021",
        "front": "___ refers to the sacred writings of a religion.",
        "back": "Scripture\n\nEscrituras sagradas"
      },
      {
        "id": "v31_022",
        "front": "The ___ is the sacred text of Christianity.",
        "back": "Bible\n\nBiblia"
      },
      {
        "id": "v31_023",
        "front": "The ___ / ___ is the sacred text of Islam.",
        "back": "Quran / Koran\n\nCorán"
      },
      {
        "id": "v31_024",
        "front": "The ___ is the sacred text of Judaism.",
        "back": "Torah\n\nTorá"
      },
      {
        "id": "v31_025",
        "front": "A ___ is a Muslim place of worship.",
        "back": "mosque\n\nMezquita"
      },
      {
        "id": "v31_026",
        "front": "A ___ is a Jewish place of worship.",
        "back": "synagogue\n\nSinagoga"
      },
      {
        "id": "v31_027",
        "front": "A ___ is a place of worship in Hinduism, Buddhism and other religions.",
        "back": "temple\n\nTemplo"
      },
      {
        "id": "v31_028",
        "front": "A ___ is the principal church of a bishop's area in Christianity.",
        "back": "cathedral\n\nCatedral"
      },
      {
        "id": "v31_029",
        "front": "A ___ member is an ordained religious leader.",
        "back": "clergy\n\nClérigo / clero"
      },
      {
        "id": "v31_030",
        "front": "A ___ is an ordained minister in Catholic, Orthodox and some Protestant churches.",
        "back": "priest\n\nSacerdote"
      },
      {
        "id": "v31_031",
        "front": "An ___ is a Muslim religious leader.",
        "back": "imam\n\nImán"
      },
      {
        "id": "v31_032",
        "front": "A ___ is a Jewish religious leader and teacher.",
        "back": "rabbi\n\nRabino"
      },
      {
        "id": "v31_033",
        "front": "___ in Christianity is deliverance from sin and its consequences.",
        "back": "Salvation\n\nSalvación"
      },
      {
        "id": "v31_034",
        "front": "___ is an act considered an offence against God or divine law.",
        "back": "Sin\n\nPecado"
      },
      {
        "id": "v31_035",
        "front": "___ in Christianity is the unmerited favour of God toward humans.",
        "back": "Grace\n\nGracia (divina)"
      },
      {
        "id": "v31_036",
        "front": "___ in Hinduism and Buddhism is the sum of one's actions affecting future lives.",
        "back": "Karma\n\nKarma"
      },
      {
        "id": "v31_037",
        "front": "___ in Buddhism is the state of liberation from suffering and the cycle of rebirth.",
        "back": "Nirvana\n\nNirvana"
      },
      {
        "id": "v31_038",
        "front": "___ is the rebirth of a soul into a new body after death.",
        "back": "Reincarnation\n\nReencarnación"
      },
      {
        "id": "v31_039",
        "front": "___ refers to a continued existence after death.",
        "back": "Afterlife\n\nVida después de la muerte"
      },
      {
        "id": "v31_040",
        "front": "___ is the place of eternal happiness in many religions.",
        "back": "Heaven\n\nCielo / paraíso"
      },
      {
        "id": "v31_041",
        "front": "___ is the place of punishment after death in many religions.",
        "back": "Hell\n\nInfierno"
      },
      {
        "id": "v31_042",
        "front": "___ in Catholicism is a state of purification after death before heaven.",
        "back": "Purgatory\n\nPurgatorio"
      },
      {
        "id": "v31_043",
        "front": "___ is the study of fundamental questions about existence, knowledge and ethics.",
        "back": "Philosophy\n\nFilosofía"
      },
      {
        "id": "v31_044",
        "front": "___ is the branch of philosophy concerned with the nature of reality.",
        "back": "Metaphysics\n\nMetafísica"
      },
      {
        "id": "v31_045",
        "front": "___ is the study of knowledge — what it is and how we acquire it.",
        "back": "Epistemology\n\nEpistemología"
      },
      {
        "id": "v31_046",
        "front": "___ is the branch of philosophy dealing with morality and right action.",
        "back": "Ethics\n\nÉtica"
      },
      {
        "id": "v31_047",
        "front": "___ is the study of valid reasoning and argument.",
        "back": "Logic\n\nLógica"
      },
      {
        "id": "v31_048",
        "front": "___ is the philosophy of beauty and art.",
        "back": "Aesthetics\n\nEstética (filosófica)"
      },
      {
        "id": "v31_049",
        "front": "___ is the philosophical study of being and existence.",
        "back": "Ontology\n\nOntología"
      },
      {
        "id": "v31_050",
        "front": "___ holds that reason is the primary source of knowledge.",
        "back": "Rationalism\n\nRacionalismo"
      },
      {
        "id": "v31_051",
        "front": "___ holds that all knowledge comes from sensory experience.",
        "back": "Empiricism\n\nEmpirismo"
      },
      {
        "id": "v31_052",
        "front": "___ holds that reality is fundamentally mental or spiritual.",
        "back": "Idealism\n\nIdealismo"
      },
      {
        "id": "v31_053",
        "front": "___ holds that only physical matter truly exists.",
        "back": "Materialism\n\nMaterialismo"
      },
      {
        "id": "v31_054",
        "front": "___ focuses on individual freedom, choice and responsibility.",
        "back": "Existentialism\n\nExistencialismo"
      },
      {
        "id": "v31_055",
        "front": "___ holds that life has no intrinsic meaning or value.",
        "back": "Nihilism\n\nNihilismo"
      },
      {
        "id": "v31_056",
        "front": "___ teaches that virtue is the only true good and emotions should be controlled.",
        "back": "Stoicism\n\nEstoicismo"
      },
      {
        "id": "v31_057",
        "front": "___ holds that the best action produces the greatest happiness for the most people.",
        "back": "Utilitarianism\n\nUtilitarismo"
      },
      {
        "id": "v31_058",
        "front": "___ / ___ judges actions by their adherence to rules or duties.",
        "back": "Kantian ethics / deontology\n\nÉtica kantiana / deontología"
      },
      {
        "id": "v31_059",
        "front": "A ___ is a seemingly contradictory statement that may nonetheless be true.",
        "back": "paradox\n\nParadoja"
      },
      {
        "id": "v31_060",
        "front": "___ is the ability to choose one's actions independently of fate or God.",
        "back": "Free will\n\nLibre albedrío"
      },
      {
        "id": "v31_061",
        "front": "___ holds that all events are determined by prior causes.",
        "back": "Determinism\n\nDeterminismo"
      },
      {
        "id": "v31_062",
        "front": "___ is the state of being aware of one's own existence and thoughts.",
        "back": "Consciousness\n\nConciencia (filosófica)"
      },
      {
        "id": "v31_063",
        "front": "The ___ questions the relationship between mental states and physical reality.",
        "back": "mind-body problem\n\nProblema mente-cuerpo"
      },
      {
        "id": "v31_064",
        "front": "___ taught that reality consists of ideal Forms and the physical world is a shadow.",
        "back": "Plato\n\nPlatón"
      },
      {
        "id": "v31_065",
        "front": "___ emphasised empirical observation and logic as the basis of knowledge.",
        "back": "Aristotle\n\nAristóteles"
      },
      {
        "id": "v31_066",
        "front": "___ introduced methodological doubt and said \"I think, therefore I am\".",
        "back": "Descartes\n\nDescartes"
      },
      {
        "id": "v31_067",
        "front": "___ proclaimed the death of God and the idea of the Übermensch.",
        "back": "Nietzsche\n\nNietzsche"
      },
      {
        "id": "v31_068",
        "front": "___ used questioning dialogue (the Socratic method) to examine beliefs.",
        "back": "Socrates\n\nSócrates"
      },
      {
        "id": "v31_069",
        "front": "The ___ is a form of dialogue using questions to challenge assumptions.",
        "back": "Socratic method\n\nMétodo socrático"
      },
      {
        "id": "v31_070",
        "front": "A ___ is the main argument or position defended in a philosophical text.",
        "back": "thesis\n\nTesis"
      },
      {
        "id": "v31_071",
        "front": "An ___ is the opposing argument to the thesis.",
        "back": "antithesis\n\nAntítesis"
      },
      {
        "id": "v31_072",
        "front": "A ___ combines thesis and antithesis into a new position.",
        "back": "synthesis\n\nSíntesis"
      },
      {
        "id": "v31_073",
        "front": "___ questions whether certain knowledge is possible.",
        "back": "Scepticism\n\nEscepticismo"
      },
      {
        "id": "v31_074",
        "front": "___ holds that moral judgements are not universally valid.",
        "back": "Moral relativism\n\nRelativismo moral"
      },
      {
        "id": "v31_075",
        "front": "___ is selfless concern for the wellbeing of others.",
        "back": "Altruism\n\nAltruismo"
      },
      {
        "id": "v31_076",
        "front": "___ holds that pleasure is the highest good.",
        "back": "Hedonism\n\nHedonismo"
      },
      {
        "id": "v31_077",
        "front": "___ focuses on character and virtuous traits rather than rules.",
        "back": "Virtue ethics\n\nÉtica de la virtud"
      }
    ]
  },
  {
    "section": 32,
    "title": "anki_32_medios_periodismo.csv",
    "cards": [
      {
        "id": "v32_001",
        "front": "___ is the activity of gathering and reporting news.",
        "back": "Journalism\n\nPeriodismo"
      },
      {
        "id": "v32_002",
        "front": "A ___ investigates and reports on events for media outlets.",
        "back": "journalist\n\nPeriodista"
      },
      {
        "id": "v32_003",
        "front": "A ___ gathers information and writes news stories.",
        "back": "reporter\n\nReportero"
      },
      {
        "id": "v32_004",
        "front": "A ___ covers news from a specific region or topic.",
        "back": "correspondent\n\nCorresponsal"
      },
      {
        "id": "v32_005",
        "front": "An ___ oversees the content and publication of a newspaper or website.",
        "back": "editor\n\nEditor"
      },
      {
        "id": "v32_006",
        "front": "A ___ checks and corrects copy before publication.",
        "back": "sub-editor\n\nCorrector / redactor de mesa"
      },
      {
        "id": "v32_007",
        "front": "A ___ is a journalist who works independently, not for one outlet.",
        "back": "freelancer\n\nFreelance / periodista autónomo"
      },
      {
        "id": "v32_008",
        "front": "An ___ presents news on television or radio.",
        "back": "anchor\n\nPresentador de noticias"
      },
      {
        "id": "v32_009",
        "front": "A ___ is an expert commentator on a specific subject.",
        "back": "pundit\n\nAnalista / comentarista experto"
      },
      {
        "id": "v32_010",
        "front": "A ___ is a person who provides information to a journalist.",
        "back": "source\n\nFuente"
      },
      {
        "id": "v32_011",
        "front": "___ means information shared that cannot be published.",
        "back": "Off the record\n\nFuera de registro / off the record"
      },
      {
        "id": "v32_012",
        "front": "___ means information can be used but the source is not named.",
        "back": "On background\n\nEn background / sin atribución directa"
      },
      {
        "id": "v32_013",
        "front": "___ means information can be published with attribution.",
        "back": "On the record\n\nCon atribución / on the record"
      },
      {
        "id": "v32_014",
        "front": "A ___ is an exclusive news story reported before competitors.",
        "back": "scoop\n\nExclusiva"
      },
      {
        "id": "v32_015",
        "front": "A ___ is the name of the author printed at the top of an article.",
        "back": "byline\n\nFirma del artículo"
      },
      {
        "id": "v32_016",
        "front": "A ___ is the title of a news article.",
        "back": "headline\n\nTitular"
      },
      {
        "id": "v32_017",
        "front": "A ___ / ___ is the opening paragraph that summarises the key facts.",
        "back": "lead / lede\n\nEntradilla / primer párrafo"
      },
      {
        "id": "v32_018",
        "front": "A ___ is a longer article exploring a topic in depth.",
        "back": "feature\n\nReportaje / artículo de fondo"
      },
      {
        "id": "v32_019",
        "front": "An ___ is an opinion article written by someone outside the editorial staff.",
        "back": "op-ed\n\nArtículo de opinión (op-ed)"
      },
      {
        "id": "v32_020",
        "front": "An ___ expresses the official opinion of the publication.",
        "back": "editorial\n\nEditorial"
      },
      {
        "id": "v32_021",
        "front": "___ involves in-depth research to expose wrongdoing.",
        "back": "Investigative journalism\n\nPeriodismo de investigación"
      },
      {
        "id": "v32_022",
        "front": "___ refers to an urgent, developing story.",
        "back": "Breaking news\n\nNoticias de última hora"
      },
      {
        "id": "v32_023",
        "front": "___ uses sensational headlines to attract clicks.",
        "back": "Clickbait\n\nClickbait / cebo de clics"
      },
      {
        "id": "v32_024",
        "front": "___ refers to deliberately false news stories.",
        "back": "Fake news\n\nNoticias falsas / fake news"
      },
      {
        "id": "v32_025",
        "front": "___ is false information spread without intending to deceive.",
        "back": "Misinformation\n\nDesinformación involuntaria"
      },
      {
        "id": "v32_026",
        "front": "___ is false information deliberately spread to deceive.",
        "back": "Disinformation\n\nDesinformación intencional"
      },
      {
        "id": "v32_027",
        "front": "___ is the tendency of media outlets to favour a particular viewpoint.",
        "back": "Media bias\n\nSesgo mediático"
      },
      {
        "id": "v32_028",
        "front": "___ is the suppression of speech or publication by authorities.",
        "back": "Censorship\n\nCensura"
      },
      {
        "id": "v32_029",
        "front": "___ is the right of journalists to report without government interference.",
        "back": "Press freedom\n\nLibertad de prensa"
      },
      {
        "id": "v32_030",
        "front": "A ___ is an official statement issued to media by an organisation.",
        "back": "press release\n\nNota de prensa / comunicado"
      },
      {
        "id": "v32_031",
        "front": "A ___ is an event where officials answer journalists' questions.",
        "back": "press conference\n\nRueda de prensa / conferencia de prensa"
      },
      {
        "id": "v32_032",
        "front": "___ information cannot be published before a specified date.",
        "back": "Embargoed\n\nBajo embargo (no publicar antes de)"
      },
      {
        "id": "v32_033",
        "front": "A ___ is a correction published when a story was wrong.",
        "back": "retraction\n\nRectificación / desmenti"
      },
      {
        "id": "v32_034",
        "front": "___ refers to a large-format, serious newspaper.",
        "back": "Broadsheet\n\nPeriódico de formato grande / periódico serio"
      },
      {
        "id": "v32_035",
        "front": "___ refers to a smaller-format newspaper, often more sensationalist.",
        "back": "Tabloid\n\nTabloide"
      },
      {
        "id": "v32_036",
        "front": "___ is the number of copies of a publication distributed.",
        "back": "Circulation\n\nTirada / circulación"
      },
      {
        "id": "v32_037",
        "front": "A ___ is the audience that regularly reads a publication.",
        "back": "readership\n\nAudiencia lectora"
      },
      {
        "id": "v32_038",
        "front": "___ includes newspapers and magazines in physical form.",
        "back": "Print media\n\nMedios impresos"
      },
      {
        "id": "v32_039",
        "front": "___ refers to online news and content.",
        "back": "Digital media\n\nMedios digitales"
      },
      {
        "id": "v32_040",
        "front": "___ includes television and radio.",
        "back": "Broadcast media\n\nMedios de difusión / audiovisuales"
      },
      {
        "id": "v32_041",
        "front": "___ is an audio programme available for streaming or download.",
        "back": "Podcast\n\nPodcast"
      },
      {
        "id": "v32_042",
        "front": "A ___ is a video blog, typically personal.",
        "back": "vlog\n\nVlog / videoblog"
      },
      {
        "id": "v32_043",
        "front": "___ platforms allow users to create and share content.",
        "back": "Social media\n\nRedes sociales"
      },
      {
        "id": "v32_044",
        "front": "___ (UGC) is content created by the public rather than professionals.",
        "back": "User-generated content\n\nContenido generado por usuarios"
      },
      {
        "id": "v32_045",
        "front": "An ___ determines what content users see on social media platforms.",
        "back": "algorithm\n\nAlgoritmo"
      },
      {
        "id": "v32_046",
        "front": "___ describes a topic gaining rapid popularity on social media.",
        "back": "Trending\n\nTendencia / en tendencia"
      },
      {
        "id": "v32_047",
        "front": "___ content spreads rapidly and widely across the internet.",
        "back": "Viral\n\nViral"
      },
      {
        "id": "v32_048",
        "front": "A ___ restricts access to online content unless the user pays.",
        "back": "paywall\n\nMuro de pago"
      },
      {
        "id": "v32_049",
        "front": "A ___ charges users a regular fee for access to content.",
        "back": "subscription model\n\nModelo de suscripción"
      },
      {
        "id": "v32_050",
        "front": "___ is paid content designed to look like editorial content.",
        "back": "Native advertising\n\nPublicidad nativa"
      },
      {
        "id": "v32_051",
        "front": "___ is an advertisement written in the style of an article.",
        "back": "Advertorial\n\nPublirreportaje"
      },
      {
        "id": "v32_052",
        "front": "___ is a service that distributes news stories to media outlets.",
        "back": "Newswire\n\nAgencia de noticias / newswire"
      },
      {
        "id": "v32_053",
        "front": "___ and ___ (Associated Press) are major international news agencies.",
        "back": "Reuters / AP\n\nReuters y AP (agencias de noticias)"
      },
      {
        "id": "v32_054",
        "front": "___ is funded by the government or public licence fees.",
        "back": "Public broadcasting\n\nTelevisión / radio pública"
      },
      {
        "id": "v32_055",
        "front": "___ measure how many people watch a TV programme or listen to a radio show.",
        "back": "Ratings\n\nÍndice de audiencia"
      },
      {
        "id": "v32_056",
        "front": "___ is the peak viewing hours on television (typically 8–10 pm).",
        "back": "Prime time\n\nPrime time / horario de máxima audiencia"
      },
      {
        "id": "v32_057",
        "front": "A ___ is a non-fiction film or programme about real events.",
        "back": "documentary\n\nDocumental"
      },
      {
        "id": "v32_058",
        "front": "A ___ goes out in real time without being pre-recorded.",
        "back": "live broadcast\n\nEmisión en directo"
      },
      {
        "id": "v32_059",
        "front": "A ___ broadcasts the same content on multiple channels simultaneously.",
        "back": "simulcast\n\nEmisión simultánea en varios canales"
      },
      {
        "id": "v32_060",
        "front": "A ___ reports stories through photographs.",
        "back": "photojournalist\n\nFotoperiodista"
      },
      {
        "id": "v32_061",
        "front": "___ is the explanatory text below a photograph.",
        "back": "Caption\n\nPie de foto"
      },
      {
        "id": "v32_062",
        "front": "An ___ presents data visually to explain a story.",
        "back": "infographic\n\nInfografía"
      },
      {
        "id": "v32_063",
        "front": "A ___ shows where and when a news story was reported.",
        "back": "dateline\n\nDateline / lugar y fecha de la noticia"
      },
      {
        "id": "v32_064",
        "front": "___ is news reported by non-professional members of the public.",
        "back": "Citizen journalism\n\nPeriodismo ciudadano"
      },
      {
        "id": "v32_065",
        "front": "___ holds power to account by monitoring institutions.",
        "back": "Watchdog journalism\n\nPeriodismo de vigilancia / watchdog"
      },
      {
        "id": "v32_066",
        "front": "___ means reporting facts without personal bias.",
        "back": "Objectivity\n\nObjetividad"
      },
      {
        "id": "v32_067",
        "front": "___ means giving fair coverage to all sides of an issue.",
        "back": "Impartiality\n\nImparcialidad"
      },
      {
        "id": "v32_068",
        "front": "___ means confirming information from multiple reliable sources.",
        "back": "Verification\n\nVerificación de datos"
      },
      {
        "id": "v32_069",
        "front": "A ___ verifies the accuracy of claims made in news stories.",
        "back": "fact-checker\n\nVerificador de hechos / fact-checker"
      }
    ]
  },
  {
    "section": 33,
    "title": "anki_33_economia_mercados.csv",
    "cards": [
      {
        "id": "v33_001",
        "front": "___ studies the economy as a whole — GDP, inflation, unemployment.",
        "back": "Macroeconomics\n\nMacroeconomía"
      },
      {
        "id": "v33_002",
        "front": "___ studies individual markets, firms and consumers.",
        "back": "Microeconomics\n\nMicroeconomía"
      },
      {
        "id": "v33_003",
        "front": "___ (Gross Domestic Product) is the total value of goods and services produced in a country.",
        "back": "GDP\n\nPIB (Producto Interior Bruto)"
      },
      {
        "id": "v33_004",
        "front": "___ (Gross National Product) measures output by a country's residents regardless of location.",
        "back": "GNP\n\nPNB (Producto Nacional Bruto)"
      },
      {
        "id": "v33_005",
        "front": "___ is the rate at which prices rise over time.",
        "back": "Inflation\n\nInflación"
      },
      {
        "id": "v33_006",
        "front": "___ is a sustained fall in the general price level.",
        "back": "Deflation\n\nDeflación"
      },
      {
        "id": "v33_007",
        "front": "___ is high inflation combined with slow growth and high unemployment.",
        "back": "Stagflation\n\nEstanflación"
      },
      {
        "id": "v33_008",
        "front": "___ is the cost of borrowing money, set by central banks.",
        "back": "Interest rate\n\nTipo de interés"
      },
      {
        "id": "v33_009",
        "front": "___ uses interest rates and money supply to manage the economy.",
        "back": "Monetary policy\n\nPolítica monetaria"
      },
      {
        "id": "v33_010",
        "front": "___ uses government spending and taxation to influence the economy.",
        "back": "Fiscal policy\n\nPolítica fiscal"
      },
      {
        "id": "v33_011",
        "front": "___ refers to government spending cuts to reduce public debt.",
        "back": "Austerity\n\nAusteridad"
      },
      {
        "id": "v33_012",
        "front": "___ (QE) is when a central bank buys assets to inject money into the economy.",
        "back": "Quantitative easing\n\nExpansión cuantitativa / QE"
      },
      {
        "id": "v33_013",
        "front": "A ___ manages a country's currency and monetary policy.",
        "back": "central bank\n\nBanco central"
      },
      {
        "id": "v33_014",
        "front": "___ is the US central bank (Federal Reserve).",
        "back": "The Fed\n\nLa Reserva Federal (Fed)"
      },
      {
        "id": "v33_015",
        "front": "___ (European Central Bank) manages the euro.",
        "back": "The ECB\n\nBanco Central Europeo (BCE)"
      },
      {
        "id": "v33_016",
        "front": "A ___ is a period of rising stock prices.",
        "back": "bull market\n\nMercado alcista"
      },
      {
        "id": "v33_017",
        "front": "A ___ is a period of falling stock prices.",
        "back": "bear market\n\nMercado bajista"
      },
      {
        "id": "v33_018",
        "front": "___ is the total market value of a company's shares.",
        "back": "Market capitalisation\n\nCapitalización bursátil"
      },
      {
        "id": "v33_019",
        "front": "A ___ / ___ is a unit of ownership in a company.",
        "back": "stock / share\n\nAcción (bolsa)"
      },
      {
        "id": "v33_020",
        "front": "A ___ is a debt instrument issued by governments or companies.",
        "back": "bond\n\nBono (deuda)"
      },
      {
        "id": "v33_021",
        "front": "A ___ is a payment made to shareholders from company profits.",
        "back": "dividend\n\nDividendo"
      },
      {
        "id": "v33_022",
        "front": "___ is the return generated by an investment.",
        "back": "Yield\n\nRentabilidad / rendimiento"
      },
      {
        "id": "v33_023",
        "front": "___ is how easily an asset can be converted to cash.",
        "back": "Liquidity\n\nLiquidez"
      },
      {
        "id": "v33_024",
        "front": "___ is the ability of a company to meet its long-term debts.",
        "back": "Solvency\n\nSolvencia"
      },
      {
        "id": "v33_025",
        "front": "___ is using borrowed money to increase potential return.",
        "back": "Leverage\n\nApalancamiento"
      },
      {
        "id": "v33_026",
        "front": "A ___ is an investment fund using high-risk strategies to maximise returns.",
        "back": "hedge fund\n\nFondo de cobertura / hedge fund"
      },
      {
        "id": "v33_027",
        "front": "___ involves investing in companies not listed on a stock exchange.",
        "back": "Private equity\n\nCapital privado / private equity"
      },
      {
        "id": "v33_028",
        "front": "___ is funding provided to early-stage high-growth startups.",
        "back": "Venture capital\n\nCapital riesgo / venture capital"
      },
      {
        "id": "v33_029",
        "front": "An ___ (Initial Public Offering) is when a company first sells shares on a stock exchange.",
        "back": "IPO\n\nOPI / salida a bolsa"
      },
      {
        "id": "v33_030",
        "front": "___ (M&A) refers to company consolidations through purchase or merger.",
        "back": "Mergers and acquisitions\n\nFusiones y adquisiciones (M&A)"
      },
      {
        "id": "v33_031",
        "front": "A ___ is when one company buys enough shares to control another.",
        "back": "takeover\n\nAdquisición / compra de empresa"
      },
      {
        "id": "v33_032",
        "front": "___ is the investigation of a company before an investment or acquisition.",
        "back": "Due diligence\n\nDiligencia debida"
      },
      {
        "id": "v33_033",
        "front": "___ determines prices in free markets.",
        "back": "Supply and demand\n\nOferta y demanda"
      },
      {
        "id": "v33_034",
        "front": "___ measures how much demand changes when price changes.",
        "back": "Elasticity\n\nElasticidad"
      },
      {
        "id": "v33_035",
        "front": "___ is a maximum price set by the government.",
        "back": "Price ceiling\n\nPrecio máximo / techo de precio"
      },
      {
        "id": "v33_036",
        "front": "___ is a minimum price set by the government.",
        "back": "Price floor\n\nPrecio mínimo / suelo de precio"
      },
      {
        "id": "v33_037",
        "front": "A ___ is a government payment to support businesses or individuals.",
        "back": "subsidy\n\nSubvención"
      },
      {
        "id": "v33_038",
        "front": "A ___ is a tax on imported goods.",
        "back": "tariff\n\nArancel"
      },
      {
        "id": "v33_039",
        "front": "___ allows goods to move between countries without tariffs.",
        "back": "Free trade\n\nLibre comercio"
      },
      {
        "id": "v33_040",
        "front": "___ uses tariffs and quotas to shield domestic industries.",
        "back": "Protectionism\n\nProteccionismo"
      },
      {
        "id": "v33_041",
        "front": "A ___ occurs when imports exceed exports.",
        "back": "trade deficit\n\nDéficit comercial"
      },
      {
        "id": "v33_042",
        "front": "A ___ occurs when exports exceed imports.",
        "back": "trade surplus\n\nSuperávit comercial"
      },
      {
        "id": "v33_043",
        "front": "___ records a country's trade in goods, services and transfers.",
        "back": "Current account\n\nCuenta corriente (balanza de pagos)"
      },
      {
        "id": "v33_044",
        "front": "___ records cross-border capital transfers.",
        "back": "Capital account\n\nCuenta de capital"
      },
      {
        "id": "v33_045",
        "front": "___ is the price of one currency in terms of another.",
        "back": "Exchange rate\n\nTipo de cambio"
      },
      {
        "id": "v33_046",
        "front": "___ means the value of a currency rises relative to others.",
        "back": "Appreciation\n\nApreciación (moneda)"
      },
      {
        "id": "v33_047",
        "front": "___ means the value of a currency falls relative to others.",
        "back": "Depreciation\n\nDepreciación (moneda)"
      },
      {
        "id": "v33_048",
        "front": "___ is two consecutive quarters of negative GDP growth.",
        "back": "Recession\n\nRecesión"
      },
      {
        "id": "v33_049",
        "front": "___ is a severe, prolonged economic downturn.",
        "back": "Depression\n\nDepresión económica"
      },
      {
        "id": "v33_050",
        "front": "___ is the phase of renewed growth following a recession.",
        "back": "Recovery\n\nRecuperación económica"
      },
      {
        "id": "v33_051",
        "front": "___ is the recurring pattern of expansion and contraction in an economy.",
        "back": "Business cycle\n\nCiclo económico"
      },
      {
        "id": "v33_052",
        "front": "___ is the percentage of the labour force without a job.",
        "back": "Unemployment rate\n\nTasa de desempleo"
      },
      {
        "id": "v33_053",
        "front": "___ arises when skills don't match available jobs.",
        "back": "Structural unemployment\n\nDesempleo estructural"
      },
      {
        "id": "v33_054",
        "front": "___ rises during recessions and falls during booms.",
        "back": "Cyclical unemployment\n\nDesempleo cíclico"
      },
      {
        "id": "v33_055",
        "front": "___ is the difference between actual and potential GDP.",
        "back": "Output gap\n\nBrecha de producción"
      },
      {
        "id": "v33_056",
        "front": "___ measures how optimistic consumers feel about the economy.",
        "back": "Consumer confidence\n\nConfianza del consumidor"
      },
      {
        "id": "v33_057",
        "front": "___ is the amount needed to cover basic expenses in a place.",
        "back": "Cost of living\n\nCoste de vida"
      },
      {
        "id": "v33_058",
        "front": "___ is the quantity of goods money can buy.",
        "back": "Purchasing power\n\nPoder adquisitivo"
      },
      {
        "id": "v33_059",
        "front": "___ are wages adjusted for inflation.",
        "back": "Real wages\n\nSalarios reales"
      },
      {
        "id": "v33_060",
        "front": "___ refers to the unequal distribution of income across society.",
        "back": "Income inequality\n\nDesigualdad de ingresos"
      },
      {
        "id": "v33_061",
        "front": "The ___ measures income inequality (0 = perfect equality, 1 = maximum inequality).",
        "back": "Gini coefficient\n\nCoeficiente de Gini"
      },
      {
        "id": "v33_062",
        "front": "___ is the income threshold below which a person is considered poor.",
        "back": "Poverty line\n\nUmbral de pobreza"
      },
      {
        "id": "v33_063",
        "front": "___ claims that benefits for the wealthy eventually benefit everyone.",
        "back": "Trickle-down economics\n\nEconomía del goteo / trickle-down"
      },
      {
        "id": "v33_064",
        "front": "___ advocates government spending to stimulate demand during recessions.",
        "back": "Keynesian economics\n\nEconomía keynesiana"
      },
      {
        "id": "v33_065",
        "front": "___ promotes free markets, deregulation and limited government intervention.",
        "back": "Neoliberalism\n\nNeoliberalismo"
      },
      {
        "id": "v33_066",
        "front": "___ is a digital currency secured by cryptography.",
        "back": "Cryptocurrency\n\nCriptomoneda"
      },
      {
        "id": "v33_067",
        "front": "___ is the first and most widely known cryptocurrency.",
        "back": "Bitcoin\n\nBitcoin"
      },
      {
        "id": "v33_068",
        "front": "___ is a decentralised digital ledger recording transactions.",
        "back": "Blockchain\n\nCadena de bloques / blockchain"
      },
      {
        "id": "v33_069",
        "front": "___ (Environmental, Social, Governance) criteria guide socially responsible investing.",
        "back": "ESG\n\nESG (criterios inversión responsable)"
      }
    ]
  },
  {
    "section": 34,
    "title": "anki_34_slang_britanico.csv",
    "cards": [
      {
        "id": "v34_001",
        "front": "___ is British slang for a man.",
        "back": "Bloke\n\nTío / tipo (hombre)"
      },
      {
        "id": "v34_002",
        "front": "___ is a young man, often used affectionately.",
        "back": "Lad\n\nChaval / tío joven"
      },
      {
        "id": "v34_003",
        "front": "___ is a young woman, common in northern England and Scotland.",
        "back": "Lass\n\nChica / chavala (norte de Inglaterra)"
      },
      {
        "id": "v34_004",
        "front": "___ means friend in British English.",
        "back": "Mate\n\nAmigo / colega"
      },
      {
        "id": "v34_005",
        "front": "___ means thank you or goodbye in British English.",
        "back": "Cheers\n\nGracias / hasta luego (informal)"
      },
      {
        "id": "v34_006",
        "front": "___ is very informal British slang for thank you.",
        "back": "Ta\n\nGracias (muy informal)"
      },
      {
        "id": "v34_007",
        "front": "___ means excellent or great in British slang.",
        "back": "Brilliant\n\nBrillante / genial / estupendo"
      },
      {
        "id": "v34_008",
        "front": "___ is used as an intensifier meaning very or really.",
        "back": "Proper\n\n\"Muy / de verdad\" (intensificador)"
      },
      {
        "id": "v34_009",
        "front": "___ means slightly rude or disrespectful in a playful way.",
        "back": "Cheeky\n\nDescarado / pícaro"
      },
      {
        "id": "v34_010",
        "front": "___ means suspicious, unreliable or illegal.",
        "back": "Dodgy\n\nSospechoso / chungo"
      },
      {
        "id": "v34_011",
        "front": "___ means very disappointed.",
        "back": "Gutted\n\nDestrozado / muy decepcionado"
      },
      {
        "id": "v34_012",
        "front": "___ means very pleased or proud.",
        "back": "Chuffed\n\nEncantado / muy contento"
      },
      {
        "id": "v34_013",
        "front": "___ means completely shocked or astounded.",
        "back": "Gobsmacked\n\nAlucinado / flipando"
      },
      {
        "id": "v34_014",
        "front": "___ means slightly annoyed.",
        "back": "Miffed\n\nUn poco molesto"
      },
      {
        "id": "v34_015",
        "front": "___ means bad-tempered or argumentative.",
        "back": "Stroppy\n\nMalhumorado / borde"
      },
      {
        "id": "v34_016",
        "front": "___ means exhausted.",
        "back": "Knackered\n\nAgotado / hecho polvo"
      },
      {
        "id": "v34_017",
        "front": "___ also means extremely tired.",
        "back": "Shattered\n\nDestrozado (de cansancio)"
      },
      {
        "id": "v34_018",
        "front": "___ means having no money.",
        "back": "Skint\n\nSin un duro / pelado"
      },
      {
        "id": "v34_019",
        "front": "___ means to avoid work or school without a valid excuse.",
        "back": "Skive\n\nEscaquearse / hacer pellas"
      },
      {
        "id": "v34_020",
        "front": "___ means to skip school or work.",
        "back": "Bunk off\n\nHacer novillos / escaquearse"
      },
      {
        "id": "v34_021",
        "front": "___ means to figure out or assess someone or something.",
        "back": "Suss out\n\nPillar / descifrar / intuir"
      },
      {
        "id": "v34_022",
        "front": "___ means to resolve a problem or organise something.",
        "back": "Sort out\n\nArreglar / solucionar"
      },
      {
        "id": "v34_023",
        "front": "___ is British slang for a nap or sleep.",
        "back": "Kip\n\nSiesta / sueño (informal)"
      },
      {
        "id": "v34_024",
        "front": "___ also refers to a short sleep but is more standard.",
        "back": "Nap\n\nSiesta / cabezada"
      },
      {
        "id": "v34_025",
        "front": "___ means to waste time doing unimportant things.",
        "back": "Faff\n\nPerder el tiempo / enredar"
      },
      {
        "id": "v34_026",
        "front": "___ means to mess around without purpose.",
        "back": "Faff about\n\nAndar entretenido / perder el tiempo"
      },
      {
        "id": "v34_027",
        "front": "___ means slightly hungry.",
        "back": "Peckish\n\nCon un poco de hambre"
      },
      {
        "id": "v34_028",
        "front": "___ in slang means very hungry (not literally dying).",
        "back": "Starving\n\nMuerto de hambre (informal)"
      },
      {
        "id": "v34_029",
        "front": "___ means to eat or snack.",
        "back": "Munch\n\nPicar / comer (informal)"
      },
      {
        "id": "v34_030",
        "front": "___ means food or to eat.",
        "back": "Nosh\n\nComida / comer (argot)"
      },
      {
        "id": "v34_031",
        "front": "___ is informal for food.",
        "back": "Grub\n\nComida / pitanza"
      },
      {
        "id": "v34_032",
        "front": "___ is often called a ___ in casual British speech.",
        "back": "Cheeseburger / burger\n\nHamburguesa con queso"
      },
      {
        "id": "v34_033",
        "front": "___ is British slang for a toilet.",
        "back": "Bog\n\nBaño / váter (muy informal)"
      },
      {
        "id": "v34_034",
        "front": "___ is informal for toilet.",
        "back": "Loo\n\nBaño / servicio (informal)"
      },
      {
        "id": "v34_035",
        "front": "___ means nonsense or of poor quality in British English.",
        "back": "Rubbish\n\nBasura / tonterías / de mala calidad"
      },
      {
        "id": "v34_036",
        "front": "___ means nonsense or is used as an expletive.",
        "back": "Bollocks\n\nTonterías / bobadas (palabrota)"
      },
      {
        "id": "v34_037",
        "front": "___ is an exclamation of surprise.",
        "back": "Blimey\n\n\"¡Dios mío! / ¡Vaya!\" (sorpresa)"
      },
      {
        "id": "v34_038",
        "front": "___ is a mild exclamation of surprise.",
        "back": "Crikey\n\n\"¡Cielos! / ¡Vaya!\" (suave)"
      },
      {
        "id": "v34_039",
        "front": "___ is a British intensifier expressing annoyance or emphasis.",
        "back": "Bloody\n\n\"Maldito / jodido\" (intensificador)"
      },
      {
        "id": "v34_040",
        "front": "___ means upper-class or very elegant.",
        "back": "Posh\n\nPijo / elegante / de clase alta"
      },
      {
        "id": "v34_041",
        "front": "___ means unfashionable or in poor taste.",
        "back": "Naff\n\nHortera / pasado de moda"
      },
      {
        "id": "v34_042",
        "front": "___ means very rich.",
        "back": "Minted\n\nForrado / con mucho dinero"
      },
      {
        "id": "v34_043",
        "front": "___ also means very wealthy.",
        "back": "Loaded\n\nCargado de dinero / forrado"
      },
      {
        "id": "v34_044",
        "front": "___ is British slang for a pound (£1).",
        "back": "Quid\n\nLibra esterlina (argot)"
      },
      {
        "id": "v34_045",
        "front": "___ is a ten-pound note.",
        "back": "Tenner\n\nBillete de diez libras"
      },
      {
        "id": "v34_046",
        "front": "___ is a five-pound note.",
        "back": "Fiver\n\nBillete de cinco libras"
      },
      {
        "id": "v34_047",
        "front": "___ is a pejorative term for a poorly educated young person from a low-income background.",
        "back": "Chav\n\nChoni / chaval de barrio (peyorativo)"
      },
      {
        "id": "v34_048",
        "front": "___ is slang for an upper-class person.",
        "back": "Toff\n\nPijo / aristócrata (argot)"
      },
      {
        "id": "v34_049",
        "front": "___ means playful, teasing conversation.",
        "back": "Banter\n\nCachondeo / guasa / broma"
      },
      {
        "id": "v34_050",
        "front": "___ means joking around or finding something amusing.",
        "back": "Having a laugh\n\nTomarse a broma / cachondearse"
      },
      {
        "id": "v34_051",
        "front": "___ means to mock or make fun of someone.",
        "back": "Take the mickey\n\nTomar el pelo / burlarse"
      },
      {
        "id": "v34_052",
        "front": "___ means to tease or trick someone.",
        "back": "Wind up\n\nTomar el pelo / hacer una broma"
      },
      {
        "id": "v34_053",
        "front": "___ means to run away quickly.",
        "back": "Leg it\n\nCorrer / largarse a toda velocidad"
      },
      {
        "id": "v34_054",
        "front": "___ means to run away or escape.",
        "back": "Scarper\n\nLargarse / escaparse"
      },
      {
        "id": "v34_055",
        "front": "___ means stolen or arrested by the police.",
        "back": "Nicked\n\nRobado / detenido"
      },
      {
        "id": "v34_056",
        "front": "___ / ___ is British slang for a police officer.",
        "back": "Copper / Plod\n\nPoli / madero"
      },
      {
        "id": "v34_057",
        "front": "___ means something very easy.",
        "back": "Doddle\n\nPan comido / facilísimo"
      },
      {
        "id": "v34_058",
        "front": "___ means something very easy (also used in American English).",
        "back": "Piece of cake\n\nPan comido"
      },
      {
        "id": "v34_059",
        "front": "___ means to complain frequently.",
        "back": "Moan\n\nQuejarse / refunfuñar"
      },
      {
        "id": "v34_060",
        "front": "___ means to complain in a self-pitying way.",
        "back": "Whinge\n\nLloriquear / quejarse sin parar"
      },
      {
        "id": "v34_061",
        "front": "___ means to talk at length without saying anything meaningful.",
        "back": "Blather\n\nHablar sin decir nada / parlotear"
      },
      {
        "id": "v34_062",
        "front": "___ means to speak or write vaguely without getting to the point.",
        "back": "Waffle\n\nIrse por las ramas"
      },
      {
        "id": "v34_063",
        "front": "___ is a chat or conversation.",
        "back": "Chinwag\n\nCháchara / charla"
      },
      {
        "id": "v34_064",
        "front": "___ means to chat informally.",
        "back": "Natter\n\nCharlar / cotorrear"
      },
      {
        "id": "v34_065",
        "front": "___ vehicle or item means broken or worn out.",
        "back": "Knackered\n\nDestrozado / estropeado (objeto)"
      },
      {
        "id": "v34_066",
        "front": "___ means silly or stupid.",
        "back": "Daft\n\nTonto / bobo"
      },
      {
        "id": "v34_067",
        "front": "___ means crazy or eccentric.",
        "back": "Barmy\n\nChiflado / loco"
      },
      {
        "id": "v34_068",
        "front": "___ is used to call someone foolish or incompetent.",
        "back": "Muppet\n\nImbécil / inútil (informal)"
      },
      {
        "id": "v34_069",
        "front": "___ is a mild insult for a stupid person.",
        "back": "Berk\n\nIdiota / memo (insulto suave)"
      },
      {
        "id": "v34_070",
        "front": "___ is used in Scotland for a stupid person.",
        "back": "Numpty\n\nBobo / inútil (Escocia)"
      },
      {
        "id": "v34_071",
        "front": "___ means very simple.",
        "back": "Easy peasy\n\nFacilísimo / chupado"
      },
      {
        "id": "v34_072",
        "front": "___ is an old-fashioned British exclamation meaning excellent.",
        "back": "Splendid\n\nEspléndido / estupendo (anticuado)"
      },
      {
        "id": "v34_073",
        "front": "___ means exactly right or perfect.",
        "back": "Spot on\n\nExacto / en el clavo"
      },
      {
        "id": "v34_074",
        "front": "___ is an emphatic way of saying very much or absolutely.",
        "back": "Not half\n\n\"Ya lo creo / y cómo\" (énfasis)"
      },
      {
        "id": "v34_075",
        "front": "___ means to want something or to be attracted to someone.",
        "back": "Fancy\n\nApetecer / gustar / tener ganas"
      },
      {
        "id": "v34_076",
        "front": "___ means \"Would you like a cup of tea?\".",
        "back": "Fancy a cuppa?\n\n\"¿Te apetece un té?\" (expresión típica)"
      },
      {
        "id": "v34_077",
        "front": "___ means two weeks.",
        "back": "Fortnight\n\nQuincena / dos semanas"
      },
      {
        "id": "v34_078",
        "front": "___ means slightly cold.",
        "back": "Chilly\n\nFresquito / frío suave"
      },
      {
        "id": "v34_079",
        "front": "___ is British slang for umbrella.",
        "back": "Brolly\n\nParaguas (argot)"
      }
    ]
  },
  {
    "section": 35,
    "title": "anki_35_gramatica_contexto.csv",
    "cards": [
      {
        "id": "v35_001",
        "front": "Use ___ to add a point that reinforces the previous argument.",
        "back": "furthermore\n\nAdemás / es más (formal, añadir)"
      },
      {
        "id": "v35_002",
        "front": "Use ___ to add a point stronger than the previous one.",
        "back": "moreover\n\nEs más / además (más enfático)"
      },
      {
        "id": "v35_003",
        "front": "Use ___ to introduce a contrast despite what was said before.",
        "back": "nevertheless\n\nSin embargo / no obstante (contraste formal)"
      },
      {
        "id": "v35_004",
        "front": "Use ___ as a formal synonym for nevertheless.",
        "back": "nonetheless\n\nSin embargo / aun así (formal)"
      },
      {
        "id": "v35_005",
        "front": "Use ___ to contrast two ideas.",
        "back": "however\n\nSin embargo / no obstante (contraste)"
      },
      {
        "id": "v35_006",
        "front": "Use ___ to mean \"although\" in a formal or literary context.",
        "back": "albeit\n\nAunque / si bien (formal)"
      },
      {
        "id": "v35_007",
        "front": "Use ___ to contrast two facts in the same sentence.",
        "back": "whereas\n\nMientras que / en cambio"
      },
      {
        "id": "v35_008",
        "front": "Use ___ to highlight a clear difference between two things.",
        "back": "in contrast\n\nEn contraste / por el contrario"
      },
      {
        "id": "v35_009",
        "front": "Use ___ to present the opposing viewpoint.",
        "back": "on the other hand\n\nPor otro lado / por otra parte"
      },
      {
        "id": "v35_010",
        "front": "Use ___ to introduce the opposite of what was just stated.",
        "back": "conversely\n\nA la inversa / por el contrario"
      },
      {
        "id": "v35_011",
        "front": "Use ___ to show a result or effect.",
        "back": "consequently\n\nPor consiguiente / en consecuencia"
      },
      {
        "id": "v35_012",
        "front": "Use ___ to show a logical conclusion.",
        "back": "therefore\n\nPor lo tanto / por ende"
      },
      {
        "id": "v35_013",
        "front": "Use ___ as a formal way to say therefore.",
        "back": "thus\n\nAsí pues / por tanto (formal)"
      },
      {
        "id": "v35_014",
        "front": "Use ___ to indicate a reason or result in formal writing.",
        "back": "hence\n\nDe ahí que / por eso (formal)"
      },
      {
        "id": "v35_015",
        "front": "Use ___ to introduce the consequence of an action.",
        "back": "as a result\n\nComo resultado / como consecuencia"
      },
      {
        "id": "v35_016",
        "front": "Use ___ to mean as a result or correspondingly.",
        "back": "accordingly\n\nEn consecuencia / por tanto"
      },
      {
        "id": "v35_017",
        "front": "Use ___ to express purpose.",
        "back": "in order to\n\nCon el fin de / para (propósito)"
      },
      {
        "id": "v35_018",
        "front": "Use ___ as an alternative to \"in order to\".",
        "back": "so as to\n\nA fin de / para (propósito, formal)"
      },
      {
        "id": "v35_019",
        "front": "Use ___ to introduce a condition.",
        "back": "provided that\n\nSiempre que / con tal de que (condición)"
      },
      {
        "id": "v35_020",
        "front": "Use ___ to introduce the only condition under which something won't happen.",
        "back": "unless\n\nA menos que / salvo que"
      },
      {
        "id": "v35_021",
        "front": "Use ___ to state a continuing condition.",
        "back": "as long as\n\nMientras / siempre y cuando"
      },
      {
        "id": "v35_022",
        "front": "Use ___ to concede a fact while contrasting it.",
        "back": "even though\n\nAunque / a pesar de que (concesión)"
      },
      {
        "id": "v35_023",
        "front": "Use ___ + noun/gerund to express contrast without a clause.",
        "back": "despite\n\nA pesar de (+ sustantivo/gerundio)"
      },
      {
        "id": "v35_024",
        "front": "Use ___ as a synonym for despite.",
        "back": "in spite of\n\nA pesar de (= despite)"
      },
      {
        "id": "v35_025",
        "front": "Use ___ to give a formal reason.",
        "back": "owing to\n\nDebido a / a causa de (formal)"
      },
      {
        "id": "v35_026",
        "front": "Use ___ to give a reason, typically after a linking verb.",
        "back": "due to\n\nDebido a / a causa de"
      },
      {
        "id": "v35_027",
        "front": "Use ___ to mean because of or by reason of (formal/legal).",
        "back": "by virtue of\n\nEn virtud de / gracias a (formal)"
      },
      {
        "id": "v35_028",
        "front": "Use ___ to introduce the subject being discussed.",
        "back": "with regard to\n\nCon respecto a / en lo que respecta a"
      },
      {
        "id": "v35_029",
        "front": "Use ___ as a formal synonym for with regard to.",
        "back": "as regards\n\nEn lo que respecta a (formal)"
      },
      {
        "id": "v35_030",
        "front": "Use ___ to specify the aspect being discussed.",
        "back": "in terms of\n\nEn términos de / en cuanto a"
      },
      {
        "id": "v35_031",
        "front": "Use ___ to consider something in relation to new information.",
        "back": "in light of\n\nA la luz de / teniendo en cuenta"
      },
      {
        "id": "v35_032",
        "front": "Use ___ to mean with the intention of doing something.",
        "back": "with a view to\n\nCon vistas a / con la intención de"
      },
      {
        "id": "v35_033",
        "front": "Use ___ to act or speak for someone else.",
        "back": "on behalf of\n\nEn nombre de / de parte de"
      },
      {
        "id": "v35_034",
        "front": "Use ___ to mean instead of (formal/legal).",
        "back": "in lieu of\n\nEn lugar de / en sustitución de (formal)"
      },
      {
        "id": "v35_035",
        "front": "Use ___ to qualify a statement by degree.",
        "back": "to the extent that\n\nHasta el punto en que / en la medida en que"
      },
      {
        "id": "v35_036",
        "front": "Use ___ to mean to the degree that (formal).",
        "back": "insofar as\n\nEn la medida en que (muy formal)"
      },
      {
        "id": "v35_037",
        "front": "Use ___ to give a formal reason or qualification.",
        "back": "inasmuch as\n\nEn tanto en cuanto / dado que (formal)"
      },
      {
        "id": "v35_038",
        "front": "Use ___ to mean despite (formal/legal).",
        "back": "notwithstanding\n\nNo obstante / a pesar de (formal/legal)"
      },
      {
        "id": "v35_039",
        "front": "Use ___ to mean from this point forward (formal).",
        "back": "henceforth\n\nEn adelante / de ahora en adelante (formal)"
      },
      {
        "id": "v35_040",
        "front": "Use ___ to mean until now (legal/archaic).",
        "back": "heretofore\n\nHasta ahora / hasta este momento (legal)"
      },
      {
        "id": "v35_041",
        "front": "Use ___ to refer to the first of two things previously mentioned.",
        "back": "the former\n\nEl primero (de dos mencionados)"
      },
      {
        "id": "v35_042",
        "front": "Use ___ to refer to the second of two things previously mentioned.",
        "back": "the latter\n\nEl último / el segundo (de dos mencionados)"
      },
      {
        "id": "v35_043",
        "front": "Use ___ to contrast two mentioned items clearly.",
        "back": "the former...the latter\n\nEl primero... el segundo (contraste)"
      },
      {
        "id": "v35_044",
        "front": "Use ___ to refer to items in the order they were mentioned.",
        "back": "respectively\n\nRespectivamente"
      },
      {
        "id": "v35_045",
        "front": "Use ___ to introduce a notable example.",
        "back": "notably\n\nEspecialmente / cabe destacar"
      },
      {
        "id": "v35_046",
        "front": "Use ___ to single out one item from a general statement.",
        "back": "in particular\n\nEn particular / especialmente"
      },
      {
        "id": "v35_047",
        "front": "Use ___ / ___ to introduce an example.",
        "back": "for instance / for example\n\nPor ejemplo"
      },
      {
        "id": "v35_048",
        "front": "Use ___ to specify what was mentioned.",
        "back": "namely\n\nA saber / es decir (especificar)"
      },
      {
        "id": "v35_049",
        "front": "Use ___ / ___ to clarify or restate in other words.",
        "back": "that is / i.e.\n\nEs decir / o sea (i.e.)"
      },
      {
        "id": "v35_050",
        "front": "Use ___ to give an example (from Latin exempli gratia).",
        "back": "e.g.\n\nPor ejemplo (e.g.)"
      },
      {
        "id": "v35_051",
        "front": "Use ___ to specify exactly what is meant (formal/academic).",
        "back": "viz.\n\nA saber / es decir (viz., formal)"
      },
      {
        "id": "v35_052",
        "front": "Use ___ to introduce a clarifying example in formal writing.",
        "back": "to illustrate\n\nPara ilustrar / a modo de ejemplo"
      },
      {
        "id": "v35_053",
        "front": "Use ___ to introduce a brief restatement of key points.",
        "back": "in summary\n\nEn resumen"
      },
      {
        "id": "v35_054",
        "front": "Use ___ to signal the conclusion of an argument.",
        "back": "to sum up\n\nPara resumir / en definitiva"
      },
      {
        "id": "v35_055",
        "front": "Use ___ to signal the final paragraph of a formal text.",
        "back": "in conclusion\n\nEn conclusión"
      },
      {
        "id": "v35_056",
        "front": "Use ___ as a formal way to introduce the final point.",
        "back": "to conclude\n\nPara concluir (formal)"
      },
      {
        "id": "v35_057",
        "front": "Use ___ to give a final overall assessment (slightly informal).",
        "back": "all in all\n\nEn general / en definitiva"
      },
      {
        "id": "v35_058",
        "front": "Use ___ to give a considered overall judgement.",
        "back": "on balance\n\nEn conjunto / valorando todo"
      },
      {
        "id": "v35_059",
        "front": "Use ___ to mean mostly or generally.",
        "back": "by and large\n\nEn general / por lo general"
      },
      {
        "id": "v35_060",
        "front": "Use ___ to indicate a general statement with exceptions.",
        "back": "broadly speaking\n\nEn términos generales / a grandes rasgos"
      },
      {
        "id": "v35_061",
        "front": "Use ___ to qualify a statement as technically precise.",
        "back": "strictly speaking\n\nHablando con precisión / en sentido estricto"
      },
      {
        "id": "v35_062",
        "front": "Use ___ to introduce a qualified or partial truth.",
        "back": "in a sense\n\nEn cierto sentido"
      },
      {
        "id": "v35_063",
        "front": "Use ___ to soften a metaphor or unusual use of language.",
        "back": "as it were\n\nPor así decirlo / como si dijéramos"
      },
      {
        "id": "v35_064",
        "front": "Use ___ to acknowledge figurative or informal language.",
        "back": "so to speak\n\nPor así decirlo"
      },
      {
        "id": "v35_065",
        "front": "Use ___ to introduce something obvious.",
        "back": "needless to say\n\nHuelga decir / no hace falta decir"
      },
      {
        "id": "v35_066",
        "front": "Use ___ to state something obvious.",
        "back": "it goes without saying\n\nSe da por supuesto / huelga decir"
      },
      {
        "id": "v35_067",
        "front": "Use ___ to concede a point.",
        "back": "admittedly\n\nHay que reconocer que / ciertamente"
      },
      {
        "id": "v35_068",
        "front": "Use ___ to acknowledge a conceded point before countering it.",
        "back": "granted\n\nEs cierto que / concedo que"
      },
      {
        "id": "v35_069",
        "front": "Use ___ to acknowledge a truth before qualifying it.",
        "back": "to be sure\n\nEs cierto / hay que reconocer"
      },
      {
        "id": "v35_070",
        "front": "Use ___ to introduce a claim that could be supported by argument.",
        "back": "arguably\n\nSe podría argumentar que / posiblemente"
      },
      {
        "id": "v35_071",
        "front": "Use ___ to mean apparently but not necessarily in reality.",
        "back": "ostensibly\n\nAparentemente / en apariencia"
      },
      {
        "id": "v35_072",
        "front": "Use ___ to mean according to what is claimed, with some scepticism.",
        "back": "supposedly\n\nSupuestamente"
      },
      {
        "id": "v35_073",
        "front": "Use ___ to mean based on reasonable assumption.",
        "back": "presumably\n\nPresumiblemente / se supone que"
      },
      {
        "id": "v35_074",
        "front": "Use ___ to mean clearly based on evidence.",
        "back": "evidently\n\nEvidentemente / claramente"
      },
      {
        "id": "v35_075",
        "front": "Use ___ to state something that cannot be disputed.",
        "back": "undeniably\n\nInnegablemente"
      },
      {
        "id": "v35_076",
        "front": "Use ___ for a stronger, more formal version of undeniably.",
        "back": "unquestionably\n\nIndiscutiblemente / sin lugar a dudas"
      },
      {
        "id": "v35_077",
        "front": "Use ___ to draw attention to an important detail.",
        "back": "it is worth noting\n\nCabe señalar que / vale la pena destacar"
      },
      {
        "id": "v35_078",
        "front": "Use ___ to stress a key point in formal writing.",
        "back": "it should be emphasised\n\nDebe subrayarse que / cabe enfatizar"
      }
    ]
  }
];
