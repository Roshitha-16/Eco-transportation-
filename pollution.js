// Example pollution data with additional cities
const pollutionData = {
    "mumbai": 120,    // AQI for Mumbai
    "delhi": 250,     // AQI for Delhi
    "kolkata": 170,   // AQI for Kolkata
    // New cities
    "amaravati": 100,    // AQI for Amaravati, Andhra Pradesh
    "itanagar": 80,      // AQI for Itanagar, Arunachal Pradesh
    "dispur": 150,       // AQI for Dispur, Assam
    "patna": 200,        // AQI for Patna, Bihar
    "raipur": 130,       // AQI for Raipur, Chhattisgarh
    "panaji": 90,        // AQI for Panaji, Goa
    "gandhinagar": 160,  // AQI for Gandhinagar, Gujarat
    "chandigarh": 110,   // AQI for Chandigarh, Haryana
    "shimla": 70,        // AQI for Shimla, Himachal Pradesh
    "ranchi": 140,       // AQI for Ranchi, Jharkhand
    "bengaluru": 120,    // AQI for Bengaluru, Karnataka
    "thiruvananthapuram": 100,  // AQI for Thiruvananthapuram, Kerala
    "bhopal": 180,       // AQI for Bhopal, Madhya Pradesh
    "imphal": 90,        // AQI for Imphal, Manipur
    "shillong": 110,     // AQI for Shillong, Meghalaya
    "aizawl": 80,        // AQI for Aizawl, Mizoram
    "kohima": 75,        // AQI for Kohima, Nagaland
    "bhubaneswar": 160,  // AQI for Bhubaneswar, Odisha
    "jaipur": 190,       // AQI for Jaipur, Rajasthan
    "gangtok": 50,       // AQI for Gangtok, Sikkim
    "chennai": 150,      // AQI for Chennai, Tamil Nadu
    "hyderabad": 140,    // AQI for Hyderabad, Telangana
    "agartala": 130,     // AQI for Agartala, Tripura
    "lucknow": 220,      // AQI for Lucknow, Uttar Pradesh
    "dehradun": 100,     // AQI for Dehradun, Uttarakhand
    "kolkata": 170       // AQI for Kolkata, West Bengal
};

function calculatePollution() {
    // Get the selected city
    const city = document.getElementById('city').value;
    
    // Get the pollution result element
    const pollutionResult = document.getElementById('pollution-result');
    const selectedCityDisplay = document.getElementById('selected-city');
    
    // Check if the city exists in the pollution data
    if (pollutionData[city]) {
        // Display the pollution rate
        pollutionResult.textContent = pollutionData[city] + " AQI";  // Display AQI for selected city
        selectedCityDisplay.textContent = city.charAt(0).toUpperCase() + city.slice(1);
    } else {
        // If city not found, show an error
        pollutionResult.textContent = "N/A";
        selectedCityDisplay.textContent = "-";
    }
}
