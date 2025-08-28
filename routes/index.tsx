import { Head } from "$fresh/runtime.ts"

export default function Home() {
  return (
    <>
      <Head>
        <title>すよはる</title>
        <meta name="description" content="工事中" />
      </Head>
      <main className="content-center flex flex-col justify-start items-center pt-24">
        <h1 className="font-bold text-[2rem]">工事中</h1>
        <div>
          (´・ω・`)
        </div>
        <address className="not-italic">
          <p className="p-4"><s>Twitter</s><span> </span><a className="text-blue-600 dark:text-blue-400" href="https://links.suyoharu.net/x">X: @suyo_haru</a></p>
        </address>
      </main>
    </>
  );
}
