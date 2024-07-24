import * as url from "node:url";

export const images = [
    'url("https://images.unsplash.com/photo-1720831992796-dfce4a96e885?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1721163202587-f1f7ba17c0cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
    'url("https://images.unsplash.com/photo-1721086130975-83605296fdbb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
];

export const getWeatherData = async () => {
    const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Phnom%20Penh';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '65644fa2f4msh4c1e72f7d00a2f6p1da05ejsnb1e6fdd38257',
            'x-rapidapi-host': 'weatherapi-com.p.rapidapi.com',
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
        return null; // Return null in case of error
    }
};
export const getQuote = async () => {
    const url = "https://type.fit/api/quotes";
    const option = {
        method: 'GET',

    }
    try {
        const response = await fetch(url, option);
        const json = await response.json();
        console.log(json);
        if (json.length > 0) {
            const randomIndex = Math.floor(Math.random() * json.length);
            return json[randomIndex];
        }
    } catch (error) {
        console.log(error);
        return null; // Return null in case of error
    }
}


export const getPhoto = async () => {
    const url = 'https://api.unsplash.com/photos';
    const apiKey = 'jCude2MTi4e_bxyZDHJpc3MIMH8qrQsX_lYsB9gTnvY';
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Client-ID ${apiKey}`,
        },
    };

    try {
        const response = await fetch(url, options);
        const json = await response.json();
        console.log(json);
        return json;
    } catch (error) {
        console.log(error);
        return null; // Return null in case of error
    }
};
