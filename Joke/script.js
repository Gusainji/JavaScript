let myJoke = [
    {
      "category": "Programming",
      "type": "single",
      "joke": "A SQL statement walks into a bar and sees two tables.\nIt approaches, and asks \"may I join you?\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 5,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 12,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Debugging: Removing the needles from the haystack.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 40,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "UDP is better in the COVID era since it avoids unnecessary handshakes.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 259,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "The glass is neither half-full nor half-empty, the glass is twice as big as it needs to be.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 23,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 41,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Your momma is so fat, you need to switch to NTFS to store a picture of her.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": true
      },
      "id": 55,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 38,
      "safe": true,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 27,
      "safe": false,
      "lang": "en"
    },
    {
      "category": "Programming",
      "type": "single",
      "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
      "flags": {
        "nsfw": false,
        "religious": false,
        "political": false,
        "racist": false,
        "sexist": false,
        "explicit": false
      },
      "id": 221,
      "safe": true,
      "lang": "en"
    }
  ]
  
  let index = Math.floor(Math.random() * (myJoke.length - 1))
  joke.innerHTML = myJoke[index].joke