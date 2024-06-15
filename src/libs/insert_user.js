import urls from "../utils/url";

async function InsertClientData(data) {
    try {
        const response = await fetch(urls.server + "clients", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("site")
            },
            body: JSON.stringify(data)
        });

        const res = await response.json();

        return res

    } catch (err) {
        return Promise.reject({ error: true, message: 'An unexpected error occured, Please click the button below to reload this page' })
    }
}

export default InsertClientData