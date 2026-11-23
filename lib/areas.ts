export type Area = {
  slug: string;
  path: string;
  name: string;
  postcodes: string;
  council: string;
  intro: string;
  neighbours: string[];
};

export const areas: Area[] = [
  {
    slug: "earlsfield",
    path: "loft-conversions-earlsfield",
    name: "Earlsfield",
    postcodes: "SW18",
    council: "the London Borough of Wandsworth",
    intro:
      "Earlsfield is terraces. Victorian and Edwardian houses run off Garratt Lane, with long gardens and roofs that take a dormer or a Velux conversion. Rear extensions are the other usual move, opening the kitchen to the garden. The studio is here, at 338 Garratt Lane.",
    neighbours: ["wandsworth", "tooting", "wimbledon", "balham"],
  },
  {
    slug: "wandsworth",
    path: "loft-conversions-wandsworth",
    name: "Wandsworth",
    postcodes: "SW18",
    council: "the London Borough of Wandsworth",
    intro:
      "Wandsworth’s streets are mostly Victorian terraces, with larger family houses towards the commons. Lofts add a bedroom under those roofs. Ground floors are often opened into one room facing the garden.",
    neighbours: ["earlsfield", "putney", "battersea", "tooting"],
  },
  {
    slug: "wimbledon",
    path: "loft-conversions-in-wimbledon",
    name: "Wimbledon",
    postcodes: "SW19 and SW20",
    council: "the London Borough of Merton",
    intro:
      "Closer to the village the houses are Victorian and Edwardian. Further out, towards SW20, inter-war semis are common, with hips that suit a hip-to-gable or a dormer. Plots are often wider than in Earlsfield.",
    neighbours: ["raynes-park", "earlsfield", "motspur-park", "kingston"],
  },
  {
    slug: "clapham",
    path: "loft-conversions-clapham",
    name: "Clapham",
    postcodes: "SW11",
    council: "the London Borough of Lambeth",
    intro:
      "Clapham is Victorian and Edwardian terraces, plus mansion flats around the common. Terraced roofs take loft conversions. Side returns are the tight way to widen a ground floor. We confirm the borough from the address, because the Wandsworth side of the common is a different authority.",
    neighbours: ["battersea", "balham", "streatham", "fulham"],
  },
  {
    slug: "twickenham",
    path: "twickenham-loft-conversion",
    name: "Twickenham",
    postcodes: "TW1 and TW2",
    council: "the London Borough of Richmond upon Thames",
    intro:
      "Twickenham mixes Victorian terraces nearer the river with inter-war houses on the roads behind. Many have a proper roof void. Extensions here are often about the garden as much as the kitchen.",
    neighbours: ["richmond", "teddington", "hampton", "kingston"],
  },
  {
    slug: "richmond",
    path: "loft-conversions-in-richmond-upon-thames",
    name: "Richmond",
    postcodes: "TW9 and TW10",
    council: "the London Borough of Richmond upon Thames",
    intro:
      "Richmond’s houses run from Georgian and Victorian streets to later family houses towards the park. A lot of the neighbourhood sits in or beside conservation areas, so the drawing and the planning route matter as much as the build. We check permitted development before anyone assumes it applies.",
    neighbours: ["east-sheen", "twickenham", "putney", "kingston"],
  },
  {
    slug: "kingston",
    path: "loft-conversions-in-kingston-upon-thames",
    name: "Kingston",
    postcodes: "KT2 and KT5",
    council: "the Royal Borough of Kingston upon Thames",
    intro:
      "Kingston’s stock changes street by street: Victorian terraces nearer the town, and later semis and detached houses on roads such as Albany Park and Seymour. Two-storey extensions show up here, as well as lofts.",
    neighbours: ["surbiton", "hampton", "wimbledon", "richmond"],
  },
  {
    slug: "sutton",
    path: "loft-conversions-sutton",
    name: "Sutton",
    postcodes: "SM1, SM2 and SM3",
    council: "the London Borough of Sutton",
    intro:
      "Sutton is largely inter-war semis and 1930s houses, with older streets nearer the town centre. The roofs are often hipped, which makes hip-to-gable and dormer conversions a natural fit. Rear extensions pick up the deeper gardens.",
    neighbours: ["ewell", "epsom"],
  },
  {
    slug: "ewell",
    path: "loft-conversions-ewell",
    name: "Ewell",
    postcodes: "KT17",
    council: "Epsom and Ewell Borough Council",
    intro:
      "Ewell is outside Greater London, in Surrey. The streets are mostly inter-war semis and detached houses, with generous roofs and side access. Dormers and hip-to-gable lofts suit this stock. Planning is decided by Epsom and Ewell, not a London borough.",
    neighbours: ["epsom", "sutton"],
  },
  {
    slug: "epsom",
    path: "loft-conversions-epsom",
    name: "Epsom",
    postcodes: "KT19",
    council: "Epsom and Ewell Borough Council",
    intro:
      "Epsom shares Ewell’s mix of inter-war housing and older streets near the town. Roofs are often large enough for a proper loft room. The council is Epsom and Ewell Borough Council, so the planning route is Surrey’s, not a London borough’s.",
    neighbours: ["ewell", "sutton"],
  },
  {
    slug: "hampton",
    path: "hampton-loft-conversion",
    name: "Hampton",
    postcodes: "TW12",
    council: "the London Borough of Richmond upon Thames",
    intro:
      "Hampton is inter-war houses and older Victorian streets, many with room in the roof and a garden worth opening onto. Lofts and single-storey rear extensions are the usual projects.",
    neighbours: ["teddington", "twickenham", "kingston", "surbiton"],
  },
  {
    slug: "peckham",
    path: "loft-conversions-peckham",
    name: "Peckham",
    postcodes: "SE15",
    council: "the London Borough of Southwark",
    intro:
      "Peckham’s streets are Victorian terraces, often with a butterfly or simple pitched roof and a long, narrow garden. Loft conversions and rear extensions are how these houses grow without losing the street front.",
    neighbours: ["camberwell"],
  },
  {
    slug: "camberwell",
    path: "loft-conversions-camberwell",
    name: "Camberwell",
    postcodes: "SE5",
    council: "the London Borough of Southwark",
    intro:
      "Camberwell has tall Victorian houses and some Georgian streets, with roof volumes that can take a loft room and stair. Ground floors are often a kitchen pushed back into the garden.",
    neighbours: ["peckham"],
  },
  {
    slug: "battersea",
    path: "loft-conversions-battersea",
    name: "Battersea",
    postcodes: "SW11",
    council: "the London Borough of Wandsworth",
    intro:
      "Battersea is Victorian terraces and mansion blocks between the park and the river. Terrace lofts are common. Side returns and rear extensions deal with the tighter plots.",
    neighbours: ["clapham", "wandsworth", "fulham", "balham"],
  },
  {
    slug: "balham",
    path: "loft-conversions-in-balham",
    name: "Balham",
    postcodes: "SW12",
    council: "the London Borough of Wandsworth",
    intro:
      "Balham is Victorian and Edwardian terraces, similar in bones to Earlsfield and Tooting. The roofs take dormers. Families tend to add a bedroom above and a kitchen-diner below.",
    neighbours: ["tooting", "clapham", "earlsfield", "streatham"],
  },
  {
    slug: "tooting",
    path: "loft-conversions-tooting",
    name: "Tooting",
    postcodes: "SW17",
    council: "the London Borough of Wandsworth",
    intro:
      "Tooting’s terraces are Victorian, on a similar pattern to Earlsfield: two or three storeys, a loft void, and a rear garden. Conversions and kitchen extensions are the work we are usually asked for.",
    neighbours: ["balham", "earlsfield", "wandsworth", "streatham"],
  },
  {
    slug: "streatham",
    path: "loft-conversions-streatham",
    name: "Streatham",
    postcodes: "SW16",
    council: "the London Borough of Lambeth",
    intro:
      "Streatham mixes Victorian terraces with larger Edwardian houses. Some roofs are broad enough for a bedroom and a bathroom. Rear extensions open the ground floor to gardens that are often deeper than they look from the street.",
    neighbours: ["balham", "tooting", "clapham"],
  },
  {
    slug: "fulham",
    path: "loft-conversions-fulham",
    name: "Fulham",
    postcodes: "SW6",
    council: "the London Borough of Hammersmith and Fulham",
    intro:
      "Fulham is tightly planned Victorian terraces. The usual gains are a loft bedroom and a side-return kitchen. There is rarely width to waste, so the drawing has to earn every metre.",
    neighbours: ["putney", "battersea", "clapham"],
  },
  {
    slug: "putney",
    path: "loft-conversions-putney",
    name: "Putney",
    postcodes: "SW15",
    council: "the London Borough of Wandsworth",
    intro:
      "Putney runs from Victorian terraces to larger Edwardian semis between the river and the heath. Both lofts and rear extensions are common, and a number of streets need a careful planning check.",
    neighbours: ["wandsworth", "fulham", "east-sheen", "richmond"],
  },
  {
    slug: "surbiton",
    path: "loft-conversions-surbiton",
    name: "Surbiton",
    postcodes: "KT6",
    council: "the Royal Borough of Kingston upon Thames",
    intro:
      "Surbiton has Victorian villas and later semis, many with a loft that can become a bedroom and bathroom. Gardens are generally workable for a single-storey extension.",
    neighbours: ["kingston", "hampton", "teddington"],
  },
  {
    slug: "raynes-park",
    path: "raynes-park-loft-conversion",
    name: "Raynes Park",
    postcodes: "SW20",
    council: "the London Borough of Merton",
    intro:
      "Raynes Park sits between Wimbledon and Motspur Park. The houses are largely Edwardian and inter-war, with hipped roofs that lend themselves to dormers and hip-to-gable conversions.",
    neighbours: ["wimbledon", "motspur-park", "earlsfield"],
  },
  {
    slug: "motspur-park",
    path: "motspur-park-loft-conversion",
    name: "Motspur Park",
    postcodes: "KT3",
    council: "the Royal Borough of Kingston upon Thames and the London Borough of Merton",
    intro:
      "Motspur Park is inter-war semis and terraces on the Kingston and Merton boundary. We confirm which authority applies from the postcode before any planning or permitted-development advice. The roofs are a good size for a loft room.",
    neighbours: ["raynes-park", "wimbledon", "kingston"],
  },
  {
    slug: "east-sheen",
    path: "loft-conversions-east-sheen",
    name: "East Sheen",
    postcodes: "SW14",
    council: "the London Borough of Richmond upon Thames",
    intro:
      "East Sheen is Edwardian and Victorian family houses on the edge of Richmond Park. Many are semis or detached, with roofs and gardens that can take a loft or a rear extension. Conservation constraints are common this close to the park, and we check them first.",
    neighbours: ["richmond", "putney"],
  },
  {
    slug: "teddington",
    path: "teddington-loft-conversion",
    name: "Teddington",
    postcodes: "TW11",
    council: "the London Borough of Richmond upon Thames",
    intro:
      "Teddington mixes Victorian and Edwardian houses with inter-war streets towards Hampton. Loft conversions are a straightforward way to add a bedroom. Rear extensions suit the gardens behind the older terraces.",
    neighbours: ["hampton", "twickenham", "kingston"],
  },
  {
    slug: "chiswick",
    path: "loft-conversions-chiswick",
    name: "Chiswick",
    postcodes: "W4",
    council: "the London Borough of Hounslow",
    intro:
      "Chiswick is Victorian and Edwardian terraces and larger family houses between the river and the A4. Lofts and side returns are the usual way these houses grow.",
    neighbours: ["hammersmith", "fulham"],
  },
  {
    slug: "walton-on-thames",
    path: "loft-conversion-walton-on-thames",
    name: "Walton-on-Thames",
    postcodes: "KT12",
    council: "Elmbridge Borough Council",
    intro:
      "Walton-on-Thames is in Surrey, with inter-war semis and older streets near the town. Roofs are often large enough for a dormer, and planning is decided by Elmbridge, not a London borough.",
    neighbours: ["hampton", "molesey", "kingston"],
  },
  {
    slug: "molesey",
    path: "molesey-loft-conversion",
    name: "Molesey",
    postcodes: "KT8",
    council: "Elmbridge Borough Council",
    intro:
      "Molesey sits by the Thames, East and West, with Victorian cottages and later semis. Loft rooms and rear extensions are the work we are usually asked to look at.",
    neighbours: ["walton-on-thames", "hampton", "kingston"],
  },
  {
    slug: "hammersmith",
    path: "hammersmith-loft-conversion",
    name: "Hammersmith",
    postcodes: "W6",
    council: "the London Borough of Hammersmith and Fulham",
    intro:
      "Hammersmith is Victorian terraces and mansion flats between the Broadway and the river. Terrace lofts and tight side returns are the usual projects.",
    neighbours: ["fulham", "chiswick"],
  },
  {
    slug: "dulwich",
    path: "dulwich-loft-conversion",
    name: "Dulwich",
    postcodes: "SE21 and SE22",
    council: "the London Borough of Southwark",
    intro:
      "Dulwich has Victorian and Edwardian family houses, many of them semis, with roofs and gardens that can take a loft or a rear extension. A number of streets are in conservation areas.",
    neighbours: ["peckham", "camberwell"],
  },
];

const smallWords = new Set(["in", "on", "upon", "and", "the"]);

export function areaHeading(path: string) {
  return path
    .split("-")
    .map((word, index) => {
      if (index > 0 && smallWords.has(word) && word !== "in" && word !== "on" && word !== "upon") return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}

export function getAreaByPath(path: string) {
  return areas.find((area) => area.path === path);
}
