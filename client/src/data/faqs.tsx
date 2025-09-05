import React from "react"

type FAQ = {
    id: string
    question: string
    answer: React.ReactNode
}

const slugify = (s: string) =>
    s
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "")

const faqs: FAQ[] = [
    {
        id: slugify("What is Viksha, and what does the coding club do?"),
        question: "What is Viksha, and what does the coding club do?",
        answer:
            "Viksha is the official coding club at RVU, dedicated to fostering coding skills, innovation, and community among students. We organize workshops, coding challenges, hackathons, competitions, and peer learning sessions to help members build projects, improve technical skills, and prepare for internships and placements.",
    },
    {
        id: slugify("Who can join Viksha?"),
        question: "Who can join Viksha?",
        answer:
            "Viksha is inclusive and open to students from all disciplines! Whether you’re from Computer Science, Business, Design, or any other field, if you’re interested in coding and tech, you’re most welcome.",
    },
    {
        id: slugify("How do I become a member, and is there any fee?"),
        question: "How do I become a member, and is there any fee?",
        answer:
            "Becoming a member is simple just follow us on Instagram, LinkedIn, and join our WhatsApp group to get updates. There is no membership fee or registration cost; passion for coding is all you need.",
    },
    {
        id: slugify("Do I need prior coding experience to join?"),
        question: "Do I need prior coding experience to join?",
        answer:
            "Not at all! Viksha welcomes both beginners and experienced coders. Our goal is to build a supportive community where everyone can learn, share, and grow together.",
    },
    {
        id: slugify("What kinds of events and activities does Viksha host?"),
        question: "What kinds of events and activities does Viksha host?",
        answer: (
            <>
                <p>Viksha regularly organizes:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Coding and logic challenges</li>
                    <li>Internal workshops (Python web dev Git algorithms etc.)</li>
                    <li>Guest talks by industry professionals</li>
                    <li>Hackathons and themed coding marathons</li>
                    <li>Peer mentorship and project collaboration meetups</li>
                </ul>
            </>
        ),
    },
    {
        id: slugify("How does being a member of Viksha help with placements and internships?"),
        question: "How does being a member of Viksha help with placements and internships?",
        answer: (
            <>
                <p>Membership in Viksha can boost your career growth by:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Sharpening technical and problem solving skills</li>
                    <li>Helping you build portfolio worthy projects</li>
                    <li>Offering mock interview prep and resume guidance</li>
                    <li>Connecting you with seniors alumni and industry mentors</li>
                </ul>
            </>
        ),
    },
    {
        id: slugify("How can I stay updated on events and register?"),
        question: "How can I stay updated on events and register?",
        answer: (
            <>
                <p>Stay in the loop through:</p>
                <ul className="list-disc pl-6 mt-2">
                    <li>Our official social media handles (Instagram LinkedIn)</li>
                    <li>WhatsApp announcements</li>
                    <li>Posters and screens around campus</li>
                    <li>The events section of our website (with dates deadlines and registration links)</li>
                </ul>
            </>
        ),
    },
    {
        id: slugify("Who do I contact for more information?"),
        question: "Who do I contact for more information?",
        answer: "Visit the Contacts section of our website for details.",
    },
]

export default faqs
