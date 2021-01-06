import React, { useState, useEffect, Component } from 'react';

import '../pages/css/ExTransportation.css';
import '../pages/css/Home.css';
import '../pages/css/Hotels.css'
import '../pages/css/ExFood.css';


const foodInputs = [
    {
        type: 'Italian',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/fGTjQzu8v60-kcGCij_E7Q/o.jpg',
        heroCitation: 'J., David. The Bar at Prato Orlando. 2017. Yelp. https://www.yelp.com/biz_photos/prato-winter-park?select=fGTjQzu8v60-kcGCij_E7Q',
        content: [
            {
                name: 'Prato',
                address: '124 N Park Ave, Winter Park, FL 32789',
                description: 'Taking inspiration from Italian classics and blending that with a modern touch, Prato offers hand-stretched pizzas and oversized meatballs in a warm and chic atmosphere.',
                website: 'https://www.prato-wp.com/',
                menu: 'https://www.prato-wp.com/menu',
                menuInfo: ' - Menu changes daily and seasonally',
                hours: [
                    {
                        when: 'Monday - Tuesday: ',
                        times: '4:00 pm - 10:00 pm'
                    },
                    {
                        when: 'Wednesday - Sunday: ',
                        times: '11:30 am - 3:00 pm and 5:30 pm - 11:00 pm'
                    }
                ],
                image: 'https://www.orlandosentinel.com/resizer/8DlK-WMinQAFP5yn-iZwDQgllCc=/800x449/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/N7WUAT45NRC7NN3H7EMFP6WHTQ.jpg'
                ,
                citation:
                    "Pizarri, Michael. Prato's diavolo pizza is on the Winter Park restaurant's new happy hour menu. 2017. Orlando Sentinel, https://www.orlandosentinel.com/food-restaurants/os-et-prato-happy-hour-20170801-story.html",
            }
        ]
    },
    {
        type: 'Asian',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/bagFSzMMIQNMd8_bcfDoFg/o.jpg',
        heroCitation: 'S., Michelle. Taste Of Chengdu Restaurant. 2019. Yelp. https://www.yelp.com/biz_photos/taste-of-chengdu-orlando-3?select=bagFSzMMIQNMd8_bcfDoFg',
        content: [
            {
                name: 'Kadence',
                address: '1809 Winter Park Rd, Orlando, FL 32803',
                description: 'Look no further for a traditional Japanese sushi experience. Here at Kadence, a sushi and sake bar, the chefs will prepare an omakase course for fresh sushi and sashimi tasting. Reservations are required but you can order delicious chirashi bowls for takeout in reusable containers that can be returned.',
                website: 'http://kadenceorlando.com/',
                menu: '',
                menuInfo: ' - There is no menu for sushi because it is left up to the chef to decide what to prepare',
                hours: [
                    {
                        when: 'Monday - Wednesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Thursday - Saturday: ',
                        times: '4:00pm - 7:00pm'
                    },
                    {
                        when: 'Sunday: ',
                        times: '12:00pm - 12:30pm'
                    }
                ],
                image: 'https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/s1080x2048/120229696_3218970118180717_274272401219222733_o.jpg?_nc_cat=106&ccb=2&_nc_sid=a26aad&_nc_ohc=yvjv01xN1O0AX-4Gd1m&_nc_ht=scontent-ort2-1.xx&tp=7&oh=84f782d0ed04ab1f3647a395a62a3433&oe=6017E815',
                citation: "Ausley, Amanda. Chirashi Bowl. 2020. Facebook, https://www.facebook.com/kadenceorlando/",
            },
            {
                name: 'Taste Of Chengdu',
                address: '4856 New Broad St, Orlando, FL 32814',
                description: 'Come dine at Taste of Chengdu for traditional Sichuan cuisine. Chefs layer each dish with spices and seasonings to create a strong flavor that brings together different Chinese cuisines.',
                website: 'https://tasteofchengdufl.com/',
                menu: 'https://tasteofchengdufl.com/menu-baldwin-park/',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Thursday: ',
                        times: '11:30am – 9:30pm'
                    },
                    {
                        when: 'Friday-Saturday: ',
                        times: '11:30am – 10:30pm'
                    },
                    {
                        when: 'Sunday: ',
                        times: '11:30am – 9:00pm'
                    }
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/uT1IzQXSfq1PoQ8Fdox0_A/o.jpg',
                citation: "W., Ellen. Sichuan Cuisine at Taste of Chengdu. 2018. Yelp, https://www.yelp.com/biz_photos/taste-of-cheng du-orlando-3?select=uT1IzQXSfq1PoQ8Fdox0 _A",
            }
        ]
    },
    {
        type: 'Hispanic',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/KL3INQ6thD_wzD9D8eibnQ/o.jpg',
        heroCitation: 'L., Kaming. Interior of Black Rooster Taqueria. 2020. Yelp. https://www.yelp.com/biz_photos/black-rooster-taqueria-orlando?select=KL3INQ6thD_wzD9D8eibnQ',
        content: [
            {
                name: 'Black Rooster Taqueria',
                address: '1323 N Mills Ave Orlando, FL 32803',
                description: 'This isn’t your average taco joint; at the Black Rooster Taqueria, the walls are covered in vibrant art, and each plate of food is made with care. Fill up on salads, tacos, or bowls and wash it down with a Jarritos fruit-flavored soda.',
                website: 'http://www.blackroostertaqueria.com/',
                menu: 'http://www.blackroostertaqueria.com/#menu-page',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Tuesday - Friday: ',
                        times: '11:00am - 2:00pm and 5:00pm - 9:00pm'
                    },
                    {
                        when: 'Saturday - Sunday: ',
                        times: '11:00am - 3:00pm and 5:00pm - 9:00pm'
                    }
                ],
                image: 'https://media.timeout.com/images/105247885/380/285/image.jpg',
                citation: 
                    "C., Juliana. Tacos at Black Rooster Taqueria. 2020. TimeOut, https://www.timeout.com/orlando/restaurants/best-restaurants-in-orlando"
                ,
            }
        ]
    },
    {
        type: 'Fusion',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/NXNzLM0pFjw1yHbHU-RQ0w/o.jpg',
        heroCitation: 'R., Chen. Art All Over. 2019. Yelp. https://www.yelp.com/biz_photos/caf%C3%A9-tu-tu-tango-orlando-5?select=NXNzLM0pFjw1yHbHU-RQ0w',
        content: [
            {
                name: 'Café Tu Tu Tango',
                address: '8625 International Drive, Orlando, FL 32819',
                description: 'Food Network named Café Tu Tu Tango the best place for tapas in Orlando. Featuring select dishes from around the world, it is the perfect place to send your taste buds on a world tour.',
                website: 'https://www.cafetututango.com/menus',
                menu: 'https://www.cafetututango.com/menus',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Thursday: ',
                        times: '12:00pm – 11:00pm'
                    },
                    {
                        when: 'Friday: ',
                        times: '12:00pm - 12:00am'
                    },
                    {
                        when: 'Saturday: ',
                        times: '10:00am - 12:00am'
                    },
                    {
                        when: 'Sunday: ',
                        times: '10:00am - 10:00pm'
                    }
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/UobBp-ZINTJt5r_m1jE-rA/o.jpg',
                citation: "C., Jadhai. Sesame Steak Skewers. 2020. Yelp, https://www.yelp.com/biz_photos/caf%C3 %A9-tu-tu-tango-orlando-5?select=UobB p-ZINTJt5r_m1jE-rA",
            }
        ]
    },
    {
        type: 'American',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/Wl6_QdGMZktvZrZvrvQZow/o.jpg',
        heroCitation: 'D., Mark. Great Wall. 2018. Yelp. https://www.yelp.com/biz_photos/se7en-bites-orlando?select=Wl6_QdGMZktvZrZvrvQZow',
        content: [
            {
                name: 'Se7en Bites',
                address: '617 Primrose Dr, Orlando, FL 32803',
                description: 'Enjoy a taste of the South at this hospitable kitchen. Order something off their all-day breakfast and lunch menu or grab something for your sweet tooth at their bakery.',
                website: 'http://www.se7enbites.com/',
                menu: 'http://www.se7enbites.com/menu-1',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Wednesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Thursday - Friday: ',
                        times: '8:00am - 3:30pm'
                    },
                    {
                        when: 'Saturday - Sunday: ',
                        times: '9:00am - 3:00pm'
                    }
                ],
                image: 'https://images.squarespace-cdn.com/content/v1/57c63f3e03596e373290b357/1498861703222-QTE8MV4LMN15OHX2DOEP/ke17ZwdGBToddI8pDm48kIyvoTDOqK6tuLbY8s33gHl7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UTzjvHSAOXjnTxN2sJb-n4pP61BYfWtluh1bxbCEA7ounr1xKjsq_-rO8kOgOtwYvw/F120FF6B-D9A2-445C-B220-070093E4F14B.jpg?format=500w',
                citation: "Se7en Bites LLC, Chicken and Biscuits. 2018. Se7en Bites, http://www.se7enbites.com/gallery",
            },
            {
                name: 'Maxine’s On Shine',
                address: '337 N Shine Ave Orlando, FL 32803',
                description: 'Make a reservation to dine at this award winning neighborhood restaurant for a friendly dinner or bright weekend brunch. A favorite of both tourists and locals, Maxine’s On Shine has food for the whole family.',
                website: 'https://maxinesonshine.com/',
                menu: 'https://maxinesonshine.com/maxines-market/',
                menuInfo: '',
                hours: [
                    {
                        when: 'Monday - Tuesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Wednesday - Thursday: ',
                        times: '5:00pm - 9:00pm'
                    },
                    {
                        when: 'Friday - Saturday: ',
                        times: '10:00am - 9:00pm'
                    },
                    {
                        when: 'Friday - Saturday: ',
                        times: '10:00am - 3:00pm'
                    }
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/gyTsMaNGwPEaWbjsJ52F5Q/o.jpg',
                citation: "K., Brittany. Vegetarian Blanco at Maxine’s On Shine. 2020. Yelp, https://www.yelp.com/biz_photos/ma xines-on-shine-orlando?select=gyTs MaNGwPEaWbjsJ52F5Q",
            },
            {
                name: 'Linda’s La Cantina Steakhouse',
                address: '4721 E Colonial Dr, Orlando, FL 32803',
                description: 'Serving steaks hot off the grill since 1947, La Cantina offers juicy cuts of steak along with pictures landing you right in the 20th century. Each steak comes with a salad and your pick of sides.',
                website: 'http://www.lindaslacantina.com/index1.htm',
                menu: 'http://www.lindaslacantina.com/Menu/menu2.htm',
                menuInfo: '',
                hours: [
                    {
                        when: 'Sunday - Monday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Tuesday - Saturday: ',
                        times: '4:00pm - 9:30pm'
                    }
                ],
                image: 'https://media-cdn.tripadvisor.com/media/photo-w/16/af/6a/2e/yummy-ribeye.jpg',
                citation: "A., Gail. Anniversary Dinner. 2019. Trip Advisor, https://www.tripadvisor.es/ShowUserReviews-g34515-d456862-r643263942-Linda_s_La_Cantina-Orlando_Florida.html#UR643263942",
            }
        ]
    },
    {
        type: 'African',
        hero: 'https://s3-media0.fl.yelpcdn.com/bphoto/R0E3DDmy5LHa8FsfKM8TzA/o.jpg',
        heroCitation: 'G., Lisa. More of the Dining Area. 2018. Yelp. https://www.yelp.com/biz_photos/selam-ethiopian-and-eritrean-cuisine-orlando?select=R0E3DDmy5LHa8FsfKM8TzA',
        content: [
            {
                name: 'Selam Ethiopian & Eritrean Cuisine',
                address: '5494 Central Florida Pkwy, Orlando, FL 32821',
                description: 'A dashing blend of colors and flavorful spices, Selam features traditional cuisine brought to you from the horn of Africa.',
                website: 'https://www.ethiopianrestaurantorlando.com/',
                menu: 'https://www.ethiopianrestaurantorlando.com/#menu',
                menuInfo: '',
                hours: [
                    {
                        when: 'Tuesday: ',
                        times: 'Closed'
                    },
                    {
                        when: 'Wednesday - Monday: ',
                        times: '12:00pm - 9:00pm'
                    },
                ],
                image: 'https://s3-media0.fl.yelpcdn.com/bphoto/RXY7z3SZ97YJSQcX9empiw/o.jpg',
                citation: "B., Shawn. Selam Veggie Special. 2019. Yelp, https://www.yelp.com/biz_photos/selam-ethiopian-and-eritrean-cuisine-orlando?select=RXY7z3SZ97YJSQcX9empiw",
            }
        ]
    }
]

export { foodInputs };