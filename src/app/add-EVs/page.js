'use client';
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
    const [price, setPrice] = useState({ value: '', currency: '' }); // Updated to an object containing value and currency

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
            formData.append('price[value]', price.value);// Append price currency


            // Append all images
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
        setTransmissionType(''); // Reset transmissionType field
        setPrice({ value: '', currency: '' }); // Reset price state
    };
    

    const handleImageChange = (event, section) => {
        const files = event.target.files;
        const filesArray = Array.from(files);
        
        // Limit the number of images to 3
        const maxImages = 3;

        // Check if the total number of images exceeds the limit
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

        // Proceed with appending files to FormData as before
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
        // Remove any non-numeric characters from the input
        const numericValue = value.replace(/\D/g, '');
        // Format the value with commas
        const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        // Update the state with the formatted value
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
        <>
            
            <section className="py-20 bg-gray-950"  style={{ backgroundImage: "url('/images/bg/b17.jpg')" }}>
        <div className="container mx-auto px-2">
        <div className="max-w-lg mx-auto bg-gray-200 rounded-lg shadow-lg p-2 mt-4">
            <div className="pt-16 flex justify-center items-center min-h-screen mt-0">
                <div className="w-full sm:max-w-md mt-0">
                    <h1 className="text-center text-2xl mb-4 mt-0 text-black"><b>Enter EV Details</b></h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2"  />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                <b>Battery Power(mAh)</b>
                                <input type="text" value={batteryPower} onChange={(e) => setBatteryPower(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" placeholder="63.5kW" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                <b>Color</b>
                                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2"/>
                            </label><br/><br/>
                            {renderTransmissionTypeField()}
                            {renderBodyTypeField()}
                            <label className="text-gray-950">
                                <b>Registration Year</b>
                                <select value={registrationYear} onChange={(e) => setRegistrationYear(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2">
                                    <option value="">Select Registration Year</option>
                                    {renderRegistrationYears()}
                                </select>
                            </label><br/><br/>
                            

                        <label className="text-gray-950">
    <b>Price</b>
    <input 
        type="text" // Change input type to text to allow manual entry
        value={price.value} // Use price.value instead of price
        onChange={(e) => handlePriceChange(e.target.value)} // Call handlePriceChange function
        required 
        className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" 
    />
</label>
<select 
    value={price.currency} // Use price.currency instead of price
    onChange={(e) => setPrice({ ...price, currency: e.target.value })} // Update the currency field of price
    required 
    className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2 text-black"
>
                                        <option value="" className="text-black">Select Currency</option>
                                        <option value="USD" className="text-black">USD</option>
                                        <option value="EUR" className="text-black">EUR</option>
                                        <option value="SGD" className="text-black">SGD</option> {/* Singapore Dollar */}
                                        <option value="INR" className="text-black">INR</option> {/* Indian Rupee */}
                                        <option value="SAR" className="text-black">SAR</option> 
                                        </select>

                                <label className="text-gray-950">
                                <b>Vehicle Description</b>
                                <textarea value={vehicleDescription} onChange={(e) => setVehicleDescription(e.target.value)} className="w-full sm:w-48 h-32 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                        </fieldset>


                        <fieldset>
                            <legend className="text-black">Upload Images</legend>
                            <label className="text-gray-950">
                            <b>Add Image Of Front-side</b>
                            <input type="file" name="image" accept="image/*" onChange={(e) => handleImageChange(e, 'front')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {frontImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Front Images</h4>
                                    {frontImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/><br/>
                            <label className="text-gray-950">
                                <b>Add Image of left/right sides</b>
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'side')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {sideImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Side Images</h4>
                                    {sideImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/><br/>
                            <label className="text-gray-950">
                                <b>Add Image of Back-Side</b>
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'back')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {backImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Back Images</h4>
                                    {backImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/><br/>
                            <label className="text-gray-950">
                                <b>Add Image of Interior</b>
                                <input type="file" accept="image/*" onChange={(e) => handleImageChange(e, 'interior')} multiple required className="w-full border rounded-sm py-1 px-2" />
                            </label>
                            {interiorImages.length > 0 && (
                                <div>
                                    <h4>Uploaded Interior Images</h4>
                                    {interiorImages.map((image, index) => (
                                        <p key={index}>{image.name}</p>
                                    ))}
                                </div>
                            )}
                            <br/>
                        </fieldset>
                        <fieldset>
                            <legend className="text-black">Enter your Details</legend>
                            <label className="text-gray-950">
                                <b>Your Name</b>
                                <input type="text" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                <b>Your Contact Number</b>
                                <input type="text" value={ownerContact} onChange={(e) => setOwnerContact(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                <b>Your Email</b>
                                <input type="email" value={ownerEmail} onChange={(e) => setOwnerEmail(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                            <label className="text-gray-950">
                                <b>Your City</b>
                                <input type="text" value={ownerCity} onChange={(e) => setOwnerCity(e.target.value)} required className="w-full sm:w-48 h-8 border rounded-sm py-1 px-2" />
                            </label><br/><br/>
                        </fieldset>
                        <div className="flex justify-center">
                            <button type="submit" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h2 className="text-2xl mb-4">Vehicle Registered Successfully!</h2>
                        <p>Your vehicle registration is submitted and awaiting approval.</p>
                    </div>
                </div>
            )}
            </div>
            </div>
      </section>

        </>
    );
}