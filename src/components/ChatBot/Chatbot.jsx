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
            message: "Our unique feature is the ability to generate a unique product code based on your product specifications. You can try it out by Exploring our website",
            trigger: "MainMenu"
        },
        {
            id: "ProductList",
            message: "Great! Here are some of our products:",
            trigger: "ProductOptions"
        },

        {
            id: "ProductOptions",
            options: [
                { value: "Lamp", label: "Lamp", trigger: "LampPrice" },
                { value: "Battery", label: "Battery", trigger: "BatteryPrice" },
                { value: "Laptop", label: "Laptop", trigger: "LaptopPrice" },
                { value: "SmartWatch", label: "Smart Watch", trigger: "SmartWatchPrice" },
                { value: "Heater", label: "Heater", trigger: "HeaterPrice" },
                { value: "Torch", label: "Torch", trigger: "TorchPrice" },
                { value: "BackToMain", label: "Back to Main Menu", trigger: "MainMenu" }
            ]
        },
        {
            id: "LampPrice",
            message: "The price of the Lamp is $20,000.",
            trigger: "ProductOptions"
        },
        {
            id: "BatteryPrice",
            message: "The price of the Battery is $55,000.",
            trigger: "ProductOptions"
        },
        {
            id: "LaptopPrice",
            message: "The price of the Laptop is $25,000.",
            trigger: "ProductOptions"
        },
        {
            id: "SmartWatchPrice",
            message: "The price of the Smart Watch is $3,000.",
            trigger: "ProductOptions"
        },
        {
            id: "HeaterPrice",
            message: "The price of the Heater is $5,000.",
            trigger: "ProductOptions"
        },
        {
            id: "TorchPrice",
            message: "The price of the Torch is $7,000.",
            trigger: "ProductOptions"
        },
        {
            id: "FAQs",
            message: "Here are some frequently asked questions:",
            trigger: "FAQOptions"
        },
        {
            id: "FAQOptions",
            options: [
                { value: "Shipping", label: "Shipping", trigger: "ShippingFAQ" },
                { value: "Returns", label: "Returns", trigger: "ReturnsFAQ" },
                { value: "Payment", label: "Payment", trigger: "PaymentFAQ" },
                { value: "BackToMain", label: "Back to Main Menu", trigger: "MainMenu" }
            ]
        },
        {
            id: "ShippingFAQ",
            message: "Our standard shipping takes 3-5 business days. Expedited shipping options are also available.",
            trigger: "FAQOptions"
        },
        {
            id: "ReturnsFAQ",
            message: "We accept returns within 30 days of purchase. Please check our return policy for more details.",
            trigger: "FAQOptions"
        },
        {
            id: "PaymentFAQ",
            message: "We accept various payment methods including credit cards, PayPal, and bank transfers.",
            trigger: "FAQOptions"
        }
    ];

    return (
        <div style={{ float: "right" }}>
            <ChatBot steps={steps} />
        </div>
    );
}

