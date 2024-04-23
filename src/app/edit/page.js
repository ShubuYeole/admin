"use client";
import React, { useState } from "react";
import Link from "next/link";

import Footer from "../components/footer";
import Switcher from "../components/switcher";

export default function edit() {
    const [ownerName, setOwnerName] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerCity, setOwnerCity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [plateNo, setPlateNo] = useState('');
    const [batteryPower, setBatteryPower] = useState('');
    const [kilometresDriven, setKilometresDriven] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', {
            ownerName,
            ownerContact,
            ownerEmail,
            ownerCity,
            vehicleType,
            brand,
            model,
            plateNo,
            batteryPower,
            kilometresDriven,
            image,
        });
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <>
            <div className="pt-16 flex justify-center items-center min-h-screen">
                <div className="w-full max-w-xl bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="text-center text-2xl mb-4">Edit</h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <fieldset>
                        <legend className="text-lg font-medium text-green-900">Owner Details</legend>

                            <div className="mb-4">
                                <label className="text-green-500 block">Owner Name:</label>
                                <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Owner Contact:</label>
                                <input type="text" value={ownerContact} onChange={(e) => setOwnerContact(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8"  />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Owner Email:</label>
                                <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8"  />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Owner City:</label>
                                <input type="text" value={ownerCity} onChange={(e) => setOwnerCity(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend className="text-lg font-medium">Vehicle Details</legend>
                            <div className="mb-4">
                                <label className="text-green-500 block">Vehicle Type:</label>
                                <input type="text" value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Brand:</label>
                                <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Model:</label>
                                <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Plate Number:</label>
                                <input type="text" value={plateNo} onChange={(e) => setPlateNo(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Battery Power(mAh):</label>
                                <input type="text" value={batteryPower} onChange={(e) => setBatteryPower(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Kilometres Driven:</label>
                                <input type="text" value={kilometresDriven} onChange={(e) => setKilometresDriven(e.target.value)} required className="border border-green-500 rounded-sm py-1 px-2 w-full sm:w-48 h-8" />
                            </div>
                            <div className="mb-4">
                                <label className="text-green-500 block">Upload Image:</label>
                             <input type="file" accept="image/*" onChange={handleImageChange} required className="border border-green-500 rounded-sm py-1 px-4 w-full sm:w-full h-10" />
                             </div>

                        </fieldset>
                        <div className="flex justify-center">
                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full px-4 py-2">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
            <Switcher />
        </>
    )
}
