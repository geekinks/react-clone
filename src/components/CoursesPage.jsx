
import React, { useState } from "react";
import "../css/Courses.css";

function CoursesPage() {
    const [showFilters, setShowFilters] = useState(false);
    const toggleFilters = () => setShowFilters(!showFilters);

    const courses = [
        {
            img: "../../public/images/FullStack.jpg",
            title: "Full Stack Development",
            desc: "Master both frontend and backend development with modern technologies including React, Node.js, and databases.",
            duration: "3 months",
            level: "Intermediate",
            topics: ["Frontend & Backend Development", "React & Node.js", "Database Design", "+2 more"],
            price: "₦60,000",
            oldPrice: "₦90,000",
        },
        {
            img: "../../public/images/REACT.jpg",
            title: "React Development Mastery",
            desc: "Build modern, interactive web applications with React, Redux, and the latest frontend technologies.",
            duration: "3 months",
            level: "Intermediate",
            topics: ["React Hooks & Context", "State Management with Redux", "Modern UI Libraries", "+2 more"],
            price: "₦45,000",
            oldPrice: "₦60,000",
        },
        {
            img: "../../public/images/Python.jpg",
            title: "Python Programming & Data Science",
            desc: "Learn Python programming from basics to advanced concepts including data science, web development, and automation.",
            duration: "2 months",
            level: "Beginner",
            topics: ["Python Fundamentals", "Data Science with Pandas", "Web Development with Django", "+2 more"],
            price: "₦30,000",
            oldPrice: "₦40,000",
        },
        {
            img: "../../public/images/Mobile.jpg",
            title: "Flutter Mobile App Development",
            desc: "Create beautiful, native mobile applications for iOS and Android using Google's Flutter framework.",
            duration: "3 months",
            level: "Intermediate",
            topics: ["Cross-platform Development", "Dart Programming Language", "UI/UX Design Principles", "+2 more"],
            price: "₦45,000",
            oldPrice: "₦60,000",
        },
        {
            img: "../../public/images/CyberSecurity.jpg",
            title: "Cybersecurity Fundamentals",
            desc: "Learn essential cybersecurity concepts, ethical hacking, and how to protect systems from cyber threats.",
            duration: "3 months",
            level: "Beginner",
            topics: ["Network Security", "Ethical Hacking", "Risk Assessment", "+2 more"],
            price: "₦60,000",
            oldPrice: "₦90,000",
        },
        {
            img: "../../public/images/ReactNative.jpg",
            title: "React Native Mobile Development",
            desc: "Build native mobile apps for iOS and Android using React Native and JavaScript.",
            duration: "3 months",
            level: "Intermediate",
            topics: ["Native Mobile Development", "React Native CLI & Expo", "Navigation & State Management", "+2 more"],
            price: "₦45,000",
            oldPrice: "₦60,000",
        },
    ];

    return (
        <div>
            <ChooseSection />
            <SearchFilterRow toggleFilters={toggleFilters} />
            <FilterGrid show={showFilters} />

            <div className="complete-courses">
                {courses.map((c, i) => (
                    <CourseCard key={i} {...c} />
                ))}
            </div>
        </div>
    );
}

export default CoursesPage