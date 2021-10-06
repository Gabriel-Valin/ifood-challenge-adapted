## Ifood Challenge - Adapted 🎵

<p>Create a micro-service able to accept RESTful requests receiving as parameter
either city name or lat long coordinates and returns a playlist (only track
names is fine) suggestion according to the current temperature.</p>


## Business Rules
  - ✅ If temperature (celcius) is above 30 degrees, suggest tracks for party
  - ✅ In case temperature is between 15 and 30 degrees, suggest pop music tracks
  - ✅ If it's a bit chilly (between 10 and 14 degrees), suggest rock music tracks
  - ✅ Otherwise, if it's freezing outside, suggests classical music tracks


## Hints
You can make usage of OpenWeatherMaps API (https://openweathermap.org) to fetch
temperature data and Spotify (https://developer.spotify.com) to suggest the
tracks as part of the playlist.

<b>I preffered use a mock of playlists from youtube (./src/data/data-sources/playlists.ts ✔️</b>

## Architecture
  - I didn't use TDD metodology 'cause i wanted to do fast and functional, but, i'm thinking about implementing =).
  - I didn't decouple my API of Express too, but i must decouple in future.

## Good Practices
  - ✅ Design Patterns
  - ✅ SOLID
  - ✅ Conventional Commits
  - ✅ Pattern Code
  - ✅ Dotenv
  - ✅ IOC (Dependency Inversion)
  - ✅ BDD 