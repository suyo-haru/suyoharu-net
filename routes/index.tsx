import { Head } from "$fresh/runtime.ts"

export default function Home() {
  return (
    <>
      <Head>
        <title>すよはる</title>
        <meta name="description" content="工事中" />
        <meta name="robots" content="noindex" />
      </Head>
      <main className="pt-24 flex flex-col justify-start items-center">
        <h1 className="font-bold text-[2rem]">工事中</h1>
        <div>
          (´・ω・`)
        </div>
        <div class="maintanance-info pt-4">
          <h2>お知らせ</h2>
          <p>Cloudflareの障害により、<code>suyoharu.net</code>へのメールがしばらく届いていませんでした。</p>
          <p>もしメールが返送された場合はもう一度お送りください。
</p>
        </div>
        <address className="not-italic">
          <p className="p-4"><s>Twitter</s><span> </span><a className="text-blue-600 dark:text-blue-400" href="https://links.suyoharu.net/x">X: @suyo_haru</a></p>
        </address>
      </main>
    </>
  );
}
