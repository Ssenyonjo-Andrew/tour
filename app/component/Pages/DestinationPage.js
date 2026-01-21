import React from 'react';
import Link from 'next/link';

const DestinationPage = () => {
  const [selectedCountry, setSelectedCountry] = React.useState('all');

  const destinations = [
    {
      id: 'samburu',
      name: "Samburu National Reserve",
      location: "Northern Kenya",
      summary: "Unique arid reserve along the Ewaso Ng'iro River famous for the Northern Five (Grevy's zebra, reticulated giraffe, gerenuk, Beisa oryx, Somali ostrich), red-dust elephants, big cats, and rich Maasai culture. Excellent dry-season game viewing and hot-air balloon safaris.",
      highlights: ["Northern Five species", "Maasai cultural visits", "Desert landscapes", "Hot air balloon safaris"],
      image: "https://africageographic.com/wp-content/uploads/2021/10/Cover-Samburu-4.jpg",
      notice: "Best wildlife viewing during dry season. Limited water sources concentrate animals around remaining waterholes."
    },
    {
      id: 'amboseli',
      name: "Amboseli National Park",
      location: "Southern Kenya",
      summary: "Iconic park famous for huge elephant herds, dramatic Kilimanjaro backdrop, and large lion prides. Offers excellent game viewing, Maasai village visits, night drives, and birdwatching in swamps and open plains — easily accessible from Nairobi.",
      highlights: ["Largest elephant population", "Kilimanjaro views", "Maasai villages", "Night game drives"],
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/elephant-bull-front-of-kilimanjaro-amboseli.jpg",
      notice: "Park may close during heavy rains. Check status before booking. Respect wildlife viewing guidelines."
    },
    {
      id: 'bwindi',
      name: "Bwindi Impenetrable Forest",
      location: "Southwestern Uganda",
      summary: "UNESCO World Heritage rainforest protecting nearly half the world’s mountain gorillas. World-class gorilla trekking, Batwa cultural experiences, excellent birdwatching (over 350 species), and primate viewing in dense, ancient afromontane forest.",
      highlights: ["Mountain gorilla trekking", "Rainforest walks", "Batwa pygmy culture", "Bird watching"],
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/Magical-encounters-with-the-mountain-gorillas-of-Bwindi.jpg",
      notice: "Gorilla permits must be booked in advance. Only 8 visitors per gorilla family per day."
    },
    {
      id: 'queen-elizabeth',
      name: "Queen Elizabeth National Park",
      location: "Western Uganda",
      summary: "Diverse park famous for tree-climbing lions, large elephant herds, Kazinga Channel boat safaris filled with hippos & birds, chimpanzee tracking, and the dramatic Ishasha sector. Excellent big cat sightings and birdlife (over 600 species).",
      highlights: ["Tree-climbing lions", "Kazinga Channel boat cruise", "Kob migration", "Chimpanzee tracking"],
      image: "https://www.queenelizabethparkuganda.com/wp-content/uploads/2019/12/isahsha-tree-climbing-lions-750x391.jpg",
      notice: "Boat cruises operate year-round but best wildlife viewing in dry season. Chimp permits required."
    },
    {
      id: 'serengeti',
      name: "Serengeti National Park",
      location: "Northern Tanzania",
      summary: "UNESCO World Heritage site and classic safari destination famous for the Great Migration of over 1.5 million wildebeest & zebra, dramatic river crossings, huge lion prides (3,000+), Big Five, and endless plains.",
      highlights: ["Great Migration", "Big Five", "Endless plains", "Hot air balloon safaris"],
      image: "https://www.serengeti.com/assets/img/great-migration-serengeti-game-drive.jpg",
      notice: "Peak migration season requires advance booking. Ngorongoro Crater nearby offers additional safari options."
    },
    {
      id: 'masai-mara',
      name: "Masai Mara National Reserve",
      location: "Southwestern Kenya",
      summary: "Kenya’s premier reserve connected to the Serengeti. World-famous for dramatic wildebeest river crossings during the Great Migration, Big Five viewing, black rhino protection, rich Maasai culture, and over 500 bird species.",
      highlights: ["Big Five", "Maasai culture", "River crossings", "Bird watching"],
      image: "https://www.masaimaramigration.com/wp-content/uploads/2020/01/mara-the-great-wildebeest-migration-1024x640.jpg",
      notice: "Migration peaks July-September. Book early for prime season. Community conservancies offer authentic cultural experiences."
    },
    {
      id: 'tsavo-east',
      name: "Tsavo East National Park",
      location: "Kenya",
      summary: "Massive 13,747 km² park known for huge herds of red-dusted elephants, maneless Tsavo lions, vast savannahs, the Yatta Plateau (world’s longest lava flow), and the Galana River. Classic big-game viewing in remote arid wilderness.",
      highlights: ["Red Elephants", "Volcanic Landscapes", "Night Safaris"],
      image: "https://wild-wings-safaris.com/uploads/files/red_elephants_tsavo.jpg",
      notice: "Known for red elephants due to volcanic soil. Part of the larger Tsavo ecosystem."
    },
    {
      id: 'tsavo-west',
      name: "Tsavo West National Park",
      location: "Kenya",
      summary: "9,065 km² park with diverse landscapes, Mzima Springs (hippos & crocodiles), black rhino sanctuary, volcanic features, and the Tsavo River. Offers game drives, rock climbing, guided walks, and excellent big-game viewing.",
      highlights: ["Galana River", "Rhino Sanctuary", "Mzima Springs"],
      image: "https://i.ytimg.com/vi/tTarfsaXvxw/maxresdefault.jpg",
      notice: "Home to black rhinos. Underground river system creates natural springs."
    },
    {
      id: 'lake-nakuru',
      name: "Lake Nakuru National Park",
      location: "Kenya",
      summary: "Rift Valley UNESCO site famous for massive flamingo flocks on the alkaline lake, southern white & black rhinos, Rothschild’s giraffes, and over 400 bird species. Panoramic views from Baboon Cliff and excellent birdwatching.",
      highlights: ["Flamingo Populations", "Rothschild Giraffes", "Lake Views"],
      image: "http://acacia-africa.com/blog/wp-content/uploads/2013/05/100_0399.jpg",
      notice: "Flamingo numbers vary seasonally. White rhino sanctuary nearby."
    },
    {
      id: 'aberdare',
      name: "Aberdare National Park",
      location: "Kenya",
      summary: "Mountainous park (767 km²) rising to 4,000 m with bamboo forests, waterfalls, misty moorlands, bongo antelopes, black rhinos, and over 250 bird species. Famous for tree hotels and dramatic highland scenery.",
      highlights: ["Bamboo Forests", "Waterfalls", "Bongo Antelopes"],
      image: "https://national-parks.org/wp-content/uploads/2025/10/Aberdare-National-Park-waterfall.jpg",
      notice: "Tree hotel accommodation. Misty mountains and moorlands."
    },
    {
      id: 'nairobi-national',
      name: "Nairobi National Park",
      location: "Kenya",
      summary: "Unique urban national park just 7 km from Nairobi city center. Offers Big Five viewing (including black rhinos), famous elephant orphanage, and classic safari experience within sight of skyscrapers.",
      highlights: ["Urban Safari", "Black Rhinos", "Animal Orphanage"],
      image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/97/7f/b7/view-of-nairobi-s-skyline.jpg",
      notice: "Only park where you can see The Big Five from the city center."
    },
    {
      id: 'hellsgate',
      name: "Hell's Gate National Park",
      location: "Kenya",
      summary: "Dramatic volcanic park with deep gorges, hot springs, geothermal activity, and red cliffs. Unique in Kenya for allowing cycling, motorcycling, and walking safaris among lions, leopards, and zebras.",
      highlights: ["Gorges", "Geothermal Activity", "Cycling Safaris"],
      image: "https://www.shutterstock.com/image-photo/hells-gate-national-park-gorge-260nw-2492449265.jpg",
      notice: "Only park in Kenya where cycling is permitted on established tracks."
    },
    {
      id: 'murchison',
      name: "Murchison Falls National Park",
      location: "Uganda",
      summary: "Uganda’s largest park (3,893 km²) along the Victoria Nile. Famous for the powerful Murchison Falls, boat safaris, Big Five wildlife, huge hippo & crocodile populations, and over 450 bird species including shoebills.",
      highlights: ["Murchison Falls", "River Safaris", "Bird Species"],
      image: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Murchison_Falls_-_by_Boschlech.jpg",
      notice: "Largest national park in Uganda. Nile River safaris available."
    },
    {
      id: 'kidepo',
      name: "Kidepo Valley National Park",
      location: "Uganda",
      summary: "Remote, rugged northeastern park with dramatic valleys, savannah, and Mount Morungole foothills. Exceptional wildlife diversity including lions, cheetahs, wild dogs, elephants, Rothschild’s giraffes, and over 480 bird species.",
      highlights: ["Remote Wilderness", "Diverse Wildlife", "Valley Landscapes"],
      image: "https://images.squarespace-cdn.com/content/v1/657b302ad0d11e71b22b40c3/1705507517446-A2MRD79GEC80NSH24OVP/photo_1979.jpg",
      notice: "Most remote park in Uganda. Requires special permits for access."
    },
    {
      id: 'rwenzori',
      name: "Rwenzori Mountains National Park",
      location: "Uganda",
      summary: "UNESCO World Heritage site with Africa’s third-highest peak (Margherita 5,109 m), glaciers, alpine moorlands, bamboo zones, and rare species including chimpanzees, forest elephants, and the Rwenzori turaco. Famous for challenging treks.",
      highlights: ["Glaciers", "Alpine Vegetation", "Rare Wildlife"],
      image: "https://yale-threesixty.transforms.svdcdn.com/production/041_Rwenzoris_Glaciers_Wendle_7K3A2115.jpg?w=1500&h=1500&q=80&auto=format&fit=clip&dm=1740245767&s=56c2d68651e427dcdfcad60c88565f69",
      notice: "Third highest mountain range in Africa. Challenging treks available."
    },
    {
      id: 'lake-mburo',
      name: "Lake Mburo National Park",
      location: "Uganda",
      summary: "Compact savannah park with Lake Mburo, large zebra herds, impalas, elands, buffaloes, and over 300 bird species. Excellent for boat safaris, walking, and birdwatching — the only Ugandan park with reliable zebra sightings.",
      highlights: ["Zebra Herds", "Bird Species", "Boat Safaris"],
      image: "https://www.oasisoverland.co.uk/images/shutterstock_2300966273.jpg",
      notice: "Only park in Uganda where zebras can be seen. Excellent for bird watching."
    },
    {
      id: 'kibale',
      name: "Kibale National Park",
      location: "Uganda",
      summary: "Premier primate destination with the highest density and diversity in East Africa — 13 species including habituated chimpanzees, red colobus, L’Hoest’s monkeys. Lush rainforest, excellent chimpanzee tracking, and birdwatching.",
      highlights: ["Chimpanzee Tracking", "Primate Species", "Rainforest"],
      image: "https://www.murchisonfallsparkuganda.com/wp-content/uploads/2021/09/chimpanzees-in-kibale-forest-750x450.jpg",
      notice: "Highest concentration of primates in East Africa. Chimp permits required."
    },
    {
      id: 'mgahinga',
      name: "Mgahinga Gorilla National Park",
      location: "Uganda",
      summary: "Smallest Ugandan national park in the Virunga Mountains. Protects mountain gorillas and rare golden monkeys. Offers gorilla trekking amid bamboo forests, volcanic peaks, and stunning views across Rwanda and DRC.",
      highlights: ["Mountain Gorillas", "Golden Monkeys", "Volcanic Peaks"],
      image: "https://bambooecotours.com/wp-content/uploads/2020/09/bamboo-ecotours-850x638.jpg",
      notice: "Smallest national park in Uganda. Part of Virunga Conservation area."
    },
    {
      id: 'aruu-falls',
      name: "Aruu Falls",
      location: "Uganda",
      summary: "Spectacular waterfall on the Nile River near the source at Lake Victoria. Features cascading waters through lush greenery, picnic areas, and cultural performances. Perfect for day trips from Kampala.",
      highlights: ["Waterfall Views", "Cultural Performances", "Picnic Areas"],
      image: "pics/aruu.jpg",
      notice: "Day trip destination from Kampala. Cultural performances available."
    },
    {
      id: 'siipi-falls',
      name: "Siipi Falls",
      location: "Uganda",
      summary: "Stunning three-tiered waterfall in the Bugoma Forest, offering hiking trails, swimming opportunities, and birdwatching. Features the widest waterfall in Uganda with a 100-meter drop.",
      highlights: ["Multi-tiered Falls", "Hiking Trails", "Birdwatching"],
      image: "https://thumbs.dreamstime.com/b/scenic-view-sipi-waterfall-mount-elgon-mbale-uganda-274064431.jpg",
      notice: "Widest waterfall in Uganda. Hiking and swimming available."
    },
    {
      id: 'ziiwa-rhino-sanctuary',
      name: "Ziiwa Rhino & Wildlife Ranch",
      location: "Uganda",
      summary: "Conservation success story housing the world's largest captive breeding herd of Eastern Black Rhinos. Features rhino tracking, wildlife safaris, and education about conservation efforts.",
      highlights: ["Rhino Conservation", "Wildlife Safaris", "Education Programs"],
      image: "https://mukuruvalleysafaris.com/wp-content/uploads/2025/07/ZWRS-377-scaled.jpg",
      notice: "World's largest captive rhino breeding herd. Conservation-focused experience."
    },
    {
      id: 'kafu-river',
      name: "Kafu River",
      location: "Uganda",
      summary: "Scenic river in Budongo Forest offering boat cruises, birdwatching, and chimpanzee viewing opportunities. Known for its biodiversity and peaceful atmosphere.",
      highlights: ["Boat Cruises", "Chimpanzee Viewing", "Bird Species"],
      image: "https://www.eastafricasafaristours.com/wp-content/uploads/2023/06/howwe_1601390669.webp",
      notice: "Part of Budongo Forest ecosystem. Excellent for birdwatching."
    },
    {
      id: 'tarangire',
      name: "Tarangire National Park",
      location: "Tanzania",
      summary: "Known for massive elephant herds, ancient baobab trees, and seasonal Tarangire River. Dry season concentrates thousands of zebras, wildebeest, and buffalo. Excellent elephant viewing and diverse birdlife.",
      highlights: ["Elephant Herds", "Baobab Trees", "Seasonal Rivers"],
      image: "https://www.tarangirenationalparks.com/wp-content/uploads/2023/10/tarangire-national-park-1-750x450.jpg",
      notice: "Excellent for elephant viewing. Dry season concentrates wildlife."
    },
    {
      id: 'lake-manyara',
      name: "Lake Manyara National Park",
      location: "Tanzania",
      summary: "UNESCO Biosphere Reserve famous for tree-climbing lions, groundwater forest, alkaline lake with huge flamingo flocks, hippos, and diverse birdlife. Compact park with dramatic escarpment views and excellent game viewing.",
      highlights: ["Tree-Climbing Lions", "Ground Water Forest", "Alkaline Lake"],
      image: "https://www.lakemanyaranationalparks.com/wp-content/uploads/2021/05/tree-climbing-lion.jpg",
      notice: "UNESCO Biosphere Reserve. Famous for tree-climbing lions."
    },
    {
      id: 'selous',
      name: "Selous Game Reserve",
      location: "Tanzania",
      summary: "One of Africa’s largest protected areas (~50,000 km²) with the mighty Rufiji River, miombo woodland, wetlands, and vast wilderness. Excellent for boat safaris, walking, big game, wild dogs, and elephants.",
      highlights: ["Rufiji River", "Wildlife Reserve", "Diverse Ecosystems"],
      image: "https://www.andbeyond.com/wp-content/uploads/sites/5/herd-of-elephants-and-water-selous.jpg",
      notice: "Largest game reserve in Africa. Walking safaris permitted."
    },
    {
      id: 'gombe',
      name: "Gombe National Park",
      location: "Tanzania",
      summary: "Tiny 35 km² park on Lake Tanganyika made famous by Jane Goodall’s chimpanzee research. Offers exceptional chimpanzee tracking, primate viewing (baboons, colobus, red-tails), and rainforest walks in a remote setting.",
      highlights: ["Chimpanzee Research", "Lake Tanganyika", "Rainforest"],
      image: "https://orionmagazine.org/wp-content/uploads/2025/10/chimps_in_gombe-1554x888.jpg",
      notice: "Only accessible by boat. Small park but rich in primate research history."
    },
    {
      id: 'mahale',
      name: "Mahale Mountains National Park",
      location: "Tanzania",
      summary: "Remote western park on Lake Tanganyika with the largest known population of eastern chimpanzees. Offers exceptional chimp trekking in montane rainforest, stunning lake & mountain views, and very low tourist numbers.",
      highlights: ["Chimpanzees", "Lake Tanganyika", "Mountain Views"],
      image: "https://www.muchbetteradventures.com/magazine/content/images/2023/06/GettyImages-1361427581-2.jpg",
      notice: "Only accessible by boat or light aircraft. Very remote location."
    },
    {
      id: 'akagera',
      name: "Akagera National Park",
      location: "Rwanda",
      summary: "Rwanda’s only savannah park with Big Five (lions, rhinos, elephants reintroduced), wetlands, lakes, and the Kagera River. Excellent boat safaris, birdwatching, and classic East African game viewing experience.",
      highlights: ["Savannah Wildlife", "Akagera River", "Bird Watching"],
      image: "https://www.africanparks.org/sites/default/files/2017-07/akagera.jpg",
      notice: "Only savannah park in Rwanda. Excellent for boat safaris."
    },
    {
      id: 'zanzibar-stone-town',
      name: "Stone Town, Zanzibar",
      location: "Tanzania",
      summary: "UNESCO World Heritage historic core of Zanzibar City. Blends Arab, Swahili, Indian & European architecture with carved doors, spice markets, old fort, slave trade history sites, and vibrant seafront culture.",
      highlights: ["Arab Architecture", "Spice Markets", "Cultural Heritage"],
      image: "https://whc.unesco.org/uploads/thumbs/site_0173_0001-1200-630-20150617114914.jpg",
      notice: "UNESCO World Heritage site. Rich history of Arab and Swahili cultures."
    }
  ];

  const countries = [
    { id: 'all', name: 'All Countries', flag: '🌍' },
    { id: 'Kenya', name: 'Kenya', flag: '🇰🇪' },
    { id: 'Uganda', name: 'Uganda', flag: '🇺🇬' },
    { id: 'Tanzania', name: 'Tanzania', flag: '🇹🇿' },
    { id: 'Rwanda', name: 'Rwanda', flag: '🇷🇼' }
  ];

  const filteredDestinations = selectedCountry === 'all'
    ? destinations
    : destinations.filter(dest => dest.location.includes(selectedCountry));

  return (
    <div style={{
      backgroundColor: '#000000',
      color: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(34,197,94,0.3); }
          50% { box-shadow: 0 0 30px rgba(34,197,94,0.6); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        .destination-card {
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          backdrop-filter: blur(12px);
        }
        .destination-card:hover {
          transform: translateY(-12px);
          box-shadow: 0 20px 60px rgba(34,197,94,0.35);
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: 'clamp(120px, 18vh, 180px) clamp(20px, 5vw, 60px) clamp(80px, 12vh, 120px)',
        background: 'linear-gradient(180deg, rgba(0,0,0,0.85) 0%, rgba(10,42,20,0.95) 100%)',
        overflow: 'hidden',
        zIndex: 5
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("pics/home1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          // filter: 'brightness(0.7) contrast(1.2)',
          opacity:0.6,
          zIndex: 1
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(34,197,94,0.15) 0%, transparent 70%)',
          zIndex: 2
        }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.65)',
          zIndex: 3
        }} />

        <div style={{
          maxWidth: '1480px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 10,
          textAlign: 'center'
        }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '16px',
            padding: '14px 28px',
            borderRadius: '999px',
            background: 'rgba(34,197,94,0.15)',
            border: '1px solid rgba(34,197,94,0.35)',
            marginBottom: '40px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            <span style={{ color: '#22c55e', fontWeight: '800', letterSpacing: '2px', textTransform: 'uppercase' }}>EAST AFRICA DESTINATIONS</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            fontWeight: '900',
            margin: '0 0 32px',
            lineHeight: '1.05',
            letterSpacing: '-4px',
            background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 6px 30px rgba(34,197,94,0.4)',
            animation: 'fadeInUp 1.2s ease-out 0.3s backwards'
          }}>
            Our Destinations In East Africa
          </h1>

          <p style={{
            fontSize: '1.5rem',
            color: 'rgba(255,255,255,0.9)',
            lineHeight: '1.7',
            maxWidth: '900px',
            margin: '0 auto',
            fontWeight: '400',
            textShadow: '0 2px 12px rgba(0,0,0,0.8)',
            animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
          }}>
            Discover the most spectacular wildlife destinations in Kenya, Uganda, and Tanzania. From the Great Migration to mountain gorillas, experience Africa's incredible biodiversity.
          </p>
        </div>
      </section>

      {/* Country Filter */}
      <section style={{
        padding: '80px 60px 60px',
        background: 'linear-gradient(180deg, #000000 0%, #0a1a0f 100%)',
        borderTop: '1px solid rgba(34,197,94,0.25)',
        borderBottom: '1px solid rgba(34,197,94,0.25)',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto', textAlign: 'center' }}>
          <h3 style={{
            fontSize: '2.5rem',
            fontWeight: '800',
            color: '#ffffff',
            marginBottom: '48px',
            letterSpacing: '-1px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Explore by Country
          </h3>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '48px'
          }}>
            {countries.map(country => (
              <button
                key={country.id}
                onClick={() => setSelectedCountry(country.id)}
                style={{
                  padding: '16px 32px',
                  borderRadius: '40px',
                  border: selectedCountry === country.id ? 'none' : '2px solid rgba(34,197,94,0.45)',
                  background: selectedCountry === country.id
                    ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                    : 'rgba(34,197,94,0.08)',
                  color: selectedCountry === country.id ? '#000000' : '#22c55e',
                  fontSize: '1.1rem',
                  fontWeight: '700',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  minWidth: '160px',
                  justifyContent: 'center',
                  boxShadow: selectedCountry === country.id ? '0 8px 25px rgba(34,197,94,0.4)' : 'none'
                }}
                onMouseEnter={e => {
                  if (selectedCountry !== country.id) {
                    e.target.style.background = 'rgba(34,197,94,0.15)';
                    e.target.style.transform = 'translateY(-4px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(34,197,94,0.3)';
                  }
                }}
                onMouseLeave={e => {
                  if (selectedCountry !== country.id) {
                    e.target.style.background = 'rgba(34,197,94,0.08)';
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = 'none';
                  }
                }}
              >
                <span style={{ fontSize: '1.4em' }}>{country.flag}</span>
                <span>{country.name}</span>
              </button>
            ))}
          </div>

          <div style={{
            background: 'rgba(34,197,94,0.12)',
            border: '1px solid rgba(34,197,94,0.35)',
            borderRadius: '20px',
            padding: '24px 36px',
            display: 'inline-block',
            boxShadow: '0 4px 20px rgba(34,197,94,0.2)',
            animation: 'fadeInUp 1.2s ease-out 0.3s backwards'
          }}>
            <p style={{
              color: '#22c55e',
              fontSize: '1.2rem',
              fontWeight: '600',
              margin: 0
            }}>
              {selectedCountry === 'all'
                ? `Showing all ${filteredDestinations.length} destinations across East Africa`
                : `Showing ${filteredDestinations.length} destinations in ${countries.find(c => c.id === selectedCountry)?.name}`
              }
            </p>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section style={{
        padding: '140px 60px',
        background: 'linear-gradient(180deg, #000000 0%, #0a1a0f 100%)',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{ maxWidth: '1480px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px'
          }}>
            {filteredDestinations.map((destination, index) => (
              <div
                key={index}
                className="destination-card"
                style={{
                  borderRadius: '32px',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(34,197,94,0.05) 100%)',
                  border: '1px solid rgba(34,197,94,0.25)',
                  position: 'relative',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                  animation: `fadeInUp 1s ease-out ${index * 0.1}s backwards`
                }}
              >
                <div style={{
                  height: '320px',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <img
                    src={destination.image}
                    alt={destination.name}
                    style={{
                      width: '100%',
                      height: '120%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.6s ease',
                      position: 'absolute',
                      top: '-10%'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, transparent 60%)',
                    zIndex: 5
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    background: 'rgba(34,197,94,0.95)',
                    padding: '10px 20px',
                    borderRadius: '25px',
                    fontSize: '1rem',
                    fontWeight: '700',
                    color: '#000000',
                    boxShadow: '0 4px 15px rgba(34,197,94,0.4)',
                    zIndex: 10
                  }}>
                    {destination.location}
                  </div>
                </div>

                <div style={{
                  padding: '40px',
                  background: 'rgba(13, 61, 31, 0.25)',
                  backdropFilter: 'blur(16px)',
                  borderTop: '1px solid rgba(34,197,94,0.15)'
                }}>
                  <h3 style={{
                    fontSize: '2.2rem',
                    fontWeight: '800',
                    margin: '0 0 16px',
                    color: '#ffffff',
                    letterSpacing: '-1px',
                    textShadow: '0 2px 10px rgba(0,0,0,0.7)'
                  }}>
                    {destination.name}
                  </h3>

                  <div style={{
                    background: 'rgba(34,197,94,0.12)',
                    border: '1px solid rgba(34,197,94,0.35)',
                    borderRadius: '16px',
                    padding: '20px',
                    marginBottom: '24px',
                    boxShadow: '0 4px 15px rgba(34,197,94,0.2)',
                    animation: 'pulseGlow 3s ease-in-out infinite'
                  }}>
                    <p style={{
                      fontSize: '1.05rem',
                      color: '#22c55e',
                      lineHeight: '1.6',
                      margin: 0,
                      fontWeight: '500',
                      textShadow: '0 1px 5px rgba(0,0,0,0.5)'
                    }}>
                      {destination.notice}
                    </p>
                  </div>

                  <p style={{
                    fontSize: '1.1rem',
                    color: 'rgba(255,255,255,0.85)',
                    lineHeight: '1.7',
                    margin: '0 0 24px',
                    textShadow: '0 1px 5px rgba(0,0,0,0.6)'
                  }}>
                    {destination.summary}
                  </p>

                  <div style={{ marginBottom: '32px' }}>
                    <h4 style={{
                      fontSize: '1.3rem',
                      fontWeight: '700',
                      color: '#22c55e',
                      margin: '0 0 16px',
                      textShadow: '0 2px 10px rgba(34,197,94,0.4)'
                    }}>
                      Key Highlights:
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {destination.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            marginBottom: '8px',
                            fontSize: '1.05rem',
                            color: 'rgba(255,255,255,0.8)',
                            textShadow: '0 1px 5px rgba(0,0,0,0.5)'
                          }}
                        >
                          <span style={{ color: '#22c55e', fontSize: '1.2rem' }}>✓</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section style={{
        padding: '180px 60px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #0d3d1f 100%)',
        zIndex: 10
      }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          backgroundImage: 'radial-gradient(circle at 50% 50%, rgba(34,197,94,0.15) 0%, transparent 70%)' 
        }} />

        <div style={{
          maxWidth: '1100px',
          margin: '0 auto',
          textAlign: 'center',
          position: 'relative',
          zIndex: 10
        }}>
          <h2 style={{
            fontSize: 'clamp(3rem, 7vw, 5rem)',
            fontWeight: '900',
            color: '#ffffff',
            marginBottom: '32px',
            lineHeight: '1.2',
            letterSpacing: '-2px',
            animation: 'fadeInUp 1s ease-out'
          }}>
            Ready to Explore<br/>
            <span style={{
              background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 6px 30px rgba(34,197,94,0.4)'
            }}>East Africa?</span>
          </h2>

          <p style={{
            fontSize: '1.4rem',
            color: 'rgba(255,255,255,0.85)',
            marginBottom: '56px',
            lineHeight: '1.7',
            maxWidth: '800px',
            marginInline: 'auto',
            textShadow: '0 2px 12px rgba(0,0,0,0.7)',
            animation: 'fadeInUp 1.2s ease-out 0.3s backwards'
          }}>
            Let us craft your perfect East African adventure — from gorilla trekking to cultural immersions and epic safaris.
          </p>

          <div style={{
            display: 'flex',
            gap: '24px',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => window.location.href = '/contact'}
              style={{
                padding: '24px 56px',
                fontSize: '1.2rem',
                fontWeight: '800',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                color: '#000000',
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                boxShadow: '0 15px 40px rgba(34,197,94,0.45)',
                animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.06)';
                e.target.style.boxShadow = '0 25px 60px rgba(34,197,94,0.6)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 15px 40px rgba(34,197,94,0.45)';
              }}
            >
              Start Planning Today
            </button>

            <button
              onClick={() => window.location.href = '/contact'}
              style={{
                padding: '24px 56px',
                fontSize: '1.2rem',
                fontWeight: '800',
                borderRadius: '50px',
                border: '2px solid #22c55e',
                background: 'transparent',
                color: '#22c55e',
                textTransform: 'uppercase',
                letterSpacing: '1.2px',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                animation: 'fadeInUp 1.4s ease-out 0.6s backwards'
              }}
              onMouseEnter={e => {
                e.target.style.background = 'rgba(34,197,94,0.15)';
                e.target.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={e => {
                e.target.style.background = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }}
            >
              Contact Us
            </button>
          </div>

          <div style={{
            marginTop: '72px',
            padding: '36px',
            borderRadius: '30px',
            display: 'flex',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '36px',
            background: 'rgba(255,255,255,0.06)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(34,197,94,0.25)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            animation: 'fadeInUp 1.6s ease-out 0.9s backwards'
          }}>
            {[
              { label: 'info@sseruz.com' },
              { label: '+256 XXX XXX XXX' },
              { label: 'Kampala, Uganda' }
            ].map((contact, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'rgba(255,255,255,0.95)' }}>{contact.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Floating Book Now Button */}
      {/* <Link href="/contact">
        <button
          style={{
            position: 'fixed',
            bottom: '40px',
            right: '40px',
            padding: '18px 40px',
            fontSize: '1.15rem',
            fontWeight: '800',
            borderRadius: '999px',
            border: 'none',
            background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
            color: '#000000',
            textTransform: 'uppercase',
            letterSpacing: '1.2px',
            cursor: 'pointer',
            boxShadow: '0 10px 30px rgba(34,197,94,0.5)',
            transition: 'all 0.35s ease',
            zIndex: 9999,
            whiteSpace: 'nowrap',
            animation: 'pulse 2.2s infinite ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.08)';
            e.currentTarget.style.boxShadow = '0 16px 45px rgba(34,197,94,0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 30px rgba(34,197,94,0.5)';
          }}
        >
          📅 Book Your Safari Now
        </button>
      </Link> */}
    </div>
  );
};

export default DestinationPage;