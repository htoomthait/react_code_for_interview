# Dummy auth api calling
curl -X POST http://localhost:8000/api/authenticate -H "Content-Type: application/json" -d '{"username":
 "admin", "password": "admin1234"}'