import React from 'react';
import ChatBot from "react-simple-chatbot";

export default function Chatbot() {
    const steps = [
        {
            id: "Greet",
            message: "Hello, Welcome to our e-commerce website!",
            trigger: "Ask Name"
        },
        {
            id: "Ask Name",
            message: "Please enter your name",
            trigger: "waiting1"
        },
        {
            id: "waiting1",
            user: true,
            trigger: "Name"
        },
        {
            id: "Name",
            message: "Hi {previousValue}, how can we assist you today?",
            trigger: "MainMenu"
        },
        {
            id: "MainMenu",
            options: [
                { value: "BrowseProducts", label: "Browse Products", trigger: "ProductList" },
                { value: "FAQs", label: "FAQs", trigger: "FAQs" },
                { value: "UniqueFeature", label: "What's Unique?", trigger: "UniqueFeatureExplanation" }
            ]
        },
        {
            id: "UniqueFeatureExplanation",
            message: "Our unique feature is the ability to generate a unique product code based on your product specifications. You can try it out by selecting 'Generate Unique Code' in the main menu.",
            trigger: "MainMenu"
        },
        {
            id: "ProductList",
            message: "Great! Here are some of our products:",
            trigger: "ProductOptions"
        },
        // ...other product-related steps...
        {
            id: "FAQs",
            message: "Here are some frequently asked questions:",
            trigger: "FAQOptions"
        },
        // ...other FAQ-related steps...
    ];

    return (
        <div style={{ float: "right" }}>
            <ChatBot steps={steps} />
        </div>
    );
}
