import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "@vogel.atmkt | Links",
  description: "Powerful tool for maketers and social media managers",
};

const links = [
  {
    name: "Meu Canal noYouTube",
    url: "https://www.youtube.com/@vogelcodes",
    img: "/yt.webp",
  },
  {
    name: "Meu Perfil no Instagram",
    url: "https://instagram.com/daniel_vogel",
    img: "/instagram-logo.svg",
  },
];

export default function Links() {
  return (
    <div className="flex flex-col items-center min-h-screen py-2">
      <main className="flex flex-col w-full max-w-3xl flex-1 px-2 pt-8 text-center bg-green">
        <div className="pb-4 text-blue flex flex-col items-center">
          <img
            width="96"
            height="96"
            className="w-27 rounded-full"
            src="/vogel-links.svg"
            alt="logo"
          ></img>
          <p className="mt-3 font-medium text-2xl">@vogel.atmkt</p>
          <p className="mt-3 font-normal w-5/6 text-base">
            Aumente o seu potencial de faturamento com nossas automações
          </p>
        </div>

        <div className="flex  text-white flex-col w-full space-y-4 mx-auto my-4 justify-between">
          {links.map((link, i) => (
            <a key={i} href={link.url} target="_blank">
              <div className="bg-[#000530] rounded-md px-4 py-10 border-2 border-green text-cream h-16 duration-200 place-items-center justify-between flex">
                <Image src={link.img} width={48} height={48} alt="logo" />
                <p className="font-semibold text-balance w-full text-base">
                  {link.name}
                </p>
              </div>
            </a>
          ))}
        </div>
      </main>

      <footer className="flex flex-col justify-end w-full bg-green h-12 border-t">
        <p className="text-center"> Vogel Codes - {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}
