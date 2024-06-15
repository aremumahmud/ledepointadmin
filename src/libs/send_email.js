import urls from "../utils/url";

async function SendEmail(data) {
    try {
        const response = await fetch(urls.server + "send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"

            },
            body: JSON.stringify(data)
        });

        const res = await response.json();

        return res

    } catch (err) {
        return Promise.reject({ error: true, message: 'An unexpected error occured, Please click the button below to reload this page' })
    }
}

export default SendEmail