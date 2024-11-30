import Image from "next/image";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Nexus</h1>
      <p>
        This is a webapp built with Next.js. It is a Progressive Web App (PWA).
      </p>
      <Image
        src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202411/chill-guy-memes-have-flooded-social-media-241142207-16x9_0.jpg?VersionId=.osD_GpxkoPy9zvr5i97YYdKPrDZAtG_&size=690:388"
        alt="Next.js PWA"
        width={1000}
        height={2000}
      />
    </main>
  );
}
