import urls from "../utils/url";
// import uri from "../utils/urls";

async function fetchClients() {
    try {
        const response = await fetch(urls.server + "clients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });

        const res = await response.json();

        return res

    } catch (err) {
        return Promise.reject({ error: true, message: 'An unexpected error occured, Please click the button below to reload this page' })
    }
}

export default fetchClients