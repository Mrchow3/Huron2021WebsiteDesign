const attractionInputs = [
    {
        title: 'Seaworld, Aquatica, Discovery Cove',
        description: 'Get up close with fascinating marine creatures and ride thrilling roller coasters at SeaWorld. Explore the mythical Journey to Atlantis on a refreshing boat ride or ride the Kraken, Orlando’s only floorless roller coaster, to reach an extreme high of 150 feet. After you’re done with the rides, come swim and play with dolphins at Discovery Cove. Located nearby is the southern Pacific themed Aquatica, which features lazy rivers and water slides that pass right by animal habitats.',
        websites: [
            {
                part: 'Seaworld',
                site: 'https://seaworld.com/orlando/',
            },
            {
                part: 'Aquatica',
                site: 'https://aquatica.com/orlando/',
            },
            {
                part: 'Discovery Cove',
                site: 'https://discoverycove.com/orlando/',
            }
        ],
        pricing: [
            '$109.99 single day ticket',
            '$153.99 two park ticket',
            '$174.99 three park ticket',
            '$232.99 four park + unlimited parking tickets'
        ],
        hours: [
            'Most days, 10:00am - 6:00pm'
        ],
        image: 'https://cache.undercovertourist.com/blog/2016/05/Aquatica-800x450.jpg',
        citation: "Picture Citation: Mommy Frog. Aquatica by SeaWorld. 2020. Undercover tourist, https://www.undercovertourist.com/blog/orlando-top-water-parks/",
    },
    {
        title: 'Ripley’s Believe it or Not',
        description: 'Bizarre adventures await here at Ripley’s “odditorium”. Let your curiosity run wild inside this 10,000-square foot building that looks like it’s getting swallowed by a sinkhole. Gawk at the hundreds of exhibits featuring micro-sculptures inside needles, Tibetan skull bowls, and the Tribal Cave. Explore strange artifacts and immerse yourself in strange and mysterious stories through a variety of collections.',
        websites: [
            {
                part: 'Ripley’s Believe it or Not',
                site: 'https://www.ripleys.com/orlando/attractions/believe-it-or-not/',
            }
        ],
        pricing: [
            '$23.99 per person'
        ],
        hours: [
            'Daily, 10:00am - 12:00am'
        ],
        image: 'https://media-cdn.tripadvisor.com/media/photo-w/02/4b/b7/6f/ripley-s-believe-it-or.jpg',
        citation: 'Picture Citation: Tripadvisor Management. Front View of Ripley’s Believe It or Not. 2012. Trip Advisor, https://www.tripadvisor.com/Attraction_Review-g34515-d124551-Reviews-Ripley_s_Believe_It_or_Not_Orlando-Orlando_Florida.html#photos;aggregationId=101&albumid=101&filter=7&ff=38516591',
    },
    {
        title: 'Orlando Museum of Art',
        description: 'Plunge into Florida’s art and culture at this institution. Featuring 10-12 compelling exhibitions annually, the Orlando Museum of Art showcases extraordinary works from landscape paintings by Louis Dewis to a journey of America through art. Explore elements of both contemporary and historical artwork.',
        websites: [
            {
                part: 'Orlando Museum of Art',
                site: 'https://omart.org/'
            }
        ],
        pricing: [
            '$15'
        ],
        hours: [
            'Daily, 10:00am - 4:00pm'
        ],
        image: 'https://thermanstatom.com/site/wp-content/uploads/2014/12/ORLANDO-MUSEUM-OF-ART.jpg',
        citation: 'Picture Citation: Reid, Tom. Orlando Museum of Art. 2009. Therman Statom, https://thermanstatom.com/portfolio_page/orlando-museum-of-art/',
    },
    {
        title: 'Chocolate Kingdom: Interactive Factory Adventure Tour',
        description: 'Watch the creation of everyone’s favorite treat at the Chocolate Kingdom. The personal tour guide, alongside a charming Prince and a daring Dragon companion, will take you to the Mystical River of Chocolate, an unforgettable Chocolate Museum, and through a Bean-to-the-bar factory using vintage machinery. Don’t leave out the one of a kind opportunity to customize your very own chocolate bar.',
        websites: [
            {
                part: 'Chocolate Kingdom',
                site: 'https://www.chocolatekingdom.com/'
            }
        ],
        pricing: [
            '$16.95'
        ],
        hours: [
            'Daily, 12:00pm - 4:00pm'
        ],
        image: 'https://s3-media0.fl.yelpcdn.com/bphoto/dfOMgkZuV_3UzZPqk2NDzw/o.jpg',
        citation: 'Picture Citation: H., Michelle. Photos for Chocolate Kingdom-Factory Adventure Tour. 2019. Yelp, https://www.yelp.com/biz_photos/chocolate-kingdom-factory-adventure-tour-orlando?select=dfOMgkZuV_3UzZPqk2NDzw',
    },
    {
        title: 'The Escape Room Orlando',
        description: 'Immerse yourself in a 60-minute adventure that requires you to use wits, communication, and teamwork to solve for your way out through puzzles and clues.  Enjoy a fully enticing escapade that keeps you on your toes until the very last minute. Check out Gold Rush or The Heist and get your chance to save the day.',
        websites: [
            {
                part: 'The Escape Room Orlando',
                site: 'https://theescapegame.com/orlando/'
            }
        ],
        pricing: [
            '$34.99 per person'
        ],
        hours: [
            'Daily, 8:00am - 11:45pm'
        ],
        image: 'https://orlandoinformer.com/wp-content/uploads/2018/01/Edit-11-1024x683.jpg',
        citation: 'Picture Citation: Rupp, Madison. I’m Still Talking About Gold Rush Months After We Played. 2018. Orlando Informer, https://orlandoinformer.com/blog/guide-escape-rooms-orlando',
    },
    { /* MAY NOT APPLY */
        title: 'iFLY Orlando Indoor Skydiving',
        description: '',
        websites: [
            {
                part: 'iFLY Orlando Indoor Skydiving',
                site: 'https://www.iflyworld.com/orlando/'
            }
        ],
        pricing: [
            '2 Flight Package: $69.95',
            '3 Flight Package: $89.95',
            '4 Flight Package: $111.95',
            '5 Flight Package: $131.95'
        ],
        hours: [
            'Monday - Thursday: 9:00am - 9:00pm',
            'Friday - Saturday: 8:30am - 10:30pm',
            'Sunday: 8:30am - 10:30pm'
        ],
        image: 'https://instagram.fdet1-2.fna.fbcdn.net/v/t51.2885-15/e35/89270883_202145167668875_2178344007128352351_n.jpg?_nc_ht=instagram.fdet1-2.fna.fbcdn.net&_nc_cat=111&_nc_ohc=fqBk06csybYAX-qPthy&tp=1&oh=ac23e4a9d80d7d5af2fc2df2e36139bf&oe=601DCB2A',
        citation: 'Picture Citation: iFLY Orlando. Piper’s Third Birthday. 2020. Instagram, https://www.instagram.com/p/B9Sf4swphPN/',
    },
    {
        title: 'Kennedy Space Center',
        description: 'Venture through the wonders of space travel at Kennedy Space Center. Get close-up views of the Space Shuttle Atlantis or learn about the individuals that travel the galaxy in the Heroes & Legends exhibit. Experience blast off to space in a rocket launch simulator or train as an astronaut to learn how to pilot, dock, and land. Start your space quest here.',
        websites: [
            {
                part: 'Kennedy Space Center',
                site: 'https://www.kennedyspacecenter.com/'
            }
        ],
        pricing: [
            '$57'
        ],
        hours: [
            'Daily, 10:00am - 4:00pm'
        ],
        image: 'https://www.kennedyspacecenter.com/-/media/DNC/KSCVC/Attraction-Images/NASA-Now-and-Next/Hero-images/NASA-NOW-MAIN-banner.ashx?h=950&w=1875&la=en&hash=CC088C0A78F1B2F1C5E224F384F6DCDB03AE7905',
        citation: 'Picture Citation: DNC Parks and Resort. NASA Now + Next. 2020. Kennedy Space Center Visitor Complex, https://www.kennedyspacecenter.com/explore-attractions',
    },
    {
        title: 'Andretti Indoor Karting & Games',
        description: 'Experience the excitement of real life Mario Karting at the world’s longest indoor track with exhilarating turns and elevation changes. Outside of the track, explore the arcade and its captivating VR experiences at the Omniverse Arena or Hologate Blitz. Enjoy fun at new heights with rope courses and ziplines or go for a classic like laser tag.',
        websites: [
            {
                part: 'Andretti Indoor Karting & Games',
                site: 'https://andrettikarting.com/orlando/'
            }
        ],
        pricing: [
            'Race: $21.95',
            'Rope Courses w/ Zipline: $12.95',
            'Laser Tag: $12.95',
            'Omniverse: $14.95'
        ],
        hours: [
            'Monday - Thursday: 12:00pm - 12:00am',
            'Friday: 12:00pm - 1:00am',
            'Saturday: 11:00am - 1:00am',
            'Sunday: 11:00am - 12:00am'
        ],
        image: 'https://img.grouponcdn.com/deal/3NQPF9BhzT5En1c4hY4CdgNDRxoZ/3N-774x464/v1/c700x420.webp',
        citation: 'Picture Citation: Andretti Karting. Andretti Indoor Karting And Games Orlando. 2020. Groupon, https://www.groupon.com/deals/andretti-indoor-karting-and-games-orlando-2',
    },
    { /* MAY NOT APPLY */
        title: 'Orlando Science Center',
        description: 'Discover interactive exhibits, labs, workshops, and an observatory at the Orlando Science Center. For 60 years, this institution provided STEM enrichment to promote engagement among the community. Traverse through the different layers of Earth’s atmosphere at the Our Earth exhibit or make your ideas come to life using resources at The Hive: A Makerspace. Get inspired about science or spark innovation here at the Science Center.',
        websites: [
            {
                part: 'Orlando Science Center',
                site: 'https://www.osc.org/'
            }
        ],
        pricing: [
            '$23'
        ],
        hours: [
            '10:00am - 5:00pm'
        ],
        image: '',
        citation: 'Picture Citation: Orlando Science Center. STEM Discover Center. 2020. Orlando Science Center, https://www.osc.org/learn/education/stem2go/',
    },
    {
        title: 'ICON Park',
        description: 'Get a view of the thriving cityscape from 400 feet above the air at the Orlando Eye, also known as The Wheel at Icon Park. Enjoy seeing the natural lakes, Walt Disney World, and Universal Orlando from an angle you’ve never seen before to view the skyline in its entirety. Once you hop off the 18-minute ferris wheel ride, walk over to meet celebrities at Madame Tussauds. Although they may be made of wax, you can still get up and close with your favorite celebrities or your favorite superheroes. After you greet Wonder Woman at the museum, you can say hi to dolphins and other marine creatures at the Sea Life Aquarium. Divulge in an aquatic voyage at the 360-degree ocean channel and meet everything from stingrays to starfishes.',
        websites: [
            {
                part: 'ICON Park',
                site: 'https://www.iconparkorlando.com/attractions/',
            }
        ],
        pricing: [
            'The Wheel: $27.99 per person',
            'Triple Attraction Combo (The Wheel + Sea Life + Madame Tussauds): $49.95',
            'Double Attraction Combo (The Wheel + Sea Life or Madame Tussauds): $39.95',
            'ICON Park Play Pass: $65.00'
        ],
        hours: [
            'Daily, 10:00am - 2:00am'
        ],
        image: 'https://i1.wp.com/partiudisneyparks.com/wp-content/uploads/2020/05/icon-park-orlando.png?w=1392&ssl=1',
        citation: 'Picture Citation: Braga, Carlos. Icon-park-orlando. 2020. Partiu Disney Parks, https://partiudisneyparks.com/en/icon-park-orlando/',
    },
    {
        title: 'Universal Studios Florida, Islands of Adventure, and Volcano Bay',
        description: 'Featuring rides and restaurants based on your favorite TV shows and movies, Universal Studios is the ultimate Hollywood experience. Dive into the Wizarding World of Harry Potter in the Diagon Alley and the Escape from Gringotts ride. After checking out the rides and shops at Universal Studios Florida, you can take the Hogwarts Express across to another park, the Islands of Adventure, which features Marvel superhero roller coasters and water rides that are fun for the whole family. Located right next door is Universal’s Volcano Bay. This water theme park filled with winding rivers, wave pools, and slides is the perfect way to cool off after a hot day in the other parks.',
        websites: [
            {
                part: 'Universal Orlando',
                site: 'https://www.universalorlando.com/web-store/en/us/park-tickets?flr=1&days=1',
            },
            {
                part: 'Islands of Adventure',
                site: 'https://www.universalorlando.com/web/en/us/theme-parks/islands-of-adventure',
            },
            {
                part: 'Volcano Bay',
                site: 'https://www.universalorlando.com/web/en/us/theme-parks/volcano-bay',
            }
        ],
        pricing: [
            'Universal Studios: $109, one day ticket',
            'Islands of Adventure: $109, one day ticket',
            'Volcano Bay: $70, one day ticket',
            'Universal Studios and Islands of Adventure: $164, one day ticket'
        ],
        hours: [
            'Universal Studios: Most days, 9:00am - 5:00pm',
            'Islands of Adventure: Most days, 10:00am - 6:00pm',
            'Volcano Bay: Most days, 10:00 AM - 5:00 PM (Closed in the winter)'
        ],
        image: 'https://www.visitflorida.com/content/dam/visitflorida/en-us/images/articles/2016/listicles/family-universal/universal-orlando-resort-harry-potter-diagon-alley.jpg.1020.680.imagerendition',
        citation: 'Picture Citation: Universal Orlando Resort. Explore the streets of Diagon Alley at Universal Studios Florida. 2020. Visit Florida, https://www.visitflorida.com/en-us/things-to-do/attractions/experience-diagon-alley-universal-studios.html',
    },
];

export { attractionInputs };