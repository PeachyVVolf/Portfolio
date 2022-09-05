import self from "../img/self.png"
import temp1 from '../img/temp1.jpg'
import temp2 from '../img/temp2.jpg'
import temp3 from '../img/temp3.jpg'
import temp4 from '../img/temp4.jpg'
import temp5 from '../img/temp5.jpg'
import temp6 from '../img/temp6.jpg'
import temp7 from '../img/temp7.jpg'
import temp8 from '../img/temp8.jpg'
import temp9 from '../img/temp9.jpg'
import temp10 from '../img/temp10.jpg'
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Ahmad",
    lastName: "Ajmal",
    initials: "js", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by coffee'
        },
        {
            emoji: '🌎',
            text: 'based in Pakistan'
        },
        {
            emoji: "💼",
            text: "Freelance Developer"
        },
        {
            emoji: "📧",
            text: "ahmadajmal9301@gmail.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://www.instagram.com/_something_peachy/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/PeachyVVolf",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/ahmad-ajmal/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Ahmad. I'm a Full Stack Freelance Developer. I studied CompSci at FAST NUCES, I enjoy long walks on the beach, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'GraphQL', 'Git', 'HTML5', 'CSS3', 'Bootstrap'],
            exposedTo: [ 'TypeScript', 'React Native', 'AWS' ]
        }
    ,
    hobbies: [
        {
            label: 'Gaming',
            emoji: '🎮'
        },
        {
            label: 'Gym',
            emoji: '💪'
        },
        {
            label: 'Travelling',
            emoji: '🌏'
        },
        {
            label: 'Movies',
            emoji: '🎥'
        },
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Rastay.pk",
            live: "http://rastay.pk/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/PeachyVVolf", // this should be a link to the **repository** of the project, where the code is hosted.
            image: temp1
        },
        {
            title: "Fulminare",
            live: "https://fulminare.tech",
            source: "https://github.com/PeachyVVolf/Fulminare",
            image: temp5
        },
        {
            title: "Reach Out Kids",
            live: "https://reachoutkids.org",
            source: "https://github.com/PeachyVVolf/reachoutkids",
            image: temp4
        },
        {
            title: "Netflix Copy",
            live: "",
            source: "",
            image: mock5
        },
        {
            title: "React Colors",
            live: "http://fulminare.me/react-colors/",
            source: "https://github.com/PeachyVVolf/react-colors",
            image: temp6
        },
        {
            title: 'Clan Website',
            live: "http://fulminare.me/Clan-Website/index.html",
            source: "https://github.com/PeachyVVolf/Clan-Website",
            image: temp8
        },
        {
            title: 'Lights Out',
            live: "http://fulminare.me/Lights-Out-Reactjs-Game/index.html",
            source: "https://github.com/PeachyVVolf/Lights-Out-Reactjs-Game",
            image: temp9
        },
        {
            title: 'Dad Jokes',
            live: "http://fulminare.me/dadjokes-app/",
            source: "https://github.com/PeachyVVolf/dadjokes-app",
            image: temp10
        },
        {
            title: "Stradale Coffee",
            live: "",
            source: "",
            image: temp2
        },
        {
            title: "MaxShop",
            live: "",
            source: "",
            image: temp3
        },
        {
            title: "Blog App",
            live: "",
            source: "",
            image: temp7
        },
    ]
}