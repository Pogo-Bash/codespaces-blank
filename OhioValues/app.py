from flask import Flask, send_from_directory, make_response
from flask_caching import Cache
import os
from flask_compress import Compress

app = Flask(__name__, static_folder="dist", static_url_path="/")
cache = Cache(app, config={"CACHE_TYPE": "simple"})  # Use in-memory caching
Compress(app)

@app.route("/static/<path:filename>")
@cache.cached(timeout=3600)  # Cache for 1 hour
def static_files(filename):
    file_path = os.path.join(app.static_folder, "static", filename)
    if os.path.exists(file_path):
        response = make_response(send_from_directory(os.path.join(app.static_folder, "static"), filename))
        response.headers["Cache-Control"] = "public, max-age=3600"  # Set client-side caching
        return response
    return "File not found", 404

@app.route("/")
def serve_index():
    return send_from_directory(app.static_folder, "index.html")

@app.route("/values.html")
def serve_values():
    return send_from_directory(app.static_folder, "values.html")

@app.route("/<path:path>")
def serve_static(path):
    file_path = os.path.join(app.static_folder, path)
    if os.path.exists(file_path):
        return send_from_directory(app.static_folder, path)
    return send_from_directory(app.static_folder, "index.html")  # Fallback to index.html for unknown paths

if __name__ == "__main__":
    from waitress import serve
    port = int(os.environ.get("PORT", 8080))
    serve(app, host="0.0.0.0", port=port)
