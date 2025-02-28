export async function GET() {
    const posts = [
      { id: 1, name: "Thu Ta Aung", body: "This is libarry name 1" },
      { id: 2, name: "Thate De Aung", body: "This is libarry name 2" },
    ];
    return Response.json(posts);
  }
  