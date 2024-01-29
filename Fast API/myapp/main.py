from fastapi import FastAPI
from typing import Optional
import schemas


import uvicorn


app = FastAPI()


@app.get("/")
def root():
    return {"data": {"name": "this is good"}}


@app.get("/blog")
def blog(limit=10, published: bool = True, sort: Optional[str] = None):
    return {f"All blogs {limit} {published}"}


@app.post("/blog")
def create_blog(blog: schemas.Blog):
    return {f"{blog}"}


@app.get("/blog/{id}/comments")
def blog_comments(id, limit=10):
    return {f"All comments {limit}"}

# for debugging purposes
# if __name__ == "__main__":
#     uvicorn.run(app, host='localhost', port=8000)
