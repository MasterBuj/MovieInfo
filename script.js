const APIURL = "https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";


const main = document.getElementById("content");
const form = document.getElementById("form");
const search = document.getElementById("search");


const discoverMovie = [
    {
        "adult": false,
        "backdrop_path": "/27u4kBGGOQLqizEudJAOWMkvhip.jpg",
        "genre_ids": [
            28,
            80,
            53
        ],
        "id": 385687,
        "original_language": "en",
        "original_title": "Fast X",
        "overview": "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
        "popularity": 4156.935,
        "poster_path": "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
        "release_date": "2023-05-17",
        "title": "Fast X",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 2346
    },
    {
        "adult": false,
        "backdrop_path": "/fhquRW28vRZHr26orSaFFnhYIA0.jpg",
        "genre_ids": [
            28,
            53
        ],
        "id": 697843,
        "original_language": "en",
        "original_title": "Extraction 2",
        "overview": "Tasked with extracting a family who is at the mercy of a Georgian gangster, Tyler Rake infiltrates one of the world's deadliest prisons in order to save them. But when the extraction gets hot, and the gangster dies in the heat of battle, his equally ruthless brother tracks down Rake and his team to Vienna, in order to get revenge.",
        "popularity": 1904.432,
        "poster_path": "/7gKI9hpEMcZUQpNgKrkDzJpbnNS.jpg",
        "release_date": "2023-06-09",
        "title": "Extraction 2",
        "video": false,
        "vote_average": 7.6,
        "vote_count": 1118
    },
    {
        "adult": false,
        "backdrop_path": "/fgw4rFs4XMWdJTWp1eMacHKQqbZ.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "popularity": 1876.739,
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick: Chapter 4",
        "video": false,
        "vote_average": 7.9,
        "vote_count": 3478
    },
    {
        "adult": false,
        "backdrop_path": "/nGxUxi3PfXDRm7Vg95VBNgNM8yc.jpg",
        "genre_ids": [
            28,
            12,
            16,
            878
        ],
        "id": 569094,
        "original_language": "en",
        "original_title": "Spider-Man: Across the Spider-Verse",
        "overview": "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
        "popularity": 1848.739,
        "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
        "release_date": "2023-05-31",
        "title": "Spider-Man: Across the Spider-Verse",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 1965
    },
    {
        "adult": false,
        "backdrop_path": "/nniZPBIfrep9wbx0l1529RHXeD8.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 1567.974,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.8,
        "vote_count": 5346
    },
    {
        "adult": false,
        "backdrop_path": "/qWQSnedj0LCUjWNp9fLcMtfgadp.jpg",
        "genre_ids": [
            28,
            12,
            878
        ],
        "id": 667538,
        "original_language": "en",
        "original_title": "Transformers: Rise of the Beasts",
        "overview": "When a new threat capable of destroying the entire planet emerges, Optimus Prime and the Autobots must team up with a powerful faction known as the Maximals. With the fate of humanity hanging in the balance, humans Noah and Elena will do whatever it takes to help the Transformers as they engage in the ultimate battle to save Earth.",
        "popularity": 1609.92,
        "poster_path": "/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
        "release_date": "2023-06-06",
        "title": "Transformers: Rise of the Beasts",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 547
    },
    {
        "adult": false,
        "backdrop_path": "/cSYLX73WskxCgvpN3MtRkYUSj1T.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            14,
            10749
        ],
        "id": 976573,
        "original_language": "en",
        "original_title": "Elemental",
        "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
        "popularity": 1391.675,
        "poster_path": "/8riWcADI1ekEiBguVB9vkilhiQm.jpg",
        "release_date": "2023-06-14",
        "title": "Elemental",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 304
    },
    {
        "adult": false,
        "backdrop_path": "/xDEVdWduhRdNS4PzA6wif6FjUQb.jpg",
        "genre_ids": [
            28,
            14,
            53
        ],
        "id": 1036561,
        "original_language": "en",
        "original_title": "Shadow Master",
        "overview": "After being slain by a group of criminals, a man is reborn with animal-like superpowers and makes it his mission to right the wrongs of his city.",
        "popularity": 1217.372,
        "poster_path": "/67ZsRKbItt6B1yHlsJKgfPWOyuJ.jpg",
        "release_date": "2022-11-03",
        "title": "Shadow Master",
        "video": false,
        "vote_average": 7,
        "vote_count": 54
    },
    {
        "adult": false,
        "backdrop_path": "/u17VLZqWFbeJsj1HpvB6QOOHvlC.jpg",
        "genre_ids": [
            14,
            28,
            12
        ],
        "id": 455476,
        "original_language": "en",
        "original_title": "Knights of the Zodiac",
        "overview": "When a headstrong street orphan, Seiya, in search of his abducted sister unwittingly taps into hidden powers, he discovers he might be the only person alive who can protect a reincarnated goddess, sent to watch over humanity. Can he let his past go and embrace his destiny to become a Knight of the Zodiac?",
        "popularity": 1712.12,
        "poster_path": "/qW4crfED8mpNDadSmMdi7ZDzhXF.jpg",
        "release_date": "2023-04-27",
        "title": "Knights of the Zodiac",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 280
    },
    {
        "adult": false,
        "backdrop_path": "/zcySy6dnSmyqiichtDgO7AEeZoq.jpg",
        "genre_ids": [
            28,
            18,
            53
        ],
        "id": 254128,
        "original_language": "en",
        "original_title": "San Andreas",
        "overview": "In the aftermath of a massive earthquake in California, a rescue-chopper pilot makes a dangerous journey across the state in order to rescue his estranged daughter.",
        "popularity": 1701.186,
        "poster_path": "/2Gfjn962aaFSD6eST6QU3oLDZTo.jpg",
        "release_date": "2015-05-27",
        "title": "San Andreas",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 7708
    },
    {
        "adult": false,
        "backdrop_path": "/pNOccytgkGuyofTLmh1sqEfTJuE.jpg",
        "genre_ids": [
            10749,
            18
        ],
        "id": 1010581,
        "original_language": "es",
        "original_title": "Culpa mía",
        "overview": "Noah must leave her city, boyfriend, and friends to move into William Leister's mansion, the flashy and wealthy husband of her mother Rafaela. As a proud and independent 17 year old, Noah resists living in a mansion surrounded by luxury. However, it is there where she meets Nick, her new stepbrother, and the clash of their strong personalities becomes evident from the very beginning.",
        "popularity": 1140.154,
        "poster_path": "/w46Vw536HwNnEzOa7J24YH9DPRS.jpg",
        "release_date": "2023-06-08",
        "title": "My Fault",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 1014
    },
    {
        "adult": false,
        "backdrop_path": "/osnvZffaZymubHiBkOsIFd8Y3Re.jpg",
        "genre_ids": [
            28,
            27,
            53
        ],
        "id": 986070,
        "original_language": "en",
        "original_title": "The Wrath of Becky",
        "overview": "Two years after she escaped a violent attack on her family, 16-year-old Becky attempts to rebuild her life in the care of an older woman -- a kindred spirit named Elena. However, when a violent group known as the Noble Men break into their home, attack them and take their beloved dog, Becky must return to her old ways to protect herself and her loved ones.",
        "popularity": 984.626,
        "poster_path": "/3LShl6EwqptKIVq6NWOZ0FbZHEe.jpg",
        "release_date": "2023-05-26",
        "title": "The Wrath of Becky",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 62
    },
    {
        "adult": false,
        "backdrop_path": "/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg",
        "genre_ids": [
            28,
            878,
            12
        ],
        "id": 447365,
        "original_language": "en",
        "original_title": "Guardians of the Galaxy Vol. 3",
        "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        "popularity": 1041.224,
        "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        "release_date": "2023-05-03",
        "title": "Guardians of the Galaxy Vol. 3",
        "video": false,
        "vote_average": 8.1,
        "vote_count": 2153
    },
    {
        "adult": false,
        "backdrop_path": "/6Z0FhoZM56YkuXhvklMTpc7rc5u.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 423108,
        "original_language": "en",
        "original_title": "The Conjuring: The Devil Made Me Do It",
        "overview": "Paranormal investigators Ed and Lorraine Warren encounter what would become one of the most sensational cases from their files. The fight for the soul of a young boy takes them beyond anything they'd ever seen before, to mark the first time in U.S. history that a murder suspect would claim demonic possession as a defense.",
        "popularity": 1155.888,
        "poster_path": "/xbSuFiJbbBWCkyCCKIMfuDCA4yV.jpg",
        "release_date": "2021-05-25",
        "title": "The Conjuring: The Devil Made Me Do It",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 5162
    },
    {
        "adult": false,
        "backdrop_path": "/PwI3EfasE9fVuXsmMu9ffJh0Re.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 406563,
        "original_language": "en",
        "original_title": "Insidious: The Last Key",
        "overview": "Parapsychologist Elise Rainier and her team travel to Five Keys, NM, to investigate a man’s claim of a haunting. Terror soon strikes when Rainier realizes that the house he lives in was her family’s old home.",
        "popularity": 1151.674,
        "poster_path": "/nb9fc9INMg8kQ8L7sE7XTNsZnUX.jpg",
        "release_date": "2018-01-03",
        "title": "Insidious: The Last Key",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 2472
    },
    {
        "adult": false,
        "backdrop_path": "/4pNlHx6ytdYBDs94PgcS0wQkbc4.jpg",
        "genre_ids": [
            878,
            12,
            28
        ],
        "id": 76600,
        "original_language": "en",
        "original_title": "Avatar: The Way of Water",
        "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
        "popularity": 951.446,
        "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
        "release_date": "2022-12-14",
        "title": "Avatar: The Way of Water",
        "video": false,
        "vote_average": 7.7,
        "vote_count": 8961
    },
    {
        "adult": false,
        "backdrop_path": "/vQ5T84t8h4N2xAswNFW9fkVIyZq.jpg",
        "genre_ids": [
            9648,
            53,
            878
        ],
        "id": 536437,
        "original_language": "en",
        "original_title": "Hypnotic",
        "overview": "A detective becomes entangled in a mystery involving his missing daughter and a secret government program while investigating a string of reality-bending crimes.",
        "popularity": 904.106,
        "poster_path": "/3IhGkkalwXguTlceGSl8XUJZOVI.jpg",
        "release_date": "2023-05-11",
        "title": "Hypnotic",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 276
    },
    {
        "adult": false,
        "backdrop_path": "/fEe2csLOUsTyaLdCccVJfFeJzhx.jpg",
        "genre_ids": [
            878,
            28,
            12
        ],
        "id": 298618,
        "original_language": "en",
        "original_title": "The Flash",
        "overview": "When his attempt to save his family inadvertently alters the future, Barry Allen becomes trapped in a reality in which General Zod has returned and there are no Super Heroes to turn to. In order to save the world that he is in and return to the future that he knows, Barry's only hope is to race for his life. But will making the ultimate sacrifice be enough to reset the universe?",
        "popularity": 915.012,
        "poster_path": "/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg",
        "release_date": "2023-06-13",
        "title": "The Flash",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 716
    },
    {
        "adult": false,
        "backdrop_path": "/ribiMu3iINPxDkofErPxe8jQ8L0.jpg",
        "genre_ids": [
            12,
            10751,
            14,
            10749
        ],
        "id": 447277,
        "original_language": "en",
        "original_title": "The Little Mermaid",
        "overview": "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        "popularity": 854.713,
        "poster_path": "/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        "release_date": "2023-05-18",
        "title": "The Little Mermaid",
        "video": false,
        "vote_average": 6.2,
        "vote_count": 819
    },
    {
        "adult": false,
        "backdrop_path": "/mmSSn8Yn3GbJv9MsSnD4J1LnN9l.jpg",
        "genre_ids": [
            10749,
            18,
            35
        ],
        "id": 988078,
        "original_language": "es",
        "original_title": "A través del mar",
        "overview": "After a year of long-distance, Raquel and Ares reunite on a steamy beach trip. Faced with fresh flirtations and insecurities, will their love prevail?",
        "popularity": 838.541,
        "poster_path": "/dAyJqJ8KoglZysttC6BfVmDFQUt.jpg",
        "release_date": "2023-06-23",
        "title": "Through My Window: Across the Sea",
        "video": false,
        "vote_average": 6.7,
        "vote_count": 290
    }
]

const nowPlaying = [
    {
        "adult": false,
        "backdrop_path": "/iJQIbOPm81fPEGKt5BPuZmfnA54.jpg",
        "genre_ids": [
            16,
            12,
            10751,
            14,
            35
        ],
        "id": 502356,
        "original_language": "en",
        "original_title": "The Super Mario Bros. Movie",
        "overview": "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        "popularity": 6572.614,
        "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        "release_date": "2023-04-05",
        "title": "The Super Mario Bros. Movie",
        "video": false,
        "vote_average": 7.5,
        "vote_count": 1456
    },
    {
        "adult": false,
        "backdrop_path": "/nDxJJyA5giRhXx96q1sWbOUjMBI.jpg",
        "genre_ids": [
            28,
            35,
            14
        ],
        "id": 594767,
        "original_language": "en",
        "original_title": "Shazam! Fury of the Gods",
        "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
        "popularity": 4274.232,
        "poster_path": "/2VK4d3mqqTc7LVZLnLPeRiPaJ71.jpg",
        "release_date": "2023-03-15",
        "title": "Shazam! Fury of the Gods",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 1231
    },
    {
        "adult": false,
        "backdrop_path": "/7bWxAsNPv9CXHOhZbJVlj2KxgfP.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 713704,
        "original_language": "en",
        "original_title": "Evil Dead Rise",
        "overview": "Two sisters find an ancient vinyl that gives birth to bloodthirsty demons that run amok in a Los Angeles apartment building and thrusts them into a primal battle for survival as they face the most nightmarish version of family imaginable.",
        "popularity": 1696.367,
        "poster_path": "/mIBCtPvKZQlxubxKMeViO2UrP3q.jpg",
        "release_date": "2023-04-12",
        "title": "Evil Dead Rise",
        "video": false,
        "vote_average": 7,
        "vote_count": 207
    },
    {
        "adult": false,
        "backdrop_path": "/ouB7hwclG7QI3INoYJHaZL4vOaa.jpg",
        "genre_ids": [
            16,
            10751,
            14,
            12,
            35,
            18
        ],
        "id": 315162,
        "original_language": "en",
        "original_title": "Puss in Boots: The Last Wish",
        "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
        "popularity": 1347.259,
        "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
        "release_date": "2022-12-07",
        "title": "Puss in Boots: The Last Wish",
        "video": false,
        "vote_average": 8.3,
        "vote_count": 5331
    },
    {
        "adult": false,
        "backdrop_path": "/h8gHn0OzBoaefsYseUByqsmEDMY.jpg",
        "genre_ids": [
            28,
            53,
            80
        ],
        "id": 603692,
        "original_language": "en",
        "original_title": "John Wick: Chapter 4",
        "overview": "With the price on his head ever increasing, John Wick uncovers a path to defeating The High Table. But before he can earn his freedom, Wick must face off against a new enemy with powerful alliances across the globe and forces that turn old friends into foes.",
        "popularity": 1320.735,
        "poster_path": "/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
        "release_date": "2023-03-22",
        "title": "John Wick: Chapter 4",
        "video": false,
        "vote_average": 8,
        "vote_count": 1211
    },
    {
        "adult": false,
        "backdrop_path": "/a2tys4sD7xzVaogPntGsT1ypVoT.jpg",
        "genre_ids": [
            53,
            35,
            80
        ],
        "id": 804150,
        "original_language": "en",
        "original_title": "Cocaine Bear",
        "overview": "Inspired by a true story, an oddball group of cops, criminals, tourists and teens converge in a Georgia forest where a 500-pound black bear goes on a murderous rampage after unintentionally ingesting cocaine.",
        "popularity": 1175.491,
        "poster_path": "/gOnmaxHo0412UVr1QM5Nekv1xPi.jpg",
        "release_date": "2023-02-22",
        "title": "Cocaine Bear",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 878
    },
    {
        "adult": false,
        "backdrop_path": "/54IXMMEQKlkPXHqPExWy98UBmtE.jpg",
        "genre_ids": [
            27
        ],
        "id": 1008005,
        "original_language": "es",
        "original_title": "La niña de la comunión",
        "overview": "Spain, late 1980s. Newcomer Sara tries to fit in with the other teens in this tight-knit small town in the province of Tarragona. If only she were more like her extroverted best friend, Rebe. They go out one night at a nightclub, on the way home, they come upon a little girl holding a doll, dressed for her first communion. And that's when the nightmare begins.",
        "popularity": 1154.3,
        "poster_path": "/sP6AO11a7jWgsmT9T8j9EGIWAaZ.jpg",
        "release_date": "2023-02-10",
        "title": "The Communion Girl",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 58
    },
    {
        "adult": false,
        "backdrop_path": "/eSVu1FvGPy86TDo4hQbpuHx55DJ.jpg",
        "genre_ids": [
            878,
            12,
            53,
            28
        ],
        "id": 700391,
        "original_language": "en",
        "original_title": "65",
        "overview": "65 million years ago, the only 2 survivors of a spaceship from Somaris that crash-landed on Earth must fend off dinosaurs and reach the escape vessel in time before an imminent asteroid strike threatens to destroy the planet.",
        "popularity": 1077.09,
        "poster_path": "/rzRb63TldOKdKydCvWJM8B6EkPM.jpg",
        "release_date": "2023-03-02",
        "title": "65",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 763
    },
    {
        "adult": false,
        "backdrop_path": "/5Y5pz0NX7SZS9036I733F7uNcwK.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 758323,
        "original_language": "en",
        "original_title": "The Pope's Exorcist",
        "overview": "Father Gabriele Amorth, Chief Exorcist of the Vatican, investigates a young boy's terrifying possession and ends up uncovering a centuries-old conspiracy the Vatican has desperately tried to keep hidden.",
        "popularity": 1073.229,
        "poster_path": "/9JBEPLTPSm0d1mbEcLxULjJq9Eh.jpg",
        "release_date": "2023-04-05",
        "title": "The Pope's Exorcist",
        "video": false,
        "vote_average": 6.5,
        "vote_count": 143
    },
    {
        "adult": false,
        "backdrop_path": "/m1fgGSLK0WvRpzM1AmZu38m0Tx8.jpg",
        "genre_ids": [
            28
        ],
        "id": 842945,
        "original_language": "en",
        "original_title": "Supercell",
        "overview": "Good-hearted teenager William always lived in hope of following in his late father’s footsteps and becoming a storm chaser. His father’s legacy has now been turned into a storm-chasing tourist business, managed by the greedy and reckless Zane Rogers, who is now using William as the main attraction to lead a group of unsuspecting adventurers deep into the eye of the most dangerous supercell ever seen.",
        "popularity": 942.178,
        "poster_path": "/gbGHezV6yrhua0KfAgwrknSOiIY.jpg",
        "release_date": "2023-03-17",
        "title": "Supercell",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 125
    },
    {
        "adult": false,
        "backdrop_path": "/b9UCfDzwiWw7mIFsIQR9ZJUeh7q.jpg",
        "genre_ids": [
            10749,
            28,
            35
        ],
        "id": 868759,
        "original_language": "en",
        "original_title": "Ghosted",
        "overview": "Salt-of-the-earth Cole falls head over heels for enigmatic Sadie — but then makes the shocking discovery that she’s a secret agent. Before they can decide on a second date, Cole and Sadie are swept away on an international adventure to save the world.",
        "popularity": 867.762,
        "poster_path": "/liLN69YgoovHVgmlHJ876PKi5Yi.jpg",
        "release_date": "2023-04-21",
        "title": "Ghosted",
        "video": false,
        "vote_average": 7.3,
        "vote_count": 371
    },
    {
        "adult": false,
        "backdrop_path": "/44immBwzhDVyjn87b3x3l9mlhAD.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 934433,
        "original_language": "en",
        "original_title": "Scream VI",
        "overview": "Following the latest Ghostface killings, the four survivors leave Woodsboro behind and start a fresh chapter.",
        "popularity": 853.917,
        "poster_path": "/wDWwtvkRRlgTiUr6TyLSMX8FCuZ.jpg",
        "release_date": "2023-03-08",
        "title": "Scream VI",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 706
    },
    {
        "adult": false,
        "backdrop_path": "/c3hl9E8E7b9opXDFVF5tSyk0ykr.jpg",
        "genre_ids": [
            16,
            35,
            10751,
            12,
            14
        ],
        "id": 816904,
        "original_language": "es",
        "original_title": "Momias",
        "overview": "Through a series of unfortunate events, three mummies end up in present-day London and embark on a wacky and hilarious journey in search of an old ring belonging to the Royal Family, stolen by ambitious archaeologist Lord Carnaby.",
        "popularity": 749.77,
        "poster_path": "/qVdrYN8qu7xUtsdEFeGiIVIaYd.jpg",
        "release_date": "2023-01-05",
        "title": "Mummies",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 220
    },
    {
        "adult": false,
        "backdrop_path": "/wD2kUCX1Bb6oeIb2uz7kbdfLP6k.jpg",
        "genre_ids": [
            27,
            53
        ],
        "id": 980078,
        "original_language": "en",
        "original_title": "Winnie the Pooh: Blood and Honey",
        "overview": "Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.",
        "popularity": 690.338,
        "poster_path": "/ewF3IlGscc7FjgGEPcQvZsAsgAW.jpg",
        "release_date": "2023-01-27",
        "title": "Winnie the Pooh: Blood and Honey",
        "video": false,
        "vote_average": 5.8,
        "vote_count": 517
    },
    {
        "adult": false,
        "backdrop_path": "/dlrWhn0G3AtxYUx2D9P2bmzcsvF.jpg",
        "genre_ids": [
            878,
            27,
            35
        ],
        "id": 536554,
        "original_language": "en",
        "original_title": "M3GAN",
        "overview": "A brilliant toy company roboticist uses artificial intelligence to develop M3GAN, a life-like doll programmed to emotionally bond with her newly orphaned niece. But when the doll's programming works too well, she becomes overprotective of her new friend with terrifying results.",
        "popularity": 715.958,
        "poster_path": "/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
        "release_date": "2022-12-28",
        "title": "M3GAN",
        "video": false,
        "vote_average": 7.4,
        "vote_count": 2428
    },
    {
        "adult": false,
        "backdrop_path": "/aHcWyh0n4YbBy9gxYCDlgsNVS3M.jpg",
        "genre_ids": [
            27,
            9648,
            53
        ],
        "id": 631842,
        "original_language": "en",
        "original_title": "Knock at the Cabin",
        "overview": "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
        "popularity": 528.208,
        "poster_path": "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
        "release_date": "2023-02-01",
        "title": "Knock at the Cabin",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 1337
    },
    {
        "adult": false,
        "backdrop_path": "/70aVSo3fuZ94jyQ3rT64afEf8lV.jpg",
        "genre_ids": [
            16,
            12,
            35,
            10751,
            14
        ],
        "id": 676710,
        "original_language": "en",
        "original_title": "The Amazing Maurice",
        "overview": "Maurice is a streetwise ginger cat who comes up with a money-making scam by befriending a group of self-taught talking rats. When Maurice and the rodents meet a bookworm called Malicia, their little con soon goes down the drain.",
        "popularity": 515.629,
        "poster_path": "/ydhZeUjbzVEFclUpMhLfDZSavUY.jpg",
        "release_date": "2022-12-16",
        "title": "The Amazing Maurice",
        "video": false,
        "vote_average": 7,
        "vote_count": 61
    },
    {
        "adult": false,
        "backdrop_path": "/zGoZB4CboMzY1z4G3nU6BWnMDB2.jpg",
        "genre_ids": [
            28,
            35,
            10749
        ],
        "id": 758009,
        "original_language": "en",
        "original_title": "Shotgun Wedding",
        "overview": "Darcy and Tom gather their families for the ultimate destination wedding but when the entire party is taken hostage, “’Til Death Do Us Part” takes on a whole new meaning in this hilarious, adrenaline-fueled adventure as Darcy and Tom must save their loved ones—if they don’t kill each other first.",
        "popularity": 467.041,
        "poster_path": "/t79ozwWnwekO0ADIzsFP1E5SkvR.jpg",
        "release_date": "2022-12-28",
        "title": "Shotgun Wedding",
        "video": false,
        "vote_average": 6.3,
        "vote_count": 775
    },
    {
        "adult": false,
        "backdrop_path": "/ttXABm22Vu9MsQjDAF3Lx2nUPy0.jpg",
        "genre_ids": [
            35,
            28
        ],
        "id": 1101799,
        "original_language": "es",
        "original_title": "Fuga de Reinas",
        "overview": "When four women finally take the road trip they planned in high school, they have no idea of the things they'll bump into sometimes literally.",
        "popularity": 403.116,
        "poster_path": "/oUmuwUIofGsgOr05kieD3Q8ELEO.jpg",
        "release_date": "2023-04-14",
        "title": "Queens on the Run",
        "video": false,
        "vote_average": 7.2,
        "vote_count": 59
    },
    {
        "adult": false,
        "backdrop_path": "/94TIUEhuwv8PhdIADEvSuwPljS5.jpg",
        "genre_ids": [
            10752,
            28
        ],
        "id": 840326,
        "original_language": "fi",
        "original_title": "Sisu",
        "overview": "Deep in the wilderness of Lapland, Aatami Korpi is searching for gold but after he stumbles upon Nazi patrol, a breathtaking and gold-hungry chase through the destroyed and mined Lapland wilderness begins.",
        "popularity": 364.899,
        "poster_path": "/dHx5yuBb05U9vNaNhIBD7jWyxPk.jpg",
        "release_date": "2023-01-27",
        "title": "Sisu",
        "video": false,
        "vote_average": 6.9,
        "vote_count": 16
    }
]

const topRated = [
    {
        "adult": false,
        "backdrop_path": "/tmU7GeKVybMWFButWEGl2M4GeiP.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 238,
        "original_language": "en",
        "original_title": "The Godfather",
        "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
        "popularity": 100.932,
        "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        "release_date": "1972-03-14",
        "title": "The Godfather",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 17806
    },
    {
        "adult": false,
        "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 278,
        "original_language": "en",
        "original_title": "The Shawshank Redemption",
        "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        "popularity": 98.25,
        "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
        "release_date": "1994-09-23",
        "title": "The Shawshank Redemption",
        "video": false,
        "vote_average": 8.7,
        "vote_count": 23656
    },
    {
        "adult": false,
        "backdrop_path": "/ejnlCzBd5pOGAYCpxC93NXSrdrz.jpg",
        "genre_ids": [
            35,
            14
        ],
        "id": 772071,
        "original_language": "es",
        "original_title": "Cuando Sea Joven",
        "overview": "70-year-old Malena gets a second chance at life when she magically turns into her 22-year-old self. Now, posing as \"Maria\" to hide her true identity, she becomes the lead singer of her grandson's band and tries to recover her dream of singing, which she had to give up at some point.",
        "popularity": 28.385,
        "poster_path": "/6gIJuFHh5Lj4dNaPG3TzIMl7L68.jpg",
        "release_date": "2022-09-14",
        "title": "Cuando Sea Joven",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 213
    },
    {
        "adult": false,
        "backdrop_path": "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 240,
        "original_language": "en",
        "original_title": "The Godfather Part II",
        "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
        "popularity": 57.533,
        "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
        "release_date": "1974-12-20",
        "title": "The Godfather Part II",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 10775
    },
    {
        "adult": false,
        "backdrop_path": "/zb6fM1CX41D9rF9hdgclu0peUmy.jpg",
        "genre_ids": [
            18,
            36,
            10752
        ],
        "id": 424,
        "original_language": "en",
        "original_title": "Schindler's List",
        "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
        "popularity": 51.98,
        "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
        "release_date": "1993-12-15",
        "title": "Schindler's List",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 13995
    },
    {
        "adult": false,
        "backdrop_path": "/vI3aUGTuRRdM7J78KIdW98LdxE5.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 19404,
        "original_language": "hi",
        "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
        "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
        "popularity": 27.324,
        "poster_path": "/ktejodbcdCPXbMMdnpI9BUxW6O8.jpg",
        "release_date": "1995-10-19",
        "title": "Dilwale Dulhania Le Jayenge",
        "video": false,
        "vote_average": 8.6,
        "vote_count": 4113
    },
    {
        "adult": false,
        "backdrop_path": "/Ab8mkHmkYADjU7wQiOkia9BzGvS.jpg",
        "genre_ids": [
            16,
            10751,
            14
        ],
        "id": 129,
        "original_language": "ja",
        "original_title": "千と千尋の神隠し",
        "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
        "popularity": 85.662,
        "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
        "release_date": "2001-07-20",
        "title": "Spirited Away",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 14210
    },
    {
        "adult": false,
        "backdrop_path": "/tj6iPnz18hGfr0LKqWmG6Cp3niO.jpg",
        "genre_ids": [
            18
        ],
        "id": 389,
        "original_language": "en",
        "original_title": "12 Angry Men",
        "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
        "popularity": 39.076,
        "poster_path": "/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
        "release_date": "1957-04-10",
        "title": "12 Angry Men",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7212
    },
    {
        "adult": false,
        "backdrop_path": "/dIWwZW7dJJtqC6CgWzYkNVKIUm8.jpg",
        "genre_ids": [
            10749,
            16,
            18
        ],
        "id": 372058,
        "original_language": "ja",
        "original_title": "君の名は。",
        "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
        "popularity": 94.963,
        "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
        "release_date": "2016-08-26",
        "title": "Your Name.",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 9734
    },
    {
        "adult": false,
        "backdrop_path": "/hiKmpZMGZsrkA3cdce8a7Dpos1j.jpg",
        "genre_ids": [
            35,
            53,
            18
        ],
        "id": 496243,
        "original_language": "ko",
        "original_title": "기생충",
        "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
        "popularity": 72.256,
        "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
        "release_date": "2019-05-30",
        "title": "Parasite",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 15620
    },
    {
        "adult": false,
        "backdrop_path": "/dqK9Hag1054tghRQSqLSfrkvQnA.jpg",
        "genre_ids": [
            18,
            28,
            80,
            53
        ],
        "id": 155,
        "original_language": "en",
        "original_title": "The Dark Knight",
        "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        "popularity": 83.151,
        "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        "release_date": "2008-07-14",
        "title": "The Dark Knight",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 29578
    },
    {
        "adult": false,
        "backdrop_path": "/vxJ08SvwomfKbpboCWynC3uqUg4.jpg",
        "genre_ids": [
            14,
            18,
            80
        ],
        "id": 497,
        "original_language": "en",
        "original_title": "The Green Mile",
        "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
        "popularity": 58.199,
        "poster_path": "/o0lO84GI7qrG6XFvtsPOSV7CTNa.jpg",
        "release_date": "1999-12-10",
        "title": "The Green Mile",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 15312
    },
    {
        "adult": false,
        "backdrop_path": "/wxaBkuqVIgImjRHEMJoxL9Lq6i8.jpg",
        "genre_ids": [
            16,
            10751,
            12,
            14
        ],
        "id": 995133,
        "original_language": "en",
        "original_title": "The Boy, the Mole, the Fox and the Horse",
        "overview": "The unlikely friendship of a boy, a mole, a fox and a horse traveling together in the boy’s search for home.",
        "popularity": 29.753,
        "poster_path": "/oQRgyQCzcyZvE6w5heM9ktVY0LT.jpg",
        "release_date": "2022-12-25",
        "title": "The Boy, the Mole, the Fox and the Horse",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 309
    },
    {
        "adult": false,
        "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
        "genre_ids": [
            53,
            80
        ],
        "id": 680,
        "original_language": "en",
        "original_title": "Pulp Fiction",
        "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
        "popularity": 68.574,
        "poster_path": "/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        "release_date": "1994-09-10",
        "title": "Pulp Fiction",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 25040
    },
    {
        "adult": false,
        "backdrop_path": "/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg",
        "genre_ids": [
            10749,
            16
        ],
        "id": 372754,
        "original_language": "ja",
        "original_title": "同級生",
        "overview": "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
        "popularity": 12.556,
        "poster_path": "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
        "release_date": "2016-02-20",
        "title": "Dou kyu sei – Classmates",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 301
    },
    {
        "adult": false,
        "backdrop_path": "/eoCSp75lxatmIa6aGqfnzwtbttd.jpg",
        "genre_ids": [
            37
        ],
        "id": 429,
        "original_language": "it",
        "original_title": "Il buono, il brutto, il cattivo",
        "overview": "While the Civil War rages on between the Union and the Confederacy, three men – a quiet loner, a ruthless hitman, and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
        "popularity": 56.064,
        "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
        "release_date": "1966-12-23",
        "title": "The Good, the Bad and the Ugly",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 7347
    },
    {
        "adult": false,
        "backdrop_path": "/3h1JZGDhZ8nzxdgvkxha0qBqi05.jpg",
        "genre_ids": [
            35,
            18,
            10749
        ],
        "id": 13,
        "original_language": "en",
        "original_title": "Forrest Gump",
        "overview": "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
        "popularity": 62.225,
        "poster_path": "/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        "release_date": "1994-06-23",
        "title": "Forrest Gump",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 24529
    },
    {
        "adult": false,
        "backdrop_path": "/uBZQOYZLIU9dBmd62fdzBAoropu.jpg",
        "genre_ids": [
            28,
            12,
            16,
            18
        ],
        "id": 704264,
        "original_language": "en",
        "original_title": "Primal: Tales of Savagery",
        "overview": "Genndy Tartakovsky's Primal: Tales of Savagery features a caveman and a dinosaur on the brink of extinction. Bonded by tragedy, this unlikely friendship becomes the only hope of survival.",
        "popularity": 15.35,
        "poster_path": "/9NBBkdxH0TjQEBSN2AzeE1sgsF9.jpg",
        "release_date": "2019-11-21",
        "title": "Primal: Tales of Savagery",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 262
    },
    {
        "adult": false,
        "backdrop_path": "/9DeGfFIqjph5CBFVQrD6wv9S7rR.jpg",
        "genre_ids": [
            12,
            14,
            28
        ],
        "id": 122,
        "original_language": "en",
        "original_title": "The Lord of the Rings: The Return of the King",
        "overview": "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.",
        "popularity": 70.315,
        "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
        "release_date": "2003-12-01",
        "title": "The Lord of the Rings: The Return of the King",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 21488
    },
    {
        "adult": false,
        "backdrop_path": "/sw7mordbZxgITU877yTpZCud90M.jpg",
        "genre_ids": [
            18,
            80
        ],
        "id": 769,
        "original_language": "en",
        "original_title": "GoodFellas",
        "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
        "popularity": 39.718,
        "poster_path": "/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
        "release_date": "1990-09-12",
        "title": "GoodFellas",
        "video": false,
        "vote_average": 8.5,
        "vote_count": 11192
    }
]

showMovies(nowPlaying);



// getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    main.innerHTML = "";
    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview, release_date } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `

    <img src="${IMGPATH + poster_path}"
        alt="${title}" class="poster">
   <h3 class="movie-title">
        <p class="${getClassByRate(vote_average)}  rating">${vote_average}</p>
        <p> ${title} </p>
    </h3>

    <div class="overview">
        <a href="#">
            <h3>${title}</h3>
            <p>${release_date.slice(0, 4)}</p>
            <p class="summary">
                ${overview}
            </p>
            <span class="seemore">See more→</span>
        </a>
    </div>
 
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green-rate";
    } else if (vote >= 5) {
        return "orange-rate";
    } else {
        return "red-rate";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
    }
});

