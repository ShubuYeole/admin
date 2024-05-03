'use client'
import axios from "axios";
import { useEffect, useState } from "react";
import Wrapper from "../components/wrapper";

export default function ListSidebar() {
    const [ownerName, setOwnerName] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    const [ownerEmail, setOwnerEmail] = useState('');
    const [ownerCity, setOwnerCity] = useState('');
    const [vehicleType, setVehicleType] = useState('');
    const [brand, setBrand] = useState('');
    const [model, setModel] = useState('');
    const [variant, setVariant] = useState('');
    const [location, setLocation] = useState('');
    const [rtoCode, setRtoCode] = useState('');
    const [batteryPower, setBatteryPower] = useState('');
    const [kilometresDriven, setKilometresDriven] = useState('');
    const [bodyType, setBodyType] = useState('');
    const [color, setColor] = useState('');
    const [registrationYear, setRegistrationYear] = useState('');
    const [vehicleDescription, setVehicleDescription] = useState('');
    const [interiorImages, setInteriorImages] = useState([]);
    const [frontImages, setFrontImages] = useState([]);
    const [sideImages, setSideImages] = useState([]);
    const [backImages, setBackImages] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [currentYear, setCurrentYear] = useState('');
    const [transmissionType, setTransmissionType] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [price, setPrice] = useState({ value: '', currency: '' });

    useEffect(() => {
        const year = new Date().getFullYear();
        setCurrentYear(year);
        setRegistrationYear(year);
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 11000);
            const formData = new FormData();
            formData.append('ownerName', ownerName);
            formData.append('ownerContact', ownerContact);
            formData.append('ownerEmail', ownerEmail);
            formData.append('ownerCity', ownerCity);
            formData.append('vehicleType', vehicleType);
            formData.append('brand', brand);
            formData.append('model', model);
            formData.append('variant', variant);
            formData.append('location', location);
            formData.append('rtoCode', rtoCode);
            formData.append('batteryPower', batteryPower);
            formData.append('kilometresDriven', kilometresDriven);
            formData.append('bodyType', bodyType);
            formData.append('color', color);
            formData.append('registrationYear', registrationYear);
            formData.append('vehicleDescription', vehicleDescription);
            formData.append('transmissionType', transmissionType);
            formData.append('price[currency]', price.currency); 
            formData.append('price[value]', price.value);

            frontImages.forEach((image) => formData.append('frontImages', image));
            sideImages.forEach((image) => formData.append('sideImages', image));
            backImages.forEach((image) => formData.append('backImages', image));
            interiorImages.forEach((image) => formData.append('interiorImages', image));

            const response = await axios.post("http://51.79.225.217:5001/api/vehicle/register", formData);

            if (response.status === 201) {
                resetFormFields();
                setShowPopup(true);
            } else {
                setError('Error registering vehicle');
            }
        } catch (error) {
            setError('Error registering vehicle');
        } finally {
            setLoading(false);
        }
    };

    const resetFormFields = () => {
        setOwnerName('');
        setOwnerContact('');
        setOwnerEmail('');
        setOwnerCity('');
        setVehicleType('');
        setBrand('');
        setModel('');
        setVariant('');
        setLocation('');
        setRtoCode('');
        setBatteryPower('');
        setKilometresDriven('');
        setBodyType('');
        setColor('');
        setRegistrationYear(currentYear);
        setVehicleDescription('');
        setInteriorImages([]);
        setFrontImages([]);
        setSideImages([]);
        setBackImages([]);
        setTransmissionType('');
        setPrice({ value: '', currency: '' });
    };

    const handleImageChange = (event, section) => {
        const files = event.target.files;
        const filesArray = Array.from(files);
        const maxImages = 3;

        if (section === 'front' && frontImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 front-side images.');
            return;
        } else if (section === 'side' && sideImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 side images.');
            return;
        } else if (section === 'back' && backImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 back-side images.');
            return;
        } else if (section === 'interior' && interiorImages.length + filesArray.length > maxImages) {
            alert('You can upload a maximum of 3 interior images.');
            return;
        }

        switch (section) {
            case 'front':
                setFrontImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            case 'side':
                setSideImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            case 'back':
                setBackImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            case 'interior':
                setInteriorImages(prevImages => [...prevImages, ...filesArray.slice(0, maxImages - prevImages.length)]);
                break;
            default:
                break;
        }
    };
    
    const handlePriceChange = (value) => {
        const numericValue = value.replace(/\D/g, '');
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        setPrice({ ...price, value: formattedValue });
    };

    const renderRtoCodeAndKilometresDriven = () => {
        if (vehicleType !== 'edrone' && vehicleType !== 'ecycle') {
            return (
                <>
                    <label className="text-gray-950">
                        <b>RTO Code</b>
                        <input type="text" value={rtoCode} onChange={(e) => setRtoCode(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                    </label><br/><br/>
                    <label className="text-gray-950">
                        <b>Kilometres Driven</b>
                        <input type="text" value={kilometresDriven} onChange={(e) => setKilometresDriven(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                    </label><br/><br/>
                </>
            );
        }
        return null;
    };

    const renderTransmissionOptions = () => {
        switch (vehicleType) {
            case 'ecar':
            case 'eauto':
            case 'etractor':
            case 'ebike':
                return (
                    <>
                        <option value="">Select Transmission Type</option>
                        <option value="Manual">Manual</option>
                        <option value="Automatic">Automatic</option>
                    </>
                );
            default:
                return null;
        }
    };

    const renderTransmissionTypeField = () => {
        if (['ecycle', 'edrone', 'etractor'].includes(vehicleType)) {
            return null;
        }

        return (
            <label className="text-gray-950">
                <b>Transmission Type</b>
                <select value={transmissionType} onChange={(e) => setTransmissionType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" >
                    {renderTransmissionOptions()}
                </select>
            </label>
        );
    };

    const renderRegistrationYears = () => {
        const years = [];
        for (let i = 1995; i <= currentYear; i++) {
            years.push(i);
        }
        return years.map((year) => (
            <option key={year} value={year}>{year}</option>
        ));
    };
    
    const renderBodyTypeOptions = () => {
        if (vehicleType === 'ecar') {
            return (
                <>
                    <option value="">Select Body Type</option>
                    <option value="SUV">SUV</option>
                    <option value="MUV">MUV</option>
                    <option value="Sedan">Sedan</option>
                    <option value="Coupe">Coupe</option>
                    <option value="Hatchback">Hatchback</option>
                </>
            );
        }
        return null;
    };

    const renderBodyTypeField = () => {
        if (vehicleType === 'ecar') {
            return (
                <label className="text-gray-950">
                    <b>Body Type</b>
                    <select value={bodyType} onChange={(e) => setBodyType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" >
                        {renderBodyTypeOptions()}
                    </select>
                </label>
            );
        }
        return null;
    };


    return (
        <Wrapper>
    
            <section className="py-20 bg-gray-950" style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}>
                <div className="container mx-auto px-2">
                    <div className="mx-auto bg-gray-200 rounded-lg shadow-lg p-2 mt-4 mr-20 ml-20" style={{ maxWidth: '800px' }}>
                        <div className="pt-10 flex justify-center items-center min-h-screen mt-0 flex-col">
                            <h1 className="text-center text-2xl mb-4 mt-0 text-black"><b>Enter Vehicle details you want to sell</b></h1>
                            <div className="flex w-full">
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="flex justify-between">
                                        <div className="w-1/2 pr-4 ml-10">
                                            <fieldset>
                                                <legend className="text-black"><b>Vehicle Details</b></legend>
                                                <label className="text-gray-950">
                                                    <b>Vehicle Type</b>
                                                    <select value={vehicleType} onChange={(e) => setVehicleType(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2">
                                                        <option value="">Select Vehicle Type</option>
                                                        <option value="ecar">eCar</option>
                                                        <option value="ebike">eBike</option>
                                                        <option value="ecycle">eBicycle</option>
                                                        <option value="etractor">eTractor</option>
                                                        <option value="edrone">eDrone</option>
                                                        <option value="eauto">eAuto</option>
                                                    </select>
                                                </label><br/><br/>
                                                {renderRtoCodeAndKilometresDriven()}
                                                <label className="text-gray-950">
                                                    <b>Brand</b>
                                                    <input type="text" value={brand} onChange={(e) => setBrand(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Model</b>
                                                    <input type="text" value={model} onChange={(e) => setModel(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Variant</b>
                                                    <input type="text" value={variant} onChange={(e) => setVariant(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Location</b>
                                                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Battery Power (kWh)</b>
                                                    <input type="text" value={batteryPower} onChange={(e) => setBatteryPower(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                {renderBodyTypeField()}
                                                <label className="text-gray-950">
                                                    <b>Color</b>
                                                    <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Registration Year</b>
                                                    <select value={registrationYear} onChange={(e) => setRegistrationYear(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2">
                                                        {renderRegistrationYears()}
                                                    </select>
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Vehicle Description</b>
                                                    <textarea value={vehicleDescription} onChange={(e) => setVehicleDescription(e.target.value)} required className="w-full sm:w-48 h-24 border rounded-sm py-1 px-2"></textarea>
                                                </label><br/><br/>
                                            </fieldset>
                                        </div>
                                        <div className="w-1/2 ml-10">
                                            <fieldset>
                                                <legend className="text-black"><b>Owner Details</b></legend>
                                                <label className="text-gray-950">
                                                    <b>Name</b>
                                                    <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Contact</b>
                                                    <input type="text" value={ownerContact} onChange={(e) => setOwnerContact(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Email</b>
                                                    <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>City</b>
                                                    <input type="text" value={ownerCity} onChange={(e) => setOwnerCity(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                            </fieldset>
                                            <fieldset>
                                                <legend className="text-black"><b>Images Upload</b></legend>
                                                <label className="text-gray-950">
                                                    <b>Front Images</b>
                                                    <input type="file" onChange={(e) => handleImageChange(e, 'front')} accept="image/*" multiple className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Side Images</b>
                                                    <input type="file" onChange={(e) => handleImageChange(e, 'side')} accept="image/*" multiple className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Back Images</b>
                                                    <input type="file" onChange={(e) => handleImageChange(e, 'back')} accept="image/*" multiple className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Interior Images</b>
                                                    <input type="file" onChange={(e) => handleImageChange(e, 'interior')} accept="image/*" multiple className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                            </fieldset>
                                            <fieldset>
                                                <legend className="text-black"><b>Pricing</b></legend>
                                                <label className="text-gray-950">
                                                    <b>Price</b>
                                                    <input type="text" value={price.value} onChange={(e) => handlePriceChange(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                                                </label><br/><br/>
                                                <label className="text-gray-950">
                                                    <b>Currency</b>
                                                    <select value={price.currency} onChange={(e) => setPrice({ ...price, currency: e.target.value })} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2">
                                                        <option value="" className="text-black">Select Currency</option>
                                                        <option value="USD" className="text-black">USD</option>
                                                        <option value="EUR" className="text-black">EUR</option>
                                                        <option value="SGD" className="text-black">SGD</option> {/* Singapore Dollar */}
                                                    </select>
                                                </label><br/><br/>
                                            </fieldset>
                                        </div>
                                    </div>
                                    <div className="flex justify-end">
                                        <button type="submit" className="bg-yellow-400 text-gray-800 hover:bg-yellow-300 font-bold py-2 px-4 rounded inline-flex items-center">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {showPopup && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>
                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>&#8203;
                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Success!</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">Your vehicle details have been submitted successfully!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button onClick={() => setShowPopup(false)} type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-yellow-400 text-base font-medium text-gray-800 hover:bg-yellow-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 sm:ml-3 sm:w-auto sm:text-sm">
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        
        </Wrapper>
    );
}
