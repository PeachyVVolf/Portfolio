import self from "../img/AhmadAjmal.jpg"
import temp4 from '../img/temp4.png'
import temp1 from '../img/temp1.png'
import temp2 from '../img/temp2.png'
import temp5 from '../img/temp5.png'
import temp6 from '../img/temp6.png'
import temp7 from '../img/temp7.png'
import temp8 from '../img/temp8.png'
import temp9 from '../img/temp9.png'
import temp10 from '../img/temp10.png'
import temp11 from '../img/temp11.png'

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
    firstName: "Ahmad",
    lastName: "Ajmal",
    initials: "js", 
    position: "a Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, 
    baseColor: colors[0],
    miniBio: [ 
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
    ],
    portfolio: [ 
        {
            title: "CircleOf",
            live: "https://circleof.com/", 
            source: "https://github.com/PeachyVVolf/circleof", 
            image: temp1
        },
        {
            title: "NightShift",
            live: "", 
            source: "https://github.com/PeachyVVolf/nightshift", 
            image: temp2
        },
        {
            title: "Rastay.pk",
            live: "http://rastay.pk/", 
            source: "https://github.com/PeachyVVolf", 
            image: temp11
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
        // {
        //     title: "Netflix Copy",
        //     live: "",
        //     source: "",
        //     image: mock5
        // },
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
            title: "Blog App",
            live: "",
            source: "",
            image: temp7
        },
    ]
}