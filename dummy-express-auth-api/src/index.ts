import app from "./app";



const PORT = process.env.SERVICE_PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})

export default app;


