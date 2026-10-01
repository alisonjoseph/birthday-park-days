window.TRIP_DAYS = [
  {
    "id": "sun",
    "date": "2026-10-04",
    "short": "SUN",
    "day": "04",
    "month": "OCT",
    "name": "Islands of Adventure",
    "kicker": "Coasters first. Magic after dark.",
    "hours": "9 AM – 8 PM",
    "early": "8 AM",
    "color": "lime",
    "intro": "Start with the big thrills, work around the park, and keep the evening for favorites.",
    "tip": "Express works once per ride and starts at 9 AM, not during early admission. Hagrid’s no longer takes Express, so ride it standby first thing. Save your evening for standby repeats.",
    "sections": [
      {
        "time": "6:30–8 AM · ~1½ HR",
        "name": "Beat the opening rush",
        "items": [
          {
            "id": "sun-breakfast",
            "title": "Breakfast: Cosmos Cafe at the hotel",
            "note": "Leave for the shuttle by 6:55.",
            "tag": "",
            "optional": false,
            "food": "meal",
            "est": "~20 min",
            "photo": "photos/hotel-cosmos.jpg",
            "photoAlt": "Cosmos Cafe dining room at Stella Nova",
            "booked": "6:30 AM",
            "bookedLabel": ""
          },
          {
            "id": "sun-gate",
            "locs": [[28.47225, -81.467594]],
            "title": "Arrive at the park entrance",
            "note": "Take the hotel shuttle. Bring your room keys and park tickets.",
            "tag": "GET READY",
            "optional": false,
            "est": "~30–45 min"
          },
          {
            "id": "sun-button",
            "title": "Ask for a birthday button",
            "description": "",
            "note": "Ask the Stella Nova front desk at Saturday check-in, or any shop later. Skip Guest Services before 8. It costs your Hagrid’s spot.",
            "tag": "BIRTHDAY MOMENT",
            "optional": true,
            "est": "~10 min"
          }
        ]
      },
      {
        "time": "8–9:30 AM · ~1½ HR · STANDBY",
        "name": "The big two",
        "items": [
          {
            "id": "sun-hagrid",
            "title": "Hagrid’s Motorbike Adventure",
            "note": "No Express on Hagrid’s, so ride it first at early admission when standby is shortest.",
            "tag": "",
            "optional": false,
            "kind": "ride",
            "photo": "photos/sun-hagrid.jpg",
            "photoAlt": "People riding Hagrid's Magical Creatures Motorbike Adventure.",
            "est": "~45–60 min",
            "noExpress": true,
            "lockers": true,
            "locs": [[28.47308, -81.472862]],
            "outdoor": true
          },
          {
            "id": "sun-veloci",
            "title": "Jurassic World VelociCoaster",
            "note": "Right after Hagrid’s, around 9 AM when Express starts. Standby 25 min or less? Ride standby and save Express for this afternoon. Longer? Use Express now.",
            "tag": "",
            "optional": false,
            "kind": "ride",
            "photo": "photos/sun-veloci.jpg",
            "photoAlt": "VelociCoaster",
            "est": "~15–25 min",
            "lockers": true,
            "locs": [[28.471429, -81.472284]],
            "outdoor": true
          }
        ]
      },
      {
        "time": "9:30–11:15 AM · ~1¾ HR",
        "name": "A little Hogwarts magic",
        "items": [
          {
            "id": "sun-forbidden",
            "title": "Harry Potter and the Forbidden Journey",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Robot-arm ride through Hogwarts.",
            "kind": "ride",
            "est": "~20 min",
            "express": true,
            "photo": "photos/sun-forbidden.jpg",
            "photoAlt": "Harry Potter and the Forbidden Journey",
            "lockers": true,
            "locs": [[28.472265, -81.4735195]]
          },
          {
            "id": "sun-frog-choir",
            "title": "Frog Choir",
            "description": "Students and giant frogs sing wizarding songs.",
            "note": "On the stage by the Hogwarts castle entrance, right as you leave Forbidden Journey. Check showtimes in the app.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.472635, -81.473392]],
            "outdoor": true
          },
          {
            "id": "sun-triwizard",
            "title": "Triwizard Spirit Rally",
            "description": "Acrobatics from the rival wizarding schools.",
            "note": "Same stage as the Frog Choir, usually alternating with it.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.4725985, -81.473455]],
            "outdoor": true
          },
          {
            "id": "sun-hippo",
            "title": "Flight of the Hippogriff",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Short, gentle family coaster.",
            "kind": "ride",
            "est": "~15 min",
            "express": true,
            "photo": "photos/sun-hippo.jpg",
            "photoAlt": "Flight of the Hippogriff",
            "locs": [[28.472416, -81.473636]],
            "outdoor": true
          },
          {
            "id": "sun-wand",
            "locs": [[28.472809, -81.473077]],
            "title": "Ollivanders wand-shop stop",
            "note": "",
            "tag": "",
            "optional": false,
            "photo": "photos/sun-wand.jpg",
            "photoAlt": "Family shopping at Ollivanders.",
            "est": "~20–30 min"
          }
        ]
      },
      {
        "time": "11:15 AM–12 PM · ~45 MIN",
        "name": "Lunch before the rush",
        "items": [
          {
            "id": "sun-lunch",
            "locs": [[28.471482, -81.472866]],
            "title": "Lunch: The Burger Digs",
            "note": "Upstairs in the Jurassic Park Discovery Center, on your way to Kong. Air-conditioned. Keep it light: Mythos is dinner.",
            "tag": "",
            "optional": false,
            "est": "~45 min",
            "food": "meal",
            "mobileOrder": true
          }
        ]
      },
      {
        "time": "12–2:15 PM · ~2¼ HR · EXPRESS",
        "name": "Jurassic Park → Skull Island → Toon Lagoon → Marvel",
        "items": [
          {
            "id": "sun-raptor",
            "title": "Raptor Encounter",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "est": "~20 min",
            "meet": true,
            "maybe": true,
            "locs": [[28.470963, -81.473359]]
          },
          {
            "id": "sun-kong",
            "title": "Skull Island: Reign of Kong",
            "note": "Next door to Jurassic Park. Walk straight here after lunch.",
            "tag": "",
            "optional": false,
            "kind": "ride",
            "photo": "photos/sun-kong.jpg",
            "photoAlt": "Woman posing with a frightened expression in front of Skull Island Reign of Kong.",
            "est": "~20 min",
            "express": true,
            "locs": [[28.469317, -81.473013]]
          },
          {
            "id": "sun-popeye",
            "title": "Popeye & Bluto’s Bilge-Rat Barges",
            "note": "Very wet! Do both water rides back to back so you only dry off once.",
            "tag": "WATER RIDE",
            "optional": true,
            "description": "Spinning raft ride. You will get soaked.",
            "kind": "ride",
            "photo": "photos/sun-popeye.jpg",
            "photoAlt": "A raft splashing through Popeye & Bluto’s Bilge-Rat Barges.",
            "est": "~20 min",
            "express": true,
            "maybe": true,
            "locs": [[28.470448, -81.471401]],
            "outdoor": true
          },
          {
            "id": "sun-ripsaw",
            "title": "Dudley Do-Right’s Ripsaw Falls",
            "note": "Right after Popeye’s. You may get soaked.",
            "tag": "WATER RIDE",
            "optional": true,
            "description": "Log flume with a big, wet drop.",
            "kind": "ride",
            "photo": "photos/sun-ripsaw.jpg",
            "photoAlt": "People riding Dudley Do-Right’s RipSaw Falls. ",
            "est": "~20 min",
            "express": true,
            "maybe": true,
            "locs": [[28.4695018, -81.4714998]],
            "outdoor": true
          },
          {
            "id": "sun-doom",
            "title": "Doctor Doom’s Fearfall",
            "note": "The first ride you reach in Marvel coming from Toon Lagoon.",
            "tag": "",
            "optional": true,
            "description": "Launch tower that shoots you skyward.",
            "kind": "ride",
            "est": "~15 min",
            "express": true,
            "maybe": true,
            "photo": "photos/sun-doom.jpg",
            "photoAlt": "Doctor Doom's Fearfall",
            "locs": [[28.470678, -81.469502]],
            "outdoor": true
          },
          {
            "id": "sun-spider",
            "title": "The Amazing Adventures of Spider-Man",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "3-D dark ride with Spider-Man.",
            "kind": "ride",
            "est": "~20 min",
            "express": true,
            "photo": "photos/sun-spider.jpg",
            "photoAlt": "Spider-Man outside The Amazing Adventures of Spider-Man",
            "locs": [[28.4705456, -81.469852]]
          },
          {
            "id": "sun-marvel-meet",
            "title": "Marvel Super Heroes",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.470814, -81.46975]]
          },
          {
            "id": "sun-hulk",
            "title": "The Incredible Hulk Coaster",
            "tag": "",
            "optional": false,
            "description": "Launch coaster packed with loops.",
            "kind": "ride",
            "photo": "photos/sun-hulk.jpg",
            "photoAlt": "The Incredible Hulk Coaster at sunset.",
            "est": "~20 min",
            "express": true,
            "lockers": true,
            "locs": [[28.471195, -81.468946]],
            "outdoor": true
          }
        ]
      },
      {
        "time": "2:15–3:45 PM · ~1½ HR · EXPRESS",
        "name": "Marvel → Seuss Landing, if time",
        "items": [
          {
            "id": "sun-storm",
            "title": "Storm Force Accelatron",
            "description": "Spinning teacup-style ride.",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "ride",
            "est": "~10 min",
            "express": true,
            "maybe": true,
            "photo": "photos/sun-storm.jpg",
            "photoAlt": "Storm Force Accelatron",
            "locs": [[28.471007, -81.468794]],
            "outdoor": true
          },
          {
            "id": "sun-cat",
            "title": "The Cat in the Hat",
            "description": "Storybook dark ride.",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "ride",
            "photo": "photos/sun-cat.jpg",
            "photoAlt": "Family riding The Cat in the Hat.",
            "est": "~15 min",
            "express": true,
            "maybe": true,
            "locs": [[28.472969, -81.46928]]
          },
          {
            "id": "sun-fish",
            "title": "One Fish, Two Fish, Red Fish, Blue Fish",
            "description": "Steer your fish to dodge water jets.",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "ride",
            "photo": "photos/sun-fish.jpg",
            "photoAlt": "OneFishTwoFish",
            "est": "~10 min",
            "express": true,
            "maybe": true,
            "locs": [[28.473197, -81.469351]],
            "outdoor": true
          },
          {
            "id": "sun-caro",
            "title": "Caro-Seuss-el",
            "description": "Carousel of Seuss creatures.",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "ride",
            "est": "~10 min",
            "express": true,
            "maybe": true,
            "photo": "photos/sun-caro.jpg",
            "photoAlt": "Caro-Seuss-el",
            "locs": [[28.472913, -81.469544]]
          },
          {
            "id": "sun-trolley",
            "title": "The High in the Sky Seuss Trolley Train Ride!",
            "description": "Gentle elevated train over Seuss Landing.",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "ride",
            "photo": "photos/sun-trolley.jpg",
            "photoAlt": "SeussTrolleyRIde",
            "est": "~15 min",
            "express": true,
            "maybe": true,
            "locs": [[28.473011, -81.470178]],
            "outdoor": true
          },
          {
            "id": "sun-tots",
            "locs": [[28.472545, -81.469835]],
            "title": "Green Eggs and Ham Cafe: loaded tots",
            "description": "",
            "note": "A savory snack in Seuss Landing—try Green Eggs and Ham tots or choose a topping from the current menu. Easy to share.",
            "tag": "",
            "optional": true,
            "est": "~15 min",
            "food": "snack"
          }
        ]
      },
      {
        "time": "3:45–5:30 PM · FREE TIME",
        "name": "Birthday girl’s choice",
        "items": [
          {
            "id": "sun-veloci-2",
            "title": "Optional: second VelociCoaster lap",
            "note": "Only if you saved your Express this morning. Mid-afternoon is when standby is longest, so Express saves the most time then.",
            "tag": "OPTIONAL",
            "optional": true,
            "kind": "ride",
            "est": "~15 min",
            "express": true,
            "photo": "photos/sun-veloci.jpg",
            "photoAlt": "VelociCoaster",
            "lockers": true,
            "locs": [[28.471429, -81.472284]],
            "outdoor": true
          },
          {
            "id": "sun-repeat",
            "title": "Pick a favorite to ride again",
            "note": "Re-ride favourites standby or take a pool break at the hotel. Head to Mythos by about 5:20.",
            "tag": "YOUR CHOICE",
            "optional": false,
            "est": "~1½ hr"
          }
        ]
      },
      {
        "time": "5:30 PM · BOOKED · ~1¼ HR",
        "name": "Dinner at Mythos",
        "items": [
          {
            "id": "sun-dinner",
            "locs": [[28.472533, -81.4714996]],
            "title": "Dinner: Mythos",
            "note": "Sit-down dining in a rock grotto overlooking the lagoon, between Seuss Landing and Hogsmeade. It closes in 2027, so this may be your last chance.",
            "tag": "",
            "optional": false,
            "est": "~1¼ hr",
            "food": "meal",
            "booked": "5:30 PM",
            "photo": "photos/sun-dinner.jpg",
            "photoAlt": "Family dining at Mythos"
          }
        ]
      },
      {
        "time": "6:45–8 PM · ~1 HR",
        "name": "Hogsmeade at dusk",
        "items": [
          {
            "id": "sun-last",
            "title": "Last ride: Hagrid’s or VelociCoaster",
            "note": "Hagrid’s is about 5 minutes from Mythos. Evening standby is often shorter. Get in line before 8 PM and they’ll let you ride.",
            "tag": "YOUR CHOICE",
            "optional": true,
            "kind": "ride",
            "est": "~45 min",
            "photo": "photos/sun-hagrid.jpg",
            "photoAlt": "People riding Hagrid's Magical Creatures Motorbike Adventure.",
            "lockers": true,
            "locs": [[28.47308, -81.472862], [28.471429, -81.472284]],
            "outdoor": true
          },
          {
            "id": "sun-spells",
            "title": "Try your first Hogsmeade spells",
            "note": "Save most for tonight. Hogsmeade is prettier at dusk.",
            "tag": "",
            "optional": true,
            "est": "~20 min"
          },
          {
            "id": "sun-butterbeer",
            "locs": [[28.472888, -81.472737]],
            "title": "Must-try: frozen Butterbeer",
            "note": "",
            "tag": "",
            "optional": true,
            "photo": "photos/sun-butterbeer.jpg",
            "photoAlt": "A father and son sipping Butterbeer in Diagon Alley in Universal Studios Florida",
            "est": "~15 min",
            "food": "snack"
          },
          {
            "id": "sun-frog",
            "title": "Honeydukes",
            "description": "",
            "note": "",
            "tag": "",
            "optional": true,
            "est": "~10 min",
            "food": "snack"
          },
          {
            "id": "sun-dark-arts",
            "title": "Hogwarts Dark Arts",
            "description": "Spooky light show projected onto the castle.",
            "note": "Runs after dark on select nights in October, from about 7:30 PM. Check the app that day. Watch from the Hogsmeade path in front of the castle.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~15 min",
            "photo": "photos/sun-dark-arts.jpg",
            "photoAlt": "Hogwarts Castle lit up for Dark Arts",
            "locs": [[28.47231, -81.47375]],
            "outdoor": true
          }
        ]
      }
    ],
    "alert": "Jurassic Park River Adventure is scheduled closed through November 19, 2026. Studios closes at 5 PM today for Halloween Horror Nights; this plan stays at Islands.",
    "tabHours": [
      "8 AM–8 PM"
    ],
    "logos": [
      {
        "src": "logos/islands.png",
        "alt": "Universal Islands of Adventure logo"
      }
    ]
  },
  {
    "id": "tue",
    "date": "2026-10-05",
    "short": "MON",
    "day": "05",
    "month": "OCT",
    "name": "Epic Universe",
    "kicker": "Five worlds. One epic day.",
    "hours": "10 AM – 8 PM",
    "early": "9 AM",
    "color": "blue",
    "intro": "One loop around the worlds: Ministry of Magic, Stardust Racers in Celestial Park, Dark Universe, Super Nintendo World, then Isle of Berk. Every big outdoor coaster is done by about 2 PM, and the rainier afternoon is spent indoors back at Ministry of Magic.",
    "tip": "Express works once per ride at Epic and covers every ride except Dragon Racer’s Rally. It doesn’t work during early admission, so Battle at the Ministry is standby first thing.",
    "sections": [
      {
        "time": "7:30–9 AM · ~1½ HR",
        "name": "Ready for a new universe",
        "items": [
          {
            "id": "tue-breakfast",
            "title": "Breakfast: Cosmos Cafe at the hotel",
            "note": "Leave for the shuttle by 7:55.",
            "tag": "",
            "optional": false,
            "food": "meal",
            "est": "~20 min",
            "photo": "photos/hotel-cosmos.jpg",
            "photoAlt": "Cosmos Cafe dining room at Stella Nova",
            "booked": "7:30 AM",
            "bookedLabel": ""
          },
          {
            "id": "tue-gate",
            "locs": [[28.4386, -81.4467]],
            "title": "Arrive at the park entrance",
            "note": "Bring hotel room keys for early admission.",
            "tag": "GET READY",
            "optional": false,
            "est": "~30–45 min"
          }
        ]
      },
      {
        "time": "9–10 AM · ~1 HR · STANDBY",
        "name": "Ministry of Magic first",
        "items": [
          {
            "id": "tue-ministry",
            "title": "Harry Potter and the Battle at the Ministry",
            "note": "Ride standby at early admission. Your Express entry still works later, so you can ride twice.",
            "tag": "",
            "optional": false,
            "description": "Epic Harry Potter dark ride.",
            "kind": "ride",
            "photo": "photos/tue-ministry.jpg",
            "photoAlt": "The interior of Battle at the Ministry at Epic Universe",
            "est": "~45–60 min",
            "locs": [[28.4429, -81.44809]]
          }
        ]
      },
      {
        "time": "10–10:30 AM · ~30 MIN · EXPRESS",
        "name": "Celestial Park: Stardust Racers first",
        "items": [
          {
            "id": "tue-stardust",
            "title": "Stardust Racers",
            "tag": "",
            "optional": false,
            "description": "Dueling launch coaster.",
            "kind": "ride",
            "photo": "photos/tue-stardust.jpg",
            "photoAlt": "Guests smile as they ride Stardust Racers in Celestial Park",
            "est": "~20 min",
            "express": true,
            "lockers": true,
            "locs": [[28.441622, -81.447095]],
            "outdoor": true
          },
          {
            "id": "tue-carousel",
            "title": "Optional: Constellation Carousel",
            "note": "",
            "tag": "OPTIONAL",
            "optional": true,
            "description": "Starry spinning carousel.",
            "kind": "ride",
            "photo": "photos/tue-carousel.jpg",
            "photoAlt": "Constellation Carousel in Celestial Park at Epic Universe",
            "est": "~10 min",
            "express": true,
            "locs": [[28.44033, -81.44805]]
          }
        ]
      },
      {
        "time": "10:30–11:15 AM · ~45 MIN · EXPRESS",
        "name": "Dark Universe while it’s dry",
        "items": [
          {
            "id": "tue-werewolf",
            "title": "Curse of the Werewolf",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Spinning family coaster.",
            "kind": "ride",
            "photo": "photos/tue-werewolf.jpg",
            "photoAlt": "Two people laughing and riding Curse of the Werewolf at Universal Epic Universe.",
            "est": "~15 min",
            "express": true,
            "locs": [[28.43995, -81.45002]],
            "outdoor": true
          },
          {
            "id": "tue-monsters",
            "title": "Monsters Unchained: The Frankenstein Experiment",
            "note": "Right next to Werewolf. You’ll ride it again after dinner.",
            "tag": "",
            "optional": false,
            "description": "Intense robot-arm ride with monsters.",
            "kind": "ride",
            "photo": "photos/tue-monsters.jpg",
            "photoAlt": "Monsters Unchained: The Frankenstein Experiment in Dark Universe at Epic Universe",
            "est": "~20 min",
            "express": true,
            "lockers": true,
            "locs": [[28.44035, -81.45029]]
          },
          {
            "id": "tue-frank",
            "title": "Frankenstein’s Monster & the Bride",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.4405, -81.44982]]
          },
          {
            "id": "tue-pretzel",
            "locs": [[28.44013, -81.45054]],
            "title": "Dark Universe: Frankenstein pretzel",
            "description": "",
            "note": "De Lacey’s Cottage. Skip it if you’re saving room for lunch.",
            "tag": "",
            "optional": true,
            "photo": "photos/tue-pretzel.jpg",
            "photoAlt": "Frankenstein pretzel from De Lacy's Cottage.",
            "est": "~10 min",
            "food": "snack"
          }
        ]
      },
      {
        "time": "11:15 AM–1:15 PM · ~2 HR · EXPRESS",
        "name": "Super Nintendo World & lunch",
        "items": [
          {
            "id": "tue-powerup",
            "title": "Power-Up Band",
            "note": "Plays the Nintendo World games and tracks Mario Kart scores. About $40 at the Super Nintendo World Store in CityWalk (by Toothsome) or here in the land.",
            "tag": "",
            "optional": true,
            "est": "~10 min",
            "maybe": true
          },
          {
            "id": "tue-mine",
            "title": "Mine-Cart Madness",
            "tag": "",
            "optional": false,
            "description": "Coaster that seems to jump broken track.",
            "kind": "ride",
            "photo": "photos/tue-mine.jpg",
            "photoAlt": "A family riding Mine-Cart Madness in SUPER NINTENDO WORLD",
            "est": "~25 min",
            "express": true,
            "locs": [[28.438084, -81.448769]],
            "outdoor": true
          },
          {
            "id": "tue-yoshi",
            "title": "Yoshi’s Adventure",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Gentle ride on Yoshi’s back.",
            "kind": "ride",
            "est": "~15 min",
            "express": true,
            "photo": "photos/tue-yoshi.jpg",
            "photoAlt": "Yoshi's Adventure",
            "locs": [[28.43904, -81.44817]],
            "outdoor": true
          },
          {
            "id": "tue-mario",
            "title": "Mario Kart: Bowser’s Challenge",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Mario Kart with AR goggles.",
            "kind": "ride",
            "photo": "photos/tue-mario.jpg",
            "photoAlt": "Two girls smile and ride Mario Kart: Bowser's Challenge in SUPER NINTENDO WORLD at Epic Universe",
            "est": "~20 min",
            "express": true,
            "locs": [[28.43875, -81.44783]]
          },
          {
            "id": "tue-lunch",
            "locs": [[28.43909, -81.447962]],
            "title": "Lunch: Toadstool Cafe",
            "note": "No reservations or waitlist. Grab a table, scan the QR code and order in the app. Aim for about 12, after Mine-Cart and Yoshi’s.",
            "tag": "",
            "optional": false,
            "photo": "photos/tue-lunch.jpg",
            "photoAlt": "The interior of Toadstool Cafe in SUPER NINTENDO WORLD",
            "est": "~1 hr",
            "food": "meal",
            "mobileOrder": true
          },
          {
            "id": "tue-mario-meet",
            "title": "Mario, Luigi & Toad",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~20 min",
            "maybe": true,
            "locs": [[28.43913, -81.44807]]
          },
          {
            "id": "tue-peach",
            "title": "Princess Peach",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15–20 min",
            "maybe": true,
            "locs": [[28.439343, -81.447997]]
          },
          {
            "id": "tue-dk",
            "title": "Donkey Kong",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.43844, -81.44873]]
          }
        ]
      },
      {
        "time": "1:15–3 PM · ~1¾ HR",
        "name": "Isle of Berk",
        "items": [
          {
            "id": "tue-hiccup",
            "title": "Hiccup’s Wing Gliders",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Family launch coaster over Berk.",
            "kind": "ride",
            "photo": "photos/tue-hiccup.jpg",
            "photoAlt": "Guests riding Hiccup's Wing Gliders in Epic Universe",
            "est": "~15 min",
            "express": true,
            "locs": [[28.44114, -81.44518]],
            "outdoor": true
          },
          {
            "id": "tue-rally",
            "title": "Dragon Racer’s Rally",
            "note": "The only Epic ride without Express, so this one is standby.",
            "tag": "",
            "optional": false,
            "description": "Spinning flyer you can barrel-roll.",
            "kind": "ride",
            "photo": "photos/tue-rally.jpg",
            "photoAlt": "Dragon Racers Rally in Epic Universe",
            "est": "~25 min",
            "noExpress": true,
            "locs": [[28.44122, -81.44549]],
            "outdoor": true
          },
          {
            "id": "tue-fyre",
            "title": "Fyre Drill",
            "note": "",
            "tag": "",
            "optional": true,
            "description": "Boat ride with water cannons.",
            "kind": "ride",
            "photo": "photos/tue-fyre.jpg",
            "photoAlt": "Fyre Drill in Epic Universe",
            "est": "~10 min",
            "express": true,
            "maybe": true,
            "locs": [[28.44061, -81.44545]],
            "outdoor": true
          },
          {
            "id": "tue-toothless",
            "title": "Hiccup, Astrid & Toothless",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15–20 min",
            "maybe": true,
            "locs": [[28.44, -81.44511]]
          },
          {
            "id": "tue-cone",
            "locs": [[28.44116, -81.44579]],
            "title": "Berk: a mac-and-cheese cone",
            "description": "",
            "note": "Hooligan’s Grog & Gruel. A shared afternoon snack.",
            "tag": "",
            "optional": true,
            "photo": "photos/tue-cone.jpg",
            "photoAlt": "Mac and Cheese cones from Hooligan's Grog and Gruel at Epic Universe",
            "est": "~10 min",
            "food": "snack",
            "mobileOrder": true
          },
          {
            "id": "tue-dragon",
            "title": "The Untrainable Dragon",
            "description": "Stage show with a giant flying dragon.",
            "note": "Pick a showtime around 2–2:30 PM. If none fits, skip it.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~40 min",
            "express": true,
            "locs": [[28.44004, -81.44463]]
          }
        ]
      },
      {
        "time": "3–5:30 PM · FREE TIME",
        "name": "Ministry of Magic: indoors for the rainy afternoon",
        "items": [
          {
            "id": "tue-cirque",
            "title": "Le Cirque Arcanus",
            "description": "Magical circus with Fantastic Beasts puppets.",
            "note": "In Ministry of Magic, right next to Dark Universe. Check showtimes in the app.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~40 min",
            "express": true,
            "photo": "photos/tue-cirque.jpg",
            "photoAlt": "An aerialist at Le Cirque Arcanus",
            "locs": [[28.44284, -81.44758]]
          },
          {
            "id": "tue-repeat",
            "title": "Optional: ride Battle at the Ministry again",
            "note": "Use your Express entry, or pick another favourite. Waits for Ministry often drop late in the day.",
            "tag": "YOUR CHOICE",
            "optional": true,
            "kind": "ride",
            "est": "~30–45 min",
            "photo": "photos/tue-ministry.jpg",
            "photoAlt": "The interior of Battle at the Ministry at Epic Universe",
            "locs": [[28.4429, -81.44809]]
          },
          {
            "id": "tue-wand",
            "title": "Wizarding Paris & Cosme Acajor",
            "description": "",
            "note": "Browse the Parisian wand shop and try compatible interactive spell locations with your wand.",
            "tag": "WAND TIME",
            "optional": true,
            "photo": "photos/tue-wand.jpg",
            "photoAlt": "The exterior of Cosme Acajor Baguettes Magique in Epic Universe",
            "est": "~20 min"
          }
        ]
      },
      {
        "time": "5:30–6:30 PM · ~1 HR",
        "name": "Birthday dinner in Dark Universe",
        "items": [
          {
            "id": "tue-dinner",
            "locs": [[28.44071, -81.44992]],
            "title": "Birthday dinner: Das Stakehaus",
            "note": "Vampire-themed steakhouse in Dark Universe. Grab a table and order by QR code or mobile order in the app. Aim for about 5:30–6 PM.",
            "tag": "BIRTHDAY MOMENT",
            "optional": false,
            "description": "Candlelit vampire steakhouse.",
            "est": "~1 hr",
            "food": "meal",
            "photo": "photos/tue-dinner.jpg",
            "photoAlt": "Inside Das Stakehaus",
            "mobileOrder": true
          }
        ]
      },
      {
        "time": "6:30–8 PM · ~1½ HR",
        "name": "Epic after dark",
        "items": [
          {
            "id": "tue-monsters-night",
            "title": "Monsters Unchained, round two",
            "note": "Right next door to Das Stakehaus.",
            "tag": "YOUR CHOICE",
            "optional": true,
            "kind": "ride",
            "photo": "photos/tue-monsters.jpg",
            "photoAlt": "Monsters Unchained: The Frankenstein Experiment in Dark Universe at Epic Universe",
            "est": "~20–40 min",
            "lockers": true,
            "locs": [[28.44035, -81.45029]]
          },
          {
            "id": "tue-stardust-night",
            "title": "Stardust Racers in the dark",
            "note": "Celestial Park is lit up at night.",
            "tag": "YOUR CHOICE",
            "optional": true,
            "kind": "ride",
            "photo": "photos/tue-stardust.jpg",
            "photoAlt": "Guests smile as they ride Stardust Racers in Celestial Park",
            "est": "~20–40 min",
            "lockers": true,
            "locs": [[28.441622, -81.447095]],
            "outdoor": true
          }
        ]
      }
    ],
    "alert": "All times are flexible targets; ride availability and Express participation can change.",
    "tabHours": [
      "9 AM–8 PM"
    ],
    "logos": [
      {
        "src": "logos/epic.png",
        "alt": "Universal Epic Universe logo"
      }
    ]
  },
  {
    "id": "mon",
    "date": "2026-10-06",
    "short": "TUE",
    "day": "06",
    "month": "OCT",
    "name": "Islands → Studios",
    "kicker": "One more coaster. Then movie magic.",
    "hours": "Studios 10 AM – 7 PM",
    "early": "8 AM",
    "color": "coral",
    "intro": "Start with VelociCoaster, then take the Hogwarts Express to Studios once it is operating.",
    "tip": "Express works once per ride and starts at park opening, not early admission. Your Tuesday pass covers Islands too, so ride VelociCoaster standby at 8 AM, then again with Express after 9.",
    "sections": [
      {
        "time": "6:45–8 AM · ~1¼ HR",
        "name": "Back to Islands bright & early",
        "items": [
          {
            "id": "mon-coffee",
            "title": "Coffee: Cosmos Cafe at the hotel",
            "note": "Starbucks coffee to go from the coffee counter. Breakfast is later at Three Broomsticks, after VelociCoaster. Leave for the shuttle by 6:55.",
            "tag": "",
            "optional": false,
            "food": "coffee",
            "est": "~10 min",
            "booked": "6:45 AM",
            "bookedLabel": "",
            "photo": "photos/hotel-cosmos.jpg",
            "photoAlt": "Cosmos Cafe dining room at Stella Nova"
          },
          {
            "id": "mon-gate",
            "locs": [[28.47225, -81.467594]],
            "title": "Arrive at Islands of Adventure",
            "note": "Confirm the first hotel shuttle the night before. Bring your room keys and Park-to-Park tickets.",
            "tag": "GET READY",
            "optional": false,
            "est": "~30–45 min"
          }
        ]
      },
      {
        "time": "8–8:40 AM · ~40 MIN · STANDBY",
        "name": "VelociCoaster, again!",
        "items": [
          {
            "id": "mon-veloci",
            "title": "Jurassic World VelociCoaster",
            "note": "Head straight here if it is operating during early admission. Check the official app that morning.",
            "tag": "",
            "optional": false,
            "kind": "ride",
            "photo": "photos/sun-veloci.jpg",
            "photoAlt": "VelociCoaster",
            "est": "~30–45 min",
            "lockers": true,
            "locs": [[28.471429, -81.472284]],
            "outdoor": true
          }
        ]
      },
      {
        "time": "8:40–9:15 AM · ~35 MIN",
        "name": "Breakfast between laps",
        "items": [
          {
            "id": "mon-breakfast",
            "locs": [[28.472888, -81.472737]],
            "title": "Breakfast: Three Broomsticks",
            "note": "Opens at early admission, a short walk from VelociCoaster. Express doesn’t start until 9, so eat now.",
            "tag": "",
            "optional": false,
            "est": "~30 min",
            "food": "meal",
            "photo": "photos/mon-breakfast.jpg",
            "photoAlt": "Family eating at Three Broomsticks",
            "mobileOrder": true
          }
        ]
      },
      {
        "time": "9:15–9:45 AM · ~30 MIN · EXPRESS",
        "name": "VelociCoaster, round two",
        "items": [
          {
            "id": "mon-veloci-repeat",
            "title": "Second VelociCoaster lap",
            "note": "Use Express, which starts at 9 AM.",
            "tag": "",
            "optional": false,
            "description": "Round two!",
            "kind": "ride",
            "photo": "photos/sun-veloci.jpg",
            "photoAlt": "VelociCoaster",
            "est": "~15 min",
            "express": true,
            "lockers": true,
            "locs": [[28.471429, -81.472284]],
            "outdoor": true
          }
        ]
      },
      {
        "time": "~10–10:45 AM · ~45 MIN",
        "name": "All aboard for Studios",
        "items": [
          {
            "id": "mon-train-to-studios",
            "title": "Hogwarts Express to Universal Studios",
            "note": "Travel from Hogsmeade to King’s Cross. Do not count on boarding before Studios opens at 10 AM; the exact train start time is unconfirmed.",
            "tag": "PARK HOP",
            "optional": false,
            "kind": "ride",
            "photo": "photos/mon-train-to-studios.jpg",
            "photoAlt": "Hogwarts Express Train",
            "est": "~30–45 min",
            "express": true,
            "locs": [[28.473354, -81.472466]]
          }
        ]
      },
      {
        "time": "10:45–11:45 AM · ~1 HR",
        "name": "Diagon Alley",
        "items": [
          {
            "id": "mon-gringotts",
            "title": "Harry Potter and the Escape from Gringotts",
            "note": "From King’s Cross, head into Diagon Alley.",
            "tag": "",
            "optional": false,
            "description": "Coaster and 3-D ride under the wizard bank.",
            "kind": "ride",
            "photo": "photos/mon-gringotts.jpg",
            "photoAlt": "Harry Potter and the Escape from Gringotts",
            "est": "~20 min",
            "express": true,
            "locs": [[28.479719, -81.469922]]
          },
          {
            "id": "mon-celestina",
            "title": "Celestina Warbeck and the Banshees",
            "description": "Jazzy wizarding diva and her band.",
            "note": "Carkitt Market stage in Diagon Alley. Check showtimes in the app.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.479902, -81.469456]]
          },
          {
            "id": "mon-beedle",
            "title": "Tales of Beedle the Bard",
            "description": "Wizarding fairy tales with puppets.",
            "note": "Same stage as Celestina, alternating with it.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.479921, -81.469499]]
          },
          {
            "id": "mon-diagon",
            "locs": [[28.47964, -81.46973]],
            "title": "Explore Diagon Alley",
            "note": "",
            "tag": "",
            "optional": false,
            "est": "~20 min"
          },
          {
            "id": "mon-dragon",
            "locs": [[28.479719, -81.469922]],
            "title": "Watch the Gringotts dragon breathe fire",
            "note": "Every 10–20 minutes, on top of the bank.",
            "tag": "",
            "optional": true,
            "est": "~5 min"
          },
          {
            "id": "mon-knockturn",
            "title": "Walk Knockturn Alley",
            "note": "The dark side street off Diagon Alley.",
            "tag": "",
            "optional": true,
            "est": "~10 min"
          },
          {
            "id": "mon-death-eaters",
            "title": "Death Eaters in Diagon Alley",
            "note": "Select days through Nov 1. Check the app.",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~10 min",
            "maybe": true,
            "locs": [[28.479579, -81.469605]]
          }
        ]
      },
      {
        "time": "11:45 AM–12:30 PM · ~45 MIN",
        "name": "Lunch in Diagon Alley",
        "items": [
          {
            "id": "mon-lunch",
            "locs": [[28.479469, -81.469505]],
            "title": "Lunch: Leaky Cauldron",
            "note": "You’ll be in Diagon Alley right at lunchtime, so eat here. Running late? Louie’s Italian in New York is next on your route.",
            "tag": "",
            "optional": false,
            "est": "~45 min",
            "food": "meal",
            "photo": "photos/mon-lunch.jpg",
            "photoAlt": "Inside the Leaky Cauldron",
            "mobileOrder": true
          },
          {
            "id": "mon-icecream",
            "locs": [[28.479613, -81.469838]],
            "title": "Florean Fortescue’s ice-cream break",
            "description": "",
            "note": "Florean Fortescue’s is right by Leaky Cauldron. Butterbeer soft serve is the classic pick.",
            "tag": "",
            "optional": true,
            "est": "~15 min",
            "food": "snack",
            "photo": "photos/mon-icecream.jpg",
            "photoAlt": "Butterbeer soft serve at Florean Fortescue's"
          }
        ]
      },
      {
        "time": "12:30–2 PM · ~1½ HR · EXPRESS",
        "name": "London → New York → Minion Land",
        "items": [
          {
            "id": "mon-knightbus",
            "title": "Knight Bus conductor & Shrunken Head",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~10 min",
            "maybe": true,
            "locs": [[28.479407, -81.469107]]
          },
          {
            "id": "mon-mummy",
            "title": "Revenge of the Mummy",
            "note": "Top priority, so it’s first after lunch. From Diagon Alley, walk through San Francisco into New York; it’s about 5 minutes.",
            "tag": "",
            "optional": false,
            "kind": "ride",
            "photo": "photos/mon-mummy.jpg",
            "photoAlt": "Revenge of the Mummy",
            "est": "~20 min",
            "express": true,
            "locs": [[28.4766, -81.46954]]
          },
          {
            "id": "mon-fallon",
            "title": "Race Through New York Starring Jimmy Fallon",
            "description": "3-D race through New York.",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "ride",
            "photo": "photos/mon-fallon.jpg",
            "photoAlt": "Race Through New York Starring Jimmy Fallon",
            "est": "~15 min",
            "express": true,
            "maybe": true,
            "locs": [[28.475881, -81.469363]]
          },
          {
            "id": "mon-transformers",
            "title": "TRANSFORMERS: The Ride-3D",
            "note": "In Production Central, between New York and Minion Land.",
            "tag": "",
            "optional": false,
            "description": "3-D battle ride with giant robots.",
            "kind": "ride",
            "photo": "photos/mon-transformers.jpg",
            "photoAlt": "Jets fly through the sky above Transformers The Ride in Universal Studios Florida",
            "est": "~15 min",
            "express": true,
            "locs": [[28.47669, -81.46856]]
          },
          {
            "id": "mon-optimus",
            "title": "Optimus Prime, Bumblebee or Megatron",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.476183, -81.468079]]
          },
          {
            "id": "mon-minions",
            "title": "Despicable Me Minion Mayhem",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Motion simulator with Gru and the Minions.",
            "kind": "ride",
            "est": "~15 min",
            "express": true,
            "photo": "photos/mon-minions.jpg",
            "photoAlt": "Despicable Me Minion Mayhem",
            "locs": [[28.475428, -81.467926]]
          },
          {
            "id": "mon-minion-meet",
            "title": "Minions",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15 min",
            "maybe": true
          },
          {
            "id": "mon-villain",
            "title": "Illumination’s Villain-Con Minion Blast",
            "description": "Moving-walkway blaster game.",
            "note": "",
            "tag": "IF TIME",
            "optional": true,
            "kind": "ride",
            "photo": "photos/mon-villain.jpg",
            "photoAlt": "Illumination’s Villain-Con Minion Blast",
            "est": "~15 min",
            "express": true,
            "locs": [[28.475647, -81.467967]]
          }
        ]
      },
      {
        "time": "2–4 PM · ~2 HR · EXPRESS",
        "name": "Hollywood → E.T. → DreamWorks → Springfield",
        "items": [
          {
            "id": "mon-bourne",
            "title": "The Bourne Stuntacular",
            "description": "Live stunts with giant screens.",
            "note": "In Hollywood, just past Minion Land. Arrive 10–15 minutes early.",
            "tag": "",
            "optional": true,
            "kind": "show",
            "show": true,
            "est": "~40 min",
            "express": true,
            "photo": "photos/mon-bourne.jpg",
            "photoAlt": "The Bourne Stuntacular theater",
            "locs": [[28.475976, -81.466979]]
          },
          {
            "id": "mon-et",
            "title": "E.T. Adventure",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Flying bike ride to E.T.’s planet.",
            "kind": "ride",
            "photo": "photos/mon-et.jpg",
            "photoAlt": "Guests smile and point on ET Adventure in Universal Studios Florida",
            "est": "~15 min",
            "express": true,
            "locs": [[28.4779505, -81.4670917]]
          },
          {
            "id": "mon-trolls",
            "title": "Trolls Trollercoaster",
            "description": "Short family coaster.",
            "note": "",
            "tag": "IF TIME",
            "optional": true,
            "kind": "ride",
            "photo": "photos/mon-trolls.jpg",
            "photoAlt": "A father and son riding Trolls Trollercoaster in DreamWorks Land",
            "est": "~10 min",
            "express": true,
            "locs": [[28.4785148, -81.4663856]],
            "outdoor": true
          },
          {
            "id": "mon-shrek",
            "title": "Shrek, Fiona & Donkey",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "meet",
            "meet": true,
            "est": "~15 min",
            "maybe": true,
            "locs": [[28.4781559, -81.4669]]
          },
          {
            "id": "mon-shrekzel",
            "locs": [[28.4781786, -81.4670725]],
            "title": "Shrekzel",
            "description": "",
            "note": "The ogre-shaped pretzel at Swamp Snacks in DreamWorks Land makes a fun shared bite.",
            "tag": "",
            "optional": true,
            "photo": "photos/mon-shrekzel.jpg",
            "photoAlt": "A Shrekzel from Swamp Snacks",
            "est": "~10 min",
            "food": "snack"
          },
          {
            "id": "mon-kang",
            "title": "Kang & Kodos’ Twirl ’n’ Hurl",
            "description": "Gentle spinning saucers.",
            "note": "",
            "tag": "",
            "optional": true,
            "kind": "ride",
            "photo": "photos/mon-kang.jpg",
            "photoAlt": "Guests spin past on Kang and Kodos' Twirl 'n' Hurl in Universal Studios Florida",
            "est": "~10 min",
            "express": true,
            "maybe": true,
            "locs": [[28.479352, -81.467877]],
            "outdoor": true
          },
          {
            "id": "mon-donut",
            "locs": [[28.47869, -81.46814]],
            "title": "Lard Lad: share the giant Big Pink donut",
            "description": "",
            "note": "",
            "tag": "",
            "optional": true,
            "photo": "photos/mon-donut.jpg",
            "photoAlt": "Enjoy a giant pink donut in Springfield at Universal Studios Florida.",
            "est": "~10 min",
            "food": "snack"
          },
          {
            "id": "mon-simpsons",
            "title": "The Simpsons Ride",
            "note": "",
            "tag": "",
            "optional": false,
            "description": "Simulator ride with the Simpsons.",
            "kind": "ride",
            "est": "~15 min",
            "express": true,
            "photo": "photos/mon-simpsons.jpg",
            "photoAlt": "The Simpsons Ride",
            "locs": [[28.479604, -81.467788]]
          },
          {
            "id": "mon-mib",
            "title": "MEN IN BLACK Alien Attack",
            "note": "Last stop, right next to London if you want the train back to Islands.",
            "tag": "",
            "optional": false,
            "description": "Spinning shooter ride. Compete for points.",
            "kind": "ride",
            "photo": "photos/mon-mib.jpg",
            "photoAlt": "A group of guests riding Men in Black: Alien Attack in Universal Studios Florida",
            "est": "~15 min",
            "express": true,
            "locs": [[28.480441, -81.468043]]
          }
        ]
      },
      {
        "time": "4–7 PM · FREE TIME",
        "name": "Choose your finish",
        "items": [
          {
            "id": "mon-train",
            "title": "Optional: Hogwarts Express back to Islands",
            "note": "Only if you’ll be out of Islands by about 7:55. Walking from Islands to Toothsome takes about 15 minutes, and your reservation is at 8:15.",
            "tag": "OPTIONAL",
            "optional": true,
            "kind": "ride",
            "photo": "photos/mon-train-to-studios.jpg",
            "photoAlt": "Hogwarts Express Train",
            "est": "~30–45 min",
            "express": true,
            "locs": [[28.479079, -81.46944]]
          }
        ]
      },
      {
        "time": "8:15 PM · BOOKED · ~1½ HR",
        "name": "Make a birthday night of it",
        "items": [
          {
            "id": "mon-dinner",
            "title": "Birthday dinner: Toothsome Chocolate Emporium",
            "note": "Toothsome is at the Studios end of CityWalk, about a 10–15 minute walk from the back of the park. Leave by about 7:55.",
            "tag": "BIRTHDAY MOMENT",
            "optional": false,
            "est": "~1–1½ hr",
            "food": "meal",
            "booked": "8:15 PM",
            "photo": "photos/mon-dinner.jpg",
            "photoAlt": "A Toothsome milkshake with a birthday candle"
          },
          {
            "id": "mon-shake",
            "title": "Share a Toothsome signature milkshake",
            "description": "",
            "note": "Make this your birthday dessert. Look at the current shake menu together and let the birthday girl choose.",
            "tag": "BIRTHDAY MOMENT",
            "optional": true,
            "photo": "photos/mon-shake.jpg",
            "photoAlt": "Share a Toothsome signature milkshake",
            "est": "~15 min",
            "food": "snack"
          }
        ]
      }
    ],
    "alert": "Islands early admission begins at 8 AM; Studios opens at 10 AM with no early admission. Train boarding time is unconfirmed—check that morning. Studios closes at 7 PM; Islands closes at 8 PM.",
    "hoursExtra": "Islands 9 AM – 8 PM",
    "tabHours": [
      "10 AM–7 PM"
    ],
    "logos": [
      {
        "src": "logos/islands.png",
        "alt": "Universal Islands of Adventure logo"
      },
      {
        "src": "logos/studios.png",
        "alt": "Universal Studios Florida logo"
      }
    ]
  }
];
