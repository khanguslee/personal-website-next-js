import LinkIcon from '@/components/LinkIcon';
import Head from 'next/head';
import Link from 'next/link';

import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Home() {
  return (
    <>
      <Head>
        <title>Angus Lee - Software Engineer | khanguslee.dev</title>
        <meta
          name="description"
          content="Angus Lee is an experienced software engineer dedicated to developing innovative solutions that positively impact people's lives. With a passion for problem-solving, he leverages his expertise in programming to create effective and efficient software that addresses real-world challenges. Visit his website to learn more about his skills and experience."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={'w-screen h-screen flex flex-col justify-center gap-y-8'}>
        <h1
          className={
            'text-dracula-pink text-center md:text-8xl sm:text-6xl text-4xl font-medium'
          }
        >
          khanguslee
        </h1>

        <div className={'text-center'}>
          <p className="text-dracula-green text-sm">
            Software Engineer @{' '}
            <Link
              href="https://www.mongodb.com/products/charts"
              target="_blank"
              className="underline hover:text-dracula-green-900 duration-500"
            >
              MongoDB Atlas Charts
            </Link>
          </p>

          <div className="text-4xl mt-2 flex flex-row justify-center space-x-8">
            <LinkIcon
              link="https://www.linkedin.com/in/kuanhoulee/"
              Icon={FaLinkedin}
            />

            <LinkIcon link="https://github.com/khanguslee" Icon={FaGithub} />

            <LinkIcon
              link="https://www.instagram.com/khanguslee"
              Icon={FaInstagram}
            />
          </div>
        </div>
      </div>
    </>
  );
}
