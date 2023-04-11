const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');
main().catch(err => {
    console.log(err)
});
async function main() {
    await mongoose.connect('mongodb://localhost:27017/yelp-camp');
    console.log("Connection open");
}
const sample = array => {
    return array[Math.floor(Math.random() * array.length)];
}
const seedDB = async () => {
    await Campground.deleteMany({});
    for (i = 0; i < 500; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: "6435a8fcf90563b9788f58f4",
            location: `${cities[random1000].city},${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type: 'Point', coordinates: [
                    cities[random1000].longitude, cities[random1000].latitude
                ]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dcmqbtd3z/image/upload/v1680968612/YelpCamp/ogp1eowmkgum94bugm5l.jpg',
                    filename: 'YelpCamp/ogp1eowmkgum94bugm5l',
                },
                {
                    url: 'https://res.cloudinary.com/dcmqbtd3z/image/upload/v1680968612/YelpCamp/bfk94zk0w5bap1dnnine.jpg',
                    filename: 'YelpCamp/bfk94zk0w5bap1dnnine',
                }
            ],
            description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro distinctio dolorem molestias ipsa nam inventore eum fuga expedita cumque nesciunt a repellat, assumenda dolore tempore nisi, tempora iure, ab explicabo.',
            price

        })


        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
});