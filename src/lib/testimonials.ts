
export type Testimonial = {
  name: string;
  title: string;
  text: string; // Changed from 'review' to 'text' to match provided data
  stars: number; // Changed from 'rating' to 'stars'
  isOG?: boolean;
  isMostImproved?: boolean;
  location?: string;
  image?: string;
  photoURL?: string;
  specialTag?: string;
  status?: 'pending' | 'approved' | 'rejected';
  createdAt?: any;
  uid?: string;
};


export const testimonials: Testimonial[] = [
    { name: "Veer J", title: "Better than Kumon for APs.", text: "I finished all of Kumon and thought I was set💔🥀, but this app is on another level. The AI tools actually explain things in a way that makes sense. It's way better for AP prep.", stars: 4, isOG: true, location: "San Francisco, CA", image: "/images/testimonials/veer.jpg" },
    { name: "Nish P", title: "This app carried my GPA.", text: "Not even kidding. This app carried my GPA. 🙏 I was struggling in APUSH and this was the only thing that helped me study. The flashcards are super easy to make and the learn mode is a lifesaver.", stars: 5, isOG: false, location: "San Jose, CA", image: "/images/testimonials/nish2.jpg" },
    { name: "Waylon S", title: "Too many themes?? 😵‍💫", text: "The dashboard is almost too customizable. I spent like 20 minutes just trying out themes instead of studying. The 'Starry Night' one is sick though. Got me sidetracked. 😂", stars: 3, isOG: true, location: "Miami, FL" },
    { name: "Ishan C", title: "My secret weapon for practice tests.", text: "I don't usually write reviews, but the AI test generator is insane. It's not perfect but it creates some really solid practice questions that helped me prep for midterms.", stars: 4, isOG: true, location: "Ahmedabad, India", image: "/images/testimonials/ishan2.jpg" },
    { name: "Daniel L", title: "A lifesaver for studying.", text: "Seriously. The AI flashcard thing saved me so much time. I just pasted my notes and it did everything. Made studying for my literature class way less painful.", stars: 4, isOG: true, location: "Houston, TX", image: "/images/testimonials/daniel.jpg" },
    { name: "Samik R", title: "My go-to for exam prep. 💯", text: "I use this every day leading up to a test. It keeps me focused and on track. Can't recommend it enough.", stars: 5, isOG: false, location: "Chicago, IL" },
    { name: "Tyler S", title: "The timer is loud.", text: "The 'Bomb Fuse' timer style is funny but the explosion sound at the end actually made me jump. Had to switch to a quieter one. Kinda wish all my apps had producer tags for timers tho lol 💀.", stars: 3, isOG: false, location: "Austin, TX"},
    { name: "William W", title: "10/10 would recommend.", text: "The interface is so clean and it's super easy to use. The smart grading feature for the Deep Dive mode is crazy good and actually helps you learn. 🤩", stars: 5, isOG: false, location: "Boston, MA"},
    { name: "Alan M", title: "Finally passed my chem exam.", text: "I was about to give up on AP chem, but the practice problems on here made things click. So grateful for this app. ❤️‍🩹", stars: 5, isOG: false, location: "Orlando, FL" },
    { name: "Arshith K", title: "The dashboard is actually so cool.", text: "I love how you can customize everything and see all your progress. It feels like a game but you're actually learning. The dashboard is my favorite part.", stars: 5, isOG: false, location: "Seattle, WA" },
    { name: "Muhhammad A", title: "No more cramming for me.", text: "I used to wait until the last minute, but this app helped me stay organized with the calendar. I felt so prepared for my exams this time. 🫡", stars: 5, isOG: false, location: "New York, NY" },
    { name: "Grant B", title: "If you have AP's, you need this.", text: "This is not an ad, I just really love this app. It's free and it's better than all the paid ones I've tried. No contest. 🤑", stars: 5, isOG: false, location: "Boise, ID", image: "/images/testimonials/grant2.jpg" },
    { name: "Caleb C", title: "My grades actually went up.", text: "My history teacher was surprised at how much better I was doing. It's all because of this app and the way it helps you track everything.", stars: 5, isOG: false, location: "Denver, CO" },
    { name: "Krish P", title: "Best study tool out there.", text: "I've tried them all. This is the one. The AI features are next level and actually helpful, not just gimmicks.", stars: 5, isOG: false, location: "Philadelphia, PA" },
    { name: "Hayden P", title: "Seriously, just get it.", text: "It's like having a tutor in your pocket. Whenever I'm confused about something I use the AI tools and it helps a ton.", stars: 5, isOG: false, location: "Phoenix, AZ", image: "/images/testimonials/hayden.jpg" },
    { name: "Sanjay K", title: "My go-to for exam prep.", text: "I use this every day leading up to a test. It keeps me focused and on track. Can't recommend it enough.", stars: 5, isOG: false, location: "New Orleans, Louisiana", image: "/images/testimonials/sanjay2.jpg" },
    { name: "Noah L", title: "The UI is so clean. ✨", text: "It's just a really well-made app. No annoying ads or popups. Just the tools you need to study. Refreshing.", stars: 5, isOG: false, location: "Los Angeles, CA", image: "/images/testimonials/noah.jpg" },
    { name: "Nevin E", title: "I wish I had this my freshman year.", text: "I almost failed Pre-Calc, but this app saved me. It would have saved me so much time and stress. Highly recommend it to anyone in high school.", stars: 5, isOG: false, location: "Raleigh, NC", image: "/images/testimonials/nevin.jpg" },
    { name: "Ashaz G", title: "This is the reason I passed.", text: "I'm not a good student but this app seriously saved me. 😭 The deep dive mode is hard but it forces you to learn.", stars: 4, isOG: true, location: "Las Vegas, NV", image: "/images/testimonials/ashaz.jpg" },
    { name: "Philip D", title: "It's whatever.", text: "i ain't even gon hold you, i was failing everything. my counselor told me to try this and i was like aight bet. now i'm passing. it's whatever tho. 🤷‍♂️", stars: 5, isMostImproved: true, location: "Compton, CA", image: "/images/testimonials/philip2.jpg" },
    { name: "Carson T", title: "This helped me so much with my AP courses", text: "I'm a sophomore and this site helped me so much in AP Human Geography! The study guides and practice questions made everything easier to understand and remember. I felt way more confident going into the AP exam. Highly recommend it to any student looking for extra support!", stars: 5, location: "Albuquerque, NM" },
    { name: "Adam K.", title: "Improved from 3 to 5", text: "Studizilla helped me organize my study schedule and focus on my weak areas. I improved from a 3 to a 5 on my AP Human exam!", stars: 5, isOG: false, location: "Atlanta, GA", image: "/images/testimonials/adam.jpeg" },
    { name: "Khaleel A.", title: "My Secret Weapon for College Apps.", text: "Studizilla was my secret weapon in high school. It didn't just help me pass my exams; it taught me how to study effectively, a skill that's been invaluable here at Stanford. I genuinely believe it played a huge role in getting me here.", stars: 5, isOG: false, location: "Stanford University", specialTag: "Stanford Success" },
    { name: "Mann P.", title: "Prepared me for college-level courses.", text: "Using Studizilla for my APs in high school genuinely prepared me for the rigor of my university classes. The study habits I built with this app have been a total game-changer for my college career.", stars: 5, isOG: false, location: "Georgia Tech", image: "/images/testimonials/mann.jpeg" },
    { name: "Gabe R.", title: "Getting ahead as a sophomore.", text: "As a sophomore taking my first AP course, I was pretty intimidated. This app made it so much less stressful. I feel like I'm actually ahead of the curve now instead of just trying to keep up.", stars: 5, isOG: false, location: "Marietta, GA", image: "/images/testimonials/gabe.jpeg" },
    { name: "Yug Patel", title: "This genuinely helped me a ton.", text: "This genuinely helped me a ton. I would’ve failed all my of tests this year and all of my courses. this website helped me review and actually process info, unlike teachers. use this course it’ll change your entire grade book in a positive way.", stars: 5, location: "Smyrna, GA", createdAt: "2025-11-10", status: "approved" },
    { name: "Kelsey .T", title: "0 wasted time!", text: "With AP Physics maximizing study time is key. I failed the first test and I realized I really needed to change my study methods, then I found this site. Saved my grade and got my life together. Would def reccomend!", stars: 5, isOG: false, location: "Marietta, GA"}
];

    
