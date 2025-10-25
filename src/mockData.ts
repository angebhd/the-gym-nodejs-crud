import type { Item } from "./types/items.js";

const items : Item[] = [
    {
        id: 'aaaa-aaaa-aaaa-aaaa',
        name: "Treadmill",
        price: 299.99,
        description: "A high-quality treadmill for home use."
    },
    {
        id: 'bbbb-bbbb-bbbb-bbbb',
        name: "Dumbbells",
        price: 49.99,
        description: "Adjustable dumbbells for strength training."
    },
    {
        id: 'cccc-cccc-cccc-cccc',
        name: "Yoga Mat",
        price: 19.99,
        description: "A non-slip yoga mat for your workouts."
    },
    {
        id: 'dddd-dddd-dddd-dddd',
        name: "Resistance Bands",
        price: 9.99,
        description: "Set of resistance bands for core exercises."
    },
    {
        id: 'eeee-eeee-eeee-eeee',
        name: "Exercise Bike",
        price: 199.99,
        description: "An adjustable exercise bike for cardio and weight lifting."
    }
];

module.exports = { items };