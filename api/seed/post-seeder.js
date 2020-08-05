const Post = require('../models/Post');
const mongoose = require('mongoose');

try {
  mongoose.connect(
    'mongodb+srv://haoranyu:12345677654321@mern-shopping-list.bzwhf.mongodb.net/mern-shopping-list?retryWrites=true&w=majority'
  );
  const posts = [
    new Post({
      // user id
      user: '5f29fb5a3cb26f10bc4ee8b2',
      title:
        'Graffiti photographer Martha Coopers quest to document street art celebrated in new documentary',
      imageUrl: 'https://i.ibb.co/0qfwsmg/11511108-3x2-xlarge.jpg',
      text:
        'As the group exits at breakneck speed and disappears into the night, running alongside the crew is a silver-haired photographer, who jumps into a car and starts to drive.\nWelcome to a day in the life of Martha "Marty" Cooper — where writers "bomb", and dead-of-night graffiti runs are all just part of the job.\nInside the car, Cooper clasps her hand to her face and begins to giggle as a digitally distorted voice from the backseat says: "But they came out great pictures!"\nThe masked crew is well-known Berlin graffiti collective cum vandals 1Up Crew, and their May 2017 Berlin metro exploits resulted in a collaborative photo book with Cooper.\nThe events at Heinrich-Heine-Straße metro were captured by the 1Up Crew on chest-mounted GoPro cameras and supplied to Australian director Selina Miles for Martha: A Picture Story, a new documentary (and winner of the 2019 Sydney Film Festival Audience Award for Best Documentary) chronicling Coopers remarkable five-decade-long career behind the lens and at the forefront of a global art movement.',
      // name of the user
      name: 'Morgan Shelton',
      avatar:
        'https://viewer-ebook.books.com.tw/viewer/epub/web/?book_uni_id=E050060436_reflowable_normal',
    }),
    new Post({
      // user id
      user: '5f29fb5a3cb26f10bc4ee8a9',
      title: 'Getting Up, Staying Up: History of Graffiti in the L.A. River',
      imageUrl: 'https://i.ibb.co/cxp8Kxk/lariver93-003.jpg',
      text:
        "\"For us the river is like the last adventure in the city. We would go in tunnels under the river and you feel like you're the first person that's ever been down there, but then you start shining a light around and you'll see a tag that says some 'high school band, 1963'. It confirms that people were here before me,\" said Evan Skrederstu, a visual artist and co-­author of the book \"The Ulysses Guide to the Los Angeles River: Volume 1,\" that focuses on the biology and art of the river.\nSkrederstu started painting graffiti in the river in the '90s when it was still a no-man's land. Sightings of a dead bodies, drug deals or shootouts were commonplace. Since the Army Corp of Engineers moved to channelize the river in 1938, the river's 51-mile stretch of grey concrete walls and low police presence has offered graffiti writers not only a large canvas for colorful murals, but also the lure of adventure in a place seemingly devoid of laws. Skrederstu's experience is not unique, with the river playing host to tags that date as far back as the early 1900s, making the river a physical timeline of the human experience along it.\nLong before pushes for cleanup efforts and arts initiatives, the river was largely regarded as a repository for urban runoff. Graffiti artists were brought life and vibrancy to the river, something that had been missing since it was paved over. Even so, conversations about the future of the river have excluded graffiti artists who have been trying to carve out their place in larger plans for the river.",
      // name of the user
      name: 'Justin Casey',
      avatar:
        'https://i.ibb.co/0GJNHqx/02-shutterstock-370033352-mimagephotography-1024x683.jpg',
    }),
    new Post({
      // user id
      user: '5f29fb5a3cb26f10bc4ee8a6',
      title: 'S. California graffiti taggers becoming armed, dangerous',
      imageUrl:
        'https://i.ibb.co/GpSr1HK/eee71321-433d-5e0a-8eb7-718f29a136bd-image.jpg',
      text:
        'LOS ANGELES — One man got stabbed. Another got shot in the chest. A 6-year-old boy was temporarily blinded when he was spray-painted in the face.\nAnd they were the lucky ones among those who have had run-ins with graffiti "crews," or gangs.\nOver the past 2 1/2 years in Southern California, three people have been killed after trying to stop graffiti vandals in the act. A fourth died after being shot while watching a confrontation between crews in a park.\n"We have seen a marked increase in these graffiti-tagging gangs taking to weapons and fighting to protect their walls, their territory, their name," said Los Angeles County sheriff\'s Lt. Robert Rifkin.\nLos Angeles County has battled graffiti for decades, spending $30 million a year to paint over or clean up the emblems, names and other images spray-painted on stores, concrete-lined riverbeds, rail lines, phone booths, buses, even police cars. On Wednesday, Gov. Arnold Schwarzenegger signed a law requiring convicted graffiti vandals to remove their scrawl.',
      // name of the user
      name: 'Joe Murphy',
      avatar:
        'https://i.ibb.co/0GJNHqx/02-shutterstock-370033352-mimagephotography-1024x683.jpg',
    }),
    new Post({
      // user id
      user: '5f29fb5a3cb26f10bc4ee8ae',
      title: 'One Pointed Attention',
      imageUrl: 'https://i.ibb.co/Q8zqMfK/murals-lajolla-727x545.jpg',
      text:
        'Since 2010, the "Murals of La Jolla", a joint project of the La Jolla Community Foundation and The Athenaeum Music & Arts Library, has brought enormous works from heavy hitters like John Baldessari, Terry Allen, Catherine Opie and Mark Bradford to the already scenic seaside village. One of the local stars featured in the collection is Kelsey Brookes, who contributes his psychedelic "One Pointed Attention." Visitors respond playfully to the pulsating waves - but Brookes says his intent was actually to create "a two-dimensional representation of meditation." Snap your selfie, and then take a moment to pause, focus and let your eye follow the path of his brush. With a refreshed perspective, go on to visit fifteen other murals within walking distance. More on the Murals of La Jolla. Where: 7835 Ivanhoe Ave, San Diego, CA 92037',
      // name of the user
      name: 'Zoie Tyson',
      avatar: 'https://i.ibb.co/TPbP0th/70d66947842d331dbd622938b4595b13.jpg',
    }),
    new Post({
      // user id
      user: '5f29fb5a3cb26f10bc4ee8af',
      title: 'Colossus',
      imageUrl: 'https://i.ibb.co/PgZ7RqB/727x545-Colossus.jpg',
      text:
        'Chicano Park is a cultural treasure not only for the story of how it came to be but also because of the quality of its art, which has been decades in the making. Roughly 80 artworks fill seven acres of parkland, reaching high into the sky on the concrete pylons supporting the Coronado Bay Bridge. The first were painted in 1973, approximately two dozen were restored in 2011 and 2012, and in 2017 the collection was named a National Historic Landmark.   A part of this catalyst group of muralists who started the evolution of what Chicano Park is today is Mario Torero.  Torero, a dedicated artist and self-proclaimed “artivista,” is responsible for iconic pieces like “Colossus” which he painted in 1975. Torero describes the mural as the “reawakening of the Sleeping Giant, setting off the imagination of all pass-byers.”  More on the Murals of Chicano Park. Where: National Ave & S Evans St, San Diego, CA 92101',
      // name of the user
      name: 'Dorothy Terrell',
      avatar:
        'https://i.ibb.co/8jLGB5G/b06bf3508521b75cdb26e7a93f5688cd-bun-hair-face-hair.jpg',
    }),
    new Post({
      // user id
      user: '5f29fb5a3cb26f10bc4ee8b0',
      title: 'SeaWalls: Murals for Oceans',
      imageUrl: 'https://i.ibb.co/PFTjWDG/murals-hillcrest-727x545.jpg',
      text:
        'In the fall of 2016, San Diego\'s Cohort Collective teamed up with Hawaii-based PangeaSeed Foundation, the music festival KAABOO, Surfrider Foundation and several national and international artists including Askew, Lauren YS, Aaron Glasson and Persue. They installed 18 murals designed to raise environmental issues by "taking the oceans to the streets." From Encinitas to Imperial Beach, they created poignant and passionate statements on overfishing, whale and dolphin captivity, and ocean acidification. In Hillcrest, the back side of Artist & Craftsman Supply provided the spot for muralist Jet Martinez. Soak in the lush forms and delicate tracery evoking Mexican embroidery, but take note of the message: Pesticides used in commercial flower production end up in the sea, damaging reef ecosystems. More on the Sea Walls Project.Where: 3804 Fourth Avenue, San Diego, CA 92103',
      // name of the user
      name: 'Evie Lawson',
      avatar:
        'https://i.ibb.co/LYPS785/03-shutterstock-450728395-F8-studio-1024x683.jpg',
    }),
  ];
  // https://www.sandiego.org/articles/arts-culture/murals.aspx good source for img

  let i;
  for (i = 0; i < posts.length; i++) {
    posts[i].save(() => {
      if (i === posts.length) {
        mongoose.disconnect();
      }
    });
  }
} catch (err) {
  console.error(err.mesage);
  process.exit(1);
}
