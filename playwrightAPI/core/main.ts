const streets = [
    "Market St", "Mission St", "Van Ness Ave", "Folsom St", "Howard St",
    "Castro St", "Divisadero St", "Lombard St", "Bay St", "Pine St",
    "California St", "Geary Blvd", "Fillmore St", "24th St", "Haight St"
];

const districts = [
    "Mission District", "Castro", "SOMA", "Nob Hill", "Chinatown",
    "North Beach", "Sunset District", "Richmond District", "Noe Valley",
    "Financial District", "Marina District", "Twin Peaks"
];

const zipCodes = [
    "94102", "94103", "94104", "94105", "94107",
    "94108", "94109", "94110", "94112", "94114",
    "94115", "94116", "94117", "94118", "94121",
    "94122", "94123", "94124", "94127", "94131"
];

const companyName = [
    "Prime Properties", "Urban Nest", "Dream Domain", "Gloden Key Realty", "Summit Realty Group", "Haven Homes",
    "Eagle Eye Properties", "Ocean View Estates", "Sunset Hill Realty", "Vista Verde Properties",
    "Mountain Peak Homes", "River Run Real Estate", "Cypress Creek Properties", "Pine Ridge Realty",
    "Metro Home Advisors", "Oasis Estates", "Equity Estates"
];

function randomCompanyName() {
    const idx = Math.floor(Math.random() * companyName.length);
    return companyName[idx] ?? "Unknown Company";
}

function randomItem<T>(arr: T[]): T {
    if (!arr.length) throw new Error("Array is empty");
    return arr[Math.floor(Math.random() * arr.length)]!;
}

function randomFullAddress() {
    const streetNumber = Math.floor(100 + Math.random() * 9000);
    const street = randomItem(streets);
    const district = randomItem(districts);
    const zipCode = randomItem(zipCodes);

    return `${streetNumber} ${street}, ${district}, San Francisco, CA ${zipCode}`;
}

function randomPhoneNumber(): string {
    const last4 = Math.floor(1000 + Math.random() * 9000);
    return `669-${last4}`;
}

function randomGetCustomerId(): string {
    const custID = Math.floor(10 + Math.random() * 90);
    return `${custID}`;
}

function randomEmail(companyName: string): string {
    // Clean up input
    const words = companyName
        .trim()
        .split(/\s+/)        // handle multiple spaces
        .filter(Boolean);    // remove empty strings

    // Handle single-word names like "Company"
    if (words.length < 2) {
        const baseRaw = words[0] ?? "company";
        const base = baseRaw.toLowerCase().replace(/[^a-z0-9]/g, "") || "company";
        const num = String(Math.floor(Math.random() * 1000)).padStart(3, "0");
        return `${base}.${num}@${base}corp.com`;
    }

    // Multi-word company
    const firstName = (words[0] ?? "company").toLowerCase().replace(/[^a-z0-9]/g, "");
    const lastName  = (words[1] ?? "company").toLowerCase().replace(/[^a-z0-9]/g, "");
    const fullLocal = `${firstName}${lastName}`;

    const num = String(Math.floor(Math.random() * 1000)).padStart(3, "0");

    // Domain uses first word only (as you wanted)
    const domain = `${firstName}.com`;

    return `${fullLocal}.${num}@${domain}`;
}

function quantityGenerator(min: number, max: number): number {
    return Math.floor(Math.random() * 5) + 1;
}

function unitPriceGenerator(min: number, max: number): number {
    const randomNumbers = Math.floor(Math.random() *( 99999 - 10000 +1)) + 10000;
    const price = String(randomNumbers).padStart(5, '0');
    return Number(price);
}

function productGerenerator(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// export functions
export {
    randomCompanyName,
    randomFullAddress,
    randomEmail,
    randomPhoneNumber,
    randomGetCustomerId,
    quantityGenerator,
    unitPriceGenerator,
    productGerenerator
};