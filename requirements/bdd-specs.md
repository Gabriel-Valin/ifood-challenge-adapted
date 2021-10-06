## BDD - Requirements

## Route: /playlist-temp
  - ✅ Client should send city in query params
  - ✅ Return STATUS CODE 400 if city not provided
  - ✅ Do request to OpenWeatherApi 
  - ✅ Return STATUS CODE 400 if city not exists
  - ✅ Get temperature from city
  - ✅ Should guaranteed temp will be Celsius
  - ✅ Verify the temp by business rules
  - ✅ Return a playlist specific

## Route: /playlist-lat-long
  - ✅ Client should send latitude and longitude in query params
  - ✅ Return STATUS CODE 400 if latitude and longitute not provided
  - ✅ Do request to OpenWeatherApi
  - ✅ Return STATUS CODE 400 if city not exists
  - ✅ Get temperature from city
  - ✅ Should guaranteed temp will be Celsius
  - ✅ Verify the temp by business rules
  - ✅ Return a playlist specific