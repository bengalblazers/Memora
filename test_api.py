from fastapi import FastAPI, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from pathlib import Path
import uvicorn  # Import uvicorn

app = FastAPI()

# Path to the directory containing index.html
static_dir = Path(__file__).parent

# Mount the static directory
app.mount("/", StaticFiles(directory=static_dir, html=True), name="static")

# GET request route for serving index.html
@app.get("/", response_class=HTMLResponse)
async def serve_index():
    with open(static_dir / "index.html", "r", encoding="utf-8") as file:
        return HTMLResponse(content=file.read())

# POST request route example
@app.post("/submit", response_class=JSONResponse)
async def handle_post(request: Request):
    # Assuming the body contains a JSON payload
    data = await request.json()  # Parses JSON payload from the request body
    return JSONResponse(content={"message": "Data received", "data": data})

# Run the app using uvicorn directly from Python
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)
