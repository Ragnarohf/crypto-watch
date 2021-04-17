import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
  return (
    <div className="bg-blue-50 pt-5 text-center min-h-screen">
      <Head>
        <title>{page}</title>
      </Head>
      <header className="container-lg">
        <h1 className="text-5xl mb-2">CRYPTO WATCH</h1>
        <div className="inline-grid grid-cols-2 gap-x-10 p-4">
          <Link href="/">
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              Acceuil
            </button>
          </Link>
          <Link href="/about">
            <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
              A propos
            </button>
          </Link>
        </div>
        <div>
          <Image
            src="/crypto.jpg"
            alt="header-img"
            width="400"
            height="25"
            className="rounded-3xl object-cover "
            quality={100}
          ></Image>
        </div>
      </header>
      <main className="pt-4 mw-20">{children}</main>
      <footer className="p-10">
        <Image
          src="/crypto.jpg"
          alt="footer-img"
          width="400"
          height="25"
          className="rounded-3xl object-cover "
          quality={100}
        ></Image>
        <ul className="pt-10 pb-4 flex justify-around">
          <li>A propos</li>
          <li>Qui sommes nous?</li>
          <li>Ragna_dev 2021</li>
        </ul>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          doloribus et quisquam recusandae deserunt. Magni eveniet qui, a
          necessitatibus expedita est sunt dolorum voluptates totam. Nulla odit
          dicta, debitis maiores reprehenderit est voluptates nesciunt, beatae
          sapiente excepturi aspernatur expedita distinctio officiis similique?
          Facilis error doloremque ipsam at sequi cumque tenetur.
        </p>
      </footer>
    </div>
  );
}
