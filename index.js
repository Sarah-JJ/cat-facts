const express = require('express');
const index = express();
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;
const cors = require('cors');


index.use(cors());





let port = process.env.PORT || 3000;


mongoose.connect('mongodb://admin22:admin22@ds149754.mlab.com:49754/cat-facts',{useNewUrlParser: true}, (err) => {
    if(err)
        console.log(err);
    else console.log('connected to db...');

});

console.log("started ... ")


index.get('/', (req, res) => {
    FactModel.find({}, function (err, all) {
        if (err) {
            res.json({"err": err});
        } else {
            res.json({all});
        }
    });

    // res.sendFile('facts.json');
});


index.get('/facts', (req, res) => {

    res.json(  factsJson  );
});

index.post('/', (req, res) =>{

});


const factSchema = mongoose.Schema({
    text: String,
    type: String,
    user: {
        "_id": ObjectId,
        "name": {
            "first": String,
            "last": String
        }
    },
    "upvotes": Number,
    "userUpvoted": Boolean
});

let FactModel = mongoose.model('All', factSchema, "all");




let factsJson = {


    "all": [
        {
            "_id": "591d9b2f227c1a0020d26823",
            "text": "Every year, nearly four million cats are eaten in China as a delicacy.",
            "type": "cat",
            "user": {
                "_id": "587288f6e6f85e64ae1c7ef7",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 3,
            "userUpvoted": false
        },
        {
            "_id": "59a60ba66acf530020f35873",
            "text": "Most cats don't like water because their coats do not insulate them well enough.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 3,
            "userUpvoted": false
        },
        {
            "_id": "5b4912c60508220014ccfe99",
            "text": "Cats aren’t the only animals that purr — squirrels, lemurs, elephants, and even gorillas purr too.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 3,
            "userUpvoted": false
        },
        {
            "_id": "58e008780aac31001185ed05",
            "text": "Owning a cat can reduce the risk of stroke and heart attack by a third.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e008b80aac31001185ed0d",
            "text": "Adult cats only meow to communicate with humans.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58f9b96132ffea00208fe9b7",
            "text": "rerewr",
            "type": "cat",
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e009790aac31001185ed14",
            "text": "The technical term for \"hairball\" is \"bezoar.\"",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "590b9d90229d260020af0b06",
            "text": "Evidence suggests domesticated cats have been around since 3600 B.C., 2,000 years before Egypt's pharaohs.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58923f2fc3878c0011784c79",
            "text": "I don't know anything about cats.",
            "type": "cat",
            "user": {
                "_id": "5887e9f65c873e001103688d",
                "name": {
                    "first": "Jackson",
                    "last": "Sippe"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00b8b0aac31001185edf8",
            "text": "A cat can jump up to six times its length.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00c080aac31001185ee01",
            "text": "Cats only sweat through their foot pads.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "590c752b5363e000200d5141",
            "text": "Kangaroos can't hop backwards",
            "type": "cat",
            "user": {
                "_id": "590c74045363e000200d5140",
                "name": {
                    "first": "Hampton",
                    "last": "McGrath"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "599f89639a11040c4a163440",
            "text": "Here is a video of some cats in zero gravity. youtu.be/O9XtK6R1QAk",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "59cd7a97c828120020f7d3a1",
            "text": "Since cats treat us like cats and depend on us for things like food, water, and opening the door to let them out, they do recognize, that we are in some way in charge — the “big cat” in the shared territory. As territorial animals, our cats are constantly wondering why we’re not doing other cat things that the big cat would normally do in their territory. In fact, the “let me in, let me out, let me in” phenomenon is a good example. The bigger cat ostensibly rules the territory and therefore should be the one patrolling and marking it with pee so other cats stay away. But since humans don’t do this, indoor-outdoor cats reluctantly take on the role themselves. The apparent neuroticism of cats wanting to go outside every five minutes only to be let right back in is funny to us because it seems so silly and unnecessary. But to the cats, it’s very necessary (and frustrating) to cover for their dumb pals.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b1b40cc841d9700146158d7",
            "text": "In most US states, declawing cats is legal but in the European Union it is not.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b4911e60508220014ccfe95",
            "text": "A female cat is called a “molly” or a “queen”.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58cafac6ffae36001108d586",
            "text": "Cats have fur",
            "type": "cat",
            "user": {
                "_id": "58c86fe52341fc0011d7b151",
                "name": {
                    "first": "Alex",
                    "last": "Simon"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e007cc0aac31001185ecf5",
            "text": "Cats are the most popular pet in the United States: There are 88 million pet cats and 74 million dogs.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e008510aac31001185ecfe",
            "text": "In tigers and tabbies, the middle of the tongue is covered in backward-pointing spines, used for breaking off and gripping meat.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e008c50aac31001185ed0e",
            "text": "The world's richest cat is worth $13 million after his human passed away and left her fortune to him.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e008630aac31001185ed01",
            "text": "When cats grimace, they are usually \"taste-scenting.\" They have an extra organ that, with some breathing control, allows the cats to taste-sense the air.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e008a30aac31001185ed0b",
            "text": "A cat's purr may be a form of self-healing, as it can be a sign of nervousness as well as contentment.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e008d00aac31001185ed0f",
            "text": "Your cat recognizes your voice but just acts too cool to care (probably because they are).",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00a850aac31001185ed1a",
            "text": "Cats have a longer-term memory than dogs, especially when they learn by actually doing rather than simply seeing.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00b3a0aac31001185ed20",
            "text": "Polydactyl cats are also referred to as \"Hemingway cats\" because the author was so fond of them.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00b5f0aac31001185ed24",
            "text": "When asked if her husband had any hobbies, Mary Todd Lincoln is said to have replied \"cats.\"",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00bdb0aac31001185edfd",
            "text": "Cats can change their meow to manipulate a human. They often imitate a human baby when they need food, for example.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00b820aac31001185edf7",
            "text": "One legend claims that cats were created when a lion on Noah's Ark sneezed and two kittens came out.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "591d9bce227c1a0020d26827",
            "text": "In Korea and Japan, there is a Cat Cafe where you can go to drink coffee and hang out with cats for hours.",
            "type": "cat",
            "user": {
                "_id": "587288f6e6f85e64ae1c7ef7",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e00ba00aac31001185edfa",
            "text": "When cats leave their poop uncovered, it is a sign of aggression to let you know they don't fear you.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5a038d5a8e3dbc001f719791",
            "text": "Cats have 38 chromosomes in each zygote cell.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5a038dae8e3dbc001f719792",
            "text": "Cucumbers look enough like a snake to cause a cat's instinctive fear of snakes to kick in, causing it to panic and flee.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5a36ec5fae877e0021ed79f5",
            "text": "It has been estimated that a cat yawns on the average of 109,500 times in his life.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5a4d766c6ef087002174c288",
            "text": "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by “crossing” its eyes.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5a4d76916ef087002174c28b",
            "text": "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b1b4014841d9700146158d0",
            "text": "In 1879, Belgium unsuccessfully tried to use cats to deliver mail.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b1b4055841d9700146158d3",
            "text": "Scottish sailer Alexander Selkirk once survived for 4 years on a deserted island thanks to feral cats that protected him from large rats during the night.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b1b4065841d9700146158d4",
            "text": "A cat named Emmy lived aboard the RMS Empress of Ireland and she never missed a voyage. On May 28,1914, however, she refused to board. The ship left without her and then sank the following day.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b1b408a841d9700146158d5",
            "text": "Domestic cats will try not to drink from a water bowl that is next to their food. This is because in the wild, water next to their kill could be contaminated.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b1b40d4841d9700146158d8",
            "text": "Koko the gorilla got a pet cat for her birthday in 1985 after she requested to have one as a birthday present.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b1b411d841d9700146158d9",
            "text": "The Egyptian Mau’s name is derived from the Middle Egyptian word mjw, which means cat. But contrary to its name, it’s unclear whether the modern Egyptian Mau actually originated in Egypt.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b3bd7d24cf4e10014bfd199",
            "text": "The myth that a cat has nine lives comes from their ability to jump and land from high places. The number 9 is believed by some to originate from William Shakespeare's Romeo and Juliet: \"A cat has nine lives. For three he plays, for three he strays, and for the last three he stays.\"",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b3d8e4960d3890713ca39a8",
            "text": "A Chinese cat named Baidianr (meaning \"white spot\") had a unique ability to choose World Cup winners. He predicted the winner of the soccer competition 6 years in a row, before he died on June 2, 2018, just before the event ended.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b453e380fd3a600147f32f3",
            "text": "Exposure to UV light with hairless or partially-hairless cats can result in sunburn, even during cloudy or shady conditions. If your cat risks overexposure, consider applying sunscreen daily.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b4909af0508220014ccfe8a",
            "text": "Cats have a layer called the tapetum lucidum just behind their retina which reflects light inside the eye, helping it capture more light. This reflected light is the glow you see when taking a photo of a cat with the flash on.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5b2440d680595d0014f53365",
            "text": "Parker's cat is a Maine Coon and weights 20 pounds.",
            "type": "cat",
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "58e009390aac31001185ed10",
            "text": "Most cats are lactose intolerant, and milk can cause painful stomach cramps and diarrhea. It's best to forego the milk and just give your cat the standard: clean, cool drinking water.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 2,
            "userUpvoted": false
        },
        {
            "_id": "5894af975cdc7400113ef7f9",
            "text": "The technical term for a cat’s hairball is a bezoar.",
            "type": "cat",
            "user": {
                "_id": "587288f6e6f85e64ae1c7ef7",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "58e007db0aac31001185ecf7",
            "text": "There are cats who have survived falls from over 32 stories (320 meters) onto concrete.",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "58e008800aac31001185ed07",
            "text": "Wikipedia has a recording of a cat meowing, because why not?",
            "type": "cat",
            "user": {
                "_id": "58e007480aac31001185ecef",
                "name": {
                    "first": "Kasimir",
                    "last": "Schulz"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b199196ce456e001424256a",
            "text": "Cats can distinguish different flavors in water.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "591d9bab227c1a0020d26825",
            "text": "Owning a cat can reduce the risk of heart attacks and strokes by more than a third, researchers found.",
            "type": "cat",
            "user": {
                "_id": "587288f6e6f85e64ae1c7ef7",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5955792c7b77520020799431",
            "text": "Cats \"knead\" because of seperation from their mothers",
            "type": "cat",
            "user": {
                "_id": "595579027b77520020799430",
                "name": {
                    "first": "Is It Still Memes That",
                    "last": "Make You Sweat?"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59664b1f474ba80020ef8592",
            "text": "Your cat's instincts tell her that a paperweight or knickknack could turn out to be a mouse. Her poking paw would send it scurrying, giving her a good game. This is probably why cats always seem to be knocking the glasses off your counter tops!",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59669484bf604b00205c20e3",
            "text": "The fear of cats is called \"Ailurophobia\"",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "596e4989b863f300203102f4",
            "text": "Black cats are less likely to be adopted because of their \"appearance\".",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "596f4f50a8d3440020e2d77d",
            "text": "Due to the controversy, though loved by most, the Kashmir is overlooked by many cat fanciers.",
            "type": "cat",
            "user": {
                "_id": "596ea14ed4d9720020401f7b",
                "name": {
                    "first": "Kenny",
                    "last": "Corsig"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5974fb4dfedacb0020b5b4cc",
            "text": "Cats can survive falls from up to 65 feet or more.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "599f87db9a11040c4a16343f",
            "text": "The goddess of love, beauty, and fertility in Norse mythology, Freyja was the first cat lady. She is depicted in stories as riding a chariot that was drawn by cats.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59a60b896acf530020f3586d",
            "text": "Cat owners are 25% likely to pick George Harrison as their favorite Beatle.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59a60b936acf530020f3586f",
            "text": "Only 11.5% of people consider themselves \"cat people\".",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59a60b996acf530020f35870",
            "text": "\"Cat people\" are 11% more likely to be introverted than others.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59a60b9e6acf530020f35871",
            "text": "The Egyptian Mau is the oldest breed of cat, and is the fastest pedigreed cat.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59a60bae6acf530020f35875",
            "text": "Cats were mythic symbols of divinity in ancient Egypt.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59b15b18d6eb960020d6767a",
            "text": "The place where Julius Caesar was murdered is now a cat sanctuary.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59ceab6d5c87bf0020b94e0a",
            "text": "The Bombay cat breed was developed to resemble a miniature panther.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59d297abc6671e0020957eb8",
            "text": "Cats use their whiskers to judge whether they’ll fit through a space.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59d297b7c6671e0020957eb9",
            "text": "Kittens sleep so much because the growth hormone is only released when they sleep.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a026058134ec2001f032f92",
            "text": "For a cat at rest, the average heart rate usually is between 150 and 180 bpm, more than twice that of a human, which averages 70 bpm.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a026092134ec2001f032f95",
            "text": "Compared to other felines, domestic cats have narrowly spaced canine teeth, adapted to their preferred prey of small rodents.",
            "type": "cat",
            "user": {
                "_id": "587288f6e6f85e64ae1c7ef7",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a0260d1134ec2001f032f98",
            "text": "Cats, like dogs, are digitigrades. They walk directly on their toes, with the bones of their feet making up the lower part of the visible leg.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a038bb98e3dbc001f71978d",
            "text": "The domestic cat (Felis catus) is a small, typically furry, carnivorous mammal.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a038c178e3dbc001f71978e",
            "text": "A cat's kidneys are so efficient, it can survive on a diet consisting only of meat, with no additional water, and can even rehydrate by drinking seawater.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a038c628e3dbc001f71978f",
            "text": "Most breeds of cat have a noted fondness for settling in high places, or perching. In the wild, a higher place may serve as a concealed site from which to hunt.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a038cdf8e3dbc001f719790",
            "text": "The ability of a cat to reflexively twist its body and balance itself during a fall is known as the \"cat righting reflex\".",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a038e188e3dbc001f719793",
            "text": "The cat's tongue has backwards-facing spines about 500 μm long, which are called papillae. These contain keratin which makes them rigid so the papillae act like a hairbrush.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a038fba8e3dbc001f719794",
            "text": "Among domestic cats, males are more likely to fight than females.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a12460add20f9001fb45060",
            "text": "The softest part of a cat is most definitely its cheek area.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a21a9fb425e43002132f045",
            "text": "Hank the Cat was a Maine Coon feline that was put up as a joke candidate in the 2012 United States Senate election in Virginia, a feat which gained international coverage after Hank reportedly came third behind the two major candidates, including Vice Presidential candidate Tim Kaine.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a36eb68ae877e0021ed79f3",
            "text": "When a cat yawns, it's mouth opens so wide that you can count every tooth.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a456246255f4b0021f54c04",
            "text": "A cat can die from essential oils",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4aab252c99ee00219e11c3",
            "text": "Cats can move their ears 180 degrees.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4aab2c2c99ee00219e11c4",
            "text": "Hearing is the strongest of cat's senses: They can hear sounds as high as 64 kHz — compared with humans, who can hear only as high as 20 kHz.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4aab322c99ee00219e11c5",
            "text": "Cats have free-floating clavicle bones that attach their shoulders to their forelimbs, which allows them to squeeze through very small spaces.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4bfbbab0810f0021748b91",
            "text": "Lil' Bunny Sue Roux is a cat who was born with no front legs, and walks upright like a kangaroo. https://www.instagram.com/lilbunnysueroux",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4bfc91b0810f0021748b92",
            "text": "Blackie became the richest cat in history when he inherited 15 million British Pounds.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4bfcd3b0810f0021748b93",
            "text": "Colonel Meow, a Himalayan-Persian mix who became famous on social media websites for his extremely long fur and scowling face, holds the Guinness world record for longest hair on a cat (nine inches).",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4bfdf8b0810f0021748b94",
            "text": "Towser \"The Mouser\" of Glenturret Distillery in Crieff, Scotland, holds the Guinness World Record for the most mice caught (28,899).",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d75a38827521790281b99",
            "text": "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d75ac8827521790281b9a",
            "text": "The cat who holds the record for the longest non-fatal fall is Andy. He fell from the 16th floor of an apartment building (about 200 ft/.06 km) and survived.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d75e46ef087002174c284",
            "text": "Cats have about 130,000 hairs per square inch (20,155 hairs per square centimeter).",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d76516ef087002174c287",
            "text": "If they have ample water, cats can tolerate temperatures up to 133 °F.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d767c6ef087002174c28a",
            "text": "Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d76b16ef087002174c28c",
            "text": "The first cartoon cat was Felix the Cat in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon “Puss Gets the Boot.” In 1981 Andrew Lloyd Weber created the musical Cats, based on T.S. Eliot’s Old Possum’s Book of Practical Cats.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d776e6ef087002174c291",
            "text": "The claws on the cat’s back paws aren’t as sharp as the claws on the front paws because the claws in the back don’t retract and, consequently, become worn.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d78136ef087002174c292",
            "text": "Like humans, cats tend to favor one paw over another.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d79016ef087002174c293",
            "text": "The most traveled cat is Hamlet, who escaped from his carrier while on a flight. He hid for seven weeks behind a panel on the airplane. By the time he was discovered, he had traveled nearly 373,000 miles (600,000 km).",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d79496ef087002174c294",
            "text": "Approximately 40,000 people are bitten by cats in the U.S. annually.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4d79fb6ef087002174c295",
            "text": "The little tufts of hair in a cat’s ear that help keep out dirt direct sounds into the ear, and insulate the ears are called \"ear furnishings.\"",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b01a447c6914f0014cc9a30",
            "text": "The special sensory organ called the Jacobson's organ allows a cat to have 14 times the sense of smell of a human. It consists of two fluid-filled sacs that connect to the cat's nasal cavity and is located on the roof of their mouth behind their teeth.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b085f85be3157001432164f",
            "text": "The Australian Wildlife Conservancy completed a 44km cat-proof fence in 2018 to prevent feral cats from entering the Newhaven wildlife sanctuary, who kill about a million native birds every night across Australia and have caused the extinction of 20 native species.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "59a60baa6acf530020f35874",
            "text": "Black cats are bad luck in the United States, but they are good luck in the United Kingdom and Australia.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a026087134ec2001f032f94",
            "text": "The cat skull is unusual among mammals in having very large eye sockets and a powerful and specialized jaw.",
            "type": "cat",
            "user": {
                "_id": "587288f6e6f85e64ae1c7ef7",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4aab132c99ee00219e11c2",
            "text": "Cats have scent glands along their tail, their forehead, lips, chin, and the underside of their front paws.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5a4aab372c99ee00219e11c6",
            "text": "The french tuxedo kitty, Félix, aka \"Astrocat\", was the first cat to go to space. She survived the trip.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b49110d0508220014ccfe91",
            "text": "Issac Newton decided to invent the cat flap because his own cat, Spithead, kept opening the door and spoiling his light experiments.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b4911340508220014ccfe92",
            "text": "Kittens start to dream when they’re about a week old.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b3fd8841d9700146158ce",
            "text": "Thank to an extremely efficient pair of kidneys, cats can hydrate themselves by drinking salt water.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b183fea64c2b20014b38f52",
            "text": "A cats whiskers are the exact width of their body.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b3f48841d9700146158cb",
            "text": "At night, Disneyland is overrun by cats. The theme park feeds them and takes care of them though, because they keep the rodent population in check.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b3f56841d9700146158cc",
            "text": "Cats lack antibodies against dog blood so they can only receive it via a transfusion once. The second time would kill them.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b3f6c841d9700146158cd",
            "text": "The Indiana State Prison allows prisoners to adopt a cat and keep it in their cell. They are meant to improve the mood of the prisoners.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b3feb841d9700146158cf",
            "text": "In Islam, cats are revered for their cleanliness. Muhammad is reported to have said that \"a love of cats is an aspect of faith\".",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b4022841d9700146158d1",
            "text": "Oftentimes shelters won't let black cats be adopted around Halloween out of a fear that they may be sacrificed.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b4039841d9700146158d2",
            "text": "When cats bring dead animals back to their humans, they are \"teaching them to hunt\" as they would with a younger cat.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b4241841d9700146158da",
            "text": "Cat fanciers bred and exhibited Maus in Europe until World War II, when attention toward the cat waned and it nearly went extinct.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b1b455f841d9700146158db",
            "text": "The Egyptian Mau breed was saved from extinciton when Russian princess Natalie Trubetskaya was given a Mau that was imported from the Middle East. When she emigrated to New York City in 1956, she brought along three Mau cats. She used these kitties to establish the Fatima Egyptian Mau cattery, which produced many of the ancestors of today’s Egyptian Maus in America.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b4911770508220014ccfe93",
            "text": "Unlike kittens, adult cats don’t release any particular key hormones during sleep. They snooze all day just because they can. :)",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b4912650508220014ccfe98",
            "text": "Russian scientists discovered in the 1930s that Siamese kittens kept in very warm rooms didn't develop the breed's signature dark patches.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b4912000508220014ccfe96",
            "text": "Cats have a third eyelid called a “haw”. It’s generally only visible when they’re unwell.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5b4912320508220014ccfe97",
            "text": "In the original Italian version of Cinderella, the benevolent fairy godmother figure was a cat.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "58e008450aac31001185ecfd",
            "text": "A cat was mayor of Talkeetna, Alaska, for 20 years. His name is Stubbs, and he died on July 23, 2017.",
            "type": "cat",
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5c470572a99c3f00140fe4bd",
            "text": "Cats like being brushed by their owners, because it reminds them of their mother.",
            "type": "cat",
            "user": {
                "_id": "5c470492a99c3f00140fe4bc",
                "name": {
                    "first": "David",
                    "last": "Gippner"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "5c489117e4f6130014c987b9",
            "text": "Leonardo da Vinci created a series of drawings titled \"Study of Cat Movements and Positions\", which consists of more than twenty drawings of cats and lions lying a sleep, sitting, playing, and fighting.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 1,
            "userUpvoted": false
        },
        {
            "_id": "591f97c28dec2e14e3c20afa",
            "text": "A happy cat holds her tail high and steady.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98448dec2e14e3c20b1d",
            "text": "Cat's urine glows under a black light.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f7aab0cf1d60ee8afcd61",
            "text": "A cat's brain is more similar to a man's brain than that of a dog.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f7aab0cf1d60ee8afcd62",
            "text": "The cat's clavicle, or collarbone, does not connect with other bones but is buried in the muscles of the shoulder region. This lack of a functioning collarbone allows them to fit through any opening the size of their head.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97a9ccb34a14d3f7dc8f",
            "text": "Cats purr at the same frequency as an idling diesel engine, about 26 cycles per second.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97a9ccb34a14d3f7dc90",
            "text": "The Pilgrims were the first to introduce cats to North America.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97acccb34a14d3f7dc91",
            "text": "Almost 10% of a cat's bones are in its tail, and the tail is used to maintain balance.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97acccb34a14d3f7dc92",
            "text": "A cat can spend five or more hours a day grooming himself.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97b4ccb34a14d3f7dc93",
            "text": "A cat's normal temperature varies around 101 degrees Fahrenheit.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97b4ccb34a14d3f7dc94",
            "text": "Cats can get tapeworms from eating fleas. These worms live inside the cat forever, or until they are removed with medication. They reproduce by shedding a link from the end of their long bodies. This link crawls out the cat's anus, and sheds hundreds of eggs. These eggs are injested by flea larvae, and the cycles continues. Humans may get these tapeworms too, but only if they eat infected fleas. Cats with tapeworms should be dewormed by a veterinarian.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97bcccb34a14d3f7dc95",
            "text": "Declawing a cat is the same as cutting a human's fingers off at the knuckle. There are several alternatives to a complete declawing, including trimming or a less radical (though more involved) surgery to remove the claws. Instead, train your cat to use a scratching post.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97bcccb34a14d3f7dc96",
            "text": "Cats' hearing stops at 65 khz (kilohertz); humans' hearing stops at 20 khz.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97c28dec2e14e3c20af9",
            "text": "Has your cat ever brought its prey to your door? Cats do that because they regard their owners as their \"kittens.\" The cats are teaching their \"kittens\" how to hunt by bringing them food. Most people aren't too delighted when a pet brings in their kill. Instead of punishing your cat, praise it for its efforts, accept the prey, and then secretly throw it away.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97c48dec2e14e3c20afb",
            "text": "The first breeding pair of Siamese cats arrived in England in 1884.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97c48dec2e14e3c20afc",
            "text": "Cats respond most readily to names that end in an \"ee\" sound.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97cc8dec2e14e3c20afd",
            "text": "Blue-eyed, white cats are often prone to deafness.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97dc8dec2e14e3c20b01",
            "text": "On September 6,1950, a four-month-old kitten belonging to Josephine Aufdenblatten of Geneva, Switzerland followed a group of climbers to the top of the 14,691 -ft. Matterhorn in the Alps.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97e08dec2e14e3c20b03",
            "text": "Ever wondered why kittens can all be different colours and look so different from their mums? The fact is that one in four pregnant cats carries kittens fathered by more than one mate. A fertile female may mate with several tom-cats, which fertilise different eggs each time.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97e88dec2e14e3c20b06",
            "text": "A female Amur leopard gives birth to one to four cubs in each litter.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98008dec2e14e3c20b0b",
            "text": "Cats have 30 teeth (12 incisors, 10 premolars, 4 canines, and 4 molars), while dogs have 42. Kittens have baby teeth, which are replaced by permanent teeth around the age of 7 months.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98088dec2e14e3c20b0d",
            "text": "In relation to their body size, cats have the largest eyes of any mammal.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98088dec2e14e3c20b0e",
            "text": "In 1987, cats overtook dogs as the number one pet in America (about 50 million cats resided in 24 million homes in 1986). About 37% of American homes today have at least one cat.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98108dec2e14e3c20b0f",
            "text": "Cats have been domesticated for half as long as dogs have been.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98108dec2e14e3c20b10",
            "text": "Cats must have fat in their diet because they can't produce it on their own.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98188dec2e14e3c20b11",
            "text": "Long, muscular hind legs enable snow leopards to leap seven times their own body length in a single bound.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98248dec2e14e3c20b15",
            "text": "A healthy cat has a temperature between 38 and 39 degrees Celcius.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f982c8dec2e14e3c20b18",
            "text": "A cat will spend nearly 30% of her life grooming herself.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f983c8dec2e14e3c20b1b",
            "text": "The Ancient Egyptian word for cat was mau, which means \"to see\".",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98448dec2e14e3c20b1e",
            "text": "At 4 weeks, it is important to play with kittens so that they do not develope a fear of people.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9854c5cbe314f7a7ad33",
            "text": "Normal body temperature for a cat is 102 degrees F.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9854c5cbe314f7a7ad34",
            "text": "It has been scientifically proven that stroking a cat can lower one's blood pressure.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c121",
            "text": "The life expectancy of cats has nearly doubled over the last fifty years.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c123",
            "text": "Among many other diseases, cats can suffer from anorexia, senility, feline AIDS and acne.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c125",
            "text": "An adult cat has 30 teeth, 16 on the top and 14 on the bottom.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c126",
            "text": "Cats eat grass to aid their digestion and to help them get rid of any fur in their stomachs.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c127",
            "text": "About 37% of American homes today have at least 1 cat.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c128",
            "text": "A cat has more bones than a human being; humans have 206 and the cat has 230 bones.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c12b",
            "text": "Cheetahs do not roar, as the other big cats do. Instead, they purr.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c12e",
            "text": "Neutering a cat extends its life span by two or three years.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c131",
            "text": "The color of the points in Siamese cats is heat related. Cool areas are darker.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c133",
            "text": "A tomcat (male cat) can begin mating when he is between 7 and 10 months old.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c134",
            "text": "Statistics indicate that animal lovers in recent years have shown a preference for cats over dogs!",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c138",
            "text": "Cats step with both left legs, then both right legs when they walk or run.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c13a",
            "text": "When a cats rubs up against you, the cat is marking you with it's scent claiming ownership.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce352d",
            "text": "A cat's tongue has tiny barbs on it.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c139",
            "text": "Female cats are \"polyestrous,\" which means they may have many heat periods over the course of a year. A heat period lasts about 4 to 7 days if the female is bred; if she is not, the heat period lasts longer and recurs at regular intervals.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c13d",
            "text": "When your cats rubs up against you, she is actually marking you as \"hers\" with her scent. If your cat pushes his face against your head, it is a sign of acceptance and affection.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c13e",
            "text": "Ninety-two per cent of cats are \"Moggies\", or, non-pedigrees. How did the name \"Moggie\" come about? One theory holds that it comes from old English dialect, where \"Moggie\" was used to designate a loose woman or prostitute. It is thought that this name was given to cats because they mate repeatedly with different males when they are in season.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c13f",
            "text": "In multi-cat households, cats of the opposite sex usually get along better.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c143",
            "text": "The largest breed of cat is the Ragdoll with males weighing in at 1 5 to 20 lbs. The heaviest domestic cat on record was a neutered male tabby named Himmy from Queensland, Australia who weighed 46 lbs. 1 5 oz.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c147",
            "text": "After humans, mountain lions have the largest range of any mammal in the Western Hemisphere.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c14b",
            "text": "Edward Lear, author of \"The Owl and the Pussycat\", is said to have had his new house in San Remo built to exactly the same specification as his previous residence, so that his much-loved tabby, Foss, would immediately feel at home.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c14c",
            "text": "The average cat sleeps between 12-14 hours a day.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c14f",
            "text": "Unlike humans, cats do not need to blink their eyes on a regular basis to keep their eyes lubricated.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c152",
            "text": "The word \"cat\" in various languages: French: chat; German: katze; Italian: gatto; Spanish/Portugese: gato; Yiddish: kats; Maltese: qattus; Swedish/Norwegian: katt; Dutch: kat; Icelandic: kottur; Greek: catta; Hindu: katas; Japanese:neko; Polish: kot; Ukranian: kotuk; Hawiian: popoki; Russian: koshka; Latin: cattus; Egyptian: mau; Turkish: kedi; Armenian: Gatz; Chinese: mio; Arabic: biss; Indonesian: qitta; Bulgarian: kotka; Malay: kucing; Thai/Vietnamese: meo; Romanian: pisica; Lithuanian: katinas; Czech: kocka; Slovak: macka; Armenian: gatz; Basque: catua; Estonian: kass; Finnish: kissa; Swahili: paka.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c155",
            "text": "The Maine Coon is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c156",
            "text": "Both humans and cats have identical regions in the brain responsible for emotion.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c157",
            "text": "The Maine Coone is the only native American long haired breed.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c159",
            "text": "Kittens lose their baby teeth!! At three to four months the incisors erupt. Then at four to six months, they lose their canines, premolars and molars. By the time they are seven months old, their adult teeth are fully developed. This is one of the ways a vet (or you) can tell the age of a kitten.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c15e",
            "text": "The average litter of kittens is between 2 - 6 kittens.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c161",
            "text": "If a cat is frightened, the hair stands up fairly evenly all over the body; when the cat is threatened or is ready to attack, the hair stands up only in a narrow band along the spine and tail.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c162",
            "text": "One un-neutered female cat can, in five years, be responsible for over 20,000 descendants. Female cats can have their first litter as young as six months and can have up to three litters each yearâwith five or six kittens in each litter.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c163",
            "text": "A cat will tremble or shiver when it is extreme pain.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c166",
            "text": "Mother cats teach their kittens to use the litter box.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c167",
            "text": "Cats have a special scent organ located in the roof of their mouth, called the Jacobson's organ. It analyzes smells - and is the reason why you will sometimes see your cat \"sneer\" (called the flehmen response or flehming) when they encounter a strong odor.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c16e",
            "text": "On February 28, 1 980 a female cat climbed 70 feet up the sheer pebble-dash outside wall of a block of flats in Bradford, Yorkshire and took refuge in the roof space. She had been frightened by a dog.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c16f",
            "text": "Cats lap liquid from the underside of their tongue, not from the top.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c173",
            "text": "The ancestor of all domestic cats is the African Wild Cat which still exists today.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c175",
            "text": "Why do people have cats? One survey that looked into the reasons people have cats found the following: companionship/comfort 27%, stress/blood pressure relief --22%, something to love/feel neededâ 9%, lifts depression/boosts moods 10%, subject of communication/stimulates interest 8%.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c17b",
            "text": "Cats often overract to unexpected stimuli because of their extremely sensitive nervous system.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c17c",
            "text": "Studies now show that the allergen in cats is related to their scent glands. Cats have scent glands on their faces and at the base of their tails. Entire male cats generate the most scent. If this secretion from the scent glands is the allergen, allergic people should tolerate spayed female cats the best.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c17f",
            "text": "Ailurophile is the word cat lovers are officially called.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c182",
            "text": "Abraham Lincoln loved cats. He kept four of them while he lived in the White House.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c187",
            "text": "Contrary to popular belief, people are not allergic to cat fur, dander, saliva, or urine - they are allergic to \"sebum,\" a fatty substance secreted by the cat's sebaceous glands. More interesting, someone who is allergic to one cat may not be allergic to another cat. Though there isn't (yet) a way of predicting which cat is more likely to cause allergic reactions, it has been proven that male cats shed much greater amounts of allergen than females. A neutered male, however, sheds much less than a non-neutered male.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c189",
            "text": "A cat has approximately 60 to 80 million olfactory cells (a human has between 5 and 20 million).",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c18a",
            "text": "Some notable people who disliked cats:  Napoleon Bonaparte, Dwight D. Eisenhower, Hitler, Dylan Orrell.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c192",
            "text": "When a cat drinks, its tongue - which has tiny barbs on it - scoops the liquid up backwards.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c193",
            "text": "Some common houseplants poisonous to cats include: English Ivy, iris, mistletoe, philodendron, and yew.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c197",
            "text": "A cat's hearing is much more sensitive than humans and dogs.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c198",
            "text": "The cat has 500 skeletal muscles (humans have 650).",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c19a",
            "text": "Mountain lions are strong jumpers, thanks to muscular hind legs that are longer than their front legs.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c19b",
            "text": "The strongest climber among the big cats, a leopard can carry prey twice its weight up a tree.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c19e",
            "text": "Many cats love having their forehead gently stroked.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1a8",
            "text": "The first true cats came into existence about 12 million years ago and were the Proailurus.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1aa",
            "text": "The oldest cat on record was probably \"Puss\", a tabby owned by Mrs. Holway of Clayhidon, Devon. Having celebrated his 36th birthday on November 28, 1939, Puss died the following day.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1ab",
            "text": "Cats and kittens should be acquired in pairs whenever possible as cat families interact best in pairs.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1ac",
            "text": "The Amur leopard is one of the most endangered animals in the world.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1ad",
            "text": "The catnip plant contains an oil called hepetalactone which does for cats what marijuana does to some people. Not all cats react to it those that do appear to enter a trancelike state. A positive reaction takes the form of the cat sniffing the catnip, then licking, biting, chewing it, rub & rolling on it repeatedly, purring, meowing & even leaping in the air.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1b0",
            "text": "The first official cat show in the UK was organised at Crystal Palace in 1871.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1b3",
            "text": "Today there are about 100 distinct breeds of the domestic cat.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1b4",
            "text": "Cats see six times better in the dark and at night than humans.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1b5",
            "text": "Cats have 32 muscles that control the outer ear (compared to human's 6 muscles each). A cat can rotate its ears independently 180 degrees, and can turn in the direction of sound 10 times faster than those of the best watchdog.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1bd",
            "text": "The average lifespan of an outdoor-only (feral and non-feral) is about 3 years; an indoor-only cat can live 16 years and longer. Some cats have been documented to have a longevity of 34 years.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1be",
            "text": "Of all the species of cats, the domestic cat is the only species able to hold its tail vertically while walking. All species of wild cats hold their tail horizontally or tucked between their legs while walking.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1c1",
            "text": "Tigers are excellent swimmers and do not avoid water.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1c4",
            "text": "According to a Gallup poll, most American pet owners obtain their cats by adopting strays.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1c5",
            "text": "Baking chocolate is the most dangerous chocolate to your cat.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1c7",
            "text": "It is estimated that cats can make over 60 different sounds.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1ca",
            "text": "Tabby cats are thought to get their name from Attab, a district in Baghdad, now the capital of Iraq.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1cc",
            "text": "British cat owners spend roughly 550 million pounds yearly on cat food.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1ce",
            "text": "A cat will tremble or shiver when it is in extreme pain.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1d3",
            "text": "Like birds, cats have a homing ability that uses its biological clock, the angle of the sun, and the Earth's magnetic field. A cat taken far from its home can return to it. But if a cat's owners move far from its home, the cat can't find them.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1d4",
            "text": "Tomcats can mate at anytime, while quenns can only mate during a period of time called heat or estrus.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1d5",
            "text": "The ancient Egyptians were the first to tame the cat (in about 3000 BC), and used them to control pests.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1d7",
            "text": "Cats should not be fed tuna exclusively, as it lacks taurine, an essential nutrient required for good feline health.  Make sure you have the proper Pet supplies to keep your cat happy and healthy.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1d9",
            "text": "The female cat reaches sexual maturity within 6 to 10 months; most veterinarians suggest spaying the female at 5 months, before her first heat period. The male cat usually reaches sexual maturity between 9 and 12 months.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1da",
            "text": "The cat appears to be the only domestic companion animal not mentioned in the Bible.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c1eb",
            "text": "When a domestic cat goes after mice, about 1 pounce in 3 results in a catch.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c1ed",
            "text": "Kittens who are taken along on short, trouble-free car trips to town tend to make good passengers when they get older. They get used to the sounds and motions of traveling and make less connection between the car and the visits to the vet.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c1f8",
            "text": "A cat has two vocal chords, and can make over 100 sounds.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c20b",
            "text": "In the Middle Ages, during the Festival of Saint John, cats were burned alive in town squares.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c20f",
            "text": "Fossil records from two million years ago show evidence of jaguars.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c213",
            "text": "Many people fear catching a protozoan disease, Toxoplasmosis, from cats. This disease can cause illness in the human, but more seriously, can cause birth defects in the unborn. Toxoplasmosis is a common disease, sometimes spread through the feces of cats. It is caused most often from eating raw or rare beef. Pregnant women and people with a depressed immune system should not touch the cat litter box. Other than that, there is no reason that these people have to avoid cats.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c21e",
            "text": "On average, a cat will sleep for 16 hours a day.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c224",
            "text": "Phoenician cargo ships are thought to have brought the first domesticated cats to Europe in about 900 BC.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c226",
            "text": "The cat's footpads absorb the shocks of the landing when the cat jumps.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c227",
            "text": "A cat has more bones than a human; humans have 206, and the cat - 230.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c229",
            "text": "In an average year, cat owners in the United States spend over $2 billion on cat food.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c233",
            "text": "The name \"jaguar\" comes from a Native American word meaning \"he who kills with one leap\".",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c238",
            "text": "In 1987 cats overtook dogs as the number one pet in America.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c23e",
            "text": "Cats come back to full alertness from the sleep state faster than any other creature.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c244",
            "text": "If your cat snores, or rolls over on his back to expose his belly, it means he trusts you.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c24d",
            "text": "The first formal cat show was held in England in 1871; in America, in 1895.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c25e",
            "text": "Mature cats with no health problems are in deep sleep 15 percent of their lives. They are in light sleep 50 percent of the time. That leaves just 35 percent awake time, or roughly 6-8 hours a day.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c267",
            "text": "Cat bites are more likely to become infected than dog bites.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c278",
            "text": "Julius Ceasar, Henri II, Charles XI, and Napoleon were all afraid of cats.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c281",
            "text": "Cats' hearing is much more sensitive than humans and dogs.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c28b",
            "text": "The first cat show was in 1871 at the Crystal Palace in London.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c28c",
            "text": "Cats lived with soldiers in trenches, where they killed mice during World War I.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c28f",
            "text": "In one stride, a cheetah can cover 23 to 26 feet (7 to 8 meters).",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c2a4",
            "text": "If your cat snores or rolls over on his back to expose his belly, it means he trusts you.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c2a5",
            "text": "A queen (female cat) can begin mating when she is between 5 and 9 months old.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c2a7",
            "text": "A cat can sprint at about thirty-one miles per hour.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3533",
            "text": "A domestic cat can sprint at about 31 miles per hour.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce353d",
            "text": "The domestic cat is the only species able to hold its tail vertically while walking. You can also learn about your cat's present state of mind by observing the posture of his tail.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3543",
            "text": "The life expectancy of cats has nearly doubled since 1930 - from 8 to 16 years.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3548",
            "text": "A cat that bites you for rubbing his stomach is often biting from pleasure, not anger.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3552",
            "text": "A steady diet of dog food may cause blindness in your cat - it lacks taurine.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3556",
            "text": "Tigers have been hunted for their skin, bones, and other body parts, used in traditional Chinese medicine.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3564",
            "text": "A cat's normal pulse is 140-240 beats per minute, with an average of 195.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3568",
            "text": "Cats have an average of 24 whiskers, arranged in four horizontal rows on each side.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3572",
            "text": "The leopard is the most widespread of all big cats.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3576",
            "text": "The mountain lion and the cheetah share an ancestor.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce357b",
            "text": "Ancient Egyptian family members shaved their eyebrows in mourning when the family cat died.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce358b",
            "text": "Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce3593",
            "text": "The average cat food meal is the equivalent to about five mice.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce359b",
            "text": "A tiger's stripes are like fingerprints; no two animals have the same pattern.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35a1",
            "text": "Tylenol and chocolate are both poisionous to cats.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35a3",
            "text": "Many cats cannot properly digest cow's milk. Milk and milk products give them diarrhea.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35ab",
            "text": "Cats, especially older cats, do get cancer. Many times this disease can be treated successfully.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35bf",
            "text": "Neutering a male cat will, in almost all cases, stop him from spraying (territorial marking), fighting with other males (at least over females), as well as lengthen his life and improve its quality.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35ca",
            "text": "An adult lion's roar can be heard up to five miles (eight kilometers) away.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35d8",
            "text": "Cats bury their feces to cover their trails from predators.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35df",
            "text": "Cat litter was \"invented\" in 1947 when Edward Lowe asked his neighbor to try a dried, granulated clay used to sop up grease spills in factories. (In 1990, Mr. Lowe sold his business for $200 million.)",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f989cd369931519ce361d",
            "text": "In ancient Egypt, killing a cat was a crime punishable by death.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f989cd369931519ce361e",
            "text": "The female cat reaches sexual maturity at around 6 to 10 months and the male cat between 9 and 12 months.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f989cd369931519ce362a",
            "text": "Cats have 30 vertebrae--5 more than humans have.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f989cd369931519ce363a",
            "text": "Kittens remain with their mother till the age of 9 weeks.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98a4d369931519ce366e",
            "text": "Heat occurs several times a year and can last anywhere from 3 to 15 days.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98a4d369931519ce3678",
            "text": "Cats are now Britain's favourite pet: there are 7.7 million cats as opposed to 6.6 million dogs.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98a4d369931519ce3681",
            "text": "Never give your cat aspirin unless specifically prescribed by your veterinarian; it can be fatal. Never ever give Tylenol to a cat.  And be sure to keep anti-freeze away from all animals - it's sweet and enticing, but deadly poison.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98a4d369931519ce3686",
            "text": "Cats can judge within 3 inches the precise location of a sound being made 1 yard away.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98a4d369931519ce36a1",
            "text": "Unlike other cats, lions have a tuft of hair at the end of their tails.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98a4d369931519ce36a6",
            "text": "Florence Nightingale owned more than 60 cats in her lifetime.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98c5d1f17a153828aa0b",
            "text": "Domestic cats purr both when inhaling and when exhaling.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97cc8dec2e14e3c20afe",
            "text": "A form of AIDS exists in cats.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c16b",
            "text": "A cat can jump 5 times as high as it is tall.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c178",
            "text": "A cats field of vision is about 185 degrees.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c179",
            "text": "A cat's field of vision is about 200 degrees.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97d48dec2e14e3c20aff",
            "text": "Cats have the largest eyes of any mammal.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c180",
            "text": "Jaguars are the only big cats that don't roar.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1dc",
            "text": "A domestic cat can run at speeds of 30 mph.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c23f",
            "text": "Cats can't taste sweets.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c170",
            "text": "Cats can jump up to 7 times their tail length.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c256",
            "text": "The cat's tail is used to maintain balance.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3541",
            "text": "Blue-eyed, pure white cats are frequently deaf.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c2a1",
            "text": "Cats dislike citrus scent.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce354d",
            "text": "Most cats adore sardines.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1c6",
            "text": "Cats take between 20-40 breaths per minute.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98c5d1f17a153828aa09",
            "text": "A cat cannot see directly under its nose.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97e08dec2e14e3c20b04",
            "text": "The silks created by weavers in Baghdad were inspired by the beautiful and varied colors and markings of cat coats. These fabrics were called \"tabby\" by European traders.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97f08dec2e14e3c20b08",
            "text": "Cats can be taught to walk on a leash, but a lot of time and patience is required to teach them. The younger the cat is, the easier it will be for them to learn.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97e88dec2e14e3c20b05",
            "text": "In the wild, lions live for an average of 12 years and up to 16 years. They live up to 25 years in captivity.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f97d48dec2e14e3c20b00",
            "text": "Cats do not think that they are little people. They think that we are big cats. This influences their behavior in many ways.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98188dec2e14e3c20b12",
            "text": "A cat's whiskers are thought to be a kind of radar, which helps a cat gauge the space it intends to walk through.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98348dec2e14e3c20b19",
            "text": "Cat families usually play best in even numbers. Cats and kittens should be acquired in pairs whenever possible.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98348dec2e14e3c20b1a",
            "text": "Cats born with 6 or 7 front toes and extra back toes are called polydactl.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f984c8dec2e14e3c20b20",
            "text": "In ancient Egypt, when a family cat died, all family members would shave their eyebrows as a sign of mourning.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9860c5cbe314f7a7ad38",
            "text": "A kitten will typically weigh about 3 ounces at birth.  The typical male housecat will weigh between  7 and 9 pounds, slightly less for female housecats.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9858c5cbe314f7a7ad35",
            "text": "In Siam, the cat was so revered that one rode in a chariot at the head of a parade celebrating the new king.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9868c5cbe314f7a7ad3a",
            "text": "A cat has more bones than a human; humans have 206, but the cat has 230 (some cites list 245 bones, and state that bones may fuse together as the cat ages).",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98248dec2e14e3c20b16",
            "text": "In just 7 years, one un-spayed female cat and one un-neutered male cat and their offspring can result in 420,000 kittens.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c12d",
            "text": "Six-toed kittens are so common in Boston and surrounding areas of Massachusetts that experts consider it an established mutation.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9858c5cbe314f7a7ad36",
            "text": "Cats respond better to women than to men, probably due to the fact that women's voices have a higher pitch.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c130",
            "text": "It has been scientifically proven that owning cats is good for our health and can decrease the occurrence of high blood pressure and other illnesses.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c136",
            "text": "There are approximately 60,000 hairs per square inch on the back of a cat and about 120,000 per square inch on its underside.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c13c",
            "text": "All cats have three sets of long hairs that are sensitive to pressure - whiskers, eyebrows,and the hairs between their paw pads.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c12c",
            "text": "Tests done by the Behavioral Department of the Musuem of Natural History conclude that while a dog's memory lasts about 5 minutes, a cat's recall can last as long as 16 hours.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c140",
            "text": "Spaying a female before her first or second heat will greatly reduce the threat of mammary cancer and uterine disease. A cat does not need to have at least 1 litter to be healthy, nor will they \"miss\" motherhood. A tabby named \"Dusty\" gave birth to 420 documented kittens in her lifetime, while \"Kitty\" gave birth to 2 kittens at the age of 30, having given birth to a documented 218 kittens in her lifetime.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c132",
            "text": "It may take as long as 2 weeks for a kitten to be able to hear well.  Their eyes usually open between 7 and 10 days, but sometimes it happens in as little as 2 days.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c144",
            "text": "A cat uses its whiskers for measuring distances.  The whiskers of a cat are capable of registering very small changes in air pressure.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c14a",
            "text": "Cats with long, lean bodies are more likely to be outgoing, and more protective and vocal than those with a stocky build.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c14d",
            "text": "Not every cat gets \"high\" from catnip. Whether or not a cat responds to it depends upon a recessive gene: no gene, no joy.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c150",
            "text": "Cats' eyes shine in the dark because of the tapetum, a reflective layer in the eye, which acts like a mirror.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c151",
            "text": "Cat families usually play best in even numbers. Cats and kittens should be aquired in pairs whenever possible.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c148",
            "text": "Retractable claws are a physical phenomenon that sets cats apart from the rest of the animal kingdom. I n the cat family, only cheetahs cannot retract their claws.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c154",
            "text": "Purring does not always indicate that a cat is happy. Cats will also purr loudly when they are distressed or in pain.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c15d",
            "text": "Most cats killed on the road are un-neutered toms, as they are more likely to roam further afield and cross busy roads.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c14e",
            "text": "Cats can be prone to fleas in the summertime: 794 fleas were counted on one cat by a Cats Protection volunteer in the summer of 1992.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c15b",
            "text": "As child Nikola Tesla was inspired to understand the secrets of electricity after being shocked by static electricity from his beloved cat, Macak.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c15f",
            "text": "Recent studies have shown that cats can see blue and green. There is disagreement as to whether they can see red.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c153",
            "text": "Cats have 30 vertebrae (humans have 33 vertebrae during early development; 26 after the sacral and coccygeal regions fuse)",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c16a",
            "text": "Cats, just like people, are subject to asthma. Dust, smoke, and other forms of air pullution in your cat's environment can be troublesome sources of irritation.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c176",
            "text": "Since cats are so good at hiding illness, even a single instance of a symptom should be taken very seriously.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c17a",
            "text": "Cats can get tapeworms from eating mice. If your cat catches a mouse it is best to take the prize away from it.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c17e",
            "text": "Sir Isaac Newton is not only credited with the laws of gravity but is also credited with inventing the cat flap.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c17d",
            "text": "Stroking a cat can help to relieve stress, and the feel of a purring cat on your lap conveys a strong sense of security and comfort.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c168",
            "text": "Lions are the only cats that live in groups, called prides. Every female within the pride is usually related.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c181",
            "text": "A cat named Dusty, aged 1 7, living in Bonham, Texas, USA, gave birth to her 420th kitten on June 23, 1952.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98703b90f7150a19c174",
            "text": "The way you treat kittens in the early stages of it's life will render it's personality traits later in life.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c18e",
            "text": "People who are allergic to cats are actually allergic to cat saliva or to cat dander. If the resident cat is bathed regularly the allergic people tolerate it better.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c194",
            "text": "You check your cats pulse on the inside of the back thigh, where the leg joins to the body. Normal for cats: 110-170 beats per minute.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c199",
            "text": "Cats sleep 16 to 18 hours per day. When cats are asleep, they are still alert to incoming stimuli. If you poke the tail of a sleeping cat, it will respond accordingly.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1a0",
            "text": "The average lifespan of an outdoor-only cat is about 3 to 5 years while an indoor-only cat can live 16 years or much longer.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c18d",
            "text": "The ancient Egyptians were the first civilisation to realise the cat's potential as a vermin hunter and tamed cats to protect the corn supplies on which their lives depended.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c19f",
            "text": "A cat's jaw has only up and down motion; it does not have any lateral, side to side motion, like dogs and humans.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1b8",
            "text": "A female cat will be pregnant for approximately 9 weeks or between 62 and 65 days from conception to delivery.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c19c",
            "text": "In households in the UK and USA, there are more cats kept as pets than dogs. At least 35% of households with cats have 2 or more cats.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1cf",
            "text": "Contrary to popular belief, the cat is a social animal. A pet cat will respond and answer to speech, and seems to enjoy human companionship.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1db",
            "text": "The Maine Coon cat is America's only natural breed of domestic feline. It is 4 to 5 times larger than the Singapura, the smallest breed of cat.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1d6",
            "text": "The smallest breed of domestic cat is the Singapura or \"Drain Cat\" of Singapore. Adult females weigh in at an average of 4lbs.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1c9",
            "text": "Female felines are \"superfecund,\" which means that each of the kittens in her litter can have a different father.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c1ff",
            "text": "A cat's appetite is the barometer of its health. Any cat that does not eat or drink for more than two days should be taken to a vet.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1e0",
            "text": "A cat has a total of 24 whiskers, 4 rows of whiskers on each side. The upper two rows can move independently of the bottom two rows.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98783b90f7150a19c1d2",
            "text": "Cats that live together sometimes rub each others heads to show that they have no intention of fighting. Young cats do this more often, especially when they are excited.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c20e",
            "text": "A sexually-active feral tom-cat \"owns\" an area of about three square miles and \"sprays\" to mark his territory with strong smelling urine.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c201",
            "text": "Not every cat gets \"high\" from catnip. If the cat doesn't have a specific gene, it won't react (about 20% do not have the gene). Catnip is non-addictive.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c206",
            "text": "Cats can predict earthquakes. We humans are not 100% sure how they do it. There are several different theories.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c220",
            "text": "Purring not always means happiness. Purring could mean a cat is in terrible pain such as during childbirth. Kitten will purr to their mother to let her know they are getting enough milk while nursing. Purring is a process of inhaling and exhaling, usually performed while the mouth is closed. But don't worry, if your cat is purring while your gently petting her and holding her close to you - that is a happy cat!",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c21b",
            "text": "An estimated 50% of today's cat owners never take their cats to a veterinarian for health care. Too, because cats tend to keep their problems to themselves, many owners think their cat is perfectly healthy when actually they may be suffering from a life-threatening disease. Therefore, cats, on an average, are much sicker than dogs by the time they are brought to your veterinarian for treatment.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c205",
            "text": "Besides smelling with their nose, cats can smell with an additional organ called the Jacobson's organ, located in the upper surface of the mouth.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c240",
            "text": "A tortoiseshell is black with red or orange markings and a calico is white with patches of red, orange and black.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c262",
            "text": "Miacis, the primitive ancestor of cats, was a small, tree-living creature of the late Eocene period, some 45 to 50 million years ago.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c24c",
            "text": "There is a species of cat smaller than the average housecat. It is native to Africa and it is the Black-footed cat (Felis nigripes). Its top weight is 5.5 pounds.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c27a",
            "text": "Siamese kittens are born white because of the heat inside the mother's uterus before birth. This heat keeps the kittens' hair from darkening on the points.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98803b90f7150a19c23b",
            "text": "Cats are subject to gum disease and to dental caries. They should have their teeth cleaned by the vet or the cat dentist once a year.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c264",
            "text": "The chlorine in fresh tap water irritates sensitive parts of the cat's nose. Let tap water sit for 24 hours before giving it to a cat.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce3527",
            "text": "In ancient Egypt, mummies were made of cats, and embalmed mice were placed with them in their tombs. In one ancient city, over 300,000 cat mummies were found.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c283",
            "text": "The more cats are spoken to, the more they will speak back. You will learn a lot from your cat's wide vocabulary of chirps and meows.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98883b90f7150a19c298",
            "text": "If a cat is frightened, put your hand over its eyes and forehead, or let him bury his head in your armpit to help calm him.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce358f",
            "text": "A female cat will be pregnant for approximately 9 weeks - between 62 and 65 days from conception to delivery.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9890d369931519ce357c",
            "text": "The cheetah is the world's fastest land mammal. It can run at speeds of up to 70 miles an hour (113 kilometers an hour).",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98a4d369931519ce366d",
            "text": "A cat sees about 6 times better than a human at night, and needs 1/6 the amount of of light that a human does - it has a layer of extra reflecting cells which absorb light.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f9894d369931519ce35c6",
            "text": "All cats need taurine in their diet to avoid blindness. Cats must also have fat in their diet as they are unable to produce it on their own.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98d1d1f17a153828aade",
            "text": "Cats have individual preferences for scratching surfaces and angles. Some are horizontal scratchers while others exercise their claws vertically.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "591f98b44c120c1529b375f2",
            "text": "When well treated, a cat can live twenty or more years but the average life span of a domestic cat is 14 years.",
            "type": "cat",
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5a4d76106ef087002174c285",
            "text": "A cat’s eyesight is both better and worse than humans. It is better because cats can see in much dimmer light and they have a wider peripheral view. It’s worse because they don’t see color as well as humans do. Scientists believe grass appears red to cats.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5a4d76736ef087002174c289",
            "text": "The lightest cat on record is a blue point Himalayan called Tinker Toy, who weighed 1 pound, 6 ounces (616 g). Tinker Toy was 2.75 inches (7 cm) tall and 7.5 inches (19 cm) long.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5a4d77446ef087002174c290",
            "text": "Approximately 1/3 of cat owners think their pets are able to read their minds.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5b0ecc7287c6b21e6fafdf01",
            "text": "A male cat is called a tom.",
            "type": "cat",
            "user": {
                "_id": "587288f6e6f85e64ae1c7ef7",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c609ae8e54902001453303b",
            "text": "Approximately 40% of cats have a dominant paw. The rest are ambidextrous.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c69c3ecc2d7a200140f67eb",
            "text": "The average female housecat could give birth to ove 100 kittens in her lifetime.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c69c409c2d7a200140f67ec",
            "text": "Cats can have three litters a year, or approximately 12 kittens.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c69c422c2d7a200140f67ed",
            "text": "Cats don't go through menopause, so they can continue to breed into their senior years.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c3551458e0b8d00148d45e3",
            "text": "Many people think that the Turkish Van is simply a color variation of the Turkish Angora, but in fact, they are distinct breeds that developed in different parts of Turkey.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c3551d48e0b8d00148d45e4",
            "text": "The Bengal is the result of crossbreeding between domestic cats and Asian leopard cats, and its name is derived from the scientific name for the Asian leopard cat (Felis bengalensis).",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c3552058e0b8d00148d45e5",
            "text": "Despite its traditionally wild roots, the Bengal is domestic and will gladly make itself in the indoor \"jungle\" of your home.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c3552738e0b8d00148d45e6",
            "text": "Cat's cannot see in total darkness, however their vision is much better than a human's in semidarkness because their retinas are much more sensitive to light.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c35531e8e0b8d00148d45e8",
            "text": "If you grow your own catnip, here's how to prepare it for kitty's enjoyment: Cut several stalks of the plant from the base. Hang them upside down in a dark and dry room for several weeks. Then cut the catnip into small pieces, rub some on your cat's favorite toys or scratching post, and let the games begin!",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c3bba466bd7ea00141eff4f",
            "text": "Approximately 80% of orange tabbies are male.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c3bbab76bd7ea00141eff50",
            "text": "If you need to trim a cat's nails, choose a moment when he is relaxed. Massage his paws gently before clipping. Make sure you're using a pair of clippers specifically for cat's nails, not human nail clippers. Avoid cutting the nail too close to the \"quick,\" the pink part of a cat's nail, which is full of blood vessels and nerves.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c3bbb236bd7ea00141eff53",
            "text": "The gene that codes orange fur is on the X chromosome, so female cats must inherit two orange genes to end up with orange fur, while male cats only need one.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c471b30a99c3f00140fe4c5",
            "text": "The collective noun for kittens is a \"kindle\".",
            "type": "cat",
            "user": {
                "_id": "5c471b15a99c3f00140fe4c4",
                "name": {
                    "first": "Beth",
                    "last": "Rothwell"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c475c86a99c3f00140fe4cf",
            "text": "The Manx hails from the Isle of Man in the Irish Sea, and many Manx are tailless, a condition believed to have been caused by a dominant genetic mutation that spread among the island's cat population.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c475ca8a99c3f00140fe4d0",
            "text": "Loyal, playful, and alert, Manx are considered to be more \"doglike\" than other cats.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c609758e54902001453302c",
            "text": "According to the American Society for the Prevention of Cruelty of Animals, newborn kittens get all the nutrition they need duing the first four weeks of life fom their mother's milk. If you are taking care of a kitten without its mother, or if the mother isn't producing enough milk, you can feed the kitten a commercial milk substitute.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c609776e54902001453302d",
            "text": "When kittens ages to weeks five and six, they should start making the transition to dry food.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c6097eee549020014533030",
            "text": "Legend holds that the Chartreux once lived alongside the Carthusian monks of France.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c60982ce549020014533033",
            "text": "The Chartreux is distinguished by a woolly blue-grey coat, a robust body poised over small paws, and full cheeks with a mouth that always appear to be smiling.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c609852e549020014533036",
            "text": "While Chartreux cats aren't very vocal, they are sociable and communicate through eye contact and body language.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c609945e549020014533037",
            "text": "Do you ever wake up in the middle of the night and find your cat sleeping on your head? Cat behavioral experts believe that cats are drawn to the warmth and the familiar scent of the owner. Resting on your head also keeps kitty safe from your arms and legs if you toss and turn through the night.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c60999ae549020014533038",
            "text": "Cats love playing with yarn, ribbons, and fishing-rode style toys. However, cats should not be left alone with anything that they could get tangled in.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c609a02e549020014533039",
            "text": "All Scottish Folds descended from Susie, a white barn cat discovered in Scotland in the early 1960s. Susie sported the breed's folded ears – the result of a genetic mutation – and passed on the trait through breeding.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c609a90e54902001453303a",
            "text": "Mark Twain was undeniably an ailurophile. He had up to 19 cats at one time and gave them such memorable names as Beelzebub, Buffalo Bill, and Soapy Sal.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c69c35cc2d7a200140f67ea",
            "text": "If you really want to treat your cat, get some lactose-free milk at the grocery store and offer some to the kitty.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c69c47dc2d7a200140f67ee",
            "text": "Abraham Lincoln, being the ailurophile that he was, once rescued three stray kittens and ensured that they were fed and found homes.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c69c4eec2d7a200140f67ef",
            "text": "The Sphynx was originally known as the Canadian Hairless Cat. The breed originated in Toronto, and was renamed to Sphynx, a nod to the famous limestone sculpture in the Egyptian Desert.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c6a104fc2d7a200140f699f",
            "text": "A cat’s spine can rotate more than the spines of most other animals, and their vertebrae have a special, flexible, elastic cushioning on the disks, which gives it even more flexibility.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c6a105dc2d7a200140f69a0",
            "text": "When cats run, their backs contract and extend to give them maximum stride. Their shoulder blades are not attached with bone, but with muscle, and this gives a cat even greater extension and speed.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c72d9b651021f001415f00c",
            "text": "Cats have been domesticated for around 4,000 years. While they were once valued for their hunting abilities, they are now valued for their companionship and loving behavior.",
            "type": "cat",
            "user": {
                "_id": "5c6fd96df4256a001498a73f",
                "name": {
                    "first": "Hedvig",
                    "last": "Annersten"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c72da7151021f001415f00d",
            "text": "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.",
            "type": "cat",
            "user": {
                "_id": "5c6fd96df4256a001498a73f",
                "name": {
                    "first": "Hedvig",
                    "last": "Annersten"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c72dbd851021f001415f010",
            "text": "The most popular pedigreed cat in North America is the Persian cat, followed by the Main Coon and the Siamese cat.",
            "type": "cat",
            "user": {
                "_id": "5c72dbb751021f001415f00f",
                "name": {
                    "first": "Hedvig",
                    "last": "Annersten"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c7408a14dd87d001490f02b",
            "text": "The cheetah is the only cat that doesn't have retractable claws.",
            "type": "cat",
            "user": {
                "_id": "5c72e94751021f001415f012",
                "name": {
                    "first": "Tests",
                    "last": "HiQ"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        },
        {
            "_id": "5c75f56272681400147b988a",
            "text": "There are only two escalators in the state of Wyoming.",
            "type": "cat",
            "user": {
                "_id": "5a9ac18c7478810ea6c06381",
                "name": {
                    "first": "Alex",
                    "last": "Wohlbruck"
                }
            },
            "upvotes": 0,
            "userUpvoted": false
        }
    ],
    "me": [

    ]

};

index.listen(port);