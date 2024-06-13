import Link from 'next/link';
import Image from 'next/image'

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <Image className='w-20 h-20 mx-auto rounded-full' src='/images/reallymad.png' alt='Profile Picture' />
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          {name}
        </Link>
      </p>
    </header>
  );
}
