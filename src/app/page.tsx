import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/faabc6d6-cf32-40ed-8994-8731dfb74f80-k68oyj.png",
  "https://utfs.io/f/290fbe52-45c7-4a2f-8e57-4e62f1eb53d6-iwccy5.png",
  "https://utfs.io/f/23380190-c17e-4fb8-95e9-0c7b10a0ab24-8pjb3t.png",
  "https://utfs.io/f/aa1f229f-bf09-42bd-a4d7-23a283b1e041-9ee98j.48.49.png",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url: url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();

  console.log("🚀 ~ HomePage ~ posts:", posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
