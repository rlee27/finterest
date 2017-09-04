# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
user1 = User.create!(email: "squidward@example.com", password: "password", name: "Squidward",
avatar: "https://yt3.ggpht.com/-MkB09si_3Ds/AAAAAAAAAAI/AAAAAAAAAAA/haLUzOWzCiY/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
image: "https://pbs.twimg.com/profile_images/441744008008982528/HF6DAlGv.jpeg")

user2 = User.create!(email: "spongebob@example.com", password: "password", name: "Spongebob",
avatar: "https://vignette4.wikia.nocookie.net/nickelodeon/images/4/47/Spongebob.png/revision/latest?cb=20170402020121",
image: "https://vignette4.wikia.nocookie.net/nickelodeon/images/4/47/Spongebob.png/revision/latest?cb=20170402020121")

user3 = User.create!(email: "patrick@example.com", password: "password", name: "Patrick Starr",
avatar: "https://i.pinimg.com/736x/1c/97/c0/1c97c064695555eff6f4428855f5447f--patrick-meme-patrick-obrian.jpg",
image: "https://i.pinimg.com/736x/1c/97/c0/1c97c064695555eff6f4428855f5447f--patrick-meme-patrick-obrian.jpg")

user4 = User.create!(email: "krustykrab@example.com", password: "password", name: "Krusty Krab",
avatar: "https://vignette1.wikia.nocookie.net/spongebob/images/9/97/Krusty-krab.jpg/revision/latest?cb=20110708093615",
image: "https://vignette1.wikia.nocookie.net/spongebob/images/9/97/Krusty-krab.jpg/revision/latest?cb=20110708093615")

user5 = User.create!(email: "sandy@example.com", password: "password", name: "Sandy Cheeks",
avatar: "https://vignette3.wikia.nocookie.net/parody/images/e/eb/Sandy_spongebob_squarepants.png/revision/latest?cb=20161223014037",
image: "https://vignette3.wikia.nocookie.net/parody/images/e/eb/Sandy_spongebob_squarepants.png/revision/latest?cb=20161223014037")

user6 = User.create!(email: "ariel@example.com", password: "password", name: "Ariel",
avatar: "https://lumiere-a.akamaihd.net/v1/images/image_2fbd28db.jpeg?region=0,0,300,300",
image: "https://lumiere-a.akamaihd.net/v1/images/image_2fbd28db.jpeg?region=0,0,300,300")

user7 = User.create!(email: "dory@example.com", password: "password", name: "Dory",
avatar: "http://68.media.tumblr.com/76fb50a1aab9847bd329c2905c727e07/tumblr_o9e2er5fIL1v38nxuo1_1280.jpg",
image: "http://68.media.tumblr.com/76fb50a1aab9847bd329c2905c727e07/tumblr_o9e2er5fIL1v38nxuo1_1280.jpg")

user8 = User.create!(email: "nemo@example.com", password: "password", name: "Nemo",
avatar: "https://i.pinimg.com/originals/ae/76/dd/ae76dd674edf289fac32ca9279fecac0.jpg",
image: "https://i.pinimg.com/originals/ae/76/dd/ae76dd674edf289fac32ca9279fecac0.jpg")

user9 = User.create!(email: "martin@example.com", password: "password", name: "Martin",
avatar: "http://www.cartoonbrew.com/wp-content/uploads/2014/06/findingnemo-actual.jpg",
image: "http://www.cartoonbrew.com/wp-content/uploads/2014/06/findingnemo-actual.jpg")

user10 = User.create!(email: "crush@example.com", password: "password", name: "Crush",
avatar: "https://i.pinimg.com/736x/b2/1d/8b/b21d8b4b270e2852fd1116c36764aa15--crush-from-finding-nemo-finding-nemo-.jpg",
image: "https://i.pinimg.com/736x/b2/1d/8b/b21d8b4b270e2852fd1116c36764aa15--crush-from-finding-nemo-finding-nemo-.jpg")

Topic.destroy_all
topic1 = Topic.create!(name: "Popular")
topic2 = Topic.create!(name: "Everything")
topic3 = Topic.create!(name: "Shop")
topic4 = Topic.create!(name: "Animals and Pets")
topic5 = Topic.create!(name: "Architechture")
topic6 = Topic.create!(name: "Art")
topic7 = Topic.create!(name: "DIY and Crafts")
topic8 = Topic.create!(name: "Design")
topic9 = Topic.create!(name: "Entertainment")
topic10 = Topic.create!(name: "Food and Drink")
topic11 = Topic.create!(name: "Hair and Beauty")
topic12 = Topic.create!(name: "Health and Fitness")
topic13 = Topic.create!(name: "Humor")
topic14 = Topic.create!(name: "Illustrations")
topic15 = Topic.create!(name: "Kids and Parenting")
topic16 = Topic.create!(name: "Men's Fashion")
topic17 = Topic.create!(name: "Outdoors")
topic18 = Topic.create!(name: "Photography")
topic19 = Topic.create!(name: "Science")
topic20 = Topic.create!(name: "Sports")
topic21 = Topic.create!(name: "Tattoos")
topic22 = Topic.create!(name: "Travel")
topic23 = Topic.create!(name: "Weddings")
topic24 = Topic.create!(name: "Womens Fashion")


Board.destroy_all
board1 = Board.create!(title: "Great Entertainment",
author_id: user1.id, topic_id: topic9.id, description: "Some of my favorite hobbies.")
board2 = Board.create!(title: "Art Art Art",
author_id: user1.id, topic_id: topic6.id, description: "Only true artists can appreciate true art.")
board3 = Board.create!(title: "Outside", author_id: user1.id,
topic_id: topic17.id, description: "I Love the outdoors!")

board4 = Board.create!(title: "Food and equips",
 author_id: user2.id, topic_id: topic10.id, description: "Future equipment ideas")
board5 = Board.create!(title: "Petss", author_id: user2.id,
topic_id: topic4.id, description: "Only the cutest! :3")
board6 = Board.create!(title: "Fashion", author_id: user2.id,
topic_id: topic16.id, description: "New outfit ideas!")
board7 = Board.create!(title: "House Design", author_id: user2.id,
topic_id: topic5.id, description: "Ideas for redoing the pineapple")
board8 = Board.create!(title: "Travel", author_id: user2.id,
topic_id: topic22.id, description: "Traveling the world from home!")

board9 = Board.create!(title: "Hungryy", author_id: user3.id, topic_id: topic10.id,
description: "Mmmmm fooooood..")
board10 = Board.create!(title: "Funnies", author_id: user3.id, topic_id: topic13.id,
description: "I make myself go haha")
board11 = Board.create!(title: "Home", author_id: user3.id,
topic_id: topic5.id, description: "Home")


board12 = Board.create!(title: "Humble aboad", author_id: user4.id,
topic_id: topic10.id, description: "This is greatness")
board13 = Board.create!(title: "For everyone to DIY", author_id: user4.id,
topic_id: topic7.id, description: "I did it, so can you!")


board14 = Board.create!(title: "Designing", author_id: user5.id, topic_id: topic8.id, description: "Future ideas?")
board15 = Board.create!(title: "Entertaining", author_id: user5.id, topic_id: topic9.id, description: "Things I take it easy with")
board16 = Board.create!(title: "Get ripped", author_id: user5.id, topic_id: topic12.id, description: "I did it, so can you!")
board17 = Board.create!(title: "Science", author_id: user5.id, topic_id: topic19.id, description: "What in tarnation!! I love science!")

board18 = Board.create!(title: "Fashionista", author_id: user6.id, topic_id: topic24.id, description: "Reference for myself")
board19 = Board.create!(title: "Artsy Fartsy", author_id: user6.id, topic_id: topic14.id, description: "Can't get enough of this stuff")
board20 = Board.create!(title: "Outdoors", author_id: user6.id, topic_id: topic17.id, description: "What its like to be out there")
board21 = Board.create!(title: "Big Homes", author_id: user6.id, topic_id: topic5.id, description: "The dream...")
board22 = Board.create!(title: "Out There", author_id: user6.id, topic_id: topic23.id, description: "Always wondering what its like out there.")

board23 = Board.create!(title: "Underwater Home", author_id: user8.id, topic_id: topic5.id, description: "Underwater creations")
board24 = Board.create!(title: "Funny Funny", author_id: user8.id, topic_id: topic13.id, description: "BAHAHAHAHA")
board25 = Board.create!(title: "Pictures", author_id: user8.id, topic_id: topic18.id, description: "Pict-chas")

board26 = Board.create!(title: "Bro", author_id: user10.id, topic_id: topic15.id, description: "Dude.")
board27 = Board.create!(title: "Scenery", author_id: user10.id, topic_id: topic18.id, description: "Duude")
board28 = Board.create!(title: "Travel", author_id: user10.id, topic_id: topic22.id, description: "Duuuuude")

board29 = Board.create!(title: "Cuties", author_id: user7.id, topic_id: topic4.id, description: "Squishy squishy")

Pin.destroy_all
pin1 = Pin.create!(author_id: user1.id, topic_id: topic14.id, board_id: board2.id, description: "", image: "http://68.media.tumblr.com/93ddd8913dca45fc367c737ed3382c04/tumblr_mr57ild5Uw1setkt4o1_1280.png")
pin2 = Pin.create!(author_id: user1.id, topic_id: topic9.id, board_id: board1.id, description: "", image: "https://cdn.drawception.com/images/panels/2015/11-20/LmEH4OYX58-6.png")
pin3 = Pin.create!(author_id: user1.id, topic_id: topic9.id, board_id: board1.id, description: "", image: "https://i0.wp.com/mtv.mtvnimages.com/uri/mgid:file:http:shared:mtv.com/news/wp-content/uploads/2015/01/13-1422483650.gif")
pin4 = Pin.create!(author_id: user1.id, topic_id: topic17.id, board_id: board3.id, description: "", image: "https://vignette1.wikia.nocookie.net/parody/images/f/f2/Squidward_house.png/revision/latest?cb=20150906222008")

pin5 = Pin.create!(author_id: user2.id, topic_id: topic10.id, board_id: board4.id, description: "", image: "https://spirit.scene7.com/is/image/Spirit/01288679-a?$Detail$")
pin6 = Pin.create!(author_id: user2.id, topic_id: topic10.id, board_id: board4.id, description: "", image: "https://vignette3.wikia.nocookie.net/spongebob/images/f/fb/Le_Spatula.jpg/revision/latest?cb=20120816230304")
pin7 = Pin.create!(author_id: user2.id, topic_id: topic10.id, board_id: board4.id, description: "", image: "http://photoshopcontest.com/images/large/1mexbvvjuqeeog8ipp4vbvv09nwaycidb3bm.jpg")
pin8 = Pin.create!(author_id: user2.id, topic_id: topic4.id, board_id: board5.id, description: "", image: "http://media.liveauctiongroup.net/i/8631/9924897_2.jpg?v=8CD3D145D1E1200")
pin9 = Pin.create!(author_id: user2.id, topic_id: topic4.id, board_id: board5.id, description: "", image: "https://vignette4.wikia.nocookie.net/spongebob/images/f/f0/My_Pretty_Seahorse_07.png/revision/latest?cb=20130103021120")
pin10 = Pin.create!(author_id: user2.id, topic_id: topic4.id, board_id: board5.id, description: "", image: "https://i.pinimg.com/736x/db/d0/ce/dbd0ce0dd635cbd3efac5667e65aa568.jpg")
pin11 = Pin.create!(author_id: user2.id, topic_id: topic4.id, board_id: board5.id, description: "", image: "http://nick-intl.mtvnimages.com/uri/mgid:file:gsp:kids-assets:/nick/video/images/spongebob-squarepants/digital-short-spongebob-quick-hit-stuff-gary-says-4x3.jpg?quality=0.75&height=360&width=480&matte=true&crop=true")
pin12 = Pin.create!(author_id: user2.id, topic_id: topic16.id, board_id: board6.id, description: "", image: "https://img.buzzfeed.com/buzzfeed-static/static/2016-02/11/11/campaign_images/webdr10/spongebob-wearing-full-length-pants-for-the-first-2-18896-1455209626-3_dblbig.jpg")
pin13 = Pin.create!(author_id: user2.id, topic_id: topic16.id, board_id: board6.id, description: "", image: "http://peg-s3-bucket.s3.amazonaws.com/spongebob-wherepants/images/pants-front.png")
pin14 = Pin.create!(author_id: user2.id, topic_id: topic16.id, board_id: board6.id, description: "", image: "https://cdn1.thehunt.com/app/public/system/note_images/1651655/note_view/6767368fbe266910fad8339be686f8e2.jpg")
pin15 = Pin.create!(author_id: user2.id, topic_id: topic16.id, board_id: board6.id, description: "", image: "http://www.sbmania.net/pictures/_thumb/21a/178.jpg")
pin16 = Pin.create!(author_id: user2.id, topic_id: topic16.id, board_id: board6.id, description: "", image: "https://vignette3.wikia.nocookie.net/spongebob/images/6/6c/Wttcb14.jpg/revision/latest?cb=20130803094026")
# pin17 = Pin.create!(author_id: user2.id, topic_id: topic5.id, board_id: board7.id, description: "", image: "https://vignette1.wikia.nocookie.net/spongebob/images/e/eb/SpongeBob%27s_pineapple_house_in_Season_4-7.png/revision/latest?cb=20150425072538")
pin18 = Pin.create!(author_id: user2.id, topic_id: topic22.id, board_id: board8.id, description: "", image: "http://i.dailymail.co.uk/i/pix/2016/09/20/13/389BD99600000578-3798279-There_is_a_SpongeBob_SquarePants_themed_villa_in_the_Nickelodeon-a-20_1474376390934.jpg")

pin19 = Pin.create!(author_id: user3.id, topic_id: topic13.id, board_id: board10.id, description: "", image: "https://i.pinimg.com/736x/a6/18/a6/a618a613d702f8cf32f5caadd7310e33--pet-rocks-spongebob-patrick.jpg")
pin20 = Pin.create!(author_id: user3.id, topic_id: topic10.id, board_id: board9.id, description: "", image: "http://gifrific.com/wp-content/uploads/2012/04/patrick-inhale-burgers.gif")
pin21 = Pin.create!(author_id: user3.id, topic_id: topic13.id, board_id: board10.id, description: "", image: "http://i0.kym-cdn.com/photos/images/newsfeed/000/435/652/1f9.png")
pin22 = Pin.create!(author_id: user3.id, topic_id: topic13.id, board_id: board10.id, description: "", image: "http://cdn.trendhunterstatic.com/thumbs/surprised-patrick-star.jpeg")
pin23 = Pin.create!(author_id: user3.id, topic_id: topic13.id, board_id: board10.id, description: "", image: "https://i.pinimg.com/originals/ef/b6/36/efb636654e2285b8b49d50f3b9752d58.gif")
pin24 = Pin.create!(author_id: user3.id, topic_id: topic13.id, board_id: board10.id, description: "", image: "http://24.media.tumblr.com/ef8febca5a08b622c978af7cb98a4e1c/tumblr_ml3vybK9YZ1qfqp8jo1_500.gif")

pin25 = Pin.create!(author_id: user4.id, topic_id: topic10.id, board_id: board12.id, description: "", image: "http://vignette1.wikia.nocookie.net/spongebob/images/5/58/The_Krusty_Krab_in_Yeti_Krabs.png/revision/latest?cb=20150329235236")
pin26 = Pin.create!(author_id: user4.id, topic_id: topic7.id, board_id: board13.id, description: "", image: "http://photos1.blogger.com/blogger/4164/3627/1600/krust_krab_kitchen.jpg")
pin27 = Pin.create!(author_id: user4.id, topic_id: topic10.id, board_id: board12.id, description: "", image: "https://ih1.redbubble.net/image.206826846.4263/ap,550x550,16x12,1,transparent,t.u1.png")
pin28 = Pin.create!(author_id: user4.id, topic_id: topic10.id, board_id: board12.id, description: "", image: "https://media3.giphy.com/media/pfRXjbME6mh2g/giphy.gif")

pin29 = Pin.create!(author_id: user5.id, topic_id: topic8.id, board_id: board14.id, description: "", image: "https://i.pinimg.com/736x/f6/05/44/f60544fceb1e6c97cd0c448edca89a4f--deep-sea-diver-diving-suit.jpg")
pin30 = Pin.create!(author_id: user5.id, topic_id: topic8.id, board_id: board14.id, description: "", image: "https://i.pinimg.com/736x/5e/4c/05/5e4c05b4342a4d10f8d0b64de7f6330a--scuba-diving-equipment-diving-suit.jpg")
pin31 = Pin.create!(author_id: user5.id, topic_id: topic9.id, board_id: board15.id, description: "", image: "http://cdn1.bigcommerce.com/server700/97i9gwv/products/3841/images/71982/zftuasxmpzy__76969.1490280500.391.320.jpg?c=2")
pin32 = Pin.create!(author_id: user5.id, topic_id: topic12.id, board_id: board16.id, description: "", image: "https://coldslitherpodcast.files.wordpress.com/2012/06/sandy-cheeks-karate-pose.jpg")
pin59 = Pin.create!(author_id: user5.id, topic_id: topic12.id, board_id: board16.id, description: "", image: "https://vignette3.wikia.nocookie.net/spongebob/images/f/fa/Karate_Island_22.png/revision/latest?cb=20121111232140")
# pin33 = Pin.create!(author_id: user5.id, topic_id: topic19.id, board_id: board17.id, description: "", image: "http://vignette2.wikia.nocookie.net/spongebob/images/9/97/Sandy%27s_Rocket_Gallery_%2805%29.jpg/revision/latest?cb=20130505105940")
pin34 = Pin.create!(author_id: user5.id, topic_id: topic19.id, board_id: board17.id, description: "", image: "http://media.sbmania.net/pictures/8a/23.png")


pin35 = Pin.create!(author_id: user6.id, topic_id: topic24.id, board_id: board18.id, description: "", image: "https://i.pinimg.com/originals/7f/21/a9/7f21a964ceed8b79478996ba2522f935.png")
pin36 = Pin.create!(author_id: user6.id, topic_id: topic24.id, board_id: board18.id, description: "", image: "https://orig01.deviantart.net/5ace/f/2010/124/8/2/ariel__s_full_dress_by_yukiusagi1983.jpg")
pin37 = Pin.create!(author_id: user6.id, topic_id: topic6.id, board_id: board19.id, description: "", image: "https://images6.alphacoders.com/420/thumb-1920-420292.jpg")
pin38 = Pin.create!(author_id: user6.id, topic_id: topic5.id, board_id: board21.id, description: "", image: "http://68.media.tumblr.com/326f748d855e6161f206590b088e375e/tumblr_ntnr23yglD1uenu5ho1_1280.png")
pin39 = Pin.create!(author_id: user6.id, topic_id: topic17.id, board_id: board20.id, description: "", image: "http://images6.fanpop.com/image/photos/33400000/the-little-mermaid-the-little-mermaid-33415625-500-278.gif")
pin40 = Pin.create!(author_id: user6.id, topic_id: topic14.id, board_id: board19.id, description: "", image: "https://img08.deviantart.net/1522/i/2015/115/8/9/the_little_mermaid_by_faithom-d4wlnvc.png")
pin41 = Pin.create!(author_id: user6.id, topic_id: topic14.id, board_id: board19.id, description: "", image: "https://pre01.deviantart.net/9670/th/pre/i/2010/346/0/a/the_little_mermaid_by_johnathansung-d34rvag.png")
pin42 = Pin.create!(author_id: user6.id, topic_id: topic14.id, board_id: board19.id, description: "", image: "http://orig14.deviantart.net/c6ef/f/2007/203/e/d/the_lil_mermaid_painting_by_angelofyourdreams.jpg")
pin43 = Pin.create!(author_id: user6.id, topic_id: topic6.id, board_id: board19.id, description: "", image: "https://i.pinimg.com/736x/63/77/6b/63776b0c634a7bdffada28e3699b91ea--under-the-sea-under-the-water.jpg")
pin44 = Pin.create!(author_id: user6.id, topic_id: topic6.id, board_id: board19.id, description: "", image: "https://www.da-files.com/artnetwork/zeitgeist/the-little-mermaid/53-img-10.jpg")
pin45 = Pin.create!(author_id: user6.id, topic_id: topic6.id, board_id: board19.id, description: "", image: "https://i2.wp.com/www.rowsdowr.com/wp-content/uploads/2012/09/the_transformation_by_elotta-d5am9gk.jpg")
pin46 = Pin.create!(author_id: user6.id, topic_id: topic5.id, board_id: board21.id, description: "", image: "https://vignette3.wikia.nocookie.net/disney/images/4/49/Littlemermaid_490.jpg/revision/latest?cb=20131013223819")
pin47 = Pin.create!(author_id: user6.id, topic_id: topic5.id, board_id: board21.id, description: "", image: "http://www.wdwthemeparks.com/photos-disney/2012/12/04/r-1354683180-JourneyOfTheLittleMermaid1.jpg")
pin48 = Pin.create!(author_id: user6.id, topic_id: topic23.id, board_id: board22.id, description: "", image: "https://i.ytimg.com/vi/KBag9hiooqc/maxresdefault.jpg")

pin49 = Pin.create!(author_id: user7.id, topic_id: topic4.id, board_id: board29.id, description: "", image: "http://nofilmschool.com/sites/default/files/styles/article_superwide/public/screen_shot_2016-04-06_at_2.22.36_pm.png?itok=o_B5oJQg")

pin50 = Pin.create!(author_id: user8.id, topic_id: topic5.id, board_id: board23.id, description: "", image: "https://wallpapercave.com/wp/nlcRtbC.jpg")
pin51 = Pin.create!(author_id: user8.id, topic_id: topic13.id, board_id: board24.id, description: "", image: "https://i.ytimg.com/vi/pvJp2kNriH0/hqdefault.jpg")
pin52 = Pin.create!(author_id: user8.id, topic_id: topic18.id, board_id: board25.id, description: "", image: "https://i.pinimg.com/originals/57/59/d0/5759d061b82c50ec4c59422a642809be.jpg")

pin53 = Pin.create!(author_id: user9.id, topic_id: topic15.id, board_id: board26.id, description: "", image: "https://i.pinimg.com/736x/c1/cc/66/c1cc6670b3123e922bf8626fefb080b4--kid-movies-disney-movies.jpg")
pin54 = Pin.create!(author_id: user9.id, topic_id: topic18.id, board_id: board27.id, description: "", image: "https://u.realgeeks.media/siliconbeachhomesinla/surf.jpg")
pin55 = Pin.create!(author_id: user9.id, topic_id: topic18.id, board_id: board27.id, description: "", image: "https://secure.parksandresorts.wdpromedia.com/resize/mwImage/1/640/360/90/wdpromedia.disney.go.com/media/wdpro-assets/gallery/attractions/typhoon-lagoon/surf-lessons/surf-lessons-gallery00.jpg?14072014135930")
pin56 = Pin.create!(author_id: user9.id, topic_id: topic18.id, board_id: board27.id, description: "", image: "https://i.ytimg.com/vi/b6hoBp7Hk-A/maxresdefault.jpg")
pin57 = Pin.create!(author_id: user9.id, topic_id: topic22.id, board_id: board28.id, description: "", image: "https://www.resortcollection.com/wp-content/themes/resortcollection/property-images/summit/summit-beach-resort-panama-city-beach-fl-beach-01.jpg")
pin58 = Pin.create!(author_id: user9.id, topic_id: topic22.id, board_id: board28.id, description: "", image: "http://images.kuoni.co.uk/73/solana-beach-34389580-1494493023-ImageGalleryLightboxLarge.jpg")

Fin.destroy_all
fin1 = Fin.create!(user_id: user2.id, pin_id: pin28.id, pin_description: "KRABBBY PATTIES", board_id: board4.id)
fin2 = Fin.create!(user_id: user3.id, pin_id: pin28.id, pin_description: "PIZZA!", board_id: board9.id)
fin3 = Fin.create!(user_id: user2.id, pin_id: pin49.id, pin_description: "this is seedededed!", board_id: board5.id)
fin5 = Fin.create!(user_id: user8.id, pin_id: pin49.id, pin_description: "Nice!", board_id: board25.id)
fin6 = Fin.create!(user_id: user3.id, pin_id: pin51.id, pin_description: "Hahah thats me", board_id: board10.id)
fin7 = Fin.create!(user_id: user5.id, pin_id: pin54.id, pin_description: "Surfs up dude!", board_id: board15.id)
fin8 = Fin.create!(user_id: user5.id, pin_id: pin55.id, pin_description: "awesome!", board_id: board15.id)
fin8 = Fin.create!(user_id: user5.id, pin_id: pin56.id, pin_description: "sweett", board_id: board15.id)
