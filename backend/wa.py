import requests

TOKEN = "oFXa8g4kJEyR4FAR51WX"

def kirim_wa(nomor, pesan):

    url = "https://api.fonnte.com/send"

    headers = {
        "Authorization": TOKEN
    }

    data = {
        "target": nomor,
        "message": pesan
    }

    response = requests.post(
        url,
        data=data,
        headers=headers
    )

    print(response.text)

    return response.json()