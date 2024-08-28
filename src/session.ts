export async function createSession(email: string) {
    const sessionAPI = "https://98c2juvu8a.execute-api.us-west-2.amazonaws.com/prod/session";
    const response = await fetch(sessionAPI, {
        method: "POST",
        body: JSON.stringify({
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
              },
            email: email!,
        }),
    });
    console.log("made it here");
    const data = await response.json();
    console.log("second check")
    const sessionID = data["message"];
    console.log(sessionID);
    return sessionID;
}