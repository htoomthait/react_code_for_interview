# Laning Route
echo "Landing Route"
curl -X GET http://localhost:8000/

echo "\n"

# Sample data request and response
echo "Sample Datat Requet and Response"
curl -X POST http://localhost:8000/api/data -H "Content-Type: application/json" -d '{"name": "John", "age": 30}'

echo "\n"