// REST API

var dummy_posts = [
  {
    ID: 1,
    title: "First Post",
    permalink: 'http://example.com/first-post/',
    date: '1/2/16',
    author: 'John Potess',
    content: "Ex fap organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party helvetica organic four dollar toast est vice bitters waistcoat. Pickled post-ironic exercitation roof party master cleanse. Delectus green juice cupidatat, sint ex taxidermy mlkshk. Hoodie heirloom dolore man bun, blog scenester franzen pabst bushwick neutra. Occupy kale chips tattooed biodiesel listicle bicycle rights. Chia 8-bit flexitarian, venmo fingerstache et humblebrag excepteur esse williamsburg schlitz hashtag wolf gastropub chillwave. Kale chips dolor nihil, laboris photo booth drinking vinegar pitchfork squid pour-over eiusmod.",
    excerpt: "Ex fap organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut."
  },
  {
    ID: 2,
    title: "Second Post",
    permalink: 'http://example.com/second-post/',
    date: '2/2/16',
    author: 'John Potess',
    content: "Fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party helvetica organic four dollar toast est vice bitters waistcoat. Pickled post-ironic exercitation roof party master cleanse. Delectus green juice cupidatat, sint ex taxidermy mlkshk. Hoodie heirloom dolore man bun, blog scenester franzen pabst bushwick neutra. Occupy kale chips tattooed biodiesel listicle bicycle rights. Chia 8-bit flexitarian, venmo fingerstache et humblebrag excepteur esse williamsburg schlitz hashtag wolf gastropub chillwave. Kale chips dolor nihil, laboris photo booth drinking vinegar pitchfork squid pour-over eiusmod.",
    excerpt: "Fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut."
  },
  {
    ID: 3,
    title: "Third Post",
    permalink: 'http://example.com/Third-post/',
    date: '3/2/16',
    author: 'John Potess',
    content: "Organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party helvetica organic four dollar toast est vice bitters waistcoat. Pickled post-ironic exercitation roof party master cleanse. Delectus green juice cupidatat, sint ex taxidermy mlkshk. Hoodie heirloom dolore man bun, blog scenester franzen pabst bushwick neutra. Occupy kale chips tattooed biodiesel listicle bicycle rights. Chia 8-bit flexitarian, venmo fingerstache et humblebrag excepteur esse williamsburg schlitz hashtag wolf gastropub chillwave. Kale chips dolor nihil, laboris photo booth drinking vinegar pitchfork squid pour-over eiusmod.",
    excerpt: "Organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut."
  },
  {
    ID: 4,
    title: "Fourth Post",
    permalink: 'http://example.com/first-post/',
    date: '4/2/16',
    author: 'John Potess',
    content: "Fap organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party helvetica organic four dollar toast est vice bitters waistcoat. Pickled post-ironic exercitation roof party master cleanse. Delectus green juice cupidatat, sint ex taxidermy mlkshk. Hoodie heirloom dolore man bun, blog scenester franzen pabst bushwick neutra. Occupy kale chips tattooed biodiesel listicle bicycle rights. Chia 8-bit flexitarian, venmo fingerstache et humblebrag excepteur esse williamsburg schlitz hashtag wolf gastropub chillwave. Kale chips dolor nihil, laboris photo booth drinking vinegar pitchfork squid pour-over eiusmod.",
    excerpt: "Fap organic esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut."
  },
  {
    ID: 5,
    title: "First Post",
    permalink: 'http://example.com/fifth-post/',
    date: '5/2/16',
    author: 'John Potess',
    content: "Esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut. Umami irony swag brooklyn fixie, typewriter eiusmod. Humblebrag mustache esse, mlkshk taxidermy helvetica artisan food truck tempor umami. \n Tousled pinterest culpa venmo, enim roof party art party helvetica organic four dollar toast est vice bitters waistcoat. Pickled post-ironic exercitation roof party master cleanse. Delectus green juice cupidatat, sint ex taxidermy mlkshk. Hoodie heirloom dolore man bun, blog scenester franzen pabst bushwick neutra. Occupy kale chips tattooed biodiesel listicle bicycle rights. Chia 8-bit flexitarian, venmo fingerstache et humblebrag excepteur esse williamsburg schlitz hashtag wolf gastropub chillwave. Kale chips dolor nihil, laboris photo booth drinking vinegar pitchfork squid pour-over eiusmod.",
    excerpt: "Esse, fanny pack magna street art. Lomo small batch nisi, listicle ut ennui wayfarers four loko tempor blog leggings forage pour-over. Pabst try-hard wayfarers craft beer, next level typewriter put a bird on it officia sartorial. Keffiyeh 90's dreamcatcher butcher, vegan banh mi et kickstarter commodo. Everyday carry pour-over kinfolk, squid bicycle rights etsy blog irony minim pop-up ut."
  }  
]