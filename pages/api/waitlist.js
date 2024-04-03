const API = `https://api.getwaitlist.com/api/v1/waiter`;
const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
};

export default function handler(req, res) {
    const { email } = JSON.parse(req.body);
    options["body"] = `{"email": "${email}", "api_key": "${process.env.WAITLIST_API_KEY}"}`

    fetch(API, options)
        .then((response) => response.json())
        .then((response) => res.status(200).json({ referral_link: response.referral_link } ))
        .catch((err) => res.status(400).json(err));
}
