export type Photo = {
  id: string;
  src: string;
  alt: string;
  low?: boolean;
  portrait?: boolean;
  focal?: string;
};

function photo(id: string, file: string, alt: string, extra?: Partial<Pick<Photo, "low" | "portrait" | "focal">>): Photo {
  return {
    id,
    src: `https://st.hzcdn.com/simgs/${file}/home-design.jpg`,
    alt,
    ...extra,
  };
}

export const photos = {
  heroKitchen: photo("hero-kitchen", "a85155e00b97c5f8_16-9552", "Open-plan kitchen and dining at Duntshill Road, Earlsfield"),
  heroHouse: photo("hero-house", "2b819cda0bec6622_16-3305", "White house above a terraced garden"),
  heroLoft: photo("hero-loft", "0d1198a50bec3272_16-5478", "Loft bedroom with oak floor and rooflights"),
  heroLantern: photo("hero-lantern", "80a174ca0bec51b1_16-4072", "Roof lantern looking up at the sky"),

  loftBedroom: photo("loft-bedroom", "0d1198a50bec3272_16-5478", "Loft bedroom with rooflights and an oak floor"),
  loftVelux: photo("loft-velux", "c61103940bec30fc_16-3373", "Sunlit empty loft with Velux windows", { focal: "center 40%" }),
  loftEaves: photo("loft-eaves", "7401a45e0bec32cc_16-5478", "Loft bedroom with eaves storage"),
  loftEnsuite: photo("loft-ensuite", "35f15c150bec3126_16-3374", "Loft en-suite with teal walls and a roll-top bath"),
  loftLantern: photo("loft-lantern", "80a174ca0bec51b1_16-4072", "Roof lantern with a view of the sky"),
  loftDormerExt: photo("loft-dormer-ext", "27018a940bec5417_16-5466", "House exterior after a loft dormer"),
  loftGlazing: photo("loft-glazing", "6cc162c10bec5444_16-3362", "Rear glazing"),
  loftLivingLow: photo("loft-living-low", "68c1ecf60bec2fe7_9-5415", "Loft living room with rooflights", { low: true }),
  loftLoungeLow: photo("loft-lounge-low", "9ac130c40bec31a4_9-5860", "Loft lounge with black-framed glazing", { low: true }),
  loftCrittallLow: photo("loft-crittall-low", "fa61b0820bec328f_9-6096", "Loft bedroom with a black Crittall-style window", { low: true }),

  extLiving: photo("ext-living", "b8e1c34a0bec65bd_16-3304", "Long open-plan living room looking through to the garden"),
  extIsland: photo("ext-island", "321135f90bec656c_16-3304", "Kitchen island in a rear extension"),
  extSide: photo("ext-side", "5061c8cd0bec6672_16-5462", "Glass side return opening to the garden"),
  extDining: photo("ext-dining", "db61795e0bec6cf3_16-5463", "Dining area under rooflights"),
  extSteel: photo("ext-steel", "be1123280bec72b3_16-3291", "Living room with black steel-framed doors"),
  extTeal: photo("ext-teal", "7f211b070bec71c3_16-3315", "Teal sofas under rooflights"),
  extPendant: photo("ext-pendant", "595112a30bec72d5_16-9223", "Dining table with a feature pendant"),
  extBlueSofa: photo("ext-blue-sofa", "2e21db9b0bec7307_16-3291", "Living space with a blue sofa and rooflights"),
  extOpen: photo("ext-open", "3c71aa8c0bec7712_16-3295", "Open-plan kitchen and living space"),
  extBlueJoinery: photo("ext-blue-joinery", "6a7105060bec773f_16-3295", "Dining area with blue joinery"),
  extBifold: photo("ext-bifold", "1411d57f0bec7837_16-5456", "Corner bi-fold doors fully open to the garden"),
  extLantern: photo("ext-lantern", "ccb1fd020bec78c6_16-3297", "Roof lantern detail"),
  extSteps: photo("ext-steps", "d7318a7c0bec663b_16-3306", "Rear extension with stone garden steps"),
  extLawn: photo("ext-lawn", "ac21407d0bec737f_16-5453", "Rear extension with bi-fold doors and a lawn"),
  extBrick: photo("ext-brick", "6b1114d40bec762b_16-3295", "Brick single-storey rear extension"),
  extTimber: photo("ext-timber", "b8c19abd0bec6e27_16-5452", "Timber-clad garden room with a water feature"),
  extVictorian: photo("ext-victorian", "8941d1410bec6e43_16-5452", "Front of a Victorian house"),
  extDetached: photo("ext-detached", "9271ad1b0bec70c0_16-5453", "Red-brick detached house"),

  kitGrey: photo("kit-grey", "1f5172a70bec3475_16-3709", "Grey kitchen with pendant lights"),
  kitIsland: photo("kit-island", "62e170720bec3553_16-3710", "Kitchen island with the dining area beyond"),
  kitTeal: photo("kit-teal", "fd31af5e0bec387d_16-3711", "Kitchen with a teal island"),
  kitDark: photo("kit-dark", "e5512aa90bec3922_16-3711", "Long kitchen with a dark island"),
  kitBlue: photo("kit-blue", "64a193d70bec3932_16-3711", "Blue kitchen with a statement extractor"),
  kitBar: photo("kit-bar", "67f123e00bec344e_16-3709", "Breakfast bar"),
  kitWhite: photo("kit-white", "5211303e0bec34fc_16-3709", "White kitchen with a glass splashback"),
  kitGarden: photo("kit-garden", "6c911a120bec39b2_16-3711", "Kitchen opening onto the garden"),
  kitLantern: photo("kit-lantern", "d8a138590bec3660_16-3710", "Kitchen under a roof lantern", { portrait: true }),
  kitTimber: photo("kit-timber", "92d173dd0bec3960_16-3711", "Island with a timber worktop", { portrait: true }),

  intLiving: photo("int-living", "7dc1b6ed0be9620f_16-3896", "Living room with a green armchair, Earlsfield interior"),
  intPink: photo("int-pink", "98d1285a0be9621a_16-5938", "Bedroom with deep green walls and pink accents"),
  intTeal: photo("int-teal", "9711cf0c0be9622d_16-5937", "Bedroom in green and teal"),
  intSlat: photo("int-slat", "2e3178930be9624e_16-5938", "Bedroom with a slatted headboard"),

  bathBlue: photo("bath-blue", "66f1a3c40bec0b4f_16-3718", "Blue bathroom with a roll-top bath"),
  bathTealRoll: photo("bath-teal-roll", "47f1f7ec0bec0d16_16-3719", "Teal bathroom with a roll-top bath"),
  bathFree: photo("bath-free", "af919ddc0bec0e3d_16-3720", "Freestanding bath"),
  bathRug: photo("bath-rug", "3351d7880bec103c_16-3720", "Freestanding bath with a rug"),
  bathGrey: photo("bath-grey", "8e5127760bec0b0d_16-3718", "Roll-top bath against grey panelling"),
  bathVanity: photo("bath-vanity", "baa16c0e0bec0b02_16-3718", "Wall-hung vanity in a tiled bathroom"),
  bathTeal: photo("bath-teal", "cc01718c0bec0c07_16-3718", "Teal bathroom"),
  bathTiled: photo("bath-tiled", "62c1bac00bec0fde_16-3719", "Blue-tiled bathroom"),

  stairSky: photo("stair-sky", "e0f1bf040bec2b36_16-3388", "Staircase under a skylight", { portrait: true, focal: "center 35%" }),
  stairRunner: photo("stair-runner", "e1c13c1c0bec2bb9_16-4353", "Stair runner from above"),
  stairOak: photo("stair-oak", "4cd109890bec2bc9_16-4370", "Oak staircase detail"),
  stairArt: photo("stair-art", "435118f40bec2ce5_16-3389", "Staircase with a handrail and artwork"),

  duntshill1: photo("duntshill-1", "a85155e00b97c5f8_16-9552", "Open-plan kitchen and dining, Duntshill Road, Earlsfield"),
  duntshill2: photo("duntshill-2", "58b124110b97c60d_16-9552", "Duntshill Road, Earlsfield"),
  duntshill3: photo("duntshill-3", "837193850b97c622_16-9552", "Duntshill Road, Earlsfield"),
  brookwood1: photo("brookwood-1", "d1a1c6590c5c2f5a_16-3936", "Brookwood Road, Earlsfield"),
  brookwood2: photo("brookwood-2", "8e71641c0c5c2f74_16-3936", "Brookwood Road, Earlsfield"),
  earlsfieldRd1: photo("earlsfield-rd-1", "f5e1529f0bec03c8_16-9692", "Earlsfield Road, Earlsfield"),
  earlsfieldRd2: photo("earlsfield-rd-2", "48518dab0bec03f0_16-9702", "Earlsfield Road, Earlsfield"),
  vanderbilt: photo("vanderbilt", "a3316e9c0c081299_9-5096", "Vanderbilt Road, Earlsfield", { low: true }),

  elsyne1: photo("elsyne-1", "40d117070be1c426_16-4895", "Elsygne Road, Wandsworth"),
  elsyne2: photo("elsyne-2", "8f314b8b0b97d39c_16-0385", "Elsygne Road, Wandsworth"),
  elsyneLoft1: photo("elsyne-loft-1", "4d31ee260b97d434_16-3852", "Loft conversion, Elsygne Road, Wandsworth"),
  elsyneLoft2: photo("elsyne-loft-2", "e9312a370b97d46c_16-3853", "Loft conversion, Elsygne Road, Wandsworth"),
  elsyneFirst1: photo("elsyne-first-1", "417115630b97d371_16-0385", "First floor, Elsygne Road, Wandsworth"),
  elsyneFirst2: photo("elsyne-first-2", "a1e1e78d0b97d3d7_16-0385", "First floor, Elsygne Road, Wandsworth"),

  brisbane1: photo("brisbane-1", "63a15b0d0b97cca2_16-7320", "Brisbane Avenue, Wimbledon"),
  brisbane2: photo("brisbane-2", "b14194880b97ccca_16-7320", "Brisbane Avenue, Wimbledon"),
  oxford1: photo("oxford-1", "e861e3910b977c27_16-7206", "Oxford Avenue, Wimbledon"),
  oxford2: photo("oxford-2", "0ea140020b977bc3_16-7941", "Oxford Avenue, Wimbledon"),
  fairlawn: photo("fairlawn", "9661c9610c0816e2_9-4019", "Fairlawn Road, Wimbledon", { low: true }),
  pelham: photo("pelham", "9b31e3020c08175c_9-4140", "Pelham Road, Wimbledon", { low: true }),

  sugden1: photo("sugden-1", "03913e580bebf45b_16-5535", "Sugden Road, Clapham"),
  sugden2: photo("sugden-2", "4e51a80f0bebf499_16-3716", "Sugden Road, Clapham"),
  chatham1: photo("chatham-1", "99411c510b977703_16-2866", "Chatham Close, Clapham"),
  chatham2: photo("chatham-2", "13f11a5f0b977714_16-3869", "Chatham Close, Clapham"),

  richmond1: photo("richmond-1", "b20118320bebed9f_16-3715", "Richmond Park, TW10"),
  richmond2: photo("richmond-2", "998117250bebedde_16-3487", "Richmond Park, TW10"),
  ridgeway1: photo("ridgeway-1", "35d1eb050bdc1d57_16-4074", "Ridgeway Road"),
  ridgeway2: photo("ridgeway-2", "48818d920bdc1d70_16-4074", "Ridgeway Road"),

  albany1: photo("albany-1", "6031e1590b97c73d_16-9552", "Albany Park Road, Kingston"),
  albany2: photo("albany-2", "fe113fcf0b97c754_16-9552", "Albany Park Road, Kingston"),
  queens: photo("queens", "b91193190bdc703b_16-5504", "Queens Drive, Kingston"),
  seymour1: photo("seymour-1", "9e91d4bb0bdb39b4_16-5753", "Two-storey extension, Seymour Road, Kingston"),
  seymour2: photo("seymour-2", "8ce17f9e0bdb39ca_16-4086", "Two-storey extension, Seymour Road, Kingston"),

  henley: photo("henley", "1701fec80be2c718_16-3941", "Henley Avenue, Sutton"),
  montpelier1: photo("montpelier-1", "dd31b5930be958bc_16-5505", "Montpelier Road, Sutton"),
  montpelier2: photo("montpelier-2", "e1917adf0be958dd_16-5505", "Montpelier Road, Sutton"),
  wilbury1: photo("wilbury-1", "bf11c10a0bebf905_16-3716", "Wilbury Avenue, Sutton"),
  wilbury2: photo("wilbury-2", "c0610bc90bebf92e_16-9688", "Wilbury Avenue, Sutton"),
  gomshall: photo("gomshall", "d821cdea0c081575_9-5098", "Gomshall Road, Sutton", { low: true }),

  arundel1: photo("arundel-1", "5e01b1ac0c081014_16-5091", "Arundel Avenue, Ewell"),
  arundel2: photo("arundel-2", "8731d2570c08108c_16-5094", "Arundel Avenue, Ewell"),

  manor1: photo("manor-1", "6991ddba0be2f1f8_16-4823", "Manor Crescent, Epsom"),
  manor2: photo("manor-2", "bf61800e0be2f20e_16-4684", "Manor Crescent, Epsom"),

  barlow1: photo("barlow-1", "644111ae0b97c934_16-7318", "Barlow Road, Hampton"),
  barlow2: photo("barlow-2", "f00147da0b97c93c_16-7318", "Barlow Road, Hampton"),

  ethnard: photo("ethnard", "5801bcac0b97d7ec_16-7114", "Ethnard Road, Peckham"),
  lynton: photo("lynton", "4ff15fa90be2e986_16-3947", "Lynton Road, Camberwell"),
} as const satisfies Record<string, Photo>;

export const heroSlides: Photo[] = [photos.heroKitchen, photos.heroHouse, photos.heroLoft, photos.heroLantern];

export const loftGallery: Photo[] = [
  photos.loftBedroom,
  photos.loftVelux,
  photos.loftEaves,
  photos.loftEnsuite,
  photos.loftLantern,
  photos.loftDormerExt,
  photos.loftGlazing,
  photos.loftLivingLow,
  photos.loftLoungeLow,
  photos.loftCrittallLow,
];

export const extensionGallery: Photo[] = [
  photos.extLiving,
  photos.extIsland,
  photos.extSide,
  photos.extDining,
  photos.extSteel,
  photos.extTeal,
  photos.extPendant,
  photos.extBlueSofa,
  photos.extOpen,
  photos.extBlueJoinery,
  photos.extBifold,
  photos.extLantern,
  photos.extSteps,
  photos.extLawn,
  photos.extBrick,
  photos.extTimber,
  photos.extVictorian,
  photos.extDetached,
];

export const kitchenGallery: Photo[] = [
  photos.kitGrey,
  photos.kitIsland,
  photos.kitTeal,
  photos.kitDark,
  photos.kitBlue,
  photos.kitBar,
  photos.kitWhite,
  photos.kitGarden,
  photos.kitLantern,
  photos.kitTimber,
];

export const interiorGallery: Photo[] = [photos.intLiving, photos.intPink, photos.intTeal, photos.intSlat];

export const bathroomGallery: Photo[] = [
  photos.bathBlue,
  photos.bathTealRoll,
  photos.bathFree,
  photos.bathRug,
  photos.bathGrey,
  photos.bathVanity,
  photos.bathTeal,
  photos.bathTiled,
];

export const stairGallery: Photo[] = [photos.stairSky, photos.stairRunner, photos.stairOak, photos.stairArt];
